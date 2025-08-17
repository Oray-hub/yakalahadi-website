export default function KullanimKosullari() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 20px',
      background: 'rgba(255,255,255,0.87)',
      borderRadius: '32px',
      margin: '20px',
      boxShadow: '0 8px 32px rgba(106,13,173,0.10)'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        color: '#6A0DAD',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        Kullanım Koşulları
      </h1>
      
      <div style={{
        maxWidth: '800px',
        width: '100%',
        lineHeight: '1.8',
        color: '#333'
      }}>
        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>1. Genel Hükümler</h2>
          <p>YakalaHadi uygulamasını kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Bu koşullar, uygulamanın kullanımı ile ilgili tüm hak ve yükümlülükleri düzenler.</p>
        </section>

        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>2. Hizmet Kapsamı</h2>
          <p>YakalaHadi, kullanıcılara yakınlarındaki fırsatları ve kampanyaları bildiren, firmaların indirim ve fırsatlarını yönetebileceği bir platformdur.</p>
        </section>

        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>3. Kullanıcı Sorumlulukları</h2>
          <ul style={{paddingLeft: '20px'}}>
            <li>Doğru ve güncel bilgiler vermek</li>
            <li>Uygulamayı kötüye kullanmamak</li>
            <li>Diğer kullanıcıların haklarına saygı göstermek</li>
            <li>Yasal düzenlemelere uygun hareket etmek</li>
          </ul>
        </section>

        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>4. Firma Sorumlulukları</h2>
          <ul style={{paddingLeft: '20px'}}>
            <li>Doğru ve güncel firma bilgileri sağlamak</li>
            <li>Kampanya koşullarını net bir şekilde belirtmek</li>
            <li>QR kodları düzgün şekilde işlemek</li>
            <li>Kullanıcı haklarına saygı göstermek</li>
          </ul>
        </section>

        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>5. Gizlilik</h2>
          <p>Kişisel verileriniz gizlilik politikamız kapsamında korunmaktadır. Detaylı bilgi için gizlilik politikamızı inceleyebilirsiniz.</p>
        </section>

        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>6. Değişiklikler</h2>
          <p>Bu kullanım koşulları, önceden haber verilmeksizin değiştirilebilir. Güncel koşullar uygulama üzerinden takip edilebilir.</p>
        </section>

        <section style={{marginBottom: '30px'}}>
          <h2 style={{color: '#6A0DAD', fontSize: '1.5rem', marginBottom: '15px'}}>7. İletişim</h2>
          <p>Kullanım koşulları ile ilgili sorularınız için <a href="mailto:info@yakalahadi.com" style={{color: '#6A0DAD'}}>info@yakalahadi.com</a> adresinden bizimle iletişime geçebilirsiniz.</p>
        </section>
      </div>
    </div>
  );
}
