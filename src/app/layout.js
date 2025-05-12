import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import 'react-toastify/dist/ReactToastify.css';
import LayoutWrapper from "@/components/layoutWrapper";
import { ToastContainer } from 'react-toastify';

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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
        </link>
        </head>
      <body
      //   className={`${geistSans.variable} ${geistMono.variable} antialiased`
      // }
      >
       
        <LayoutWrapper>{children}</LayoutWrapper>
        {/* <Footer></Footer> */}
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
