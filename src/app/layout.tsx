// app/layout.tsx
import Link from 'next/link'; 
import './globals.css'; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigasi Global */}
        <nav style={{
          backgroundColor: '#333',
          padding: '1rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
        }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            Home
          </Link>
          <Link href="/profile" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            Profile
          </Link>
          <Link href="/products/1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            Products
          </Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            About Us
          </Link>
          
          {/* Anda bisa menambahkan link lain ke produk yang berbeda di sini jika mau */}
        </nav>

        {/* Konten halaman yang sedang aktif akan dirender di sini */}
        <main>{children}</main>
      </body>
    </html>
  );
}