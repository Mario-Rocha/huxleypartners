"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface GeneralInfo {
  firmName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  area: string;
  city: string;
  postalCode: string;
  country: string;
  linkedinUrl: string;
  twitterUrl: string;
  twitterHandle: string;
  newsletterHeading: string;
  newsletterText: string;
  newsletterDisclaimer: string;
}

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  details: string[];
}

interface LocationItem {
  id: string;
  city: string;
  country: string;
  badge: string;
  badgeColor: string;
  address: string | null;
  area: string | null;
  description: string;
  googleMapsUrl: string;
}

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

interface ContentPages {
  nuestraFirma: {
    heroSubtitle: string;
    heroTitle: string;
    firmDescription1: string;
    firmDescription2: string;
    firmDescription3: string;
    philosophyTitle: string;
    philosophyText1: string;
    philosophyText2: string;
    closingQuote: string;
  };
  newLaw: {
    heroSubtitle: string;
    heroText: string;
    introQuote: string;
    closingQuote: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    aboutSubtitle: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
  };
}

interface PrivacyPolicy {
  title: string;
  body: string;
}

interface Copyright {
  title: string;
  body: string;
}

interface Disclaimer {
  title: string;
  body: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface NosotrosData {
  heroSubtitle: string;
  heroTitle: string;
  intro: string;
  teamTitle: string;
  team: TeamMember[];
}

// ─── Default Data ────────────────────────────────────────────────────────────

const defaultGeneral: GeneralInfo = {
  firmName: "Huxley Partners",
  tagline: "Transformamos su estrategia de negocios a través de nuestra experiencia internacional, innovación jurídica e integridad profesional.",
  email: "contacto@huxleylegal.com",
  phone: "",
  whatsappNumber: "525598165416",
  address: "Bosque de Ciruelos 160, Piso 1",
  area: "Bosque de las Lomas",
  city: "Ciudad de México",
  postalCode: "11700",
  country: "MX",
  linkedinUrl: "https://www.linkedin.com/company/huxley-partners/",
  twitterUrl: "https://twitter.com/HuxleyPartners",
  twitterHandle: "@HuxleyPartners",
  newsletterHeading: "Suscríbete",
  newsletterText: "Suscríbete a nuestro boletín y mantente actualizado con las últimas novedades legales. No te preocupes, no te enviaremos demasiado contenido.",
  newsletterDisclaimer: "Al suscribirte, aceptas recibir comunicaciones electrónicas. Puedes cancelar tu suscripción en cualquier momento.",
};

const defaultPrivacyPolicy: PrivacyPolicy = {
  title: "Aviso de Privacidad",
  body: "",
};

const defaultCopyright: Copyright = {
  title: "Derechos de Autor",
  body: "",
};

const defaultDisclaimer: Disclaimer = {
  title: "Liberación de Responsabilidad",
  body: "",
};

const defaultNosotros: NosotrosData = {
  heroSubtitle: "El Equipo",
  heroTitle: "Nosotros",
  intro: "",
  teamTitle: "Nuestro Equipo",
  team: [],
};

const defaultServicesMx: ServiceItem[] = [
  { id: "1", slug: "corporativo-societario", image: "/images/services/corporativo.jpg", title: "Corporativo y Societario", description: "Asesoramos a corporaciones multinacionales, grupos empresariales y fondos de inversión en la estructuración, operación y gobierno de sus entidades en México, garantizando cumplimiento regulatorio, eficiencia corporativa y alineación con estándares internacionales.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", details: ["Constitución y estructuración de entidades mexicanas", "Secretaría corporativa y cumplimiento societario", "Gobierno corporativo y protección de derechos de accionistas", "Redacción y actualización de estatutos y acuerdos de socios", "Designación de poderes y representaciones legales", "Auditorías corporativas y procesos de regularización"] },
  { id: "2", slug: "ma-reestructuras", image: "/images/services/fusiones.jpg", title: "M&A y Reestructuras", description: "Asesoramos a clientes nacionales e internacionales en transacciones complejas de fusiones, adquisiciones y reorganizaciones corporativas en México y en operaciones transfronterizas. Nuestra asesoría integra análisis legal, financiero y estratégico.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", details: ["Fusiones y adquisiciones (buy-side y sell-side)", "Inversiones estratégicas y desinversiones", "Reestructuras corporativas y societarias", "Joint ventures y alianzas estratégicas", "Procesos de due diligence legal y regulatorio", "Negociación, estructuración y cierre de operaciones"] },
  { id: "3", slug: "gobierno-corporativo", image: "/images/services/gobierno-corporativo.jpg", title: "Gobierno Corporativo", description: "Diseño e implementación de estructuras de gobernanza, políticas de cumplimiento, programas de compliance y mejores prácticas que fortalecen la toma de decisiones empresariales.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", details: ["Diseño de estructuras de gobernanza", "Políticas de cumplimiento y compliance", "Programas de mejores prácticas", "Protección de derechos de accionistas e inversionistas"] },
  { id: "4", slug: "inversiones-extranjeras-nearshoring", image: "/images/services/nearshoring.jpg", title: "Inversiones Extranjeras y Nearshoring", description: "Acompañamos a inversionistas extranjeros y corporaciones multinacionales en su establecimiento, expansión y relocalización de operaciones en México, particularmente en contextos de nearshoring y proyectos estratégicos de largo plazo.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", details: ["Estructuración legal de inversiones extranjeras", "Constitución de subsidiarias, sucursales y oficinas de representación", "Joint ventures y asociaciones estratégicas", "Asesoría en sectores restringidos o altamente regulados", "Trámites ante SRE, CNIE y RNIE", "Cumplimiento continuo del régimen de inversión extranjera", "Incentivos y esquemas de inversión"] },
  { id: "5", slug: "laboral", image: "/images/services/laboral.jpg", title: "Laboral", description: "Asesoramos a corporaciones multinacionales en la gestión integral de sus relaciones laborales en México, con un enfoque preventivo orientado a la continuidad operativa y la mitigación de contingencias laborales.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", details: ["Contratación individual y colectiva", "Auditorías laborales y cumplimiento normativo", "Prevención y manejo de conflictos laborales", "Representación ante tribunales laborales", "Cumplimiento NOM-035 y NOM-037", "Consultoría en REPSE y esquemas de subcontratación"] },
  { id: "6", slug: "financiero", image: "/images/services/financiero.jpg", title: "Financiero", description: "Asesoramos a clientes nacionales e internacionales en proyectos financieros que respaldan decisiones estratégicas de inversión, crecimiento o reestructuración en México.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", details: ["Análisis financiero legal", "Estructuración y planeación de inversiones", "Optimización de capital y deuda", "Reestructuración financiera", "Financiamientos locales e internacionales", "Auditorías corporativas, inmobiliarias y crediticias"] },
  { id: "7", slug: "mercantil", image: "/images/services/mercantil.jpg", title: "Mercantil", description: "Asesoramos a nuestros clientes en relaciones comerciales complejas con un enfoque preventivo que reduzca riesgos y evite litigios futuros, sin perder capacidad de reacción cuando surgen controversias.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", details: ["Elaboración, negociación y revisión de contratos mercantiles", "Litigios mercantiles", "Estrategia comercial preventiva", "Métodos alternativos de resolución de disputas (ADR)", "Auditorías legales mercantiles", "Recuperación de cartera y cobranza"] },
  { id: "8", slug: "civil", image: "/images/services/civil.jpg", title: "Civil", description: "Ofrecemos asesoría integral en materia civil, combinando experiencia contenciosa con soluciones preventivas para proteger intereses personales y patrimoniales.", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", details: ["Litigio civil", "Responsabilidad civil", "Contratos civiles", "Asesoría sucesoria"] },
  { id: "9", slug: "derecho-administrativo", image: "/images/services/derecho-administrativo.jpg", title: "Derecho Administrativo", description: "Asesoramos y representamos a nuestros clientes frente a autoridades federales, estatales y municipales, brindando soluciones sólidas ante controversias administrativas y regulatorias.", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", details: ["Procedimientos administrativos", "Licitaciones públicas", "Contratos administrativos", "Recursos administrativos", "Juicios contenciosos administrativos", "Auditorías regulatorias y de cumplimiento"] },
  { id: "10", slug: "fiscal-controversias", image: "/images/services/fiscal.jpg", title: "Fiscal y Controversias", description: "Asesoramos y representamos a nuestros clientes frente a autoridades fiscales, brindando defensa estratégica en controversias administrativas y regulatorias.", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z", details: ["Procedimientos administrativos fiscales", "Recursos administrativos", "Juicios contenciosos administrativos", "Auditorías fiscales y de cumplimiento"] },
  { id: "11", slug: "derecho-de-autor", image: "/images/services/derecho-autor.jpg", title: "Derecho de Autor", description: "Asesoramos a empresas y creadores en la protección, explotación y defensa de derechos de autor en México.", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", details: ["Registro de derechos de autor", "Contratos de explotación y licenciamiento", "Defensa por infracción", "Due diligence en propiedad intelectual", "Fair use y uso legítimo", "Capacitación especializada"] },
  { id: "12", slug: "propiedad-industrial", image: "/images/services/propiedad-intelectual.jpg", title: "Propiedad Industrial", description: "Protegemos y gestionamos los activos de propiedad industrial de nuestros clientes, alineándolos con sus estrategias comerciales y de expansión.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", details: ["Registro de marcas", "Patentes y diseños industriales", "Licencias y franquicias", "Dominios", "Secretos industriales", "Litigios de propiedad intelectual"] },
  { id: "13", slug: "migratorio", image: "/images/services/migratorio.jpg", title: "Migratorio", description: "Asesoramos a empresas y ejecutivos extranjeros en todos los aspectos migratorios necesarios para operar legalmente en México.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", details: ["Visas y estancias", "Renovaciones y cambios migratorios", "Inscripción y actualización de empleadores", "Naturalización", "Regularización migratoria", "Recursos y procedimientos ante INM"] },
  { id: "14", slug: "industria-familiar-wealth-management", image: "/images/services/industria-familiar.jpg", title: "Industria Familiar y Wealth Management", description: "Asesoramos a grupos familiares y family offices en procesos de institucionalización, sucesión y protección patrimonial, combinando visión legal, corporativa y fiscal.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", details: ["Gobierno corporativo familiar", "Protocolos y acuerdos familiares", "Planes de sucesión", "Estructuras patrimoniales", "Fideicomisos", "Asesoría patrimonial integral"] },
  { id: "15", slug: "proteccion-al-consumidor", image: "/images/services/proteccion-consumidor.jpg", title: "Protección al Consumidor", description: "Asesoramos a empresas en el cumplimiento de la legislación de protección al consumidor y defensa ante PROFECO.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", details: ["Quejas y denuncias", "Procedimientos conciliatorios", "Contratos de adhesión", "Publicidad y promociones", "Procedimientos de clausura", "Comercio electrónico"] },
  { id: "16", slug: "newlaw-legal-ai", image: "/images/services/newlaw.jpg", title: "NewLaw y Legal AI", description: "Asesoramos a empresas y departamentos legales en la adopción de soluciones NewLaw, automatización y herramientas de Legal AI para optimizar la gestión legal, mejorar eficiencia y reducir riesgos operativos.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", details: ["Implementación de soluciones Legal Tech y Legal AI", "Automatización de procesos legales y contractuales", "Sistemas de gestión contractual (CLM)", "Modernización de departamentos legales", "Gobierno corporativo y gestión societaria digital"] },
];

const defaultServicesEu: ServiceItem[] = [
  { id: "eu1", slug: "corporate-governance-europe", image: "/images/services/corporativo.jpg", title: "Corporate & Governance", description: "Asesoramos a corporaciones multinacionales, grupos empresariales y fondos de inversión en la estructuración, operación y gobierno de sus entidades en Europa y Latinoamérica.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", details: ["Constitución y estructuración de sociedades", "Soporte societario y cumplimiento corporativo", "Gobierno corporativo y protección de accionistas", "Redacción de estatutos y pactos de socios", "Otorgamiento de poderes y representación legal", "Auditorías societarias y regularización"] },
  { id: "eu2", slug: "cross-border-ma", image: "/images/services/fusiones.jpg", title: "Cross-Border M&A y Transacciones Estratégicas", description: "Acompañamos a clientes en operaciones complejas de M&A transfronterizas y transacciones estratégicas que involucran múltiples jurisdicciones, con foco en derecho inglés y estructuración cross-border.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", details: ["Negociación, estructuración y cierre de transacciones", "Redacción de NDAs, LOIs, MOUs y SPAs", "Coordinación de due diligence multijurisdiccional", "Estructuración del riesgo legal", "Integración post-fusión", "Joint ventures y alianzas estratégicas", "Reestructuración multijurisdiccional", "Carve-outs pre-transacción"] },
  { id: "eu3", slug: "expansion-structuring", image: "/images/services/nearshoring.jpg", title: "Expansion & Structuring", description: "Ayudamos a empresas a expandirse y escalar operaciones en Europa, el Reino Unido y Latinoamérica, gestionando la complejidad legal, regulatoria y estructural.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", details: ["Estructuración de entrada a mercado", "Coordinación de despachos locales", "Cumplimiento normativo cross-border", "Escalado de operaciones internacionales", "Estructuración de inversiones extranjeras", "Constitución de filiales y sucursales", "Joint ventures y alianzas estratégicas"] },
  { id: "eu4", slug: "contratacion-mercantil-internacional", image: "/images/services/mercantil.jpg", title: "Contratación Mercantil Internacional", description: "Redactamos y negociamos contratos mercantiles complejos en entornos transfronterizos y tecnológicos, con enfoque en derecho inglés y common law.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", details: ["RFPs y licitaciones", "Contratos SaaS y tecnológicos", "Contratos marco y distribución", "Licencias y propiedad intelectual", "Estrategia de negociación y playbooks", "Resolución de disputas"] },
  { id: "eu5", slug: "optimizacion-legal-newlaw", image: "/images/services/newlaw.jpg", title: "Optimización Legal y NewLaw", description: "Asesoramos en la adopción de soluciones NewLaw, legal operations y Legal AI para optimizar la gestión legal y reducir riesgos operativos.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", details: ["Legal Tech y Legal AI", "Automatización de procesos legales", "CLM: selección e implementación", "Legal Entity Management", "Legal operations advisory", "Gobierno corporativo digital"] },
];

const defaultLocations: LocationItem[] = [
  { id: "loc1", city: "Ciudad de México", country: "México", badge: "Oficina Principal", badgeColor: "bg-accent text-white", address: "Bosque de Ciruelos 160, Piso 1", area: "Bosque de las Lomas, 11700", description: "Nuestra sede principal, desde donde coordinamos todas las operaciones de la firma y atendemos a clientes nacionales e internacionales con presencia en el mercado mexicano.", googleMapsUrl: "https://maps.google.com/?q=Bosque+de+Ciruelos+160+Bosque+de+las+Lomas+CDMX" },
  { id: "loc2", city: "España", country: "Europa", badge: "Oficina Europa", badgeColor: "bg-primary text-white", address: null, area: null, description: "Nuestra oficina europea nos permite atender directamente a clientes en la Unión Europea, facilitar transacciones transfronterizas y coordinar asuntos regulatorios bajo marcos europeos.", googleMapsUrl: "" },
  { id: "loc3", city: "República Checa", country: "Europa", badge: "Presencia Europa", badgeColor: "bg-primary-dark text-white", address: null, area: null, description: "Nuestra presencia en Europa Central fortalece nuestra capacidad de operar en múltiples jurisdicciones y atender asuntos corporativos con alcance continental.", googleMapsUrl: "" },
];

const defaultBlog: BlogArticle[] = [
  { id: "b1", slug: "nearshoring-mexico-oportunidades-legales-2026", title: "Nearshoring en México: Oportunidades Legales y Retos para Empresas Extranjeras en 2026", excerpt: "México se ha consolidado como destino clave de nearshoring. Conozca los aspectos legales esenciales para establecer operaciones exitosas en el mercado mexicano.", category: "Inversión Extranjera", date: "2 de abril, 2026", readTime: "8 min" },
  { id: "b2", slug: "legal-tech-transformacion-despachos-mexico", title: "Legal Tech y AI: Cómo la Tecnología Está Transformando los Despachos de Abogados en México", excerpt: "La adopción de herramientas de Legal AI y automatización está redefiniendo la práctica legal. Exploramos las tendencias y oportunidades para firmas mexicanas.", category: "NewLaw", date: "28 de marzo, 2026", readTime: "6 min" },
  { id: "b3", slug: "gobierno-corporativo-mejores-practicas", title: "Gobierno Corporativo en México: Mejores Prácticas para Empresas en Crecimiento", excerpt: "Un gobierno corporativo sólido es clave para atraer inversión y garantizar sostenibilidad. Conozca las mejores prácticas y marcos regulatorios aplicables.", category: "Gobierno Corporativo", date: "25 de marzo, 2026", readTime: "7 min" },
  { id: "b4", slug: "due-diligence-ma-mexico-guia", title: "Guía de Due Diligence para Operaciones de M&A en México", excerpt: "El due diligence es una etapa crítica en cualquier transacción de fusiones y adquisiciones. Presentamos los puntos clave que toda empresa debe considerar.", category: "M&A", date: "20 de marzo, 2026", readTime: "9 min" },
  { id: "b5", slug: "cumplimiento-laboral-nom-035-037", title: "Cumplimiento Laboral en México: NOM-035, NOM-037 y las Obligaciones del Empleador", excerpt: "Las normas oficiales mexicanas imponen obligaciones específicas a los empleadores. Analizamos los requisitos clave y estrategias de cumplimiento.", category: "Laboral", date: "15 de marzo, 2026", readTime: "7 min" },
];

const defaultContent: ContentPages = {
  nuestraFirma: {
    heroSubtitle: "Quiénes Somos",
    heroTitle: "Nuestra Firma",
    firmDescription1: "Huxley Partners es una firma de abogados mexicana que asesora a corporaciones multinacionales, inversionistas institucionales y empresas globales en sus asuntos legales más estratégicos en el mercado mexicano.",
    firmDescription2: "Operamos en la intersección entre transacciones, regulación y gobierno corporativo, apoyando decisiones de alto impacto que definen resultados de largo plazo.",
    firmDescription3: "Nuestra práctica está profundamente arraigada en el marco legal, regulatorio e institucional de México, y plenamente alineada con estándares internacionales de transacciones y gobierno corporativo.",
    philosophyTitle: "Enfoque en el negocio, no solo en lo legal",
    philosophyText1: "No concebimos la asesoría legal de manera aislada. Nuestro rol es apoyar los objetivos del negocio, gestionar riesgos y facilitar la toma de decisiones informadas en todas las etapas de una inversión, transacción u operación.",
    philosophyText2: "Ya sea en procesos de entrada a México, gobierno corporativo, M&A, exposición regulatoria u operaciones diarias, nuestro análisis está basado en una comprensión práctica de cómo operan las empresas en México.",
    closingQuote: "Creemos que el derecho no solo debe responder, sino transformar.",
  },
  newLaw: {
    heroSubtitle: "Innovación Jurídica",
    heroText: "Impulsamos una práctica legal que evoluciona al ritmo de la transformación digital, integrando tecnología de vanguardia con pensamiento estratégico.",
    introQuote: "Nuestra propuesta no es solo adoptar herramientas; es poner la innovación al servicio del valor legal.",
    closingQuote: "La tecnología legal que usamos no busca reemplazar el criterio humano, sino potenciarlo.",
  },
  home: {
    heroTitle: "Bienvenido a Huxley Partners",
    heroSubtitle: "Transformamos su estrategia de negocios a través de nuestra experiencia internacional, innovación jurídica e integridad profesional.",
    aboutSubtitle: "Nuestra Firma",
    aboutTitle: "Una firma legal con visión, innovación y cercanía",
    aboutText1: "Huxley Partners es una firma de abogados mexicana que asesora a corporaciones multinacionales, inversionistas institucionales y empresas globales en sus asuntos legales más estratégicos en el mercado mexicano.",
    aboutText2: "Operamos en la intersección entre transacciones, regulación y gobierno corporativo, apoyando decisiones de alto impacto que definen resultados de largo plazo.",
  },
};

// ─── Utility ─────────────────────────────────────────────────────────────────

function genId() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Toast Component ─────────────────────────────────────────────────────────

function Toast({ message, type, onClose }: { message: string; type: "success" | "error" | "info"; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  const bg = type === "success" ? "bg-emerald-600" : type === "error" ? "bg-red-600" : "bg-blue-600";
  return (
    <div className={`fixed top-6 right-6 z-[9999] ${bg} text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in`}>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="text-white/70 hover:text-white">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
}

// ─── Main Admin Panel ────────────────────────────────────────────────────────

type TabKey = "general" | "servicesMx" | "servicesEu" | "locations" | "blog" | "content";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "general", label: "Info General", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "servicesMx", label: "Servicios MX", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" },
  { key: "servicesEu", label: "Servicios EU", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" },
  { key: "locations", label: "Ubicaciones", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { key: "blog", label: "Blog", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
  { key: "content", label: "Contenido", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
];

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("general");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data state
  const [general, setGeneral] = useState<GeneralInfo>(defaultGeneral);
  const [servicesMx, setServicesMx] = useState<ServiceItem[]>(defaultServicesMx);
  const [servicesEu, setServicesEu] = useState<ServiceItem[]>(defaultServicesEu);
  const [locations, setLocations] = useState<LocationItem[]>(defaultLocations);
  const [blog, setBlog] = useState<BlogArticle[]>(defaultBlog);
  const [content, setContent] = useState<ContentPages>(defaultContent);
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicy>(defaultPrivacyPolicy);
  const [copyright, setCopyright] = useState<Copyright>(defaultCopyright);
  const [disclaimer, setDisclaimer] = useState<Disclaimer>(defaultDisclaimer);
  const [nosotros, setNosotros] = useState<NosotrosData>(defaultNosotros);

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);

  // Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const showToast = useCallback((message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
  }, []);

  // Track changes
  const [hasChanges, setHasChanges] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<"idle" | "success" | "error">("idle");

  // Load from server config (primary) then fall back to localStorage draft
  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/site-config.json?_=" + Date.now(), { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.general) setGeneral({ ...defaultGeneral, ...data.general });
          if (data.servicesMx) setServicesMx(data.servicesMx);
          if (data.servicesEu) setServicesEu(data.servicesEu);
          if (data.locations) setLocations(data.locations);
          if (data.blog) setBlog(data.blog);
          if (data.content) setContent(data.content);
          if (data.privacyPolicy) setPrivacyPolicy(data.privacyPolicy);
          if (data.copyright) setCopyright(data.copyright);
          if (data.disclaimer) setDisclaimer(data.disclaimer);
          if (data.nosotros) setNosotros(data.nosotros);
          return;
        }
      } catch {}
      // Fall back to localStorage draft
      try {
        const saved = localStorage.getItem("huxley-admin-data");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.general) setGeneral(data.general);
          if (data.servicesMx) setServicesMx(data.servicesMx);
          if (data.servicesEu) setServicesEu(data.servicesEu);
          if (data.locations) setLocations(data.locations);
          if (data.blog) setBlog(data.blog);
          if (data.content) setContent(data.content);
          if (data.privacyPolicy) setPrivacyPolicy(data.privacyPolicy);
          if (data.copyright) setCopyright(data.copyright);
          if (data.disclaimer) setDisclaimer(data.disclaimer);
          if (data.nosotros) setNosotros(data.nosotros);
        }
      } catch {}
    }
    loadConfig();
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    if (!authenticated) return;
    const data = { general, servicesMx, servicesEu, locations, blog, content };
    localStorage.setItem("huxley-admin-data", JSON.stringify(data));
  }, [general, servicesMx, servicesEu, locations, blog, content, authenticated]);

  // ─── Password Gate ───────────────────────────────────────────────────────

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Huxley Partners</h1>
            <p className="text-slate-400 text-sm">Panel de Administración</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === "huxley2026") {
                setAuthenticated(true);
                setPasswordError(false);
              } else {
                setPasswordError(true);
              }
            }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <label className="block text-sm font-medium text-slate-300 mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }}
              className={`w-full px-4 py-3 bg-white/5 border ${passwordError ? "border-red-500" : "border-white/20"} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm`}
              placeholder="Ingrese la contraseña"
              autoFocus
            />
            {passwordError && <p className="text-red-400 text-xs mt-2">Contraseña incorrecta</p>}
            <button type="submit" className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Acceder
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Publish to GitHub ───────────────────────────────────────────────────

  async function publishSite() {
    setIsPublishing(true);
    setPublishStatus("idle");
    try {
      const payload = { general, servicesMx, servicesEu, locations, blog, content, privacyPolicy, copyright, disclaimer, nosotros };
      const res = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error desconocido");
      }
      setHasChanges(false);
      setPublishStatus("success");
      showToast("✅ Publicado correctamente. El sitio se actualizará en ~1-2 min.", "success");
    } catch (e: unknown) {
      setPublishStatus("error");
      showToast(`❌ Error al publicar: ${e instanceof Error ? e.message : String(e)}`, "error");
    } finally {
      setIsPublishing(false);
    }
  }

  function resetToDefaults() {
    if (confirm("Esto restaurará todos los datos a los valores originales del sitio. ¿Continuar?")) {
      setGeneral(defaultGeneral);
      setServicesMx(defaultServicesMx);
      setServicesEu(defaultServicesEu);
      setLocations(defaultLocations);
      setBlog(defaultBlog);
      setContent(defaultContent);
      localStorage.removeItem("huxley-admin-data");
      setHasChanges(false);
      showToast("Datos restaurados a valores originales", "info");
    }
  }

  // ─── Render Helpers ──────────────────────────────────────────────────────

  function markChanged() {
    setHasChanges(true);
  }

  // ─── Tab Content Renderers ───────────────────────────────────────────────

  function renderGeneral() {
    return (
      <div className="space-y-8">
        <SectionHeader title="Información General" subtitle="Datos principales de la firma" />
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Nombre de la Firma" value={general.firmName} onChange={(v) => { setGeneral({ ...general, firmName: v }); markChanged(); }} />
            <Field label="Email" value={general.email} onChange={(v) => { setGeneral({ ...general, email: v }); markChanged(); }} />
            <Field label="Teléfono" value={general.phone} onChange={(v) => { setGeneral({ ...general, phone: v }); markChanged(); }} placeholder="(Opcional)" />
            <Field label="WhatsApp (número completo)" value={general.whatsappNumber} onChange={(v) => { setGeneral({ ...general, whatsappNumber: v }); markChanged(); }} placeholder="525598165416" />
            <Field label="LinkedIn URL" value={general.linkedinUrl} onChange={(v) => { setGeneral({ ...general, linkedinUrl: v }); markChanged(); }} />
            <Field label="X (Twitter) URL" value={general.twitterUrl} onChange={(v) => { setGeneral({ ...general, twitterUrl: v }); markChanged(); }} placeholder="https://twitter.com/..." />
            <Field label="X (Twitter) Handle" value={general.twitterHandle} onChange={(v) => { setGeneral({ ...general, twitterHandle: v }); markChanged(); }} placeholder="@handle" />
          </div>
          <FieldTextarea label="Tagline / Eslogan" value={general.tagline} onChange={(v) => { setGeneral({ ...general, tagline: v }); markChanged(); }} rows={2} />

          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide pt-4 border-t border-slate-100">Dirección</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Calle y Número" value={general.address} onChange={(v) => { setGeneral({ ...general, address: v }); markChanged(); }} />
            <Field label="Colonia / Zona" value={general.area} onChange={(v) => { setGeneral({ ...general, area: v }); markChanged(); }} />
            <Field label="Ciudad" value={general.city} onChange={(v) => { setGeneral({ ...general, city: v }); markChanged(); }} />
            <div className="grid grid-cols-2 gap-4">
              <Field label="C.P." value={general.postalCode} onChange={(v) => { setGeneral({ ...general, postalCode: v }); markChanged(); }} />
              <Field label="País" value={general.country} onChange={(v) => { setGeneral({ ...general, country: v }); markChanged(); }} />
            </div>
          </div>

          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide pt-4 border-t border-slate-100">Newsletter</h3>
          <Field label="Título del Newsletter" value={general.newsletterHeading} onChange={(v) => { setGeneral({ ...general, newsletterHeading: v }); markChanged(); }} />
          <FieldTextarea label="Texto del Newsletter" value={general.newsletterText} onChange={(v) => { setGeneral({ ...general, newsletterText: v }); markChanged(); }} rows={2} />
          <FieldTextarea label="Disclaimer" value={general.newsletterDisclaimer} onChange={(v) => { setGeneral({ ...general, newsletterDisclaimer: v }); markChanged(); }} rows={2} />
        </div>
        <SaveButton onClick={publishSite} label={isPublishing ? "Publicando…" : "Publicar en el Sitio"} disabled={isPublishing} />
      </div>
    );
  }

  function renderServices(items: ServiceItem[], setItems: (s: ServiceItem[]) => void, region: string) {
    return (
      <div className="space-y-6">
        <SectionHeader title={`Servicios - ${region}`} subtitle={`${items.length} servicios configurados`} />
        <button
          onClick={() => {
            const newItem: ServiceItem = { id: genId(), slug: "", title: "Nuevo Servicio", description: "", image: "", icon: "", details: [] };
            setItems([...items, newItem]);
            setEditingId(newItem.id);
            markChanged();
            showToast("Nuevo servicio agregado", "info");
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Agregar Servicio
        </button>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setEditingId(editingId === item.id ? null : item.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 rounded-full w-7 h-7 flex items-center justify-center">{idx + 1}</span>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.slug || "sin-slug"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Eliminar "${item.title}"?`)) {
                        setItems(items.filter((s) => s.id !== item.id));
                        markChanged();
                        showToast("Servicio eliminado", "error");
                      }
                    }}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${editingId === item.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {editingId === item.id && (
                <div className="px-6 pb-6 border-t border-slate-100 pt-5 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Título" value={item.title} onChange={(v) => { const u = [...items]; u[idx] = { ...item, title: v }; setItems(u); markChanged(); }} />
                    <Field label="Slug" value={item.slug} onChange={(v) => { const u = [...items]; u[idx] = { ...item, slug: v }; setItems(u); markChanged(); }} />
                  </div>
                  <FieldTextarea label="Descripción" value={item.description} onChange={(v) => { const u = [...items]; u[idx] = { ...item, description: v }; setItems(u); markChanged(); }} rows={3} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-3">
                      <label className="block text-xs font-medium text-gray-400 mb-1">Imagen</label>
                      <input type="text" value={item.image} onChange={(e) => { const u = [...items]; u[idx] = { ...item, image: e.target.value }; setItems(u); markChanged(); }} placeholder="URL o ruta de imagen..." className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 mb-2" />
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const file = e.dataTransfer.files[0]; if (file && file.type.startsWith("image/")) { const reader = new FileReader(); reader.onload = (ev) => { const u = [...items]; u[idx] = { ...item, image: ev.target?.result as string }; setItems(u); markChanged(); showToast("Imagen cargada", "success"); }; reader.readAsDataURL(file); } }}>
                        <p className="text-xs text-gray-500">Arrastra una imagen aquí o ingresa URL arriba</p>
                        {item.image && <img src={item.image} alt="" className="mt-2 h-16 mx-auto rounded object-cover" />}
                      </div>
                    </div>
                    <Field label="Icono SVG (path d)" value={item.icon} onChange={(v) => { const u = [...items]; u[idx] = { ...item, icon: v }; setItems(u); markChanged(); }} placeholder="M19 21V5..." />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Detalles / Servicios Incluidos</label>
                    <div className="space-y-2">
                      {item.details.map((detail, di) => (
                        <div key={di} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={detail}
                            onChange={(e) => {
                              const u = [...items];
                              const newDetails = [...item.details];
                              newDetails[di] = e.target.value;
                              u[idx] = { ...item, details: newDetails };
                              setItems(u);
                              markChanged();
                            }}
                            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                          />
                          <button
                            onClick={() => {
                              const u = [...items];
                              const newDetails = item.details.filter((_, i) => i !== di);
                              u[idx] = { ...item, details: newDetails };
                              setItems(u);
                              markChanged();
                            }}
                            className="p-2 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        const u = [...items];
                        u[idx] = { ...item, details: [...item.details, ""] };
                        setItems(u);
                        markChanged();
                      }}
                      className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      Agregar detalle
                    </button>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button onClick={() => { setEditingId(null); showToast("Cambios guardados", "success"); }} className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                      Guardar
                    </button>
                    <button onClick={() => setEditingId(null)} className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors">
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderLocations() {
    return (
      <div className="space-y-6">
        <SectionHeader title="Ubicaciones" subtitle={`${locations.length} ubicaciones configuradas`} />
        <button
          onClick={() => {
            const newLoc: LocationItem = { id: genId(), city: "Nueva Ubicación", country: "", badge: "", badgeColor: "bg-primary text-white", address: null, area: null, description: "", googleMapsUrl: "" };
            setLocations([...locations, newLoc]);
            setEditingId(newLoc.id);
            markChanged();
            showToast("Nueva ubicación agregada", "info");
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Agregar Ubicación
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((loc, idx) => (
            <div key={loc.id} className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
              {editingId === loc.id ? (
                <>
                  <Field label="Ciudad" value={loc.city} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, city: v }; setLocations(u); markChanged(); }} />
                  <Field label="País / Región" value={loc.country} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, country: v }; setLocations(u); markChanged(); }} />
                  <Field label="Badge" value={loc.badge} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, badge: v }; setLocations(u); markChanged(); }} placeholder="Ej: Oficina Principal" />
                  <Field label="Badge Color (Tailwind)" value={loc.badgeColor} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, badgeColor: v }; setLocations(u); markChanged(); }} placeholder="bg-accent text-white" />
                  <Field label="Dirección" value={loc.address || ""} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, address: v || null }; setLocations(u); markChanged(); }} placeholder="(Opcional)" />
                  <Field label="Zona / CP" value={loc.area || ""} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, area: v || null }; setLocations(u); markChanged(); }} placeholder="(Opcional)" />
                  <Field label="Google Maps URL" value={loc.googleMapsUrl || ""} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, googleMapsUrl: v }; setLocations(u); markChanged(); }} placeholder="https://maps.google.com/?q=..." />
                  <FieldTextarea label="Descripción" value={loc.description} onChange={(v) => { const u = [...locations]; u[idx] = { ...loc, description: v }; setLocations(u); markChanged(); }} rows={3} />
                  <div className="flex gap-2">
                    <button onClick={() => { setEditingId(null); showToast("Ubicación guardada", "success"); }} className="px-3 py-2 bg-emerald-600 text-white text-xs font-medium rounded-lg hover:bg-emerald-700 transition-colors">Guardar</button>
                    <button onClick={() => setEditingId(null)} className="px-3 py-2 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors">Cancelar</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-800">{loc.city}</h3>
                      <p className="text-xs text-slate-400">{loc.country}</p>
                    </div>
                    {loc.badge && <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{loc.badge}</span>}
                  </div>
                  {loc.address && <p className="text-xs text-slate-500">{loc.address}{loc.area ? `, ${loc.area}` : ""}</p>}
                  <p className="text-xs text-slate-500 line-clamp-3">{loc.description}</p>
                  <div className="flex gap-2 pt-1">
                    <button onClick={() => setEditingId(loc.id)} className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg hover:bg-blue-100 transition-colors">Editar</button>
                    <button
                      onClick={() => {
                        if (confirm(`Eliminar "${loc.city}"?`)) {
                          setLocations(locations.filter((l) => l.id !== loc.id));
                          markChanged();
                          showToast("Ubicación eliminada", "error");
                        }
                      }}
                      className="px-3 py-1.5 bg-red-50 text-red-600 text-xs font-medium rounded-lg hover:bg-red-100 transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderBlog() {
    return (
      <div className="space-y-6">
        <SectionHeader title="Blog & Insights" subtitle={`${blog.length} artículos publicados`} />
        <button
          onClick={() => {
            const newArticle: BlogArticle = { id: genId(), slug: "", title: "Nuevo Artículo", excerpt: "", category: "", date: new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" }), readTime: "5 min" };
            setBlog([newArticle, ...blog]);
            setEditingId(newArticle.id);
            markChanged();
            showToast("Nuevo artículo agregado", "info");
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Nuevo Artículo
        </button>

        <div className="space-y-4">
          {blog.map((article, idx) => (
            <div key={article.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setEditingId(editingId === article.id ? null : article.id)}
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {article.category && <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 shrink-0">{article.category}</span>}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">{article.title}</h3>
                    <p className="text-xs text-slate-400">{article.date} - {article.readTime} lectura</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Eliminar "${article.title}"?`)) {
                        setBlog(blog.filter((a) => a.id !== article.id));
                        markChanged();
                        showToast("Artículo eliminado", "error");
                      }
                    }}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${editingId === article.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {editingId === article.id && (
                <div className="px-6 pb-6 border-t border-slate-100 pt-5 space-y-4">
                  <Field label="Título" value={article.title} onChange={(v) => { const u = [...blog]; u[idx] = { ...article, title: v }; setBlog(u); markChanged(); }} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Field label="Slug" value={article.slug} onChange={(v) => { const u = [...blog]; u[idx] = { ...article, slug: v }; setBlog(u); markChanged(); }} />
                    <Field label="Categoría" value={article.category} onChange={(v) => { const u = [...blog]; u[idx] = { ...article, category: v }; setBlog(u); markChanged(); }} />
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Fecha" value={article.date} onChange={(v) => { const u = [...blog]; u[idx] = { ...article, date: v }; setBlog(u); markChanged(); }} />
                      <Field label="Lectura" value={article.readTime} onChange={(v) => { const u = [...blog]; u[idx] = { ...article, readTime: v }; setBlog(u); markChanged(); }} placeholder="8 min" />
                    </div>
                  </div>
                  <FieldTextarea label="Extracto" value={article.excerpt} onChange={(v) => { const u = [...blog]; u[idx] = { ...article, excerpt: v }; setBlog(u); markChanged(); }} rows={3} />
                  <div className="flex gap-2 pt-2">
                    <button onClick={() => { setEditingId(null); showToast("Artículo guardado", "success"); }} className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">Guardar</button>
                    <button onClick={() => setEditingId(null)} className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors">Cerrar</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderContent() {
    return (
      <div className="space-y-8">
        <SectionHeader title="Contenido de Páginas" subtitle="Textos editables de las páginas principales" />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-300 leading-relaxed">
            <strong>Nota sobre idiomas:</strong> Los cambios que realice aquí aplican a la versión en español. La versión en inglés se genera automáticamente al exportar el JSON. Para contenido personalizado en inglés, edite los archivos de la carpeta <code className="bg-blue-800/50 px-1 rounded">/en/</code> en el código fuente, o contacte a su equipo de desarrollo.
          </p>
        </div>

        {/* Home */}
        <ContentBlock title="Página de Inicio">
          <Field label="Título Hero" value={content.home.heroTitle} onChange={(v) => { setContent({ ...content, home: { ...content.home, heroTitle: v } }); markChanged(); }} />
          <FieldTextarea label="Subtítulo Hero" value={content.home.heroSubtitle} onChange={(v) => { setContent({ ...content, home: { ...content.home, heroSubtitle: v } }); markChanged(); }} rows={2} />
          <Field label="Sección About - Subtítulo" value={content.home.aboutSubtitle} onChange={(v) => { setContent({ ...content, home: { ...content.home, aboutSubtitle: v } }); markChanged(); }} />
          <Field label="Sección About - Título" value={content.home.aboutTitle} onChange={(v) => { setContent({ ...content, home: { ...content.home, aboutTitle: v } }); markChanged(); }} />
          <FieldTextarea label="About - Párrafo 1" value={content.home.aboutText1} onChange={(v) => { setContent({ ...content, home: { ...content.home, aboutText1: v } }); markChanged(); }} rows={3} />
          <FieldTextarea label="About - Párrafo 2" value={content.home.aboutText2} onChange={(v) => { setContent({ ...content, home: { ...content.home, aboutText2: v } }); markChanged(); }} rows={3} />
        </ContentBlock>

        {/* Nuestra Firma */}
        <ContentBlock title="Nuestra Firma">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Hero Subtítulo" value={content.nuestraFirma.heroSubtitle} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, heroSubtitle: v } }); markChanged(); }} />
            <Field label="Hero Título" value={content.nuestraFirma.heroTitle} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, heroTitle: v } }); markChanged(); }} />
          </div>
          <FieldTextarea label="Descripción 1" value={content.nuestraFirma.firmDescription1} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, firmDescription1: v } }); markChanged(); }} rows={3} />
          <FieldTextarea label="Descripción 2" value={content.nuestraFirma.firmDescription2} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, firmDescription2: v } }); markChanged(); }} rows={3} />
          <FieldTextarea label="Descripción 3" value={content.nuestraFirma.firmDescription3} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, firmDescription3: v } }); markChanged(); }} rows={3} />
          <Field label="Filosofía - Título" value={content.nuestraFirma.philosophyTitle} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, philosophyTitle: v } }); markChanged(); }} />
          <FieldTextarea label="Filosofía - Párrafo 1" value={content.nuestraFirma.philosophyText1} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, philosophyText1: v } }); markChanged(); }} rows={3} />
          <FieldTextarea label="Filosofía - Párrafo 2" value={content.nuestraFirma.philosophyText2} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, philosophyText2: v } }); markChanged(); }} rows={3} />
          <Field label="Cita de Cierre" value={content.nuestraFirma.closingQuote} onChange={(v) => { setContent({ ...content, nuestraFirma: { ...content.nuestraFirma, closingQuote: v } }); markChanged(); }} />
        </ContentBlock>

        {/* NewLaw */}
        <ContentBlock title="NewLaw & Legal Tech">
          <Field label="Hero Subtítulo" value={content.newLaw.heroSubtitle} onChange={(v) => { setContent({ ...content, newLaw: { ...content.newLaw, heroSubtitle: v } }); markChanged(); }} />
          <FieldTextarea label="Hero Texto" value={content.newLaw.heroText} onChange={(v) => { setContent({ ...content, newLaw: { ...content.newLaw, heroText: v } }); markChanged(); }} rows={3} />
          <Field label="Cita Introductoria" value={content.newLaw.introQuote} onChange={(v) => { setContent({ ...content, newLaw: { ...content.newLaw, introQuote: v } }); markChanged(); }} />
          <Field label="Cita de Cierre" value={content.newLaw.closingQuote} onChange={(v) => { setContent({ ...content, newLaw: { ...content.newLaw, closingQuote: v } }); markChanged(); }} />
        </ContentBlock>

        {/* Aviso de Privacidad */}
        <ContentBlock title="Aviso de Privacidad">
          <Field label="Título de la página" value={privacyPolicy.title} onChange={(v) => { setPrivacyPolicy({ ...privacyPolicy, title: v }); markChanged(); }} />
          <FieldTextarea label="Contenido del aviso (texto completo)" value={privacyPolicy.body} onChange={(v) => { setPrivacyPolicy({ ...privacyPolicy, body: v }); markChanged(); }} rows={12} />
          <p className="text-xs text-slate-400">El aviso se publica en <code className="bg-slate-100 px-1 rounded">/aviso-de-privacidad</code></p>
        </ContentBlock>

        {/* Derechos de Autor */}
        <ContentBlock title="Derechos de Autor">
          <Field label="Título de la página" value={copyright.title} onChange={(v) => { setCopyright({ ...copyright, title: v }); markChanged(); }} />
          <FieldTextarea label="Contenido (texto completo)" value={copyright.body} onChange={(v) => { setCopyright({ ...copyright, body: v }); markChanged(); }} rows={12} />
          <p className="text-xs text-slate-400">Se publica en <code className="bg-slate-100 px-1 rounded">/derechos-de-autor</code></p>
        </ContentBlock>

        {/* Liberación de Responsabilidad */}
        <ContentBlock title="Liberación de Responsabilidad">
          <Field label="Título de la página" value={disclaimer.title} onChange={(v) => { setDisclaimer({ ...disclaimer, title: v }); markChanged(); }} />
          <FieldTextarea label="Contenido (texto completo)" value={disclaimer.body} onChange={(v) => { setDisclaimer({ ...disclaimer, body: v }); markChanged(); }} rows={12} />
          <p className="text-xs text-slate-400">Se publica en <code className="bg-slate-100 px-1 rounded">/liberacion-de-responsabilidad</code></p>
        </ContentBlock>

        {/* Nosotros */}
        <ContentBlock title="Nosotros">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Hero Subtítulo" value={nosotros.heroSubtitle} onChange={(v) => { setNosotros({ ...nosotros, heroSubtitle: v }); markChanged(); }} />
            <Field label="Hero Título" value={nosotros.heroTitle} onChange={(v) => { setNosotros({ ...nosotros, heroTitle: v }); markChanged(); }} />
          </div>
          <FieldTextarea label="Introducción" value={nosotros.intro} onChange={(v) => { setNosotros({ ...nosotros, intro: v }); markChanged(); }} rows={4} />
          <Field label="Título de la sección de equipo" value={nosotros.teamTitle} onChange={(v) => { setNosotros({ ...nosotros, teamTitle: v }); markChanged(); }} />

          <div className="space-y-4">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Miembros del Equipo</label>
            {nosotros.team.map((member, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-slate-500">Miembro {i + 1}</span>
                  <button onClick={() => { const t = nosotros.team.filter((_, idx) => idx !== i); setNosotros({ ...nosotros, team: t }); markChanged(); }} className="text-xs text-red-400 hover:text-red-600">Eliminar</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Field label="Nombre" value={member.name} onChange={(v) => { const t = [...nosotros.team]; t[i] = { ...member, name: v }; setNosotros({ ...nosotros, team: t }); markChanged(); }} />
                  <Field label="Rol / Cargo" value={member.role} onChange={(v) => { const t = [...nosotros.team]; t[i] = { ...member, role: v }; setNosotros({ ...nosotros, team: t }); markChanged(); }} />
                </div>
                <FieldTextarea label="Biografía" value={member.bio} onChange={(v) => { const t = [...nosotros.team]; t[i] = { ...member, bio: v }; setNosotros({ ...nosotros, team: t }); markChanged(); }} rows={2} />
              </div>
            ))}
            <button onClick={() => { setNosotros({ ...nosotros, team: [...nosotros.team, { name: "", role: "", bio: "" }] }); markChanged(); }} className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Agregar miembro del equipo
            </button>
          </div>
          <p className="text-xs text-slate-400">La página "Nosotros" se publica en <code className="bg-slate-100 px-1 rounded">/nosotros</code></p>
        </ContentBlock>

        <SaveButton onClick={publishSite} label={isPublishing ? "Publicando…" : "Publicar en el Sitio"} disabled={isPublishing} />
      </div>
    );
  }

  // ─── Layout ──────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-50 lg:z-0 h-screen w-72 bg-slate-900 text-white flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Brand */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <span className="text-sm font-bold text-white">HP</span>
            </div>
            <div>
              <h1 className="font-bold text-sm">Huxley Partners</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setSidebarOpen(false); setEditingId(null); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
              </svg>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <a
            href="https://huxley-partners.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            Ver Sitio
          </a>
          <button onClick={() => { setAuthenticated(false); setPassword(""); }} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm font-medium rounded-xl transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <div>
                <h2 className="text-lg font-bold text-slate-800">{tabs.find((t) => t.key === activeTab)?.label}</h2>
                <p className="text-xs text-slate-400">Gestión de contenido del sitio web</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {hasChanges && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                  Cambios sin publicar
                </span>
              )}
              {publishStatus === "success" && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Publicado — actualizando sitio…
                </span>
              )}
              <button onClick={resetToDefaults} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 text-sm font-medium rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Restaurar
              </button>
              <button
                onClick={publishSite}
                disabled={isPublishing}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                {isPublishing ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Publicando…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    Publicar en el Sitio
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 lg:p-8 max-w-5xl">
          {activeTab === "general" && renderGeneral()}
          {activeTab === "servicesMx" && renderServices(servicesMx, setServicesMx, "México")}
          {activeTab === "servicesEu" && renderServices(servicesEu, setServicesEu, "Europa")}
          {activeTab === "locations" && renderLocations()}
          {activeTab === "blog" && renderBlog()}
          {activeTab === "content" && renderContent()}
        </div>
      </main>

      {/* Slide-in animation */}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// ─── Reusable Components ─────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
      />
    </div>
  );
}

function FieldTextarea({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors resize-none"
      />
    </div>
  );
}

function SaveButton({ onClick, label = "Guardar Cambios", disabled = false }: { onClick: () => void; label?: string; disabled?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled} className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      {label}
    </button>
  );
}

function ContentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
        <h3 className="font-semibold text-slate-700 text-sm">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
}
