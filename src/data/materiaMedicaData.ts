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
 },
'Thuj': {
    id: 'Thuj',
    name: 'Thuja Occidentalis',
    latinName: 'Thuja Occidentalis',
    commonName: 'Arbor Vitae',
    keynotes: [
      'সাইকোটিক দোষের প্রধান ওষুধ এবং আঁচিল ও আচমকা বৃদ্ধি (Warts & Excreta)',
      'টিকা গ্রহণের কুফল (Bad effects of vaccination)',
      'মনে করে শরীর কাঁচের তৈরি এবং সহজেই ভেঙে যাবে'
    ],
    organAffinities: ['Urogenital Organs', 'Skin', 'Glands', 'Mind'],
    mindSymptoms: [
      'মনে করে কোনো এক অদৃশ্য শক্তি তার মন পরিচালনা করছে',
      'পেটের ভেতরে জীবন্ত কিছু নড়াচড়া করছে বলে মনে হয়'
    ],
    headAndNeck: [
      'মাথাব্যথা মনে হয় কপালে বা মাথার একপাশে পেরেক ঠুকে দেওয়া হচ্ছে',
      'চোখের পাতায় অঞ্জনী বা শক্ত গোটা ওঠা'
    ],
    stomachAndAbdomen: [
      'চা পানে পেটের গণ্ডগোল ও গ্যাস্ট্রিকের কষ্ট বাড়ে',
      'পেট ঢোলের মতো ফোলা ও ভেতরে গুড়গুড় শব্দ হওয়া'
    ],
    respiratory: [
      'টিকা দেওয়ার পর হাঁপানি বা শ্বাসকষ্টের সূচনা',
      'সকালে শুষ্ক ও রাতে কাঁচা কফ যুক্ত কাশি'
    ],
    extremitiesAndSkin: [
      'চামড়ায় উপমাংস, আঁচিল (ফুলকপির মতো), তিল ও কালো ছোপ ছোপ দাগ',
      'অনাবৃত অংশ ছাড়া শুধু ঢাকা অংশে প্রচুর ঘাম হওয়া'
    ],
    aggravation: ['আর্দ্র ও ঠান্ডা আবহাওয়ায়', 'টিকা গ্রহণের পর', 'রাত ৩টায় ও ৩টায় বিকেলেও'],
    amelioration: ['উষ্ণতায়', 'খোলা বাতাসে', 'হাত-পা ছড়িয়ে শুলে'],
    relationships: {
      complementary: ['Medorr', 'Sabina', 'Sil'],
      antidotes: ['Camphora', 'Pulsatilla'],
      followsWell: ['Merc', 'Nit-ac', 'Puls', 'Sulph']
    },
    summary: 'আঁচিল, চর্মের উপমাংস, সাইকোসিস ধাতু এবং টিকা পরবর্তী যেকোনো জটিলতায় প্রধান ওষুধ।'
  },
  'Lach': {
    id: 'Lach',
    name: 'Lachesis Mutus',
    latinName: 'Lachesis Mutus',
    commonName: 'Bushmaster Snake',
    keynotes: [
      'গলায় বা শরীরে কোনো টাইট জামাকাপড় সহ্য করতে পারে না (Intolerance to constriction)',
      'ঘুমের মধ্যে বা ঘুম থেকে ওঠার পর সমস্ত উপসর্গ বৃদ্ধি পায়',
      'বাম পাশের রোগ প্রথমে শুরু হয়ে ডান পাশে ছড়িয়ে পড়ে'
    ],
    organAffinities: ['Blood', 'Nerves', 'Heart', 'Female Reproductive Systems'],
    mindSymptoms: [
      'অত্যধিক বাচালতা (প্রচুর কথা বলে, এক বিষয় থেকে অন্য বিষয়ে চলে যায়)',
      'প্রচণ্ড সন্দেহপ্রবণতা ও হিংসাবোধ'
    ],
    headAndNeck: [
      'গলা স্পর্শকাতর, কলার বা টাই পরতে পারে না',
      'বাম পাশের টনসিল বা গলা ব্যথা, যা ডান দিকে যায়'
    ],
    stomachAndAbdomen: [
      'কোমর বা পেটে আঁটসাঁট পোশাক সহ্য হয় না',
      'পেটে স্পর্শজনিত তীব্র অসস্তিকর অনুভূতি'
    ],
    respiratory: [
      'ঘুমিয়ে পড়লেই শ্বাসকষ্ট বা কাশির দমকা শুরু হয়',
      'বুকে চাপ ও দমবন্ধ লাগা'
    ],
    extremitiesAndSkin: [
      'ক্ষত থেকে কালো বা গাঢ় রঙের রক্তপাত',
      'চামড়া বেগুনি বা নীলচে রঙ ধারণ করা'
    ],
    aggravation: ['ঘুমের মধ্যে ও ঘুম থেকে ওঠার পর', 'টাইট পোশাকে', 'উষ্ণতায়'],
    amelioration: ['যেকোনো প্রাকৃতিক স্রাব (যেমন ঋতুস্রাব) শুরু হলে', 'খোলা বাতাসে'],
    relationships: {
      complementary: ['Hep', 'Lyc', 'Nit-ac'],
      antidotes: ['Ars', 'Bell', 'Camphora'],
      followsWell: ['Ars', 'Bell', 'Merc', 'Sulph']
    },
    summary: 'টাইট কাপড়ে অস্বস্তি, বাম থেকে ডানপাশের আক্রমণ ও ঘুম ভাঙার পর বৃদ্ধিতে সেরা ওষুধ।'
  },

  'Grap': {
    id: 'Grap',
    name: 'Graphites',
    latinName: 'Graphites',
    commonName: 'Black Lead',
    keynotes: [
      'চর্মরোগ থেকে মধুর মতো চটচটে আঠালো রস ঝরা (Sticky, honey-like discharge)',
      'মোটা, ফর্সা, কোষ্ঠকাঠিন্যযুক্ত ও ঠান্ডা কাতর ধাতুর রোগী',
      'কান বা ত্বকের ভাঁজে ফেটে যাওয়া ও ক্ষত হওয়া'
    ],
    organAffinities: ['Skin', 'Digestive Tract', 'Glands', 'Mind'],
    mindSymptoms: [
      'সহজেই কান্নাকাটি করে, সঙ্গীতে মন বিষণ্ণ হয়ে ওঠে',
      'সিদ্ধান্তহীনতা ও অস্থিরতা'
    ],
    headAndNeck: [
      'কানের পেছনের অংশে ফেটে যাওয়া ও আঠালো রস পড়া',
      'চোখের কোণে ফেটে যাওয়া ও পাপড়ি পড়ে যাওয়া'
    ],
    stomachAndAbdomen: [
      'পেটে খালি ভাব যা খাবার খেলে সাময়িক কমে',
      'মল বড়, শক্ত ও গাঢ় রঙের, সাথে শ্লেষ্মা যুক্ত'
    ],
    respiratory: [
      'শুয়ে থাকলে বুকে চাপ ও শ্বাসকষ্ট অনুভব'
    ],
    extremitiesAndSkin: [
      'হাতের আঙুল, গোড়ালি ও ত্বকের ভাজে ফেটে ক্ষত',
      'নখ মোটা, ভঙ্গুর ও বাঁকা হয়ে যাওয়া'
    ],
    aggravation: ['রাতে', 'বিছানার উত্তাপে', 'ঋতুস্রাবের সময় ও পরে'],
    amelioration: ['আধার ও উষ্ণ স্থানে', 'খাবার খাওয়ার পর'],
    relationships: {
      complementary: ['Caust', 'Hep', 'Tub'],
      antidotes: ['Acon', 'Ars'],
      followsWell: ['Calc-c', 'Lyc', 'Puls', 'Sulph']
    },
    summary: 'চর্মরোগের চটচটে রসাশ্রাব, স্থূলতা এবং কোষ্ঠকাঠিন্যের দীর্ঘস্থায়ী উপসর্গে মহৌষধ।'
  },

  'Nux-m': {
    id: 'Nux-m',
    name: 'Nux Moschata',
    latinName: 'Nux Moschata',
    commonName: 'Nutmeg',
    keynotes: [
      'অত্যধিক তন্দ্রাচ্ছন্নতা ও ঢুলুঢুলু ভাব (Overwhelming drowsiness)',
      'মুখমণ্ডল ও জিহ্বা মারাত্মক শুষ্ক কিন্তু পানির কোনো পিপাসা নেই',
      'পেটে অতিরিক্ত গ্যাস ফুলে থাকা ও পেট ফাঁপা'
    ],
    organAffinities: ['Mind', 'Nervous System', 'Digestive System'],
    mindSymptoms: [
      'সবসময় ঘুম ঘুম ভাব ও ঝিমুনি',
      'স্মৃতিশক্তি হঠাৎ লোপ পাওয়া, কথা বলতে বলতে খেই হারিয়ে ফেলা'
    ],
    headAndNeck: [
      'জিহ্বা এত শুষ্ক যে তালুতে আটকে যায়, তবুও পিপাসা নেই',
      'মাথা ভারী ও ঢুলুঢুলু লাগা'
    ],
    stomachAndAbdomen: [
      'সামান্য কিছু খেলেই পেট প্রচণ্ড ফুলে ওঠে',
      'মলদ্বারের পক্ষাঘাতগ্রস্ত ভাব, মল নরম হলেও বের হতে কষ্ট'
    ],
    respiratory: [
      'গরম ঘরে বা ঠান্ডা বাতাসে কাশি বাড়ে'
    ],
    extremitiesAndSkin: [
      'চামড়া অত্যন্ত শুষ্ক, ঘাম একদম হতে চায় না',
      'পেশীর দুর্বলতা ও অঙ্গপ্রত্যঙ্গে অবশ ভাব'
    ],
    aggravation: ['ঠান্ডা ও স্যাঁতসেঁতে বাতাসে', 'মানসিক উত্তেজনায়', 'খাওয়ার পর'],
    amelioration: ['উষ্ণ ঘরে', 'শুষ্ক ও গরম আবহাওয়াতে'],
    relationships: {
      complementary: ['Lyc'],
      antidotes: ['Camphora'],
      followsWell: ['Puls', 'Rhus-t', 'Sulph']
    },
    summary: 'প্রচণ্ড ঝিমুনি, মুখ-জিহ্বা শুকিয়ে যাওয়া কিন্তু পিপাসাহীনতায় অন্যতম প্রধান ওষুধ।'
  },

  'Staph': {
    id: 'Staph',
    name: 'Staphysagria',
    latinName: 'Staphysagria',
    commonName: 'Stavesacre',
    keynotes: [
      'অপমান, রাগ দমনে উদ্ভূত মানসিক ও শারীরিক রোগ (Suppressed anger/indignation)',
      'ধারালো অস্ত্রের কাটার মতো তীব্র ক্ষত ও ব্যথা',
      'বারবার অঞ্জনি (Stye) হওয়া এবং দাঁত কালো হয়ে ক্ষয়ে যাওয়া'
    ],
    organAffinities: ['Genitourinary Tract', 'Mind', 'Skin', 'Teeth'],
    mindSymptoms: [
      'রাগ ও ক্ষোভ ভেতরে চেপে রাখে, কিন্তু হঠাৎ জিনিসপত্র ছুড়ে মারে',
      'অত্যন্ত অপমানবোধ ও স্পর্শকাতর মেজাজ'
    ],
    headAndNeck: [
      'চোখের পাতায় বারবার অঞ্জনি ও শক্ত গুটলি হওয়া',
      'দাঁত কালো, কালো দাগযুক্ত ও সহজে ক্ষয়ে যায়'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে ঝুলে পড়ার মতো হালকা ভাব অনুভূতি',
      'মিষ্টি খাওয়ার প্রচণ্ড ইচ্ছা'
    ],
    respiratory: [
      'রাগ বা অপমানের পর কাশি বা শ্বাসকষ্ট'
    ],
    extremitiesAndSkin: [
      'অস্ত্রোপচার বা কাটার পর তীব্র ও জ্বালাকর ব্যথা',
      'চুলকানি যা আঁচড়ালে স্থান পরিবর্তন করে'
    ],
    aggravation: ['রাগ বা অপমান চেপে রাখলে', 'শারীরিক মিলনে', 'তামাকের ধোঁয়ায়'],
    amelioration: ['রজনীতে বিশ্রামে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Caust'],
      antidotes: ['Camphora'],
      followsWell: ['Coloc', 'Puls', 'Sulph']
    },
    summary: 'মানসিক ক্ষোভ দমন, অস্ত্রোপচার পরবর্তী ব্যথা এবং মেজাজি রোগীদের অপূর্ব ওষুধ।'
  },

  'Ant-c': {
    id: 'Ant-c',
    name: 'Antimonium Crudum',
    latinName: 'Antimonium Crudum',
    commonName: 'Black Sulphuret of Antimony',
    keynotes: [
      'জিহ্বায় দুধের মতো ঘন সাদা আস্তরণ (Thick white coating on tongue)',
      'রোগীকে কেউ তাকালে বা স্পর্শ করলে ভীষণ রেগে যায়',
      'পায়ের তলায় শক্ত কড়া (Corns) ও থলথলে চামড়া'
    ],
    organAffinities: ['Digestive Tract', 'Skin', 'Mind'],
    mindSymptoms: [
      'বাচ্চারা কেউ দিকে তাকালে বা ছুলে সহ্য করতে পারে না',
      'ভাবুক ও রোমান্টিক মনের ভাব (বিশেষ করে জোছনা রাতে)'
    ],
    headAndNeck: [
      'জিহ্বায় মোটা সাদা দুধের স্বাদের মতো প্রলেপ',
      'চোখের কোণে ও নাকের ডগায় ফেটে যাওয়া'
    ],
    stomachAndAbdomen: [
      'অতিরিক্ত খাওয়ার পর টক ঢেকুর ও বমি ভাব',
      'পেটে অস্বস্তি ও পাতলা-শক্ত মিশ্রিত পায়খানা'
    ],
    respiratory: [
      'গরম ঘরে ঢুকলে বা গরম পানিতে গোসলে কাশি বাড়ে'
    ],
    extremitiesAndSkin: [
      'পায়ের তলায় কড়া ও হাঁটতে গিয়ে তীব্র ব্যথা',
      'নখ মোটা, বিকৃত ও সহজে ভেঙে যাওয়া'
    ],
    aggravation: ['রোদের তাপে বা গরমে', 'গরম পানিতে গোসলে', 'অতিরিক্ত খেলে'],
    amelioration: ['খোলা বাতাসে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Scilla'],
      antidotes: ['Hep', 'Merc'],
      followsWell: ['Puls', 'Merc', 'Sulph']
    },
    summary: 'জিহ্বার সাদা আস্তরণ, পেটের গোলযোগ এবং কড়া ব্যথায় প্রাকৃতিক সেরা সমাধান।'
   },
  'Ip': {
    id: 'Ip',
    name: 'Ipecacuanha',
    latinName: 'Carapichea Ipecacuanha',
    commonName: 'Ipecac',
    keynotes: [
      'ক্রমাগত ও প্রচণ্ড বমি ভাব যা বমি করার পরেও কমে না (Persistent nausea relieved by nothing)',
      'জিহ্বা একদম পরিষ্কার ও লাল থাকা সত্ত্বেও বমি ভাব',
      'শরীরের যেকোনো স্থান থেকে উজ্জ্বল লাল তাজা রক্তস্রাব'
    ],
    organAffinities: ['Pneumogastric Nerve', 'Digestive Tract', 'Respiratory Organs'],
    mindSymptoms: [
      'রোগী যা চায় তা নিজেই জানে না, খিটখিটে মেজাজ',
      'অন্যের প্রতি অবজ্ঞা বা অনাগ্রহ'
    ],
    headAndNeck: [
      'মাথাব্যথা মনে হয় হাড় চূর্ণ-বিচূর্ণ হয়ে যাচ্ছে',
      'জিহ্বা পরিষ্কার, লালাযুক্ত কিন্তু পিপাসাহীনতা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে শিথিল বা ঝুলন্ত ভাব অনুভব',
      'বমি ও মল ত্যাগের পর বমি ভাবের কোনো উপশম হয় না'
    ],
    respiratory: [
      'বুকে প্রচুর শ্লেষ্মার ঘড়ঘড় শব্দ কিন্তু কফ উঠতে চায় না',
      'হঠাৎ কাশি ও কাশির দমকায় দম বন্ধ হয়ে আসা'
    ],
    extremitiesAndSkin: [
      'চামড়া ফ্যাকাশে ও ঠান্ডা ঘামে ভেজা',
      'অঙ্গপ্রত্যঙ্গে খিঁচুনি বা ঝিনঝিন করা'
    ],
    aggravation: ['আর্দ্র ও গরম বাতাসে', 'নড়াচড়ায়', 'খাওয়ার পর'],
    amelioration: ['খোলা বাতাসে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Cuprum'],
      antidotes: ['Ars', 'Tabac'],
      followsWell: ['Ars', 'Bell', 'Bry', 'Puls']
    },
    summary: 'প্রচণ্ড অবিরত বমি ভাব, পরিষ্কার জিহ্বা এবং কাশির সময় শ্বাসনালীর ঘড়ঘড় শব্দে প্রধান ওষুধ।'
  },

  'Coloc': {
    id: 'Coloc',
    name: 'Colocynthis',
    latinName: 'Citrullus Colocynthis',
    commonName: 'Bitter Apple',
    keynotes: [
      'পেটে তীব্র কামড়ানো ও মোচড়ানো ব্যথা যা দ্বিগুণ হয়ে চেপে ধরলে কমে (Bending double relieves)',
      'রাগ বা অপমানের কুফল থেকে উদ্ভূত পেট ব্যথা ও উদরাময়',
      'ব্যথার স্থানে শক্ত চাপ ও উত্তাপ দিলে উপশম'
    ],
    organAffinities: ['Abdominal Nerves', 'Gastrointestinal Tract', 'Sciatic Nerve'],
    mindSymptoms: [
      'অত্যন্ত খিটখিটে, কেউ কথা বললে রেগে যায়',
      'অপমানিত বোধ করার পর অসুস্থ হয়ে পড়া'
    ],
    headAndNeck: [
      'মাথার একপাশে তীব্র স্নায়ুশূল বা ব্যথার অনুভূতি'
    ],
    stomachAndAbdomen: [
      'পেটে মোচড়ানো তীব্র ব্যথা, রোগী বিছানায় পেটে চাপ দিয়ে বাঁকা হয়ে শুয়ে থাকে',
      'খাওয়ার বা পানের পরপরই পেটে ব্যথা ও পাতলা পায়খানা'
    ],
    respiratory: [
      'পেট ব্যথার সাথে বুক ধড়ফড় করা'
    ],
    extremitiesAndSkin: [
      'সায়াটিকা ব্যথা (Sciatica) বিশেষ করে বাম পায়ে, যা চেপে ধরলে বা তাপে কমে',
      'পেশীতে টান ধরা ও মাংসপেশী শক্ত হয়ে যাওয়া'
    ],
    aggravation: ['রাগ বা অসন্তোষে', 'খাওয়ার পর', 'সোজা হয়ে দাঁড়ালে'],
    amelioration: ['দ্বিগুণ হয়ে চেপে শুলে', 'ব্যথার স্থানে জোরে চাপ দিলে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Staph'],
      antidotes: ['Camphora', 'Chamomilla'],
      followsWell: ['Bell', 'Bry', 'Nux-v', 'Puls']
    },
    summary: 'পেট মোচড়ানো ব্যথা, সায়াটিকা এবং বাঁকা হয়ে চেপে ধরে উপশমে এটি এক নম্বর ওষুধ।'
  },

  'Cham': {
    id: 'Cham',
    name: 'Chamomilla',
    latinName: 'Matricaria Chamomilla',
    commonName: 'German Chamomile',
    keynotes: [
      'অসহনশীলতা ও প্রচণ্ড খিটখিটে স্বভাব (রোগী ব্যথা সহ্য করতেই পারে না)',
      'বাচ্চা কোলে তুলে নিয়ে নাড়ালে শান্ত হয় (Wants to be carried)',
      'এক গাল লাল ও গরম, অন্য গাল ফ্যাকাশে ও ঠান্ডা'
    ],
    organAffinities: ['Nervous System', 'Mind', 'Digestive Tract'],
    mindSymptoms: [
      'অত্যন্ত রাগি, খিটখিটে ও অসভ্য আচরণ',
      'কোনো জিনিস চাইলে পাওয়ার পর তা ছুঁড়ে ফেলে দেয়'
    ],
    headAndNeck: [
      'এক পাশের গাল লাল ও গরম, অপর পাশ ঠান্ডা',
      'শিশুদের দাঁত ওঠার সময় কান্নাকাটি ও কান ব্যথা'
    ],
    stomachAndAbdomen: [
      'দাঁত ওঠার সময় সবুজ, পচা ডিমের মতো দুর্গন্ধযুক্ত পায়খানা',
      'পেটে তীব্র বায়ু সঞ্চার ও পেট কামড়ানো'
    ],
    respiratory: [
      'রাগে বা কান্নার পর শুকনো, খসখসে কাশি'
    ],
    extremitiesAndSkin: [
      'বিছানার উত্তাপে পা বরফের মতো ঠান্ডা হলেও তা অনাবৃত রাখতে চায়',
      'ব্যথার স্থান অবশ হয়ে যাওয়া'
    ],
    aggravation: ['রাতে ও মধ্যরাতের আগে', 'উষ্ণতায়', 'রাগে ও খোলা বাতাসে'],
    amelioration: ['কোলে নিয়ে পায়চারি করলে বা নাড়ালে'],
    relationships: {
      complementary: ['Mag-c'],
      antidotes: ['Acon', 'Puls'],
      followsWell: ['Bell', 'Merc', 'Puls', 'Sulph']
    },
    summary: 'শিশুদের দাঁত ওঠার সময়ের কষ্ট, প্রচণ্ড খিটখিটে মেজাজ ও কোলে নিলে উপশমে অনন্য ওষুধ।'
  },

  'Hep-s': {
    id: 'Hep-s',
    name: 'Hepar Sulphur',
    latinName: 'Hepar Sulphuris Calcareum',
    commonName: 'Calcium Sulphide',
    keynotes: [
      'চরম ঠান্ডা কাতরতা—সামান্য বাতাস লাগলেই রোগ বাড়ে',
      'আক্রান্ত স্থানে বা গলায় কাঁটা ফোটার মতো তীব্র অনুভূতি',
      'ক্ষতে অতি দ্রুত পুঁজ হওয়ার প্রবণতা ও স্পর্শকাতরতা'
    ],
    organAffinities: ['Glands', 'Skin', 'Respiratory Membranes'],
    mindSymptoms: [
      'প্রচণ্ড হিংস্র ও খিটখিটে, সামান্য কথাতেই উত্তেজিত হয়ে পড়ে',
      'সহজে ধৈর্য হারিয়ে ফেলে'
    ],
    headAndNeck: [
      'গলায় কিছু গিলতে গেলে হাড় বা কাঁটা ফোটার মতো ব্যথা',
      'কান পাকা ও দুর্গন্ধযুক্ত স্রাব'
    ],
    stomachAndAbdomen: [
      'টক ও মসলাযুক্ত খাবার খাওয়ার ইচ্ছা',
      'মলদ্বারে ব্যথা ও কোষ্ঠকাঠিন্য'
    ],
    respiratory: [
      'শুষ্ক কাশি যা ঠান্ডা বাতাস গায়ে লাগলেই বাড়ে',
      'হাঁপানি ও বুকে কফের শব্দ'
    ],
    extremitiesAndSkin: [
      'সামান্য আঘাত বা আঁচড়েই ঘা ও পুঁজ হয়ে যায়',
      'ক্ষতের পাশে এত স্পর্শকাতর যে ছুঁতেও দেয় না'
    ],
    aggravation: ['ঠান্ডা বাতাসে', 'শরীরের অংশ অনাবৃত রাখলে', 'স্পর্শে'],
    amelioration: ['উষ্ণ কাপড়ে শরীর ও মাথা ঢেকে রাখলে', 'গরম সেকে'],
    relationships: {
      complementary: ['Calendula'],
      antidotes: ['Bell', 'Chamomilla'],
      followsWell: ['Bell', 'Lyc', 'Sil', 'Sulph']
    },
    summary: 'চরম শীতকাতরতা, ক্ষতে পুঁজ হওয়ার প্রবণতা ও গলায় কাঁটা ফোটার অনুভূতিতে সেরা সমাধান।'
  },

  'Dro': {
    id: 'Dro',
    name: 'Drosera Rotundifolia',
    latinName: 'Drosera Rotundifolia',
    commonName: 'Sundew',
    keynotes: [
      'প্যারক্সিসমাল কাশি যা একটার পর একটা ধাক্কায় আসে (Rapid succession of coughs)',
      'শুয়ে পড়ার পরেই কাশির প্রচণ্ড তীব্রতা শুরু হয়',
      'কাশি দিতে দিতে বমি হওয়া বা দম বন্ধ হয়ে যাওয়া (Whooping cough)'
    ],
    organAffinities: ['Respiratory Tract', 'Larynx', 'Lungs'],
    mindSymptoms: [
      'উদ্বেগ ও অস্থিরতা, ছোটখাটো বিষয়ে চিন্তিত হওয়া',
      'শঙ্কিত মেজাজ'
    ],
    headAndNeck: [
      'কাশি দেওয়ার সময় কপালে ও মাথায় তীব্র যন্ত্রণা'
    ],
    stomachAndAbdomen: [
      'কাশির দমকায় পেটের মাংসপেশীতে তীব্র ব্যথা ও বমি'
    ],
    respiratory: [
      'খসখসে, শুকনো কাশি যা গলার ভেতরে উসখুস ভাব থেকে শুরু হয়',
      'কাশি দিতে দিতে মুখ নীল হয়ে যাওয়া এবং শ্বাসনালীতে খিঁচুনি'
    ],
    extremitiesAndSkin: [
      'হাতে-পায়ে জয়েন্টে ব্যথা যা হাঁটাচলায় বাড়ে'
    ],
    aggravation: ['শুয়ে পড়লে', 'মধ্যরাতের পর', 'কথা বললে বা হাসলে', 'উষ্ণতায়'],
    amelioration: ['খোলা বাতাসে', 'বসে থাকলে'],
    relationships: {
      complementary: ['Nux-v'],
      antidotes: ['Camphora'],
      followsWell: ['Calc-c', 'Puls', 'Sulph']
    },
    summary: 'হুপ কাশি (Whooping cough), শুলেই কাশির বেগ এবং একের পর এক কাশির ধাক্কায় এক নম্বর ওষুধ।'
   },
  'Apis': {
    id: 'Apis',
    name: 'Apis Mellifica',
    latinName: 'Apis Mellifica',
    commonName: 'Honey Bee',
    keynotes: [
      'মৌমাছির হুল ফোটার মতো হুলফোটানো ও জ্বালাকর ব্যথা (Stinging and burning pain)',
      'আক্রান্ত স্থান অতিরিক্ত ফোলা ও থলথলে (Edematous swelling)',
      'পিপাসাহীনতা এবং উত্তাপ সহ্য করতে না পারা'
    ],
    organAffinities: ['Cellular Tissue', 'Skin', 'Kidneys', 'Serous Membranes'],
    mindSymptoms: [
      'অকারণ কান্নাকাটি ও চিৎকার করে ওঠা (বিশেষ করে ঘুমের মধ্যে)',
      'মনোযোগের অভাব এবং হাত থেকে জিনিসপত্র পড়ে যাওয়া'
    ],
    headAndNeck: [
      'চোখের পাতা ফুলে থলে ঝুলার মতো হওয়া',
      'গলা লাল, ফোলা ও গিলে খেতে হুলফোটানো ব্যথা'
    ],
    stomachAndAbdomen: [
      'পেটে স্পর্শকাতরতা, সামান্য চাপও সহ্য হয় না',
      'প্রচণ্ড জ্বালাপোড়া থাকলেও একদম পানির পিপাসা না থাকা'
    ],
    respiratory: [
      'বুকে চাপ ও দমবন্ধ ভাব, যেন পরবর্তী নিঃশ্বাস নিতে পারবে না'
    ],
    extremitiesAndSkin: [
      'ত্বকে লালচে চাকা ফোলা বা আমবাত (Urticaria)',
      'হাত-পা অতিরিক্ত ফুলে যাওয়া এবং গরম সেকে কষ্ট বৃদ্ধি'
    ],
    aggravation: ['উত্তাপ ও গরম ঘরে', 'স্পর্শে', 'বিকেলে (বিকেল ৪টায়)'],
    amelioration: ['ঠান্ডা পানি ব্যবহারে', 'খোলা বাতাসে'],
    relationships: {
      complementary: ['Nat-m'],
      antidotes: ['Lach'],
      followsWell: ['Bry', 'Graph', 'Lyco', 'Puls']
    },
    summary: 'হুলফোটানো ব্যথা, থলথলে ফোলাভাব, পিপাসাহীনতা এবং ঠান্ডা প্রয়োগে উপশমে অতুলনীয় ওষুধ।'
  },

  'Canth': {
    id: 'Canth',
    name: 'Cantharis Vesicatoria',
    latinName: 'Cantharis Vesicatoria',
    commonName: 'Spanish Fly',
    keynotes: [
      'মূত্রনালীতে প্রচণ্ড জ্বালাপোড়া ও ফোঁটা ফোঁটা প্রস্রাব (Intense burning in urinary tract)',
      'প্রস্রাবের তীব্র ও অবিরত বেগ কিন্তু প্রস্রাব কম হওয়া',
      'আগুনে পোড়া ক্ষত বা ফোস্কা পড়া'
    ],
    organAffinities: ['Urinary Tract', 'Kidneys', 'Skin', 'Mucous Membranes'],
    mindSymptoms: [
      'প্রচণ্ড অস্থিরতা ও উন্মাদনার ভাব',
      'রোগী রাগে কামড়াতে বা আঘাত করতে চায়'
    ],
    headAndNeck: [
      'মুখের ভেতরে ও গলায় অতিরিক্ত জ্বালাপোড়া',
      'তরল খাবার গিলতে ভয় ও কষ্ট'
    ],
    stomachAndAbdomen: [
      'পাকস্থলী ও পেটে আগুনের মতো জ্বালা',
      'মলত্যাগের সময় ও পরে মলদ্বারে তীব্র জ্বালাপোড়া'
    ],
    respiratory: [
      'কাশি দেওয়ার সময় বুকে তীব্র জ্বালা ও কফ কাঁচা রক্তযুক্ত'
    ],
    extremitiesAndSkin: [
      'চামড়ায় পোড়াজনিত রসে ভরা ফোস্কা',
      'ক্ষতে হাত দেওয়া মাত্র তীব্র যন্ত্রণা'
    ],
    aggravation: ['প্রস্রাব করার সময় ও পরে', 'পানি পানে', 'স্পর্শে'],
    amelioration: ['পিঠে হালকা ম্যাসাজ করলে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Bell'],
      antidotes: ['Camphora'],
      followsWell: ['Bell', 'Merc', 'Puls', 'Sep']
    },
    summary: 'প্রস্রাবের তীব্র জ্বালাপোড়া, ইনফেকশন এবং আগুনে পোড়া ফোস্কার প্রধান ও দ্রুত কার্যকর ওষুধ।'
  },

  'Kali-b': {
    id: 'Kali-b',
    name: 'Kali Bichromicum',
    latinName: 'Kali Bichromicum',
    commonName: 'Potassium Bichromate',
    keynotes: [
      'ঘন, আঠালো ও সুতার মতো লম্বা হয়ে আসা শ্লেষ্মা (Ropy, stringy discharges)',
      'ব্যথা ছোট একটি নির্দিষ্ট পয়েন্টে সীমাবদ্ধ থাকা (Pain in small spots)',
      'নাকের গোড়ায় চাপ ও সাইনুসাইটিসের কষ্ট'
    ],
    organAffinities: ['Mucous Membranes', 'Respiratory Tract', 'Bones', 'Skin'],
    mindSymptoms: [
      'মেজাজ খিটখিটে, বিষণ্ণ ও কাজকর্মে অলসতা',
      'নিয়মানুবর্তিতা ও নির্দিষ্ট রুটিন পছন্দ করে'
    ],
    headAndNeck: [
      'নাকের গোড়ায় (Root of nose) তীব্র চাপ ও ব্যথার অনুভূতি',
      'চোখের ওপর নির্দিষ্ট এক বিন্দুতে ব্যথার কেন্দ্রবিন্দু'
    ],
    stomachAndAbdomen: [
      'মদ বা বিয়ার পানের পর পেটে গোলযোগ ও বমি',
      'পাকস্থলীতে গোল ক্ষতের (Round ulcer) মতো ব্যথা'
    ],
    respiratory: [
      'কাশি দিলে হলুদ, চটচটে কফ ওঠে যা টেনে লম্বা করা যায়',
      'শ্বাসনালীতে শুকনো ও ঘড়ঘড়ে কাশি'
    ],
    extremitiesAndSkin: [
      'ত্বকে গভীর গোল গোল ক্ষত বা ক্ষতের ওপর কড়া পড়া',
      'বাতের ব্যথা যা হঠাৎ আসে এবং স্থান পরিবর্তন করে'
    ],
    aggravation: ['সকালে (বিশেষ করে সকালে উঠলে)', 'গরম আবহাওয়ায়', 'মদ পানে'],
    amelioration: ['উষ্ণতায়', 'খোলা বাতাসে'],
    relationships: {
      complementary: ['Ars'],
      antidotes: ['Ars', 'Puls'],
      followsWell: ['Ant-t', 'Berb', 'Puls']
    },
    summary: 'সুতার মতো চটচটে কফ, সাইনুসাইটিস এবং ছোট কোনো নির্দিষ্ট পয়েন্টের ব্যথায় প্রধান ওষুধ।'
  },

  'Ant-t': {
    id: 'Ant-t',
    name: 'Antimonium Tartaricum',
    latinName: 'Antimonium Tartaricum',
    commonName: 'Tartar Emetic',
    keynotes: [
      'বুকে প্রচুর শ্লেষ্মার ঘড়ঘড় শব্দ কিন্তু কফ তুলে বের করতে না পারা (Rattling of mucus)',
      'চরম দুর্বলতা, তন্দ্রাচ্ছন্নতা ও ফ্যাকাশে ঠান্ডা ঘাম',
      'জিহ্বায় ঘন সাদা আস্তরণ ও বমি ভাব'
    ],
    organAffinities: ['Respiratory System', 'Pneumogastric Nerve', 'Skin'],
    mindSymptoms: [
      'বাচ্চারা কেউ স্পর্শ করলে বা কাছে আসলে রেগে কেঁদে ওঠে',
      'অত্যধিক নিস্তেজ ভাব ও ঝিমুনি'
    ],
    headAndNeck: [
      'মুখমণ্ডল ফ্যাকাশে, নীলচে এবং ঠান্ডা ঘামে ভেজা',
      'জিহ্বা সাদা প্রলেপযুক্ত ও লাল প্রান্ত'
    ],
    stomachAndAbdomen: [
      'প্রচণ্ড বমি ভাব, বমি করলে সাময়িক স্বস্তি',
      'আপেল বা টক জিনিস খাওয়ার ইচ্ছা'
    ],
    respiratory: [
      'বুকে এত কফ জমায় ঘড়ঘড় শব্দ হয়, মনে হয় ফুসফুস কফে ভরা কিন্তু উঠতে চায় না',
      'শ্বাসকষ্টের কারণে শিশু উঠে বসতে বাধ্য হয়'
    ],
    extremitiesAndSkin: [
      'শরীরের অঙ্গপ্রত্যঙ্গ ঠান্ডা ও অবসন্ন',
      'চামড়ায় গুটি বসন্তের মতো ফোস্কা বা পিঁড়কা'
    ],
    aggravation: ['শুয়ে থাকলে', 'গরম ঘরে', 'রাতে ও সকালে'],
    amelioration: ['ডান পাশে শুলে', 'কফ কিছুটা উঠে গেলে', 'বসে থাকলে'],
    relationships: {
      complementary: ['Ipecac'],
      antidotes: ['Puls', 'Sep'],
      followsWell: ['Bar-c', 'Ip', 'Puls']
    },
    summary: 'বুকে প্রচুর কফের ঘড়ঘড়ে শব্দ, চরম দুর্বলতা এবং কফ তুলতে না পারার ক্ষেত্রে প্রাকৃতিক প্রথম পছন্দ।'
  },

 'Hyper': {
    id: 'Hyper',
    name: 'Hypericum Perforatum',
    latinName: 'Hypericum Perforatum',
    commonName: 'St. John\'s Wort',
    keynotes: [
      'স্নায়ুসমৃদ্ধ স্থানে আঘাত (Injuries to nerve-rich areas like fingers, spine)',
      'তীব্র ও বিদ্যুৎ চমকানোর মতো ছড়িয়ে পড়া ব্যথা (Shooting, darting pains)',
      'আঙুল, মেরুদণ্ড বা শক্ত স্থানে আঘাতের পর তীব্র যন্ত্রণায় সেরা'
    ],
    organAffinities: ['Nerves', 'Spinal Cord', 'Brain'],
    mindSymptoms: [
      'মেজাজ বিষণ্ণ, মাথার ওপর হালকা ভার বোধ',
      'আঘাতের পর প্রচণ্ড মানসিক আতঙ্ক'
    ],
    headAndNeck: [
      'মাথার পেছনের অংশে ও মেরুদণ্ডের গোড়ায় আঘাতজনিত ব্যথা',
      'দাঁত তোলার পর স্নায়ুতে তীব্র টান ধরা ব্যথা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে চাপ ও অস্বস্তি অনুভব'
    ],
    respiratory: [
      'আঘাতের পর বা কুয়াশাচ্ছন্ন আবহাওয়ায় হাঁপানি বা কাশি'
    ],
    extremitiesAndSkin: [
      'হাতের বা পায়ের আঙুল থেঁতলে যাওয়ার পর তীক্ষ্ণ ব্যথা যা ওপরের দিকে উঠে যায়',
      'মেরুদণ্ডে (Coccyx) আঘাত পেয়ে বসে থাকতে না পারা'
    ],
    aggravation: ['আর্দ্র ও ঠান্ডা আবহাওয়ায়', 'কুয়াশায়', 'স্পর্শ ও চাপ লাগলে'],
    amelioration: ['মাথা পেছনের দিকে হেলালে'],
    relationships: {
      complementary: ['Arnica'],
      antidotes: ['Ars'],
      followsWell: ['Arn', 'Calend', 'Rhus-t']
    },
    summary: 'আঙুলের ডগা, মেরুদণ্ড বা স্নায়ুপ্রধান জায়গায় আঘাত ও বিদ্যুৎ চমকানোর মতো ব্যথায় প্রধান ওষুধ।'
 },
  'Led': {
    id: 'Led',
    name: 'Ledum Palustre',
    latinName: 'Ledum Palustre',
    commonName: 'Wild Rosemary',
    keynotes: [
      'ধারালো অস্ত্র, পেরেক, হুল বা কামড়ের মাধ্যমে সূঁচালো ক্ষত (Puncture wounds)',
      'আক্রান্ত স্থান ঠান্ডা হওয়া সত্ত্বেও বরফ বা ঠান্ডা প্রয়োগে উপশম',
      'নিচের অঙ্গ থেকে ওপরের দিকে ছড়িয়ে পড়া বাতের ব্যথা'
    ],
    organAffinities: ['Fibrous Tissue', 'Joints', 'Skin', 'Capillaries'],
    mindSymptoms: [
      'একাকী থাকতে চায়, খিটখিটে মেজাজ',
      'অশান্ত মানসিক অবস্থা ও অন্যকে সহ্য করতে না পারা'
    ],
    headAndNeck: [
      'মাথায় চোটের ফলে চোখে বা কপালে রক্তজমাট দাগ',
      'চোখের পাতায় বা চোখের পাশে আঘাত'
    ],
    stomachAndAbdomen: [
      'মদ বা অ্যালকোহল পানের স্পৃহা',
      'পেটে খালি অনুভব'
    ],
    respiratory: [
      'কাশি দেওয়ার সাথে সাথে দম আটকে আসা এবং রক্তযুক্ত কফ'
    ],
    extremitiesAndSkin: [
      'পায়ের গোড়ালি বা জয়েন্টে তীব্র বাতের ব্যথা যা ওপরের দিকে ওঠে',
      'কীটপতঙ্গের কামড়, কুকুরের কামড় বা পেরেকের আঘাতের জায়গা রক্তশূন্য ও ঠান্ডা'
    ],
    aggravation: ['বিছানার উত্তাপে', 'রাতে', 'আক্রান্ত স্থান ঢেকে রাখলে'],
    amelioration: ['বরফ ঠান্ডা পানি প্রয়োগে', 'ঠান্ডা বাতাসে'],
    relationships: {
      complementary: ['Sulph'],
      antidotes: ['Camphora'],
      followsWell: ['Arn', 'Bell', 'Rhus-t']
    },
    summary: 'সূঁচালো ক্ষত, পতঙ্গের কামড় এবং বরফ ঠান্ডা সেকে কমে এমন বাতের ব্যথায় সেরা সমাধান।'
  },

  'Ruta': {
    id: 'Ruta',
    name: 'Ruta Graveolens',
    latinName: 'Ruta Graveolens',
    commonName: 'Rue',
    keynotes: [
      'লিগামেন্ট, টেন্ডন ও হাড়ের ওপরের পাতলা আবরণের (Periosteum) আঘাত',
      'অতিরিক্ত চোখের ব্যবহারে চোখের ওপর তীব্র চাপ ও ক্লান্তি (Eye strain)',
      'হাড় ও জয়েন্টে চরম থেঁতলে যাওয়ার মতো ব্যথা'
    ],
    organAffinities: ['Periosteum', 'Tendons', 'Cartilage', 'Eyes'],
    mindSymptoms: [
      'অসন্তুষ্ট মেজাজ, নিজের ও অন্যের ওপর খিটখিটে ভাব',
      'সবকিছুতেই ভুল ও সন্দেহ খোঁজার প্রবণতা'
    ],
    headAndNeck: [
      'সূক্ষ্ম কাজ বা পড়ালেখার পর চোখে তীব্র ব্যথা ও লালচে ভাব',
      'চোখের পেছনের পেশীতে টান অনুভব'
    ],
    stomachAndAbdomen: [
      'মলদ্বারের পক্ষাঘাতগ্রস্ত ভাব, মলত্যাগের সময় বা ভারী বোঝা তুললে মলদ্বার বেরিয়ে আসা (Prolapsus ani)'
    ],
    respiratory: [
      'বুকে কাঁচা ও থেঁতলে যাওয়া ব্যথা'
    ],
    extremitiesAndSkin: [
      'কব্জি ও গোড়ালির লিগামেন্ট মচকানো বা টান খাওয়া (Sprains & Strains)',
      'পিঠে ও হাড়ে এত ব্যথা যে রোগী একটানা এক জায়গায় শুয়ে থাকতে পারে না'
    ],
    aggravation: ['ঠান্ডা ও স্যাঁতসেঁতে আবহাওয়ায়', 'চোখের অতিরিক্ত ব্যবহারে', 'বিশ্রামে'],
    amelioration: ['উষ্ণতায়', 'অনবরত নড়াচড়ায়'],
    relationships: {
      complementary: ['Calc-p'],
      antidotes: ['Camphora'],
      followsWell: ['Arn', 'Calc-c', 'Rhus-t', 'Symph']
    },
    summary: 'লিগামেন্ট মচকানো, অতিরিক্ত পড়ার পর চোখে ব্যথা এবং হাড়ে আঘাতজনিত ব্যথায় নির্ভরযোগ্য।'
  },

  'Gels': {
    id: 'Gels',
    name: 'Gelsemium Sempervirens',
    latinName: 'Gelsemium Sempervirens',
    commonName: 'Yellow Jasmine',
    keynotes: [
      'চরম শারীরিক ও মানসিক অলসতা, দুর্বলতা ও ঝিমুনি (Dullness, Dizziness, Drowsiness)',
      'পরীক্ষা বা যেকোনো ভয়ের দুঃসংবাদে পেটের গণ্ডগোল ও হাত-পা কাঁপা',
      'প্রস্রাব বেশি হলে মাথাব্যথা ও কষ্টের উপশম'
    ],
    organAffinities: ['Nerves', 'Motor System', 'Brain', 'Mucous Membranes'],
    mindSymptoms: [
      'ভয়, দুঃসংবাদ বা আশঙ্কায় শরীর অবশ ভাব ও ডায়রিয়া',
      'মানসিক স্থিরতার অভাব ও একা থাকার অনিচ্ছা'
    ],
    headAndNeck: [
      'মাথার পেছন থেকে (Occiput) শুরু হয়ে কপাল ও চোখের ওপর নেমে আসা মাথাব্যথা',
      'চোখের পাতা ভারী হয়ে নেমে আসা, চোখ খুলে রাখতে না পারা'
    ],
    stomachAndAbdomen: [
      'ভয় পেয়ে পাতলা পায়খানা হওয়া',
      'পাকস্থলীতে খালি ও ফাঁপা অনুভব'
    ],
    respiratory: [
      'শ্বাসকষ্টের সাথে মনে হয় হৃদপিণ্ড থেমে যাবে যদি না রোগী হাঁটাচলা করে'
    ],
    extremitiesAndSkin: [
      'হাত-পায়ের পেশীতে চরম দুর্বলতা, কাঁপুনি ও নিয়ন্ত্রণহীনতা',
      'জ্বরের সময় রোগী একটুও পানি খেতে চায় না (পিপাসাহীনতা)'
    ],
    aggravation: ['ভয় ও দুঃসংবাদে', 'আর্দ্র ও গরম আবহাওয়ায়', 'সকালে'],
    amelioration: ['প্রচুর প্রস্রাব হলে', 'খোলা বাতাসে', 'নড়াচড়ায়'],
    relationships: {
      complementary: ['Argentum Nitricum'],
      antidotes: ['Atropia', 'Coffea'],
      followsWell: ['Bapt', 'Cact', 'Ipecac']
    },
    summary: 'ঝিমুনি, কাঁপানো দুর্বলতা, পরীক্ষা-ভীতি এবং প্রচুর প্রস্রাবের পর মাথাব্যথা কমার প্রধান ওষুধ।'
  },

  'Arg-n': {
    id: 'Arg-n',
    name: 'Argentum Nitricum',
    latinName: 'Argentum Nitricum',
    commonName: 'Silver Nitrate',
    keynotes: [
      'যেকোনো ইভেন্ট বা ইন্টারভিউয়ের আগে চরম মানসিক অস্থিরতা ও পাতলা পায়খানা (Anticipatory anxiety)',
      'মিষ্টি খাওয়ার প্রচণ্ড ইচ্ছা, কিন্তু মিষ্টি খেলে রোগ বৃদ্ধি পায়',
      'মনে হয় সময় খুব ধীরে কাটছে এবং উঁচু ভবন থেকে নিচে পড়ে যাওয়ার ভয়'
    ],
    organAffinities: ['Brain', 'Nerves', 'Mucous Membranes', 'Digestive Tract'],
    mindSymptoms: [
      'কোনো নির্দিষ্ট স্থানে পৌঁছানোর তাড়া বা তাড়াহুড়ো মেজাজ',
      'উঁচু দালান দেখলে বা ব্রিজের ওপর দিয়ে হাঁটতে প্রচণ্ড ভয়'
    ],
    headAndNeck: [
      'মাথা এত বড় হয়ে গেছে বলে মনে হওয়া, যা শক্ত করে পট্টি বাঁধলে কমে',
      'চোখ ওঠা ও চোখ থেকে ঘন পুঁজ পড়া'
    ],
    stomachAndAbdomen: [
      'পেটে প্রচুর গ্যাস সঞ্চার ও বিকট শব্দে ঢেকুর ওঠা',
      'মিষ্টি পানের পর পেট ফাঁপা ও উদরাময়'
    ],
    respiratory: [
      'গলায় শ্লেষ্মা বা কাঠি ফোটার মতো অনুভূতি ও কাশি'
    ],
    extremitiesAndSkin: [
      'পায়ের পেশীতে দুর্বলতা ও হাঁটার সময় টলমল ভাব',
      'ত্বক তামাটে বা নীলচে ভাব ধরা'
    ],
    aggravation: ['মিষ্টি খেলে', 'গরম ঘরে', 'মানসিক উত্তেজনায় ও চিন্তায়'],
    amelioration: ['খোলা বাতাসে', 'ঠান্ডা পানিতে ধুলে', 'শক্ত করে চাপ দিলে'],
    relationships: {
      complementary: ['Nat-m'],
      antidotes: ['Nat-m'],
      followsWell: ['Bry', 'Calc-c', 'Lyc', 'Puls']
    },
    summary: 'পরীক্ষা বা অনুষ্ঠানের আগের উৎকণ্ঠা, মিষ্টির স্পৃহা এবং পেটের বিকট ঢেকুরে মহৌষধ।'
  },

  'Phos-ac': {
    id: 'Phos-ac',
    name: 'Phosphoricum Acidum',
    latinName: 'Acidum Phosphoricum',
    commonName: 'Phosphoric Acid',
    keynotes: [
      'গভীর মানসিক শোক, দুঃখ বা প্রেমে ব্যর্থতা পরবর্তী শারীরিক ও মানসিক বিপর্যয় (Grief & disappointment)',
      'প্রচণ্ড দুর্বলতা থাকা সত্ত্বেও পাতলা পায়খানায় রোগী কাহিল হয় না',
      'অকালপক্কতা, চুল পড়ে যাওয়া এবং প্রস্রাব দুধের মতো সাদা হওয়া'
    ],
    organAffinities: ['Nerves', 'Mind', 'Male Organs', 'Bones'],
    mindSymptoms: [
      'সম্পূর্ণ উদাসীনতা—কারো সাথে কথা বলতে চায় না, নির্জীবের মতো পড়ে থাকে',
      'মানসিক শক বা শোক থেকে স্মৃতিলোপ ও অবসাদ'
    ],
    headAndNeck: [
      'অতিরিক্ত পড়ার কারণে কপালে ভারী মাথাব্যথা',
      'অকালে চুল পেকে যাওয়া ও অতিরিক্ত চুল পড়া'
    ],
    stomachAndAbdomen: [
      'ব্যথাহীন পাতলা পায়খানা যা অতিরিক্ত হওয়া সত্ত্বেও রোগী দুর্বল অনুভব করে না',
      'টক ও রসালো ফল খাওয়ার ইচ্ছা'
    ],
    respiratory: [
      'বুকে দুর্বলতার অনুভূতি ও কাশি'
    ],
    extremitiesAndSkin: [
      'শারীরিক রসক্ষয় (যেমন অতিরিক্ত শুক্রক্ষয়) পরবর্তী হাত-পা কাঁপা',
      'প্রস্রাব কিছুক্ষণ রেখে দিলে দুধের মতো সাদা থিতানি পড়া'
    ],
    aggravation: ['মানসিক শোকে', 'শারীরিক রসক্ষয়ে', 'কথা বললে'],
    amelioration: ['উষ্ণতায়', 'স্বল্প সময় ঘুমালে'],
    relationships: {
      complementary: ['China'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Bell', 'Chin', 'Ign', 'Lyc', 'Nux-v']
    },
    summary: 'মানসিক শোকের কুফল, উদাসীনতা এবং শারীরিক রসক্ষয়জনিত দুর্বলতায় প্রথম সারির ওষুধ।'
   },
  'Bapt': {
    id: 'Bapt',
    name: 'Baptisia Tinctoria',
    latinName: 'Baptisia Tinctoria',
    commonName: 'Wild Indigo',
    keynotes: [
      'শারীরিক ও মানসিক অঙ্গপ্রত্যঙ্গ বিচ্ছিন্ন বা টুকরো হয়ে ছড়িয়ে ছিটিয়ে আছে বলে মনে হওয়া',
      'শরীরের সমস্ত নিঃসৃত বস্তু (যেমন: মুখব্যাধি, পায়খানা, ঘাম) তীব্র দুর্গন্ধযুক্ত',
      'টাইফয়েড বা বিষাক্ত জ্বরে আচ্ছন্নতা এবং বিছানা শক্ত মনে হওয়া'
    ],
    organAffinities: ['Blood', 'Gastrointestinal Tract', 'Glands', 'Mind'],
    mindSymptoms: [
      'মনে করে সে দ্বিখণ্ডিত হয়ে গেছে বা তার হাত-পা ছড়িয়ে পড়েছে এবং সে তা এক জায়গায় করতে চেষ্টা করে',
      'প্রশ্ন করলে উত্তর দিতে দিতেই আচ্ছন্ন বা ঘুমিয়ে পড়ে'
    ],
    headAndNeck: [
      'মুখের ভেতর ও গলার টনসিল পচে যাওয়ার মতো কালচে লাল ও দুর্গন্ধযুক্ত',
      'গলায় ব্যথাহীন অবস্থা, শুধু তরল বস্তু গিলতে পারে, শক্ত খাবার আটকায়'
    ],
    stomachAndAbdomen: [
      'পেটে প্রচণ্ড গ্যাস, পেট ফোলা ও ডানপাশে স্পর্শকাতরতা',
      'প্রচণ্ড দুর্গন্ধযুক্ত ও কালচে রঙের পাতলা পায়খানা'
    ],
    respiratory: [
      'বুকে চাপ ও দম বন্ধ ভাব, খোলা বাতাস চায়'
    ],
    extremitiesAndSkin: [
      'পেশীতে شدید পিটুনি বা থেঁতলে যাওয়ার মতো ব্যথা',
      'মুখমণ্ডল ও চোখ-মুখ লালচে, মাতালের মতো আচ্ছন্ন ভাব'
    ],
    aggravation: ['উষ্ণতায়', 'আর্দ্র গরমে', 'নড়াচড়ায়'],
    amelioration: ['বিশ্রামে'],
    relationships: {
      complementary: ['Crot-h'],
      antidotes: ['Bryonia'],
      followsWell: ['Ars', 'Bry', 'Echin', 'Rhus-t']
    },
    summary: 'টাইফয়েড জ্বর, বিষাক্ত সংক্রমণ, পচা দুর্গন্ধ এবং অঙ্গপ্রত্যঙ্গ ছড়িয়ে পড়ার অনুভূতিতে প্রধান ওষুধ।'
  },

  'Caly': {
    id: 'Caly',
    name: 'Calotropis Gigantea',
    latinName: 'Calotropis Gigantea',
    commonName: 'Madar',
    keynotes: [
      'কুষ্ঠরোগ, উপদংশ (Syphilis) এবং রক্ত দূষিত হওয়ার প্রধান ওষুধ',
      'পায়ের বুড়ো আঙুল ও জয়েন্টে তীব্র লালচে ফোলা এবং বাতের ব্যথা',
      'পেশী ও টিস্যু শুকিয়ে যাওয়া বা ক্ষয়ে যাওয়া (Atrophy)'
    ],
    organAffinities: ['Skin', 'Blood', 'Joints', 'Vascular System'],
    mindSymptoms: [
      'কাজে অনীহা ও বিষণ্ণতা',
      'মাথার ভেতর ফাঁপা ভাব'
    ],
    headAndNeck: [
      'মাথাব্যথা ও মাথা ঘোরানো বিশেষ করে গরমে',
      'কানের পেছনে ফোলা ও ব্যথা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে জ্বালাপোড়া ও গরম বোধ',
      'খাবারে অরুচি ও বমি ভাব'
    ],
    respiratory: [
      'বুক চেপে ধরা অনুভূতি ও শুকনো কাশি'
    ],
    extremitiesAndSkin: [
      'পায়ের রেখা ও হাড়ের ওপর শক্ত গুটলি বা ক্ষত',
      'ত্বক পুরু হয়ে যাওয়া, শক্ত হওয়া ও উপদংশজনিত চর্মরোগ'
    ],
    aggravation: ['আর্দ্রতায়', 'নড়াচড়ায়'],
    amelioration: ['বিশ্রামে', 'শুষ্ক আবহাওয়াতে'],
    relationships: {
      complementary: ['Merc', 'Thuja'],
      antidotes: ['Camphora'],
      followsWell: ['Berb', 'Sulph']
    },
    summary: 'রক্তদূষণ, সাইফিলিস, গভীর চর্মরোগ এবং কঠিন বাতের ব্যথায় অত্যন্ত কার্যকর।'
  },

  'Plumb': {
    id: 'Plumb',
    name: 'Plumbum Metallicum',
    latinName: 'Plumbum Metallicum',
    commonName: 'Lead',
    keynotes: [
      'পেট টানা ধরে মেরুদণ্ডের দিকে চ্যাপ্টা হয়ে যাওয়া (Abdomen retracted to spine)',
      'পেশী শুকিয়ে যাওয়া এবং কব্জি ঝুলে পড়া (Wrist drop / Paralysis)',
      'দাঁতের মাড়িতে স্পষ্ট নীলচে রেখা বা দাগ (Blue line on gums)'
    ],
    organAffinities: ['Nerves', 'Muscles', 'Blood', 'Digestive System'],
    mindSymptoms: [
      'স্মৃতিশক্তি দুর্বল হওয়া, মানসিক অক্ষমতা ও উদাসীনতা',
      'নীরব আচ্ছন্নতা ও প্রলাপ'
    ],
    headAndNeck: [
      'দাঁতের মাড়ির প্রান্তে নীল বা ছাই রঙের দাগ',
      'চোখের পেশী পক্ষাঘাতগ্রস্ত হওয়া'
    ],
    stomachAndAbdomen: [
      'পেটে তীব্র মোচড়ানো ব্যথা মনে হয় নাভি নাড়ি পেছনে পিঠের সাথে টেনে বাঁধা হচ্ছে',
      'প্রচণ্ড কোষ্ঠকাঠিন্য, মল একদম ভেড়ার লাদির মতো শক্ত ও গোল গোল'
    ],
    respiratory: [
      'গলায় পক্ষাঘাতের কারণে খাবার গিলতে কষ্ট'
    ],
    extremitiesAndSkin: [
      'হাতের কব্জির পেশী অবশ হয়ে হাত ঝুলে পড়া (Wrist drop)',
      'আক্রান্ত অঙ্গ শুকিয়ে সরু হয়ে যাওয়া (Extensive emaciation)'
    ],
    aggravation: ['নড়াচড়ায়', 'রাতে'],
    amelioration: ['শক্ত চাপে', 'পেট ডললে'],
    relationships: {
      complementary: ['Thuja'],
      antidotes: ['Alumina', 'Petr'],
      followsWell: ['Ars', 'Bell', 'Lyc', 'Puls']
    },
    summary: 'পক্ষাঘাত, কব্জি ঝুলে পড়া, পেট নাভির দিকে টেনে ধরা ব্যথা এবং নীলচে মাড়ির রেখায় মহৌষধ।'
  },

  'Con': {
    id: 'Con',
    name: 'Conium Maculatum',
    latinName: 'Conium Maculatum',
    commonName: 'Poison Hemlock',
    keynotes: [
      'গ্রন্থি বা গ্ল্যান্ড পাথরের মতো শক্ত হয়ে যাওয়া (Stony hard glands & Tumors)',
      'বিছানায় শুয়ে মাথা ঘোরালে বা এপাশ-ওপাশ ফিরলেই মাথাঘোরা (Vertigo on turning in bed)',
      'বয়স্কদের প্রস্টেট বৃদ্ধি ও মূত্রপ্রবাহ বারবার থেমে থেমে হওয়া'
    ],
    organAffinities: ['Glands', 'Nervous System', 'Eyes', 'Reproductive Organs'],
    mindSymptoms: [
      'স্মৃতিশক্তি দুর্বল, একাকী থাকতে চায় কিন্তু একা থাকতে ভয়ও পায়',
      'মানসিক কাজের প্রতি চরম অনিচ্ছা'
    ],
    headAndNeck: [
      'বিছানায় মাথা ঘোরালে বা চোখ নাড়ালেই চারপাশ ঘুরতে থাকা',
      'চোখে আলো সহ্য না হওয়া (Photophobia) কিন্তু চোখে কোনো প্রদাহ নেই'
    ],
    stomachAndAbdomen: [
      'স্তনে আঘাত লাগার পর শক্ত চাকা বা টিউমার তৈরি হওয়া',
      'প্রস্রাব করার সময় একবারে স্পষ্ট না হয়ে আটকে আটকে যাওয়া'
    ],
    respiratory: [
      'শুলেই কুপোকাত করা শুকনো কাশি, কফ একটুও ওঠে না'
    ],
    extremitiesAndSkin: [
      'পায়ের পেশী নিচ থেকে ওপরের দিকে অবশ হয়ে আসা',
      'ত্বকে শক্ত গুটলি ও গ্ল্যান্ড ফুলে যাওয়া'
    ],
    aggravation: ['বিছানায় মাথা ঘোরালে', 'রাতে শুলে', 'শারীরিক বা মানসিক চাপে'],
    amelioration: ['চলফেরা করলে', 'অঙ্গ ঝুলিয়ে বসলে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Bar-c'],
      antidotes: ['Nit-ac'],
      followsWell: ['Arn', 'Bell', 'Calc-c', 'Lyc', 'Puls', 'Rhus-t']
    },
    summary: 'বিছানায় মাথাঘোরা, পাথরের মতো শক্ত টিউমার/গ্ল্যান্ড এবং প্রস্টেটের সমস্যায় ১ নম্বর ওষুধ।'
  },

  'Crat': {
    id: 'Crat',
    name: 'Crataegus Oxyacantha',
    latinName: 'Crataegus Oxyacantha',
    commonName: 'Hawthorn Berry',
    keynotes: [
      'হৃদপিণ্ডের টনিক ও হৃদপেশীর শক্তি বৃদ্ধিকারক (Heart Tonic)',
      'সামান্য পরিশ্রমেই বুকে চাপ, ধড়ফড়ানি ও তীব্র শ্বাসকষ্ট',
      'উচ্চ রক্তচাপ ও অনিয়মিত স্পন্দন (Irregular pulse)'
    ],
    organAffinities: ['Heart', 'Blood Vessels', 'Circulatory System'],
    mindSymptoms: [
      'অত্যধিক মানসিক অস্থিরতা, বুক ধড়ফড়ের সাথে ভীতি',
      'মানসিক বিষণ্ণতা ও ক্লান্তি'
    ],
    headAndNeck: [
      'মাথার পেছনে তীব্র রগ টানা মাথাব্যথা ও মাথাঘোরা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে ঠাণ্ডা ভাব ও পেট ফাঁপা',
      'হৃদরোগের সাথে হজমের গোলযোগ'
    ],
    respiratory: [
      'সামান্য সিঁড়ি দিয়ে উঠলেই বা হাঁটলেই চরম শ্বাসকষ্ট',
      'বুকে হাত দিলে অনিয়মিত হৃদস্পন্দন অনুভব'
    ],
    extremitiesAndSkin: [
      'হাত-পা ঠান্ডা ও নীলচে ভাব ধারণ করা',
      'শরীরে পানি জমা বা ফোলা ভাব (Edema)'
    ],
    aggravation: ['গরম ঘরে', 'শারীরিক শ্রমে বা হাঁটাচলায়'],
    amelioration: ['খোলা বাতাসে', 'বিশ্রামে', 'শান্ত হয়ে বসে থাকলে'],
    relationships: {
      complementary: ['Cact'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Digitalis', 'Kalmia']
    },
    summary: 'হৃদপিণ্ডের দুর্বলতা, রক্তচাপের গোলযোগ এবং বুক ধড়ফড়ানির সেরা প্রাকৃতিক হার্ট টনিক।'
 },
 'Asc-t': {
    id: 'Asc-t',
    name: 'Asclepias Tuberosa',
    latinName: 'Asclepias Tuberosa',
    commonName: 'Pleurisy Root',
    keynotes: [
      'প্লুরাইসি বা ফুসফুসের আবরণে সূঁচ ফোটানোর মতো তীব্র ব্যথা (Pleuritic pain)',
      'বাম কাাঁধে ও বুকে শ্বাস নেওয়ার সময় তীব্র যন্ত্রণা',
      'আর্দ্র ও ঠান্ডা বাতাসে রোগ লক্ষণ বৃদ্ধি'
    ],
    organAffinities: ['Respiratory Organs', 'Serous Membranes', 'Digestive Tract'],
    mindSymptoms: [
      'অস্থিরতা ও কাজের প্রতি অনিচ্ছা',
      'বুকের ব্যথার কারণে হতাশা ও দুশ্চিন্তা'
    ],
    headAndNeck: [
      'মাথার পেছনে ভারী ভাব ও কপালে চাপ বোধ',
      'নাক দিয়ে সর্দি ও হাঁচি'
    ],
    stomachAndAbdomen: [
      'পেটে কামড়ানো ব্যথা ও মলে জলীয় ভাব',
      'পাকস্থলীতে গ্যাস্ট্রিকের কারণে ভার অনুভব'
    ],
    respiratory: [
      'গভীর শ্বাস নিলে বা কাশি দিলে বুকে সূঁচ ফোটানোর মতো ব্যথা',
      'শুকনো কাশি যা রাতে ও শুয়ে থাকলে বাড়ে'
    ],
    extremitiesAndSkin: [
      'জোড়ায় ও পেশীতে বাতের মতো ব্যথা',
      'চামড়া শুষ্ক কিন্তু সামান্য পরিশ্রমে ঘাম হওয়া'
    ],
    aggravation: ['গভীর নিঃশ্বাস নিলে', 'নড়াচড়ায়', 'ঠান্ডা বাতাসে'],
    amelioration: ['সামনে ঝুঁকলে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Bryonia'],
      antidotes: ['Camphora'],
      followsWell: ['Bry', 'Acon', 'Kali-c']
    },
    summary: 'ফুসফুসের আবরণের প্রদাহ (Pleurisy), বুকে সূঁচ ফোটানো ব্যথা ও শ্বাসকষ্টে দারুণ কার্যকর।'
  },

  'Brat-b': {
    id: 'Brat-b',
    name: 'Barosma Betulina',
    latinName: 'Barosma Betulina',
    commonName: 'Bucha',
    keynotes: [
      'মূত্রথলির প্রদাহ ও প্রস্টেট গ্রন্থির বাড়াবাড়ি (Cystitis & Prostatic trouble)',
      'প্রস্রাবে অতিরিক্ত আঠালো শ্লেষ্মা ও পুঁজের মতো তলানি',
      'প্রস্রাব করার সময় মূত্রনালীতে কাটার মতো তীব্র যন্ত্রণা'
    ],
    organAffinities: ['Urinary Tract', 'Kidneys', 'Prostate Gland'],
    mindSymptoms: [
      'প্রস্রাবের কষ্টের জন্য খিটখিটে মেজাজ',
      'অস্থিরতা ও শারীরিক অবসাদ'
    ],
    headAndNeck: [
      'মাথায় হালকা ঝিমুনি ভাব'
    ],
    stomachAndAbdomen: [
      'তলপেটে ভারী ভাব ও অস্বস্তি',
      'মূত্রথলির ওপর চাপ বোধ'
    ],
    respiratory: [
      'সাধারণ শ্বাসপ্রশ্বাস স্বাভাবিক কিন্তু দুর্বলতা অনুভব'
    ],
    extremitiesAndSkin: [
      'কোমর ও কিডনির জায়গায় চাবুক মারার মতো ব্যথা',
      'পায়ে পানির জমার ভাব বা ফোলা'
    ],
    aggravation: ['প্রস্রাব আটকে রাখলে', 'ঠান্ডা লাগলে'],
    amelioration: ['প্রস্রাব হয়ে গেলে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Cantharis'],
      antidotes: ['Camphora'],
      followsWell: ['Berb', 'Canth', 'Pareira']
    },
    summary: 'মূত্রথলির দীর্ঘস্থায়ী প্রদাহ, শ্লেষ্মাযুক্ত প্রস্রাব এবং প্রস্টেটের কষ্টে বিশ্বস্ত সমাধান।'
  },

  'Cact': {
    id: 'Cact',
    name: 'Cactus Grandiflorus',
    latinName: 'Cactus Grandiflorus',
    commonName: 'Night-Blooming Cereus',
    keynotes: [
      'হৃদপিণ্ডকে মনে হয় যেন লোহার ব্যান্ড বা তার দিয়ে শক্ত করে বাঁধা হচ্ছে (Constriction as if by an iron band)',
      'শরীরের বিভিন্ন অংশ থেকে তাজা লাল রক্তস্রাব',
      'দিন বা রাতের নির্দিষ্ট সময়ে রোগের আক্রমণ (Periodicity)'
    ],
    organAffinities: ['Heart', 'Blood Vessels', 'Circulatory System'],
    mindSymptoms: [
      'মৃত্যুভয় ও নিজেকে বাঁচানো অসম্ভব মনে করা',
      'হৃদরোগের কষ্টে কাঁদানুভূতি ও বিষণ্ণতা'
    ],
    headAndNeck: [
      'মাথার ওপর ভারী বস্তু চেপে রাখার মতো অনুভূতি',
      'মুখ লাল ও উত্তপ্ত বোধ হওয়া'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে চাপ ধরে রাখার মতো অনুভূতি',
      'যকৃতের স্থানে ভারী ভাব ও ব্যথা'
    ],
    respiratory: [
      'বুকে তীব্র চাপ ও দমবন্ধ ভাব, মনে হয় বুক খাঁচায় আটকে আছে',
      'কাশি দিলে তাজা লাল রক্ত ওঠা'
    ],
    extremitiesAndSkin: [
      'বাম হাত অবশ ভাব ও ঠান্ডা হয়ে যাওয়া',
      'শরীরের নিচের অংশে ফোলা বা শোথ'
    ],
    aggravation: ['দুপুর ১১টায় ও রাত ১১টায়', 'বাম পাশে শুলে', 'নড়াচড়ায়'],
    amelioration: ['খোলা বাতাসে', 'বিশ্রামে'],
    relationships: {
      complementary: ['Sulphur'],
      antidotes: ['Camphora'],
      followsWell: ['Acon', 'Ars', 'Digitalis']
    },
    summary: 'হৃদপিণ্ড লোহার খাঁচায় বন্দি অনুভূতি, বুক ধড়ফড়ানি ও রক্তস্রাবের চমৎকার মেডিসিন।'
  },

  'Cund': {
    id: 'Cund',
    name: 'Cundurango',
    latinName: 'Marsdenia Cundurango',
    commonName: 'Condor Plant',
    keynotes: [
      'মুখের কোণে ফেটে যাওয়া ও গভীর ক্ষত (Fissures at angles of mouth)',
      'পাকস্থলীর ক্যান্সার বা আলসারের তীব্র জ্বালাপোড়া ও ব্যথা',
      'ত্বকের ওপর শক্ত গুটলি বা আলসার'
    ],
    organAffinities: ['Stomach', 'Digestive Tract', 'Skin', 'Mucous Membranes'],
    mindSymptoms: [
      'রোগ নিয়ে অতিরিক্ত উদ্বেগ ও ভয়',
      'বিষণ্ণতা ও নিরাশ মানসিক ভাব'
    ],
    headAndNeck: [
      'ঠোঁট ও মুখের কোণে বেদনাদায়ক ফাটল',
      'জিহ্বায় ও গলার ঘা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে আগুন জ্বলার মতো ব্যথা ও খাবার খেলে বমি হওয়া',
      'কালো বা কফির গুঁড়োর মতো বমি'
    ],
    respiratory: [
      'বুকে ছাঁকানো বা ক্ষতের মতো ব্যথা'
    ],
    extremitiesAndSkin: [
      'ত্বকে গভীর ক্ষত যার চারপাশ শক্ত ও উঁচু',
      'স্তনগ্রন্থিতে শক্ত গুটলি'
    ],
    aggravation: ['খাবার গ্রহণের পর', 'স্পর্শে'],
    amelioration: ['বিশ্রামে', 'উষ্ণ পানে'],
    relationships: {
      complementary: ['Hydrastis'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Hydr', 'Thuja']
    },
    summary: 'পাকস্থলীর আলসার/ক্যান্সার, মুখের কোণে ফাটল ও শক্ত ঘা তৈরিতে প্রধান কার্যকর ওষুধ।'
  },

  'Echin': {
    id: 'Echin',
    name: 'Echinacea Angustifolia',
    latinName: 'Echinacea Angustifolia',
    commonName: 'Purple Cone-Flower',
    keynotes: [
      'রক্ত পরিষ্কারক ও বিষাক্ত সংক্রমণের মহৌষধ (Blood purifier & Anti-septic)',
      'পচা ঘা, গ্যাংগ্রিন, সাপের কামড় বা পোকামাকড়ের কামড়ে বিষক্রিয়া',
      'শরীরের প্রতিরোধ ক্ষমতা একদম কমে যাওয়া'
    ],
    organAffinities: ['Blood', 'Immune System', 'Skin', 'Lymphatics'],
    mindSymptoms: [
      'মানসিক অলসতা, ভাবনায় বিভ্রান্তি',
      'বিষণ্ণতা ও খিটখিটে স্বভাব'
    ],
    headAndNeck: [
      'কপালে দপধপে মাথাব্যথা',
      'জিহ্বা শুকিয়ে যাওয়া এবং মুখে ঝাল বা ধাতব স্বাদ'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে টক ঢেকুর ও দুর্গন্ধযুক্ত বমি',
      'পেটে দুর্গন্ধযুক্ত গ্যাস ও পাতলা পায়খানা'
    ],
    respiratory: [
      'গলায় পচা ঘা ও গিলে খেতে তীব্র কষ্ট'
    ],
    extremitiesAndSkin: [
      'ছোট আঁচড় বা ক্ষত দ্রুত পচে ঘা বা ফোড়া হওয়া',
      'পোকামাকড় বা সাপের কামড়ে বিষ ছড়ানো প্রতিরোধে প্রখ্যাত'
    ],
    aggravation: ['ঠান্ডা লাগলে', 'শারীরিক পরিশ্রমে', 'বিকেলে'],
    amelioration: ['বিশ্রামে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Baptisia'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Bapt', 'Lach']
    },
    summary: 'রক্তদূষণ, সাপের কামড়, পচা ফোড়া ও সেপটিক সংক্রমণে প্রাকৃতিক অ্যান্টিসেপটিক ওষুধ।'
 }, 

  'Dios': {
    id: 'Dios',
    name: 'Dioscorea Villosa',
    latinName: 'Dioscorea Villosa',
    commonName: 'Wild Yam',
    keynotes: [
      'পেটে মোচড়ানো তীব্র ব্যথা যা সোজা হয়ে পেছনের দিকে কাত হলে বা পেছনে বাঁকালে কমে (Unbending or stretching back relieves)',
      'পাকস্থলী ও পিত্তথলির শূলবেদনা (Gallstone colic)',
      'বাত ও স্নায়ুশূল যা হঠাৎ স্থান পরিবর্তন করে'
    ],
    organAffinities: ['Digestive Tract', 'Liver', 'Nerves', 'Male Organs'],
    mindSymptoms: [
      'ব্যথার চোটে রোগী অস্থির ও খিটখিটে হয়ে পড়ে',
      'কাজে অমনোযোগ ও জড়তা'
    ],
    headAndNeck: [
      'কপালে ও চোখের ওপর শক্ত চাপ ধরে থাকা মাথাব্যথা'
    ],
    stomachAndAbdomen: [
      'পেটে তীব্র মোচড়ানো ব্যথা, রোগী সামনের দিকে ঝুঁকলে ব্যথা বাড়ে কিন্তু পেছন দিকে সোজা হয়ে হেললে কমে',
      'পিত্তথলির তীব্র ব্যথা যা বুক ও পিঠের দিকে ছড়িয়ে পড়ে'
    ],
    respiratory: [
      'পেট ব্যথার সাথে বুক চেপে ধরা শ্বাসকষ্ট'
    ],
    extremitiesAndSkin: [
      'আঙুলের জোড়ায় বাতের ব্যথা ও কড়া অনুভূতি',
      'সায়াটিকা ব্যথা যা পেছনের দিকে পা প্রসারিত করলে কমে'
    ],
    aggravation: ['সামনের দিকে ঝুঁকলে', 'বিশ্রামে', 'রাতে'],
    amelioration: ['পেছনের দিকে হেলে দাঁড়ালে বা টান টান হলে', 'হাঁটাচলা করলে'],
    relationships: {
      complementary: ['Chamomilla'],
      antidotes: ['Camphora'],
      followsWell: ['Coloc', 'Nux-v', 'Rhus-t']
    },
    summary: 'পেট ব্যথা ও সায়াটিকা যা পেছনের দিকে শরীর টান টান করলে উপশম হয়, তাতে এটি অতুলনীয়।'
  },

  'Glon': {
    id: 'Glon',
    name: 'Glonoinum',
    latinName: 'Glonoinum',
    commonName: 'Nitro-glycerine',
    keynotes: [
      'মাথায় তীব্র দপধপে ও ফেটে যাওয়ার মতো মাথাব্যথা (Throbbing, pulsating headache)',
      'রোদে ঘোরার কারণে বা রোদের উত্তাপে স্ট্রোক ও অসুস্থতা (Sunstroke)',
      'পরিচিত রাস্তাঘাট বা জায়গা হঠাৎ চিনতে না পারা (Lost in familiar places)'
    ],
    organAffinities: ['Brain', 'Blood Vessels', 'Heart', 'Circulation'],
    mindSymptoms: [
      'পরিচিত রাস্তায় বের হয়ে দিশেহারা হয়ে পড়া, কোথায় আছে বুঝতে না পারা',
      'প্রচণ্ড অস্থিরতা ও মাথা ফেটে যাওয়ার ভয়ে ছটফট করা'
    ],
    headAndNeck: [
      'রগ ফুলে ওঠা, রক্ত সঞ্চালনের কারণে মাথায় প্রচণ্ড দপধপে যন্ত্রণা',
      'মাথা নিচু করলে বা রোদে গেলে ব্যথা প্রচণ্ড বাড়ে'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে খালি ভাব ও বমি ভাব',
      'মাথাব্যথার সাথে পেট খালি অনুভব করা'
    ],
    respiratory: [
      'বুক ধড়ফড় করা যা সমস্ত শরীরে ছড়ায় এবং শ্বাসকষ্ট'
    ],
    extremitiesAndSkin: [
      'হাত-পায়ের রগ ও ধমনীতে স্পন্দন অনুভব করা',
      'শরীরে হঠাৎ অতিরিক্ত উত্তাপের ঝলক (Hot flashes)'
    ],
    aggravation: ['সূর্যের আলো ও গরমে', 'মাথা নিচু করলে', 'মদ পানে'],
    amelioration: ['খোলা বাতাসে', 'মাথায় ঠান্ডা পানি দিলে', 'উঁচু বালিশে মাথা রাখলে'],
    relationships: {
      complementary: ['Belladonna'],
      antidotes: ['Aconitum'],
      followsWell: ['Bell', 'Gels', 'Nux-v']
    },
    summary: 'সানস্ট্রোক, রোদ লেগে দপধপে মাথাব্যথা এবং রক্ত সঞ্চালনের দ্রুত গোলযোগে এক নম্বর ওষুধ।'
  },

  'Plat': {
    id: 'Plat',
    name: 'Platinum Metallicum',
    latinName: 'Platinum Metallicum',
    commonName: 'Platinum',
    keynotes: [
      'চরম অহংকার, গর্ব ও অন্যকে তুচ্ছজ্ঞান করার মানসিকতা (Arrogance & Haughtiness)',
      'মনে করে সে শারীরিক ও মানসিকভাবে সবার চেয়ে বড় এবং বাকি সবাই ছোট',
      'ব্যথা ধীরে ধীরে বাড়ে এবং ধীরে ধীরে কমে, সাথে অঙ্গ অবশ হওয়ার অনুভূতি'
    ],
    organAffinities: ['Mind', 'Nerves', 'Female Reproductive Organs'],
    mindSymptoms: [
      'প্রচণ্ড অহংকারী, আত্মম্ভরী ও অবজ্ঞাপূর্ণ আচরণ',
      'পরিচিত স্থান বা মানুষকেও অদ্ভুত ও ছোট মনে হওয়া'
    ],
    headAndNeck: [
      'কপাল ও কানের পেছনের অংশে অবশ বা চাপ ধরা ব্যথা',
      'চোখের চারেপাশে মাংসপেশী লাফানো'
    ],
    stomachAndAbdomen: [
      'ভ্রমণরত অবস্থায় বা ভ্রমণের পর কোষ্ঠকাঠিন্য (Traveler\'s constipation)',
      'মলদ্বারে মল আটকে থাকা কিন্তু বেগ না হওয়া'
    ],
    respiratory: [
      'বুকে চাপ ও দম বন্ধ হওয়ার মতো অনুভুতি'
    ],
    extremitiesAndSkin: [
      'শরীরের বিভিন্ন স্থানে ছোপ ছোপ অবশ অনুভূতি (Numbness)',
      'হাত-পা শক্ত হয়ে যাওয়া ও পক্ষাঘাতের মতো ভাব'
    ],
    aggravation: ['বিশ্রামে', 'সন্ধ্যায়', 'ঘরের ভেতরে'],
    amelioration: ['খোলা বাতাসে হাঁটাচলা করলে', 'নড়াচড়ায়'],
    relationships: {
      complementary: ['Sepia'],
      antidotes: ['Pulsatilla'],
      followsWell: ['Bell', 'Ign', 'Lyc', 'Puls', 'Sep']
    },
    summary: 'অহংকারী মনভাব, ভ্রমণের সময় কোষ্ঠকাঠিন্য ও অঙ্গ অবশ হওয়া ব্যথায় অন্যতম সেরা ওষুধ।'
  },

  'Pod': {
    id: 'Pod',
    name: 'Podophyllum Peltatum',
    latinName: 'Podophyllum Peltatum',
    commonName: 'May Apple',
    keynotes: [
      'প্রচুর পরিমাণে পচা দুর্গন্ধযুক্ত ও পানির মতো পাতলা পায়খানা (Profuse, gushing, fetid stool)',
      'পায়খানা করার পর রোগী চরম দুর্বল ও ফাঁকা অনুভব করে',
      'ভোরবেলা বা সকালে পায়খানার তীব্র বেগ হওয়া'
    ],
    organAffinities: ['Gastrointestinal Tract', 'Liver', 'Rectum'],
    mindSymptoms: [
      'যকৃৎ বা পেটের গোলযোগের কারণে চরম বিষণ্ণতা ও খিটখিটে মেজাজ',
      'অসুস্থতায় নিরানন্দ ভাব'
    ],
    headAndNeck: [
      'দাঁত ওঠার সময় শিশুরা দাঁতে দাঁত ঘসে বা কামড়ায়',
      'মাথা এপাশ-ওপাশ দোলাই করা (Head rolling)'
    ],
    stomachAndAbdomen: [
      'পেটে গুরগুর শব্দ ও তীব্র বায়ু সঞ্চার',
      'যকৃতের স্থানে ব্যথা যা ডান পাশে শুলে কমে, পিত্তবমি হওয়া'
    ],
    respiratory: [
      'পেটের অসুস্থতার সাথে কাশির উপসর্গ'
    ],
    extremitiesAndSkin: [
      'মলদ্বার বাইরে বেরিয়ে আসা (Prolapsus ani) বিশেষ করে পায়খানার পর',
      'চর্মরোগের সাথে পেটের উদরাময়ের পর্যায়ক্রম'
    ],
    aggravation: ['ভোরবেলা ও সকালে', 'গরম আবহাওয়ায়', 'দাঁত ওঠার সময়'],
    amelioration: ['পেটে হাত দিয়ে উপুড় হয়ে শুলে', 'ম্যাসেজ করলে'],
    relationships: {
      complementary: ['Calc-c'],
      antidotes: ['Colocynthis'],
      followsWell: ['Calc-c', 'Ipecac', 'Nux-v', 'Sulph']
    },
    summary: 'ভোরবেলার পিচকারী ছিটিয়ে ঝরঝরে পায়খানা, পচা দুর্গন্ধ এবং মলদ্বার বের হওয়ার প্রধান ওষুধ।'
  },
  'Aeth': {
    id: 'Aeth',
    name: 'Aethusa Cynapium',
    latinName: 'Aethusa Cynapium',
    commonName: 'Fool\'s Parsley',
    keynotes: [
      'দুধ মোটেই সহ্য হয় না, দুধ পানের পরই ছানা ছানা থোকা বমি (Inability to digest milk)',
      'বমি বা পায়খানার পর শিশুর চরম ক্লান্তি ও গভীর ঘুম',
      'মনোযোগ দিতে না পারা, পড়ায় মারাত্মক অক্ষমতা ও পরীক্ষা-ভীতি'
    ],
    organAffinities: ['Gastrointestinal Tract', 'Brain', 'Nerves'],
    mindSymptoms: [
      'পরীক্ষার আগে বা পড়াশোনায় তীব্র মানসিক অক্ষমতা ও বিভ্রান্তি',
      'পশু-পাখির প্রতি অতিরিক্ত ভালোবাসা ও আবেগ'
    ],
    headAndNeck: [
      'নাকের দুপাশে চোখ থেকে ঠোঁটের কোণ পর্যন্ত সাদাটে টান বা দাগ (Lineae nasalis)',
      'মাথায় প্রচণ্ড ভার ও কামড়ানো ব্যথা'
    ],
    stomachAndAbdomen: [
      'দুধ খাওয়ার পরপরই বড় বড় জমাট ছানার মতো বমি',
      'পাকস্থলীতে তীব্র মোচড় ও খিঁচুনি ভাব'
    ],
    respiratory: [
      'বুকের ভেতর চাপ ও স্বাসকষ্ট, কফের ঘড়ঘড় শব্দ'
    ],
    extremitiesAndSkin: [
      'হাত-পায়ের পেশীতে খিঁচুনি বা টান ধরা',
      'ত্বক ঠান্ডা ও আঠালো ঘামে ভেজা'
    ],
    aggravation: ['দুধ পানে', 'গরমে', 'আহারের পর'],
    amelioration: ['খোলা বাতাসে', 'বমি হওয়ার পর'],
    relationships: {
      complementary: ['Calc-c'],
      antidotes: ['Vegetable acids'],
      followsWell: ['Ars', 'Calc-c', 'Puls']
    },
    summary: 'শিশুদের দুধ সহ্য না হওয়া, জমাট ছানা বমি ও মারাত্মক দুর্বলতায় প্রধান প্রথম সারির ওষুধ।'
  },

  'All-c': {
    id: 'All-c',
    name: 'Allium Cepa',
    latinName: 'Allium Cepa',
    commonName: 'Red Onion',
    keynotes: [
      'নাক দিয়ে তীব্র ঝাঁঝালো পানি পড়া যা চামড়া তুলে ফেলে (Acrid nasal discharge)',
      'চোখ দিয়ে প্রচুর পানি পড়া তবে তা মিহি ও অ-ঝাঁঝালো (Bland lachrymation)',
      'হাঁচি ও ঠান্ডা লাগায় সুতার মতো স্নায়ুশূল ব্যথা'
    ],
    organAffinities: ['Mucous Membranes', 'Nerves', 'Respiratory Tract'],
    mindSymptoms: [
      'অসুস্থতায় খিটখিটে মেজাজ ও বিষণ্ণতা',
      'ব্যথা সহ্য করতে না পেরে বিরক্তি প্রকাশ'
    ],
    headAndNeck: [
      'একটানা প্রচুর হাঁচি, বিশেষ করে গরম ঘরে প্রবেশ করলে',
      'নাক লাল হয়ে ছিলে যাওয়া ও জ্বালাপোড়া করা'
    ],
    stomachAndAbdomen: [
      'পেটে কামড়ানো ব্যথা ও প্রচুর গ্যাস সঞ্চার'
    ],
    respiratory: [
      'গলায় খসখসে কাশি, কাশি দেওয়ার সময় মনে হয় ল্যারিংস ছিঁড়ে যাবে তাই গলা চেপে ধরে'
    ],
    extremitiesAndSkin: [
      'অঙ্গপ্রত্যঙ্গে সূঁচ ফোটানো বা সুতার মতো চাবুক মারার মতো স্নায়ু ব্যথা'
    ],
    aggravation: ['গরম ঘরে', 'সন্ধ্যায়'],
    amelioration: ['খোলা ঠান্ডা বাতাসে', 'ঠান্ডা ঘরে'],
    relationships: {
      complementary: ['Phosphorus', 'Pulsatilla'],
      antidotes: ['Arn', 'Cham'],
      followsWell: ['Calc-c', 'Puls', 'Sil']
    },
    summary: 'নাকের ঝাঁঝালো সর্দি, চোখ দিয়ে পানি এবং ঠান্ডা বাতাসে কমায় এমন সর্দিতে সেরা ওষুধ।'
  },

  'Brim': {
    id: 'Brim',
    name: 'Berberis Vulgaris',
    latinName: 'Berberis Vulgaris',
    commonName: 'Barberry',
    keynotes: [
      'কিডনিতে পাথর ও ব্যথা যা চারদিকে (কোমর, উরু, মূত্রনালী) ছড়িয়ে পড়ে (Radiating pains)',
      'প্রস্রাবের তীব্র পরিবর্তন—কখনো মেটে, কখনো লালচে বা বালুকাময় তলানি',
      'বাতের ব্যথা ও কিডনির কষ্টের পর্যায়ক্রমিক পরিবর্তন'
    ],
    organAffinities: ['Kidneys', 'Urinary Tract', 'Liver', 'Joints'],
    mindSymptoms: [
      'কাজে চরম উদাসীনতা ও অলসতা',
      'মানসিক শ্রমে দ্রুত ক্লান্তি অনুভব'
    ],
    headAndNeck: [
      'মাথার ত্বকে চাপ ধরা ব্যথা ও মুখমণ্ডল ফ্যাকাশে হওয়া'
    ],
    stomachAndAbdomen: [
      'পিত্তথলিতে পাথরজনিত ব্যথা ও যকৃতে তীব্র চাপ',
      'মলদ্বারে চিমটি কাটার মতো ব্যথা ও অর্শের কষ্ট'
    ],
    respiratory: [
      'সাধারণ শ্বাসপ্রশ্বাস, তবে কিডনির ব্যথাকালে বুকে হালকা চাপ'
    ],
    extremitiesAndSkin: [
      'পিঠের পিঞ্জরাস্থি ও কোমরে বিদ্ধকর ব্যথা, নড়াচড়া করলে বাড়ে',
      'জোড়ায় বাতের ব্যথা যা হঠাৎ স্থান পরিবর্তন করে'
    ],
    aggravation: ['নড়াচড়ায় ও ঝাঁকুনিতে', 'দাঁড়িয়ে থাকলে'],
    amelioration: ['বিশ্রামে'],
    relationships: {
      complementary: ['Mag-m'],
      antidotes: ['Camphora'],
      followsWell: ['Lyc', 'Nux-v', 'Puls']
    },
    summary: 'কিডনির পাথর, চারদিকে ছড়িয়ে পড়া কোমর ব্যথা ও প্রস্রাবের গোলযোগে এক নম্বর ওষুধ।'
  },

  'Cimic': {
    id: 'Cimic',
    name: 'Cimicifuga Racemosa',
    latinName: 'Cimicifuga Racemosa',
    commonName: 'Black Cohosh',
    keynotes: [
      'মানসিক মেঘ বা বিষণ্ণতায় আচ্ছন্ন থাকা (A dark cloud over the mind)',
      'জরায়ুর কষ্টের সাথে হূদরোগ বা ঘাড়ের ও পিঠের মাংসপেশীতে তীব্র ব্যথা',
      'ব্যথার তীব্রতা রোগের লক্ষণের অনুপাতে অতিরিক্ত বেশি হওয়া'
    ],
    organAffinities: ['Female Organs', 'Nerves', 'Muscles', 'Heart'],
    mindSymptoms: [
      'মনে করে মাথার ওপর কালো বিষণ্ণতার মেঘ জমে আছে, পাগল হয়ে যাওয়ার ভয়',
      'অত্যধিক বাচালতা, এক বিষয় থেকে অন্য বিষয়ে লাফানো'
    ],
    headAndNeck: [
      'মাথার পেছন থেকে চোখের দিকে চাবুক মারার মতো ব্যথা',
      'ঘাড়ের পেশী অত্যন্ত শক্ত, ব্যথা ও আড়ষ্ট হয়ে থাকা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে খালি ও ডুবা অনুভূতি',
      'তলপেট ও ডিম্বাশয়ে এক পাশ থেকে অন্য পাশে ছড়ানো তীব্র ব্যথা'
    ],
    respiratory: [
      'কাশি দেওয়ার সাথে সাথে বুকে ও পেশীতে ব্যথা'
    ],
    extremitiesAndSkin: [
      'পিঠের ওপরের অংশ ও মেরুদণ্ডের পেশীতে তীব্র ইলেকট্রিক শকের মতো ব্যথা',
      'হাত-পা অস্থির রাখা'
    ],
    aggravation: ['ঋতুস্রাবের সময়', 'ঠান্ডা স্যাঁতসেঁতে আবহাওয়ায়', 'নড়াচড়ায়'],
    amelioration: ['উষ্ণতায়', 'খাওয়ার পর'],
    relationships: {
      complementary: ['Lillium Tigrinum'],
      antidotes: ['Baptisia'],
      followsWell: ['Acon', 'Puls', 'Sep']
    },
    summary: 'মানসিক গভীর বিষণ্ণতা, ঘাড়-পিঠের তীব্র পেশী ব্যথা ও জরায়ুর সমস্যায় অতুলনীয়।'
  },

  'Ham': {
    id: 'Ham',
    name: 'Hamamelis Virginica',
    latinName: 'Hamamelis Virginica',
    commonName: 'Witch Hazel',
    keynotes: [
      'শিরা স্ফীতি (Varicose veins) এবং শিরার রক্তপ্রবাহে তীব্র কষ্ট ও থেঁতলে যাওয়ার মতো ব্যথা',
      'যেকোনো স্থান থেকে কালচে, অ-জমাট বাঁধা রক্তস্রাব (Dark, fluid hemorrhage)',
      'ক্ষত স্থানে বা শিরাতে সামান্যতম স্পর্শ সহ্য করতে না পারা'
    ],
    organAffinities: ['Veins', 'Blood', 'Mucous Membranes', 'Skin'],
    mindSymptoms: [
      'শরীরের রক্তক্ষরণ দেখে প্রচণ্ড ভয় ও উৎকণ্ঠা',
      'কাজে অনীহা ও বিষণ্ণতা'
    ],
    headAndNeck: [
      'নাক দিয়ে কালচে রক্ত পড়া যা রোগীকে সাময়িক স্বস্তি দেয়',
      'চোখের শিরা স্ফীত ও রক্তবর্ণ হওয়া'
    ],
    stomachAndAbdomen: [
      'পাকস্থলী ও নাড়িভুঁড়িতে ভারী ও ব্যথা অনুভব',
      'অর্শ বা পাইলস থেকে প্রচুর কালচে রক্ত পড়া'
    ],
    respiratory: [
      'ফুসফুস থেকে রক্ত পড়া ও বুকে খামচে ধরা ব্যথা'
    ],
    extremitiesAndSkin: [
      'পায়ের শিরা ফুলে নীল হয়ে যাওয়া ও স্পর্শ করলে তীব্র কষ্ট',
      'আঘাতের পর চামড়ার নিচে কালচে রক্ত জমে থাকা'
    ],
    aggravation: ['আর্দ্র গরমে', 'স্পর্শে', 'নড়াচড়ায়'],
    amelioration: ['বিশ্রামে', 'আক্রান্ত অঙ্গ উঁচু করে রাখলে'],
    relationships: {
      complementary: ['Ferrum Metallicum'],
      antidotes: ['Camphora'],
      followsWell: ['Arn', 'Calculus', 'Puls']
    },
    summary: 'ফুলে যাওয়া শিরা, পাইলসের কালচে রক্তস্রাব এবং থেঁতলে যাওয়া যন্ত্রণায় প্রধান ওষুধ।'

   },
   'Nat-s': {
    id: 'Nat-s',
    name: 'Natrum Sulphuricum',
    latinName: 'Natrum Sulphuricum',
    commonName: 'Sulphate of Soda',
    keynotes: [
      'স্যাঁতসেঁতে বা আর্দ্র আবহাওয়া ও বৃষ্টিতে রোগের আক্রমণ এবং বৃদ্ধি (Hydrogenoid constitution)',
      'মাথায় আঘাত লাগার পর দীর্ঘস্থায়ী মানসিক বা শারীরিক সমস্যা',
      'হলুদাভ-সবুজ রঙের ঘন শ্লেষ্মা ও পায়খানা'
    ],
    organAffinities: ['Liver', 'Respiratory Tract', 'Gastrointestinal Tract', 'Mind'],
    mindSymptoms: [
      'প্রচণ্ড বিষণ্ণতা ও আত্মহত্যার ইচ্ছা, তবে পরিবারের কথা ভেবে নিজেকে সামলে রাখে',
      'সঙ্গীত শুনলে বিষাদগ্রস্ত হয়ে পড়া'
    ],
    headAndNeck: [
      'মাথায় চোটের পর মাথাব্যথা বা মানসিক পরিবর্তন',
      'জিহ্বার গোড়ায় ধসর বা হলুদাভ-সবুজ আস্তরণ'
    ],
    stomachAndAbdomen: [
      'যকৃৎ বা লিভারের জায়গায় সুঁচ ফোটানোর মতো ব্যথা, বাম পাশে শুলে বাড়ে',
      'ভোরবেলা ঘুম থেকে উঠেই বায়ুসহ পাতলা পায়খানার বেগ'
    ],
    respiratory: [
      'স্যাঁতসেঁতে আবহাওয়ায় হাঁপানি ও কাশি, কাশি দেওয়ার সময় বুকে হাত দিয়ে চেপে ধরে'
    ],
    extremitiesAndSkin: [
      'জোড়ায় জোড়ায় বাতের ব্যথা যা বর্ষাকালে বৃদ্ধি পায়',
      'ত্বকে জলের মতো ফুটকুড়ি বা চর্মরোগ'
    ],
    aggravation: ['স্যাঁতসেঁতে আবহাওয়ায় ও বৃষ্টিতে', 'জলাশয়ের পাশে', 'সকালে'],
    amelioration: ['শুষ্ক ও গরম আবহাওয়ায়', 'খোলা বাতাসে', 'নড়াচড়ায়'],
    relationships: {
      complementary: ['Thuja', 'Ars'],
      antidotes: ['Camphora'],
      followsWell: ['Bell', 'Bry', 'Thuja']
    },
    summary: 'স্যাঁতসেঁতে আবহাওয়ায় বৃদ্ধি, মাথায় আঘাতের কুফল, লিভারের সমস্যা ও হাঁপানিতে ১ নম্বর ওষুধ।'
  },

  'Kali-c': {
    id: 'Kali-c',
    name: 'Kali Carbonicum',
    latinName: 'Kali Carbonicum',
    commonName: 'Carbonate of Potassium',
    keynotes: [
      'চোখের ভেতরের কোণে বা ওপরের পাতায় থলে ঝোলার মতো ফোলা (Bag-like swelling of upper eyelids)',
      'পিঠে ও কোমর ব্যথায় মনে হয় কোমর ভেঙে যাবে, নড়াচড়া করতে কষ্ট',
      'রাত ৩টা থেকে ৪টার মধ্যে সমস্ত রোগের উপসর্গ বৃদ্ধি'
    ],
    organAffinities: ['Heart', 'Lungs', 'Kidneys', 'Digestive Tract'],
    mindSymptoms: [
      'স্পর্শে বা সামান্য শব্দে চমকে ওঠা (অত্যধিক স্পর্শকাতরতা)',
      'একা থাকতে মারাত্মক ভয়, কিন্তু মানুষের সাথে থাকলেও খিটখিটে'
    ],
    headAndNeck: [
      'চোখের ওপরের পাতা ফুলে থলের মতো ঝুলে থাকা',
      'গলায় মাছের কাঁটা ফোটার মতো অনুভূতি ও কাশি'
    ],
    stomachAndAbdomen: [
      'খাওয়ার সময় বা পরে পাকস্থলীতে তীব্র চাপ ও গ্যাস সঞ্চার',
      'পেটে খালি ভাব এবং ক্ষুধা পেলেই দুর্বলতা'
    ],
    respiratory: [
      'রাত ৩টায় দমবন্ধ করা কাশি ও হাঁপানি, রোগী সোজা হয়ে বসে সামনে ঝুঁকতে বাধ্য হয়'
    ],
    extremitiesAndSkin: [
      'পিঠ থেকে কোমর ও উরু পর্যন্ত তীক্ষ্ণ বিদ্ধকর ব্যথা',
      'শরীরে সুঁচ ফোটানোর মতো ব্যথা (Stitching pains)'
    ],
    aggravation: ['রাত ৩টা থেকে ৪টায়', 'ঠান্ডা বাতাসে', 'ব্যথার পাশে শুলে'],
    amelioration: ['উষ্ণতায়', 'সোজা হয়ে বসে সামনে ঝুঁকলে', 'দিনে'],
    relationships: {
      complementary: ['Carb-v', 'Nux-v'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Lyc', 'Nit-ac', 'Phosphorus']
    },
    summary: 'চোখের পাতা ফোলা, রাত ৩টায় কাশি, কোমর ব্যথা ও সুঁচ ফোটানো ব্যথায় মহা-উপকারী।'
  },

  'Kreos': {
    id: 'Kreos',
    name: 'Kreosotum',
    latinName: 'Kreosotum',
    commonName: 'Beechwood Creosote',
    keynotes: [
      'দাঁত ওঠার সাথে সাথেই কালো হয়ে পচে যাওয়া ও ক্ষয়ে যাওয়া (Rapid decay of teeth)',
      'যেকোনো ক্ষতের বা নিঃসৃত রসের তীব্র দুর্গন্ধ ও ছিলে যাওয়া ভাব (Acrid, offensive discharges)',
      'সামান্য আছড়ে বা ক্ষতে কালচে রক্ত পড়া'
    ],
    organAffinities: ['Mucous Membranes', 'Teeth', 'Female Organs', 'Blood'],
    mindSymptoms: [
      'বাচ্চারা খিটখিটে, যা চায় তা পেলেই ছুঁড়ে ফেলে দেয়',
      'সঙ্গীত বা শব্দে অস্বস্তি'
    ],
    headAndNeck: [
      'দাঁত ওঠার পরপরই তা কালো হয়ে দ্রুত ভেঙে বা ক্ষয়ে যাওয়া',
      'মাড়িতে যন্ত্রণা ও কালচে রক্তক্ষরণ'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে প্রচণ্ড জ্বালাপোড়া ও পচা দুর্গন্ধযুক্ত খাবার বমি',
      'খাবার খাওয়ার কয়েক ঘণ্টা পর অপাচ্য বমি'
    ],
    respiratory: [
      'বুকে জ্বালাপোড়া ও কাশির সাথে কফে পচা দুর্গন্ধ'
    ],
    extremitiesAndSkin: [
      'ক্ষত থেকে রক্তপড়া বন্ধ হতে চায় না',
      'ত্বকে মারাত্মক চুলকানি ও পচা ঘা'
    ],
    aggravation: ['খোলা বাতাসে', 'ঠান্ডায়', 'শুয়ে থাকলে', 'ঋতুস্রাবের সময়'],
    amelioration: ['উষ্ণতায়', 'উষ্ণ সেকে'],
    relationships: {
      complementary: ['Sulphur'],
      antidotes: ['Nux-v'],
      followsWell: ['Ars', 'Bell', 'Calc-c', 'Puls']
    },
    summary: 'দাঁত ওঠার সাথে সাথে পচে যাওয়া, দুর্গন্ধযুক্ত ঘা ও রক্তস্রাবে অনন্য ওষুধ।'
  },

  'Verat': {
    id: 'Verat',
    name: 'Veratrum Album',
    latinName: 'Veratrum Album',
    commonName: 'White Hellebore',
    keynotes: [
      'প্রচণ্ড ঠান্ডা ঘাম বিশেষ করে কপালে (Cold sweat on forehead)',
      'একসাথে বমি ও জলের মতো ঝরঝরে পাতলা পায়খানা (Cholera-like collapse)',
      'শরীরের তাপমাত্রা মারাত্মক কমে যাওয়া ও চরম হিমাঙ্গ অবস্থা'
    ],
    organAffinities: ['Gastrointestinal Tract', 'Nerves', 'Heart', 'Blood Vessels'],
    mindSymptoms: [
      'উন্মাদনা, প্রলাপ বকা এবং ধর্মীয় বিষয়ে অতিরিক্ত মাতামাতি',
      'অন্যকে কাটাছেঁড়া করা বা জামাকাপড় ছিঁড়ে ফেলার মানসিকতা'
    ],
    headAndNeck: [
      'কপালে বরফের মতো ঠান্ডা ঘাম জমে থাকা',
      'মুখ ফ্যাকাশে, নীলচে এবং চোখ বসে যাওয়া'
    ],
    stomachAndAbdomen: [
      'পেটে আগুনের মতো জ্বালা কিন্তু স্পর্শ করলে বরফের মতো ঠান্ডা',
      'একসাথে প্রচুর বমি ও পিচকারী ছিটিয়ে ওলান পায়খানা'
    ],
    respiratory: [
      'বুকে আড়ষ্টতা ও দমবন্ধ করা ফাঁপা কাশি'
    ],
    extremitiesAndSkin: [
      'হাত-পা বরফের মতো ঠান্ডা ও খিঁচুনি ভাব',
      'চামড়া চিমটি কাটলে কুঁচকে থাকে (Dehydration)'
    ],
    aggravation: ['নড়াচড়ায়', 'পানীয় পানে', 'ঠান্ডায়'],
    amelioration: ['উষ্ণতায়', 'হাঁটাচলা করলে'],
    relationships: {
      complementary: ['Ars', 'Carb-v'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Carb-v', 'Cup-m', 'Ip']
    },
    summary: 'কপালে ঠান্ডা ঘাম, ওলান ডায়রিয়া-বমি এবং হিমাঙ্গ অবস্থায় কলেরা প্রতিরোধক শ্রেষ্ঠ ওষুধ।'
  },

  'Stram': {
    id: 'Stram',
    name: 'Stramonium',
    latinName: 'Datura Stramonium',
    commonName: 'Thorn Apple',
    keynotes: [
      'অন্ধকার ও একা থাকার তীব্র ভয়, আলো ও সান্নিধ্য চায় (Fear of darkness & isolation)',
      'উন্মাদনা ও খিঁচুনি—লাল কাপড় বা উজ্জ্বল বস্তু দেখলে চমকে ওঠা',
      'ব্যথাহীন শারীরিক লক্ষণ কিন্তু মানসিক লক্ষণ অত্যন্ত তীব্র'
    ],
    organAffinities: ['Brain', 'Mind', 'Nerves', 'Circulation'],
    mindSymptoms: [
      'ভয়ানক কাল্পনিক মূর্তি দেখে চিৎকার করে ওঠা, পালিয়ে যেতে চাওয়া',
      'অন্ধকারে একা থাকতে পারে না, ঘরে আলো জ্বেলে রাখতে চায়'
    ],
    headAndNeck: [
      'চোখ বড় বড় করে তাকিয়ে থাকা, পুতুল বড় হয়ে যাওয়া',
      'মুখমণ্ডল লাল ও উত্তপ্ত কিন্তু হাত-পা ঠান্ডা'
    ],
    stomachAndAbdomen: [
      'তরল বা পানি দেখলে ভয় ও গিলতে অক্ষমতা (Hydrophobia)',
      'পেট ফোলা ও কামড়ানো'
    ],
    respiratory: [
      'শ্বাসনালীতে খিঁচুনি ধরে কাশি ও শ্বাসকষ্ট'
    ],
    extremitiesAndSkin: [
      'হাত-পায়ের পেশীতে অনবরত ঝাঁকুনি ও খিঁচুনি',
      'চামড়া লালচে ও শুষ্ক'
    ],
    aggravation: ['অন্ধকারে', 'একা থাকলে', 'উজ্জ্বল আলো বা তরল বস্তু দেখলে'],
    amelioration: ['আলোতে', 'সঙ্গীত বা সান্নিধ্যে'],
    relationships: {
      complementary: ['Belladonna'],
      antidotes: ['Nux-v'],
      followsWell: ['Bell', 'Cup-m', 'Hyos']
    },
    summary: 'অন্ধকারের ভয়, তীব্র উন্মাদনা, খিঁচুনি ও ব্যথাহীন মানসিকভাবে বিভ্রান্ত রোগীর সেরা ওষুধ।'
     },
     'Acro': {
    id: 'Acro',
    name: 'Actaea Racemosa',
    latinName: 'Actaea Racemosa',
    commonName: 'Black Cohosh',
    keynotes: [
      'মানসিক মেঘ বা বিষণ্ণতায় আচ্ছন্ন থাকা এবং পাগল হয়ে যাওয়ার ভয়',
      'জরায়ুর অসুস্থতার সাথে পিঠ, ঘাড় ও ছোট ছোট জোড়ায় বাতের তীব্র ব্যথা',
      'বাতের বা স্নায়বিক ব্যথা যা বিদ্যুৎ চমকানোর মতো হঠাৎ আসে ও যায়'
    ],
    organAffinities: ['Mind', 'Female Organs', 'Nerves', 'Muscles'],
    mindSymptoms: [
      'মনে করে মাথার ওপর কালো মেঘ জমেছে এবং সে মানসিক ভারসাম্য হারাচ্ছে',
      'অত্যধিক বাচালতা, অনবরত কথা বলা কিন্তু বিষয় পরিবর্তন করা'
    ],
    headAndNeck: [
      'মাথার পেছন থেকে শুরু হয়ে চোখের ওপর চেপে বসা ব্যথা',
      'ঘাড় ও পিঠের পেশীতে শক্ত আড়ষ্ট ভাব'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে হঠাৎ খালি ও ডুবে যাওয়ার মতো অনুভূতি',
      'তলপেট ও ডিম্বাশয়ে এক পাশ থেকে অন্য পাশে ছড়ানো তীব্র ব্যথা'
    ],
    respiratory: [
      'বুকে খামচে ধরা ব্যথা ও কাশির সাথে বুকে অস্বস্তি'
    ],
    extremitiesAndSkin: [
      'মেরুদণ্ড ও পিঠের পেশীতে স্পর্শকাতরতা ও ব্যথা',
      'হাত-পা অস্থির রাখা, স্থির থাকতে না পারা'
    ],
    aggravation: ['ঋতুস্রাবের সময়', 'ঠান্ডা স্যাঁতসেঁতে আবহাওয়ায়', 'নড়াচড়ায়'],
    amelioration: ['উষ্ণতায়', 'খাওয়ার পর', 'আক্রান্ত অঙ্গ চেপে ধরলে'],
    relationships: {
      complementary: ['Lil-t'],
      antidotes: ['Baptisia'],
      followsWell: ['Acon', 'Puls', 'Sep']
    },
    summary: 'গভীর বিষণ্ণতা, জরায়ুর গোলযোগের সাথে ঘাড়-পিঠের তীব্র আড়ষ্টতা ও ব্যথায় বিশেষ কার্যকরী।'
  },

  'Agar': {
    id: 'Agar',
    name: 'Agaricus Muscarius',
    latinName: 'Agaricus Muscarius',
    commonName: 'Amanita',
    keynotes: [
      'মাংসপেশীর অনৈচ্ছিক নাচুনী বা লাফানো (Twitching and spasms of muscles)',
      'শরীরের বিভিন্ন অংশ বরফের সূঁচ দিয়ে ফোটানোর মতো অনুভূতি (Sensation as if pierced by ice-cold needles)',
      'পায়ের তলা ও চামড়ায় বরফে জমে যাওয়ার মতো চুলকানি ও জ্বালা (Chilblains)'
    ],
    organAffinities: ['Nervous System', 'Brain', 'Spine', 'Skin'],
    mindSymptoms: [
      'মানসিক বিভ্রান্তি, অলসতা ও পড়তে না পারা',
      'উৎসাহ ও প্রলাপের সাথে অসাধারণ শারীরিক শক্তি প্রকাশ পাওয়া'
    ],
    headAndNeck: [
      'চোখের পাতা ও মুখের পেশী অনবরত নাচতে থাকা',
      'মাথা এপাশ-ওপাশ দোলা বা অনবরত ঝিমুনি ভাব'
    ],
    stomachAndAbdomen: [
      'পেটে প্রচুর গ্যাস সঞ্চার ও অস্বস্তি',
      'পাকস্থলীতে বরফ মতো ঠান্ডা অনুভব'
    ],
    respiratory: [
      'ঘন ঘন কাশির তীব্র আক্রমণ, কাশি দিলেই হাঁচি হওয়া'
    ],
    extremitiesAndSkin: [
      'মেরুদণ্ডে হাত দিলে বা চাপ দিলে তীব্র ব্যথা',
      'হাত-পা ও আঙ্গুলের ডগায় চিলব্লেইন বা লাল হয়ে ফোলা ও চুলকানি'
    ],
    aggravation: ['ঠান্ডা বাতাসে', 'সকালে', 'সহবাসের পর'],
    amelioration: ['ধীরে ধীরে হাঁটলে', 'উষ্ণতায়'],
    relationships: {
      complementary: ['Sulphur'],
      antidotes: ['Camphora', 'Coffea'],
      followsWell: ['Bell', 'Calc-c', 'Puls', 'Sil']
    },
    summary: 'পেশীর অনৈচ্ছিক স্পন্দন/লাফানো, বরফে হাত-পা ফুলে যাওয়া ও মেরুদণ্ডের ব্যথায় প্রধান ওষুধ।'
  },

  'Am-m': {
    id: 'Am-m',
    name: 'Ammonium Muriaticum',
    latinName: 'Ammonium Muriaticum',
    commonName: 'Sal Ammoniac',
    keynotes: [
      'মোটা ও মেদযুক্ত শরীর কিন্তু পা দুটি অস্বাভাবিক সরু ও চিকন',
      'শরীরের সমস্ত নিঃসরিত বস্তু (শ্লেষ্মা, পায়খানা, রক্ত) ছিলে ফেলার মতো জ্বালাকর',
      'বসার সময় নিতম্ব ও পায়ের উরুতে তীব্র রগ টানা বা বাতের ব্যথা'
    ],
    organAffinities: ['Mucous Membranes', 'Liver', 'Blood', 'Nerves'],
    mindSymptoms: [
      'মানসিক বিষণ্ণতা, কান্নাকাটি করার প্রবণতা',
      'প্রচণ্ড খিটখিটে মেজাজ ও অসন্তোষ'
    ],
    headAndNeck: [
      'নাক বন্ধ হয়ে যাওয়া, বিশেষ করে রাতে (শুকনো সর্দি)',
      'গলায় আঠালো কফ জমে থাকা যা কিছুতেই বের হতে চায় না'
    ],
    stomachAndAbdomen: [
      'পেটে চর্বি জমার প্রবণতা ও ফাঁপা ভাব',
        'কোষ্ঠকাঠিন্য, মল একদম গুঁড়ো গুঁড়ো বা চূর্ণ হয়ে বের হওয়া'
    ],
    respiratory: [
      'বুকে তীব্র জ্বালাপোড়া ও কাশি, রাতে বুক চেপে ধরা অনুভূতি'
    ],
    extremitiesAndSkin: [
      'গোড়ালি ও পায়ের রগে টানা ধরে রাখার মতো ব্যথা, সোজা হয়ে দাঁড়াতে কষ্ট',
      'ত্বকে শুষ্কতা ও খোসা ওঠা'
    ],
    aggravation: ['বসে থাকলে', 'রাতে'],
    amelioration: ['হাঁটাচলা করলে', 'খোলা বাতাসে'],
    relationships: {
      complementary: ['Pulsatilla'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Nux-v', 'Phosphorus', 'Puls']
    },
    summary: 'মোটা শরীর কিন্তু চিকন পা, গুঁড়ো মল, শুকনো নাক বন্ধ সর্দি ও বসা অবস্থার ব্যথায় নির্দেশিত।'
  },

  'Anac': {
    id: 'Anac',
    name: 'Anacardium Orientale',
    latinName: 'Anacardium Orientale',
    commonName: 'Marking Nut',
    keynotes: [
      'মানসিক দ্বিধা ও দ্বৈত ব্যক্তিত্ব (মনে হয় যেন দুই কানে দুটি সত্তা—একটি ভালো, একটি খারাপ পরামর্শ দিচ্ছে)',
      'স্মৃতিশক্তি মারাত্মক দুর্বল বা পুরোপুরি লোপ পাওয়া (Loss of memory)',
      'খাবার খেলে পেটের কষ্ট, মাথাব্যথা ও সমস্ত শারীরিক অসুস্থতা সাময়িক কমে যাওয়া'
    ],
    organAffinities: ['Mind', 'Nervous System', 'Digestive Tract', 'Skin'],
    mindSymptoms: [
      'প্রচণ্ড গালিগালাজ ও অভিশাপ দেওয়ার প্রবণতা, নিষ্ঠুর মানসিকতা',
      'নিজের ও অন্যের প্রতি অনাস্থা এবং সন্দেহপ্রবণতা'
    ],
    headAndNeck: [
      'মাথার পেছনে বা কপালে প্লাগ বা কাঠ দিয়ে গুঁতো মারার মতো ব্যথা',
      'খাওয়ার পর মাথাব্যথা পুরো উধাও হয়ে যাওয়া'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে খালি ভাব যা শুধু খাবার খেলেই উপশম হয়',
      'মলদ্বারে প্লাগ বা বোতল আটকে থাকার মতো অনুভূতি'
    ],
    respiratory: [
      'খাওয়ার সময় কাশি বন্ধ থাকে, খাওয়া শেষ হলেই কাশি শুরু'
    ],
    extremitiesAndSkin: [
      'ত্বকে বিষাক্ত চুলকানি ও ছোট ছোট তীব্র যন্ত্রণাদায়ক ফুসকুড়ি',
      'অঙ্গপ্রত্যঙ্গে ব্যান্ড বা ফিতা দিয়ে শক্ত করে বাঁধার মতো অনুভূতি'
    ],
    aggravation: ['পাকস্থলী খালি থাকলে', 'মানসিক পরিশ্রমে'],
    amelioration: ['খাবার খেলে বা আহারের সময়'],
    relationships: {
      complementary: ['Lycopodium'],
      antidotes: ['Coffea', 'Juglans'],
      followsWell: ['Ars', 'Bell', 'Lyc', 'Puls', 'Plat']
    },
    summary: 'স্মৃতিভ্রংশ, গালিগালাজের স্বভাব এবং খাবার খেলে সব রোগ লক্ষণ কমে যাওয়ায় অপ্রতিদ্বন্দ্বী ওষুধ।'
  },

  'Apoc': {
    id: 'Apoc',
    name: 'Apocynum Cannabinum',
    latinName: 'Apocynum Cannabinum',
    commonName: 'Indian Hemp',
    keynotes: [
      'শরীরের বিভিন্ন অঙ্গে বা পুরো শরীরে প্রচুর পানি জমা (Dropsy / Edema)',
      'প্রচণ্ড পিপাসা কিন্তু পানি খেলেই বমি হয়ে যাওয়া বা পাকস্থলীতে কষ্ট হওয়া',
      'প্রস্রাব অত্যন্ত কম, ফোঁটা ফোঁটা বা একেবারেই বন্ধ হয়ে যাওয়া'
    ],
    organAffinities: ['Kidneys', 'Heart', 'Serous Membranes', 'Digestive System'],
    mindSymptoms: [
      'অসুস্থতা ও পানি জমার কারণে মারাত্মক মানসিক স্নায়বিক ক্লান্তি',
      'উদাসীনতা ও ঝিমুনি ভাব'
    ],
    headAndNeck: [
      'মাথায় পানি জমা (Hydrocephalus) এবং এপাশ-ওপাশ মাথা দোড়ানো',
      'মুখ ও চোখের পাতা মারাত্মক ফুলে যাওয়া'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে পানি সহ্য হয় না, তৎক্ষণাৎ বমি হওয়া',
      'পেট পানিতে জমে ঢাকের মতো ফুলে যাওয়া'
    ],
    respiratory: [
      'বুকে পানি জমার কারণে শুতে না পারা, তীব্র হাঁপ ধরে যাওয়া'
    ],
    extremitiesAndSkin: [
      'হাত-পা মারাত্মক ফুলে যাওয়া ও আঙুল দিয়ে চাপ দিলে গর্ত হয়ে থাকা',
      'চামড়া শুষ্ক কিন্তু ঘাম একেবারে না হওয়া'
    ],
    aggravation: ['ঠান্ডায়', 'ঠান্ডা পানীয় পানে'],
    amelioration: ['উষ্ণতায়', 'প্রস্রাব পরিষ্কার হলে'],
    relationships: {
      complementary: ['Arsenicum Album'],
      antidotes: ['Bryonia'],
      followsWell: ['Ars', 'Bell', 'Bry', 'Helleborus']
    },
    summary: 'শরীরে পানি জমা (শোথ), তীব্র পিপাসায় পানি খেলেই বমি এবং প্রস্রাব বন্ধে অতুলনীয় ওষুধ।'
   },
  
  'Aur-m': {
    id: 'Aur-m',
    name: 'Aurum Metallicum',
    latinName: 'Aurum Metallicum',
    commonName: 'Metallic Gold',
    keynotes: [
      'চরম নিরাশা, জীবনের ওপর ক্লান্তি ও আত্মহত্যার তীব্র ইচ্ছা (Suicidal melancholia)',
      'হাড়ের পচন বা তীব্র ব্যথা, বিশেষ করে রাতে বাড়ে (Caries of bones)',
      'উচ্চ রক্তচাপ ও বুক ধড়ফড়ানি সহ হৃদরোগের কষ্ট'
    ],
    organAffinities: ['Mind', 'Bones', 'Heart', 'Vascular System'],
    mindSymptoms: [
      'মনে করে সে তার দায়িত্ব পালনে ব্যর্থ হয়েছে, তাই বেঁচে থাকা অর্থহীন',
      'সামান্য কথাতেই প্রচণ্ড রেগে যাওয়া ও প্রলাপ বকা'
    ],
    headAndNeck: [
      'নাকের হাড় পচে যাওয়া ও দুর্গন্ধে নাক বন্ধ হওয়া (Ozena)',
      'মাথার খুলির হাড়ে রাতে তীক্ষ্ণ যন্ত্রণাদায়ক ব্যথা'
    ],
    stomachAndAbdomen: [
      'যকৃৎ ও প্লীহা শক্ত হয়ে যাওয়া',
      'তলপেটে ভারী অনুভূতি'
    ],
    respiratory: [
      'রাতে বুকে মারাত্মক চাপ ও বুক ধড়ফড় করা, মনে হয় হৃদপিণ্ড থেমে যাবে'
    ],
    extremitiesAndSkin: [
      'রাতের বেলা হাড়ে মারাত্মক খামচানো ব্যথা',
      'অণ্ডকোষ শক্ত হয়ে ফুলে যাওয়া'
    ],
    aggravation: ['রাতে ও সূর্যাস্তের পর', 'ঠান্ডা আবহাওয়ায়', 'মানসিক কষ্টে'],
    amelioration: ['উষ্ণতায়', 'খোলা বাতাসে', 'সঙ্গীত শুনলে'],
    relationships: {
      complementary: ['Syphilinum'],
      antidotes: ['Belladonna', 'Camphora'],
      followsWell: ['Acon', 'Bell', 'Merc', 'Syph']
    },
    summary: 'আত্মহত্যার প্রবণতা, হাড় পচন রোগ ও গভীর বিষণ্ণতায় প্রধানতম হোমিও ওষুধ।'
  },

  'Bap': {
    id: 'Bap',
    name: 'Baptisia Tinctoria',
    latinName: 'Baptisia Tinctoria',
    commonName: 'Wild Indigo',
    keynotes: [
      'শরীর থেকে মারাত্মক পচা দুর্গন্ধ (নিঃশ্বাস, ঘাম, পায়খানা, প্রস্রাব)',
      'রোগী মনে করে তার শরীর টুকরো টুকরো হয়ে ছড়িয়ে ছিটিয়ে আছে, তা একত্র করার চেষ্টা করে',
      'টাইফয়েড বা মারাত্মক ক্ষতিকর জ্বরে দ্রুত তন্দ্রাচ্ছন্নতা ও অবশ ভাব'
    ],
    organAffinities: ['Blood', 'Gastrointestinal Tract', 'Mind', 'Nerves'],
    mindSymptoms: [
      'বিছানায় শুয়েই ঘুমিয়ে পড়ে, কথা বলতে বলতে মাঝপথে তন্দ্রাচ্ছন্ন হয়ে যাওয়া',
      'ভ্রম হয় যে তার হাত-পা বিচ্ছিন্ন হয়ে গেছে'
    ],
    headAndNeck: [
      'মুখমণ্ডল কালচে লাল, নেশাগ্রস্তের মতো দেখায়',
      'গলায় ব্যথাহীন ঘা বা পচন কিন্তু তরল গিলতেও কষ্ট'
    ],
    stomachAndAbdomen: [
      'পেটে তীব্র গ্যাস ও পচা দুর্গন্ধযুক্ত পাতলা পায়খানা',
      'পাকস্থলীতে কালচে রক্তের ক্ষত'
    ],
    respiratory: [
      'দমবন্ধ ভাব, ঘরে বাতাস কম মনে হওয়া'
    ],
    extremitiesAndSkin: [
      'সারা শরীর মারাত্মক থেঁতলে যাওয়ার মতো ব্যথা, বিছানা শক্ত মনে হওয়া',
      'ত্বকে কালচে বা তামাটে রঙের ছোপ ছোপ দাগ'
    ],
    aggravation: ['গরমে', 'আর্দ্র আবহাওয়ায়', 'নড়াচড়ায়'],
    amelioration: ['বিশ্রামে'],
    relationships: {
      complementary: ['Crotalus Horridus'],
      antidotes: ['Nitric Acid'],
      followsWell: ['Ars', 'Echin', 'Rhus-t', 'Tereb']
    },
    summary: 'পচা দুর্গন্ধযুক্ত ব্যাধি, টাইফয়েড জ্বর এবং শরীর টুকরো টুকরো ভাব অনুভূতিতে অদ্বিতীয়।'
  },

  'Bov': {
    id: 'Bov',
    name: 'Bovista Lycoperdon',
    latinName: 'Bovista Lycoperdon',
    commonName: 'Puff-Ball',
    keynotes: [
      'হাত থেকে হঠাৎ জিনিসপত্র পড়ে যাওয়া, হাত মারাত্মক আনাড়ি অনুভব (Clumsiness)',
      'ঋতুস্রাব শুধুমাত্র রাতে বা সকালে হয়, দিনের বেলা বন্ধ থাকে',
      'চর্মরোগের সাথে মারাত্মক চুলকানি, চুলকালে চামড়া ফুলে যাওয়া'
    ],
    organAffinities: ['Skin', 'Female Organs', 'Blood Vessels', 'Circulation'],
    mindSymptoms: [
      'কথাবার্তায় ভুল শব্দ ব্যবহার করা ও মনসংযোগের অভাব',
      'সহজেই কান্নাকাটি করা ও স্পর্শকাতরতা'
    ],
    headAndNeck: [
      'মাথা অস্বাভাবিক বড় মনে হওয়া',
      'মাড়িতে সহজে কালচে রক্ত পড়া'
    ],
    stomachAndAbdomen: [
      'পেটে গ্যাস জমে ঢাকের মতো ফোলা ও খিঁচুনি ব্যথা',
      'ঋতুস্রাবের আগে পেট ফোলা'
    ],
    respiratory: [
      'বুকে আড়ষ্টতা ও সামান্য পরিশ্রমে হাঁপ ধরা'
    ],
    extremitiesAndSkin: [
      'হাতের জোর কমে যাওয়া, কাপ-পিরিচ ধরে রাখতে না পারা',
      'একজিমা ও চর্মরোগ, যা পানি লাগালে বাড়ে'
    ],
    aggravation: ['রাতে', 'ঋতুস্রাবের সময়', 'পানি লাগালে'],
    amelioration: ['খাওয়ার পর', 'বাঁকা হয়ে শুলে'],
    relationships: {
      complementary: ['Rhus Tox'],
      antidotes: ['Camphora'],
      followsWell: ['Alum', 'Calc-c', 'Rhus-t', 'Sep']
    },
    summary: 'হাতে জিনিস ধরে রাখতে না পারা (আনাড়িপনা), রাতে ঋতুস্রাব ও চুলকানিতে মহৌষধ।'
  },

  'Cann-i': {
    id: 'Cann-i',
    name: 'Cannabis Indica',
    latinName: 'Cannabis Indica',
    commonName: 'Hashish / Indian Hemp',
    keynotes: [
      'সময় ও দূরত্বের চরম ভুল ধারণা (কয়েক সেকেন্ডকে কয়েক ঘণ্টা মনে হওয়া)',
      'অপ্রতিরোধ্য হাসি ও কাল্পনিক চিন্তা-ভাবনায় ডুবে থাকা',
      'মূত্রনালীতে তীব্র জ্বালাপোড়া ও প্রস্রাবের ফোঁটা ফোঁটা নির্গমন'
    ],
    organAffinities: ['Mind', 'Nervous System', 'Urinary Tract', 'Heart'],
    mindSymptoms: [
      'এক সেকেন্ড আগে কী বলেছে তা ভুলে যাওয়া',
      'মাথা ও মনে হাজার হাজার চিন্তার দ্রুত আসা-যাওয়া'
    ],
    headAndNeck: [
      'মাথার তালু খুলে যাওয়ার মতো অনুভূতি',
      'চোখ লাল ও অত্যন্ত শুষ্ক বোধ হওয়া'
    ],
    stomachAndAbdomen: [
      'প্রচণ্ড ক্ষুধা পাওয়া (Unquenchable hunger)',
      'পেটে খোঁচা মারার মতো অনুভূতি'
    ],
    respiratory: [
      'হৃদপিণ্ডে সুঁচ ফোটানো ব্যথা ও বুক ধড়ফড়ানি'
    ],
    extremitiesAndSkin: [
      'হাত-পা অবশ ভাব ও ঝিনঝিন করা',
      'পিঠের ওপরের অংশে কামড়ানো ব্যথা'
    ],
    aggravation: ['সকালে', 'মানসিক পরিশ্রমে', 'মদ পানে'],
    amelioration: ['খোলা বাতাসে', 'ঠান্ডা পানিতে মুখ ধুলে'],
    relationships: {
      complementary: ['Belladonna'],
      antidotes: ['Camphora', 'Lemon juice'],
      followsWell: ['Bell', 'Hyos', 'Nux-v', 'Op']
    },
    summary: 'সময়ের বিভ্রান্তি, স্মৃতির মারাত্মক গোলযোগ ও গণোরিয়াজনিত প্রস্রাবের কষ্টে প্রধান।'
  },

  'Caps': {
    id: 'Caps',
    name: 'Capsicum Annuum',
    latinName: 'Capsicum Annuum',
    commonName: 'Chilli Pepper',
    keynotes: [
      'গৃহকাতরতা বা দেশত্যাগের কারণে মন খারাপ ও বিষণ্ণতা (Homesickness)',
      'শরীরের যেকোনো স্থানে মরিচ পোড়ার মতো তীব্র জ্বালাপোড়া (Burning pain)',
      'কান বা কানের পেছনের হাড়ে (Mastoid bone) প্রচণ্ড ব্যথা ও ফোলা'
    ],
    organAffinities: ['Mucous Membranes', 'Ears', 'Digestive Tract', 'Mind'],
    mindSymptoms: [
      'বাড়ি বা চেনা জায়গা ছেড়ে দূরে গেলে মন খারাপ করে বসে থাকা',
      'খিটখিটে মেজাজ, একগুঁয়ে ও রাগী স্বভাব'
    ],
    headAndNeck: [
      'কানের পেছনের হাড় লাল হয়ে ফুলে যাওয়া ও পুঁজ পড়া',
      'মুখের ভেতর ও গলায় লঙ্কা বা মরিচ বাটার মতো জ্বালা'
    ],
    stomachAndAbdomen: [
      'পানি পানের পরই শরীরে শিউরে ওঠা বা ঠান্ডা লাগা',
      'পায়খানার সাথে রক্ত ও আম পড়া, পায়খানার পর তীব্র কোঁথানি'
    ],
    respiratory: [
      'কাশি দিলে শরীরের দূরবর্তী অংশে (যেমন কানে বা পেটে) ব্যথা পাওয়া'
    ],
    extremitiesAndSkin: [
      'জোড়ায় জোড়ায় বাত ও শক্ত ভাব',
      'মোটা ও অলস রোগীদের ক্ষেত্রে দ্রুত কার্যকর'
    ],
    aggravation: ['ঠান্ডা বাতাসে', 'পানি পানে', 'খোলা জায়গায়'],
    amelioration: ['উষ্ণতায়', 'নড়াচড়া করলে'],
    relationships: {
      complementary: ['Natrum Mur'],
      antidotes: ['Cina', 'Camphora'],
      followsWell: ['Bell', 'Lyc', 'Puls', 'Sulph']
    },
    summary: 'হোমসিকনেস/গৃহকাতরতা, মরিচ পোড়ার মতো জ্বালা ও কান পাকা রোগের সেরা সমাধান।'
  },

  'Chel': {
    id: 'Chel',
    name: 'Chelidonium Majus',
    latinName: 'Chelidonium Majus',
    commonName: 'Celandine',
    keynotes: [
      'ডান কাঁধের নিচের হাড়ে (Right scapula) নির্দিষ্ট এক জায়গায় স্থায়ী ব্যথা',
      'জন্ডিস, যকৃতের সমস্যা এবং প্রস্রাব গাঢ় হলুদ বা চা-এর মতো লাল হওয়া',
      'গরম খাবার ও গরম পানীয় খাওয়ার তীব্র ইচ্ছা যা পেটের কষ্ট কমায়'
    ],
    organAffinities: ['Liver', 'Gallbladder', 'Digestive Tract', 'Right Side'],
    mindSymptoms: [
      'চিন্তাভাবনা করতে অলসতা ও বিষাদগ্রস্ত মন',
      'সর্বদা খিটখিটে ও অন্যের ওপর হুকুম চালানোর স্বভাব'
    ],
    headAndNeck: [
      'চোখের সাদা অংশ ও ত্বক হলুদ হয়ে যাওয়া (Jaundice)',
      'জিহ্বা হলুদ আস্তরণযুক্ত এবং পাশে দাঁতের ছাপ পড়া'
    ],
    stomachAndAbdomen: [
      'পিত্তথলিতে পাথর বা যকৃতে প্রদাহের কারণে ডান পাঁজরে ব্যথা',
      'গরম পানি বা গরম দুধ খেলে পেটের ব্যথা কমা'
    ],
    respiratory: [
      'ডান ফুসফুসে নিউমোনিয়া ও সাথে জন্ডিসের লক্ষণ'
    ],
    extremitiesAndSkin: [
      'ডান হাত ও ডানা বরফের মতো ঠান্ডা থাকা',
      'ত্বক হলুদ বা সোনা রঙের হওয়া'
    ],
    aggravation: ['আবহাওয়ার পরিবর্তনে', 'ভোর ৪টায়', 'ডান পাশে শুলে'],
    amelioration: ['গরম খাবার বা পানীয় খেলে', 'চাপ দিলে'],
    relationships: {
      complementary: ['Lycopodium'],
      antidotes: ['Aconite', 'Camphora'],
      followsWell: ['Ars', 'Bry', 'Lyc', 'Nux-v', 'Sulph']
    },
    summary: 'ডান কাঁধে ব্যথা, লিভারের গোলযোগ, জন্ডিস এবং গরম পানে উপশমে ১ নম্বর ওষুধ।'
  },

  'Cic': {
    id: 'Cic',
    name: 'Cicuta Virosa',
    latinName: 'Cicuta Virosa',
    commonName: 'Water Hemlock',
    keynotes: [
      'ভয়ানক খিঁচুনি বা মৃগী রোগ, মাথা পেছনের দিকে ধনুকের মতো বেঁকে যাওয়া (Opisthotonos)',
      'মাথায় বা মুখে পুরু মধু বা আঠার মতো খোলস পড়া চর্মরোগ (Eczema capitis)',
      'ছোট বাচ্চাদের মতো অদ্ভুত ও শিশুসুলভ আচরণ করা'
    ],
    organAffinities: ['Nervous System', 'Brain', 'Spine', 'Skin'],
    mindSymptoms: [
      'বয়স্ক মানুষও শিশুদের মতো খেলনা দিয়ে খেলে বা বাচ্চা আচরণ করে',
      'মানুষকে অপছন্দ করা ও নিজেকে গুটিয়ে রাখা'
    ],
    headAndNeck: [
      'খিঁচুনির সময় মুখমণ্ডল নীলচে ও বিকৃত হয়ে যাওয়া',
      'মাথার ত্বক ও মুখের ওপর শক্ত হলুদ খোলসযুক্ত ঘা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে খামচানো ও অখাদ্য (যেমন চক, মাটি) খাওয়ার অদম্য ইচ্ছা',
      'হঠাৎ পেটে খিঁচুনি উঠে বমি হওয়া'
    ],
    respiratory: [
      'বুকের মাংসপেশী শক্ত হয়ে শ্বাস আটকে যাওয়া'
    ],
    extremitiesAndSkin: [
      'খিঁচুনির সময় ঘাড় ও হাত-পা উল্টো দিকে বেঁকে যাওয়া',
      'আঘাতের কুফলজনিত স্নায়বিক সমস্যা'
    ],
    aggravation: ['স্পর্শে', 'আঘাত লাগলে', 'শব্দে ও তামাকের ধোঁয়ায়'],
    amelioration: ['উষ্ণতায়', 'বায়ু নিঃসরণ হলে'],
    relationships: {
      complementary: ['Belladonna'],
      antidotes: ['Arn', 'Camphora'],
      followsWell: ['Bell', 'Cuprum', 'Opium']
    },
    summary: 'তীব্র খিঁচুনি, ঘাড় বেঁকে যাওয়া এবং মাথায় হলুদ চটচটে খোলস পড়া ঘায় অপ্রতিদ্বন্দ্বী।'
  },

  'Coch': {
    id: 'Coch',
    name: 'Cochlearia Armoracia',
    latinName: 'Armoracia Rusticana',
    commonName: 'Horse-Radish',
    keynotes: [
      'নাক ও চোখ দিয়ে অনবরত প্রচুর পানি পড়া এবং হাঁচি',
      'জরায়ু ও মূত্রনালীর তীব্র জ্বালাপোড়া ও প্রস্রাব বন্ধ হওয়া (Strangury)',
      'পেটে গ্যাস ও পেট ফাঁপার সাথে গলা জ্বালা'
    ],
    organAffinities: ['Mucous Membranes', 'Urinary Organs', 'Respiratory Tract'],
    mindSymptoms: [
      'শারীরিক কষ্টের কারণে অস্থিরতা ও অলসতা',
      'কাজে মনোযোগ দিতে না পারা'
    ],
    headAndNeck: [
      'মাথার ত্বকে খিঁচ ধরে থাকার মতো অনুভূতি',
      'চোখ থেকে গরম পানি পড়া ও জ্বালা করা'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে হঠাৎ প্রচণ্ড ক্র্যাম্প বা কামড়ানো ব্যথা',
      'পেটে বায়ুর চাপে পেট ঢাকের মতো ফোলা'
    ],
    respiratory: [
      'গলায় শ্লেষ্মা জমে ঘড়ঘড় করা ও শুষ্ক কাশি'
    ],
    extremitiesAndSkin: [
      'হাত-পায়ের জোড়ায় বাতের ফোলা ও ব্যথা',
      'ত্বকে লালচে দানা'
    ],
    aggravation: ['ঠান্ডা বাতাসে', 'সন্ধ্যায়'],
    amelioration: ['উষ্ণতায়', 'বিশ্রামে'],
    relationships: {
      complementary: ['Allium Cepa'],
      antidotes: ['Camphora'],
      followsWell: ['Ars', 'Canth', 'Puls']
    },
    summary: 'প্রচুর সর্দি-হাঁচি, প্রস্রাবের যন্ত্রণাদায়ক আটকে থাকা এবং পেট ফাঁপায় কার্যকর।'
  } 
};