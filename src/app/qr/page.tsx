"use client";

import Image from 'next/image';

export default function QRPage() {
  return (
    <>
      
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
