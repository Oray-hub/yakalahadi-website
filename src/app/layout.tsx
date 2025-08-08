import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Header from './Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'YakalaHadi',
  description: 'Gerçek zamanlı fırsat ve kampanya uygulaması',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-page="default"
      >
        <Header />
        <main>{children}</main>
        <footer style={{
          background: 'rgba(255,186,120,0.92)',
          color: '#fff',
          padding: '30px 20px',
          marginTop: '40px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            gap: '120px',
            flexWrap: 'wrap'
          }}>
            {/* Sol: Logo ve slogan */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              textAlign: 'center',
              flex: '0 0 auto'
            }}>
              <Image 
                src="/logo4.png" 
                alt="YakalaHadi Logo" 
                width={120} 
                height={120} 
                style={{marginBottom: '4px'}} 
              />
              <div style={{
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '1.2',
                color: '#6A0DAD',
                textAlign: 'center'
              }}>
                Fırsatları yakala, bütçeni koru!
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '1.2',
                color: '#6A0DAD',
                textAlign: 'center'
              }}>
                Akıllı alışverişin yeni yolu!
              </div>
            </div>
            
            {/* Sağ: İletişim ve linkler */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: '1 1 400px',
              maxWidth: '500px'
            }}>
              <div style={{
                fontWeight: '700',
                fontSize: '20px',
                marginBottom: '8px',
                color: '#6A0DAD'
              }}>
                İletişim
              </div>
              <div style={{
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '12px',
                color: '#fff'
              }}>
                <a href="mailto:info@yakalahadi.com" style={{
                  color: '#fff',
                  textDecoration: 'underline'
                }}>
                  info@yakalahadi.com
                </a>
                <br/>
                Toros mah. 78143 sk. Hilal Tower No: 4/A Çukurova, Adana
              </div>
            </div>
            
            {/* Yasal Bilgiler */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: '1 1 300px',
              maxWidth: '400px'
            }}>
              <div style={{
                fontWeight: '700',
                fontSize: '20px',
                marginBottom: '8px',
                color: '#6A0DAD'
              }}>
                Yasal Bilgiler
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <Link href="/kullanici-sozlesmesi" style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}>
                  Kullanım koşulları
                </Link>
                <Link href="/gizlilik-politikasi" style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}>
                  Gizlilik ve Güvenlik Politikası
                </Link>
                <Link href="/mesafeli-satis-sozlesmesi" style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}>
                  Mesafeli Satış Sözleşmesi
                </Link>
                <Link href="/kvkk" style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}>
                  KVKK Aydınlatma Metni
                </Link>
                <Link href="/cayma-iptal-iade" style={{
                  color: '#fff',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}>
                  Cayma İptal ve İade Koşulları
                </Link>
              </div>
            </div>
          </div>
          <div style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '14px',
            marginTop: '16px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            opacity: '0.8'
          }}>
            © 2025 YakalaHadi. Tüm hakları saklıdır.
          </div>
        </footer>
      </body>
    </html>
  );
}
