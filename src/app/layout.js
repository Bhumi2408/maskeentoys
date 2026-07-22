import "./globals.css";

import { Source_Sans_3, Capriola } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
  display: "swap",
});

const loveYaLikeASister = localFont({
  src: "/fonts/LoveYaLikeASister-Regular.ttf",
  variable: "--font-love",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.playareamanufacturer.com/"),

  title: {
    default: "Maskeen Toys - Soft Play Area Manufacturer in Delhi",
  },

  description: "Maskeen Toys is a trusted Soft Play Area Manufacturer in Delhi, offering safe, durable, and customized play solutions for schools. Contact us now!",
   alternates: {
    canonical: "https://www.playareamanufacturer.com",
  },

  icons:{
    icon:"/fav.png"
  },
  verification: {
    google: "JReEb4fqiZKSV6VJuV4icUkC9oBn4Jd6PihoxwOfNxs",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V4CSENEPEP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V4CSENEPEP');
          `}
        </Script>
      </head>
      <body
        className={`${sourceSans.variable} ${capriola.variable} ${loveYaLikeASister.variable} font-source antialiased`}
      >
        <Header />

        <main>{children}</main>
        <WhatsAppButton/>
        <Footer />
      </body>
    </html>
  );
}