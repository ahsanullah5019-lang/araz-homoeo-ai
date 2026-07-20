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
  icon: string; // ইমোজি বা আইকন নাম
  imageUrl: string; // ডায়াগ্রামের লিংক
  bodyRegion: string; // ভবিষ্যৎ ইমেজ ও ভিশন এআই ম্যাচিংয়ের জন্য
  description: string;
  conditions: PathologicalCondition[];
}

export const ANATOMY_DATABASE: OrganSystem[] = [
  {
    id: 'brain_nervous',
    nameBn: '১. স্নায়ুতন্ত্র (Nervous System)',
    nameEn: 'Brain & Nervous System',
    icon: '🧠',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Head, Spine, Central & Peripheral Nervous System',
    description: 'মস্তিষ্ক, মেরুদণ্ড এবং সংবেদনশীল ও মোটর স্নায়ু সংক্রান্ত সমস্যা।',
    conditions: [
      {
        id: 'migraine',
        nameBn: 'মাইগ্রেন ও কনজেস্টিভ মাথাব্যথা',
        nameEn: 'Migraine & Congestive Headache',
        description: 'মাথার একপাশে বা রগে দপদেপে ব্যথা, আলো ও শব্দে বৃদ্ধি, বমি বমি ভাব।',
        commonSymptoms: ['Throbbing pain', 'Nausea with headache', 'Sensitivity to light & sound', 'Right or left sided headache'],
        repertoryRubrics: ['HEAD - PAIN - Sun; from', 'HEAD - PAIN - Sides - One sided', 'HEAD - PAIN - Accompanied by - Nausea'],
        recommendedRemedies: ['Bell', 'Glon', 'Nat-m', 'Sanguinaria', 'Iris']
      },
      {
        id: 'insomnia_anxiety',
        nameBn: 'অনিদ্রা ও স্নায়বিক অস্থিরতা',
        nameEn: 'Insomnia & Nervous Anxiety',
        description: 'দুশ্চিন্তা, অতিরিক্ত চিন্তা ও স্নায়বিক উত্তেজনার কারণে ঘুম না হওয়া বা রাতে ধড়ফড়ানি।',
        commonSymptoms: ['Sleeplessness from anxiety', 'Restlessness in bed', 'Overactive mental state'],
        repertoryRubrics: ['MIND - ANXIETY - Night', 'SLEEP - SLEEPLESSNESS - Thoughts; crowd of'],
        recommendedRemedies: ['Coffea', 'Ars', 'Acon', 'Kali-p', 'Passiflora']
      },
      {
        id: 'sciatica_neuralgia',
        nameBn: 'সায়াটিকা ও স্নায়ুশূল ব্যথা',
        nameEn: 'Sciatica & Neuralgia',
        description: 'কোমর থেকে পায়ের দিকে নেমে যাওয়া তীব্র স্নায়বিক ব্যথা বা অবশ ভাব।',
        commonSymptoms: ['Sharp shooting pain along nerve', 'Numbness in lower limbs', 'Worse during movement'],
        repertoryRubrics: ['EXTREMITIES - PAIN - Sciatic nerve', 'GENERALS - PAIN - Neuralgic'],
        recommendedRemedies: ['Coloc', 'Mag-p', 'Hyper', 'Gnaphalium', 'Rhus-t']
      },
      {
        id: 'epilepsy_convulsions',
        nameBn: 'মৃগী রোগ ও খিঁচুনি',
        nameEn: 'Epilepsy & Convulsions',
        description: 'হঠাৎ চেতনা হারানো, মাংসপেশির খিঁচুনি ও মুখ দিয়ে ফেনা উঠা।',
        commonSymptoms: ['Involuntary spasms', 'Loss of consciousness', 'Twitching of facial muscles'],
        repertoryRubrics: ['GENERALS - CONVULSIONS - Epileptic', 'MIND - UNCONSCIOUSNESS'],
        recommendedRemedies: ['Cuprum-m', 'Cicuta', 'Bufo', 'Hyos', 'Bell']
      }
    ]
  },
  {
    id: 'digestive_system',
    nameBn: '২. পরিপাকতন্ত্র (Digestive System)',
    nameEn: 'Gastrointestinal & Liver System',
    icon: '🫄',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Abdomen, Stomach, Liver, Intestines, Rectum',
    description: 'পাকস্থলী, যকৃৎ (Liver), অন্ত্র, কোষ্ঠকাঠিন্য, অম্লতা ও গ্যাস্ট্রিকের সমস্যা।',
    conditions: [
      {
        id: 'dyspepsia_gastritis',
        nameBn: 'গ্যাস্ট্রাইটিস, এসিডিটি ও বদহজম',
        nameEn: 'Gastritis, GERD & Dyspepsia',
        description: 'পেটে ও বুকে জ্বালাপোড়া, অম্ল ঢেকুর, পেট ফাঁপা ও খাবার গ্রহণের পর অস্বস্তি।',
        commonSymptoms: ['Burning in stomach', 'Sour eructations', 'Fulness after eating', 'Heartburn'],
        repertoryRubrics: ['STOMACH - PAIN - Burning', 'STOMACH - ERUCTATIONS - Sour', 'STOMACH - DISTENSION'],
        recommendedRemedies: ['Nux-v', 'Ars', 'Puls', 'Carbo-v', 'Lyc', 'Robin' ]
      },
      {
        id: 'ibs_diarrhea',
        nameBn: 'আইবিএস (IBS) ও আমাশয়',
        nameEn: 'Irritable Bowel Syndrome & Dysentery',
        description: 'পেটে কামড়ানি ব্যথা, বারবার পাতলা পায়খানা বা মিউকাস/রক্তমিশ্রিত মল।',
        commonSymptoms: ['Abdominal cramping', 'Mucus in stool', 'Urgent bowel movements', 'Alternating diarrhea & constipation'],
        repertoryRubrics: ['RECTUM - DIARRHEA - Food; after', 'STOOL - MUCUS - Red / White'],
        recommendedRemedies: ['Merc-sol', 'Merc-cor', 'Aloe', 'Nux-v', 'Puls']
      },
      {
        id: 'constipation_piles',
        nameBn: 'কোষ্ঠকাঠিন্য ও অর্শ/গেজ রোগ',
        nameEn: 'Constipation & Hemorrhoids / Fissure',
        description: 'কঠিন মল, মলদ্বারে তীব্র কোঁথ, মলদ্বারে কাটা বা জ্বালাপোড়া ব্যথা ও রক্তপাত।',
        commonSymptoms: ['Ineffectual urging for stool', 'Hard dry knotty stool', 'Painful bleeding hemorrhoids'],
        repertoryRubrics: ['RECTUM - CONSTIPATION - Urging; ineffectual', 'RECTUM - HEMORRHOIDS - Bleeding', 'RECTUM - FISSURE'],
        recommendedRemedies: ['Nux-v', 'Sulph', 'Aesculus', 'Collinsonia', 'Nit-ac', 'Ratanhia']
      },
      {
        id: 'liver_jaundice',
        nameBn: 'যকৃৎ বৃদ্ধি, ফ্যাটি লিভার ও জন্ডিস',
        nameEn: 'Fatty Liver, Hepatitis & Jaundice',
        description: 'ডান পাঁজরের নিচে ভারী ভাব/ব্যথা, চোখ ও প্রস্রাব হলুদ হওয়া, চর্বিযুক্ত খাবার সহ্য না হওয়া।',
        commonSymptoms: ['Pain in right hypochondrium', 'Yellowish discoloration of skin', 'Intolerance to fatty foods'],
        repertoryRubrics: ['LIVER - PAIN - Right hypochondrium', 'SKIN - DISCOLORATION - Yellow', 'STOMACH - AVERSION - Fat food'],
        recommendedRemedies: ['Chel', 'Lyc', 'Card-m', 'Phosphorus', 'Nat-s']
      }
    ]
  },
  {
    id: 'respiratory_system',
    nameBn: '৩. শ্বাসতন্ত্র (Respiratory System)',
    nameEn: 'Respiratory System & Lungs',
    icon: '🫁',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Nose, Larynx, Trachea, Lungs, Chest',
    description: 'নাক, শ্বাসনালী, হাঁপানি (Asthma), কাশি ও ফুসফুসের সংক্রমণ।',
    conditions: [
      {
        id: 'bronchial_asthma',
        nameBn: 'ব্রঙ্কিয়াল হাঁপানি ও শ্বাসকষ্ট',
        nameEn: 'Bronchial Asthma & Dyspnea',
        description: 'শ্বাসকষ্ট, বুকে সাঁই-সাঁই শব্দ, রাতে বা ঠান্ডা বাতাসে শ্বাস নিতে কষ্ট।',
        commonSymptoms: ['Dyspnea at night', 'Wheezing respiration', 'Suffocative cough', 'Must sit up to breathe'],
        repertoryRubrics: ['RESPIRATION - ASTHMATIC - Night', 'CHEST - OPPRESSION - Night', 'RESPIRATION - DIFFICULT - Lying down; agg.'],
        recommendedRemedies: ['Ars', 'Ipecac', 'Blatta-o', 'Nat-s', 'Ant-t', 'Medorrhinum']
      },
      {
        id: 'sinusitis_rhinitis',
        nameBn: 'সাইনুসাইটিস ও এলার্জিক রাইনাইটিস',
        nameEn: 'Sinusitis & Allergic Rhinitis',
        description: 'অনবরত হাঁচি, নাক বন্ধ থাকা, কপালে ও গালে ভারি ব্যথা, চোখ-নাক দিয়ে জল পড়া।',
        commonSymptoms: ['Profuse sneezing in morning', 'Nasal blockage', 'Frontal headache', 'Watery nasal discharge'],
        repertoryRubrics: ['NOSE - CORYZA - Discharge - Watery', 'NOSE - OBSTRUCTION', 'HEAD - PAIN - Forehead - Sinusitis'],
        recommendedRemedies: ['Allium-c', 'Ars', 'Kali-bi', 'Puls', 'Silicea', 'Sabadilla']
      },
      {
        id: 'bronchitis_cough',
        nameBn: 'ব্রঙ্কাইটিস ও দীর্ঘস্থায়ী কাশি',
        nameEn: 'Bronchitis & Chronic Cough',
        description: 'শুকনো বা কফযুক্ত কাশি, বুকে জমাট লাগা অনুভূতি, কথা বললে বা শুইলে কাশি বৃদ্ধি।',
        commonSymptoms: ['Dry hacking cough', 'Rattling of mucus in chest', 'Soreness in trachea'],
        repertoryRubrics: ['COUGH - DRY - Night', 'CHEST - RATTLING - Mucus', 'COUGH - PAROXYSMAL'],
        recommendedRemedies: ['Bry', 'Hep', 'Spongia', 'Drosera', 'Ant-t', 'Rumex']
      }
    ]
  },
  {
    id: 'cardiovascular',
    nameBn: '৪. সংবহনতন্ত্র (Circulatory System)',
    nameEn: 'Cardiovascular & Circulatory System',
    icon: '🫀',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Heart, Blood Vessels, Circulation, Veins',
    description: 'হৃদপিণ্ড, রক্তচাপ (High/Low BP), রক্ত সঞ্চালন, এনজাইনা ও শিরা স্ফীতি।',
    conditions: [
      {
        id: 'hypertension_palpitation',
        nameBn: 'উচ্চ রক্তচাপ ও বুকধড়ফড়',
        nameEn: 'Hypertension & Cardiac Palpitation',
        description: 'হঠাৎ বুকধড়ফড় করা, মাথায় রক্ত সঞ্চালন বৃদ্ধি পেয়ে ঝিমঝিম করা, উদ্বেগ ও প্রেসার বাড়া।',
        commonSymptoms: ['Violent palpitation with anxiety', 'Throbbing in carotid arteries', 'High blood pressure readings'],
        repertoryRubrics: ['HEART - PALPITATION - Anxiety, with', 'GENERALS - BLOOD PRESSURE - High', 'HEAD - PULSATING'],
        recommendedRemedies: ['Crataegus', 'Rauwolfia', 'Glon', 'Bell', 'Acon', 'Lachesis']
      },
      {
        id: 'varicose_veins',
        nameBn: 'ভেরিকোজ ভেইন (শিরা স্ফীতি)',
        nameEn: 'Varicose Veins & Venous Stasis',
        description: 'পায়ের নীল ও ফাপা বাঁকা শিরা, পায়ে ভারি ভাব ও হাঁটার পর নীলচে ফোলা।',
        commonSymptoms: ['Swollen purple veins in legs', 'Heavy aching feet', 'Soreness along vein path'],
        repertoryRubrics: ['EXTREMITIES - VARICOSE veins', 'GENERALS - VEINS - Swollen', 'EXTREMITIES - HEAVINESS - Legs'],
        recommendedRemedies: ['Hamamelis', 'Puls', 'Vipera', 'Fluoric-ac', 'Calc-f']
      },
      {
        id: 'angina_chest_pain',
        nameBn: 'এনজাইনা ও বুকে চাপধরা ব্যথা',
        nameEn: 'Angina Pectoris & Cardiac Anxiety',
        description: 'হৃদপিণ্ডের স্থানে চেপে ধরা ব্যথা, ব্যথা বাম হাত বা চোয়ালে ছড়িয়ে পড়া।',
        commonSymptoms: ['Squeezing chest pain', 'Pain radiating to left arm', 'Fear of death during pain'],
        repertoryRubrics: ['CHEST - PAIN - Heart - Radiating to arm', 'CHEST - CONSTRICTION - Heart'],
        recommendedRemedies: ['Cactus', 'Latrodectus', 'Acon', 'Digitalis', 'Spigelia']
      }
    ]
  },
  {
    id: 'musculoskeletal',
    nameBn: '৫. পেশী ও কঙ্কালতন্ত্র (Skeletal & Muscular System)',
    nameEn: 'Musculoskeletal System',
    icon: '🦴',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Bones, Joints, Spine, Muscles, Ligaments',
    description: 'হাড়, জয়েন্ট, মেরুদণ্ড, পেশি, বাত-ব্যথা, গেঁটেবাত ও অস্টিওআর্থ্রাইটিস।',
    conditions: [
      {
        id: 'rheumatoid_arthritis',
        nameBn: 'রিউম্যাটয়েড আর্থ্রাইটিস ও গিরা বাত',
        nameEn: 'Rheumatoid Arthritis & Osteoarthritis',
        description: 'জোড়ায় জোড়ায় ব্যথা ও ফোলা, নড়াচড়া করলে বাড়ে/কমে, সকালে শক্ত হয়ে থাকা।',
        commonSymptoms: ['Joint pain worse initial motion', 'Swollen hot joints', 'Morning stiffness'],
        repertoryRubrics: ['EXTREMITIES - PAIN - Joints - Rheumatic', 'EXTREMITIES - STIFFNESS - Joints - Morning'],
        recommendedRemedies: ['Rhus-t', 'Bryonia', 'Colchicum', 'Ledum', 'Ruta', 'Actaea-r']
      },
      {
        id: 'spondylitis_sciatica',
        nameBn: 'স্পন্ডিলাইটিস ও কোমর ব্যথা',
        nameEn: 'Cervical & Lumbar Spondylitis',
        description: 'ঘাড় বা কোমরের স্পাইনাল কশেরুকায় ব্যথা, ঘাড় ঘোরাতে কষ্ট, হাত বা পায়ে ঝিঁঝিঁ।',
        commonSymptoms: ['Stiffness in cervical spine', 'Lower backache radiating to thighs', 'Numbness in fingers/toes'],
        repertoryRubrics: ['BACK - PAIN - Lumbar region', 'BACK - STIFFNESS - Cervical region'],
        recommendedRemedies: ['Ruta', 'Rhus-t', 'Calc-f', 'Aesculus', 'Hyper', 'Kalmia']
      },
      {
        id: 'gout_uric_acid',
        nameBn: 'গাউট বা ইউরিক এসিডের ব্যথা',
        nameEn: 'Gout & Uric Acid Diathesis',
        description: 'পায়ের বৃদ্ধাঙ্গুলে হঠাৎ তীব্র ফোলা ও লালচে ব্যথা, রাতে ছোঁয়া সয় না।',
        commonSymptoms: ['Sudden severe joint pain in big toe', 'Inflammatory redness', 'Cannot bear touch or motion'],
        repertoryRubrics: ['EXTREMITIES - PAIN - Foot - Toes - Big toe', 'GENERALS - URIC ACID'],
        recommendedRemedies: ['Colchicum', 'Urtica-u', 'Benzoic-ac', 'Ledum', 'Lithium-c']
      }
    ]
  },
  {
    id: 'urinary_system',
    nameBn: '৬. রেচন ও মূত্রতন্ত্র (Urinary System)',
    nameEn: 'Urinary & Renal System',
    icon: '🩺',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Kidneys, Ureters, Bladder, Urethra',
    description: 'কিডনি, মূত্রথলি, কিডনির পাথর, ক্রনিক কিডনি রোগ ও মূত্রনালীর ইনফেকশন।',
    conditions: [
      {
        id: 'renal_calculi',
        nameBn: 'কিডনিতে পাথর ও রেনাল কোলিক',
        nameEn: 'Renal Calculi / Kidney Stones',
        description: 'পিঠের পিছনের কোমর থেকে কুঁচকিতে নেমে আসা তীব্র ধারালো ব্যথা, প্রস্রাবে রক্ত বা বমি।',
        commonSymptoms: ['Severe sharp renal pain', 'Hematuria (blood in urine)', 'Pain radiating down to thigh/groin'],
        repertoryRubrics: ['KIDNEYS - PAIN - Calculi, from', 'URINE - SEDIMENT - Sand / Gravel', 'URINE - BLOOD in'],
        recommendedRemedies: ['Berberis-v', 'Cantharis', 'Sarsaparilla', 'Lyc', 'Pareira']
      },
      {
        id: 'uti_cystitis',
        nameBn: 'মূত্রনালীর ইনফেকশন (UTI) ও জ্বালাপোড়া',
        nameEn: 'Urinary Tract Infection & Cystitis',
        description: 'ঘন ঘন প্রস্রাবের বেগ, প্রস্রাব করার সময় বা পরে কাঁটার মতো তীব্র জ্বালাপোড়া ও এক ফোঁটা ফোঁটা হওয়া।',
        commonSymptoms: ['Burning scalding urination', 'Frequent urge to urinate', 'Incomplete bladder emptying feeling'],
        repertoryRubrics: ['URINARY ORGANS - URINATING - Burning', 'BLADDER - URGING - Frequent'],
        recommendedRemedies: ['Cantharis', 'Apis', 'Staphysagria', 'Equisetum', 'Petroselinum']
      }
    ]
  },
  {
    id: 'reproductive_system',
    nameBn: '৭. প্রজননতন্ত্র (Reproductive System)',
    nameEn: 'Male & Female Reproductive System',
    icon: '🧬',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Pelvis, Uterus, Ovaries, Prostate, Testes',
    description: 'পুরুষ ও স্ত্রী প্রজনন অঙ্গ, জরায়ু, ওভারিয়ান সিস্ট, প্রোস্টেট ও প্রজনন সমস্যা।',
    conditions: [
      {
        id: 'menstrual_pcos',
        nameBn: 'অনিয়মিত ঋতুস্রাব ও ওভারিয়ান সিস্ট (PCOS)',
        nameEn: 'Dysmenorrhea, Amenorrhea & PCOS',
        description: 'ঋতুস্রাবের সময় তলপেটে তীব্র খিলধরা ব্যথা, মাসিক বন্ধ বা অনিয়মিত হওয়া এবং সিস্ট।',
        commonSymptoms: ['Painful pelvic cramps during menses', 'Delayed or irregular periods', 'Hormonal imbalance symptoms'],
        repertoryRubrics: ['FEMALE - MENSES - Painful', 'FEMALE - MENSES - Delayed', 'FEMALE - TUMORS - Ovaries - Cysts'],
        recommendedRemedies: ['Puls', 'Sepia', 'Sabina', 'Bell', 'Cimicifuga', 'Lachesis', 'Thuja']
      },
      {
        id: 'prostate_enlargement',
        nameBn: 'প্রোস্টেট বৃদ্ধি (BPH) ও প্রস্রাবে বাধা',
        nameEn: 'Benign Prostatic Hyperplasia (BPH)',
        description: 'বয়স্ক পুরুষদের প্রস্রাবের ধার কমে যাওয়া, প্রস্রাব শুরু করতে দেরি হওয়া ও রাতে বারবার যাওয়া।',
        commonSymptoms: ['Weak urinary stream', 'Dribbling urination', 'Frequent nocturnal urination'],
        repertoryRubrics: ['PROSTATE GLAND - ENLARGEMENT', 'URINARY ORGANS - URINATING - Dribbling'],
        recommendedRemedies: ['Sabal-serr', 'Conium', 'Baryta-c', 'Thuja', 'Puls']
      }
    ]
  },
  {
    id: 'endocrine_system',
    nameBn: '৮. এন্ডোক্রাইন/হরমোন গ্রন্থিতন্ত্র (Endocrine System)',
    nameEn: 'Endocrine Glandular System',
    icon: '⚖️',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Thyroid, Pancreas, Adrenal, Pituitary Glands',
    description: 'থাইরয়েড (হাইপো/হাইপার), ডায়াবেটিস, অগ্ন্যাশয় ও হরমোন নিয়ন্ত্রণ।',
    conditions: [
      {
        id: 'thyroid_disorders',
        nameBn: 'থাইরয়েড সমস্যা (হাইপো ও হাইপার থাইরয়েডিজম)',
        nameEn: 'Hypothyroidism & Hyperthyroidism',
        description: 'হঠাৎ ওজন অতিরিক্ত বেড়ে যাওয়া বা কমে যাওয়া, গলগণ্ড, শীত বা গরম সহ্য না হওয়া, অবশ লাগা।',
        commonSymptoms: ['Unexplained weight gain/loss', 'Intolerance to cold or heat', 'Lethargy & fatigue'],
        repertoryRubrics: ['GENERALS - THYROID gland - Affections', 'GENERALS - OBESITY', 'MIND - LETHARGY'],
        recommendedRemedies: ['Thyroidinum', 'Calc-c', 'Iodum', 'Nat-m', 'Spongia', 'Lycopus']
      },
      {
        id: 'diabetes_mellitus',
        nameBn: 'ডায়াবেটিস ও মেটাবলিক সমস্যা',
        nameEn: 'Diabetes Mellitus & Neuropathy',
        description: 'অতিরিক্ত তৃষ্ণা ও ক্ষুধা, ঘন ঘন প্রস্রাব, শরীর শুকিয়ে যাওয়া এবং ঘা না শুকাতে চাওয়া।',
        commonSymptoms: ['Excessive unquenchable thirst', 'Frequent urination (polyuria)', 'Profound weakness & emaciation'],
        repertoryRubrics: ['URINE - SUGAR in', 'GENERALS - WEAKNESS - Diabetes, in', 'STOMACH - THIRST - Extreme'],
        recommendedRemedies: ['Syzygium', 'Gymnema', 'Phosphoric-ac', 'Uranium-n', 'Cephalandra']
      }
    ]
  },
  {
    id: 'integumentary_system',
    nameBn: '৯. চর্ম ও বহিরাবরণ বহিতন্ত্র (Integumentary System)',
    nameEn: 'Skin, Hair & Nails System',
    icon: '🧴',
    imageUrl: 'https://images.unsplash.com/photo-1512290900676-26c2bfb922d2?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Skin, Hair, Scalp, Nails, Epidermis',
    description: 'ত্বক, চুল, নখ, একজিমা, সোরিয়াসিস, চুলকানি, ফুসকুড়ি ও এলার্জি। (ইমেজ ডায়াগনোসিসের জন্য প্রধানতম)',
    conditions: [
      {
        id: 'eczema_dermatitis',
        nameBn: 'একজিমা ও একিউট চর্মরোগ',
        nameEn: 'Eczema & Atopic Dermatitis',
        description: 'ত্বকে তীব্র চুলকানি, লাল লাল ছোট র্যাশ, রস ঝরা বা শুকিয়ে ছাল ওঠা। (ছবিতে সহজে শনাক্তযোগ্য)',
        commonSymptoms: ['Intense itching worse night or warmth', 'Eruptions with fluid or crusts', 'Dry cracked scaly skin'],
        repertoryRubrics: ['SKIN - ERUPTIONS - Eczema', 'SKIN - ITCHING - Warmth of bed; agg.', 'SKIN - CRACKS'],
        recommendedRemedies: ['Sulph', 'Graph', 'Petroleum', 'Ars', 'Rhus-t', 'Mezereum']
      },
      {
        id: 'psoriasis_scale',
        nameBn: 'সোরিয়াসিস (Psoriasis)',
        nameEn: 'Psoriasis Vulgaris',
        description: 'ত্বকের ওপর পুরু রূপালী আঁশের মতো আস্তরণ তৈরি হওয়া, কনুই বা হাঁটুতে বেশি দেখা যাওয়া।',
        commonSymptoms: ['Silvery scaly patches on skin', 'Dry red lesions', 'Itching with bleeding when scratched'],
        repertoryRubrics: ['SKIN - ERUPTIONS - Psoriasis', 'SKIN - ERUPTIONS - Scaly - Silvery scales'],
        recommendedRemedies: ['Ars-i', 'Graph', 'Sulph', 'Petroleum', 'Hydrocotyle']
      },
      {
        id: 'urticaria_allergy',
        nameBn: 'অ্যালার্জি ও চাকড়া (Urticaria/Hives)',
        nameEn: 'Urticaria & Allergic Rash',
        description: 'ত্বকে হঠাৎ লাল লাল চাকড়া বা চাকা উঠে তীব্র জ্বালা ও চুলকানি হওয়া।',
        commonSymptoms: ['Raised red itchy wheals', 'Burning sensation on skin', 'Aggravated by scratch or cold/heat'],
        repertoryRubrics: ['SKIN - ERUPTIONS - Urticaria', 'SKIN - BURNING - Itching, after'],
        recommendedRemedies: ['Apis', 'Urtica-u', 'Ars', 'Astacus', 'Nat-m']
      },
      {
        id: 'ringworm_tinea',
        nameBn: 'দাউদ বা ফাঙ্গাল ইনফেকশন (Ringworm)',
        nameEn: 'Tinea Corporis / Ringworm',
        description: 'ত্বকে গোল চাকার মতো লাল দাগ যার কিনারা উঁচু ও মধ্যে চুলকানি থাকে।',
        commonSymptoms: ['Circular ring-like eruptions', 'Clear center with active itchy border'],
        repertoryRubrics: ['SKIN - ERUPTIONS - Ringworm', 'SKIN - ITCHING - Scratching agg.'],
        recommendedRemedies: ['Bacillinum', 'Tellurium', 'Sepia', 'Thuja', 'Chrysarobinum']
      }
    ]
  },
  {
    id: 'lymphatic_immune',
    nameBn: '১০. লসিকাতন্ত্র ও প্রতিরোধ ব্যবস্থা (Lymphatic/Immune System)',
    nameEn: 'Lymphatic & Immune System',
    icon: '🛡️',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Lymph Nodes, Tonsils, Spleen, Thymus, Immunity',
    description: 'লিম্ফ নোড বা গ্ল্যান্ড ফোলা, ইমিউনিটি, টনসিলাইটিস ও প্লীহা বৃদ্ধি।',
    conditions: [
      {
        id: 'tonsillitis_adenoids',
        nameBn: 'টনসিলাইটিস ও গলা ব্যথা',
        nameEn: 'Acute & Chronic Tonsillitis',
        description: 'গলার ভেতর টনসিল ফুলে লাল হয়ে যাওয়া, ঢোক গিলতে ব্যথা, জ্বর।',
        commonSymptoms: ['Painful swallowing radiating to ear', 'Swollen red tonsils with white spots', 'High fever with chills'],
        repertoryRubrics: ['THROAT - TONSILLS - Inflammation', 'THROAT - SWALLOWING - Painful'],
        recommendedRemedies: ['Baryta-c', 'Bell', 'Merc-sol', 'Phytolacca', 'Hep', 'Silicea']
      },
      {
        id: 'lymphadenopathy',
        nameBn: 'গ্ল্যান্ড ফোলা ও লিম্ফ নোড বৃদ্ধি',
        nameEn: 'Lymphadenopathy & Swollen Glands',
        description: 'গলা, বগল বা কুঁচকির লিম্ফ গ্ল্যান্ড শক্ত হয়ে ফুলে যাওয়া বা ব্যথা হওয়া।',
        commonSymptoms: ['Enlarged hard cervical or inguinal glands', 'Tenderness on touch'],
        repertoryRubrics: ['GENERALS - GLANDS - Swollen - Cervical', 'GENERALS - GLANDS - Indurated'],
        recommendedRemedies: ['Calc-c', 'Calc-f', 'Merc-i-r', 'Scrophularia', 'Conium']
      }
    ]
  },
  {
    id: 'sensory_system',
    nameBn: '১১. অনুভূতি ও জ্ঞানেন্দ্রিয় (Sensory Organ System)',
    nameEn: 'Sensory System (Eyes, Ears, Nose)',
    icon: '👁️',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60',
    bodyRegion: 'Eyes, Ears, Nose, Tongue, Sensory Organs',
    description: 'চোখ, কান, নাক, দৃষ্টিশক্তি, কানের ব্যথা বা টিনিটাস (শব্দ হওয়া)।',
    conditions: [
      {
        id: 'conjunctivitis_eye',
        nameBn: 'চোখ ওঠা (Conjunctivitis) ও চোখের প্রদাহ',
        nameEn: 'Conjunctivitis & Ophthalmia',
        description: 'চোখ লাল হওয়া, কিচকিচ করা, পানি ও পিঁচুটি পড়া, আলোতে তাকাতে না পারা। (ছবিতে ধরা পড়ে)',
        commonSymptoms: ['Redness of sclera/conjunctiva', 'Acrid discharge from eyes', 'Photophobia (light sensitivity)'],
        repertoryRubrics: ['EYE - INFLAMMATION', 'EYE - DISCHARGE - Purulent', 'EYE - PHOTOPHOBIA'],
        recommendedRemedies: ['Euphrasia', 'Puls', 'Bell', 'Merc-sol', 'Argentum-n']
      },
      {
        id: 'otitis_tinnitus',
        nameBn: 'কানে ব্যথা, পুঁজ ও টিনিটাস (শব্দ হওয়া)',
        nameEn: 'Otitis Media & Tinnitus',
        description: 'কানের ভেতরে তীব্র ব্যথা, কান পেকে পুঁজ পড়া অথবা কানে সাঁই-সাঁই বাঁশির মতো শব্দ হওয়া।',
        commonSymptoms: ['Sharp earache worse night', 'Offensive discharge from ear', 'Ringing or buzzing noises in ear'],
        repertoryRubrics: ['EAR - PAIN - Internal', 'EAR - DISCHARGE', 'EAR - NOISES in ear - Ringing'],
        recommendedRemedies: ['Puls', 'Chinin-s', 'Hep', 'Tellurium', 'Bell', 'Mullien-oil']
      }
    ]
  }
];