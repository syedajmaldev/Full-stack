import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer"; 
import { getGlobalData } from "@/lib/global";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Valopt website",
  description: "Valopt website for AI solutions and services"
};

export default async function RootLayout({ children }) {
  const globalData = await getGlobalData();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav headerData={globalData?.header} />
        {children}
        <Footer footerData={globalData?.footer} />
      </body>
    </html>
  );
}
