export interface RemedyInfo {
  id: string;
  name: string;
  latinName: string;
  commonName: string;
  keynotes: string[];
  organAffinities: string[];
  mindSymptoms: string[];
  headAndNeck: string[];
  stomachAndAbdomen: string[];
  respiratory: string[];
  extremitiesAndSkin: string[];
  aggravation: string[];
  amelioration: string[];
  relationships: {
    complementary?: string[];
    antidotes?: string[];
    followsWell?: string[];
  };
  summary: string;
}

export const MATERIA_MEDICA_DATABASE: Record<string, RemedyInfo> = {
  'Acon': {
    id: 'Acon',
    name: 'Aconitum Napellus',
    latinName: 'Aconitum Napellus',
    commonName: 'Monkshood',
    keynotes: [
      'হঠাৎ তীব্র আক্রমণ ও প্রচণ্ড মৃত্যুভয় (Sudden onset & intense fear of death)',
      'শুষ্ক, শীতল উত্তর বাতাসে রোগের সূত্রপাত',
      'প্রচণ্ড অস্থিরতা ও প্রচুর ঠান্ডা পানি পানের তীব্র পিপাসা'
    ],
    organAffinities: ['Mind', 'Circulatory System', 'Nervous System', 'Respiratory System'],
    mindSymptoms: [
      'মৃত্যুর তীব্র ভয়, এমনকি মৃত্যুর সময় বা দিন পর্যন্ত অনুমান করে বলে',
      'প্রচণ্ড অস্থিরতা, একা থাকতে ভয় পায়'
    ],
    headAndNeck: [
      'মাথায় রক্তাধিক্য ও দপদপে যন্ত্রণা',
      'চোখ লাল, গরম ও শুষ্ক অনুভব'
    ],
    stomachAndAbdomen: [
      'সবকিছু তিতা লাগে (পানি ছাড়া)',
      'পাকস্থলীতে তীব্র জ্বালা ও ঠান্ডা পানির অপরিসীম পিপাসা'
    ],
    respiratory: [
      'হঠাৎ শুষ্ক, খসখসে কাশি ও শ্বাসকষ্ট (Croup)',
      'বুকে চাপ অনুভব'
    ],
    extremitiesAndSkin: [
      'চামড়া গরম ও শুষ্ক, ঘাম হয় না',
      'অঙ্গপ্রত্যঙ্গে অবশ ভাব ও ঝিনঝিন করা'
    ],
    aggravation: ['শীতল বাতাস', 'সন্ধ্যা ও মধ্যরাতে', 'আক্রান্ত পাশে শুলে'],
    amelioration: ['খোলা বাতাসে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Coffea', 'Sulphur'],
      antidotes: ['Acet-ac', 'Paris'],
      followsWell: ['Ars', 'Bell', 'Bry', 'Spong']
    },
    summary: 'যেকোনো রোগের প্রাথমিক পর্যায়ে হঠাৎ ও তীব্র আক্রমণে একোনাইট প্রথম পছন্দের ওষুধ।'
  },
  'Ars': {
    id: 'Ars',
    name: 'Arsenicum Album',
    latinName: 'Arsenicum Album',
    commonName: 'White Oxide of Arsenic',
    keynotes: [
      'প্রচণ্ড অস্থিরতা ও মৃত্যুভয় (Restlessness & Fear of Death)',
      'জ্বালাকর যন্ত্রণা যা উত্তাপে কমে (Burning pains relieved by heat)',
      'একবারে অল্প অল্প পানি বারবার পান করা'
    ],
    organAffinities: ['Gastrointestinal Tract', 'Respiratory System', 'Mind', 'Skin', 'Heart'],
    mindSymptoms: [
      'মৃত্যুর তীব্র ভয়, মনে করে ওষুধ খেয়ে কোনো লাভ নেই',
      'অত্যন্ত খিটখিটে ও পরিচ্ছন্নতাবাদী (Fastidious)',
      'এক জায়গায় স্থির থাকতে পারে না, শয্যা পরিবর্তন করে'
    ],
    headAndNeck: [
      'মাথাব্যথা গরম ছেকে কমে',
      'চোখ থেকে গরম জল পড়ে ও জ্বালাপোড়া করে'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে তীব্র জ্বালা ও ক্ষতের অনুভূতি',
      'পচা খাবার, ঠান্ডা ফল বা পানীয় খাওয়ার পর বমি ও পাতলা পায়খানা'
    ],
    respiratory: [
      'হাঁপানি বা শ্বাসকষ্ট, মধ্যরাতে (রাত ১টা থেকে ২টা) বৃদ্ধি পায়',
      'শুয়ে থাকতে পারে না, সোজা হয়ে বসে থাকতে হয়'
    ],
    extremitiesAndSkin: [
      'চামড়া শুষ্ক, খসখসে ও শুষ্ক চুলকানি',
      'হাত-পা ঠান্ডা কিন্তু ভেতরের অংশ জ্বালা করে'
    ],
    aggravation: ['রাত ১২টা থেকে ২টা', 'ঠান্ডা খাবার ও পানীয়'],
    amelioration: ['উত্তাপ বা গরম ছেক', 'গরম পানীয়'],
    relationships: {
      complementary: ['Thuja', 'Phosphorus', 'Nux-v'],
      antidotes: ['Camphora', 'Ipecac'],
      followsWell: ['Acon', 'Bell', 'Bry', 'Puls']
    },
    summary: 'প্রচণ্ড অস্থিরতা, দুর্বলতা, ক্ষয় ও জ্বালাপোড়ার লক্ষণে আর্সেনিক একটি মহৌষধ।'
  },
  'Arn': {
    id: 'Arn',
    name: 'Arnica Montana',
    latinName: 'Arnica Montana',
    commonName: 'Leopard\'s Bane',
    keynotes: [
      'আঘাতজনিত থেঁতলানো ব্যথা (Sore, bruised feeling from trauma)',
      'রোগী বলে সে সম্পূর্ণ সুস্থ আছে, ছোঁয়া সহ্য করতে পারে না',
      'মাথা গরম কিন্তু শরীর ঠান্ডা'
    ],
    organAffinities: ['Muscles', 'Blood Vessels', 'Nervous System'],
    mindSymptoms: [
      'কেউ কাছে আসলে বা স্পর্শ করতে চাইলে ভয় পায়',
      'অসুস্থ হলেও বলে "আমার কোনো কষ্ট নেই, আমি ভালো আছি"'
    ],
    headAndNeck: ['মাথায় প্রচণ্ড রক্তাধিক্য ও উত্তাপ', 'মুখমণ্ডল লাল ও ফোলা'],
    stomachAndAbdomen: ['পচা ডিমের মতো দুর্গন্ধযুক্ত ঢেকুর', 'পেটে থেঁতলানো ব্যথা'],
    respiratory: ['কাশি দেওয়ার সময় বুকে থেঁতলানোর মতো ব্যথা'],
    extremitiesAndSkin: ['বিছানা অত্যন্ত শক্ত মনে হয়', 'চামড়ায় কালশিটে পড়া (Ecchymosis)'],
    aggravation: ['সামান্য স্পর্শে', 'আঘাত বা পরিশ্রমে', 'নড়াচড়ায়'],
    amelioration: ['মাথা নিচু করে শুয়ে থাকলে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Sul-ac'],
      antidotes: ['Camphora'],
      followsWell: ['Acon', 'Ipecac', 'Rhus-t']
    },
    summary: 'যেকোনো ধরনের শারীরিক আঘাত, পতন বা থেঁতলে যাওয়ার ব্যথায় প্রথম ও প্রধান ওষুধ।'
  },
  'Bell': {
    id: 'Bell',
    name: 'Belladonna',
    latinName: 'Atropa Belladonna',
    commonName: 'Deadly Nightshade',
    keynotes: [
      'হঠাৎ রোগের আক্রমণ ও তীব্রতা',
      'আক্রান্ত স্থান লাল, গরম ও দপদপ করা',
      'আলো, শব্দ ও ঝাঁকুনিতে কষ্ট বৃদ্ধি'
    ],
    organAffinities: ['Central Nervous System', 'Vascular System', 'Throat', 'Skin'],
    mindSymptoms: ['উত্তেজিত অবস্থা, কামড়াতে বা মারতে চায়', 'কাল্পনিক দৃশ্য দেখা'],
    headAndNeck: ['দপদপে তীব্র মাথাব্যথা', 'গলা অত্যন্ত লাল, শুকনো ও গিলতে কষ্ট'],
    stomachAndAbdomen: ['পেটে কামড়ানো ব্যথা যা স্পর্শ সহ্য করতে পারে না'],
    respiratory: ['শুষ্ক, খসখসে কাশি যা রাতে বাড়ে'],
    extremitiesAndSkin: ['চামড়া তপ্ত গরম ও লালচে'],
    aggravation: ['আলো, শব্দ ও স্পর্শে', 'ঝাঁকুনিতে', 'দুপুর ৩টায়'],
    amelioration: ['আধা-বসা অবস্থায়', 'উষ্ণ ঘরে থাকা'],
    relationships: {
      complementary: ['Calc-c'],
      antidotes: ['Camphora', 'Hepar'],
      followsWell: ['Merc', 'Puls', 'Rhus-t']
    },
    summary: 'হঠাৎ প্রদাহ, রক্তাধিক্য, উত্তাপ ও দপদপানি যন্ত্রণায় বেলোডোনা প্রধান ওষুধ।'
  },
  'Bry': {
    id: 'Bry',
    name: 'Bryonia Alba',
    latinName: 'Bryonia Alba',
    commonName: 'White Bryony',
    keynotes: [
      'সামান্য নড়াচড়াতে তীব্র কষ্ট বাড়ে',
      'শ্লেষ্মাঝিল্লির চরম শুষ্কতা',
      'দীর্ঘ বিরতিতে প্রচুর পরিমাণ ঠান্ডা পানি পানের ইচ্ছা'
    ],
    organAffinities: ['Serous Membranes', 'Joints', 'Respiratory System'],
    mindSymptoms: ['সর্বদা কাজ ও ব্যবসা নিয়ে কথা বলে', 'খিটখিটে মেজাজ'],
    headAndNeck: ['প্রচণ্ড মাথাব্যথা, চোখ নাড়ালে মনে হয় মাথা ফেটে যাবে', 'ঠোঁট অত্যন্ত শুকনো'],
    stomachAndAbdomen: ['পাকস্থলীতে পাথরের মতো ভারি অনুভব', 'শক্ত পোড়া পায়খানা'],
    respiratory: ['শুষ্ক কাশি, কাশি দেওয়ার সময় বুকে হাত চেপে ধরে'],
    extremitiesAndSkin: ['বাত-ব্যথা, আক্রান্ত পাশে চেপে শুলে কমে'],
    aggravation: ['সামান্যতম নড়াচড়ায়', 'উষ্ণতায়'],
    amelioration: ['একদম স্থির বিশ্রামে', 'ব্যথার জায়গায় চেপে শুলে'],
    relationships: {
      complementary: ['Alumina', 'Rhus-t'],
      antidotes: ['Acon', 'Nux-v'],
      followsWell: ['Abrot', 'Nux-v']
    },
    summary: 'নড়াচড়ায় রোগ বৃদ্ধি ও সম্পূর্ণ বিশ্রামে উপশম ব্রায়োনিয়ার প্রধান চাবিকাঠি।'
  },
  'Calc-c': {
    id: 'Calc-c',
    name: 'Calcarea Carbonica',
    latinName: 'Calcarea Carbonica',
    commonName: 'Carbonate of Lime',
    keynotes: [
      'মোটা, ফর্সা, থলথলে গড়ন ও সহজে ঠাণ্ডা লাগার প্রবণতা',
      'মাথায় প্রচুর ঘাম (বিশেষ করে ঘুমানোর সময় বালিশ ভিজে যায়)',
      'ডিম খাওয়ার প্রবল ইচ্ছা এবং ডিম-মিষ্টি পছন্দ'
    ],
    organAffinities: ['Glands', 'Bones', 'Skin', 'Nutrition'],
    mindSymptoms: ['পাগল হয়ে যাওয়ার বা লোকজনের কাছে নিজের দুর্বলতা প্রকাশের ভয়', 'ধীরগতির চিন্তাভাবনা'],
    headAndNeck: ['মাথার পেছনের অংশে ও কপালে শীতল ঘাম', 'দাঁত উঠতে দেরি হওয়া'],
    stomachAndAbdomen: ['পেট বড় ও ঢোলের মতো ফোলা', 'টক ঢেকুর ও টক বমি'],
    respiratory: ['সিঁড়ি দিয়ে ওপরে উঠলে হাঁপিয়ে যাওয়া ও শ্বাসকষ্ট'],
    extremitiesAndSkin: ['পায়ের তলা ও হাত হাত-পা সবসময় ঠাণ্ডা ও ভেজা থাকা'],
    aggravation: ['ঠাণ্ডা পানি ও বাতাসে', 'শারীরিক শ্রমে', 'পূর্ণিমায়'],
    amelioration: ['শুষ্ক ও উষ্ণ আবহাওয়ায়'],
    relationships: {
      complementary: ['Bell', 'Rhus-t'],
      antidotes: ['Camphora'],
      followsWell: ['Lyc', 'Nux-v', 'Sil']
    },
    summary: 'শারীরিক বৃদ্ধিতে সমস্যা, স্থূলতা এবং অতিরিক্ত ঘামের ধাতুর রোগীদের মহাঔষধ।'
  },
  'Carb-v': {
    id: 'Carb-v',
    name: 'Carbo Vegetabilis',
    latinName: 'Carbo Vegetabilis',
    commonName: 'Vegetable Charcoal',
    keynotes: [
      'জীবনীশক্তির চরম ক্ষয় বা প্রায় মৃতপ্রায় অবস্থা (Reviver of life)',
      'পেটে প্রচুর গ্যাস ও বাতাস জোগানের তীব্র ব্যাকুলতা (রোগী গায়ে জোর বাতাস চায়)',
      'হাত-পা ও নিঃশ্বাস বরফের মতো ঠান্ডা'
    ],
    organAffinities: ['Digestive System', 'Vascular System', 'Lungs'],
    mindSymptoms: ['স্মৃতিশক্তি দুর্বল, চিন্তাভাবনা ধীরগতি সম্পন্ন'],
    headAndNeck: ['মাথার পেছনের অংশে ভারি মাথাব্যথা'],
    stomachAndAbdomen: ['পেটের ওপরের অংশ বায়ুতে ফুলে থাকে, ঢেকুর তুললে সাময়িক আরাম'],
    respiratory: ['কাশি ও মারাত্মক শ্বাসকষ্ট, রোগী জোরে বাতাস পাখা করতে বলে'],
    extremitiesAndSkin: ['চামড়া নীলচে (Cyanosis), ঠান্ডা ও ঘামে ভেজা'],
    aggravation: ['চর্বিযুক্ত খাবার খেলে', 'গরম ও আর্দ্র আবহাওয়ায়'],
    amelioration: ['জোরে বাতাস করলে', 'ঢেকুর উঠলে'],
    relationships: {
      complementary: ['Kali-c'],
      antidotes: ['Ars', 'Camphora'],
      followsWell: ['Ars', 'China', 'Dros']
    },
    summary: 'অত্যন্ত জীর্ণ, জরাগ্রস্ত ও গ্যাসে আক্রান্ত মুমূর্ষু রোগীর প্রাণরক্ষাকারী ওষুধ।'
  },
  'Caust': {
    id: 'Caust',
    name: 'Causticum',
    latinName: 'Causticum',
    commonName: 'Hahnemann\'s Tinctura Acris Sine Kali',
    keynotes: [
      'পক্ষাঘাতগ্রস্ত দুর্বলতা (Paralytic weakness)',
      'কাশি দেওয়ার সময় স্বতঃস্ফূর্ত প্রস্রাব বের হয়ে যাওয়া',
      'অন্যায় ও অবিচারের প্রতি তীব্র সংবেদনশীলতা'
    ],
    organAffinities: ['Nerves', 'Muscles', 'Urinary Organs', 'Larynx'],
    mindSymptoms: ['অন্যের কষ্টে অত্যন্ত সমবেদনা ও সহানুভূতি প্রকাশ করে'],
    headAndNeck: ['স্বরভঙ্গ বা গলা বসে যাওয়া (বিশেষ করে সকালে)'],
    stomachAndAbdomen: ['পাকস্থলীতে জ্বালাপোড়া, ঠান্ডা পানি পানে কমে'],
    respiratory: ['গভীর কাশি, কিন্তু কফ তুলতে পারে না, গিলে ফেলতে হয়'],
    extremitiesAndSkin: ['আঁচিল (Warts) বিশেষ করে মুখমণ্ডলে ও আঙুলে'],
    aggravation: ['শুষ্ক ও ঠান্ডা বাতাস বা আবহাওয়ায়'],
    amelioration: ['আর্দ্র ও গরম আবহাওয়ায়', 'ঠান্ডা পানি পানে'],
    relationships: {
      complementary: ['Carb-v'],
      antidotes: ['Asaf'],
      followsWell: ['Colch', 'Lyc', 'Rhus-t']
    },
    summary: 'পক্ষাঘাত, স্বরভঙ্গ এবং কাশির সময় প্রস্রাব ঝরে পড়ার ক্ষেত্রে প্রধান ওষুধ।'
  },
  'Chin': {
    id: 'Chin',
    name: 'Cinchona Officinalis (China)',
    latinName: 'Cinchona Officinalis',
    commonName: 'Peruvian Bark',
    keynotes: [
      'শরীরের তরল পদার্থ ক্ষয়জনিত চরম দুর্বলতা (Loss of vital fluids)',
      'এক দিন পর পর নির্দিষ্ট সময়ে পর্যায়বৃত্ত জ্বর (Intermittent fever)',
      'পেট গ্যাসে পরিপূর্ণ কিন্তু ঢেকুর তুললে কোনো উপশম হয় না'
    ],
    organAffinities: ['Spleen', 'Liver', 'Blood', 'Digestive Tract'],
    mindSymptoms: ['মনোযোগ দিতে পারে না, মনে হয় সবাই তার ক্ষতি করছে'],
    headAndNeck: ['মাথায় দপদপে অনুভূতি, হালকা স্পর্শে বাড়ে কিন্তু জোরে চাপলে কমে'],
    stomachAndAbdomen: ['সমস্ত পেট ফাঁপা, খাবার হজম হয় না'],
    respiratory: ['ঘন ঘন হাঁচি ও রাতে শ্বাসকষ্ট'],
    extremitiesAndSkin: ['চামড়া অতিরিক্ত সংবেদনশীল, হালকা স্পর্শে অত্যন্ত ব্যথা'],
    aggravation: ['হালকা স্পর্শে', 'শারীরিক রস ক্ষয়ে', 'এক দিন পর পর'],
    amelioration: ['জোরে চাপ দিলে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Ferrum'],
      antidotes: ['Ars', 'Nux-v'],
      followsWell: ['Ars', 'Carb-v', 'Lyc']
    },
    summary: 'রক্তস্রাব, পাতলা পায়খানা বা রস ক্ষয়ের কারণে উদ্ভূত মারাত্মক দুর্বলতায় মহৌষধ।'
  },
  'Hep': {
    id: 'Hep',
    name: 'Hepar Sulphuris Calcareum',
    latinName: 'Hepar Sulph',
    commonName: 'Hahnemann\'s Sulphuret of Lime',
    keynotes: [
      'প্রচণ্ড ঠান্ডা কাতরতা ও গায়ে সামান্য বাতাস লাগা সহ্য করতে পারে না',
      'আক্রান্ত স্থানে কাঁটা ফোটার মতো তীব্র যন্ত্রণা (Splinter-like pain)',
      'ক্ষত থেকে পুঁজ হওয়ার এবং পচা পনিরের মতো গন্ধের প্রবণতা'
    ],
    organAffinities: ['Glands', 'Skin', 'Respiratory Mucous Membranes'],
    mindSymptoms: ['মারাত্মক খিটখিটে ও হিংস্র মেজাজ, সামান্যতম অসন্তোষে রেগে যায়'],
    headAndNeck: ['কান ও গলা ব্যথায় গলায় কাঁটা ফোটার অনুভূতি'],
    stomachAndAbdomen: ['টক ও মশলাযুক্ত খাবার পছন্দ'],
    respiratory: ['শুষ্ক, খসখসে কাশি যা ঠান্ডা বাতাস লাগলেই বাড়ে'],
    extremitiesAndSkin: ['সামান্য আঁচড় লাগলেই পুঁজ হয়, ক্ষত অত্যন্ত স্পর্শকাতর'],
    aggravation: ['ঠান্ডা বাতাসে', 'আক্রান্ত স্থান স্পর্শ করলে'],
    amelioration: ['উষ্ণ কাপড়ে মাথা ও শরীর মুড়িয়ে রাখলে'],
    relationships: {
      complementary: ['Calendula'],
      antidotes: ['Bell', 'Chamomilla'],
      followsWell: ['Bell', 'Lyc', 'Sil']
    },
    summary: 'পুঁজ সৃষ্টি প্রতিরোধ বা পুঁজ দ্রুত পাকাতে এবং তীব্র ঠান্ডা কাতর রোগীর জন্য আদর্শ।'
  },
  'Ign': {
    id: 'Ign',
    name: 'Ignatia Amara',
    latinName: 'Strychnos Ignatii',
    commonName: 'St. Ignatius Bean',
    keynotes: [
      'আবেগীয় আঘাত, শোক বা মানসিক দুঃখের কুফল (Grief & disappointment)',
      'ঘন ঘন দীর্ঘশ্বাস ফেলা (Frequent sighing)',
      'লক্ষণসমূহের বৈপরীত্য (Paradoxical symptoms)'
    ],
    organAffinities: ['Nervous System', 'Mind'],
    mindSymptoms: ['গোপনে কাঁদে, বিষণ্ণ ও মেজাজ ক্ষণে ক্ষণে পরিবর্তিত হয়'],
    headAndNeck: ['মনে হয় মাথায় পেরেক ঠুকে দেওয়া হচ্ছে (Clavus hystericus)'],
    stomachAndAbdomen: ['পাকস্থলীতে খালি খালি ভাব, যা ঢেকুর তুললে কমে না'],
    respiratory: ['যত কাশি দেওয়া হয় কাশির বেগ তত বাড়ে'],
    extremitiesAndSkin: ['পেশীর হঠাৎ কাঁপুনি বা খিঁচুনি'],
    aggravation: ['তামাকের ধোঁয়ায়', 'মানসিক শকে বা শোকে', 'কফি পানে'],
    amelioration: ['অবস্থান পরিবর্তন করলে', 'শক্ত চাপে'],
    relationships: {
      complementary: ['Nat-m'],
      antidotes: ['Pulsatilla'],
      followsWell: ['Bell', 'Nux-v', 'Sep']
    },
    summary: 'প্রিয়জনের বিচ্ছেদ বা শোকজনিত মানসিক ভার ও নার্ভাস উপসর্গের সেরা ওষুধ।'
  },
  'Lyc': {
    id: 'Lyc',
    name: 'Lycopodium Clavatum',
    latinName: 'Lycopodium Clavatum',
    commonName: 'Club Moss',
    keynotes: [
      'বিকাল ৪টা থেকে রাত ৮টার মধ্যে রোগের বৃদ্ধি',
      'ডান পাশের রোগ বাম পাশে স্থানান্তরিত হওয়ার প্রবণতা',
      'পেটে প্রচুর গ্যাস এবং মিষ্টি খাওয়ার প্রবল ইচ্ছা'
    ],
    organAffinities: ['Urinary Tract', 'Digestive Organs', 'Liver'],
    mindSymptoms: ['আত্মবিশ্বাসের অভাব কিন্তু দায়িত্ব পেলে চমৎকারভাবে সম্পন্ন করে'],
    headAndNeck: ['নাক বন্ধ থাকা (বিশেষ করে রাতে বাচ্চাদের)'],
    stomachAndAbdomen: ['কয়েক লোকমা খেলেই পেট ভরে যায় ও গ্যাস জমে ফুলে ওঠে'],
    respiratory: ['শ্বাস নেওয়ার সময় নাকের ডানা ওঠানামা করে (Fan-like motion)'],
    extremitiesAndSkin: ['ডান পা ঠান্ডা, বাম পা গরম অথবা এক পা ঠান্ডা অন্য পা গরম'],
    aggravation: ['বিকাল ৪টা থেকে ৮টা', 'গরম খাবার পানে (কিছু ক্ষেত্রে)'],
    amelioration: ['উষ্ণ পানীয় পানে', 'খোলা বাতাসে'],
    relationships: {
      complementary: ['Pulsatilla', 'Iodium'],
      antidotes: ['Camphora', 'Pulsatilla'],
      followsWell: ['Calc-c', 'Nux-v', 'Sulph']
    },
    summary: 'যকৃৎ, গ্যাস্ট্রিক ও মূত্রতন্ত্রের জটিলতায় বিকালের দিকে বৃদ্ধিতে মহাঔষধ।'
  },
  'Merc': {
    id: 'Merc',
    name: 'Mercurius Solubilis',
    latinName: 'Mercurius Solubilis',
    commonName: 'Quicksilver',
    keynotes: [
      'অতিরিক্ত লালাস্রাব যা রাতে বালিশ ভিজিয়ে দেয়',
      'মুখে মারাত্মক দুর্গন্ধ এবং জিহ্বা মোটা, থলথলে ও পাশে দাঁতের ছাপ পড়া',
      'ঘাম হলেও রোগীর কোনো উপশম হয় না'
    ],
    organAffinities: ['Glands', 'Mucous Membranes', 'Mouth', 'Skin'],
    mindSymptoms: ['উদ্বেগজনক মন, মনে হয় ক্ষতিকর কিছু ঘটে যাবে'],
    headAndNeck: ['দাঁতে ব্যথা যা রাতে বাড়ে, মাড়ি ফোলা ও রক্ত পড়া'],
    stomachAndAbdomen: ['পায়খানার সময় অনবরত কোঁথ ও মলের সাথে রক্ত-পুঁজ'],
    respiratory: ['রাতে শুলে কাশি ও বুকে ব্যথা বাড়ে'],
    extremitiesAndSkin: ['রাতের বেলা বিছানার গরমে চুলকানি ও ঘা বাড়ে'],
    aggravation: ['রাতে', 'বিছানার উত্তাপে', 'ঘাম হলে'],
    amelioration: ['সাধারণ তাপমাত্রায়'],
    relationships: {
      complementary: ['Badiaga'],
      antidotes: ['Hepar', 'Nit-ac'],
      followsWell: ['Bell', 'Puls', 'Sulph']
    },
    summary: 'মুখের দুর্গন্ধ, লালাস্রাব, মাড়ির রোগ ও রজনীকালীন বৃদ্ধিতে অপরিসীম ফলদায়ক।'
  },
  'Nat-m': {
    id: 'Nat-m',
    name: 'Natrum Muriaticum',
    latinName: 'Natrum Muriaticum',
    commonName: 'Common Salt',
    keynotes: [
      'কাউকে সান্ত্বনা দিলে রাগ ও বিরক্তি বাড়ে (Aggravation from consolation)',
      'অতিরিক্ত লবণ খাওয়ার প্রবণতা',
      'সূর্যোদয় থেকে সূর্যাস্ত পর্যন্ত মাথাব্যথা (সূর্যের সাথে সাথে বাড়ে-কমে)'
    ],
    organAffinities: ['Mind', 'Blood', 'Skin', 'Heart'],
    mindSymptoms: ['পুরোনো কষ্টের কথা মনে করে মনে মনে দুঃখে ভোগে, সান্ত্বনা অপছন্দ করে'],
    headAndNeck: ['মাথাব্যথা মনে হয় মাথায় হাতুড়ি দিয়ে পিটানো হচ্ছে'],
    stomachAndAbdomen: ['ঠোঁটের মাঝখানে ফাটা দাগ, প্রচণ্ড পিপাসা'],
    respiratory: ['ডিমের লালার মতো কাঁচা ও পাতলা কাশির কফ'],
    extremitiesAndSkin: ['চামড়া তৈলাক্ত, কপালে চর্মরোগ ও চুল পড়া'],
    aggravation: ['সকাল ১০টা থেকে ১১টায়', 'সূর্যের উত্তাপে', 'সান্ত্বনা দিলে'],
    amelioration: ['খোলা বাতাসে', 'ঠান্ডা পানিতে গোসল করলে'],
    relationships: {
      complementary: ['Apis', 'Sepia'],
      antidotes: ['Ars', 'Phosphorus'],
      followsWell: ['Sepia', 'Sulphur']
    },
    summary: 'মানসিক আঘাত, দীর্ঘস্থায়ী শোক ও সূর্যজনিত মাথাব্যথায় অতুলনীয়।'
  },
  'Nux-v': {
    id: 'Nux-v',
    name: 'Nux Vomica',
    latinName: 'Strychnos Nux Vomica',
    commonName: 'Poison Nut',
    keynotes: [
      'খিটখিটে স্বভাব ও সহ্যক্ষমতার অভাব',
      'বারবার পায়খানার বেগ কিন্তু অসম্পূর্ণ ত্যাগ',
      'অতিরিক্ত রাত জাগা ও নেশাজাতীয় দ্রব্যের কুফল'
    ],
    organAffinities: ['Digestive System', 'Nervous System', 'Liver', 'Mind'],
    mindSymptoms: ['সহজেই রেগে যায়, সামান্য শব্দ বা আলো সহ্য করতে পারে না'],
    headAndNeck: ['সকালে কপালে ভারী মাথাব্যথা', 'চোখ লাল'],
    stomachAndAbdomen: ['খাওয়ার ১-২ ঘণ্টা পর পেটে চাপ ও ভার অনুভব', 'কোষ্ঠকাঠিন্য'],
    respiratory: ['সকালে ও খাওয়ার পর হাঁচি ও নাক বন্ধভাব'],
    extremitiesAndSkin: ['ঠান্ডা সহ্য করতে পারে না, গায়ে কাপড় জড়িয়ে রাখে'],
    aggravation: ['সকাল বেলা', 'মানসিক চাপ ও রাত জাগা'],
    amelioration: ['সন্ধ্যায় বিশ্রাম', 'স্বল্প ঘুম'],
    relationships: {
      complementary: ['Sulphur'],
      antidotes: ['Acon', 'Bell', 'Puls'],
      followsWell: ['Bry', 'Puls', 'Sulph']
    },
    summary: 'আধুনিক জীবনযাত্রার অপব্যবহার, রাত জাগা ও পেটের গোলযোগে মহাঔষধ।'
  },
  'Phos': {
    id: 'Phos',
    name: 'Phosphorus',
    latinName: 'Phosphorus',
    commonName: 'Phosphorus',
    keynotes: [
      'লম্বা, পাতলা গড়ন ও সামনের দিকে ঝুঁকে হাঁটার অভ্যাস',
      'বরফের মতো ঠাণ্ডা পানি ও আইসক্রিম পানের তীব্র ইচ্ছা',
      'সহজেই শরীরের যেকোনো স্থান থেকে রক্তস্রাবের প্রবণতা'
    ],
    organAffinities: ['Lungs', 'Nerves', 'Bones', 'Blood Vessels'],
    mindSymptoms: ['উজ্জ্বল, বুদ্ধিমান কিন্তু খুব সহজেই ভীত হয়, অন্ধকারে ও ঝড়ে ভয় পায়'],
    headAndNeck: ['মাথা ঘোরা ও মাথাব্যথা যা ঠাণ্ডা প্রয়োগে কমে'],
    stomachAndAbdomen: ['পাকস্থলীতে বরফের মতো ঠাণ্ডা পানি পানের ইচ্ছা, কিন্তু পানি পেটে গরম হলেই বমি হয়ে যায়'],
    respiratory: ['বুকে তীব্র চাপ ও শক্ত ভাব, নিউমোনিয়া ও রক্তকাশির ভয়'],
    extremitiesAndSkin: ['হাত-পা গরম ও জ্বালাপোড়া করে'],
    aggravation: ['বাম পাশে শুলে', 'সন্ধ্যাবেলায়', 'বজ্রপাতে ও ঝড়ে'],
    amelioration: ['ঠাণ্ডা খাবার ও পানীয় পানে', 'ডান পাশে শুলে'],
    relationships: {
      complementary: ['Ars', 'Cepa'],
      antidotes: ['Nux-v'],
      followsWell: ['Ars', 'Calc-c', 'Lyc', 'Sil']
    },
    summary: 'ফুসফুসের প্রদাহ, অতিরিক্ত রক্তস্রাব এবং স্নায়বিক দুর্বলতায় প্রধান কাজ।'
  },
  'Puls': {
    id: 'Puls',
    name: 'Pulsatilla Nigricans',
    latinName: 'Pulsatilla Pratensis',
    commonName: 'Wind Flower',
    keynotes: [
      'পরিবর্তনশীল লক্ষণাবলি',
      'পিপাসাহীনতা (Thirstlessness)',
      'উন্মুক্ত ও ঠান্ডা বাতাসে উপশম'
    ],
    organAffinities: ['Venous System', 'Mucous Membranes', 'Female Reproductive', 'Mind'],
    mindSymptoms: ['সহজেই কেঁদে ফেলে এবং সহানুভূতি চায়', 'নরম, শান্ত स्वभाव'],
    headAndNeck: ['চোখ থেকে ঘন, হলুদ ও ব্যথাহীন পুঁজের মতো স্রাব'],
    stomachAndAbdomen: ['চর্বিজাতীয় খাবার খাওয়ার পর পেটের গণ্ডগোল', 'মুখ শুকায় কিন্তু পিপাসা নেই'],
    respiratory: ['সন্ধ্যায় শুলে কাশি বাড়ে, সকালে কফ ওঠে'],
    extremitiesAndSkin: ['এক স্থান থেকে অন্য স্থানে সঞ্চরণশীল বাতের ব্যথা'],
    aggravation: ['বন্ধ ঘর বা গরম আবহাওয়া', 'চর্বিযুক্ত খাবার'],
    amelioration: ['খোলা বাতাস', 'ধীরে ধীরে হাঁটাচলা'],
    relationships: {
      complementary: ['Lyc', 'Sil'],
      antidotes: ['Chamomilla', 'Ign'],
      followsWell: ['Kali-bi', 'Sep', 'Sulph']
    },
    summary: 'কোমল স্বভাবের ব্যক্তি, পরিবর্তনশীল লক্ষণ এবং গরম সহ্য করতে না পারা রোগীদের জন্য।'
  },
  'Rhus-t': {
    id: 'Rhus-t',
    name: 'Rhus Toxicodendron',
    latinName: 'Toxicodendron Pubescens',
    commonName: 'Poison Ivy',
    keynotes: [
      'প্রথম নড়াচড়ায় কষ্ট কিন্তু অনবরত চলাফেরায় উপশম',
      'ভেজা আবহাওয়া বা পানিতে ভেজার কুফল',
      'জিহ্বায় লাল ত্রিভুজাকৃতি দাগ'
    ],
    organAffinities: ['Fibrous Tissue', 'Joints', 'Skin', 'Muscles'],
    mindSymptoms: ['ব্যথার কারণে মারাত্মক অস্থিরতা, স্থির থাকতে পারে না'],
    headAndNeck: ['চোয়াল শক্ত হয়ে যাওয়া'],
    stomachAndAbdomen: ['মুখ শুকনো, ঠান্ডা পানির তীব্র পিপাসা'],
    respiratory: ['স্যাঁতসেঁতে বাতাসে কাশি বাড়ে'],
    extremitiesAndSkin: ['বাতের ব্যথা অনবরত হাঁটাহাঁটিতে কমে', 'চামড়ায় রসে ভরা ফোস্কা'],
    aggravation: ['স্যাঁতসেঁতে আবহাওয়ায়', 'বিশ্রামে', 'প্রথম নড়াচড়ায়'],
    amelioration: ['অনবরত সঞ্চালনে', 'উষ্ণ সেক বা তাপে'],
    relationships: {
      complementary: ['Bry', 'Calc-c'],
      antidotes: ['Anac', 'Bell'],
      followsWell: ['Arn', 'Ars', 'Puls']
    },
    summary: 'পেশী ও জোড়ার বাত-ব্যথা এবং ভেজা আবহাওয়াজনিত উপসর্গে রাস টক্স অতুলনীয়।'
  },
  'Sep': {
    id: 'Sep',
    name: 'Sepia Officinalis',
    latinName: 'Sepia Officinalis',
    commonName: 'Inky Juice of Cuttlefish',
    keynotes: [
      'নিজের পরিবার বা প্রিয়জনদের প্রতি চরম উদাসীনতা (Indifference)',
      'তলপেট বা জরায়ু নিচের দিকে খসে পড়ার অনুভূতি (Bearing down sensation)',
      'নাকের ওপর কালচে বা বাদামী রঙের ছোপ বা দাগ (Saddle across nose)'
    ],
    organAffinities: ['Female Reproductive Organs', 'Venous Circulation', 'Skin'],
    mindSymptoms: ['নিজের সন্তানের প্রতিও ভালোবাসার অনুভূতি থাকে না, খিটখিটে মেজাজ'],
    headAndNeck: ['মাথাবিষ যা বাম পাশে বাড়ে ও ঋতুস্রাবের সাথে যুক্ত'],
    stomachAndAbdomen: ['খাবারের গন্ধে বমি ভাব, পেটে শূন্যতার অনুভূতি'],
    respiratory: ['কাশি দিলে কফ ওঠে যা নোনতা স্বাদের'],
    extremitiesAndSkin: ['পায়ে বা উরুর খাঁজে চর্মরোগ ও চুলকানি'],
    aggravation: ['ঘরের ভেতরের গরমে', 'ধোয়ার কাজ বা ভেজা জায়গায়'],
    amelioration: ['দ্রুত ও জোরে হাঁটাহাঁটি বা শারীরিক পরিশ্রমে'],
    relationships: {
      complementary: ['Nat-m'],
      antidotes: ['Acon', 'Ant-c'],
      followsWell: ['Bell', 'Nux-v', 'Puls', 'Sulph']
    },
    summary: 'নারীদেহের হরমোনজনিত গোলযোগ এবং পরিবারে উদাসীনতার মানসিকতায় অন্যতম ওষুধ।'
  },
  'Sil': {
    id: 'Sil',
    name: 'Silicea',
    latinName: 'Silicea',
    commonName: 'Flint',
    keynotes: [
      'শরীরে যেকোনো বিজাতীয় পদার্থ (যেমন কাঁটা, কাঁচের টুকরো, পুঁজ) বের করে দেওয়ার ক্ষমতা',
      'প্রচণ্ড শীতকাতরতা (উষ্ণ ঘরেও টুপি বা গরম কাপড় পরে থাকতে চায়)',
      'পায়ের ঘামে দুর্গন্ধ ও ঘাম চেপে যাওয়ার কুফল'
    ],
    organAffinities: ['Bones', 'Glands', 'Nerves', 'Skin'],
    mindSymptoms: ['লাজুক, নরম স্বভাব কিন্তু নিজের মতে অনড় (Obstinate)'],
    headAndNeck: ['মাথাব্যথা মাথার পেছন থেকে শুরু হয়ে ডান চোখের ওপর এসে স্থির হয়'],
    stomachAndAbdomen: ['পায়খানা কিছুটা বের হয়ে আবার ভেতরে ঢুকে যায় (Shy stool)'],
    respiratory: ['পুরোনো কাশি ও কফ পুঁজযুক্ত'],
    extremitiesAndSkin: ['পায়ের ঘামে কটু দুর্গন্ধ, নখ ভঙ্গুর ও দাগযুক্ত'],
    aggravation: ['ঠান্ডায়', 'শরীরের অংশ অনাবৃত রাখলে', 'নতুন চাঁদে'],
    amelioration: ['মাথা ও শরীর গরম কাপড়ে ঢেকে রাখলে'],
    relationships: {
      complementary: ['Thuja'],
      antidotes: ['Flu-ac'],
      followsWell: ['Hep', 'Lyc', 'Puls', 'Sulph']
    },
    summary: 'ফোঁড়া পাকানো বা পুঁজ নিষ্কাশন এবং চরম শীতকাতরতায় প্রাকৃতিক সার্জনের কাজ করে।'
  },
  'Sulph': {
    id: 'Sulph',
    name: 'Sulphur',
    latinName: 'Sulphur',
    commonName: 'Brimstone',
    keynotes: [
      'শরীরের সকল দ্বারে জ্বালাপোড়া',
      'গোসলে অনিচ্ছা বা গোসল করলে রোগ বৃদ্ধি',
      'সকাল ১১টায় পেটে শূন্যতা ও ক্ষুধার অনুভূতি'
    ],
    organAffinities: ['Skin', 'Venous System', 'Digestive Tract', 'Mind'],
    mindSymptoms: ['দার্শনিক মেজাজ কিন্তু অপরিচ্ছন্ন স্বভাব', 'পুরোনো জিনিসকেও মহামূল্যবান মনে করে'],
    headAndNeck: ['মাথার তালুতে তীব্র জ্বালা', 'সকালে মাথাব্যথা'],
    stomachAndAbdomen: ['সকাল ১১টায় পেটে তীব্র খালি ভাব', 'ভোরের দিকে পাতলা পায়খানা'],
    respiratory: ['বুকে দমবন্ধ ভাব, খোলা বাতাস চায়'],
    extremitiesAndSkin: ['পায়ের তালুতে জ্বালা, রাতে লেপের বাইরে পা বের করে রাখে', 'বিছানার উত্তাপে চুলকানি বাড়ে'],
    aggravation: ['গোসল করলে', 'বিছানার উত্তাপে', 'দাঁড়িয়ে থাকলে'],
    amelioration: ['শুষ্ক ও গরম আবহাওয়ায়'],
    relationships: {
      complementary: ['Aloe', 'Nux-v', 'Puls'],
      antidotes: ['Acon', 'Camphora'],
      followsWell: ['Calc-c', 'Lyc']
    },
    summary: 'চর্মরোগ দমনজনিত কুফল ও অন্য ওষুধের প্রতিক্রিয়া থমকে গেলে সালফার সেরা।'
  }
};