import type { Metadata } from "next";
import { Rubik, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AccessibilityProvider } from "@/components/providers/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/ui/AccessibilityWidget";
import { SITE_CONFIG } from "@/lib/constants";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | בית הספר הגבוה לאמנויות לחימה`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "פריינטה אקדמי - בית הספר הגבוה לאמנויות לחימה בכפר סבא. אימוני BJJ, MMA, Muay Thai, ילדים, נוער, מסלול תחרותי וקהילה.",
  keywords: [
    "Pariente Academy",
    "פריינטה אקדמי",
    "עידו פריינטה",
    "ג'יו ג'יטסו ברזילאי",
    "MMA כפר סבא",
    "אגרוף תאילנדי",
    "אמנויות לחימה לילדים",
    "הגנה עצמית לנוער",
  ],
  authors: [{ name: "Pariente Academy" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${plusJakarta.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08090b] text-zinc-100 font-sans antialiased flex flex-col justify-between selection:bg-[#f3c010] selection:text-white relative">
        <AccessibilityProvider>
          <Header />
          <main className="flex-grow pt-[72px] sm:pt-[84px]">{children}</main>
          <Footer />
          <AccessibilityWidget />
          <WhatsAppButton />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
