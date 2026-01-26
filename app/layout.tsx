import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "pretendard/dist/web/static/pretendard.css";
import "@/styles/globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wonny Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased ${inter.variable}`}>{children}</body>
    </html>
  );
}
