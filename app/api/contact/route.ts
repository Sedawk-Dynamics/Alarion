import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const sanitize = (v?: string) => (v || "").trim()

type Body = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()

    const name = sanitize(body.name)
    const email = sanitize(body.email)
    const phone = sanitize(body.phone)
    const message = sanitize(body.message)

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email and Message are required" },
        { status: 400 }
      )
    }

    const subject = `New enquiry – Alarion Hospitality`

    const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "—"}

Message:
${message}
`.trim()

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;">${message}</pre>
      <hr/>
      <p>Sent from Alarion website</p>
    `

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Alarion Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject,
      text,
      html,
      replyTo: email,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Alarion contact error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
