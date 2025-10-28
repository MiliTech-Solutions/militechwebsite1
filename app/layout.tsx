
  import { Inter } from 'next/font/google';
  import './globals.css';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { Toaster } from '@/components/ui/toaster';
  
  const inter = Inter({ subsets: ['latin'] });
  
  export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
    );
  }
  