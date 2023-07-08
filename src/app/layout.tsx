import './global.css'
import { Inter } from 'next/font/google'
import { GoogleTagManager, GoogleTagManagerId } from './components/GoogleTagManager';
import { googleTagManagerId } from './utils/gtm';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'share with blog',
  description: 'share with blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      </body>
    </html>
  )
}
