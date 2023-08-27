import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import CustomChatbot from '../components/bot.js' 
import { SessionProvider } from "next-auth/react"
import Chart from 'chart.js/auto';
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return(<>
   <SessionProvider session={pageProps.session}>
        <NextUIProvider>
           <Component {...pageProps} />
        </NextUIProvider>
      </SessionProvider>
   <CustomChatbot />
  <Footer/>
  </>)
}
