import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShopProvider } from "@/context/ShopContext";

export const metadata: Metadata = {
  title: "Cordova",
  description: "Discover beauty and adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body className="scrollbar-hidden">
        <ShopProvider>
          <Header />
          {children}
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
