import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gobierno Corporativo en México: Mejores Prácticas para Empresas en Crecimiento | Huxley Partners",
  description:
    "Guía sobre mejores prácticas de gobierno corporativo en México. Estructura de consejo, cumplimiento regulatorio, protección de accionistas y gobernanza ESG.",
};

export default function ArticleGobiernoCorporativo() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Volver al blog
            </Link>
            <span className="text-xs font-semibold tracking-wide uppercase text-accent-light bg-white/10 px-3 py-1 rounded-full">
              Gobierno Corporativo
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Gobierno Corporativo en México: Mejores Prácticas para Empresas en
              Crecimiento
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>25 de marzo, 2026</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>7 min lectura</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-8">
              <p className="text-lg text-text leading-relaxed">
                El gobierno corporativo no es un lujo reservado para grandes
                corporaciones que cotizan en bolsa. Para empresas en
                crecimiento en México, implementar prácticas sólidas de
                gobierno corporativo desde etapas tempranas es una decisión
                estratégica que facilita el acceso a financiamiento, protege a
                los accionistas minoritarios, reduce riesgos operativos y
                genera confianza entre inversionistas, clientes y socios
                comerciales.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Marco regulatorio en México
              </h2>
              <p className="text-text-light leading-relaxed">
                El marco jurídico del gobierno corporativo en México se
                sustenta en varias fuentes. La Ley General de Sociedades
                Mercantiles (LGSM) establece las reglas básicas para la
                administración de sociedades, incluyendo la estructura de los
                órganos de gobierno, los derechos de los accionistas y las
                responsabilidades de los administradores. Para sociedades que
                cotizan en la Bolsa Mexicana de Valores, la Ley del Mercado de
                Valores (LMV) impone requisitos adicionales más estrictos.
              </p>
              <p className="text-text-light leading-relaxed">
                El Código de Mejores Prácticas Corporativas, emitido por el
                Consejo Coordinador Empresarial (CCE) y actualizado
                periódicamente, es el referente principal de gobernanza
                voluntaria en México. Aunque su cumplimiento no es obligatorio
                para empresas privadas, adoptar sus principios demuestra
                madurez institucional y es frecuentemente un requisito de
                inversionistas institucionales y fondos de capital privado.
              </p>
              <p className="text-text-light leading-relaxed">
                A nivel internacional, las Directrices de Gobierno Corporativo
                de la OCDE, a las cuales México está suscrito como país
                miembro, establecen estándares reconocidos globalmente sobre
                transparencia, rendición de cuentas, equidad en el trato a
                accionistas y el papel del consejo de administración.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Estructura del consejo de administración
              </h2>
              <p className="text-text-light leading-relaxed">
                Un consejo de administración efectivo es la piedra angular del
                buen gobierno corporativo. Para empresas en crecimiento, la
                recomendación es evolucionar gradualmente de un consejo
                compuesto exclusivamente por fundadores y familiares hacia uno
                que incorpore consejeros independientes con experiencia
                complementaria.
              </p>
              <p className="text-text-light leading-relaxed">
                El Código de Mejores Prácticas recomienda que al menos el 25%
                de los miembros del consejo sean independientes. Un consejero
                independiente es aquel que no tiene relación laboral,
                comercial significativa ni familiar con la empresa o sus
                accionistas de control. Su valor radica en aportar una
                perspectiva objetiva, cuestionar las decisiones de la
                administración cuando es necesario y proteger los intereses de
                todos los accionistas.
              </p>
              <p className="text-text-light leading-relaxed">
                Los comités del consejo son herramientas fundamentales de
                supervisión. Los más relevantes para empresas en crecimiento
                son el Comité de Auditoría (supervisión financiera y control
                interno), el Comité de Prácticas Societarias (conflictos de
                interés, operaciones con partes relacionadas, compensaciones) y,
                cada vez con mayor frecuencia, el Comité de Riesgos.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Programas de cumplimiento (compliance)
              </h2>
              <p className="text-text-light leading-relaxed">
                Un programa de cumplimiento robusto va más allá de tener un
                código de ética en un documento que nadie lee. Implica
                establecer políticas claras sobre anticorrupción, prevención de
                lavado de dinero, protección de datos personales, competencia
                económica y conflictos de interés, respaldadas por mecanismos
                efectivos de implementación y monitoreo.
              </p>
              <p className="text-text-light leading-relaxed">
                La Ley General de Responsabilidades Administrativas establece
                que las personas morales pueden ser sancionadas por actos de
                corrupción, pero también prevé un atenuante significativo para
                aquellas que demuestren contar con una política de integridad
                que incluya: un manual de organización y procedimientos, un
                código de conducta, sistemas adecuados de control interno,
                sistemas de denuncia (línea ética), capacitación periódica y
                mecanismos de auditoría.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Protección de accionistas minoritarios
              </h2>
              <p className="text-text-light leading-relaxed">
                La protección de los derechos de accionistas minoritarios es un
                indicador clave de la calidad del gobierno corporativo. La LGSM
                y la LMV establecen derechos fundamentales: derecho a la
                información, derecho a participar en las utilidades, derecho de
                tanto (preferencia en caso de nuevas emisiones), derecho de
                separación en ciertos supuestos y derecho de nombrar miembros
                del consejo cuando se represente al menos el 25% del capital
                social.
              </p>
              <p className="text-text-light leading-relaxed">
                En la práctica, los convenios entre accionistas
                (shareholders&apos; agreements) son el mecanismo más utilizado
                para regular la relación entre socios y proteger a las
                minorías. Estos acuerdos típicamente incluyen cláusulas de tag
                along (derecho de venta conjunta), drag along (obligación de
                venta conjunta), restricciones a la transferencia de acciones,
                mecanismos de resolución de puntos muertos (deadlock) y
                derechos de primera oferta.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Gobernanza ESG
              </h2>
              <p className="text-text-light leading-relaxed">
                Los criterios ambientales, sociales y de gobernanza (ESG) han
                dejado de ser una tendencia para convertirse en un requisito de
                inversionistas, reguladores y consumidores. En México, la CNBV
                ha intensificado los requerimientos de divulgación de
                información ESG para emisoras, y los fondos de inversión
                institucionales incorporan cada vez más estos criterios en sus
                decisiones de inversión.
              </p>
              <p className="text-text-light leading-relaxed">
                Para empresas en crecimiento, integrar la gobernanza ESG no
                implica necesariamente publicar reportes de sostenibilidad de
                200 páginas. Comienza con pasos concretos: establecer una
                política ambiental básica, implementar prácticas laborales
                responsables (que incluyan cumplimiento de NOM-035 y equidad de
                género), asegurar la transparencia en la cadena de suministro y
                documentar las prácticas de gobernanza.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Gobierno corporativo en empresas familiares
              </h2>
              <p className="text-text-light leading-relaxed">
                En México, las empresas familiares representan aproximadamente
                el 90% de las empresas establecidas y generan más del 50% del
                PIB. La gobernanza de empresas familiares presenta desafíos
                únicos: la separación entre propiedad, gobierno y operación
                resulta particularmente difícil cuando los roles se
                superponen.
              </p>
              <p className="text-text-light leading-relaxed">
                Las mejores prácticas para empresas familiares incluyen la
                creación de un protocolo familiar que defina las reglas de
                participación de la familia en el negocio, la constitución de
                un consejo familiar como órgano separado del consejo de
                administración, políticas claras de incorporación y
                compensación de familiares, y un plan de sucesión documentado
                y comunicado. Sin un protocolo familiar claro, los conflictos
                familiares frecuentemente se convierten en conflictos
                corporativos que pueden destruir tanto la empresa como las
                relaciones familiares.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Pasos prácticos para implementar buen gobierno corporativo
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Realizar un diagnóstico de la situación actual de gobierno
                    corporativo e identificar las brechas más críticas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Formalizar los estatutos sociales y reglamentos internos del
                    consejo de administración y sus comités.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Incorporar al menos un consejero independiente con
                    experiencia relevante para el giro del negocio.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Implementar un programa de cumplimiento con código de
                    conducta, línea de denuncia y capacitación periódica.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Celebrar convenios entre accionistas que regulen la
                    gobernanza, transferencia de acciones y resolución de
                    conflictos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Establecer procesos formales de toma de decisiones con
                    actas, registros y seguimiento de acuerdos.
                  </span>
                </li>
              </ul>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-dark mb-4">
                  Fuentes y referencias
                </h3>
                <ol className="space-y-2 text-sm text-text-light leading-relaxed list-decimal list-inside">
                  <li>
                    Código de Mejores Prácticas Corporativas. Consejo
                    Coordinador Empresarial (CCE), última edición.
                  </li>
                  <li>
                    Ley General de Sociedades Mercantiles (LGSM). Diario Oficial
                    de la Federación. Última reforma.
                  </li>
                  <li>
                    Ley del Mercado de Valores (LMV). Diario Oficial de la
                    Federación. Última reforma.
                  </li>
                  <li>
                    OCDE. Principios de Gobierno Corporativo del G20/OCDE,
                    edición 2023.
                  </li>
                  <li>
                    CNBV (Comisión Nacional Bancaria y de Valores). Disposiciones
                    de carácter general aplicables a las emisoras de valores.
                  </li>
                  <li>
                    Ley General de Responsabilidades Administrativas. Artículo
                    25 (política de integridad).
                  </li>
                  <li>
                    INEGI. Censos Económicos — Participación de empresas
                    familiares en la economía mexicana.
                  </li>
                  <li>
                    International Finance Corporation (IFC). Manual de Gobierno
                    Corporativo para Empresas Familiares.
                  </li>
                </ol>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              ¿Necesita fortalecer el gobierno corporativo de su empresa?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Asesoramos a empresas en la implementación de prácticas de
              gobierno corporativo adaptadas a su etapa de crecimiento y
              necesidades específicas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Solicitar asesoría
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
