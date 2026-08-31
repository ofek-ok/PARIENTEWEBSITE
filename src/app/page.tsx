import React from "react";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GeneralLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ArrowLeft,
  Shield,
  Trophy,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Play,
  ImageIcon,
  HeartHandshake,
  Heart,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0 text-right bg-[#060709]">
      {/* ====================================================================
          SECTION 1 — HERO (תמונת תדמית רשמית, טיפוגרפיה חזקה)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="relative border-b border-zinc-800/80 pt-12 pb-20 lg:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold" size="md">
                אקדמיית פריינטה • כפר סבא
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
                יותר ממועדון. <br />
                <span className="text-[#f3c010]">בית לאמנויות לחימה.</span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
                אימונים לילדים, נוער ובוגרים. ממשמעת וביטחון עצמי ועד מסלול תחרותי לאליפויות בארץ ובעולם.
              </p>

              {/* Primary Action (Program Discovery) & Secondary Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  href="#programs"
                  leftIcon={<ArrowLeft className="w-5 h-5 ml-1" />}
                >
                  מצאו את המסלול שלכם
                </Button>
                <Button variant="gold" size="xl" href="#lead-form">
                  קביעת אימון ניסיון
                </Button>
              </div>
            </div>

            {/* Authentic Photography/Video Placeholder Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl bg-[#0d0f13] border border-zinc-800 p-1 flex flex-col items-center justify-center overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#060709] via-[#0d0f13] to-amber-950/20 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#f3c010]/15 border border-[#f3c010]/40 flex items-center justify-center text-[#f3c010] group-hover:bg-[#f3c010] group-hover:text-[#060709] transition-colors">
                    <Play className="w-7 h-7 mr-0.5" />
                  </div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    [וידאו תדמיתי ראשי — אקדמיית פריינטה]
                  </span>
                  <p className="text-[11px] text-zinc-500 max-w-xs">
                    צילומי אימון, תחרות ואווירה אמיתית יוטמעו בשלב סופי
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 2 — FIND YOUR PROGRAM (מה מתאים לכם?)
          ==================================================================== */}
      <Section id="programs" variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <SectionHeader
            badge="מסלולי אימון"
            title="מה מתאים לכם?"
            description="בחרו את קבוצת הגיל והמטרה שלכם כדי להכיר את המסלול המותאם עבורכם."
            align="right"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 — Kids */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <ImageIcon className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-500 block uppercase">
                    [צילום אימון ילדים — אקדמיית פריינטה]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">גילאי 4–12</Badge>
                  <span className="text-xs font-bold text-zinc-500">מסלול התפתחות</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">ילדים</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  ביטחון עצמי, משמעת, כבוד והתפתחות.
                </p>
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="/kids"
                    fullWidth
                    leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
                  >
                    למסלול הילדים
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 2 — Teens */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <ImageIcon className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-500 block uppercase">
                    [צילום אימון נוער — אקדמיית פריינטה]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">גילאי 13–17</Badge>
                  <span className="text-xs font-bold text-zinc-500">ספורט והגנה עצמית</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">נוער</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  כושר, ביטחון אישי, קבוצה וכלים לחיים.
                </p>
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="/teens"
                    fullWidth
                    leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
                  >
                    למסלול הנוער
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 3 — Competitive Youth */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <Trophy className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-500 block uppercase">
                    [צילום נוער תחרותי — אקדמיית פריינטה]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="amber">מסלול תחרותי</Badge>
                  <span className="text-xs font-bold text-zinc-500">גילאי 13–21</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">נוער תחרותי</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  למי שרוצה להגיע רחוק. אימונים מקצועיים ומסלול לתחרויות בארץ ובעולם.
                </p>
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="/competition"
                    fullWidth
                    leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
                  >
                    למסלול התחרותי
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 4 — Adults */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <Users className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-500 block uppercase">
                    [צילום אימון בוגרים — אקדמיית פריינטה]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">גילאי 22–45+</Badge>
                  <span className="text-xs font-bold text-zinc-500">BJJ, MMA, Muay Thai</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">בוגרים</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  MMA, BJJ, Muay Thai ועוד. כושר, אמנויות לחימה וקהילה.
                </p>
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="/adults"
                    fullWidth
                    leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
                  >
                    לאימוני הבוגרים
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 3 — WHAT IS PARIENTE ACADEMY? (אודות)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">הדרך שלנו</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
                אנחנו מאמינים שאמנויות לחימה בונות הרבה מעבר ללוחמים.
              </h2>
              <div className="space-y-3 text-lg text-zinc-300 font-normal leading-relaxed">
                <p>הן בונות ביטחון.</p>
                <p>משמעת.</p>
                <p>יכולת להתמודד.</p>
                <p>קהילה.</p>
                <p className="font-bold text-white">ואנשים חזקים יותר — על המזרן ומחוצה לו.</p>
              </div>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  href="/academy"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  הכירו את האקדמיה
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl bg-[#0d0f13] border border-zinc-800 flex items-center justify-center p-6 text-center shadow-xl">
                <div className="space-y-2">
                  <Shield className="w-12 h-12 text-[#f3c010] mx-auto" />
                  <span className="text-xs font-bold text-zinc-400 block uppercase">
                    [צילום רשמי — ראש האקדמיה עידו פריינטה]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 4 — SOCIAL PROOF / NUMBERS (מספרים ומהות)
          ==================================================================== */}
      <Section variant="charcoal" size="md" className="border-b border-zinc-800">
        <Container size="default">
          <SectionHeader
            badge="נתונים ומהות"
            title="הישגים, ניסיון ומסורת"
            description="תבנית אדריכלות הנתונים מוכנה להזנת מספרים רשמיים"
            align="right"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 text-center p-6 sm:p-8 space-y-2">
              <span className="text-xs font-bold text-zinc-500 uppercase block">// PLACEHOLDER</span>
              <div className="text-4xl sm:text-5xl font-black text-[#f3c010] font-display">XX+</div>
              <div className="text-sm font-bold text-white">שנות פעילות</div>
            </Card>

            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 text-center p-6 sm:p-8 space-y-2">
              <span className="text-xs font-bold text-zinc-500 uppercase block">// PLACEHOLDER</span>
              <div className="text-4xl sm:text-5xl font-black text-[#f3c010] font-display">XXX+</div>
              <div className="text-sm font-bold text-white">מתאמנים</div>
            </Card>

            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 text-center p-6 sm:p-8 space-y-2">
              <span className="text-xs font-bold text-zinc-500 uppercase block">// PLACEHOLDER</span>
              <div className="text-4xl sm:text-5xl font-black text-[#f3c010] font-display">XX</div>
              <div className="text-sm font-bold text-white">אלופי ישראל</div>
            </Card>

            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 text-center p-6 sm:p-8 space-y-2">
              <span className="text-xs font-bold text-zinc-500 uppercase block">// PLACEHOLDER</span>
              <div className="text-4xl sm:text-5xl font-black text-[#f3c010] font-display">XX</div>
              <div className="text-sm font-bold text-white">ייצוג באליפויות בינלאומיות</div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 5 — COMPETITION / EXCELLENCE (מצוינות ותחרויות)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="amber">מצוינות בספורט תחרותי</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
                למי שרוצה להגיע רחוק יותר.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Pariente Academy מפתחת לוחמים וספורטאים תחרותיים ב-MMA וב-Jiu-Jitsu, מהתחרויות הראשונות ועד לבמות הלאומיות והבינלאומיות.
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  href="/competition"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  למסלול התחרותי
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-3xl bg-[#0d0f13] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center">
                <Trophy className="w-12 h-12 text-[#f3c010]/80 mb-2" />
                <span className="text-xs font-bold text-zinc-400 block uppercase">
                  [צילום אליפויות ותחרויות — אקדמיית פריינטה]
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 6 — COMMUNITY (קהילה ויוזמות)
          ==================================================================== */}
      <Section variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <SectionHeader
            badge="קהילה וחיבור"
            title="מה שמתחיל על המזרן ממשיך הרבה אחריו."
            description="האקדמיה היא קהילה ובית מחבר, מעבר לשעות האימון בלבד."
            align="right"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Initiative 1 — Sensei Aba */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-8 space-y-5 hover:border-[#f3c010]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#f3c010]/10 border border-[#f3c010]/30 flex items-center justify-center text-[#f3c010]">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="gold" size="sm">סנסאי אבא</Badge>
                <h3 className="text-2xl font-extrabold text-white">סנסאי אבא</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  אבא וילד על אותו מזרן. פרויקט שמחבר בין אמנויות לחימה לזמן משותף אמיתי.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  variant="gold"
                  size="md"
                  href="/sensei-aba"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  לסנסאי אבא
                </Button>
              </div>
            </Card>

            {/* Initiative 2 — Achim LaChaim */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-8 space-y-5 hover:border-[#f3c010]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#f3c010]/10 border border-[#f3c010]/30 flex items-center justify-center text-[#f3c010]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="subtle" size="sm">יוזמה קהילתית לוחמים</Badge>
                <h3 className="text-2xl font-extrabold text-white">אחים לחיים</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  שיתוף פעולה קהילתי שמחבר אמנויות לחימה, אחווה וחזרה למסוגלות.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  variant="gold"
                  size="md"
                  href="/achim-lachaim"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  לסיפור המלא
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 7 — ACADEMY EXPERIENCE / GALLERY (חוויה וגלריה)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <SectionHeader
            badge="חוויית האקדמיה"
            title="חיים על המזרן"
            description="גלריית צילומים עריכתית ומעמיקה"
            align="right"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "צילומי אימון בוגרים",
              "אימון ילדים ומשפחות",
              "תחרויות ואליפויות",
              "צוות המאמנים",
              "קהילה ואירועים",
              "מתחם האימונים כפר סבא",
            ].map((label, idx) => (
              <div
                key={idx}
                className="aspect-video rounded-2xl bg-[#0d0f13] border border-zinc-800 flex flex-col items-center justify-center p-4 text-center hover:border-zinc-700 transition-colors"
              >
                <ImageIcon className="w-6 h-6 text-zinc-500 mb-2" />
                <span className="text-xs font-bold text-zinc-400">[{label}]</span>
              </div>
            ))}
          </div>

          <div className="pt-10 text-center">
            <Button
              variant="outline"
              size="lg"
              href="/gallery"
              leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
            >
              לגלריה המלאה
            </Button>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 8 — GENERAL LEAD CONVERSION (טופס הרשמה/ייעוץ)
          ==================================================================== */}
      <Section id="lead-form" variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="narrow">
          <SectionHeader
            badge="ייעוץ והתאמה"
            title="רוצים להתחיל אבל לא בטוחים מאיפה?"
            description="השאירו פרטים וספרו לנו מה אתם מחפשים. נעזור לכם למצוא את המסלול המתאים."
            align="center"
          />

          <GeneralLeadForm showSegmentSelector />
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 9 — LOCATION / PRACTICAL INFO (מיקום ופרטי קשר)
          ==================================================================== */}
      <Section variant="dark" size="md">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-right">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>כתובת</span>
              </div>
              <p className="text-sm text-zinc-300">{SITE_CONFIG.location.fullAddress}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <Phone className="w-4 h-4" />
                <span>טלפון</span>
              </div>
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-sm text-zinc-300 hover:text-white block font-semibold">
                {SITE_CONFIG.contact.phone}
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <Mail className="w-4 h-4" />
                <span>אימייל</span>
              </div>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm text-zinc-300 hover:text-white block font-semibold">
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>שעות פעילות</span>
              </div>
              <p className="text-xs text-zinc-400">
                [שעות פעילות ייקבעו ע״פ מערכת השעות הרשמית]
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <MobileStickyCta segmentId="general" ctaLabel="מצאו את המסלול שלכם" targetAnchorId="#programs" />
    </div>
  );
}
