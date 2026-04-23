"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface Item {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  items: Item[];
}

export default function MethodologyAccordion({ items }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-white/10">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <AnimatedSection key={item.title} delay={i * 0.06}>
            <div
              className={`transition-colors duration-300 ${isOpen ? "bg-white/5" : "hover:bg-white/3"}`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                aria-expanded={isOpen}
              >
                {/* Number */}
                <span className="font-mono text-xs tracking-[0.15em] text-accent/70 w-6 flex-shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-accent text-white" : "bg-white/8 text-white/60 group-hover:bg-white/12"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </span>

                {/* Title */}
                <span
                  className={`flex-1 font-[family-name:var(--font-display)] text-lg font-medium leading-snug transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-white/75 group-hover:text-white/90"
                  }`}
                >
                  {item.title}
                </span>

                {/* Chevron */}
                <svg
                  className={`w-4 h-4 flex-shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 pl-[4.25rem] text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
