// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Memastikan halaman mengisi tinggi viewport
      backgroundColor: '#282c34', // Warna latar belakang gelap
      color: '#fff', // Warna teks putih
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', margin: '0', color: '#ff6b6b' }}>404</h1>
      <h2 style={{ fontSize: '2.5rem', margin: '1rem 0', fontWeight: 'normal' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0 2rem' }}>
        Oops! Sepertinya Anda salah alamat.
      </p>
      <Link href="/" style={{
        backgroundColor: '#61dafb', // Warna biru cerah
        color: '#282c34', // Teks gelap
        padding: '1rem 2rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease'
      }}>
        Kembali ke Beranda Aman
      </Link>
    </div>
  );
}