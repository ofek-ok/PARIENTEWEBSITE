import React from "react";
import { Container } from "@/components/sections/Container";

export const metadata = {
  title: "מדיניות ביטול עסקה",
  description: "מדיניות ביטול עסקאות של פריינטה אקדמי",
};

export default function CancellationPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#040406] min-h-screen">
      <Container size="narrow" className="space-y-8 text-right">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">מדיניות ביטולים והחזרים</h1>
        <div className="max-w-none text-zinc-300 space-y-4 text-base leading-relaxed">
          <p className="text-lg">[TODO: כאן יופיע הטקסט המלא של מדיניות ביטול עסקה כפי שינוסח על ידי הגורם המשפטי של האקדמיה.]</p>
          <p>ביטול עסקה יעשה בהתאם להוראות חוק הגנת הצרכן, התשמ"א-1981 והתקנות שהותקנו מכוחו.</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">אופן הביטול</h2>
          <p>[TODO: פירוט דרכי הביטול, למשל באמצעות טלפון או דוא"ל]</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">דמי ביטול</h2>
          <p>[TODO: פירוט לגבי דמי ביטול בהתאם לחוק]</p>
          <p className="text-sm text-zinc-500 mt-12">תאריך עדכון אחרון: {new Date().toLocaleDateString('he-IL')}</p>
        </div>
      </Container>
    </div>
  );
}
