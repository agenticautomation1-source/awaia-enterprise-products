import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error: "Email service not configured",
        },
        {
          status: 500,
        }
      );
    }

    const contactEmail =
      process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      return NextResponse.json(
        {
          error: "Recipient email not configured",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(
      resendApiKey
    );

    const body = await req.json();

    const {
      fullName,
      email,
      organization,
      message,
    } = body;

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !organization?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          error: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Invalid email address",
        },
        {
          status: 400,
        }
      );
    }

    const internalEmail =
      await resend.emails.send({
        from:
          "AWAIA <contact@automatewithaiagent.com>",

        to: contactEmail,

        replyTo: email,

        subject:
          "New Contact Form Submission",

        html: `
          <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:32px">

            <h2>New Contact Request</h2>

            <hr>

            <p><strong>Name</strong><br>${fullName}</p>

            <p><strong>Email</strong><br>${email}</p>

            <p><strong>Organization</strong><br>${organization}</p>

            <p><strong>Message</strong></p>

            <p>${message}</p>

          </div>
        `,
      });

    if (internalEmail.error) {
      throw new Error(
        internalEmail.error.message
      );
    }

    const acknowledgementEmail =
      await resend.emails.send({
        from:
          "AWAIA <contact@automatewithaiagent.com>",

        to: email,

        subject:
          "We've received your consultation request",

        html: `
<div style="font-family:Arial,sans-serif;background:#f7f7f7;padding:40px;">

<div style="max-width:700px;margin:auto;background:#ffffff;border-radius:16px;padding:40px;">

<h2 style="margin-top:0;color:#111111;">
Thank you for contacting AWAIA.
</h2>

<p>
Dear <strong>${fullName}</strong>,
</p>

<p>
Thank you for contacting
<strong>AWAIA (Automate With AI Agent)</strong>.
</p>

<p>
We have successfully received your consultation request.
Our enterprise consulting team will review your enquiry and respond within one business day.
</p>

<hr style="margin:32px 0;">

<h3>Your Submission</h3>

<p><strong>Organization</strong><br>${organization}</p>

<p><strong>Email</strong><br>${email}</p>

<p><strong>Message</strong><br>${message}</p>

<hr style="margin:32px 0;">

<p style="margin-bottom:6px;">
Regards,
</p>

<p style="margin-top:0;">
<strong>AWAIA™</strong><br>
Automate With AI Agent
</p>

<p style="color:#666666;font-size:14px;">
Enterprise AI Systems • AI Governance • Digital Workforce
</p>

</div>

</div>
        `,
      });

    if (acknowledgementEmail.error) {
      throw new Error(
        acknowledgementEmail.error.message
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Consultation request submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Contact Form Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to submit your consultation request. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}