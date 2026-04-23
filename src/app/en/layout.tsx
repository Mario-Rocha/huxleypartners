import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huxley Partners | Law Firm",
  description:
    "We transform your business strategy through our international experience, legal innovation, and professional integrity.",
  keywords: [
    "lawyers",
    "law firm",
    "Mexico",
    "corporate law",
    "mergers and acquisitions",
    "legal tech",
    "nearshoring",
    "Huxley Partners",
  ],
  openGraph: {
    title: "Huxley Partners | Law Firm",
    description:
      "We transform your business strategy through our international experience, legal innovation, and professional integrity.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
