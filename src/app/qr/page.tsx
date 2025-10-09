"use client";

import Image from 'next/image';
import Head from 'next/head';

export default function QRPage() {
  return (
    <>
      <Head>
        <title>YakalaHadi - Fırsatları Kaçırma</title>
        <meta name="description" content="YakalaHadi ile gerçek zamanlı fırsat ve kampanyaları kaçırma. Hemen indir, fırsatları yakala!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#6A0DAD',
        textAlign: 'center',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}>
        
        {/* Header */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: '#6A0DAD',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
            </svg>
          </div>
        </div>

        {/* Logo and Title */}
        <div style={{ 
          marginBottom: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px'
        }}>
          <Image 
            src="/YakalaHadi1.png" 
            alt="YakalaHadi" 
            width={360} 
            height={96}
            style={{
              marginBottom: '8px',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              width: '100%',
              height: 'auto',
              maxWidth: '320px'
            }}
          />
          
          {/* Logo */}
          <Image 
            src="/logo5.png" 
            alt="YakalaHadi Logo" 
            width={220} 
            height={220}
            style={{ 
              borderRadius: '35px',
              display: 'block',
              margin: '0 auto 15px auto',
              width: '180px',
              height: '180px',
              maxWidth: '200px',
              maxHeight: '200px'
            }}
          />
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(1rem, 4vw, 1.2rem)',
          fontWeight: '500',
          margin: '0 0 40px 0',
          color: '#6A0DAD',
          lineHeight: '1.4',
          maxWidth: '400px',
          textAlign: 'center',
          padding: '0 16px'
        }}>
          Hemen indir fırsatları yakala
        </p>

        {/* Download Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          maxWidth: '280px',
          padding: '0 16px'
        }}>
          
          {/* App Store Button */}
          <a 
            href="https://apps.apple.com/tr/app/yakalahadi/id6752722925?l=tr" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
              width: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Image 
              src="/apple.webp" 
              alt="App Store'dan İndir" 
              width={280} 
              height={80}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                maxWidth: '280px',
                minWidth: '200px'
              }}
            />
          </a>

          {/* Google Play Button */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.yakalahadi.app&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
              width: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Image 
              src="/google-play.webp" 
              alt="Google Play'den İndir" 
              width={280} 
              height={80}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(52,168,83,0.3)',
                maxWidth: '280px',
                minWidth: '200px'
              }}
            />
          </a>
        </div>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          fontSize: 'clamp(10px, 3vw, 12px)',
          opacity: '0.7',
          color: '#6A0DAD',
          padding: '0 16px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '400px'
        }}>
          © 2025 YakalaHadi. Tüm hakları saklıdır.
        </div>
      </div>
    </>
  );
}
