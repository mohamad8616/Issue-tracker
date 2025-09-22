import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Track ISSUE",
  description: "We don't let you make isuues!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}   ${inter.variable} antialiased`}>
        <Theme accentColor='bronze' scaling='105%'>
          <Navbar />
          <main className='p-5'>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
