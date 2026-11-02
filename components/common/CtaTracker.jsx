"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getChannel(href = "") {
  if (/wa\.me|whatsapp\.com/i.test(href)) return "whatsapp";
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  if (/maps\.app\.goo\.gl|google\.[a-z.]+\/maps/i.test(href)) return "maps";
  if (/instagram\.com|tiktok\.com|youtube\.com|youtu\.be/i.test(href)) return "social";
  if (/g\.page|search\.google|google\.[a-z.]+\/search/i.test(href)) return "reviews";
  if (href && !href.startsWith("http")) return "internal";
  try {
    return new URL(href).host === window.location.host ? "internal" : "external";
  } catch {
    return "internal";
  }
}

/**
 * Registro centralizado de clics en CTAs (un solo listener para todo el sitio).
 * Para medir un CTA basta con añadirle data-cta="<id>" al enlace o botón.
 * Los enlaces de WhatsApp, email y teléfono se registran siempre, aunque no tengan data-cta.
 */
export default function CtaTracker() {
  useEffect(() => {
    const onClick = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const tagged = target.closest("[data-cta]");
      const link = target.closest("a[href]");
      const href = link?.getAttribute("href") || "";
      const channel = getChannel(href);

      let ctaId = tagged?.getAttribute("data-cta");
      if (!ctaId) {
        if (!["whatsapp", "email", "phone"].includes(channel)) return;
        ctaId = `${channel}_untagged`;
      }

      trackEvent("cta_click", {
        cta_id: ctaId,
        cta_channel: tagged?.getAttribute("data-cta-channel") || (href ? channel : "ui"),
        cta_text: (tagged || link)?.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) || "",
        link_url: link?.href || "",
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
