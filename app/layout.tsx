import type { Metadata } from "next";
import "./assets/styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Audiophile Ecommerce Website",
  description: "Audiophile Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
