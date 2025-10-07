"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import { SessionProvider } from "next-auth/react";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/invoice"; // or use RegExp for dynamic routes

  return (
    <SessionProvider>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </SessionProvider>
  );
}
