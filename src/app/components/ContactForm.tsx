"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

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
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Bağlantı hatası oluştu, lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {submitStatus === 'success' && (
        <div style={{
          background: '#4CAF50',
          color: 'white',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Mesajınız başarıyla gönderildi!
        </div>
      )}

      {submitStatus === 'error' && (
        <div style={{
          background: '#f44336',
          color: 'white',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          {errorMessage}
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
    </div>
  );
} 