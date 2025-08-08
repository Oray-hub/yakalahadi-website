"use client";
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

export default function Iletisim() {
  // İletişim sayfası için body data-page attribute'unu ayarla
  useEffect(() => {
    document.body.setAttribute('data-page', 'iletisim');
    return () => {
      document.body.setAttribute('data-page', 'default');
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      background: 'rgba(255,255,255,0.87)',
      borderRadius: '32px',
      margin: '20px',
      marginTop: '60px',
      boxShadow: '0 8px 32px rgba(106,13,173,0.10)'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        color: '#6A0DAD',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        İletişim
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#333',
        marginBottom: '40px',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz.
      </p>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        background: 'rgba(255,186,120,0.92)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 16px rgba(106,13,173,0.06)'
      }}>
        <ContactForm />
      </div>
    </div>
  );
} 