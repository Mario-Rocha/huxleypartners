"use client";

import { useState } from "react";

interface Props {
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
}

export default function NewsletterForm({
  placeholder = "Tu dirección de email",
  buttonLabel = "Suscribir",
  successMessage = "¡Suscrito! Te mantendremos al tanto.",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error || "Error. Intente de nuevo.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Error de conexión. Intente de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 px-5 py-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-700 font-medium max-w-lg mx-auto">
        ✓ {successMessage}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
        required
        disabled={status === "sending"}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "…" : buttonLabel}
      </button>
      {status === "error" && (
        <p className="w-full text-xs text-red-600 text-center">{errorMsg}</p>
      )}
    </form>
  );
}
