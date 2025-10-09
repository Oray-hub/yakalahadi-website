"use client";

import Image from 'next/image';
import { useEffect } from 'react';

export default function QRPage() {
  useEffect(() => {
    // Viewport meta tag ekle
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
    }
  }, []);

  useEffect(() => {
    // Header ve footer'ı gizle
    const header = document.querySelector('header') || document.querySelector('[data-page="default"]')?.previousElementSibling;
    const footer = document.querySelector('footer');
    const html = document.documentElement;
    
    if (header) (header as HTMLElement).style.display = 'none';
    if (footer) (footer as HTMLElement).style.display = 'none';
    
    // Body ve HTML'yi temizle
    html.style.margin = '0';
    html.style.padding = '0';
    html.style.height = '100%';
    html.style.width = '100%';
    html.style.overflow = 'hidden';
    
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.background = '#ffffff';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    
    return () => {
      // Cleanup
      if (header) (header as HTMLElement).style.display = '';
      if (footer) (footer as HTMLElement).style.display = '';
      html.style.margin = '';
      html.style.padding = '';
      html.style.height = '';
      html.style.width = '';
      html.style.overflow = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.height = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.background = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6A0DAD',
      textAlign: 'center',
      minHeight: '100vh',
      minWidth: '100vw'
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
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 'clamp(10px, 3vw, 12px)',
        opacity: '0.7',
        color: '#6A0DAD',
        padding: '0 16px',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
        zIndex: 1000
      }}>
        © 2025 YakalaHadi. Tüm hakları saklıdır.
      </div>
    </div>
  );
}