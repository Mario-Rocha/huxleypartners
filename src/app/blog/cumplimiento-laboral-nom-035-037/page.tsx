import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cumplimiento Laboral en México: NOM-035, NOM-037 y Obligaciones del Empleador | Huxley Partners",
  description:
    "Análisis de las normas oficiales mexicanas NOM-035 y NOM-037, la reforma de subcontratación, el registro REPSE y las obligaciones laborales clave para empleadores.",
};

export default function ArticleCumplimientoLaboral() {
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
              Laboral
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Cumplimiento Laboral en México: NOM-035, NOM-037 y las
              Obligaciones del Empleador
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>15 de marzo, 2026</span>
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
                El cumplimiento laboral en México se ha vuelto considerablemente
                más complejo en los últimos años. La entrada en vigor de la
                NOM-035 sobre riesgos psicosociales, la NOM-037 sobre
                teletrabajo, la reforma de subcontratación de 2021 y las
                sucesivas modificaciones a la Ley Federal del Trabajo han
                creado un entorno regulatorio que exige atención especializada.
                Para los empleadores, el desconocimiento de estas obligaciones
                no solo genera riesgos legales, sino que puede traducirse en
                multas significativas y daño reputacional.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                NOM-035-STPS-2018: Riesgo psicosocial en el trabajo
              </h2>
              <p className="text-text-light leading-relaxed">
                La NOM-035, publicada en el Diario Oficial de la Federación el
                23 de octubre de 2018 y de cumplimiento obligatorio en todas
                sus fases desde octubre de 2020, establece los elementos para
                identificar, analizar y prevenir los factores de riesgo
                psicosocial, así como para promover un entorno organizacional
                favorable en los centros de trabajo.
              </p>
              <p className="text-text-light leading-relaxed">
                Los factores de riesgo psicosocial que esta norma busca
                prevenir incluyen las condiciones del ambiente laboral que
                generan estrés (cargas de trabajo excesivas, falta de control
                sobre el trabajo, jornadas prolongadas), la interferencia en la
                relación trabajo-familia, el liderazgo negativo, las relaciones
                laborales tóxicas y la violencia laboral en cualquiera de sus
                formas.
              </p>
              <p className="text-text-light leading-relaxed">
                Las obligaciones del empleador varían según el tamaño del
                centro de trabajo. La norma distingue tres niveles:
              </p>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>
                      Centros de trabajo de hasta 15 trabajadores:
                    </strong>{" "}
                    Deben establecer una política de prevención de riesgos
                    psicosociales, adoptar medidas de prevención, identificar a
                    los trabajadores que hayan sido sujetos a acontecimientos
                    traumáticos severos, y difundir información sobre la
                    política de prevención.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>
                      Centros de trabajo de 16 a 50 trabajadores:
                    </strong>{" "}
                    Además de lo anterior, deben aplicar cuestionarios para
                    identificar y analizar los factores de riesgo psicosocial.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>
                      Centros de trabajo de más de 50 trabajadores:
                    </strong>{" "}
                    Deben además realizar la evaluación del entorno
                    organizacional, implementar medidas y acciones de control
                    documentadas, y practicar exámenes médicos y evaluaciones
                    psicológicas a los trabajadores expuestos a violencia
                    laboral o factores de riesgo psicosocial.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                NOM-037-STPS-2023: Teletrabajo
              </h2>
              <p className="text-text-light leading-relaxed">
                La NOM-037, publicada en junio de 2023, regula las condiciones
                de seguridad y salud en el teletrabajo. Aplica a todos los
                centros de trabajo que cuenten con personas trabajadoras bajo
                la modalidad de teletrabajo, entendida como aquella que
                desempeña más del 40% de su tiempo de trabajo en un domicilio
                distinto al centro de trabajo del empleador.
              </p>
              <p className="text-text-light leading-relaxed">
                Las obligaciones principales del empleador bajo la NOM-037
                incluyen:
              </p>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Contar con un listado actualizado de las personas
                    teletrabajadoras que incluya nombre, género, estado civil,
                    actividades desarrolladas, perfil de puesto, domicilio
                    donde realizan el teletrabajo y razón social del centro de
                    trabajo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Establecer y documentar una política de teletrabajo que
                    defina mecanismos de comunicación, duración del horario,
                    forma de supervisión, y mecanismos para el derecho a la
                    desconexión.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Proporcionar las herramientas de trabajo necesarias
                    (equipo de cómputo, sillas ergonómicas, impresoras si se
                    requieren) o establecer una compensación económica por el
                    uso de los medios propios del trabajador.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Asumir una parte proporcional de los costos derivados del
                    teletrabajo, incluyendo servicios de telecomunicación y
                    electricidad.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Verificar las condiciones de seguridad y salud en el lugar
                    de teletrabajo mediante un listado de verificación de
                    condiciones que el propio trabajador o una comisión pueden
                    validar.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Reforma de subcontratación y REPSE
              </h2>
              <p className="text-text-light leading-relaxed">
                La reforma de subcontratación (outsourcing) de abril de 2021
                fue una de las modificaciones laborales más significativas en
                décadas. La reforma prohibió la subcontratación de personal
                (poner trabajadores propios a disposición de un tercero) y
                solo permite la subcontratación de servicios especializados u
                obras especializadas que no formen parte del objeto social ni
                de la actividad económica preponderante de la empresa
                beneficiaria.
              </p>
              <p className="text-text-light leading-relaxed">
                Las empresas que ofrecen servicios especializados deben
                obtener el Registro de Prestadoras de Servicios Especializados
                u Obras Especializadas (REPSE) ante la Secretaría del Trabajo
                y Previsión Social. Este registro debe renovarse cada tres
                años. Adicionalmente, las empresas contratantes deben
                verificar permanentemente que sus proveedores cuenten con
                REPSE vigente y que estén al corriente en sus obligaciones
                fiscales y de seguridad social.
              </p>
              <p className="text-text-light leading-relaxed">
                Las consecuencias del incumplimiento son severas. La persona
                física o moral que subcontrate personal en contravención de la
                ley puede ser sancionada con multas de 2,000 a 50,000 veces la
                Unidad de Medida y Actualización (UMA). Además, la empresa
                contratante se convierte en responsable solidaria de las
                obligaciones laborales y de seguridad social de los
                trabajadores del proveedor incumplido.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Sanciones e inspecciones
              </h2>
              <p className="text-text-light leading-relaxed">
                La STPS tiene facultades amplias de inspección para verificar
                el cumplimiento de las normas laborales. Las inspecciones
                pueden ser ordinarias (programadas) o extraordinarias
                (motivadas por denuncias, accidentes o condiciones de riesgo
                inminente). Durante una inspección, los inspectores pueden
                solicitar documentación que acredite el cumplimiento de la
                NOM-035, NOM-037, contratos de trabajo, recibos de nómina,
                registros REPSE y cualquier otra obligación laboral aplicable.
              </p>
              <p className="text-text-light leading-relaxed">
                Las multas por incumplimiento de las normas oficiales
                mexicanas en materia laboral van desde 250 a 5,000 UMAs por
                cada trabajador afectado. En casos graves, como la
                contravención a las disposiciones de subcontratación, las
                multas pueden alcanzar las 50,000 UMAs. Además, el IMSS puede
                imponer capitales constitutivos (cobros retroactivos con
                actualizaciones y recargos) cuando detecta irregularidades en
                la afiliación o cotización de trabajadores.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Pasos prácticos para el cumplimiento
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Auditoría laboral interna:</strong> Realizar un
                    diagnóstico completo del estado de cumplimiento actual,
                    identificando brechas en contratos, políticas, registros y
                    documentación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Implementación NOM-035:</strong> Aplicar los
                    cuestionarios de la Guía de Referencia II y III (según el
                    tamaño del centro de trabajo), analizar los resultados,
                    documentar las medidas correctivas y darles seguimiento.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Política de teletrabajo:</strong> Si la empresa
                    tiene teletrabajadores, formalizar la política conforme a
                    la NOM-037, actualizar contratos individuales y establecer
                    los mecanismos de verificación de condiciones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Revisión de proveedores:</strong> Verificar que
                    todos los contratos de servicios especializados cuenten con
                    REPSE vigente y establecer un proceso periódico de
                    monitoreo de cumplimiento de los proveedores.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Capacitación continua:</strong> Capacitar al área
                    de recursos humanos y a los responsables operativos sobre
                    las obligaciones laborales vigentes y los procedimientos
                    ante inspecciones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Documentación:</strong> Mantener registros
                    organizados y accesibles de todos los documentos de
                    cumplimiento, ya que serán requeridos en caso de inspección.
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
                    NOM-035-STPS-2018. Factores de riesgo psicosocial en el
                    trabajo — Identificación, análisis y prevención. DOF, 23 de
                    octubre de 2018.
                  </li>
                  <li>
                    NOM-037-STPS-2023. Teletrabajo — Condiciones de seguridad y
                    salud en el trabajo. DOF, 8 de junio de 2023.
                  </li>
                  <li>
                    Decreto por el que se reforman, adicionan y derogan
                    diversas disposiciones de la Ley Federal del Trabajo (reforma
                    de subcontratación). DOF, 23 de abril de 2021.
                  </li>
                  <li>
                    Secretaría del Trabajo y Previsión Social (STPS).
                    Lineamientos del Registro de Prestadoras de Servicios
                    Especializados u Obras Especializadas (REPSE).
                  </li>
                  <li>
                    Ley Federal del Trabajo. Artículos 12-15, 25, 47, 48, 132 y
                    330-A a 330-K (teletrabajo).
                  </li>
                  <li>
                    IMSS (Instituto Mexicano del Seguro Social). Ley del Seguro
                    Social — Disposiciones sobre afiliación, cotización y
                    capitales constitutivos.
                  </li>
                  <li>
                    STPS. Reglamento General de Inspección del Trabajo y
                    Aplicación de Sanciones.
                  </li>
                  <li>
                    Organización Internacional del Trabajo (OIT). Guía sobre
                    riesgos psicosociales en el trabajo — Perspectiva para
                    América Latina, 2024.
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
              ¿Necesita una auditoría de cumplimiento laboral?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Nuestro equipo laboral le ayuda a identificar riesgos,
              implementar las normas aplicables y prepararse para
              inspecciones de la STPS con confianza.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Solicitar auditoría
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
