interface Env {
  GOOGLE_APPS_SCRIPT_URL?: string;
  ADMIN_EMAIL?: string;
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

    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

    const organizationName = str(body.organizationName);
    const organizationType = str(body.organizationType);
    const website = str(body.website);
    const contactName = str(body.contactName);
    const designation = str(body.designation);
    const email = str(body.email);
    const phone = str(body.phone);
    const collaborationTypes = str(body.collaborationTypes);
    const proposal = str(body.proposal);
    const additionalMessage = str(body.additionalMessage);

    const json = (payload: unknown, status = 200) =>
      new Response(JSON.stringify(payload), {
        status,
        headers: { 'Content-Type': 'application/json' },
      });

    if (
      !organizationName ||
      !organizationType ||
      !contactName ||
      !designation ||
      !email ||
      !phone
    ) {
      return json(
        {
          error:
            'Please fill in Organization, Contact and designation details (Organization Name, Type, Contact Name, Designation, Email, and Phone are required).',
        },
        400
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return json({ error: 'Please enter a valid email address.' }, 400);
    }

    if (!collaborationTypes) {
      return json(
        { error: 'Please select at least one type of collaboration.' },
        400
      );
    }

    const webhookUrl = env.GOOGLE_APPS_SCRIPT_URL || '';

    if (!webhookUrl) {
      console.warn(
        '⚠️ [Altius Partner] GOOGLE_APPS_SCRIPT_URL not configured.\n' +
          `Simulating successful submission for testing.\n` +
          `Organization: ${organizationName} | Contact: ${contactName}`
      );

      return json({
        success: true,
        applicationId: `ALT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
        simulated: true,
        message:
          'Partnership request received! Note: The Google Apps Script endpoint is not yet configured, so the record was logged instead of submitted.',
      });
    }

    const payload = {
      organizationName,
      organizationType,
      website,
      contactName,
      designation,
      email,
      phone,
      collaborationTypes,
      proposal,
      additionalMessage,
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const responseText = await webhookResponse.text();

    let responseJson: unknown = null;
    if (responseText) {
      try {
        responseJson = JSON.parse(responseText);
      } catch {
        responseJson = null;
      }
    }

    if (!webhookResponse.ok) {
      console.error('Google Apps Script error:', webhookResponse.status, responseText);
      return json(
        {
          error: responseJson && typeof (responseJson as Record<string, unknown>).error === 'string'
            ? ((responseJson as Record<string, unknown>).error as string)
            : 'Unable to submit your partnership request to our partnership spreadsheet. Please try again.',
        },
        500
      );
    }

    let applicationId = '';
    if (responseJson && typeof responseJson === 'object') {
      const record = responseJson as Record<string, unknown>;
      applicationId =
        typeof record.applicationId === 'string'
          ? record.applicationId
          : typeof record.referenceId === 'string'
          ? record.referenceId
          : '';
    }

    return json({
      success: true,
      applicationId:
        applicationId ||
        `ALT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      message:
        'Partnership request submitted successfully! Our partnerships team will review your proposal and reach out to you.',
    });
  } catch (error: unknown) {
    console.error('Error submitting partnership request:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred during submission.';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
