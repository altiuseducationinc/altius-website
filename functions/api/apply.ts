import nodemailer from 'nodemailer';

interface Env {
  ADMIN_EMAIL?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  SMTP_FROM_NAME?: string;
  SMTP_FROM_EMAIL?: string;
}

function readFormData(formData: FormData): Record<string, FormDataEntryValue | null> {
  const result: Record<string, FormDataEntryValue | null> = {};
  for (const key of ['fullName', 'currentGrade', 'targetField', 'durationTimeframe', 'facultyName', 'agreeTerms']) {
    result[key] = formData.get(key);
  }
  return result;
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
    const fields = readFormData(formData);

    const fullName = String(fields.fullName ?? '').trim();
    const currentGrade = String(fields.currentGrade ?? '').trim();
    const targetField = String(fields.targetField ?? '').trim();
    const durationTimeframe = String(fields.durationTimeframe ?? '').trim();
    const facultyName = String(fields.facultyName ?? '').trim();
    const agreeTerms = fields.agreeTerms;
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

    const arrayBuffer = await confirmationFile.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);
    const fileName = confirmationFile.name || 'confirmation-letter.pdf';
    const fileSizeFormatted = `${(confirmationFile.size / (1024 * 1024)).toFixed(2)} MB`;

    const recipientEmail = env.ADMIN_EMAIL || 'sahilpoll1802@gmail.com';
    const smtpHost = env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(env.SMTP_PORT) || 465;
    const smtpSecure = env.SMTP_SECURE !== 'false';
    const smtpUser = env.SMTP_USER || '';
    const smtpPass = env.SMTP_PASS || '';
    const fromName = env.SMTP_FROM_NAME || 'Altius FutureReady Admissions';
    const fromEmail = env.SMTP_FROM_EMAIL || smtpUser || recipientEmail;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Program Application - ${fullName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #0B1B3D 0%, #1D4ED8 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
    .badge { display: inline-block; background: rgba(212, 175, 55, 0.2); border: 1px solid #D4AF37; color: #D4AF37; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
    .title { font-size: 24px; font-weight: 700; margin: 0 0 6px 0; color: #ffffff; }
    .subtitle { font-size: 13px; color: #cbd5e1; margin: 0; }
    .content { padding: 28px 24px; }
    .ref-box { background: #f1f5f9; border-left: 4px solid #D4AF37; padding: 12px 16px; border-radius: 4px; margin-bottom: 24px; font-size: 13px; }
    .ref-number { font-weight: bold; color: #0B1B3D; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table th { text-align: left; padding: 10px 12px; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; width: 38%; }
    .table td { padding: 10px 12px; font-size: 14px; font-weight: 600; color: #0B1B3D; border-bottom: 1px solid #e2e8f0; }
    .disclaimer-box { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 16px; font-size: 12px; color: #92400e; line-height: 1.5; margin-bottom: 24px; }
    .disclaimer-title { font-weight: bold; margin-bottom: 6px; display: flex; align-items: center; gap: 6px; }
    .attachment-card { background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px; display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
    .footer { background: #0B1B3D; color: #94a3b8; font-size: 11px; text-align: center; padding: 20px; }
    .footer a { color: #D4AF37; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Official Application Received</div>
      <h1 class="title">New Program Application</h1>
      <p class="subtitle">Altius FutureReady™ & Specialty Programs Admissions</p>
    </div>

    <div class="content">
      <div class="ref-box">
        <strong>Reference ID:</strong> <span class="ref-number">${referenceId}</span><br/>
        <strong>Timestamp:</strong> ${submissionDate}
      </div>

      <table class="table">
        <tr>
          <th>Full Name</th>
          <td>${fullName}</td>
        </tr>
        <tr>
          <th>Current Grade / Year</th>
          <td>${currentGrade}</td>
        </tr>
        <tr>
          <th>Target Field / Domain</th>
          <td>${targetField}</td>
        </tr>
        <tr>
          <th>Expected Timeframe</th>
          <td>${durationTimeframe}</td>
        </tr>
        <tr>
          <th>Approving Faculty</th>
          <td>${facultyName}</td>
        </tr>
        <tr>
          <th>Attached Letter</th>
          <td>${fileName} (${fileSizeFormatted})</td>
        </tr>
      </table>

      <div class="attachment-card">
        <div>
          <strong style="color: #0B1B3D; font-size: 13px;">Attached Document:</strong><br/>
          <span style="color: #64748b; font-size: 12px;">${fileName} &bull; ${fileSizeFormatted} (Attached directly to this email)</span>
        </div>
      </div>

      <div class="disclaimer-box">
        <div class="disclaimer-title">✓ Terms & Conditions Consent Verified</div>
        The applicant confirmed agreement to the Unpaid Program Status, Voluntary Participation policy, and Institutional Liability Waiver.
      </div>
    </div>

    <div class="footer">
      This is an automated notification from the <strong>Altius Education</strong> admissions system.<br/>
      Destination: <a href="mailto:${recipientEmail}">${recipientEmail}</a>
    </div>
  </div>
</body>
</html>
`;

    if (!smtpUser || !smtpPass) {
      console.warn(
        '⚠️ [Altius Admissions] SMTP credentials (SMTP_USER / SMTP_PASS) not configured.\n' +
        `Simulating successful dispatch to ${recipientEmail} for testing.\n` +
        `Candidate: ${fullName} | Grade: ${currentGrade} | Field: ${targetField} | File: ${fileName} (${fileSizeFormatted})`
      );

      return json({
        success: true,
        referenceId,
        simulated: true,
        message:
          'Application received! Note: SMTP credentials are not yet set, so email was logged to the server console in development mode.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: recipientEmail,
      subject: `[New Program Application] ${fullName} - ${targetField} (${referenceId})`,
      text: `New Program Application:\n\nName: ${fullName}\nGrade: ${currentGrade}\nField: ${targetField}\nDuration: ${durationTimeframe}\nFaculty: ${facultyName}\nReference ID: ${referenceId}\n\nAttached: ${fileName}`,
      html: emailHtml,
      attachments: [
        {
          filename: fileName,
          content: fileBuffer,
          contentType: confirmationFile.type || 'application/pdf',
        },
      ],
    });

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
