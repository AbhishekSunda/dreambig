import './globals.css'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/Redux/ReduxProvider'
import Header from '../components/header/header'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dream Big',
  description: 'Choose your color',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='max-[590px]:text-[11px] bg-[#f2ebbfc0]'>
      <body className={`${inter.className} flex flex-col items-center justify-between w-full min-h-screen gap-y-10`}>
        <ReduxProvider>
          <div className='flex flex-col items-center w-full gap-y-10'>
            <Header />
            {children}
          </div>
          <Footer />
        </ReduxProvider></body>
    </html>
  )
}
