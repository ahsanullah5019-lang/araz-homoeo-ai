export interface RemedyInfo {
  id: string;
  name: string;
  latinName: string;
  commonName: string;
  keynotes: string[];
  organAffinities: string[]; // কোন কোন অঙ্গ বা সিস্টেমে কাজ করে
  mindSymptoms: string[];
  headAndNeck: string[];
  stomachAndAbdomen: string[];
  respiratory: string[];
  extremitiesAndSkin: string[];
  aggravation: string[]; // কিসে বাড়ে
  amelioration: string[]; // কিসে কমে
  relationships: {
    complementary?: string[];
    antidotes?: string[];
    followsWell?: string[];
  };
  summary: string;
}

export const MATERIA_MEDICA_DATABASE: Record<string, RemedyInfo> = {
  'Ars': {
    id: 'Ars',
    name: 'Arsenicum Album',
    latinName: 'Arsenicum Album',
    commonName: 'White Oxide of Arsenic',
    keynotes: [
      'প্রচণ্ড অস্থিরতা ও মৃত্যুভয় (Restlessness & Fear of Death)',
      'জ্বালাকর যন্ত্রণা যা উত্তাপে কমে (Burning pains relieved by heat)',
      'একবারে অল্প অল্প পানি বারবার পান করা (Unquenchable thirst for small quantities)'
    ],
    organAffinities: ['Gastrointestinal Tract', 'Respiratory System', 'Mind', 'Skin', 'Heart'],
    mindSymptoms: [
      'মৃত্যুর তীব্র ভয়, মনে করে ওষুধ খেয়ে কোনো লাভ নেই',
      'অত্যন্ত খিটখিটে ও পরিচ্ছন্নতাবাদী (Fastidious)',
      'এক জায়গায় স্থির থাকতে পারে না, শয্যা পরিবর্তন করে'
    ],
    headAndNeck: [
      'মাথাব্যথা গরম ছেকে কমে',
      'চোখ থেকে গরম জল পড়ে ও জ্বালাপোড়া করে'
    ],
    stomachAndAbdomen: [
      'পাকস্থলীতে তীব্র জ্বালা ও ক্ষতের অনুভূতি',
      'পচা খাবার, ঠান্ডা ফল বা পানীয় খাওয়ার পর বমি ও পাতলা পায়খানা',
      'পেটে সামান্য খাবার বা জল পড়লেই বমি হয়ে যায়'
    ],
    respiratory: [
      'হাঁপানি বা শ্বাসকষ্ট, মধ্যরাতে (রাত ১টা থেকে ২টা) বৃদ্ধি পায়',
      'শুয়ে থাকতে পারে না, সোজা হয়ে বসে থাকতে হয়'
    ],
    extremitiesAndSkin: [
      'চামড়া শুষ্ক, খসখসে ও শুষ্ক চুলকানি',
      'হাত-পা ঠান্ডা কিন্তু ভেতরের অংশ জ্বালা করে'
    ],
    aggravation: ['রাত ১২টা থেকে ২টা', 'ঠান্ডা খাবার ও পানীয়', 'আর্দ্র আবহাওয়া'],
    amelioration: ['উত্তাপ বা গরম ছেক', 'গরম পানীয়', 'মাথা উঁচু করে রাখা'],
    relationships: {
      complementary: ['Thuja', 'Phosphorus', 'Nux-v'],
      antidotes: ['Camphora', 'Ipecac', 'Nux-v'],
      followsWell: ['Aconite', 'Belladonna', 'Bryonia', 'Pulsatilla']
    },
    summary: 'প্রচণ্ড অস্থিরতা, দুর্বলতা, ক্ষয় ও জ্বালাপোড়ার লক্ষণে আর্সেনিক একটি মহৌষধ। রোগী শারীরিক ও মানসিকভাবে অত্যন্ত কাতর থাকে।'
  },
  'Nux-v': {
    id: 'Nux-v',
    name: 'Nux Vomica',
    latinName: 'Nux Vomica',
    commonName: 'Poison Nut',
    keynotes: [
      'খিটখিটে স্বভাব ও সহ্যক্ষমতার অভাব (Irritable and Impatient)',
      'বারবার পায়খানার বেগ কিন্তু অসম্পূর্ণ ত্যাগ (Ineffectual urging for stool)',
      'অতিরিক্ত রাত জাগা ও নেশাজাতীয়/উত্তেজক দ্রব্যের কুফল'
    ],
    organAffinities: ['Digestive System', 'Nervous System', 'Liver', 'Mind'],
    mindSymptoms: [
      'খুব সহজেই রেগে যায়, সামান্য শব্দ বা আলো সহ্য করতে পারে না',
      'কাজের প্রতি চরম একনিষ্ঠ কিন্তু সব কিছুতে তাড়া থাকে',
      'মানসিক চাপের কারণে অনিদ্রা'
    ],
    headAndNeck: [
      'সকালে ঘুম থেকে ওঠার পর কপালে ভারী মাথাব্যথা',
      'চোখ লাল ও সংবেদনশীল'
    ],
    stomachAndAbdomen: [
      'খাওয়ার ১-২ ঘণ্টা পর পেটে চাপ ও ভার অনুভব',
      'কোষ্ঠকাঠিন্য, বারবার পায়খানার মলদ্বারে কোঁথ কিন্তু পরিষ্কার হয় না',
      'যকৃৎ বা লিভারের জায়গায় ব্যথা ও চাপ অনুভব'
    ],
    respiratory: [
      'সকালে ও খাওয়ার পর হাঁচি ও নাক বন্ধভাব'
    ],
    extremitiesAndSkin: [
      'শরীরে জ্বর বা ঠান্ডার সময় গায়ে কাপড় জড়িয়ে রাখতে চায়'
    ],
    aggravation: ['সকাল বেলা', 'মানসিক চাপ ও রাত জাগা', 'স্পর্শ ও ঠান্ডা বাতাস'],
    amelioration: ['সন্ধ্যায় বিশ্রাম', 'উষ্ণ আবহাওয়া', 'স্বল্প ঘুম'],
    relationships: {
      complementary: ['Sulphur'],
      antidotes: ['Aconite', 'Belladonna', 'Pulsatilla'],
      followsWell: ['Bryonia', 'Pulsatilla', 'Sulphur']
    },
    summary: 'আধুনিক জীবনযাত্রার কুপছন্দ, অতিরিক্ত রাত জাগা, চা-কফি বা অ্যালকোহল সেবন এবং মানসিক পরিশ্রমকারীদের পেটের সমস্যায় নাক্স ভূমিকা অনন্য।'
  },
  'Puls': {
    id: 'Puls',
    name: 'Pulsatilla Nigricans',
    latinName: 'Pulsatilla Pratensis',
    commonName: 'Wind Flower',
    keynotes: [
      'পরিবর্তনশীল লক্ষণাবলি (Changeable symptoms)',
      'পিপাসাহীনতা (Thirstlessness)',
      'উন্মুক্ত ও ঠান্ডা বাতাসে উপশম (Relief in open, cool air)'
    ],
    organAffinities: ['Venous System', 'Mucous Membranes', 'Female Reproductive', 'Mind'],
    mindSymptoms: [
      'সহজেই কেঁদে ফেলে এবং সহানুভূতি চায়',
      'নরম, শান্ত ও নমনীয় স্বভাব',
      'একা থাকতে ভয় পায়'
    ],
    headAndNeck: [
      'মাথাব্যথা ঘোরাঘুরি করলে এবং ঠান্ডা বাতাসে কমে',
      'চোখ থেকে ঘন, হলুদ ও ব্যথাহীন পুঁজের মতো স্রাব'
    ],
    stomachAndAbdomen: [
      'চর্বিজাতীয় ও ঘি-মাখন খাওয়ার পর পেটের গণ্ডগোল',
      'মুখ শুকিয়ে থাকে কিন্তু জলপিপাসা থাকে না',
      'মুখে তিতা বা বিশ্রী স্বাদ'
    ],
    respiratory: [
      'সন্ধ্যায় শুলে কাশি বাড়ে, সকালে কফ ওঠে'
    ],
    extremitiesAndSkin: [
      'শিরা স্ফীত বা আঁকাবাঁকা (Varicose veins)',
      'এক স্থান থেকে অন্য স্থানে সঞ্চরণশীল বাতের ব্যথা'
    ],
    aggravation: ['বন্ধ ঘর বা গরম আবহাওয়া', 'চর্বিযুক্ত খাবার', 'সন্ধ্যাবেলা'],
    amelioration: ['খোলা বাতাস', 'ধীরে ধীরে হাঁটাচলা', 'ঠান্ডা প্রয়োগ'],
    relationships: {
      complementary: ['Lycopodium', 'Silicea'],
      antidotes: ['Chamomilla', 'Coffea', 'Ignatia'],
      followsWell: ['Kali-bi', 'Sepia', 'Sulphur']
    },
    summary: 'কোমল স্বভাবের ব্যক্তি, যাদের লক্ষণ ক্ষণে ক্ষণে পরিবর্তিত হয় এবং রোগী গরম সহ্য করতে পারে না, তাদের জন্য পালসেটিলা পরম বন্ধু।'
  }
};