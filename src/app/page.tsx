"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect, useRef } from 'react';

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    }
  }, [delay]);
  return ref;
}

const heroSlides = [
  {
    img: '/kullanici_arayuz.png',
    alt: 'Kullanıcı Arayüzü',
    content: (
      <>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
          <Image src="/logo5.png" alt="YakalaHadi Logo" width={180} height={180} priority style={{marginTop:'12px',marginBottom:'-6px'}} />
          <Image src="/YakalaHadi1.png" alt="YakalaHadi" width={360} height={96} priority style={{margin:'0 0 10px 0'}} />
        </div>
        <p className={styles.slogan}>Ayağına gelen fırsatları anında yakala!</p>
        <p className={styles.desc}>YakalaHadi ile gerçek zamanlı fırsat ve kampanyaları kaçırma. Hemen indir, fırsatları yakala!</p>
        <div className={styles.stores}>
          <Image src="/apple.webp" alt="App Store" width={180} height={60} />
          <Image src="/google-play.webp" alt="Google Play" width={180} height={60} />
        </div>
      </>
    )
  },
  {
    img: '/kullanici_arayuz1.png',
    alt: 'Kullanıcı Arayüzü',
    content: (
      <>
        <div className={styles.slogan}>Kullanıcılar için</div>
        <ul style={{fontSize:15, color:'#222', margin:'12px auto 0 auto', fontWeight:400, lineHeight:1.7, maxWidth:480, textAlign:'justify', background:'#fff', borderRadius:0, boxShadow:'none', padding:0, listStyle:'disc inside'}}>
          <li>Uygulamaya e-posta, Google veya Apple hesabınızla saniyeler içinde giriş yapabilirsiniz.</li>
          <li>Konumunuza göre yakınınızdaki YakalaHadi fırsatlarını ve indirim kampanyalarını bildirim olarak anında görün.</li>
          <li>İlgi alanlarınıza uygun kategorileri seçin ve sadece sizi ilgilendiren kampanyaların bildirimini alın.</li>
          <li>Hoşunuza giden fırsatlara dokunarak fırsatı yakalayın ve kendinize özel QR kod oluşturun.</li>
          <li>Firmaya gidip QR kodunuzu okutarak size sunulan indirimi anında alın.</li>
          <li>Yerel esnaf ve mağazalarda veya Türkiye geneli büyük firmalarda sunulan indirimleri ayrı ayrı takip edin.</li>
          <li>Yakaladığınız fırsat sonrası firmayı puanlayarak hem diğer kullanıcılara yardımcı olun hem de firma kalitesinin yükselmesine katkıda bulunun.</li>
        </ul>
      </>
    )
  },
  {
    img: '/firma_arayuz.png',
    alt: 'Firma Arayüzü',
    content: (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%'}}>
        <div className={styles.slogan} style={{marginBottom: '10px'}}>Firmalar için</div>
        <ul style={{fontSize:15, color:'#222', margin:'12px auto 0 auto', fontWeight:400, lineHeight:1.7, maxWidth:480, textAlign:'justify', background:'#fff', borderRadius:0, boxShadow:'none', padding:0, listStyle:'disc inside'}}>
          <li>Firma profilinizi oluşturun, bilgilerinizi eksiksiz ve doğru girerek tüm faaliyet alanlarını içeren listeden faaliyet alanınızı seçin ve onay sonrası kaydolun.</li>
          <li>Dakikalar içinde fırsat veya indirim kampanyası oluşturun: ürün, fiyat, stok, kampanya süresi ve bildirim yarıçapını belirleyin.</li>
          <li>Fırsat veya indirim kampanyası oluşturduğunuzda, hedef müşteri kitlenize anında bildirim gider.</li>
          <li>Oluşturduğunuz fırsatı yakalayan müşteri mağazanıza gelir, QR kodunu uygulamadan size okutur ve indirimli ürününü avantajlı fiyatı ile alır.</li>
          <li>Kullanıcılar sizi puanladıkça güvenilirlik skorunuz artar. Böylece yeni müşteriler için daha cazip hale gelirsiniz.</li>
          <li>Yerel fırsatlar için istediğiniz yarıçapı seçerek hedefinize ulaşın, Türkiye geneli kampanyalarda ise tüm Türkiye
'deki kullanıcılara anında indirimleriniz gitsin.</li>
          <li>Bu sayede YakalaHadi sadece bir indirim değil, sizin için etkili bir reklam aracına dönüşür.</li>
        </ul>
      </div>
    )
  }
];

