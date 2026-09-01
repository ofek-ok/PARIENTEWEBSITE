export const SITE_CONFIG = {
  name: "Pariente Academy",
  hebrewName: "פריינטה אקדמי",
  tagline: "בית הספר הגבוה לאמנויות לחימה",
  founder: "עידו פריינטה",
  founderTitle: "ראש האקדמיה וחגורה שחורה דאן 2 בג'יו ג'יטסו ברזילאי ('פטיש העברי')",
  location: {
    address: "ויצמן 95",
    city: "כפר סבא",
    country: "ישראל",
    fullAddress: "ויצמן 95, כפר סבא",
  },
  contact: {
    phone: "054-7468505",
    formattedPhone: "054-7468505",
    email: "parienteacademy@gmail.com",
    arboxScheduleUrl: "https://YvzhycjH1589289054.web.arboxapp.com/group?whitelabel=Arbox&lang=he&location=167&referrer=PLUGIN",
  },
  social: {
    instagram: "https://instagram.com/idopariente/",
    facebook: "https://www.facebook.com/parienteacademy",
    youtube: "https://youtube.com/@idopariente",
  },
};

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "אודות האקדמיה", href: "/academy", description: "ההיסטוריה, הצוות והדרך שלנו" },
  { label: "ילדים (גילאי 4–12)", href: "/kids", description: "ביטחון עצמי, משמעת וכבוד" },
  { label: "נוער (גילאי 13–17)", href: "/teens", description: "כושר, ביטחון אישי וקבוצה" },
  { label: "נוער תחרותי", href: "/competition", badge: "מסלול תחרותי", description: "אימונים מקצועיים לאליפויות" },
  { label: "בוגרים", href: "/adults", description: "אימונים, כושר וקהילה" },
  { label: "סנסאי אבא", href: "/sensei-aba", description: "חיבור אבא וילד על המזרן" },
  { label: "אחים לחיים", href: "/achim-lachaim", description: "פרויקט שיקום וקהילה ללוחמים" },
  { label: "מערכת שעות", href: "/#schedule" },
  { label: "אירועים ותחרויות", href: "/events" },
  { label: "גלריה", href: "/gallery" },
  { label: "צור קשר", href: "/contact" },
];

export const PRIMARY_CTA = {
  label: "קביעת אימון ניסיון",
  subtext: "אימון ניסיון ללא התחייבות",
  href: "#lead-form",
};
