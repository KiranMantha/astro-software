export const NAKSHATRA_ALIAS_MAP: Record<string, string> = {
  Visa: 'Vish',
  Aswi: 'Ashv',
  Pubba: 'PPha',
  Uttara: 'UPha'
};

export const NAKSHATRA_FULL_NAMES: Record<string, string> = {
  Ashv: 'Ashwini',
  Bhar: 'Bharani',
  Krit: 'Krittika',
  Rohi: 'Rohini',
  Mrig: 'Mrigashira',
  Ardr: 'Ardra',
  Puna: 'Punarvasu',
  Push: 'Pushya',
  Asre: 'Ashlesha',
  Magh: 'Magha',
  PPha: 'Purva Phalguni',
  UPha: 'Uttara Phalguni',
  Hast: 'Hasta',
  Chit: 'Chitra',
  Swat: 'Swati',
  Vish: 'Vishakha',
  Anu: 'Anuradha',
  Jye: 'Jyeshta',
  Mool: 'Moola',
  PSha: 'Purva Ashadha',
  USha: 'Uttara Ashadha',
  Srav: 'Sravana',
  Dhan: 'Dhanishta',
  Sata: 'Satabhisha',
  PBha: 'Purva Bhadra',
  UBha: 'Uttara Bhadra',
  Reva: 'Revati'
};

export const RASI_FULL_NAMES: Record<string, string> = {
  Ar: 'Aries (Mesham)',
  Ta: 'Taurus (Vrishabham)',
  Ge: 'Gemini (Mithunam)',
  Cn: 'Cancer (Karkatakam)',
  Le: 'Leo (Simham)',
  Vi: 'Virgo (Kanya)',
  Li: 'Libra (Tula)',
  Sc: 'Scorpio (Vrischikam)',
  Sg: 'Sagittarius (Dhanassu)',
  Cp: 'Capricorn (Makaram)',
  Aq: 'Aquarius (Kumbham)',
  Pi: 'Pisces (Meenam)'
};

export const PLANET_FULL_NAMES: Record<string, string> = {
  Sun: 'Sun (Surya)',
  Moon: 'Moon (Chandra)',
  Rah: 'Rahu',
  Jup: 'Jupiter (Guru)',
  Sat: 'Saturn (Shani)',
  Merc: 'Mercury (Budha)',
  Ket: 'Ketu',
  Ven: 'Venus (Sukra)',
  Mars: 'Mars (Kuja)',
  Uranus: 'Uranus',
  Neptune: 'Neptune',
  Pluto: 'Pluto'
};

export const NAVAMSA_COMBINATION: Record<string, number> = {
  'Ar,Ar': 1,
  'Ar,Ta': 2,
  'Ar,Ge': 3,
  'Ar,Ca': 4,
  'Ar,Le': 5,
  'Ar,Vi': 6,
  'Ar,Li': 7,
  'Ar,Sc': 8,
  'Ar,Sg': 9,
  'Ta,Cp': 10,
  'Ta,Aq': 11,
  'Ta,Pi': 12,
  'Ta,Ar': 13,
  'Ta,Ta': 14,
  'Ta,Ge': 15,
  'Ta,Ca': 16,
  'Ta,Le': 17,
  'Ta,Vi': 18,
  'Ge,Li': 19,
  'Ge,Sc': 20,
  'Ge,Sg': 21,
  'Ge,Cp': 22,
  'Ge,Aq': 23,
  'Ge,Pi': 24,
  'Ge,Ar': 25,
  'Ge,Ta': 26,
  'Ge,Ge': 27,
  'Ca,Ca': 28,
  'Ca,Le': 29,
  'Ca,Vi': 30,
  'Ca,Li': 31,
  'Ca,Sc': 32,
  'Ca,Sg': 33,
  'Ca,Cp': 34,
  'Ca,Aq': 35,
  'Ca,Pi': 36,
  'Le,Ar': 37,
  'Le,Ta': 38,
  'Le,Ge': 39,
  'Le,Ca': 40,
  'Le,Le': 41,
  'Le,Vi': 42,
  'Le,Li': 43,
  'Le,Sc': 44,
  'Le,Sg': 45,
  'Vi,Cp': 46,
  'Vi,Aq': 47,
  'Vi,Pi': 48,
  'Vi,Ar': 49,
  'Vi,Ta': 50,
  'Vi,Ge': 51,
  'Vi,Ca': 52,
  'Vi,Le': 53,
  'Vi,Vi': 54,
  'Li,Li': 55,
  'Li,Sc': 56,
  'Li,Sg': 57,
  'Li,Cp': 58,
  'Li,Aq': 59,
  'Li,Pi': 60,
  'Li,Ar': 61,
  'Li,Ta': 62,
  'Li,Ge': 63,
  'Sc,Ca': 64,
  'Sc,Le': 65,
  'Sc,Vi': 66,
  'Sc,Li': 67,
  'Sc,Sc': 68,
  'Sc,Sg': 69,
  'Sc,Cp': 70,
  'Sc,Aq': 71,
  'Sc,Pi': 72,
  'Sg,Ar': 73,
  'Sg,Ta': 74,
  'Sg,Ge': 75,
  'Sg,Ca': 76,
  'Sg,Le': 77,
  'Sg,Vi': 78,
  'Sg,Li': 79,
  'Sg,Sc': 80,
  'Sg,Sg': 81,
  'Cp,Cp': 82,
  'Cp,Aq': 83,
  'Cp,Pi': 84,
  'Cp,Ar': 85,
  'Cp,Ta': 86,
  'Cp,Ge': 87,
  'Cp,Ca': 88,
  'Cp,Le': 89,
  'Cp,Vi': 90,
  'Aq,Li': 91,
  'Aq,Sc': 92,
  'Aq,Sg': 93,
  'Aq,Cp': 94,
  'Aq,Aq': 95,
  'Aq,Pi': 96,
  'Aq,Ar': 97,
  'Aq,Ta': 98,
  'Aq,Ge': 99,
  'Pi,Ca': 100,
  'Pi,Le': 101,
  'Pi,Vi': 102,
  'Pi,Li': 103,
  'Pi,Sc': 104,
  'Pi,Sg': 105,
  'Pi,Cp': 106,
  'Pi,Aq': 107,
  'Pi,Pi': 108
};

