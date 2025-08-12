import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Resend API key kontrolü
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable eksik');
      return NextResponse.json(
        { success: false, error: 'Sunucu yapılandırma hatası' },
        { status: 500 }
      );
    }

    // Email gönder
    await resend.emails.send({
      from: 'YakalaHadi <noreply@yakalahadi.com>',
      to: ['info@yakalahadi.com'],
      subject: subject || 'İletişim Formu - YakalaHadi',
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">Yeni İletişim Formu Mesajı</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Ad Soyad:</strong> ${name} ${surname}</p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Konu:</strong> ${subject || 'Belirtilmemiş'}</p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Mesaj:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px; border: 1px solid #e9ecef;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
              Bu mesaj YakalaHadi web sitesi iletişim formundan gönderilmiştir.
            </div>
          </div>
        </div>
      `,
      text: `Ad: ${name} ${surname}\nEmail: ${email}\nKonu: ${subject || 'Belirtilmemiş'}\nMesaj: ${message}`
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