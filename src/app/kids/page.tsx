import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/sections/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { KidsLeadForm } from "@/components/conversion/SegmentForms";
import { MobileStickyCta } from "@/components/conversion/MobileStickyCta";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Trophy,
  Users,
  Smile,
  ImageIcon,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "אימוני אמנויות לחימה לילדים בכפר סבא (גילאי 4–12) | פריינטה אקדמי",
  description: "מסגרת אימונים מקצועית לילדים בגילאי 4–12 בפריינטה אקדמי בכפר סבא. ביטחון עצמי, משמעת, קואורדינציה וכבוד הדדי בהובלת עידו פריינטה.",
};

export default function KidsPage() {
  return (
    <div className="space-y-0 text-right bg-[#040406]">
      {/* ====================================================================
          SECTION 1 — KIDS HERO (מקום לגדול בו דרך אמנויות לחימה)
          ==================================================================== */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center border-b border-zinc-800/80 overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Background scratch texture & dark vignette */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-20 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/scratch_texture.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/85 to-[#040406]/70" />

          {/* Lion Watermark anchor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            {/* eslint-disable-next-html-element-for-img */}
            <img
              src="/images/logo_main.svg"
              alt=""
              className="w-[700px] h-auto object-contain"
            />
          </div>
        </div>

        <Container size="default" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Crown Motif Anchor */}
            <div className="flex justify-center">
              {/* eslint-disable-next-html-element-for-img */}
              <img
                src="/images/lion_crown.svg"
                alt="Pariente Crown"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
              />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
              מקום לגדול בו <br />
              <span className="text-[#f3c010]">דרך אמנויות לחימה</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              אימוני ילדים בפריינטה אקדמי הם לא עוד חוג. זוהי מסגרת מעצימה שבה ילדים לומדים ג'ו ג'יטסו ברזילאי, MMA ואמנויות לחימה, רוכשים ביטחון עצמי אמיתי, מפתחים משמעת וקואורדינציה, ולומדים להאמין ביכולות שלהם על המזרן ומחוצה לו.
            </p>

            <div className="pt-6 flex items-center justify-center">
              <Button
                variant="primary"
                size="xl"
                href="#kids-form"
                className="shadow-2xl text-base sm:text-lg py-4 px-9"
              >
                לתיאום אימון ניסיון
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          SECTION 2 — PHILOSOPHY (מה קורה לילד שעולה על המזרן?)
          ==================================================================== */}
      <Section variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
                מה קורה לילד שעולה על המזרן?
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                <p>
                  בילדות, ביטחון עצמי לא נבנה ממילים – הוא נבנה מחוויות של מסוגלות. כשהילד לומד טכניקה חדשה, מתמודד עם אתגר פיזי, מתרגל הקשבה ועובד בשיתוף פעולה עם חברים, משהו משתנה אצלו.
                </p>
                <p>
                  אנחנו רואים ילדים שמגיעים ביישנים ומהססים, ותוך זמן קצר עומדים זקוף יותר, מתבטאים בביטחון ולומדים להתמודד עם תסכול ומכשולים ברוח חיובית.
                </p>
                <p className="font-bold text-white">
                  האימון מעניק להם כלים פיזיים ומנטליים שמלווים אותם בבית הספר, בחברה ובחיי היומיום.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl bg-[#060709] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center shadow-xl">
                <Smile className="w-10 h-10 text-[#f3c010]/70 mb-2" />
                <span className="text-xs font-bold text-zinc-400 block uppercase">
                  [צילום אימון ילדים על המזרן — Pariente Academy]
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 3 — TRAINING OPTIONS (מסלולי האימון לילדים)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="relative border-b border-zinc-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-cover"
          style={{ backgroundImage: "url('/images/scratch_texture.png')" }}
        />

        <Container size="default" className="relative z-10">
          <SectionHeader
            title="מסלולי האימון לילדים"
            description="התאמה מדויקת לפי קבוצת גיל ושלב התפתחותי."
            align="right"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-8 space-y-4 hover:border-[#f3c010]/50 transition-colors">
              <span className="text-xs font-bold text-[#f3c010] uppercase tracking-wider block">גילאי 4–6</span>
              <h3 className="text-2xl font-extrabold text-white">ג'ימבו ג'יטסו</h3>
              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                אימון יסודות תנועתי ומהנה המשלב קואורדינציה, שיווי משקל, משמעת ראשונית ועבודה קבוצתית בסביבה בטוחה ומעודדת.
              </p>
            </Card>

            {/* Option 2 */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-8 space-y-4 hover:border-[#f3c010]/50 transition-colors">
              <span className="text-xs font-bold text-[#f3c010] uppercase tracking-wider block">מגיל 6</span>
              <h3 className="text-2xl font-extrabold text-white">ג'ו ג'יטסו ילדים</h3>
              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                למידת טכניקות ג'ו ג'יטסו ברזילאי (BJJ) ללא אלימות, פיתוח חשיבה טקטית, שליטה במרחב והגנה עצמית חכמה המתבססת על מנוף וטכניקה.
              </p>
            </Card>

            {/* Option 3 */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-8 space-y-4 hover:border-[#f3c010]/50 transition-colors">
              <span className="text-xs font-bold text-[#f3c010] uppercase tracking-wider block">מגיל 8</span>
              <h3 className="text-2xl font-extrabold text-white">MMA ילדים</h3>
              <p className="text-base text-zinc-300 leading-relaxed font-normal">
                שילוב טכניקות עמידה וקרקע, פיתוח כושר גופני גבוה, חוסן מנטלי ועבודת צוות מעמיקה לילדים שמוכנים לאתגר מתקדם.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 4 — PEOPLE / TRUST (ילדים מתאמנים אצל אנשים!)
          ==================================================================== */}
      <Section variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
                ילדים מתאמנים אצל אנשים!
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                <p>
                  הדבר החשוב ביותר באימון ילדים הוא הדמות שמובילה אותם. בפריינטה אקדמי, בהובלת עידו פריינטה וצוות המאמנים, הילדים מקבלים יחס אישי, דגש על ערכים וכבוד, וסביבה שבה מותר לנסות, לטעות ולצמוח.
                </p>
                <p className="font-bold text-white">
                  אנחנו מאמינים שמאמן טוב הוא לא רק מי שמלמד לחימה – אלא מי שיודע לראות את הילד, לחזק את נקודות החוזק שלו ולתת לו תחושת שייכות וביטחון.
                </p>
              </div>

              {/* Founder Signature */}
              <div className="pt-2">
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src="/images/ido_pariente_signature.svg"
                  alt="Ido Pariente Signature"
                  className="h-16 w-auto object-contain my-2"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl bg-[#060709] border border-zinc-800 overflow-hidden shadow-xl group">
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src="/images/hero_bg.jpg"
                  alt="עידו פריינטה והילדים"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 text-right">
                  <span className="text-xs font-bold text-[#f3c010] uppercase tracking-wider block">
                    {SITE_CONFIG.founder}
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {SITE_CONFIG.founderTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 5 — PHOTO DOCUMENTARY (לראות אותם על המזרן)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <SectionHeader
            title="לראות אותם על המזרן"
            description="רגעים אמיתיים של אימון, הקשבה והתקדמות."
            align="right"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video sm:aspect-[4/3] lg:col-span-2 rounded-2xl bg-[#060709] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center">
              <ImageIcon className="w-8 h-8 text-zinc-500 mb-2" />
              <span className="text-xs font-bold text-zinc-400 uppercase">
                [צילום אימון קבוצתי — Pariente Academy]
              </span>
            </div>

            <div className="aspect-video sm:aspect-[4/3] rounded-2xl bg-[#060709] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center">
              <ImageIcon className="w-8 h-8 text-zinc-500 mb-2" />
              <span className="text-xs font-bold text-zinc-400 uppercase">
                [תרגול טכניקה בזוגות]
              </span>
            </div>

            <div className="aspect-video sm:aspect-[4/3] rounded-2xl bg-[#060709] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center">
              <ImageIcon className="w-8 h-8 text-zinc-500 mb-2" />
              <span className="text-xs font-bold text-zinc-400 uppercase">
                [אימון משחק וקואורדינציה]
              </span>
            </div>

            <div className="aspect-video sm:aspect-[4/3] lg:col-span-2 rounded-2xl bg-[#060709] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center">
              <ImageIcon className="w-8 h-8 text-zinc-500 mb-2" />
              <span className="text-xs font-bold text-zinc-400 uppercase">
                [רגע של הצלחה וביטחון על המזרן]
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 6 — FAQ FOR PARENTS (שאלות נפוצות של הורים)
          ==================================================================== */}
      <Section variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="narrow">
          <SectionHeader
            title="שאלות נפוצות של הורים"
            description="תשובות לשאלות שכל הורה שואל לפני אימון ראשון."
            align="center"
          />

          <div className="space-y-4">
            {[
              {
                q: "מאיזה גיל אפשר להתחיל להתאמן?",
                a: "ניתן להתחיל להתאמן כבר מגיל 4 במסגרת 'ג'ימבו ג'יטסו', המותאמת במיוחד לפיתוח קואורדינציה ומשמעת בגיל הרך.",
              },
              {
                q: "האם האימון מעודד אלימות?",
                a: "להפך. אמנויות לחימה בפריינטה אקדמי מלמדות איפוק, שליטה עצמית, כבוד לזולת והימנעות מאלימות. הילדים מבינים שהכוח שלמדו מיועד להגנה עצמית ולביטחון פנימי בלבד.",
              },
              {
                q: "האם הורים יכולים לצפות באימון?",
                a: "בהחלט. הורים מוזמנים לצפות באימוני הניסיון ובאימונים השוטפים ולראות מקרוב את התהליך והאווירה על המזרן.",
              },
              {
                q: "מה צריך להביא לאימון הניסיון?",
                a: "כל מה שצריך זה בגדי ספורט נוחים ובקבוק מים. את ציוד האימון והחליפה מתאימים בהמשך.",
              },
            ].map((item, idx) => (
              <Card key={idx} variant="solid" className="bg-[#0d0f13] border-zinc-800 p-6 space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#f3c010] shrink-0" />
                  {item.q}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal pr-6">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 7 — FINAL CONVERSION & FORM (הדרך הכי טובה להכיר היא להגיע לאימון)
          ==================================================================== */}
      <Section id="kids-form" variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="narrow">
          <SectionHeader
            title="הדרך הכי טובה להכיר היא להגיע לאימון"
            description="הזמינו אימון ניסיון ללא התחייבות, בואו להכיר את המאמנים ולראות את הילד שלכם חווה את המזרן בפעם הראשונה."
            align="center"
          />

          <KidsLeadForm hideFormHeader overrideCtaText="לתיאום אימון ניסיון" />
        </Container>
      </Section>

      <MobileStickyCta segmentId="kids" ctaLabel="לתיאום אימון ניסיון" targetAnchorId="#kids-form" />
    </div>
  );
}
