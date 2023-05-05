import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Comfortaa , Montserrat} from "next/font/google"

const comforta = Comfortaa({
  subsets: ["cyrillic"],
  variable: "--font-comforta"
})

const monserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-monserrat"
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${comforta.variable} ${monserrat.variable} text-white font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
