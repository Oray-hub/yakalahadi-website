'use client';

export default function CaymaIptalIade() {
  return (
    <div style={{marginTop: '80px', marginBottom: '0'}}>
      <div style={{maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #eee'}}>
        <h1 style={{fontSize: 28, fontWeight: 700, color: '#6A0DAD', marginBottom: 18}}>Cayma, İptal ve İade Koşulları</h1>
        <div style={{fontSize: 16, color: '#333', marginBottom: 8, fontWeight: 500}}>Yürürlük Tarihi: 12/08/2025</div>
        <div style={{marginTop: 24, marginBottom: 24, display:'flex', flexDirection:'column', gap:24}}>
          <section>
            <h2 style={{color:'#222', fontWeight:500, fontSize:18, marginBottom:6}}>1. Kapsam</h2>
            <div style={{fontSize:15}}>
              Bu koşullar, YakalaHadi uygulaması ve web sitesi üzerinden firmalara sunulan dijital hizmet ve içeriklerin satın alınması, iptali, iadesi ve cayma hakkı süreçlerini kapsar.
            </div>
          </section>
          <section>
            <h2 style={{color:'#222', fontWeight:500, fontSize:18, marginBottom:6}}>2. Cayma Hakkı</h2>
            <div style={{fontSize:15}}>
              6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği gereği, dijital içerik ve anında ifa edilen hizmetlerde cayma hakkı istisnası uygulanır. Firma, hizmetin ifasına başlandığı anda cayma hakkını kaybeder. Hizmetin ifasına başlanmamışsa, 14 gün içinde cayma hakkı kullanılabilir. Cayma talepleri <a href="mailto:info@yakalahadi.com" style={{color:'#6A0DAD',textDecoration:'underline'}}>info@yakalahadi.com</a> adresine iletilmelidir.
            </div>
          </section>
          <section>
            <h2 style={{color:'#222', fontWeight:500, fontSize:18, marginBottom:6}}>3. İptal ve İade Koşulları</h2>
            <div style={{fontSize:15}}>
              - Dijital hizmetin sunulmasına başlanmamışsa, firma tarafından yapılan satın alma işlemi iptal edilebilir ve ücret iadesi talep edilebilir.<br/>
              - Hizmetin sunulmasına başlandıktan sonra iptal ve iade mümkün değildir.<br/>
              - İade talepleri, ödeme yapılan İyzico altyapısı üzerinden ve yasal mevzuata uygun şekilde gerçekleştirilir.<br/>
              - İptal/iade talepleri için <a href="mailto:info@yakalahadi.com" style={{color:'#6A0DAD',textDecoration:'underline'}}>info@yakalahadi.com</a> adresine başvurulmalıdır.
            </div>
          </section>
          <section>
            <h2 style={{color:'#222', fontWeight:500, fontSize:18, marginBottom:6}}>4. İstisnalar</h2>
            <div style={{fontSize:15}}>
              - Anında ifa edilen ve/veya kişiye özel olarak hazırlanan dijital hizmetlerde cayma hakkı ve iade mümkün değildir.<br/>
              - Yasal zorunluluklar ve teknik arızalar dışında, hizmetin ifasına başlandıktan sonra ücret iadesi yapılmaz.
            </div>
          </section>
          <section>
            <h2 style={{color:'#222', fontWeight:500, fontSize:18, marginBottom:6}}>5. İletişim</h2>
            <div style={{fontSize:15}}>
              Tüm cayma, iptal ve iade talepleriniz için <a href="mailto:info@yakalahadi.com" style={{color:'#6A0DAD',textDecoration:'underline'}}>info@yakalahadi.com</a> adresine e-posta gönderebilirsiniz.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 