export interface PathologicalCondition {
  id: string;
  nameBn: string;
  nameEn: string;
  description: string;
  commonSymptoms: string[];
  repertoryRubrics: string[]; // রেপার্টরি সার্চে ম্যাপ করার জন্য
  recommendedRemedies: string[]; // প্রাথমিক সম্ভাবনাময় রেমিডি
}

export interface OrganSystem {
  id: string;
  nameBn: string;
  nameEn: string;
  icon: string; // SVG বা আইকন নাম
  imageUrl: string; // অর্গান এনোটমি ডায়াগ্রামের লিংক
  description: string;
  conditions: PathologicalCondition[];
}

export const ANATOMY_DATABASE: OrganSystem[] = [
  {
    id: 'brain_nervous',
    nameBn: 'মস্তিষ্ক ও স্নায়ুতন্ত্র',
    nameEn: 'Brain & Nervous System',
    icon: '🧠',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&auto=format&fit=crop&q=60',
    description: 'মস্তিষ্ক, মেরুদণ্ড এবং দেহের সকল সংবেদনশীল ও মোটর স্নায়ু সংক্রান্ত সমস্যা।',
    conditions: [
      {
        id: 'migraine',
        nameBn: 'মাইগ্রেন ও কপালে ব্যথাবোধ',
        nameEn: 'Migraine / Congestive Headache',
        description: 'মাথার একপাশে বা রগে দপদেপে ব্যথা, আলো ও শব্দে বৃদ্ধি।',
        commonSymptoms: ['Throbbing pain', 'Nausea with headache', 'Sensitivity to light', 'Right or left sided'],
        repertoryRubrics: ['HEAD - PAIN - Sun; from', 'HEAD - PAIN - Sides - One sided', 'HEAD - PAIN - Accompanied by - Nausea'],
        recommendedRemedies: ['Bell', 'Glon', 'Nat-m', 'Sanguinaria', 'Iris']
      },
      {
        id: 'insomnia_anxiety',
        nameBn: 'অনিদ্রা ও স্নায়বিক অস্থিরতা',
        nameEn: 'Insomnia & Anxiety',
        description: 'দুশ্চিন্তা, অতিরিক্ত চিন্তা ও স্নায়বিক উত্তেজনার কারণে ঘুম না হওয়া।',
        commonSymptoms: ['Sleeplessness from anxiety', 'Restlessness', 'Palpitation in bed'],
        repertoryRubrics: ['MIND - ANXIETY - Night', 'SLEEP - SLEEPLESSNESS - Thoughts; crowd of'],
        recommendedRemedies: ['Coffea', 'Ars', 'Acon', 'Kali-p']
      }
    ]
  },
  {
    id: 'digestive_system',
    nameBn: 'পাকস্থলী ও পরিপাকতন্ত্র',
    nameEn: 'Gastrointestinal & Liver System',
    icon: '🫄',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60',
    description: 'পাকস্থলী, যকৃৎ (Liver), অন্ত্র, কোষ্ঠকাঠিন্য ও গ্যাস্ট্রিকের সমস্যা।',
    conditions: [
      {
        id: 'dyspepsia_gastritis',
        nameBn: 'গ্যাস্ট্রাইটিস ও বদহজম',
        nameEn: 'Gastritis & Acid Reflux',
        description: 'পেটে জ্বালা, অম্ল ঢেকুর, ভারীভাব ও খাবার গ্রহণের পর অস্বস্তি।',
        commonSymptoms: ['Burning in stomach', 'Sour eructations', 'Fulness after eating'],
        repertoryRubrics: ['STOMACH - PAIN - Burning', 'STOMACH - ERUCTATIONS - Sour', 'STOMACH - HEAVINESS'],
        recommendedRemedies: ['Nux-v', 'Ars', 'Puls', 'Carbo-v', 'Lyc']
      },
      {
        id: 'constipation_piles',
        nameBn: 'কোষ্ঠকাঠিন্য ও অর্শ/অর্শরোগ',
        nameEn: 'Constipation & Hemorrhoids',
        description: 'কঠিন মল, মলদ্বারে কোঁথ, রক্তপাত বা তীব্র ব্যথা।',
        commonSymptoms: ['Ineffectual urging', 'Hard dry stool', 'Painful hemorrhoids'],
        repertoryRubrics: ['RECTUM - CONSTIPATION - Urging; ineffectual', 'RECTUM - HEMORRHOIDS - Painful'],
        recommendedRemedies: ['Nux-v', 'Sulph', 'Aesculus', 'Collinsonia', 'Nit-ac']
      }
    ]
  },
  {
    id: 'respiratory_system',
    nameBn: 'শ্বাসতন্ত্র ও ফুসফুস',
    nameEn: 'Respiratory System & Lungs',
    icon: '🫁',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&auto=format&fit=crop&q=60',
    description: 'নাক, গলা, শ্বাসনালী, হাঁপানি (Asthma), কাশি ও ফুসফুসের ইনফেকশন।',
    conditions: [
      {
        id: 'bronchial_asthma',
        nameBn: 'হাঁপানি ও শাঁস-শাঁস শব্দ',
        nameEn: 'Bronchial Asthma',
        description: 'শ্বাসকষ্ট, বুকে সাঁই-সাঁই শব্দ, রাতে বা ঠান্ডা বাতাসে বৃদ্ধি।',
        commonSymptoms: ['Dyspnea at night', 'Wheezing respiration', 'Suffocative cough'],
        repertoryRubrics: ['RESPIRATION - ASTHMATIC - Night', 'CHEST - OPPRESSION - Night'],
        recommendedRemedies: ['Ars', 'Ipecac', 'Blatta-o', 'Nat-s', 'Ant-t']
      },
      {
        id: 'chronic_coryza',
        nameBn: 'সর্দি ও সাইনুসাইটিস',
        nameEn: 'Sinusitis & Acute Rhinitis',
        description: 'নাক বন্ধ থাকা, অনবরত হাঁচি, কপালে ও গালে ভার অনুভূতি।',
        commonSymptoms: ['Sneezing in morning', 'Nasal obstruction', 'Frontal sinus pain'],
        repertoryRubrics: ['NOSE - CORYZA - Discharge - Profuse', 'NOSE - OBSTRUCTION - Night'],
        recommendedRemedies: ['Allium-c', 'Ars', 'Kali-bi', 'Puls', 'Silicea']
      }
    ]
  },
  {
    id: 'cardiovascular',
    nameBn: 'হৃদযন্ত্র ও রক্তসংবহন',
    nameEn: 'Cardiovascular System',
    icon: '🫀',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60',
    description: 'হৃদপিণ্ড, রক্তচাপ (High/Low BP), বুকধড়ফড় ও শিরা সংক্রান্ত সমস্যা।',
    conditions: [
      {
        id: 'palpitation_hypertension',
        nameBn: 'উচ্চ রক্তচাপ ও বুকধড়ফড়',
        nameEn: 'Hypertension & Palpitation',
        description: 'হঠাৎ বুকধড়ফড় করা, মাথায় রক্ত সঞ্চালন বৃদ্ধি ও রক্তচাপ বৃদ্ধি।',
        commonSymptoms: ['Violent palpitation', 'High blood pressure', 'Throbbing in carotid arteries'],
        repertoryRubrics: ['HEART - PALPITATION - Anxiety, with', 'CHEST - CONSTRICTION - Heart'],
        recommendedRemedies: ['Crataegus', 'Rauwolfia', 'Glon', 'Bell', 'Acon']
      }
    ]
  },
  {
    id: 'musculoskeletal',
    nameBn: 'অস্থি ও পেশিতন্ত্র (হাড় ও জয়েন্ট)',
    nameEn: 'Musculoskeletal & Joints',
    icon: '🦴',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&auto=format&fit=crop&q=60',
    description: 'বাত-ব্যথা, রিউম্যাটিজম, অস্টিওআর্থ্রাইটিস ও পেশির শক্তভাব।',
    conditions: [
      {
        id: 'rheumatism_arthritis',
        nameBn: 'বাত-ব্যথা ও জয়েন্টে ফোলা',
        nameEn: 'Rheumatoid Arthritis & Joint Pain',
        description: 'জোড়ায় জোড়ায় ব্যথা, নাড়ালে বাড়ে/কমে, সকালে শক্ত হয়ে থাকা।',
        commonSymptoms: ['Joint pain worse motion', 'Joint pain better motion', 'Swollen joints'],
        repertoryRubrics: ['EXTREMITIES - PAIN - Joints - Rheumatic', 'EXTREMITIES - STIFFNESS - Joints'],
        recommendedRemedies: ['Rhus-t', 'Bryonia', 'Colchicum', 'Ledum', 'Ruta']
      }
    ]
  }
];