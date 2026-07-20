export interface RepertoryRemedyScore {
  remedyId: string;
  grade: number; // 1, 2, or 3
}

export interface SubRubric {
  id: string;
  nameEn: string;
  nameBn: string;
  remedies: RepertoryRemedyScore[];
}

export interface Rubric {
  id: string;
  nameEn: string;
  nameBn: string;
  remedies: RepertoryRemedyScore[];
  subRubrics?: SubRubric[];
}

export interface Chapter {
  id: string;
  nameEn: string;
  nameBn: string;
  icon: string;
  rubrics: Rubric[];
}

export const REPERTORY_DATABASE: Chapter[] = [
  {
    id: 'mind',
    nameEn: 'MIND',
    nameBn: 'মন ও মানসিক লক্ষণ',
    icon: '🧠',
    rubrics: [
      {
        id: 'anxiety_death',
        nameEn: 'Anxiety - death, fear of',
        nameBn: 'উদ্বেগ - মৃত্যুর ভয়সহ',
        remedies: [
          { remedyId: 'Ars', grade: 3 },
          { remedyId: 'Acon', grade: 3 },
          { remedyId: 'Nit-ac', grade: 2 },
          { remedyId: 'Puls', grade: 1 }
        ]
      },
      {
        id: 'irritability',
        nameEn: 'Irritability - general',
        nameBn: 'খিটখিটে মেজাজ - সাধারণ',
        remedies: [
          { remedyId: 'Nux-v', grade: 3 },
          { remedyId: 'Cham', grade: 3 },
          { remedyId: 'Bryonia', grade: 2 },
          { remedyId: 'Ars', grade: 2 }
        ]
      },
      {
        id: 'weeping_tendency',
        nameEn: 'Weeping - tendency to',
        nameBn: 'কাঁদনমুখো স্বভাব / সহজে কেঁদে ফেলা',
        remedies: [
          { remedyId: 'Puls', grade: 3 },
          { remedyId: 'Sepia', grade: 3 },
          { remedyId: 'Ignatia', grade: 3 },
          { remedyId: 'Nat-m', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'head',
    nameEn: 'HEAD',
    nameBn: 'মাথা ও কপাল',
    icon: '🗣️',
    rubrics: [
      {
        id: 'pain_sun',
        nameEn: 'Pain - sun, from exposure to',
        nameBn: 'ব্যথা - রোদে যাওয়ার কারণে',
        remedies: [
          { remedyId: 'Glon', grade: 3 },
          { remedyId: 'Nat-m', grade: 3 },
          { remedyId: 'Bell', grade: 3 },
          { remedyId: 'Lyc', grade: 1 }
        ]
      },
      {
        id: 'pain_one_sided',
        nameEn: 'Pain - sides - one sided (Migraine)',
        nameBn: 'ব্যথা - মাথার একপাশে (মাইগ্রেন)',
        remedies: [
          { remedyId: 'Sanguinaria', grade: 3 },
          { remedyId: 'Iris', grade: 3 },
          { remedyId: 'Spigelia', grade: 3 },
          { remedyId: 'Puls', grade: 2 },
          { remedyId: 'Ars', grade: 1 }
        ]
      }
    ]
  },
  {
    id: 'stomach',
    nameEn: 'STOMACH',
    nameBn: 'পাকস্থলী ও পেট',
    icon: '🫄',
    rubrics: [
      {
        id: 'thirst_small_quantities',
        nameEn: 'Thirst - small quantities for, frequently',
        nameBn: 'পিপাসা - বারবার অল্প অল্প পানি পান করা',
        remedies: [
          { remedyId: 'Ars', grade: 3 },
          { remedyId: 'China', grade: 2 },
          { remedyId: 'Squilla', grade: 1 }
        ]
      },
      {
        id: 'thirstlessness',
        nameEn: 'Thirstlessness',
        nameBn: 'পিপাসাহীনতা',
        remedies: [
          { remedyId: 'Puls', grade: 3 },
          { remedyId: 'Apis', grade: 3 },
          { remedyId: 'Nux-m', grade: 3 },
          { remedyId: 'Gelsemium', grade: 2 }
        ]
      },
      {
        id: 'pain_burning',
        nameEn: 'Pain - burning',
        nameBn: 'ব্যথা - জ্বালাকর',
        remedies: [
          { remedyId: 'Ars', grade: 3 },
          { remedyId: 'Phosphorus', grade: 3 },
          { remedyId: 'Nux-v', grade: 2 },
          { remedyId: 'Carbo-v', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'rectum',
    nameEn: 'RECTUM',
    nameBn: 'মলদ্বার ও কোষ্ঠকাঠিন্য',
    icon: '💩',
    rubrics: [
      {
        id: 'constipation_ineffectual',
        nameEn: 'Constipation - ineffectual urging',
        nameBn: 'কোষ্ঠকাঠিন্য - নিষ্ফল মলবেগ / কোঁথ দেওয়া',
        remedies: [
          { remedyId: 'Nux-v', grade: 3 },
          { remedyId: 'Lyc', grade: 3 },
          { remedyId: 'Sulph', grade: 2 },
          { remedyId: 'Anac', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'respiration',
    nameEn: 'RESPIRATION',
    nameBn: 'শ্বাসপ্রশ্বাস ও ফুসফুস',
    icon: '🫁',
    rubrics: [
      {
        id: 'asthmatic_night',
        nameEn: 'Asthmatic - night, midnight after',
        nameBn: 'হাঁপানি - রাতে, মধ্যরাতের পর বৃদ্ধি',
        remedies: [
          { remedyId: 'Ars', grade: 3 },
          { remedyId: 'Kali-c', grade: 3 },
          { remedyId: 'Sambucus', grade: 2 }
        ]
      }
    ]
  }
];