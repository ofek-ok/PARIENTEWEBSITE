"use client";

import { useEffect, useState } from "react";
import { extractUtmParams, UtmParams } from "@/lib/utm";

export function useUtmParams(): UtmParams {
  const [params, setParams] = useState<UtmParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    referrer: "",
    landingPage: "",
  });

  useEffect(() => {
    setParams(extractUtmParams());
  }, []);

  return params;
}
