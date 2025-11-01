import { Inter } from "next/font/google";

import "./globals.css";

import Header from "./components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Binge",
  description: "Clean IPTV player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`px-[48px] ${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
