"use client";
import React from "react";

export default function ContactForm() {
  return (
    <form style={{
      display:'flex',
      flexDirection:'column',
      gap:12,
      width:'100%'
    }} onSubmit={async (e) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const data = {
        name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
        surname: (form.elements.namedItem('surname') as HTMLInputElement)?.value,
        email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
        subject: (form.elements.namedItem('subject') as HTMLInputElement)?.value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Mesajınız başarıyla gönderildi!');
        form.reset();
      } else {
        alert('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    }}>
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
      />
      <button 
        type="submit" 
        style={{
          marginTop:12,
          background:'#111',
          color:'#fff',
          border:'none',
          borderRadius:22,
          padding:'12px 38px',
          fontWeight:700,
          fontSize:18,
          cursor:'pointer',
          alignSelf:'flex-start',
          boxShadow:'0 2px 8px #0002',
          transition:'background 0.18s'
        }}
      >
        Gönder
      </button>
    </form>
  );
} 