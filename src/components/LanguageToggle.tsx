"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const getAlternatePath = () => {
    if (isEnglish) {
      return pathname.replace(/^\/en/, "") || "/";
    }
    return `/en${pathname === "/" ? "" : pathname}`;
  };

  return (
    <Link
      href={getAlternatePath()}
      className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
      style={{ color: "#325EA8" }}
    >
      {isEnglish ? "ES" : "EN"}
    </Link>
  );
}
