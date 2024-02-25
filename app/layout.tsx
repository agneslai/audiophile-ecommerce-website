import type { Metadata } from "next";
import "./assets/styles/globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
