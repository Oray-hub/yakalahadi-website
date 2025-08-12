"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name') as string,
      surname: formData.get('surname') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setAlertType('success');
        setAlertMessage('Mesajınız başarıyla gönderildi!');
        form.reset();
      } else {
        setAlertType('error');
        setAlertMessage(result.error || 'Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      setAlertType('error');
      setAlertMessage('Bağlantı hatası oluştu, lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
      setShowAlert(true);
      // 5 saniye sonra alert'i otomatik kapat
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <div>
      {/* Alert Dialog */}
      {showAlert && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          minWidth: '300px',
          maxWidth: '400px',
          background: alertType === 'success' ? '#4CAF50' : '#f44336',
          color: 'white',
          padding: '16px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'slideIn 0.3s ease-out'
        }}>
          {/* İkon */}
          <div style={{
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center'
          }}>
            {alertType === 'success' ? '✅' : '❌'}
          </div>
          
          {/* Mesaj */}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              {alertType === 'success' ? 'Başarılı!' : 'Hata!'}
            </div>
            <div style={{ fontSize: '14px' }}>
              {alertMessage}
            </div>
          </div>
          
          {/* Kapatma Butonu */}
          <button
            onClick={() => setShowAlert(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '0',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
            }}
          >
            ×
          </button>
        </div>
      )}

      <form style={{
        display:'flex',
        flexDirection:'column',
        gap:12,
        width:'100%'
      }} onSubmit={handleSubmit}>
        <div style={{
          display:'flex',
          gap:12,
          flexDirection:'row'
        }}>
          <input 
            name="name" 
            type="text" 
            placeholder="Adınız" 
            style={{
              flex:1,
              padding:'10px 8px',
              border:'none',
              borderBottom:'2px solid #fff',
              background:'transparent',
              color:'#fff',
              fontSize:16,
              outline:'none'
            }} 
            required 
            disabled={isLoading}
          />
          <input 
            name="surname" 
            type="text" 
            placeholder="Soyadınız" 
            style={{
              flex:1,
              padding:'10px 8px',
              border:'none',
              borderBottom:'2px solid #fff',
              background:'transparent',
              color:'#fff',
              fontSize:16,
              outline:'none'
            }} 
            required 
            disabled={isLoading}
          />
        </div>
        <div style={{
          display:'flex',
          gap:12,
          flexDirection:'row'
        }}>
          <input 
            name="email" 
            type="email" 
            placeholder="Email *" 
            style={{
              flex:1,
              padding:'10px 8px',
              border:'none',
              borderBottom:'2px solid #fff',
              background:'transparent',
              color:'#fff',
              fontSize:16,
              outline:'none'
            }} 
            required 
            disabled={isLoading}
          />
          <input 
            name="subject" 
            type="text" 
            placeholder="Konu" 
            style={{
              flex:1,
              padding:'10px 8px',
              border:'none',
              borderBottom:'2px solid #fff',
              background:'transparent',
              color:'#fff',
              fontSize:16,
              outline:'none'
            }} 
            disabled={isLoading}
          />
        </div>
        <textarea 
          name="message" 
          placeholder="Bize ulaşın.." 
          style={{
            padding:'10px 8px',
            border:'none',
            borderBottom:'2px solid #fff',
            background:'transparent',
            color:'#fff',
            fontSize:16,
            minHeight:48,
            outline:'none',
            resize:'vertical',
            width:'100%'
          }} 
          required 
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            marginTop:12,
            background: isLoading ? '#666' : '#111',
            color:'#fff',
            border:'none',
            borderRadius:22,
            padding:'12px 38px',
            fontWeight:700,
            fontSize:18,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            alignSelf:'flex-start',
            boxShadow:'0 2px 8px #0002',
            transition:'background 0.18s'
          }}
        >
          {isLoading ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </form>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
} 