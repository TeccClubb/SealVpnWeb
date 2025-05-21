// src/components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import { CookiesProvider } from "react-cookie";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/invoice"; // or use RegExp for dynamic routes

  return (
    <CookiesProvider>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </CookiesProvider>
  );
}
