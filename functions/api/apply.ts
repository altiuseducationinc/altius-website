interface Env {
  GOOGLE_SHEETS_WEBHOOK_URL?: string;
  ADMIN_EMAIL?: string;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export async function onRequest(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed.' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const formData = await request.formData();

    const fullName = String(formData.get('fullName') ?? '').trim();
    const currentGrade = String(formData.get('currentGrade') ?? '').trim();
    const targetField = String(formData.get('targetField') ?? '').trim();
    const durationTimeframe = String(formData.get('durationTimeframe') ?? '').trim();
    const facultyName = String(formData.get('facultyName') ?? '').trim();
    const agreeTerms = formData.get('agreeTerms');
    const isTermsAccepted = agreeTerms === 'true' || agreeTerms === 'on';
    const confirmationFile = formData.get('confirmationLetter') as File | null;

    const json = (body: unknown, status = 200) =>
      new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json' },
      });

    if (!fullName || !currentGrade || !targetField || !durationTimeframe || !facultyName) {
      return json(
        { error: 'All text fields are required. Please fill in the complete form.' },
        400
      );
    }

    if (!isTermsAccepted) {
      return json(
        { error: 'You must agree to the Terms & Conditions and liability disclaimer to proceed.' },
        400
      );
    }

    if (!confirmationFile || confirmationFile.size === 0) {
      return json(
        { error: 'Please upload a valid Letter of Confirmation (PDF or Document).' },
        400
      );
    }

    const referenceId = `ALT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const fileBuffer = await confirmationFile.arrayBuffer();
    const fileBase64 = arrayBufferToBase64(fileBuffer);

    const payload = {
      referenceId,
      submissionDate,
      fullName,
      currentGrade,
      targetField,
      durationTimeframe,
      facultyName,
      fileName: confirmationFile.name || 'confirmation-letter.pdf',
      fileMimeType: confirmationFile.type || 'application/pdf',
      fileSize: confirmationFile.size,
      fileBase64,
    };

    const webhookUrl = env.GOOGLE_SHEETS_WEBHOOK_URL || '';

    if (!webhookUrl) {
      console.warn(
        '⚠️ [Altius Admissions] GOOGLE_SHEETS_WEBHOOK_URL not configured.\n' +
          `Simulating successful submission for testing.\n` +
          `Candidate: ${fullName} | Grade: ${currentGrade} | Field: ${targetField}`
      );

      return json({
        success: true,
        referenceId,
        simulated: true,
        message:
          'Application received! Note: The Google Sheets webhook is not yet configured, so the record was logged instead of submitted.',
      });
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const responseText = await webhookResponse.text();
      console.error('Google Sheets webhook error:', webhookResponse.status, responseText);
      return json(
        { error: 'Unable to submit your application to the admissions spreadsheet. Please try again.' },
        500
      );
    }

    return json({
      success: true,
      referenceId,
      message: 'Application and confirmation document submitted successfully! Our admissions team will review your application.',
    });
  } catch (error: unknown) {
    console.error('Error submitting program application:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred during submission.';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
