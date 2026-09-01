import React from "react";
import { Container } from "@/components/sections/Container";

export const metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת נגישות של אתר פריינטה אקדמי",
};

export default function AccessibilityPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#040406] min-h-screen">
      <Container size="narrow" className="space-y-8 text-right">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">הצהרת נגישות</h1>
        <div className="max-w-none text-zinc-300 space-y-4 text-base leading-relaxed">
          <p className="text-lg">אנו בפריינטה אקדמי רואים חשיבות רבה במתן שירות שוויוני, מכובד ונגיש לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">התאמות נגישות באתר</h2>
          <p>האתר הותאם באופן שמספק כלים טכנולוגיים המאפשרים לכל גולש לחוות את האתר בצורה נגישה וברורה.</p>
          <ul className="list-disc list-inside space-y-2 mt-4 mb-4">
            <li>כפתור נגישות המאפשר שליטה בגודל הטקסט, ניגודיות גבוהה, הדגשת קישורים והפסקת אנימציות.</li>
            <li>ניווט תקין באמצעות המקלדת (Tab).</li>
            <li>התאמה לקוראי מסך באמצעות תגיות ARIA וטקסט חלופי לתמונות (Alt).</li>
          </ul>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">החרגות ושירותי צד ג'</h2>
          <p>חלק מהשירותים המוצגים באתר (כגון מערכת הרישום Arbox או נגני וידאו חיצוניים) מוטמעים כרכיבי צד שלישי, ולפיכך הנגישות בהם כפופה לספקים החיצוניים.</p>
           <h2 className="text-2xl font-bold text-white mt-8 mb-4">יצירת קשר בנושא נגישות</h2>
          <p>אם נתקלתם בבעיית נגישות באתר, או אם ברצונכם להציע שיפור, נשמח לשמוע מכם:</p>
          <ul className="list-disc list-inside space-y-2 mt-4 mb-4">
            <li><strong>רכז הנגישות:</strong> [TODO: שם רכז הנגישות]</li>
            <li><strong>דוא"ל:</strong> [TODO: אימייל רכז הנגישות]</li>
            <li><strong>טלפון:</strong> [TODO: טלפון רכז הנגישות]</li>
          </ul>
          <p className="text-sm text-zinc-500 mt-12">תאריך עדכון הצהרת נגישות: {new Date().toLocaleDateString('he-IL')}</p>
        </div>
      </Container>
    </div>
  );
}
