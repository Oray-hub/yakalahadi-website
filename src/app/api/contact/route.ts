import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    console.log('API çağrısı başladı');
    const { name, surname, email, subject, message } = await req.json();
    console.log('Form verileri alındı:', { name, surname, email, subject, message });

    // Gerekli alanları kontrol et
    if (!name || !surname || !email || !message) {
      console.log('Eksik alanlar var');
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

    console.log('API key mevcut, email gönderme başlıyor...');

    // Email gönder
    const emailResult = await resend.emails.send({
      from: 'YakalaHadi <noreply@yakalahadi.com>',
      to: ['info@yakalahadi.com'],
      subject: subject || 'İletişim Formu - YakalaHadi',
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'YakalaHadi Contact Form'
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>YakalaHadi İletişim Formu</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px;">
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #333; margin: 0; font-size: 24px;">YakalaHadi</h1>
                <p style="color: #666; margin: 10px 0 0 0;">İletişim Formu Mesajı</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Ad Soyad:</td>
                    <td style="padding: 8px 0; color: #333;">${name} ${surname}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                    <td style="padding: 8px 0;">
                      <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333;">Konu:</td>
                    <td style="padding: 8px 0; color: #333;">${subject || 'Belirtilmemiş'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Mesaj:</td>
                    <td style="padding: 8px 0; color: #333;">
                      <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e9ecef; margin-top: 5px;">
                        ${message.replace(/\n/g, '<br>')}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                <p style="color: #666; font-size: 12px; margin: 0;">
                  Bu mesaj YakalaHadi web sitesi iletişim formundan gönderilmiştir.<br>
                  Yanıtlamak için: <a href="mailto:${email}" style="color: #007bff;">${email}</a>
                </p>
                <p style="color: #999; font-size: 11px; margin: 10px 0 0 0;">
                  © 2024 YakalaHadi. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `Ad: ${name} ${surname}\nEmail: ${email}\nKonu: ${subject || 'Belirtilmemiş'}\nMesaj: ${message}\n\nYanıtlamak için: ${email}`
    });

    console.log('Email gönderme sonucu:', emailResult);
    console.log('Email başarıyla gönderildi');

    return NextResponse.json({ success: true, message: 'Mesaj başarıyla gönderildi' });
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    console.error('Hata detayları:', {
      message: error instanceof Error ? error.message : 'Bilinmeyen hata',
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { success: false, error: 'Mesaj gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 