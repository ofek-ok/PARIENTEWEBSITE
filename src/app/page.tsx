import React from "react";
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
  Trophy,
  Users,
  MapPin,
  Phone,
  Mail,
  Play,
  ImageIcon,
  HeartHandshake,
  Heart,
} from "lucide-react";

export default function HomePage() {
  const whatsappUrl = `https://wa.me/972${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, "").substring(1)}`;

  return (
    <div className="space-y-0 text-right bg-[#040406]">
      {/* ====================================================================
          SECTION 1 — HERO (בית הספר הגבוה לאמנויות לחימה)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="relative border-b border-zinc-800/80 pt-10 pb-20 lg:py-28 overflow-hidden">
        {/* Background scratch texture overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-center bg-cover"
          style={{ backgroundImage: "url('/images/scratch_texture.png')" }}
        />

        {/* Lion Watermark background anchor */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.04] pointer-events-none -ml-20">
          {/* eslint-disable-next-html-element-for-img */}
          <img
            src="/images/lion_crown.svg"
            alt=""
            className="w-[600px] h-auto object-contain"
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src="/images/lion_crown.svg"
                  alt="Pariente Crown"
                  className="h-8 w-auto object-contain"
                />
                <Badge variant="gold" size="md">
                  Pariente Academy • כפר סבא
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
                בית הספר הגבוה <br />
                <span className="text-[#f3c010]">לאמנויות לחימה</span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
                Pariente Academy היא בית לאנשים שבוחרים ללמוד אמנויות לחימה ברצינות. ילדים שעולים על המזרן בפעם הראשונה, בני נוער שמחפשים מסגרת ואתגר, ספורטאים שרוצים להתחרות ובוגרים שהאימון הפך לחלק מהחיים שלהם.
              </p>

              {/* Primary Action (Navigates to Program Selector) */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="xl"
                  href="#programs"
                  leftIcon={<ArrowLeft className="w-5 h-5 ml-1" />}
                >
                  מצאו את המסלול שמתאים לכם
                </Button>
              </div>
            </div>

            {/* Official Hero Image Layered Composition */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl bg-[#0d0f13] border border-zinc-800 p-1 flex flex-col items-center justify-center overflow-hidden group shadow-2xl">
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src="/images/hero_bg.jpg"
                  alt="אימון עידו פריינטה"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/40 to-transparent" />
                <div className="relative z-10 p-6 text-center space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#f3c010]/20 border border-[#f3c010]/50 flex items-center justify-center text-[#f3c010] mx-auto shadow-lg backdrop-blur-sm cursor-pointer">
                    <Play className="w-6 h-6 mr-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block drop-shadow-md">
                    צפו באווירת האימונים באקדמיה
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 2 — PROGRAM SELECTOR (איפה מתחילים?)
          ==================================================================== */}
      <Section id="programs" variant="charcoal" size="lg" className="relative border-b border-zinc-800 overflow-hidden">
        {/* Background scratch texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-cover"
          style={{ backgroundImage: "url('/images/scratch_texture.png')" }}
        />

        <Container size="default" className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
              badge="מסלולי אימון"
              title="איפה מתחילים?"
              description="לכל אחד יש סיבה אחרת להגיע לאימון. בחרו את המסלול שמתאים לכם והכירו את האימונים, הצוות והאפשרויות שיש בפריינטה."
              align="right"
              className="mb-0"
            />
            {/* eslint-disable-next-html-element-for-img */}
            <img
              src="/images/choose_title.svg"
              alt=""
              className="hidden md:block h-12 w-auto opacity-40 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 — Kids */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <ImageIcon className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-400 block uppercase">
                    [צילום אימון ילדים — Pariente Academy]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">גילאי 4–12</Badge>
                  <span className="text-xs font-bold text-zinc-500">מסלול התפתחות</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">ילדים | גילאי 4–12</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  מסגרת שבה ילדים לומדים אמנויות לחימה, מתקדמים בקצב שלהם ורוכשים ביטחון, משמעת והרגלים שממשיכים איתם גם מחוץ לאימון.
                </p>
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="/kids"
                    fullWidth
                    leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
                  >
                    לאימוני הילדים
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 2 — Teens */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <ImageIcon className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-400 block uppercase">
                    [צילום אימון נוער — Pariente Academy]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">גילאי 13–17</Badge>
                  <span className="text-xs font-bold text-zinc-500">ספורט והגנה עצמית</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">נוער | גילאי 13–17</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  אימוני אמנויות לחימה והגנה עצמית לנוער שרוצה להתחזק, לדעת להתמודד ולהיות חלק מקבוצה טובה. אפשר להתאמן ברצינות גם בלי לרצות להתחרות.
                </p>
                <div className="pt-2">
                  <Button
                    variant="gold"
                    size="md"
                    href="/teens"
                    fullWidth
                    leftIcon={<ArrowLeft className="w-4 h-4 ml-1 group-hover:-translate-x-1 transition-transform" />}
                  >
                    לאימוני הנוער
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card 3 — Competition */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-0 overflow-hidden flex flex-col justify-between group hover:border-[#f3c010]/60 transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#060709] flex items-center justify-center p-6 text-center border-b border-zinc-800">
                <div className="space-y-2">
                  <Trophy className="w-8 h-8 text-[#f3c010]/60 mx-auto" />
                  <span className="text-xs font-bold text-zinc-400 block uppercase">
                    [צילום נוער תחרותי — Pariente Academy]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="amber">מסלול תחרותי</Badge>
                  <span className="text-xs font-bold text-zinc-500">ספורטאים</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">המסלול התחרותי</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  לספורטאים שרוצים לקחת את האימונים צעד קדימה. יותר אימונים, יותר מחויבות ומסלול שמוביל מתחרויות בישראל ועד לזירה הבינלאומית.
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
                  <span className="text-xs font-bold text-zinc-400 block uppercase">
                    [צילום אימון בוגרים — Pariente Academy]
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="gold">בוגרים</Badge>
                  <span className="text-xs font-bold text-zinc-500">ג'ו ג'יטסו, MMA, Muay Thai</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">בוגרים</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  ג'ו ג'יטסו, MMA, אגרוף תאילנדי, כושר ואימונים נוספים לאורך השבוע, לצד אירועים ופעילויות מיוחדות. למי שרוצה להתחיל להתאמן ולמי שאמנויות לחימה כבר הפכו לחלק מהחיים שלו.
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
          SECTION 3 — ACADEMY APPROACH (מה שלומדים על המזרן לא נשאר על המזרן)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="relative border-b border-zinc-800 overflow-hidden">
        {/* Background Lion Watermark */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none -mr-32">
          {/* eslint-disable-next-html-element-for-img */}
          <img
            src="/images/logo_main.svg"
            alt=""
            className="w-[700px] h-auto object-contain"
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">הדרך שלנו</Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
                מה שלומדים על המזרן לא נשאר על המזרן
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                <p>
                  באימון לומדים טכניקה, אבל בדרך קורים עוד הרבה דברים. לומדים להקשיב, להתמודד עם תסכול, להמשיך גם כשקשה ולהבין שהתקדמות מגיעה מעבודה שחוזרים אליה שוב ושוב.
                </p>
                <p>
                  אנחנו רואים את זה אצל ילד שעולה בפעם הראשונה על המזרן, אצל נער שמוצא מקום שהוא מרגיש בו שייך ואצל מתאמן בוגר שמגיע לאימון גם אחרי יום ארוך.
                </p>
                <p className="font-bold text-white">
                  זו הדרך שבה אנחנו מלמדים אמנויות לחימה בפריינטה.
                </p>
              </div>

              {/* Official IDO PARIENTE Signature SVG */}
              <div className="pt-2">
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src="/images/ido_pariente_signature.svg"
                  alt="Ido Pariente Signature"
                  className="h-16 w-auto object-contain my-2"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  href="/academy"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  הכירו את Pariente Academy
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl bg-[#0d0f13] border border-zinc-800 overflow-hidden shadow-xl group">
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src="/images/mma_action.jpg"
                  alt="עידו פריינטה"
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
          SECTION 4 — PARIENTE IN NUMBERS
          (Hidden until verified numbers are available)
          ==================================================================== */}

      {/* ====================================================================
          SECTION 5 — COMPETITIVE PATHWAY (יש מי שרוצה להתאמן. יש מי שרוצה להתחרות.)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="amber">מצוינות בספורט תחרותי</Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
                יש מי שרוצה להתאמן. <br />
                <span className="text-[#f3c010]">יש מי שרוצה להתחרות.</span>
              </h2>

              <div className="space-y-3 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                <p>
                  המסלול התחרותי מיועד לספורטאים שמוכנים לתת יותר לאימונים שלהם. מתאמנים בתדירות גבוהה, עובדים על טכניקה, כושר ואסטרטגיה תחרותית, ויוצאים להתחרות עם צוות שמלווה את הדרך.
                </p>
                <p>
                  מתחילים בתחרויות בארץ. מי שמתקדם ומוכיח את עצמו יכול להמשיך גם לאליפויות ולזירה הבינלאומית.
                </p>
                <p className="font-bold text-white">
                  אין קיצורי דרך במסלול הזה, וגם לא מחפשים כאלה.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  href="/competition"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  הכירו את המסלול התחרותי
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-3xl bg-[#0d0f13] border border-zinc-800 flex flex-col items-center justify-center p-6 text-center shadow-xl">
                <Trophy className="w-12 h-12 text-[#f3c010]/80 mb-2" />
                <span className="text-xs font-bold text-zinc-400 block uppercase">
                  [צילום תחרותי רשמי — Pariente Academy]
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 6 — COMMUNITY / THE PEOPLE OF PARIENTE (האנשים של פריינטה)
          ==================================================================== */}
      <Section variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <div className="max-w-3xl space-y-6">
            <Badge variant="gold">האנשים של פריינטה</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
              האנשים של פריינטה
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              <p>
                אפשר להגיע לפריינטה בשביל ללמוד להילחם, להיכנס לכושר או להתחרות. אבל כשמתאמנים יחד לאורך זמן, נוצר גם משהו שקשה להסביר למי שעוד לא עלה על המזרן.
              </p>
              <p>
                מתאמנים מתחילים לצד אנשים שנמצאים כאן כבר שנים. מתאמנים יחד, עוזרים אחד לשני ומשתפרים יחד.
              </p>
              <p className="font-bold text-white">
                בסוף, האנשים שאתה פוגש בכל שבוע הם חלק גדול מהסיבה שאתה רוצה להגיע שוב לאימון.
              </p>
            </div>
          </div>

          {/* Real People Photography Composition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="aspect-[4/3] rounded-2xl bg-[#060709] border border-zinc-800 flex items-center justify-center p-4 text-center">
              <span className="text-xs font-bold text-zinc-500 uppercase">[צילום קהילה ומזרן]</span>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-[#060709] border border-zinc-800 flex items-center justify-center p-4 text-center">
              <span className="text-xs font-bold text-zinc-500 uppercase">[צילום מתאמנים וצוות]</span>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-[#060709] border border-zinc-800 flex items-center justify-center p-4 text-center">
              <span className="text-xs font-bold text-zinc-500 uppercase">[צילום אווירה באקדמיה]</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 7 — MORE AT PARIENTE (עוד בפריינטה - פרויקטים ויוזמות)
          ==================================================================== */}
      <Section variant="dark" size="lg" className="relative border-b border-zinc-800 overflow-hidden">
        {/* Background scratch texture */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-cover"
          style={{ backgroundImage: "url('/images/scratch_texture.png')" }}
        />

        <Container size="default" className="relative z-10">
          <SectionHeader
            badge="יוזמות ופרויקטים"
            title="עוד בפריינטה"
            description="האקדמיה לא נגמרת במערכת האימונים השבועית. לאורך השנה מתקיימים בפריינטה פרויקטים, מפגשים ופעילויות שמחברים את אמנויות הלחימה לעוד חלקים בחיים."
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
                  אבא וילד עולים יחד על המזרן לאימון משותף. שניהם לומדים, מתאמנים ועוברים את החוויה יחד.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  variant="gold"
                  size="md"
                  href="/sensei-aba"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  הכירו את סנסאי אבא
                </Button>
              </div>
            </Card>

            {/* Initiative 2 — Achim LaChaim */}
            <Card variant="solid" className="bg-[#0d0f13] border-zinc-800 p-8 space-y-5 hover:border-[#f3c010]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#f3c010]/10 border border-[#f3c010]/30 flex items-center justify-center text-[#f3c010]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="subtle" size="sm">אחים לחיים</Badge>
                <h3 className="text-2xl font-extrabold text-white">אחים לחיים</h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  פעילות משותפת שמחברת בין אמנויות לחימה, אימון ומפגש עם חברי עמותת אחים לחיים.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  variant="gold"
                  size="md"
                  href="/achim-lachaim"
                  leftIcon={<ArrowLeft className="w-4 h-4 ml-1" />}
                >
                  לסיפור של אחים לחיים
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 8 — GALLERY (ככה זה נראה אצלנו)
          ==================================================================== */}
      <Section variant="charcoal" size="lg" className="border-b border-zinc-800">
        <Container size="default">
          <SectionHeader
            badge="חוויית האקדמיה"
            title="ככה זה נראה אצלנו"
            description="אימונים, תחרויות, ילדים, בוגרים והרבה שעות על המזרן."
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
                className="aspect-video rounded-2xl bg-[#060709] border border-zinc-800 flex flex-col items-center justify-center p-4 text-center hover:border-zinc-700 transition-colors"
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
              לגלריה
            </Button>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 9 — GENERAL LEAD CONVERSION (רוצים לעלות על המזרן?)
          ==================================================================== */}
      <Section id="lead-form" variant="dark" size="lg" className="border-b border-zinc-800">
        <Container size="narrow">
          <SectionHeader
            badge="הרשמה וייעוץ"
            title="רוצים לעלות על המזרן?"
            description="לא צריך לדעת מראש איזה אימון מתאים לכם או להגיע עם ניסיון. ספרו לנו למי אתם מחפשים אימון ונעזור לכם למצוא את המקום הנכון להתחיל ממנו."
            align="center"
          />

          <GeneralLeadForm showSegmentSelector overrideCtaText="אני רוצה לשמוע עוד" />
        </Container>
      </Section>

      {/* ====================================================================
          SECTION 10 — PRACTICAL INFORMATION (מיקום ופרטי קשר מאומתים)
          ==================================================================== */}
      <Section variant="charcoal" size="md">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>כתובת</span>
              </div>
              <p className="text-sm text-zinc-300">{SITE_CONFIG.name}</p>
              <p className="text-sm text-zinc-300">{SITE_CONFIG.location.fullAddress}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <Phone className="w-4 h-4" />
                <span>טלפון / WhatsApp</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f3c010] hover:underline block font-bold"
              >
                {SITE_CONFIG.contact.phone} (לחצו לפנייה ב-WhatsApp)
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#f3c010] font-bold text-sm">
                <Mail className="w-4 h-4" />
                <span>אימייל</span>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-sm text-zinc-300 hover:text-white block font-semibold"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <MobileStickyCta segmentId="general" ctaLabel="מצאו את המסלול שמתאים לכם" targetAnchorId="#programs" />
    </div>
  );
}
