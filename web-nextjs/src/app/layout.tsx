import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALFRED CHOI | Technical Lead & Software Engineer",
  description: "Alfred Choi - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
