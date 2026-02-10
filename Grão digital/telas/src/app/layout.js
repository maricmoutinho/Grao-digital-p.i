import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import VLibrasWidget from '@/components/Acessibilidade/VLibrasWidget';
import Acessibilidade from '@/components/Acessibilidade/Acessibilidade';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: 'Grão Digital',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Footer />
        <VLibrasWidget />
        <Acessibilidade></Acessibilidade>
      </body>
    </html>
  );
}
