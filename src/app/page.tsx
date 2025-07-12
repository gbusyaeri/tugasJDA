// app/page.tsx
'use client'; 

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)', // Mengurangi tinggi nav bar jika ada
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)', // Latar belakang gradien
      color: '#ffffff', // Warna teks putih
      textShadow: '1px 1px 2px rgba(0,0,0,0.2)', // Efek bayangan teks
    }}>
      <h1 style={{
        fontSize: '3.5rem', // Ukuran font besar
        marginBottom: '1rem',
        fontWeight: 'bold',
        letterSpacing: '0.05em', // Sedikit jarak antar huruf
      }}>
        Selamat Datang di Next.js Explorer!
      </h1>
      <p style={{
        fontSize: '1.5rem',
        maxWidth: '700px',
        lineHeight: '1.6',
        marginBottom: '2.5rem',
      }}>
        Jelajahi berbagai fitur modern yang dibangun dengan Next.js App Router,
        mulai dari halaman statis, rute dinamis, hingga penanganan error 404 yang elegan.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem', // Jarak antar tombol
        marginTop: '1rem',
        flexWrap: 'wrap', // Agar responsif di layar kecil
      }}>
        {/* Tombol-tombol navigasi */}
        <Link href="/profile" style={{
          padding: '1rem 2rem',
          backgroundColor: '#0070f3', // Warna biru cerah
          color: 'white',
          borderRadius: '30px', // Sudut lebih bulat
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(0, 112, 243, 0.4)', // Bayangan tombol
          transition: 'transform 0.2s ease, background-color 0.2s ease', // Transisi halus
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          Lihat Profil Saya
        </Link>

        <Link href="/about" style={{
          padding: '1rem 2rem',
          backgroundColor: '#28a745', // Warna hijau
          color: 'white',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          Tentang Aplikasi Ini
        </Link>

        <Link href="/products/1" style={{
          padding: '1rem 2rem',
          backgroundColor: '#ffc107', // Warna kuning (gunakan warna teks gelap jika perlu)
          color: '#333', // Warna teks hitam agar kontras
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.4)',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          Jelajahi Produk
        </Link>
      </div>
    </div>
  );
}