import type { Metadata } from "next";
import "./assets/styles/globals.scss";
import Header from "./components/Header";

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
        </body>
    </html>
  );
}
