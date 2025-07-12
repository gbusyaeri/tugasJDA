// src/app/profile/page.tsx
'use client'; 

import Image from 'next/image'; // Opsional: jika ingin menambahkan gambar profil

export default function ProfilePage() {
  const skillBadge = {
    backgroundColor: '#e2f0fe',
    color: '#007bff',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: '1px solid #cfe2ff',
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)', // Menyesuaikan tinggi dengan nav bar
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f8f9fa', // Latar belakang abu-abu muda
      color: '#343a40', // Warna teks gelap
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)', // Bayangan lembut
        maxWidth: '600px',
        width: '100%',
      }}>
        {/* Opsional: Gambar Profil */}
        {/* Jika Anda memiliki gambar profil di public/, bisa gunakan komponen Image Next.js */}
        {/*
        <Image
          src="/path-to-your-profile-image.jpg" // Ganti dengan path gambar Anda
          alt="Foto Profil"
          width={150}
          height={150}
          style={{ borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid #007bff' }}
        />
        */}

        <h1 style={{
          fontSize: '2.8rem',
          marginBottom: '0.8rem',
          color: '#007bff', // Warna biru cerah untuk judul
          fontWeight: 'bold',
        }}>
          Halaman Profil Saya
        </h1>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginBottom: '1rem',
          color: '#6c757d', // Warna teks sedikit lebih terang
        }}>
          Halo! Saya seorang entusiast teknologi dan pembelajar Next.js.
          Saya percaya pada kekuatan pengembangan web modern untuk menciptakan solusi yang inovatif.
        </p>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          color: '#6c757d',
        }}>
          Proyek ini merupakan bagian dari perjalanan saya untuk menguasai
          framework Next.js, membangun aplikasi yang cepat, efisien, dan menyenangkan.
        </p>

        <div style={{
          marginTop: '2rem',
          borderTop: '1px solid #e9ecef', // Garis pemisah
          paddingTop: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            marginBottom: '1rem',
            color: '#343a40',
          }}>
            Keterampilan
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.8rem',
          }}>
            <li style={skillBadge}>React.js</li>
            <li style={skillBadge}>Next.js</li>
            <li style={skillBadge}>JavaScript</li>
            <li style={skillBadge}>TypeScript</li>
            <li style={skillBadge}>CSS (Tailwind, CSS Modules)</li>
            <li style={skillBadge}>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}