"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinksEs = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-firma", label: "Nuestra Firma" },
  { href: "/servicios", label: "Servicios" },
  { href: "/newlaw", label: "NewLaw" },
  { href: "/blog", label: "Blog" },
  { href: "/ubicaciones", label: "Ubicaciones" },
  { href: "/servicios-europa", label: "Presencia Global" },
  { href: "/contacto", label: "Contacto" },
];

const navLinksEn = [
  { href: "/en", label: "Home" },
  { href: "/en/nuestra-firma", label: "Our Firm" },
  { href: "/en/servicios", label: "Services" },
  { href: "/en/newlaw", label: "NewLaw" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/ubicaciones", label: "Locations" },
  { href: "/en/servicios-europa", label: "Global Presence" },
  { href: "/en/contacto", label: "Contact" },
];

const DEFAULTS = {
  email: "contacto@huxleylegal.com",
  phone: "",
  address: "Bosque de Ciruelos 160, Piso 1",
  area: "Bosque de las Lomas",
  city: "Ciudad de México",
  postalCode: "11700",
  country: "MX",
  linkedinUrl: "https://www.linkedin.com/company/huxley-partners",
  twitterUrl: "https://twitter.com/HuxleyPartners",
  twitterHandle: "@HuxleyPartners",
};

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const navLinks = isEnglish ? navLinksEn : navLinksEs;

  const [contact, setContact] = useState(DEFAULTS);

  useEffect(() => {
    fetch("/site-config.json")
      .then((r) => r.json())
      .then((data) => {
        if (data?.general) {
          setContact({
            email:         data.general.email         || DEFAULTS.email,
            phone:         data.general.phone         || "",
            address:       data.general.address       || DEFAULTS.address,
            area:          data.general.area          || DEFAULTS.area,
            city:          data.general.city          || DEFAULTS.city,
            postalCode:    data.general.postalCode    || DEFAULTS.postalCode,
            country:       data.general.country       || DEFAULTS.country,
            linkedinUrl:   data.general.linkedinUrl   || DEFAULTS.linkedinUrl,
            twitterUrl:    data.general.twitterUrl    || DEFAULTS.twitterUrl,
            twitterHandle: data.general.twitterHandle || DEFAULTS.twitterHandle,
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide mb-2">
              HUXLEY PARTNERS
            </h3>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">
              Law Firm
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {isEnglish
                ? "We transform your business strategy through our international experience, legal innovation, and professional integrity."
                : "Transformamos su estrategia de negocios a través de nuestra experiencia internacional, innovación jurídica e integridad profesional."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
              {isEnglish ? "Navigation" : "Navegación"}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-accent">
              {isEnglish ? "Contact" : "Contacto"}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              {contact.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}
              <li>
                {contact.address}
                <br />
                {contact.area}
                <br />
                {contact.city} {contact.postalCode}, {contact.country}
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              {contact.twitterUrl && (
                <a
                  href={contact.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63 5.907-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  {contact.twitterHandle || contact.twitterUrl}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Huxley Partners, S.C.{" "}
            {isEnglish
              ? "All rights reserved."
              : "Todos los derechos reservados."}
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1">
            <a
              href={isEnglish ? "/en/aviso-de-privacidad" : "/aviso-de-privacidad"}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              {isEnglish ? "Privacy Policy" : "Aviso de Privacidad"}
            </a>
            <a
              href={isEnglish ? "/en/derechos-de-autor" : "/derechos-de-autor"}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              {isEnglish ? "Copyright" : "Derechos de Autor"}
            </a>
            <a
              href={isEnglish ? "/en/liberacion-de-responsabilidad" : "/liberacion-de-responsabilidad"}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              {isEnglish ? "Disclaimer" : "Liberación de Responsabilidad"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
