import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Shahriar Nafis & Misil Ahmed | Official Portfolio & Tech Projects',
  description: 'Discover the official single-page tech portfolio of Shahriar Nafis and Misil Ahmed—student developers specializing in Flutter, custom scripting, and tools like SakuraTube.',
  keywords: ['Shahriar Nafis', 'Misil Ahmed', 'Nafis and Misil', 'SakuraTube', 'Software Developers Bangladesh', 'Student Developers Portfolio'],
  authors: [{ name: 'Shahriar Nafis & Misil Ahmed' }],
  creator: 'Shahriar Nafis & Misil Ahmed',
  metadataBase: new URL('https://shahriarnafis-misilahmed.com'), // Replace with your live domain later
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Shahriar Nafis & Misil Ahmed | Official Portfolio',
    description: 'Discover the official single-page tech portfolio of Shahriar Nafis and Misil Ahmed.',
    url: 'https://shahriarnafis-misilahmed.com',
    siteName: 'Shahriar Nafis & Misil Ahmed Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0d1117] text-gray-100 antialiased min-h-screen selection:bg-[#0077b6] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
