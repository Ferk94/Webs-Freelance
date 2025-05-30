import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FooterFerk from "./components/footers/FooterFerk";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tu web en 7 días",
  description: "Tu web Profesional en 7 días",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FooterFerk />
      </body>
    </html>
  );
}
