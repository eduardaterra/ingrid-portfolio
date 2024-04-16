import type { Metadata } from "next";
import { PT_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import "./styles.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ptMono = PT_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Ingrid Martins | Redação, Branding & Storytelling",
  authors: [{ name: "Ingrid Martins" }, { name: "Eduarda Terra" }],
  description:
    "Publicitária e redatora com foco em branding. Fica, vai ter portfólio!",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="pt-BR">
      <body className={ptMono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

