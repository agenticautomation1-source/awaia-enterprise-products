import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      topics,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !company ||
      !topics
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "AWAIA Website <noreply@automatewithaiagent.com>",
      to: process.env.BRIEFING_EMAIL!,
      subject: "New Executive Briefing Request",

      html: `
        <h2>Executive Briefing Request</h2>

        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>

        <p><strong>Topics:</strong></p>

        <p>${topics}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

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