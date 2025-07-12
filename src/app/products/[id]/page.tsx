// app/products/[id]/page.tsx
// Ini akan kembali menjadi SERVER COMPONENT

import Link from 'next/link';
import React from 'react'; // <--- Import React untuk menggunakan React.use()

interface ProductPageProps {
  params: {
    id: string; // Parameter 'id'
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // Gunakan React.use() untuk membuka Promise 'params'
  // Meskipun params mungkin belum Promise di versi Anda, ini adalah cara yang benar ke depannya.
  // Jika params sudah objek, React.use(params) akan mengembalikan params itu sendiri.
  const resolvedParams = React.use(Promise.resolve(params)); // Bungkus params dengan Promise.resolve() agar React.use() bisa bekerja
  const { id } = resolvedParams;

  // Contoh data produk (dalam aplikasi nyata, ini bisa diambil dari database atau API)
  const products: { [key: string]: { name: string; description: string; price: string; image: string; }; } = {
    '1': {
      name: 'Keyboard Mekanikal Pro',
      description: 'Keyboard gaming dengan switch taktil premium dan lampu RGB yang dapat disesuaikan.',
      price: 'Rp 1.200.000',
      image: 'https://via.placeholder.com/400x250/1a73e8/ffffff?text=Keyboard+Mekanikal'
    },
    '2': {
      name: 'Mouse Gaming Ergonomis',
      description: 'Mouse presisi tinggi dengan sensor optik canggih dan desain yang nyaman untuk sesi gaming panjang.',
      price: 'Rp 650.000',
      image: 'https://via.placeholder.com/400x250/34a853/ffffff?text=Mouse+Gaming'
    },
    '3': {
      name: 'Monitor Ultra-Wide 4K',
      description: 'Monitor besar untuk produktivitas dan hiburan, dengan resolusi 4K dan HDR.',
      price: 'Rp 7.800.000',
      image: 'https://via.placeholder.com/400x250/ea4335/ffffff?text=Monitor+4K'
    },
  };

  const product = products[id];

  // Jika produk tidak ditemukan berdasarkan ID
  if (!product) {
    return (
      <div style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
        color: '#555',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#dc3545' }}>Produk dengan ID "{id}" Tidak Ditemukan</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Maaf, produk yang Anda cari tidak tersedia saat ini.</p>
        <Link href="/products/1" style={{
          padding: '0.8rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.2s ease'
        }}>
          Lihat Contoh Produk
        </Link>
      </div>
    );
  }

  // Tampilan detail produk
  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#e9ecef', // Latar belakang abu-abu terang
      color: '#343a40',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)', // Bayangan lebih kuat
        maxWidth: '700px',
        width: '100%',
        textAlign: 'center',
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            border: '1px solid #ddd',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
          }}
        />
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', color: '#007bff' }}>{product.name}</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555', marginBottom: '1.5rem' }}>
          {product.description}
        </p>
        <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#28a745', marginBottom: '2rem' }}>
          Harga: {product.price}
        </p>

        <div style={{
          marginTop: '2rem',
          borderTop: '1px solid #e9ecef',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <Link href="/products/1" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#6c757d', // Abu-abu gelap
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}>
            Produk 1
          </Link>
          <Link href="/products/2" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#6c757d',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}>
            Produk 2
          </Link>
          <Link href="/products/3" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#6c757d',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}>
            Produk 3
          </Link>
        </div>
      </div>
    </div>
  );
}