export const ASTA_KOOTAMI = [
  {
    name: 'Varna',
    subject: 'Inclination',
    maxScore: 1
  },
  {
    name: 'Vaysa',
    subject: 'Harmony',
    maxScore: 2
  },
  {
    name: 'Tara',
    subject: 'Fortune',
    maxScore: 3
  },
  {
    name: 'Yoni',
    subject: 'Attachment',
    maxScore: 4
  },
  {
    name: 'Graha Maitri',
    subject: 'Co-operation',
    maxScore: 5
  },
  {
    name: 'Gana',
    subject: 'Relationship',
    maxScore: 6
  },
  {
    name: 'Bhakoot',
    subject: 'Happiness',
    maxScore: 7
  },
  {
    name: 'Naadi',
    subject: 'Stability',
    maxScore: 8
  }
];

export const VARNAS: Record<string, string> = {
  B: 'Brahmin',
  K: 'Kshatriya',
  V: 'Vaysya',
  S: 'Shudra'
};

export const VASYAS: Record<string, string> = {
  C: 'Chatushpada',
  M: 'Maanava',
  J: 'Jalachara',
  V: 'Vanachara',
  K: 'Keetaka'
};

export const GANAS: Record<string, string> = {
  D: 'Deva',
  M: 'Maanava',
  R: 'Rakshasa'
};

export const NAADIS: Record<string, string> = {
  Ad: 'Aadi',
  Md: 'Madhya',
  An: 'Antya'
};

// Chaldean Numerology Mapping
export const NUMEROLOGY_LETTER_SCORES: { [key: string]: number } = {
  A: 1,
  I: 1,
  J: 1,
  Q: 1,
  Y: 1,
  B: 2,
  K: 2,
  R: 2,
  C: 3,
  G: 3,
  L: 3,
  S: 3,
  D: 4,
  M: 4,
  T: 4,
  E: 5,
  H: 5,
  N: 5,
  X: 5,
  U: 6,
  V: 6,
  W: 6,
  O: 7,
  Z: 7,
  F: 8,
  P: 8
};

export const NUMEROLOGY_MAP = {
  1: {
    favorableColors: ['Orange', 'White'],
    excellent: [1, 4],
    good: [5, 9, 3],
    bad: [7, 8],
    neutral: [2, 6]
  },
  2: {
    favorableColors: ['White', 'Grey'],
    excellent: [7, 5],
    good: [2, 6, 4],
    bad: [9, 8],
    neutral: [1, 3]
  },
  3: {
    favorableColors: ['Yellow', 'Turquoise', 'Light Blue'],
    excellent: [1, 9],
    good: [3, 5],
    bad: [6, 8],
    neutral: [2, 4, 7]
  },
  4: {
    favorableColors: ['Mixed Colors'],
    excellent: [1],
    good: [5, 6],
    bad: [4, 7, 8],
    neutral: [2, 3, 9]
  },
  5: {
    favorableColors: ['Light Green'],
    excellent: [4, 5],
    good: [1, 2, 3, 6, 7, 8, 9],
    bad: [],
    neutral: []
  },
  6: {
    favorableColors: ['Pink'],
    excellent: [5],
    good: [6, 9],
    bad: [1, 7, 8],
    neutral: [2, 3, 4]
  },
  7: {
    favorableColors: ['All Colours'],
    excellent: [2],
    good: [5],
    bad: [8, 9],
    neutral: [1, 3, 4, 6, 7]
  },
  8: {
    favorableColors: ['Light Black', 'Dark Blue', 'Royal Blue', 'Light Blue'],
    excellent: [5],
    good: [1],
    bad: [8, 4, 7],
    neutral: [2, 3, 6, 9]
  },
  9: {
    favorableColors: ['Brown', 'Red'],
    excellent: [1, 3],
    good: [5, 6, 9],
    bad: [2, 8, 7],
    neutral: [4]
  }
};

export const PYTHAGOREAN_NUMEROLOGY_LETTER_SCORES = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8
};

export const SHIVAMAYA_MATRIX_FOR_RULING_NUMBER = {
  1: [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4]
  ],
  2: [
    [7, 8, 3],
    [2, 6, 10],
    [9, 4, 5]
  ],
  3: [
    [10, 11, 6],
    [5, 9, 13],
    [12, 7, 8]
  ],
  4: [
    [13, 14, 9],
    [8, 12, 16],
    [15, 10, 11]
  ],
  5: [
    [9, 10, 5],
    [4, 8, 12],
    [11, 6, 7]
  ],
  6: [
    [11, 12, 7],
    [6, 10, 14],
    [13, 8, 9]
  ],
  7: [
    [14, 15, 10],
    [9, 13, 17],
    [16, 11, 12]
  ],
  8: [
    [12, 13, 8],
    [7, 11, 15],
    [14, 9, 10]
  ],
  9: [
    [8, 9, 4],
    [3, 7, 11],
    [10, 5, 6]
  ]
};
