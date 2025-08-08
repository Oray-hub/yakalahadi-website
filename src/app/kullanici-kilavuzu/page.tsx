'use client';
import { useState } from 'react';

const userSteps = [
  { icon: '📍', text: 'Konumunuza göre en yakın fırsat ve kampanyalar listelenir.' },
  { icon: '🔔', text: 'Kampanyalar bildirim olarak gelir, tıklayarak detayları görebilirsiniz.' },
  { icon: '🎯', text: '“YakalaHadi” butonuna tıklayarak fırsatı yakalarsınız.' },
  { icon: '🧾', text: 'Fırsatı yakaladığınızda size özel QR kod oluşturulur, firmaya göstererek kullanırsınız.' },
  { icon: '⏳', text: 'Her kullanıcı her kampanyadan bir kez faydalanabilir, QR kodlar stokla sınırlıdır.' },
  { icon: '⭐', text: 'Hizmet sonrası değerlendirme ve yorum yapabilirsiniz.' },
];
const companySteps = [
  { icon: '📝', text: '“Firma Girişi” üzerinden kayıt olun veya giriş yapın.' },
  { icon: '➕', text: 'Firma panelinden yeni kampanya oluşturun: indirim veya YakalaHadi fırsatı seçebilirsiniz.' },
  { icon: '✏️', text: 'Kampanya detaylarını doldurun, hedef kitlenizi ve konumunuzu belirleyin.' },
  { icon: '✅', text: 'Kampanya aktif olduğunda kullanıcılar QR kod ile fırsatınızı kullanabilir.' },
  { icon: '📲', text: 'Kullanıcı QR kodunu getirdiğinde, “QR Okut” bölümünden kodu okutun ve işlemi onaylayın.' },
  { icon: '📊', text: 'Kampanya performansınızı panelden takip edebilir, kullanıcı yorumlarını görebilirsiniz.' },
];

export default function KullaniciKilavuzu() {
  const [slide, setSlide] = useState(0);
  const sliderData = [
    {
      title: 'Kullanıcı Kılavuzu',
      steps: userSteps,
      support: 'destek@yakalahadi.com',
    },
    {
      title: 'Firma Kılavuzu',
      steps: companySteps,
      support: 'destek@yakalahadi.com',
    }
  ];

  return (
    <div style={{maxWidth: 800, margin: '80px auto 40px auto', padding: 32, background: 'rgba(255,255,255,0.87)', borderRadius: 18}}>
      <div style={{width:'100%',maxWidth:700,margin:'0 auto 40px auto',padding:32,position:'relative',minHeight:320}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:18,marginBottom:18}}>
          <button onClick={()=>setSlide(0)} style={{background:'none',border:'none',color:slide===0?'#6A0DAD':'#aaa',fontWeight:700,fontSize:20,cursor:'pointer',padding:'6px 18px',borderBottom:slide===0?'3px solid #6A0DAD':'3px solid transparent',transition:'color 0.2s, border 0.2s'}}>Kullanıcı Kılavuzu</button>
          <button onClick={()=>setSlide(1)} style={{background:'none',border:'none',color:slide===1?'#6A0DAD':'#aaa',fontWeight:700,fontSize:20,cursor:'pointer',padding:'6px 18px',borderBottom:slide===1?'3px solid #6A0DAD':'3px solid transparent',transition:'color 0.2s, border 0.2s'}}>Firma Kılavuzu</button>
        </div>
        <div style={{transition:'all 0.4s',minHeight:180}}>
          <h2 style={{color:'#6A0DAD', fontSize:22, fontWeight:700, marginBottom:18, textAlign:'center'}}>{sliderData[slide].title}</h2>
          <div style={{display:'flex',flexDirection:'column',gap:18,alignItems:'center',margin:'0 auto',maxWidth:520}}>
            {sliderData[slide].steps.map((step, i) => (
              <div key={i} style={{display:'flex',alignItems:'flex-start',gap:16,background:'#fafaff',borderRadius:12,boxShadow:'0 2px 8px #f3e7ff',padding:'16px 18px',width:'100%'}}>
                <span style={{fontSize:26,marginTop:2}}>{step.icon}</span>
                <span style={{fontSize:17,lineHeight:1.7,color:'#333'}}>{step.text}</span>
              </div>
            ))}
          </div>
          <div style={{fontSize:15, color:'#6A0DAD', textAlign:'center',marginTop:24}}>
            <b>Destek:</b> <a href={`mailto:${sliderData[slide].support}`}>{sliderData[slide].support}</a>
          </div>
        </div>
      </div>
    </div>
  );
} 