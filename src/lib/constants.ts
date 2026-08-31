export const SITE_CONFIG = {
  name: "Pariente Academy",
  fullName: "Pariente Academy - Premium Combat Sports & Martial Arts",
  tagline: "High-Performance Martial Arts & Combat Sports Academy",
  founder: "Ido Pariente",
  founderTitle: "Head Coach & BJJ 2nd Degree Black Belt ('The Hebrew Hammer')",
  location: {
    address: "Weizmann St 95",
    city: "Kfar Saba",
    country: "Israel",
    fullAddress: "Weizmann 95, Kfar Saba, Israel",
  },
  contact: {
    phone: "054-7468505",
    formattedPhone: "+972 54-7468505",
    email: "parienteacademy@gmail.com",
    arboxScheduleUrl: "https://site.arboxapp.com/schedule?identifier=YvzhycjH1589289054&whitelabel=Arbox&referer=PLUGIN&lang=he",
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
  { label: "About Academy", href: "/academy", description: "Our history, team & philosophy" },
  { label: "Kids (4–12)", href: "/kids", description: "Confidence, discipline & self-defense" },
  { label: "Teens (13–17)", href: "/teens", description: "Fitness, social belonging & skills" },
  { label: "Competition (13–21)", href: "/competition", badge: "Pro Track", description: "Elite training & championship path" },
  { label: "Adults (22–45)", href: "/adults", description: "BJJ, MMA, Muay Thai & community" },
  { label: "Sensei Aba", href: "/sensei-aba", description: "Father & Child bonding program" },
  { label: "Achim LaChaim", href: "/achim-lachaim", description: "Wounded soldiers rehabilitation" },
  { label: "Schedule", href: "/schedule" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA = {
  label: "Book a Free Trial Class",
  subtext: "Experience the Pariente standard with no commitment",
  href: "/contact#trial",
};
