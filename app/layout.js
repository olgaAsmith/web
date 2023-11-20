import './globals.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { inter } from '@/public/fonts/fonts';

export const metadata = {
  title: 'Welbex',
  description: 'Welbex - крупный интегратор CRM в Росcии '
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="app">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
