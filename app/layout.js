import Header from "./components/header"
import Footer from "./components/footer"
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],  
});

export const metadata = {
  title: 'Din Mægler',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
