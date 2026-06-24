import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const contactEmail =
      process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      return NextResponse.json(
        { error: "Recipient email not configured" },
        { status: 500 }
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
      !fullName ||
      !email ||
      !organization ||
      !message
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

    await resend.emails.send({
      from:
        "AWAIA Website <noreply@automatewithaiagent.com>",

      to: contactEmail,

      subject:
        "New Contact Form Submission",

      html: `
        <h2>New Contact Request</h2>

        <p><strong>Name:</strong> ${fullName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Organization:</strong> ${organization}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Contact Form Error:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to send request",
      },
      {
        status: 500,
      }
    );
  }
}