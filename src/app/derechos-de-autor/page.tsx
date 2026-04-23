"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState } from "react";

export default function DerechosDeAutor() {
  const [content, setContent] = useState<{ title: string; body: string } | null>(null);

  useEffect(() => {
    fetch("/site-config.json")
      .then((r) => r.json())
      .then((data) => {
        if (data?.copyright) setContent(data.copyright);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Legal
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-6">
              {content?.title || "Derechos de Autor"}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            {content?.body ? (
              <div className="prose prose-slate max-w-none text-sm text-text-light leading-relaxed whitespace-pre-line">
                {content.body}
              </div>
            ) : (
              <p className="text-sm text-text-light italic text-center py-16">
                El aviso de derechos de autor está siendo preparado. Por favor visite esta página más tarde.
              </p>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