export default function Home() {
  const heroRef = useFadeIn(100);
  const stepsRef = useFadeIn(700);
  const campRef = useFadeIn(1000);

  // Hero slider state
  const [heroIndex, setHeroIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Swipe functionality
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    // Tüm cihazlarda otomatik geçiş açık
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);



  // Mouse hover pause/play
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    // Dokunma başladığında otomatik geçişi durdur
    setIsPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    // Dokunma devam ederken otomatik geçişi durdur
    setIsPlaying(false);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && heroIndex < heroSlides.length - 1) {
      goTo(heroIndex + 1);
    } else if (isRightSwipe && heroIndex > 0) {
      goTo(heroIndex - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
    
    // Dokunma bittiğinde otomatik geçişi başlat
    setIsPlaying(true);
  };

  // Manuel geçişte timer'ı sıfırla
  const goTo = (idx: number) => {
    setHeroIndex(idx);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setHeroIndex(prev => (prev + 1) % heroSlides.length);
      }, 5000);
    }
  };


  // Slider data
  const sliderData = [
    {
      title: 'Kullanıcı Kılavuzu',
      content: (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:18}}>
          <Image src="/kullanici_arayuz.png" alt="Kullanıcı Arayüzü" width={180} height={320} className={styles.sliderImage} />
          <div style={{maxWidth:400, width:'100%'}}>
            <h2 style={{color:'#6A0DAD', fontSize:22, fontWeight:700, marginBottom:18, textAlign:'center'}}>YakalaHadi Kullanıcı Kılavuzu</h2>
            <ul className={styles.sliderList}>
              <li>Uygulama bulunduğunuz konumu kullanarak size en yakın YakalaHadi fırsatlarını ve indirim kampanyalarını sunar.</li>
              <li>Kampanyalar ve indirimler cihazınızıza bildirim olarak gelir. Bildirime tıklayarak detayları görebilirsiniz.</li>
              <li>YakalaHadi fırsatı ise "YakalaHadi" butonuna tıklayarak fırsatı yakalarsınız. İndirim kampanyası ise bildirimdeki şekilde bilgilendirilirsiniz.</li>
              <li>YakalaHadi fırsatını yakaladığınızda size özel bir QR kod oluşturulur. Bu kodu firmaya göstererek ürünü indirimli alabilirsiniz.</li>
              <li>QR kodlar stokla sınırlıdır ve her kullanıcı her kampanyadan bir defa faydalanabilir. QR kod ikinci defa kullanılamaz.</li>
              <li>QR kodunuzu okuttuktan sonra firmadan aldığınız hizmeti değerlendirebilir ve yorum yapabilirsiniz.</li>
            </ul>
            <div style={{fontSize:15, color:'#6A0DAD', textAlign:'center'}}>
              <b>Destek:</b> <a href="mailto:info@yakalahadi.com">info@yakalahadi.com</a>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Firma Kılavuzu',
      content: (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:18}}>
          <Image src="/firma_arayuz.png" alt="Firma Arayüzü" width={180} height={320} className={styles.sliderImage} />
          <div style={{maxWidth:400, width:'100%'}}>
            <h2 style={{color:'#6A0DAD', fontSize:22, fontWeight:700, marginBottom:18, textAlign:'center'}}>Firma İçin Kullanım Kılavuzu</h2>
            <ul className={styles.sliderList}>
              <li>"Firma Girişi" üzerinden kayıt olun veya giriş yapın.</li>
              <li>Firma panelinden yeni kampanya oluşturun: indirim veya YakalaHadi fırsatı seçebilirsiniz.</li>
              <li>Kampanya detaylarını doldurun, hedef kitlenizi ve konumunuzu belirleyin.</li>
              <li>Kampanya aktif olduğunda kullanıcılar QR kod ile fırsatınızı kullanabilir.</li>
              <li>Kullanıcı QR kodunu getirdiğinde, "QR Okut" bölümünden kodu okutun ve işlemi onaylayın.</li>
              <li>Kampanya performansınızı panelden takip edebilir, kullanıcı yorumlarını görebilirsiniz.</li>
            </ul>
            <div style={{fontSize:15, color:'#6A0DAD', textAlign:'center'}}>
              <b>Firma Destek:</b> <a href="mailto:info@yakalahadi.com">info@yakalahadi.com</a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero} ref={heroRef}>
        <div 
          className={styles.heroSliderWrapper} 
          style={{position:'relative'}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          <div
            className={styles.heroSliderTrack}
            style={{ transform: `translateX(-${heroIndex * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {heroSlides.map((slide, i) => (
              <div className={styles.heroSliderSlide} key={i}>
                <div className={styles.heroCol + ' ' + styles.heroColImage} style={{minHeight:540}}>
                  <img src={slide.img} alt={slide.alt} width={260} height={520} style={{borderRadius:18,boxShadow:'0 2px 12px #eee',background:'#fff',transition:'all 0.5s',objectFit:'cover'}} />
                </div>
                <div className={styles.heroCol + ' ' + styles.heroColText}>
                  {slide.content}
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* Dot navigation - ortalı */}
        <div style={{
          display:'flex',
          justifyContent: 'center',
          marginTop:32,
          width: '100%'
        }}>
          {heroSlides.map((img, i) => (
            <span 
              key={i} 
              style={{
                width:13,
                height:13,
                borderRadius:'50%',
                background:i===heroIndex?'#6A0DAD':'#e0c3f7',
                display:'inline-block',
                transition:'background 0.2s',
                margin:'0 5px',
                cursor:'pointer'
              }}
              onClick={() => setHeroIndex(i)}
            ></span>
          ))}
        </div>
      </section>
      <section className={styles.howItWorksSection + ' ' + styles.advantages}>
        <h2>Uygulama Nasıl Çalışır?</h2>
        <ul style={{fontSize:18, color:'#222', margin:'0 auto 28px auto', fontWeight:400, lineHeight:1.7, maxWidth:900, textAlign:'left', background:'none', borderRadius:0, boxShadow:'none', padding:'0 0 0 22px', listStyle:'disc inside'}}>
          <li>Uygulama bulunduğunuz konumu kullanarak sizlere en yakın YakalaHadi fırsatlarını ve indirim kampanyalarını gönderir.</li>
          <li>Kampanyalar ve indirimler cihazınıza bildirim olarak gelir ve gelen bildirime tıklayarak detayları görebilirsiniz.</li>
          <li>Eğer gelen bildirim YakalaHadi fırsatı ise 'YakalaHadi' butonuna tıklayarak fırsatı yakalarsınız.Eğer bildirim indirim kampanyası ise bildirimlerde göründüğü şekilde bilgilendirilirsiniz.</li>
          <li>YakalaHadi fırsatını yakaladığınızda size özel bir QR kod oluşturulur. Bu kodu firmaya giderek okutur ve ürünü bildirimde belirtilen fiyattan indirimli bir şekilde alabilirsiniz.</li>
          <li>YakalaHadi fırsatını yakaladığınız halde 24 saat içinde oluşturulan Qr kodunuzu kullanmazsanız fırsatı kaçırmış olursunuz ve oluşan Qr kodu artık geçersiz sayılır.</li>
          <li>QR kodları firmanın belirlediği stok adedine göre sınırlı sayıda olup, her kullanıcıya özel olarak üretilir. Her kullanıcı, her kampanyadan bir defa faydalanabilir. Sistem okutulan Qr kodunun ikinci defa kullanılmasına izin vermez.</li>
          <li>QR kodunuzu okuttuktan sonra firmadan aldığınız hizmeti değerlendirebilir ve yorum yapabilirsiniz. Qr kodunu okutmadan firmaya geri bildirimde bulunamazsınız.</li>
        </ul>
        <div className={`${styles.advList}`} style={{maxWidth:700,margin:'0 auto',gap:18,flexWrap:'wrap',justifyContent:'center'}}>
          <div className={`${styles.advCard} ${styles.advCard1} ${styles.fadeUp}`} style={{padding:0,minWidth:160,maxWidth:180,display:'flex',flexDirection:'column',height:'320px',overflow:'hidden'}}>
            <div className={styles.advCardImg} style={{flex:'1 1 50%',background:"url('/indirim.jpg') center center / cover no-repeat",width:'100%'}}></div>
            <div className={styles.advCardContent} style={{flex:'1 1 50%',background:'rgba(255,255,255,0.85)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',padding:'18px 8px'}}>
              <h3>Her alışverişte indirim</h3>
              <p>Bütçene katkı sağlayan, anlık ve gerçek fırsatlar.</p>
            </div>
          </div>
          <div className={`${styles.advCard} ${styles.advCard2} ${styles.fadeUp}`} style={{padding:0,minWidth:160,maxWidth:180,display:'flex',flexDirection:'column',height:'320px',overflow:'hidden'}}>
            <div className={styles.advCardImg} style={{flex:'1 1 50%',background:"url('/pin.jpg') center center / cover no-repeat",width:'100%'}}></div>
            <div className={styles.advCardContent} style={{flex:'1 1 50%',background:'rgba(255,255,255,0.85)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',padding:'18px 8px'}}>
              <h3>Konum tabanlı kampanyalar</h3>
              <p>Yakınındaki işletmelerden sana özel fırsatlar.</p>
            </div>
          </div>
          <div className={`${styles.advCard} ${styles.advCard3} ${styles.fadeUp}`} style={{padding:0,minWidth:160,maxWidth:180,display:'flex',flexDirection:'column',height:'320px',overflow:'hidden'}}>
            <div className={styles.advCardImg} style={{flex:'1 1 50%',background:"url('/qr.jpg') center center / cover no-repeat",width:'100%'}}></div>
            <div className={styles.advCardContent} style={{flex:'1 1 50%',background:'rgba(255,255,255,0.85)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',padding:'18px 8px'}}>
              <h3>Güvenli QR ile kullanım</h3>
              <p>Her kullanıcıya özel QR kod ile güvenli alışveriş.</p>
            </div>
          </div>
          <div className={`${styles.advCard} ${styles.advCard4} ${styles.fadeUp}`} style={{padding:0,minWidth:160,maxWidth:180,display:'flex',flexDirection:'column',height:'320px',overflow:'hidden'}}>
            <div className={styles.advCardImg} style={{flex:'1 1 50%',background:"url('/fedback.jpg') center center / cover no-repeat",width:'100%'}}></div>
            <div className={styles.advCardContent} style={{flex:'1 1 50%',background:'rgba(255,255,255,0.85)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%',padding:'18px 8px'}}>
              <h3>Kullanıcı değerlendirmeleri</h3>
              <p>Firmaları puanla, yorum yap, topluluğa katkı sağla.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.howToUseSection + ' ' + styles.steps} ref={stepsRef}>
        <h2>Nasıl Kullanılır?</h2>
        <div className={styles.stepList}>
          <div className={`${styles.step} ${styles.step1} ${styles.fadeUp}`}>
            <span className={styles.stepNum}>1</span>
            <h3>Keşfet</h3>
            <p>Yakınındaki fırsatlar ve indirim kampanyaları cihazına bildirim olarak gelsin.</p>
          </div>
          <div className={`${styles.step} ${styles.step2} ${styles.fadeUp}`}>
            <span className={styles.stepNum}>2</span>
            <h3>Yakala</h3>
            <p>Sana uygun fırsatı seç, YakalaHadi butonu ile yakala ve QR kodunu oluşturarak işletmeye git.</p>
          </div>
          <div className={`${styles.step} ${styles.step3} ${styles.fadeUp}`}>
            <span className={styles.stepNum}>3</span>
            <h3>Teslim Al</h3>
            <p>İşletmeye giderek QR kodunu okut ve yakaladığın fırsatı güvenle teslim al, avantajı kaçırma!</p>
          </div>
        </div>
      </section>
      <section className={styles.whoCanUseSection + ' ' + styles.exampleCampaigns} ref={campRef}>
        <h2>Tüm Firma ve Esnaflar için her kategoriye uygun kullanım</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '18px',
          maxHeight: 480,
          overflowY: 'auto',
          padding: '24px 0',
        }}>
          {[
            "Market", "Zincir Market", "Bakkal", "Fırın",
            "Manav", "Kasap", "Kuruyemişçi", "Şarküteri",
            "Eczane", "Lokanta", "Restoran", "Fast Food", "Kafe", "Pastane",
            "Çiğköfteci", "Dönerci", "Kebapçı", "Tatlıcı", "Kokoreççi",
            "Kuaför", "Berber", "Güzellik Salonu", "Masaj Salonu",
            "AVM Mağazası", "Giyim Mağazası", "Ayakkabıcı", "Çanta Mağazası",
            "Bijuteri", "Mobilya Mağazası",
            "Elektronikçi", "Teknoloji Mağazası", "Telefoncu", "Bilgisayarcı",
            "Beyaz Eşya Bayisi", "Yapı Market",
            "Spor Salonu", "Fitness Salonu", "Yoga/Pilates Stüdyosu", "Spor Mağazası",
            "Diş Kliniği", "Özel Hastane", "Fizyoterapi Merkezi",
            "Diyetisyen", "Psikolog", "Estetik Merkezi", "Tıbbi Malzeme",
            "Hırdavatçı", "Elektrikçi", "İnşaat Malzemecisi", "Camcı",
            "Ev Tekstili", "Perdeci", "Halı Mağazası", "Züccaciye",
            "Dekorasyon Mağazası", "Avize Mağazası",
            "Pet Shop", "Veteriner",
            "Oto Yıkama", "Oto Kuaför", "Oto Servis", "Oto Yedek Parça",
            "Lastikçi", "Otopark", "Araç Kiralama",
            "Temizlik Firması", "Halı Yıkama", "Nakliye Firması", "Taşımacılık",
            "İnternet Kafe", "Playstation Cafe", "Oyun Salonu", "Bilardo Salonu",
            "Kütüphane", "Kitapçı", "Kırtasiye", "Oyuncakçı", "Sahaf",
            "Organizasyon Firması", "Fotoğraf Stüdyosu", "Anahtarcı",
            "Ütücü / Kuru Temizleme", "Matbaa", "Su Arıtma Sistemleri", "Güneş Enerji Sistemleri",
            "Otel", "Pansiyon", "Hostel", "Kamp Alanı", "Güneş Paneli Sistemleri",
            "Anaokulu", "Kreş", "Çocuk Gelişim Merkezi", "Etüt Merkezi",
            "Sürücü Kursu", "Yabancı Dil Kursu", "Dans Kursu", "Müzik Kursu",
            "Robotik Atölyesi", "Satranç Kulübü", "Dil Cafe", "Tiyatro",
            "Sinema", "Karaoke Bar", "Resim Atölyesi", "Kamp Malzemeleri"
          ].map((item, i) => (
            <div key={i} style={{
              background: '#faf6ff',
              borderRadius: 14,
              boxShadow: '0 2px 8px #eee',
              padding: '18px 12px',
              fontSize: 17,
              color: '#111',
              fontWeight: 600,
              textAlign: 'center',
              margin: 0,
            }}>{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
