/**
 * Eventos de Google Analytics 4 (gtag cargado en app/[locale]/layout.js).
 *
 * - cta_click: clic en cualquier elemento con data-cta="<id>" (ver CtaTracker) o en un enlace
 *   de WhatsApp / email / teléfono aunque no tenga data-cta.
 * - generate_lead: envío correcto de un formulario de contacto.
 */

/** Tipo de página a partir de la URL: /es/blog/x -> blog_post */
export function getPageType(pathname = "") {
  const parts = pathname.split("/").filter(Boolean).slice(1); // sin el locale
  if (parts.length === 0) return "home";
  if (parts[0] === "blog") {
    if (parts.length === 1) return "blog_list";
    if (parts[1] === "category") return "blog_category";
    return "blog_post";
  }
  return parts[0];
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  const payload = {
    page_type: getPageType(window.location.pathname),
    page_path: window.location.pathname,
    ...params,
  };
  // Clarity: marca la sesión para poder filtrar grabaciones (p. ej. quienes escribieron por WhatsApp)
  if (typeof window.clarity === "function") {
    const clarityEvent =
      name === "cta_click" && params.cta_channel === "whatsapp" ? "contacto_whatsapp" : name;
    window.clarity("event", clarityEvent);
    if (params.cta_id) window.clarity("set", "cta_id", String(params.cta_id));
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", name, payload]);
  }
}

export function trackLead(form) {
  trackEvent("generate_lead", { form_id: form });
}
