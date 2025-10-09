"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function QRPage() {
  useEffect(() => {
    // Body'ye qr-page sınıfını ekle (sadece footer gizlemek için)
    document.body.classList.add('qr-page');
    
    return () => {
      // Cleanup
      document.body.classList.remove('qr-page');
    };
  }, []);

  return (
    <div className={styles.qrPage}>
      
      {/* Logo and Title */}
      <div className={styles.logoSection}>
        <Image 
          src="/YakalaHadi1.png" 
          alt="YakalaHadi" 
          width={360} 
          height={96}
          className={styles.title}
        />
        
        {/* Logo */}
        <Image 
          src="/logo5.png" 
          alt="YakalaHadi Logo" 
          width={220} 
          height={220}
          className={styles.logo}
        />
      </div>

      {/* Tagline */}
      <p className={styles.tagline}>
        Hemen indir fırsatları yakala
      </p>

      {/* Download Buttons */}
      <div className={styles.downloadButtons}>
        
        {/* App Store Button */}
        <a 
          href="https://apps.apple.com/tr/app/yakalahadi/id6752722925?l=tr" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.downloadLink}
        >
          <Image 
            src="/apple.webp" 
            alt="App Store'dan İndir" 
            width={280} 
            height={80}
            className={styles.downloadButton}
          />
        </a>

        {/* Google Play Button */}
        <a 
          href="https://play.google.com/store/apps/details?id=com.yakalahadi.app&pcampaignid=web_share" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.downloadLink}
        >
          <Image 
            src="/google-play.webp" 
            alt="Google Play'den İndir" 
            width={280} 
            height={80}
            className={`${styles.downloadButton} ${styles.googlePlayButton}`}
          />
        </a>
      </div>

      {/* Copyright */}
      <div className={styles.footer}>
        © 2025 YakalaHadi. Tüm hakları saklıdır.
      </div>
    </div>
  );
}