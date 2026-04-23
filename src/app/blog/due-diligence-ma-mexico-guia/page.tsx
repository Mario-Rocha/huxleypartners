import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Guía de Due Diligence para Operaciones de M&A en México | Huxley Partners",
  description:
    "Guía completa sobre el proceso de due diligence en transacciones de fusiones y adquisiciones en México. Tipos, alcance, red flags y mejores prácticas.",
};

export default function ArticleDueDiligence() {
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
              M&A
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Guía de Due Diligence para Operaciones de M&A en México
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>20 de marzo, 2026</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>9 min lectura</span>
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
                El due diligence es el proceso de investigación y verificación
                que realiza un comprador potencial antes de completar una
                transacción de fusiones y adquisiciones (M&A). En México, donde
                el marco regulatorio presenta particularidades significativas y
                la informalidad puede generar riesgos ocultos, un due diligence
                riguroso no es opcional: es la diferencia entre una
                adquisición exitosa y una que genere contingencias millonarias.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Tipos de due diligence
              </h2>

              <h3 className="text-xl font-bold text-primary-dark">
                Due diligence legal (corporativo)
              </h3>
              <p className="text-text-light leading-relaxed">
                El due diligence legal corporativo examina la situación
                societaria de la empresa objetivo. Incluye la revisión del
                acta constitutiva y sus reformas, la verificación de la
                existencia legal de la sociedad en el Registro Público de
                Comercio, el análisis de la estructura accionaria y la cadena
                de titularidad, la revisión de poderes vigentes y sus alcances,
                actas de asambleas de accionistas y sesiones de consejo, y la
                verificación de cumplimiento de obligaciones societarias
                (avisos al SAT, inscripciones, informes anuales).
              </p>
              <p className="text-text-light leading-relaxed">
                En el contexto mexicano, es particularmente importante
                verificar que las reformas estatutarias hayan sido debidamente
                protocolizadas ante fedatario público e inscritas en el
                Registro Público de Comercio. La falta de inscripción puede
                generar problemas de oponibilidad frente a terceros conforme
                a la Ley General de Sociedades Mercantiles.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Due diligence laboral
              </h3>
              <p className="text-text-light leading-relaxed">
                Dada la naturaleza proteccionista del derecho laboral mexicano,
                la revisión laboral es frecuentemente donde se descubren las
                contingencias más significativas. El análisis debe cubrir
                contratos individuales de trabajo (verificando que cumplan con
                los requisitos del artículo 25 de la Ley Federal del Trabajo),
                contratos colectivos de trabajo y relaciones sindicales,
                situación ante el IMSS e INFONAVIT (incluyendo posibles
                diferencias en la integración del salario base de cotización),
                cumplimiento de participación de los trabajadores en las
                utilidades (PTU), actas de inspección de la STPS, y
                cumplimiento de la NOM-035 y NOM-037.
              </p>
              <p className="text-text-light leading-relaxed">
                La reforma de subcontratación de 2021 añadió una capa
                adicional de complejidad: es esencial verificar que todos los
                contratos de servicios especializados cuenten con registro
                REPSE vigente y que los proveedores estén al corriente en sus
                obligaciones fiscales y de seguridad social, ya que el
                contratante puede ser responsable solidario.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Due diligence fiscal
              </h3>
              <p className="text-text-light leading-relaxed">
                La revisión fiscal debe abarcar al menos los últimos cinco
                ejercicios fiscales (periodo de prescripción general conforme
                al Código Fiscal de la Federación). Los puntos clave incluyen
                la situación fiscal ante el SAT, dictámenes fiscales
                presentados, créditos fiscales o controversias pendientes,
                opiniones de cumplimiento, estudio de precios de transferencia
                (para operaciones con partes relacionadas), el correcto
                tratamiento de IVA e ISR, y la existencia de beneficios
                fiscales o estímulos aplicados.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Due diligence ambiental
              </h3>
              <p className="text-text-light leading-relaxed">
                Para empresas industriales y manufactureras, el due diligence
                ambiental es crítico. México cuenta con un marco regulatorio
                ambiental extenso administrado por la SEMARNAT y las
                autoridades ambientales estatales. La revisión debe incluir
                licencias ambientales y de funcionamiento, manifiestos de
                impacto ambiental, registros de generación de residuos
                peligrosos, cédulas de operación anual, y la posible
                existencia de pasivos ambientales (contaminación de suelo,
                agua subterránea) que pueden representar costos de remediación
                extraordinarios.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Due diligence regulatorio y de competencia
              </h3>
              <p className="text-text-light leading-relaxed">
                Dependiendo del sector y el tamaño de la transacción, puede
                ser necesario obtener la autorización de la Comisión Federal
                de Competencia Económica (COFECE). La Ley Federal de
                Competencia Económica establece umbrales de notificación
                obligatoria basados en el valor de la transacción, los
                ingresos de las partes o el valor de los activos involucrados.
                Cerrar una concentración sin la autorización requerida puede
                resultar en multas de hasta el 8% de los ingresos del
                infractor y la nulidad de la transacción.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Red flags comunes en el mercado mexicano
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Irregularidades en la propiedad accionaria:</strong>{" "}
                    Endosos en blanco de acciones, registros de accionistas
                    desactualizados, o acciones cedidas sin las formalidades
                    legales requeridas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Contingencias laborales ocultas:</strong>{" "}
                    Subregistro de empleados ante el IMSS, integración
                    incorrecta del salario base de cotización, demandas
                    laborales no reportadas o acuerdos informales con
                    trabajadores.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Exposición fiscal:</strong> Uso de esquemas
                    agresivos de planeación fiscal, operaciones con empresas que
                    facturan operaciones simuladas (EFOS), o inconsistencias
                    entre las declaraciones fiscales y la contabilidad.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Problemas inmobiliarios:</strong> Inmuebles sin
                    escrituras debidamente inscritas, gravámenes no revelados,
                    irregularidades en el uso de suelo o en las licencias de
                    construcción.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Incumplimiento regulatorio:</strong> Operación sin
                    las licencias o permisos sectoriales requeridos, o con
                    permisos vencidos o en proceso de revocación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Litigios no revelados:</strong> Demandas civiles,
                    mercantiles o administrativas que no han sido informadas al
                    comprador durante las negociaciones.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Cronograma típico y documentos clave
              </h2>
              <p className="text-text-light leading-relaxed">
                Un due diligence estándar en México suele tomar entre 4 y 8
                semanas, dependiendo de la complejidad de la empresa objetivo.
                La información se comparte típicamente a través de un data room
                virtual organizado por materias. Los documentos fundamentales
                que debe solicitar el comprador incluyen:
              </p>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Acta constitutiva y todas sus reformas protocolizadas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Libro de registro de acciones y títulos accionarios.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Declaraciones anuales de ISR e IVA de los últimos cinco
                    ejercicios.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Contratos materiales vigentes (clientes, proveedores,
                    arrendamiento, financiamiento).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Expedientes laborales y evidencia de cumplimiento REPSE.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Permisos, licencias y autorizaciones regulatorias vigentes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Listado completo de litigios y procedimientos
                    administrativos pendientes.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Consideraciones para transacciones transfronterizas
              </h2>
              <p className="text-text-light leading-relaxed">
                Cuando el comprador es una empresa extranjera, el due diligence
                debe abordar aspectos adicionales: el cumplimiento con la Ley
                de Inversión Extranjera (restricciones sectoriales), la
                existencia de tratados para evitar la doble tributación entre
                las jurisdicciones involucradas, obligaciones de reporte ante
                la CNIE, implicaciones de la Ley Federal para la Prevención e
                Identificación de Operaciones con Recursos de Procedencia
                Ilícita (Ley Antilavado), y consideraciones de control de
                cambios y repatriación de dividendos.
              </p>
              <p className="text-text-light leading-relaxed">
                Es también fundamental considerar las regulaciones
                anticorrupción aplicables en la jurisdicción del comprador,
                como el Foreign Corrupt Practices Act (FCPA) de Estados Unidos
                o el UK Bribery Act, que pueden tener implicaciones
                extraterritoriales significativas.
              </p>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-dark mb-4">
                  Fuentes y referencias
                </h3>
                <ol className="space-y-2 text-sm text-text-light leading-relaxed list-decimal list-inside">
                  <li>
                    Ley General de Sociedades Mercantiles (LGSM). Diario Oficial
                    de la Federación. Última reforma.
                  </li>
                  <li>
                    Ley Federal del Trabajo (LFT). Artículos 25, 132 y
                    disposiciones sobre subcontratación.
                  </li>
                  <li>
                    Código Fiscal de la Federación. Título III (De las
                    Facultades de las Autoridades Fiscales).
                  </li>
                  <li>
                    Ley Federal de Competencia Económica. Artículos 61-72
                    (concentraciones).
                  </li>
                  <li>
                    COFECE (Comisión Federal de Competencia Económica). Guía
                    para la notificación de concentraciones, 2024.
                  </li>
                  <li>
                    Ley de Inversión Extranjera. Artículos 5-9 (actividades
                    reservadas y reguladas).
                  </li>
                  <li>
                    Ley Federal para la Prevención e Identificación de
                    Operaciones con Recursos de Procedencia Ilícita (Ley
                    Antilavado).
                  </li>
                  <li>
                    SAT (Servicio de Administración Tributaria). Reglas
                    Generales de Comercio Exterior y disposiciones aplicables.
                  </li>
                  <li>
                    SEMARNAT. Ley General del Equilibrio Ecológico y la
                    Protección al Ambiente y su Reglamento.
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
              ¿Planea una adquisición o fusión en México?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Nuestro equipo de abogados especializados en M&A realiza
              procesos de due diligence exhaustivos para proteger su
              inversión y anticipar contingencias.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Solicitar propuesta
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
