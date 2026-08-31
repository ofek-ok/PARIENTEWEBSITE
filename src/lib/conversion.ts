export type SegmentId =
  | "kids"
  | "teens"
  | "competition"
  | "adults"
  | "sensei-aba"
  | "achim-lachaim"
  | "general";

export interface ConditionalField {
  name: string;
  label: string;
  type: "select" | "text" | "radio";
  options?: { label: string; value: string }[];
  placeholder?: string;
  required?: boolean;
}

export interface SegmentConfig {
  id: SegmentId;
  title: string;
  shortLabel: string;
  badge: string;
  ctaLabel: string;
  ctaSubtext?: string;
  formTitle: string;
  formSubtitle: string;
  formAnchorId: string;
  conditionalFields?: ConditionalField[];
}

export const SEGMENT_CONFIGS: Record<SegmentId, SegmentConfig> = {
  kids: {
    id: "kids",
    title: "אימוני ילדים (גילאי 4–12)",
    shortLabel: "ילדים",
    badge: "גילאי 4–12",
    ctaLabel: "לאימוני הילדים",
    ctaSubtext: "אימון ניסיון ללא התחייבות • הורים מוזמנים לצפות",
    formTitle: "אימוני ילדים בפריינטה",
    formSubtitle: "מסגרת שבה ילדים לומדים אמנויות לחימה, מתקדמים בקצב שלהם ורוכשים ביטחון, משמעת והרגלים שממשיכים איתם גם מחוץ לאימון.",
    formAnchorId: "kids-form",
    conditionalFields: [
      {
        name: "childAge",
        label: "טווח גילאי הילד/ה",
        type: "select",
        required: true,
        options: [
          { label: "גילאי 4–6", value: "4-6" },
          { label: "גילאי 7–9", value: "7-9" },
          { label: "גילאי 10–12", value: "10-12" },
        ],
      },
    ],
  },
  teens: {
    id: "teens",
    title: "נוער (גילאי 13–17)",
    shortLabel: "נוער",
    badge: "גילאי 13–17",
    ctaLabel: "לאימוני הנוער",
    ctaSubtext: "ללא לחץ תחרותי • מתאים גם למתחילים",
    formTitle: "אימוני נוער בפריינטה",
    formSubtitle: "אימוני אמנויות לחימה והגנה עצמית לנוער שרוצה להתחזק, לדעת להתמודד ולהיות חלק מקבוצה טובה.",
    formAnchorId: "teens-form",
    conditionalFields: [
      {
        name: "teenAge",
        label: "גיל הנער/ה",
        type: "select",
        required: true,
        options: [
          { label: "גילאי 13–14", value: "13-14" },
          { label: "גילאי 15–17", value: "15-17" },
        ],
      },
    ],
  },
  competition: {
    id: "competition",
    title: "המסלול התחרותי",
    shortLabel: "מסלול תחרותי",
    badge: "מסלול תחרותי",
    ctaLabel: "למסלול התחרותי",
    ctaSubtext: "אימון בדיקת התאמה ע״י צוות המאמנים",
    formTitle: "המסלול התחרותי בפריינטה",
    formSubtitle: "לספורטאים שרוצים לקחת את האימונים צעד קדימה. יותר אימונים, יותר מחויבות ומסלול שמוביל מתחרויות בישראל ועד לזירה הבינלאומית.",
    formAnchorId: "competition-form",
    conditionalFields: [
      {
        name: "experienceLevel",
        label: "ניסיון קודם באמנויות לחימה",
        type: "select",
        required: true,
        options: [
          { label: "ללא ניסיון קודם", value: "beginner" },
          { label: "1–2 שנות אימון", value: "intermediate" },
          { label: "מתחרה פעיל", value: "advanced" },
        ],
      },
    ],
  },
  adults: {
    id: "adults",
    title: "אימוני בוגרים",
    shortLabel: "בוגרים",
    badge: "בוגרים",
    ctaLabel: "לאימוני הבוגרים",
    ctaSubtext: "ג'ו ג'יטסו, MMA, אגרוף תאילנדי וכושר",
    formTitle: "אימוני בוגרים בפריינטה",
    formSubtitle: "ג'ו ג'יטסו, MMA, אגרוף תאילנדי, כושר ואימונים נוספים לאורך השבוע, לצד אירועים ופעילויות מיוחדות.",
    formAnchorId: "adults-form",
    conditionalFields: [
      {
        name: "preferredTime",
        label: "זמן אימון מועדף",
        type: "radio",
        options: [
          { label: "אימוני בוקר", value: "morning" },
          { label: "אימוני ערב", value: "evening" },
          { label: "שעות גמישות", value: "flexible" },
        ],
      },
    ],
  },
  "sensei-aba": {
    id: "sensei-aba",
    title: "סנסאי אבא",
    shortLabel: "סנסאי אבא",
    badge: "סנסאי אבא",
    ctaLabel: "הכירו את סנסאי אבא",
    ctaSubtext: "אבא וילד עולים יחד על המזרן לאימון משותף",
    formTitle: "סנסאי אבא בפריינטה",
    formSubtitle: "אבא וילד עולים יחד על המזרן לאימון משותף. שניהם לומדים, מתאמנים ועוברים את החוויה יחד.",
    formAnchorId: "sensei-aba-form",
    conditionalFields: [
      {
        name: "childAge",
        label: "גיל הילד/ה",
        type: "text",
        placeholder: "לדוגמה: בן 8",
      },
    ],
  },
  "achim-lachaim": {
    id: "achim-lachaim",
    title: "אחים לחיים",
    shortLabel: "אחים לחיים",
    badge: "אחים לחיים",
    ctaLabel: "לסיפור של אחים לחיים",
    ctaSubtext: "פעילות משותפת עם עמותת אחים לחיים",
    formTitle: "אחים לחיים בפריינטה",
    formSubtitle: "פעילות משותפת שמחברת בין אמנויות לחימה, אימון ומפגש עם חברי עמותת אחים לחיים.",
    formAnchorId: "achim-lachaim-form",
    conditionalFields: [],
  },
  general: {
    id: "general",
    title: "רוצים לעלות על המזרן?",
    shortLabel: "אחר",
    badge: "הרשמה וייעוץ",
    ctaLabel: "אני רוצה לשמוע עוד",
    ctaSubtext: "ספרו לנו למי אתם מחפשים אימון ונעזור לכם למצוא את המקום הנכון להתחיל ממנו.",
    formTitle: "רוצים לעלות על המזרן?",
    formSubtitle: "לא צריך לדעת מראש איזה אימון מתאים לכם או להגיע עם ניסיון. ספרו לנו למי אתם מחפשים אימון ונעזור לכם למצוא את המקום הנכון להתחיל ממנו.",
    formAnchorId: "lead-form",
    conditionalFields: [],
  },
};
