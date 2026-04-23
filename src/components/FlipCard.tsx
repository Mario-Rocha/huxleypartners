"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  details?: string[];
  icon: string;
  tapLabel?: string;
}

export default function FlipCard({
  title,
  description,
  image,
  details,
  icon,
  tapLabel = "Toca para ver más",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[420px] perspective-[1200px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {title}
              </h3>
              <p className="text-xs text-white/60 mt-2">
                {tapLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="p-6 h-full flex flex-col overflow-y-auto">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={icon}
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary-dark mb-2 shrink-0">
              {title}
            </h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              {description}
            </p>
            {details && details.length > 0 && (
              <ul className="space-y-1.5">
                {details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-xs text-text-light"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
