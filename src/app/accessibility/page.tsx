import React from "react";
import { Container } from "@/components/sections/Container";

export const metadata = {
  title: "הצהרת נגישות | פריינטה אקדמי",
  description: "הצהרת הנגישות וסידורי הנגישות הפיזיים של פריינטה אקדמי.",
};

export default function AccessibilityPage() {
  return (
    <div className="py-24 sm:py-32 bg-[#040406] min-h-screen">
      <Container size="narrow" className="text-right">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">הצהרת נגישות</h1>
        <div className="max-w-none text-zinc-300 space-y-4 text-base leading-relaxed">
          <p>
            אנו בפריינטה אקדמי רואים חשיבות עליונה במתן שירות שוויוני, מכובד ונגיש לכלל האוכלוסייה, לרבות לאנשים עם מוגבלויות. אנו פועלים ככל הניתן כדי לאפשר חווית גלישה ושירות נוחים ובטוחים.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">סידורי נגישות פיזיים במועדון</h2>
          <p>סניף האקדמיה ממוקם ברחוב ויצמן 95, כפר סבא, וכולל את סידורי הנגישות הבאים:</p>
          <ul className="list-disc list-inside space-y-2 mt-4 mb-4">
            <li>קיימת נגישות לכיסאות גלגלים.</li>
            <li>קיימת חניית נכים מסודרת באזור.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">התאמות נגישות באתר האינטרנט</h2>
          <p>
            האתר נבנה מתוך מודעות למתן חווית גלישה נגישה, והוטמעו בו התאמות טכניות לטובת ציבור הגולשים עם מוגבלות. ההתאמות שבוצעו כוללות:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 mb-4">
            <li><strong>תפריט נגישות:</strong> באתר קיים כפתור נגישות צף המאפשר שליטה בגודל הטקסט, הגדרת ניגודיות גבוהה, הדגשת קישורים, והפחתת אנימציות ותנועה (לרבות עצירת וידאו הרקע הראשי).</li>
            <li><strong>שליטה במקלדת:</strong> האתר תומך בניווט בסיסי באמצעות המקלדת (מקש Tab למעבר בין רכיבים, ומקש Enter לאישור).</li>
            <li><strong>התאמה טכנית ומבנית:</strong> חלוקה סמנטית נכונה לכותרות (H1, H2), שימוש בתוויות (Labels) בטפסים, ומיקוד (Focus) נראה לעין על גבי אלמנטים פעילים.</li>
            <li><strong>תמונות וווידאו:</strong> תמונות בעלות משמעות נושאות טקסט חלופי (Alt Text) בשפה העברית. אלמנטים גרפיים דקורטיביים וווידאו רקע הוסתרו מטכנולוגיות מסייעות כדי למנוע עומס קולי.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">החרגות ושירותי צד ג'</h2>
          <p>
            האתר כולל רכיבים המגיעים ממערכות צד שלישי (בפרט מערכת מערכת השעות החיצונית של Arbox המוטמעת בתוך מסגרת Iframe). אנו עושים מאמץ להנגיש את אזור המעטפת, אך איננו יכולים להתחייב על רמת הנגישות בתוך הממשק הפנימי של צדדים שלישיים אלה.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">יצירת קשר ופניות בנושא נגישות</h2>
          <p>
            אם במהלך הגלישה באתר או בביקורכם במועדון נתקלתם בבעיית נגישות כלשהי, או שיש לכם הצעה לשיפור, נשמח לשמוע מכם ולסייע:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 mb-4">
            <li><strong>רכז נגישות:</strong> מנהל המועדון</li>
            <li><strong>טלפון ליצירת קשר:</strong> 054-7468505</li>
            <li><strong>כתובת דואר אלקטרוני:</strong> <a href="mailto:parienteacademy@gmail.com" className="text-[#f3c010] hover:underline">parienteacademy@gmail.com</a></li>
          </ul>

          <p className="text-sm text-zinc-500 mt-12">תאריך עדכון הצהרת נגישות: מרץ 2024</p>
        </div>
      </Container>
    </div>
  );
}
