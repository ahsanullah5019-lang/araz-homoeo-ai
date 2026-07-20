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
        nameBn: 'উদ্বেগ - মৃত্যুর ভয়সহ',
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
      },
      {
        id: 'restlessness_night',
        nameEn: 'Restlessness - night',
        nameBn: 'অস্থিরতা - রাতে অতিরিক্ত বৃদ্ধি',
        remedies: [
          { remedyId: 'Ars', grade: 3 },
          { remedyId: 'Rhus-t', grade: 3 },
          { remedyId: 'Acon', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'head',
    nameEn: 'HEAD',
    nameBn: 'মাথা ও স্নায়বিক সমস্যা',
    icon: '🗣️',
    rubrics: [
      {
        id: 'pain_sun',
        nameEn: 'Pain - sun, from exposure to',
        nameBn: 'ব্যথা - রোদে যাওয়ার কারণে',
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
      },
      {
        id: 'throbbing_headache',
        nameEn: 'Pain - throbbing, pulsating',
        nameBn: 'ব্যথা - দপদপ করে রক্ত সঞ্চালনের মতো',
        remedies: [
          { remedyId: 'Bell', grade: 3 },
          { remedyId: 'Glon', grade: 3 },
          { remedyId: 'Melilotus', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'eyes_ears_sensory',
    nameEn: 'EYES & EARS',
    nameBn: 'চোখ, কান ও অনুভূতি',
    icon: '👁️',
    rubrics: [
      {
        id: 'conjunctivitis_redness',
        nameEn: 'Eye - Inflammation - Conjunctivitis with redness',
        nameBn: 'চোখ - প্রদাহ, চোখ ওঠা ও লালচেভাব',
        remedies: [
          { remedyId: 'Euphrasia', grade: 3 },
          { remedyId: 'Bell', grade: 3 },
          { remedyId: 'Puls', grade: 2 },
          { remedyId: 'Merc-sol', grade: 2 }
        ]
      },
      {
        id: 'ear_discharge_purulent',
        nameEn: 'Ear - Discharge - Purulent, offensive',
        nameBn: 'কান - পুঁজযুক্ত দুর্গন্ধযুক্ত স্রাব',
        remedies: [
          { remedyId: 'Puls', grade: 3 },
          { remedyId: 'Hep', grade: 3 },
          { remedyId: 'Tellurium', grade: 2 },
          { remedyId: 'Silicea', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'stomach',
    nameEn: 'STOMACH',
    nameBn: 'পাকস্থলী ও পরিপাক',
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
        nameEn: 'Pain - burning in stomach',
        nameBn: 'পেট - অম্লতা ও জ্বালাকর ব্যথা',
        remedies: [
          { remedyId: 'Ars', grade: 3 },
          { remedyId: 'Phosphorus', grade: 3 },
          { remedyId: 'Nux-v', grade: 2 },
          { remedyId: 'Carbo-v', grade: 2 }
        ]
      },
      {
        id: 'eructations_sour',
        nameEn: 'Eructations - sour',
        nameBn: 'ঢেকুর - অম্ল ও টক ঢেকুর',
        remedies: [
          { remedyId: 'Nux-v', grade: 3 },
          { remedyId: 'Robin', grade: 3 },
          { remedyId: 'Lyc', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'rectum',
    nameEn: 'RECTUM',
    nameBn: 'মলদ্বার, কোষ্ঠকাঠিন্য ও অর্শ',
    icon: '💩',
    rubrics: [
      {
        id: 'constipation_ineffectual',
        nameEn: 'Constipation - ineffectual urging',
        nameBn: 'কোষ্ঠকাঠিন্য - নিষ্ফল মলবেগ / বার বারবার কোঁথ দেওয়া',
        remedies: [
          { remedyId: 'Nux-v', grade: 3 },
          { remedyId: 'Lyc', grade: 3 },
          { remedyId: 'Sulph', grade: 2 },
          { remedyId: 'Anac', grade: 2 }
        ]
      },
      {
        id: 'hemorrhoids_bleeding',
        nameEn: 'Hemorrhoids - bleeding',
        nameBn: 'অর্শ/গেজ - রক্তপাতসহ ব্যথা',
        remedies: [
          { remedyId: 'Hamamelis', grade: 3 },
          { remedyId: 'Aesculus', grade: 3 },
          { remedyId: 'Nit-ac', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'urinary',
    nameEn: 'URINARY ORGANS',
    nameBn: 'মূত্রতন্ত্র ও কিডনি',
    icon: '🩺',
    rubrics: [
      {
        id: 'urination_burning',
        nameEn: 'Urinating - burning, scalding',
        nameBn: 'প্রস্রাব - তীব্র জ্বালাপোড়া ও কাঁটার মতো অনুভূতি',
        remedies: [
          { remedyId: 'Cantharis', grade: 3 },
          { remedyId: 'Apis', grade: 3 },
          { remedyId: 'Berberis-v', grade: 2 },
          { remedyId: 'Sarsaparilla', grade: 2 }
        ]
      },
      {
        id: 'kidney_calculi_pain',
        nameBn: 'কিডনি - পাথরজনিত কোমর থেকে কুঁচকির ব্যথা',
        nameEn: 'Kidneys - Pain - Calculi, from',
        remedies: [
          { remedyId: 'Berberis-v', grade: 3 },
          { remedyId: 'Pareira', grade: 3 },
          { remedyId: 'Lyc', grade: 2 }
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
          { remedyId: 'Sambucus', grade: 2 },
          { remedyId: 'Blatta-o', grade: 2 }
        ]
      },
      {
        id: 'cough_dry_night',
        nameEn: 'Cough - dry - night',
        nameBn: 'কাশি - রাতে শুকনো খসখসে কাশি',
        remedies: [
          { remedyId: 'Drosera', grade: 3 },
          { remedyId: 'Spongia', grade: 3 },
          { remedyId: 'Bryonia', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'chest_cardiac',
    nameEn: 'CHEST & HEART',
    nameBn: 'বুকে ব্যথা ও হৃদপিণ্ড',
    icon: '🫀',
    rubrics: [
      {
        id: 'palpitation_anxiety',
        nameEn: 'Heart - Palpitation - with anxiety',
        nameBn: 'হৃদস্পন্দন - বুকধড়ফড় করা ও উদ্বেগ',
        remedies: [
          { remedyId: 'Acon', grade: 3 },
          { remedyId: 'Crataegus', grade: 3 },
          { remedyId: 'Glon', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'extremities_joints',
    nameEn: 'EXTREMITIES',
    nameBn: 'হাত, পা ও জয়েন্টের বাত',
    icon: '🦴',
    rubrics: [
      {
        id: 'joint_pain_rheumatic',
        nameEn: 'Joints - Pain - Rheumatic, worse motion',
        nameBn: 'জয়েন্ট - বাত ব্যথা, নড়াচড়ায় বৃদ্ধি',
        remedies: [
          { remedyId: 'Bryonia', grade: 3 },
          { remedyId: 'Rhus-t', grade: 2 },
          { remedyId: 'Colchicum', grade: 2 }
        ]
      },
      {
        id: 'joint_pain_rest_agg',
        nameEn: 'Joints - Pain - worse initial motion, better continued motion',
        nameBn: 'জয়েন্ট - বিশ্রামে ও প্রথমে নড়াচড়ায় বাড়ে, হাঁটলে কমে',
        remedies: [
          { remedyId: 'Rhus-t', grade: 3 },
          { remedyId: 'Ruta', grade: 2 }
        ]
      }
    ]
  },
  {
    id: 'skin',
    nameEn: 'SKIN',
    nameBn: 'চর্ম ও ত্বক (ইমেজ অ্যানালিসিস রেডি)',
    icon: '🧴',
    rubrics: [
      {
        id: 'skin_eczema',
        nameEn: 'Skin - Eruptions - Eczema',
        nameBn: 'ত্বক - একজিমা ও চুলকানিযুক্ত চর্মরোগ',
        remedies: [
          { remedyId: 'Sulph', grade: 3 },
          { remedyId: 'Graph', grade: 3 },
          { remedyId: 'Petroleum', grade: 2 },
          { remedyId: 'Ars', grade: 2 }
        ]
      },
      {
        id: 'skin_psoriasis_scales',
        nameEn: 'Skin - Eruptions - Scaly, silvery scales',
        nameBn: 'ত্বক - রূপালী আস্তরণযুক্ত সোরিয়াসিস',
        remedies: [
          { remedyId: 'Ars-i', grade: 3 },
          { remedyId: 'Graph', grade: 3 },
          { remedyId: 'Hydrocotyle', grade: 2 }
        ]
      },
      {
        id: 'skin_urticaria_hives',
        nameEn: 'Skin - Eruptions - Urticaria, hives',
        nameBn: 'ত্বক - চাকা চাকা লাল এলার্জি ও জ্বালাপোড়া',
        remedies: [
          { remedyId: 'Apis', grade: 3 },
          { remedyId: 'Urtica-u', grade: 3 },
          { remedyId: 'Nat-m', grade: 2 }
        ]
      }
    ]
  }
];