import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  ok: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, message: "Method not allowed" });

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: "Missing fields" });
  }

  // If SMTP env vars are provided, attempt to send; otherwise just log
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromAddress = process.env.FROM_ADDRESS || smtpUser || "no-reply@example.com";
  const toAddress = process.env.TO_ADDRESS || smtpUser || "you@example.com";

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `${name} <${fromAddress}>`,
        to: toAddress,
        subject: `Portfolio contact from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("Failed to send email:", err);
      return res.status(500).json({ ok: false, message: "Failed to send email" });
    }
  }

  // No SMTP configured — log the message and return success so the client UX works.
  console.log("Contact form received:", { name, email, message });
  return res.status(200).json({ ok: true, message: "Logged (no SMTP configured)" });
}
