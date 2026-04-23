"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";

const linksEs = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-firma", label: "Nuestra Firma" },
  { href: "/servicios", label: "Servicios" },
  { href: "/newlaw", label: "NewLaw" },
  { href: "/blog", label: "Blog" },
  { href: "/ubicaciones", label: "Ubicaciones" },
  { href: "/servicios-europa", label: "Presencia Global" },
  { href: "/contacto", label: "Contacto" },
];

const linksEn = [
  { href: "/en", label: "Home" },
  { href: "/en/nuestra-firma", label: "Our Firm" },
  { href: "/en/servicios", label: "Services" },
  { href: "/en/newlaw", label: "NewLaw" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/ubicaciones", label: "Locations" },
  { href: "/en/servicios-europa", label: "Global Presence" },
  { href: "/en/contacto", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const links = isEnglish ? linksEn : linksEs;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href={isEnglish ? "/en" : "/"}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logos/huxley.png"
              alt="Huxley Partners"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="block">
              <span
                className="text-lg font-semibold tracking-wide"
                style={{ color: "#325EA8" }}
              >
                HUXLEY PARTNERS
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-text-light uppercase">
                Law Firm
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4">
            {links.map((link) => {
              const isActive =
                link.href === (isEnglish ? "/en" : "/")
                  ? pathname === link.href
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium transition-colors duration-200 tracking-wide uppercase whitespace-nowrap ${
                    isActive
                      ? "text-primary font-semibold border-b border-primary pb-0.5"
                      : "text-text-light hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <LanguageToggle />
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-primary-dark"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-primary-dark"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-primary-dark"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => {
                const isActive =
                  link.href === (isEnglish ? "/en" : "/")
                    ? pathname === link.href
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-sm font-medium tracking-wide uppercase ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-text-light hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
