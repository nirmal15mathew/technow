import { Poppins } from "next/font/google"
import Header from "../Header/Header"

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
}
)

export const metadata = {
  title: 'Technow',
  description: 'Tech for tomorrow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
