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
    shortLabel: "ילדים (4–12)",
    badge: "גילאי 4–12",
    ctaLabel: "קביעת אימון ניסיון לילדים",
    ctaSubtext: "אימון ניסיון ללא התחייבות • הורים מוזמנים לצפות",
    formTitle: "הרשמה לאימון ניסיון לילדים",
    formSubtitle: "העניקו לילדכם ביטחון עצמי, משמעת וכלים להתפתחות אישית.",
    formAnchorId: "kids-form",
    conditionalFields: [
      {
        name: "childAge",
        label: "טווח גילאי הילד/ה",
        type: "select",
        required: true,
        options: [
          { label: "גילאי 4–6 (טרום חובה / חובה)", value: "4-6" },
          { label: "גילאי 7–9 (יסודי נמוך)", value: "7-9" },
          { label: "גילאי 10–12 (יסודי גבוה)", value: "10-12" },
        ],
      },
    ],
  },
  teens: {
    id: "teens",
    title: "נוער — ספורט והגנה עצמית (גילאי 13–17)",
    shortLabel: "נוער (13–17)",
    badge: "גילאי 13–17",
    ctaLabel: "קביעת אימון ניסיון לנוער",
    ctaSubtext: "ללא לחץ תחרותי • מתאים גם למתחילים",
    formTitle: "הרשמה לאימון ניסיון לנוער",
    formSubtitle: "כושר גופני, ביטחון אישי וקבוצה מעצימה ללא פשרות.",
    formAnchorId: "teens-form",
    conditionalFields: [
      {
        name: "teenAge",
        label: "גיל הנער/ה",
        type: "select",
        required: true,
        options: [
          { label: "גילאי 13–14 (חטיבת ביניים)", value: "13-14" },
          { label: "גילאי 15–17 (תיכון)", value: "15-17" },
        ],
      },
    ],
  },
  competition: {
    id: "competition",
    title: "מסלול תחרותי — נוער וספורטאים (גילאי 13–21)",
    shortLabel: "מסלול תחרותי",
    badge: "מסלול תחרותי",
    ctaLabel: "הצטרפות לאימון התאמה תחרותי",
    ctaSubtext: "אימון בדיקת התאמה ע״י צוות המאמנים",
    formTitle: "הרשמה לבדיקת התאמה למסלול התחרותי",
    formSubtitle: "אימונים ענפיים עצימים לאתלטים וספורטאים השואפים להתחרות בארץ ובעולם.",
    formAnchorId: "competition-form",
    conditionalFields: [
      {
        name: "experienceLevel",
        label: "ניסיון קודם באמנויות לחימה",
        type: "select",
        required: true,
        options: [
          { label: "ללא ניסיון קודם / רקע ספורטיבי", value: "beginner" },
          { label: "1–2 שנות אימון (BJJ / עמידה)", value: "intermediate" },
          { label: "מתחרה פעיל (קרקע / עמידה / MMA)", value: "advanced" },
        ],
      },
    ],
  },
  adults: {
    id: "adults",
    title: "אימוני בוגרים — MMA, BJJ, Muay Thai (גילאי 22–45+)",
    shortLabel: "בוגרים (22–45+)",
    badge: "בוגרים 22–45+",
    ctaLabel: "קביעת אימון ניסיון לבוגרים",
    ctaSubtext: "מסלולי בוקר וערב • מתאים ממתחילים ועד מתקדמים",
    formTitle: "הרשמה לאימון ניסיון לבוגרים",
    formSubtitle: "כושר קרבי, אמנויות לחימה ברמה הגבוהה ביותר וקהילה תומכת.",
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
    title: "סנסאי אבא — פרויקט אבא וילד",
    shortLabel: "סנסאי אבא",
    badge: "אבא וילד",
    ctaLabel: "הצטרפות למפגש סנסאי אבא הקרוב",
    ctaSubtext: "זמן איכות משותף ומשמעותי על המזרן",
    formTitle: "הרשמה למפגש סנסאי אבא",
    formSubtitle: "יוזמה ייחודית המחברת בין אבות לילדיהם דרך אמנויות לחימה.",
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
    title: "אחים לחיים — פרויקט שיקום וקהילה",
    shortLabel: "אחים לחיים",
    badge: "יוזמה קהילתית",
    ctaLabel: "פנייה בנושא פרויקט אחים לחיים",
    ctaSubtext: "פרויקט שיקום ואחווה ללוחמים פצועים",
    formTitle: "פנייה וברור פרטים — אחים לחיים",
    formSubtitle: "חיבור לוחמים פצועים לאימוני שיקום, אחווה ומסוגלות בקהילת האקדמיה.",
    formAnchorId: "achim-lachaim-form",
    conditionalFields: [],
  },
  general: {
    id: "general",
    title: "פנייה כללית לאקדמיית פריינטה",
    shortLabel: "כללי",
    badge: "אקדמיית פריינטה",
    ctaLabel: "מצאו את המסלול שלכם",
    ctaSubtext: "השאירו פרטים ונעזור לכם לבחור את המסלול המתאים",
    formTitle: "רוצים להתחיל אבל לא בטוחים מאיפה?",
    formSubtitle: "השאירו פרטים וספרו לנו מה אתם מחפשים. נעזור לכם למצוא את המסלול המתאים.",
    formAnchorId: "lead-form",
    conditionalFields: [],
  },
};
