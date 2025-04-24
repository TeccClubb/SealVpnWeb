import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "SeelVPN -Secure Your Internet Connection",
  keywords: "VPN, Secure VPN, Fast VPN, Private VPN, Anonymous VPN",
  authors: [{ name: "SEELVPN" }],
  creator: "SEELVPN",
  description: "Generate your own VPN configuration files",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/seelvpnlogo.png" />
        <link rel="icon" href="/seelvpnlogo.png" sizes="any" />
        <link rel="icon" href="/seelvpnlogo.png" type="image/svg+xml" />
        </head>
      <body
      //   className={`${geistSans.variable} ${geistMono.variable} antialiased`
      // }
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
