export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
  landingPage: string;
}

const STORAGE_KEY = "pariente_utm_params";

export function extractUtmParams(searchParamsString?: string): UtmParams {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      referrer: "",
      landingPage: "",
    };
  }

  const urlParams = new URLSearchParams(searchParamsString || window.location.search);
  const utm_source = urlParams.get("utm_source") || "";
  const utm_medium = urlParams.get("utm_medium") || "";
  const utm_campaign = urlParams.get("utm_campaign") || "";
  const utm_content = urlParams.get("utm_content") || "";
  const utm_term = urlParams.get("utm_term") || "";

  // If new UTM parameters are present in URL, store them
  if (utm_source || utm_medium || utm_campaign) {
    const paramsToStore: UtmParams = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      referrer: document.referrer || "",
      landingPage: window.location.pathname,
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(paramsToStore));
    } catch {
      // Ignore storage errors in restricted contexts
    }
    return paramsToStore;
  }

  // Otherwise, retrieve preserved parameters from sessionStorage
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as UtmParams;
    }
  } catch {
    // Ignore storage errors
  }

  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
    landingPage: typeof window !== "undefined" ? window.location.pathname : "",
  };
}
