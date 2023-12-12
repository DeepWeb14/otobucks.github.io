import Head from 'next/head';
import '../public/style.css'
import 'bootstrap/dist/css/bootstrap.css'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export const metadata = {
  title: 'OTOBUCKS',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  if (!children) {
    console.error("Error: 'children' prop is not defined");
    return null;
  }
  return (
    <html lang="en">

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <body>
        <Header />
        {children}
        <Footer />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
