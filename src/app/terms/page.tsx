import React from "react";
import { Container } from "@/components/sections/Container";

export const metadata = {
  title: "תנאי שימוש",
  description: "תנאי השימוש של אתר פריינטה אקדמי",
};

export default function TermsPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#040406] min-h-screen">
      <Container size="narrow" className="space-y-8 text-right">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">תנאי שימוש</h1>
        <div className="max-w-none text-zinc-300 space-y-4 text-base leading-relaxed">
          <p className="text-lg">[TODO: כאן יופיע הטקסט המלא של תנאי השימוש (תקנון האתר) כפי שינוסח על ידי הגורם המשפטי של האקדמיה.]</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">כללי</h2>
          <p>[TODO: מבוא לתנאי השימוש והסכמת המשתמש]</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">קניין רוחני</h2>
          <p>כל זכויות היוצרים והקניין הרוחני באתר, לרבות תמונות, טקסטים, לוגואים וסרטונים, שייכים לפריינטה אקדמי.</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">הגבלת אחריות</h2>
          <p>[TODO: פטור מאחריות במידת הצורך]</p>
          <p className="text-sm text-zinc-500 mt-12">תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>
        </div>
      </Container>
    </div>
  );
}
