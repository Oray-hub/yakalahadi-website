import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, surname, email, subject, message } = await req.json();

    // Gerekli alanları kontrol et
    if (!name || !surname || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Tüm gerekli alanları doldurun' },
        { status: 400 }
      );
    }

    // Environment variables kontrolü
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP environment variables eksik');
      return NextResponse.json(
        { success: false, error: 'Sunucu yapılandırma hatası' },
        { status: 500 }
      );
    }

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // 465 portu için secure: true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      // Vercel için ek ayarlar
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email gönder
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'info@yakalahadi.com',
      to: 'info@yakalahadi.com',
      subject: subject || 'İletişim Formu - YakalaHadi',
      replyTo: email,
      text: `Ad: ${name} ${surname}\nEmail: ${email}\nKonu: ${subject || 'Belirtilmemiş'}\nMesaj: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Yeni İletişim Formu Mesajı</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Ad Soyad:</strong> ${name} ${surname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Konu:</strong> ${subject || 'Belirtilmemiş'}</p>
            <p><strong>Mesaj:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: 'Mesaj başarıyla gönderildi' });
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { success: false, error: 'Mesaj gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 