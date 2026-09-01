"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export const WhatsAppButton: React.FC = () => {
  // Format phone from 054-7468505 to 972547468505
  const waPhone = "972" + SITE_CONFIG.contact.phone.replace(/\D/g, "").replace(/^0/, "");
  const waMessage = encodeURIComponent("היי פריינטה אקדמי, הגעתי מהאתר ואשמח לקבל פרטים על אימונים.");
  const waUrl = `https://wa.me/${waPhone}?text=${waMessage}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 left-6 lg:bottom-8 lg:left-8 z-[100] bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 lg:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="שלח הודעה בווצאפ"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7 sm:w-8 sm:h-8"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.756.455 3.468 1.318 4.981L2 22l5.163-1.354A9.957 9.957 0 0012.012 22c5.526 0 10.012-4.486 10.012-10.012C22.024 6.486 17.538 2 12.012 2zm.006 18.314a8.31 8.31 0 01-4.248-1.155l-.304-.18-3.155.827.842-3.076-.198-.315a8.337 8.337 0 01-1.272-4.425c0-4.605 3.748-8.353 8.353-8.353 4.605 0 8.353 3.748 8.353 8.353 0 4.605-3.748 8.353-8.353 8.353zm4.582-6.223c-.251-.125-1.488-.735-1.718-.819-.23-.084-.398-.125-.565.125-.167.251-.649.819-.796.986-.146.167-.293.188-.544.063-2.033-1.02-3.14-1.93-4.332-3.953-.146-.251.015-.373.136-.492.115-.113.251-.293.376-.439.125-.146.167-.251.251-.418.084-.167.042-.314-.021-.439-.063-.125-.565-1.36-.774-1.862-.203-.491-.409-.425-.565-.433-.146-.008-.314-.01-.481-.01-.167 0-.439.063-.669.314-.23.251-.879.858-.879 2.093 0 1.235.9 2.428 1.025 2.595.125.167 1.77 2.7 4.288 3.788 1.636.709 2.302.825 3.097.778.694-.041 1.488-.607 1.698-1.193.21-.586.21-1.088.146-1.193-.063-.105-.23-.167-.481-.293z"
        />
      </svg>
      {/* Optional tooltip */}
      <span className="absolute left-full ml-3 whitespace-nowrap bg-zinc-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-700 hidden sm:block">
        שלחו לנו הודעה
      </span>
    </a>
  );
};
