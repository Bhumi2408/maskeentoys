import "./globals.css";

import { Source_Sans_3, Capriola } from "next/font/google";
import localFont from "next/font/local";
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

  icons:{
    icon:"/fav.png"
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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