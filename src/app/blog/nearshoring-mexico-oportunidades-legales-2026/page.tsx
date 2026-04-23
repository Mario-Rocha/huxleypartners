import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nearshoring en México: Oportunidades Legales y Retos para Empresas Extranjeras en 2026 | Huxley Partners",
  description:
    "Análisis completo del marco legal para empresas extranjeras que buscan establecer operaciones de nearshoring en México. Requisitos de inversión, laborales, fiscales e inmigratorios.",
};

export default function ArticleNearshoring() {
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
              Inversión Extranjera
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Nearshoring en México: Oportunidades Legales y Retos para Empresas
              Extranjeras en 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>2 de abril, 2026</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>8 min lectura</span>
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
                En los últimos tres años, México se ha posicionado como el
                principal destino de nearshoring en América Latina. La
                combinación de proximidad geográfica con Estados Unidos, una
                fuerza laboral competitiva y un entorno comercial respaldado por
                el T-MEC ha atraído inversiones sin precedentes. Sin embargo, el
                éxito de cualquier operación de nearshoring depende en gran
                medida de la correcta navegación del marco legal mexicano.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                El contexto: México como polo de atracción
              </h2>
              <p className="text-text-light leading-relaxed">
                Según datos de la Secretaría de Economía, la inversión
                extranjera directa (IED) en México alcanzó niveles históricos en
                2024 y 2025, con sectores como manufactura avanzada, tecnología
                y servicios compartidos liderando el flujo de capital. El
                Instituto Nacional de Estadística y Geografía (INEGI) reporta
                que la industria manufacturera representó aproximadamente el 17%
                del PIB nacional, consolidando a México como la duodécima
                economía manufacturera del mundo. Estados como Nuevo León,
                Jalisco, Querétaro y Guanajuato se han convertido en corredores
                industriales de alta demanda, mientras que la Ciudad de México y
                Monterrey lideran en servicios corporativos y centros de
                operaciones.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Requisitos legales para la inversión extranjera
              </h2>
              <p className="text-text-light leading-relaxed">
                La Ley de Inversión Extranjera (LIE) establece el marco general
                para la participación de capital extranjero en actividades
                económicas en México. Si bien la mayoría de los sectores
                permiten hasta el 100% de inversión extranjera, existen
                actividades reservadas exclusivamente al Estado mexicano (como
                petróleo, electricidad del servicio público y correos) y
                actividades reservadas a mexicanos o sociedades con cláusula de
                exclusión de extranjeros (transporte terrestre de pasajeros,
                gasolineras, entre otras).
              </p>
              <p className="text-text-light leading-relaxed">
                Para constituir una sociedad mexicana con participación
                extranjera, el inversionista debe obtener un permiso de la
                Secretaría de Relaciones Exteriores (SRE) e inscribirse en el
                Registro Nacional de Inversiones Extranjeras (RNIE) ante la
                Comisión Nacional de Inversiones Extranjeras (CNIE). Este
                registro es obligatorio cuando la inversión extranjera participa
                en el capital social de una sociedad mexicana, cuando se
                realizan actos de comercio en México o cuando se supera el
                umbral de inversión establecido por la ley.
              </p>
              <p className="text-text-light leading-relaxed">
                Los vehículos societarios más utilizados son la Sociedad
                Anónima de Capital Variable (S.A. de C.V.) y la Sociedad de
                Responsabilidad Limitada de Capital Variable (S. de R.L. de
                C.V.). La elección depende de factores como el número de socios,
                la estructura de gobierno deseada y las implicaciones fiscales.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Marco laboral: REPSE y NOM-035
              </h2>
              <p className="text-text-light leading-relaxed">
                Una de las áreas más críticas para las empresas extranjeras es
                el cumplimiento laboral. La reforma de subcontratación de 2021
                transformó radicalmente el panorama: ahora solo se permite la
                subcontratación de servicios especializados u obras
                especializadas que no formen parte del objeto social ni de la
                actividad económica preponderante de la empresa contratante.
              </p>
              <p className="text-text-light leading-relaxed">
                Las empresas que ofrecen servicios especializados deben contar
                con el Registro de Prestadoras de Servicios Especializados u
                Obras Especializadas (REPSE) ante la Secretaría del Trabajo y
                Previsión Social (STPS). El incumplimiento puede resultar en
                multas de hasta 50,000 UMAs (aproximadamente $5.4 millones de
                pesos en 2026) y la responsabilidad solidaria del contratante.
              </p>
              <p className="text-text-light leading-relaxed">
                Adicionalmente, la NOM-035-STPS-2018 obliga a todos los
                empleadores a identificar, analizar y prevenir los factores de
                riesgo psicosocial en el trabajo. Para centros de trabajo con
                más de 50 empleados, se requieren evaluaciones periódicas del
                entorno organizacional y la implementación de medidas
                correctivas documentadas.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Incentivos fiscales y consideraciones tributarias
              </h2>
              <p className="text-text-light leading-relaxed">
                México ofrece diversos incentivos para atraer inversión
                extranjera. A nivel federal, el régimen de maquiladora (IMMEX)
                permite la importación temporal de materias primas y maquinaria
                sin pagar aranceles ni IVA, siempre que los productos
                terminados se exporten. Este programa ha sido fundamental para
                el crecimiento del sector manufacturero exportador.
              </p>
              <p className="text-text-light leading-relaxed">
                Varios estados ofrecen incentivos adicionales que pueden incluir
                reducciones en el impuesto sobre nóminas, descuentos en el
                impuesto predial, apoyo para capacitación de personal y
                facilidades en la obtención de permisos de construcción. Nuevo
                León, Jalisco y Querétaro han sido particularmente agresivos en
                sus paquetes de atracción de inversión.
              </p>
              <p className="text-text-light leading-relaxed">
                Sin embargo, es fundamental considerar las obligaciones
                tributarias: la tasa del Impuesto Sobre la Renta (ISR)
                corporativo es del 30%, y las operaciones entre partes
                relacionadas están sujetas a reglas estrictas de precios de
                transferencia conforme a las directrices de la OCDE.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Inmuebles y bienes raíces
              </h2>
              <p className="text-text-light leading-relaxed">
                La adquisición de inmuebles por extranjeros está sujeta a
                restricciones constitucionales en la llamada zona restringida
                (100 km desde las fronteras y 50 km desde las costas). En estas
                áreas, los extranjeros pueden adquirir derechos sobre inmuebles
                a través de fideicomisos bancarios con instituciones de crédito
                autorizadas. Fuera de la zona restringida, las sociedades
                mexicanas con participación extranjera pueden adquirir inmuebles
                directamente, siempre que incluyan la cláusula Calvo en sus
                estatutos.
              </p>
              <p className="text-text-light leading-relaxed">
                Para proyectos industriales, los parques industriales ofrecen
                ventajas significativas: infraestructura lista para operar,
                permisos y licencias simplificados, y en muchos casos, acceso a
                incentivos estatales preaprobados. La Asociación Mexicana de
                Parques Industriales Privados (AMPIP) reporta una tasa de
                ocupación superior al 95% en los principales corredores
                industriales del país.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Requisitos migratorios para ejecutivos y personal clave
              </h2>
              <p className="text-text-light leading-relaxed">
                Los ejecutivos y empleados extranjeros que trabajen en México
                necesitan una visa de residente temporal con permiso para
                realizar actividades remuneradas. El proceso típico involucra
                que la empresa mexicana obtenga una constancia de inscripción
                como empleador ante el Instituto Nacional de Migración (INM) y
                posteriormente tramite la oferta de empleo que servirá de base
                para que el extranjero solicite su visa en el consulado
                mexicano correspondiente.
              </p>
              <p className="text-text-light leading-relaxed">
                Para estancias de negocios de corta duración (reuniones,
                inspecciones, capacitaciones), la visa de visitante sin permiso
                para realizar actividades remuneradas generalmente es
                suficiente. El T-MEC también facilita la movilidad temporal de
                profesionistas entre México, Estados Unidos y Canadá en
                determinadas categorías ocupacionales.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Recomendaciones para una entrada exitosa
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Realizar un análisis previo del sector para determinar si
                    existen restricciones a la inversión extranjera en la
                    actividad planeada.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Elegir el vehículo societario adecuado considerando la
                    estructura del grupo, las implicaciones fiscales en ambas
                    jurisdicciones y los acuerdos para evitar la doble
                    tributación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Planificar el cumplimiento laboral desde el inicio,
                    incluyendo la estructura de contratación, el registro REPSE
                    si se utilizarán servicios especializados, y la
                    implementación de la NOM-035.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Evaluar los incentivos disponibles tanto a nivel federal
                    como estatal y negociarlos antes de comprometer la inversión.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Contar con asesoría legal especializada en derecho
                    corporativo, fiscal, laboral y migratorio para evitar
                    contingencias costosas.
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
                    Ley de Inversión Extranjera. Diario Oficial de la
                    Federación. Última reforma publicada.
                  </li>
                  <li>
                    Secretaría de Economía. Informe Estadístico sobre el
                    Comportamiento de la Inversión Extranjera Directa en México,
                    2024-2025.
                  </li>
                  <li>
                    INEGI. Producto Interno Bruto por Actividad Económica.
                    Sistema de Cuentas Nacionales de México.
                  </li>
                  <li>
                    NOM-035-STPS-2018. Factores de riesgo psicosocial en el
                    trabajo — Identificación, análisis y prevención. DOF.
                  </li>
                  <li>
                    Secretaría del Trabajo y Previsión Social. Registro de
                    Prestadoras de Servicios Especializados u Obras
                    Especializadas (REPSE). Lineamientos operativos.
                  </li>
                  <li>
                    Constitución Política de los Estados Unidos Mexicanos.
                    Artículo 27, fracción I (zona restringida).
                  </li>
                  <li>
                    AMPIP (Asociación Mexicana de Parques Industriales
                    Privados). Reporte de actividad industrial, 2025.
                  </li>
                  <li>
                    Ley de Migración y su Reglamento. Instituto Nacional de
                    Migración.
                  </li>
                  <li>
                    Tratado entre México, Estados Unidos y Canadá (T-MEC).
                    Capítulo 16: Entrada Temporal de Personas de Negocios.
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
              ¿Planea establecer operaciones en México?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Nuestro equipo cuenta con amplia experiencia asesorando a
              empresas internacionales en su entrada al mercado mexicano.
              Contáctenos para una consulta inicial.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Agendar consulta
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
