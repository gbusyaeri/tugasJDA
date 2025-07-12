// src/app/about/page.tsx
'use client'; 

import React from 'react';

export default function AboutPage() {
  const featureBoxStyle = {
    backgroundColor: '#ffffff',
    padding: '1.8rem',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    flex: '1 1 calc(50% - 2rem)',
    minWidth: '280px',
  };

  const featureIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '0.8rem',
    color: '#1890ff',
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem 1rem',
      backgroundImage: 'linear-gradient(to right top, #a1c4fd, #c2e9fb)',
      color: '#34495e',
      fontFamily: 'Open Sans, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '15px',
        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
        maxWidth: '900px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          color: '#1890ff',
          fontWeight: '700',
          letterSpacing: '-0.02em',
        }}>
          Tentang Proyek Next.js Ini
        </h1>
        <p style={{
          fontSize: '1.4rem',
          lineHeight: '1.7',
          marginBottom: '2.5rem',
          color: '#555',
          maxWidth: '750px',
        }}>
          Aplikasi ini adalah sebuah eksplorasi mendalam mengenai kemampuan Next.js App Router.
          Dibangun dengan semangat inovasi, kami menyajikan contoh praktik terbaik dalam pengembangan web modern.
        </p>

        <div style={{
          marginTop: '2rem',
          borderTop: '1px solid #f0f0f0',
          paddingTop: '2.5rem',
          width: '100%',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#34495e',
            fontWeight: '600',
          }}>
            Fitur Utama
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
          }}>
            <div
              style={featureBoxStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
              }}
            >
              <div style={featureIconStyle}>📄</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: '#34495e' }}>Halaman Statis Efisien</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                Halaman seperti Profil dan Kontak dimuat dengan cepat, dioptimalkan untuk performa.
              </p>
            </div>

            <div
              style={featureBoxStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
              }}
            >
              <div style={featureIconStyle}>🛒</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: '#34495e' }}>Rute Dinamis & Fleksibel</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                Menampilkan detail produk yang berbeda melalui URL dinamis, contoh: `/products/1`.
              </p>
            </div>

            <div
              style={featureBoxStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
              }}
            >
              <div style={featureIconStyle}>🔗</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: '#34495e' }}>Navigasi Cepat</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                Berpindah antar halaman tanpa *reload* penuh, memberikan pengalaman pengguna yang mulus.
              </p>
            </div>

            <div
              style={featureBoxStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
              }}
            >
              <div style={featureIconStyle}>🚫</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', color: '#34495e' }}>Halaman Not Found Kustom</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                Desain khusus untuk error 404, memandu pengguna kembali ke jalur yang benar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}