import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Namo Nirvana",
  description: "A place where robots come alive.",
  icons: {
    icon: 'favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
