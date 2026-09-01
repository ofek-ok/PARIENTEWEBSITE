import React from "react";
import { Container } from "@/components/sections/Container";

export const metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של פריינטה אקדמי",
};

export default function PrivacyPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#040406] min-h-screen">
      <Container size="narrow" className="space-y-8 text-right">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">מדיניות פרטיות</h1>
        <div className="max-w-none text-zinc-300 space-y-4 text-base leading-relaxed">
          <p className="text-lg">[TODO: כאן יופיע הטקסט המלא של מדיניות הפרטיות כפי שינוסח על ידי הגורם המשפטי של האקדמיה.]</p>
          <p>
            אנו בפריינטה אקדמי לוקחים ברצינות את פרטיות המשתמשים שלנו.
            כל מידע שנאסף בטפסים השונים מיועד אך ורק לצורך יצירת קשר מתן שירות ללקוחות.
          </p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">איסוף מידע</h2>
          <p>[TODO: פירוט איזה מידע נאסף]</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">שימוש במידע</h2>
          <p>[TODO: פירוט מטרות השימוש במידע]</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">העברת מידע לצדדים שלישיים</h2>
          <p>[TODO: פירוט אודות שירותי צד ג' כגון Arbox, Google Analytics, Vercel]</p>
          <p className="text-sm text-zinc-500 mt-12">תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>
        </div>
      </Container>
    </div>
  );
}
