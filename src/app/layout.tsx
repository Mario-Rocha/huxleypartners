import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huxley Partners | Law Firm",
  description:
    "Transformamos su estrategia de negocios a través de nuestra experiencia internacional, innovación jurídica e integridad profesional.",
  keywords: [
    "abogados",
    "despacho legal",
    "México",
    "derecho corporativo",
    "fusiones y adquisiciones",
    "legal tech",
    "nearshoring",
    "Huxley Partners",
  ],
  openGraph: {
    title: "Huxley Partners | Law Firm",
    description:
      "Transformamos su estrategia de negocios a través de nuestra experiencia internacional, innovación jurídica e integridad profesional.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
