"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState } from "react";

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

const DEFAULTS: NosotrosData = {
  heroSubtitle: "El Equipo",
  heroTitle: "Nosotros",
  intro: "",
  teamTitle: "Nuestro Equipo",
  team: [],
};

export default function Nosotros() {
  const [data, setData] = useState<NosotrosData>(DEFAULTS);

  useEffect(() => {
    fetch("/site-config.json")
      .then((r) => r.json())
      .then((cfg) => {
        if (cfg?.nosotros) setData({ ...DEFAULTS, ...cfg.nosotros });
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              {data.heroSubtitle}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              {data.heroTitle}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      {data.intro && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-lg text-text-light leading-relaxed text-center">
                {data.intro}
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Team */}
      {data.team && data.team.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary-dark text-center mb-14">
                {data.teamTitle}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.team.map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary-dark mb-1">{member.name}</h3>
                    <p className="text-xs text-accent font-medium uppercase tracking-wide mb-3">{member.role}</p>
                    <p className="text-sm text-text-light leading-relaxed">{member.bio}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {(!data.intro && (!data.team || data.team.length === 0)) && (
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm text-text-light italic">
              Contenido en preparación. Administra esta página desde el Panel de Administración.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
