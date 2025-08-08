import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, surname, email, subject, message } = await req.json();

  // SMTP ayarlarını .env dosyasından al
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: 'info@yakalahadi.com',
      to: 'info@yakalahadi.com',
      subject: subject || 'İletişim Formu',
      replyTo: email,
      text: `Ad: ${name} ${surname}\nEmail: ${email}\nKonu: ${subject}\nMesaj: ${message}`,
      html: `<b>Ad:</b> ${name} ${surname}<br/><b>Email:</b> ${email}<br/><b>Konu:</b> ${subject}<br/><b>Mesaj:</b><br/>${message}`
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
} 