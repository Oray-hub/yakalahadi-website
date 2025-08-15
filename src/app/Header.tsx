"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`header${isScrolled ? ' header--shrink' : ''}`} style={{position:'fixed',top:0,left:0,zIndex:1000,background:'#6A0DAD',width:'100%'}}>
        <div className="container">
          <Link href="/" className="logo" style={{display:'flex',alignItems:'center',gap:16,justifyContent:'flex-start'}}>
            <Image
              src="/YakalaHadi_logo1.png"
              alt="YakalaHadi Logo"
              width={216}
              height={68}
              style={{ maxWidth: '60vw', height: 'auto', minWidth: 90 }}
            />
          </Link>
          <nav className="nav">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/kullanici-kilavuzu">Kullanıcı Kılavuzu</Link>
            <Link href="/iletisim">İletişim</Link>
          </nav>
        </div>
      </header>
    </>
  );
} 