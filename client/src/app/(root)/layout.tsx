import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial Intelligence Platform",
  description: "A finance insight platform for students and early professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <AuthProvider>
          <Navigation />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
