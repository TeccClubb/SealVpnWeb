import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/layoutWrapper";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "SeelVPN - Secure Your Internet Connection",
  keywords: "VPN, Secure VPN, Fast VPN, Private VPN, Anonymous VPN",
  authors: [{ name: "SEELVPN" }],
  creator: "SEELVPN",
  description: "Generate your own VPN configuration files",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/loginicon.png" />
        <link rel="icon" href="/loginicon.png" sizes="any" />
        <link rel="icon" href="/loginicon.png" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-background text-foreground">
        <LayoutWrapper>{children}</LayoutWrapper>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
