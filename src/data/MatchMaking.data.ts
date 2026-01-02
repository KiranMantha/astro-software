/**
 * value is a tuple of [Varna, Vaysa, Tara, Yoni, Graha Maitri, Gana, Bhakoot, Naadi]
 */
export const MaitriMatrix: Record<string, string[]> = {
  Ashv: ['K', 'C', 'Ashv', 'ASHWAM', 'Mars', 'D', 'Ar', 'Ad'],
  Bhar: ['K', 'C', 'Bhar', 'GAJAM', 'Mars', 'M', 'Ar', 'Md'],
  'Krit-1': ['K', 'C', 'Krit', 'MEKA', 'Mars', 'R', 'Ar', 'An'],
  'Krit-2,3,4': ['V', 'C', 'Krit', 'MEKA', 'Ven', 'R', 'Ta', 'An'],
  Rohi: ['V', 'C', 'Rohi', 'SARPAM', 'Ven', 'M', 'Ta', 'An'],
  'Mrig-1,2': ['V', 'C', 'Mrig', 'SARPAM', 'Ven', 'D', 'Ta', 'Md'],
  'Mrig-3,4': ['S', 'M', 'Mrig', 'SARPAM', 'Merc', 'D', 'Ge', 'Md'],
  Ardr: ['S', 'M', 'Ardr', 'KUKKA', 'Merc', 'M', 'Ge', 'Ad'],
  'Puna-1,2,3': ['S', 'M', 'Puna', 'PILLI', 'Merc', 'D', 'Ge', 'Ad'],
  'Puna-4': ['B', 'J', 'Puna', 'PILLI', 'Moon', 'D', 'Cn', 'Ad'],
  Push: ['B', 'J', 'Push', 'MEKA', 'Moon', 'D', 'Cn', 'Md'],
  Asre: ['B', 'J', 'Asre', 'PILLI', 'Moon', 'R', 'Cn', 'An'],
  Magh: ['K', 'V', 'Magh', 'ELUKA', 'Sun', 'R', 'Le', 'An'],
  PPha: ['K', 'V', 'PPha', 'ELUKA', 'Sun', 'M', 'Le', 'Md'],
  'UPha-1': ['K', 'V', 'UPha', 'GOVU', 'Sun', 'M', 'Le', 'Ad'],
  'UPha-2,3,4': ['V', 'M', 'UPha', 'GOVU', 'Merc', 'M', 'Vi', 'Ad'],
  Hast: ['V', 'M', 'Hast', 'MAHISHA', 'Merc', 'D', 'Vi', 'Ad'],
  'Chit-1,2': ['V', 'M', 'Chit', 'PULI', 'Merc', 'R', 'Vi', 'Md'],
  'Chit-3,4': ['S', 'M', 'Chit', 'PULI', 'Ven', 'R', 'Li', 'Md'],
  Swat: ['S', 'M', 'Swat', 'DUNNA', 'Ven', 'D', 'Li', 'An'],
  'Vish-1': ['S', 'M', 'Vish', 'PULI', 'Ven', 'R', 'Li', 'An'],
  'Vish-2,3,4': ['B', 'K', 'Vish', 'LEDI', 'Mars', 'R', 'Ta', 'An'],
  Anu: ['B', 'K', 'Anu', 'LEDI', 'Mars', 'D', 'Ta', 'Md'],
  Jye: ['B', 'K', 'Jye', 'LEDI', 'Mars', 'R', 'Ta', 'Ad'],
  Mool: ['K', 'M', 'Mool', 'KUKKA', 'Jup', 'R', 'Sg', 'Ad'],
  PSha: ['K', 'M', 'PSha', 'KOTI', 'Jup', 'M', 'Sg', 'Md'],
  'USha-1': ['K', 'M', 'USha', 'MUNGISA', 'Jup', 'M', 'Sg', 'An'],
  'USha-2,3,4': ['V', 'J', 'USha', 'MUNGISA', 'Sat', 'M', 'Cp', 'An'],
  Srav: ['V', 'J', 'Srav', 'KOTI', 'Sat', 'D', 'Cp', 'An'],
  'Dhan-1,2': ['V', 'J', 'Dhan', 'SIMHAM', 'Sat', 'R', 'Cp', 'Md'],
  'Dhan-3,4': ['S', 'M', 'Dhan', 'SIMHAM', 'Sat', 'R', 'Aq', 'Md'],
  Sata: ['S', 'M', 'Sata', 'ASHWAM', 'Sat', 'R', 'Aq', 'Ad'],
  'PBha-1,2,3': ['S', 'M', 'PBha', 'SIMHAM', 'Sat', 'M', 'Aq', 'Ad'],
  'PBha-4': ['B', 'J', 'PBha', 'SIMHAM', 'Jup', 'M', 'Pi', 'Ad'],
  UBha: ['B', 'J', 'UBha', 'GOVU', 'Jup', 'M', 'Pi', 'Md'],
  Reva: ['B', 'J', 'Reva', 'GAJAM', 'Jup', 'D', 'Pi', 'An']
};

/**
 * 1. Varnas
 * 1. B => Brahmin
 * 2. K => Kshatriya
 * 3. V => Vaysya
 * 4. S => Shudra
 */
export const VarnaMatrix: Record<string, Record<string, number>> = {
  B: {
    B: 1,
    K: 0,
    V: 0,
    S: 0
  },
  K: {
    B: 1,
    K: 1,
    V: 0,
    S: 0
  },
  V: {
    B: 1,
    K: 1,
    V: 1,
    S: 0
  },
  S: {
    B: 1,
    K: 1,
    V: 1,
    S: 1
  }
};

/**
 * 2. Vasya
 * C => Chatushpada
 * M => Maanava
 * J => Jalachara
 * V => Vanachara
 * K => Keetaka
 */
export const VasyaMatrix: Record<string, Record<string, number>> = {
  C: {
    C: 2,
    M: 1 / 2,
    J: 1,
    V: 0,
    K: 2
  },
  M: {
    C: 1 / 2,
    M: 2,
    J: 0,
    V: 0,
    K: 0
  },
  J: {
    C: 1,
    M: 0,
    J: 2,
    V: 2,
    K: 2
  },
  V: {
    C: 0,
    M: 0,
    J: 2,
    V: 2,
    K: 0
  },
  K: {
    C: 1,
    M: 0,
    J: 1,
    V: 0,
    K: 2
  }
};

/**
 * 3. Tara
 */
export const TaraMatrix: Record<string, Record<string, number>> = {
  'Ashv,Magh,Mool': {
    'Ashv,Magh,Mool': 3,
    'Bhar,PPha,PSha': 3,
    'Krit,UPha,USha': 3 / 2,
    'Rohi,Hast,Srav': 3,
    'Mrig,Chit,Dhan': 3 / 2,
    'Ardr,Swat,Sata': 3,
    'Puna,Vish,PBha': 3 / 2,
    'Push,Anu,UBha': 3,
    'Asre,Jye,Reva': 3
  },
  'Bhar,PPha,PSha': {
    'Ashv,Magh,Mool': 3,
    'Bhar,PPha,PSha': 3,
    'Krit,UPha,USha': 3 / 2,
    'Rohi,Hast,Srav': 3,
    'Mrig,Chit,Dhan': 3 / 2,
    'Ardr,Swat,Sata': 3,
    'Puna,Vish,PBha': 3 / 2,
    'Push,Anu,UBha': 3,
    'Asre,Jye,Reva': 3
  },
  'Krit,UPha,USha': {
    'Ashv,Magh,Mool': 3 / 2,
    'Bhar,PPha,PSha': 3 / 2,
    'Krit,UPha,USha': 0,
    'Rohi,Hast,Srav': 3 / 2,
    'Mrig,Chit,Dhan': 0,
    'Ardr,Swat,Sata': 3 / 2,
    'Puna,Vish,PBha': 0,
    'Push,Anu,UBha': 3 / 2,
    'Asre,Jye,Reva': 3 / 2
  },
  'Rohi,Hast,Srav': {
    'Ashv,Magh,Mool': 3,
    'Bhar,PPha,PSha': 3,
    'Krit,UPha,USha': 3 / 2,
    'Rohi,Hast,Srav': 3,
    'Mrig,Chit,Dhan': 3 / 2,
    'Ardr,Swat,Sata': 3,
    'Puna,Vish,PBha': 3 / 2,
    'Push,Anu,UBha': 3,
    'Asre,Jye,Reva': 3
  },
  'Mrig,Chit,Dhan': {
    'Ashv,Magh,Mool': 3 / 2,
    'Bhar,PPha,PSha': 3 / 2,
    'Krit,UPha,USha': 0,
    'Rohi,Hast,Srav': 3 / 2,
    'Mrig,Chit,Dhan': 0,
    'Ardr,Swat,Sata': 3 / 2,
    'Puna,Vish,PBha': 0,
    'Push,Anu,UBha': 3 / 2,
    'Asre,Jye,Reva': 3 / 2
  },
  'Ardr,Swat,Sata': {
    'Ashv,Magh,Mool': 3,
    'Bhar,PPha,PSha': 3,
    'Krit,UPha,USha': 3 / 2,
    'Rohi,Hast,Srav': 3,
    'Mrig,Chit,Dhan': 3 / 2,
    'Ardr,Swat,Sata': 3,
    'Puna,Vish,PBha': 3 / 2,
    'Push,Anu,UBha': 3,
    'Asre,Jye,Reva': 3
  },
  'Puna,Vish,PBha': {
    'Ashv,Magh,Mool': 3 / 2,
    'Bhar,PPha,PSha': 3 / 2,
    'Krit,UPha,USha': 0,
    'Rohi,Hast,Srav': 3 / 2,
    'Mrig,Chit,Dhan': 0,
    'Ardr,Swat,Sata': 3 / 2,
    'Puna,Vish,PBha': 0,
    'Push,Anu,UBha': 3 / 2,
    'Asre,Jye,Reva': 3 / 2
  },
  'Push,Anu,UBha': {
    'Ashv,Magh,Mool': 3,
    'Bhar,PPha,PSha': 3,
    'Krit,UPha,USha': 3 / 2,
    'Rohi,Hast,Srav': 3,
    'Mrig,Chit,Dhan': 3 / 2,
    'Ardr,Swat,Sata': 3,
    'Puna,Vish,PBha': 3 / 2,
    'Push,Anu,UBha': 3,
    'Asre,Jye,Reva': 3
  },
  'Asre,Jye,Reva': {
    'Ashv,Magh,Mool': 3,
    'Bhar,PPha,PSha': 3,
    'Krit,UPha,USha': 3 / 2,
    'Rohi,Hast,Srav': 3,
    'Mrig,Chit,Dhan': 3 / 2,
    'Ardr,Swat,Sata': 3,
    'Puna,Vish,PBha': 3 / 2,
    'Push,Anu,UBha': 3,
    'Asre,Jye,Reva': 3
  }
};

/**
 * 4. Yoni
 */
export const YoniMatrix: Record<string, Record<string, number>> = {
  ASHWAM: {
    ASHWAM: 4,
    GAJAM: 2,
    MEKA: 2,
    SARPAM: 3,
    KUKKA: 2,
    PILLI: 2,
    ELUKA: 2,
    GOVU: 1,
    DUNNA: 0,
    PULI: 1,
    LEDI: 3,
    KOTI: 3,
    MUNGISA: 2,
    SIMHAM: 1
  },
  GAJAM: {
    ASHWAM: 2,
    GAJAM: 4,
    MEKA: 3,
    SARPAM: 3,
    KUKKA: 2,
    PILLI: 2,
    ELUKA: 2,
    GOVU: 2,
    DUNNA: 3,
    PULI: 1,
    LEDI: 2,
    KOTI: 3,
    MUNGISA: 2,
    SIMHAM: 0
  },
  MEKA: {
    ASHWAM: 2,
    GAJAM: 3,
    MEKA: 4,
    SARPAM: 2,
    KUKKA: 1,
    PILLI: 2,
    ELUKA: 1,
    GOVU: 3,
    DUNNA: 3,
    PULI: 1,
    LEDI: 2,
    KOTI: 0,
    MUNGISA: 3,
    SIMHAM: 1
  },
  SARPAM: {
    ASHWAM: 3,
    GAJAM: 3,
    MEKA: 2,
    SARPAM: 4,
    KUKKA: 2,
    PILLI: 1,
    ELUKA: 1,
    GOVU: 1,
    DUNNA: 1,
    PULI: 2,
    LEDI: 2,
    KOTI: 2,
    MUNGISA: 0,
    SIMHAM: 2
  },
  KUKKA: {
    ASHWAM: 2,
    GAJAM: 2,
    MEKA: 1,
    SARPAM: 2,
    KUKKA: 4,
    PILLI: 2,
    ELUKA: 1,
    GOVU: 2,
    DUNNA: 2,
    PULI: 1,
    LEDI: 2,
    KOTI: 2,
    MUNGISA: 1,
    SIMHAM: 1
  },
  PILLI: {
    ASHWAM: 2,
    GAJAM: 2,
    MEKA: 2,
    SARPAM: 1,
    KUKKA: 2,
    PILLI: 4,
    ELUKA: 0,
    GOVU: 2,
    DUNNA: 2,
    PULI: 1,
    LEDI: 3,
    KOTI: 3,
    MUNGISA: 1,
    SIMHAM: 1
  },
  ELUKA: {
    ASHWAM: 2,
    GAJAM: 2,
    MEKA: 1,
    SARPAM: 1,
    KUKKA: 1,
    PILLI: 0,
    ELUKA: 4,
    GOVU: 2,
    DUNNA: 2,
    PULI: 2,
    LEDI: 2,
    KOTI: 2,
    MUNGISA: 1,
    SIMHAM: 1
  },
  GOVU: {
    ASHWAM: 1,
    GAJAM: 2,
    MEKA: 3,
    SARPAM: 1,
    KUKKA: 2,
    PILLI: 2,
    ELUKA: 2,
    GOVU: 4,
    DUNNA: 3,
    PULI: 0,
    LEDI: 3,
    KOTI: 2,
    MUNGISA: 2,
    SIMHAM: 1
  },
  DUNNA: {
    ASHWAM: 0,
    GAJAM: 3,
    MEKA: 3,
    SARPAM: 1,
    KUKKA: 2,
    PILLI: 2,
    ELUKA: 2,
    GOVU: 3,
    DUNNA: 4,
    PULI: 1,
    LEDI: 2,
    KOTI: 2,
    MUNGISA: 2,
    SIMHAM: 3
  },
  PULI: {
    ASHWAM: 1,
    GAJAM: 1,
    MEKA: 1,
    SARPAM: 2,
    KUKKA: 1,
    PILLI: 1,
    ELUKA: 2,
    GOVU: 0,
    DUNNA: 1,
    PULI: 4,
    LEDI: 1,
    KOTI: 1,
    MUNGISA: 2,
    SIMHAM: 2
  },
  LEDI: {
    ASHWAM: 3,
    GAJAM: 2,
    MEKA: 2,
    SARPAM: 2,
    KUKKA: 0,
    PILLI: 3,
    ELUKA: 2,
    GOVU: 3,
    DUNNA: 2,
    PULI: 1,
    LEDI: 4,
    KOTI: 2,
    MUNGISA: 2,
    SIMHAM: 2
  },
  KOTI: {
    ASHWAM: 3,
    GAJAM: 3,
    MEKA: 0,
    SARPAM: 2,
    KUKKA: 2,
    PILLI: 3,
    ELUKA: 2,
    GOVU: 2,
    DUNNA: 2,
    PULI: 1,
    LEDI: 2,
    KOTI: 4,
    MUNGISA: 3,
    SIMHAM: 2
  },
  MUNGISA: {
    ASHWAM: 2,
    GAJAM: 2,
    MEKA: 3,
    SARPAM: 0,
    KUKKA: 1,
    PILLI: 2,
    ELUKA: 1,
    GOVU: 2,
    DUNNA: 2,
    PULI: 2,
    LEDI: 2,
    KOTI: 3,
    MUNGISA: 4,
    SIMHAM: 2
  },
  SIMHAM: {
    ASHWAM: 1,
    GAJAM: 0,
    MEKA: 1,
    SARPAM: 2,
    KUKKA: 1,
    PILLI: 1,
    ELUKA: 1,
    GOVU: 1,
    DUNNA: 3,
    PULI: 2,
    LEDI: 2,
    KOTI: 2,
    MUNGISA: 2,
    SIMHAM: 4
  }
};

/**
 * 5. Graha
 */
export const GrahaMatrix: Record<string, Record<string, number>> = {
  Sun: {
    Sun: 5,
    Moon: 5,
    Mars: 5,
    Merc: 4,
    Jup: 5,
    Ven: 0,
    Sat: 0
  },
  Moon: {
    Sun: 5,
    Moon: 5,
    Mars: 4,
    Merc: 1,
    Jup: 4,
    Ven: 1 / 2,
    Sat: 1 / 2
  },
  Mars: {
    Sun: 5,
    Moon: 4,
    Mars: 5,
    Merc: 1 / 2,
    Jup: 5,
    Ven: 3,
    Sat: 1 / 2
  },
  Merc: {
    Sun: 4,
    Moon: 1,
    Mars: 1 / 2,
    Merc: 5,
    Jup: 1 / 2,
    Ven: 5,
    Sat: 4
  },
  Jup: {
    Sun: 5,
    Moon: 4,
    Mars: 5,
    Merc: 1 / 2,
    Jup: 5,
    Ven: 1 / 2,
    Sat: 3
  },
  Ven: {
    Sun: 0,
    Moon: 1 / 2,
    Mars: 3,
    Merc: 5,
    Jup: 1 / 2,
    Ven: 5,
    Sat: 5
  },
  Sat: {
    Sun: 0,
    Moon: 1 / 2,
    Mars: 1 / 2,
    Merc: 4,
    Jup: 3,
    Ven: 5,
    Sat: 5
  }
};

/**
 * 6. Ganas
 * D => Deva
 * M => Maanava
 * R => Rakshasa
 */
export const GanaMatrix: Record<string, Record<string, number>> = {
  D: {
    D: 6,
    M: 5,
    R: 1
  },
  M: {
    D: 5,
    M: 6,
    R: 0
  },
  R: {
    D: 1,
    M: 0,
    R: 6
  }
};

/**
 * 7. Raasi
 */
export const RaasiMatrix: Record<string, Record<string, number>> = {
  Ar: { Ar: 7, Ta: 0, Ge: 7, Cn: 7, Le: 0, Vi: 0, Li: 7, Sc: 0, Sg: 0, Cp: 7, Aq: 7, Pi: 0 },
  Ta: { Ar: 0, Ta: 7, Ge: 0, Cn: 7, Le: 7, Vi: 0, Li: 0, Sc: 7, Sg: 0, Cp: 0, Aq: 7, Pi: 7 },
  Ge: { Ar: 7, Ta: 0, Ge: 7, Cn: 0, Le: 7, Vi: 7, Li: 0, Sc: 0, Sg: 7, Cp: 0, Aq: 0, Pi: 7 },
  Cn: { Ar: 7, Ta: 7, Ge: 0, Cn: 7, Le: 0, Vi: 7, Li: 7, Sc: 0, Sg: 0, Cp: 7, Aq: 0, Pi: 0 },
  Le: { Ar: 0, Ta: 7, Ge: 7, Cn: 0, Le: 7, Vi: 0, Li: 7, Sc: 7, Sg: 0, Cp: 0, Aq: 7, Pi: 0 },
  Vi: { Ar: 0, Ta: 0, Ge: 7, Cn: 7, Le: 0, Vi: 7, Li: 0, Sc: 7, Sg: 7, Cp: 0, Aq: 0, Pi: 7 },
  Li: { Ar: 7, Ta: 0, Ge: 0, Cn: 7, Le: 7, Vi: 0, Li: 7, Sc: 0, Sg: 7, Cp: 7, Aq: 0, Pi: 0 },
  Sc: { Ar: 0, Ta: 7, Ge: 0, Cn: 0, Le: 7, Vi: 7, Li: 0, Sc: 7, Sg: 0, Cp: 7, Aq: 7, Pi: 0 },
  Sg: { Ar: 0, Ta: 0, Ge: 7, Cn: 0, Le: 0, Vi: 7, Li: 7, Sc: 0, Sg: 7, Cp: 0, Aq: 7, Pi: 7 },
  Cp: { Ar: 7, Ta: 0, Ge: 0, Cn: 7, Le: 0, Vi: 0, Li: 7, Sc: 7, Sg: 0, Cp: 7, Aq: 0, Pi: 7 },
  Aq: { Ar: 7, Ta: 7, Ge: 0, Cn: 0, Le: 7, Vi: 0, Li: 0, Sc: 7, Sg: 7, Cp: 0, Aq: 7, Pi: 0 },
  Pi: { Ar: 0, Ta: 7, Ge: 7, Cn: 0, Le: 0, Vi: 7, Li: 0, Sc: 0, Sg: 7, Cp: 7, Aq: 0, Pi: 7 }
};

/**
 * 8. Naadi
 * Ad => Aadi,
 * Md => Madhya,
 * An => Antya
 */
export const NaadiMatrix: Record<string, Record<string, number>> = {
  Ad: {
    Ad: 0,
    Md: 8,
    An: 8
  },
  Md: {
    Ad: 8,
    Md: 0,
    An: 8
  },
  An: {
    Ad: 8,
    Md: 8,
    An: 0
  }
};

export const RajjuKootami = [
  {
    name: 'Paada Rajju',
    stars: ['Ashv', 'Asre', 'Magh', 'Jye', 'Mool', 'Reva'],
    outcome: ''
  },
  {
    name: 'Jaanu Rajju',
    stars: ['Bhar', 'Push', 'PPha', 'Anu', 'PSha', 'UBha'],
    outcome: ''
  },
  {
    name: 'Naabhi Rajju',
    stars: ['Krit', 'Puna', 'UPha', 'Vish', 'USha', 'PBha'],
    outcome: ''
  },
  {
    name: 'Kanta Rajju',
    stars: ['Rohi', 'Ardr', 'Hast', 'Swat', 'Srav', 'Sata'],
    outcome: ''
  },
  {
    name: 'Siro Rajju',
    stars: ['Mrig', 'Chit', 'Dhan'],
    outcome: ''
  }
];

export const NonMatchingStars = {
  Ashv: ['Jye'],
  Bhar: ['Anu'],
  Krit: ['Vish'],
  Rohi: ['Swat'],
  Mrig: ['Dhan', 'Chit'],
  Ardr: ['Srav'],
  Puna: ['USha'],
  Push: ['PSha'],
  Asre: ['Mool'],
  Reva: ['Magh'],
  UBha: ['PPha'],
  PBha: ['UPha'],
  Sata: ['Hast'],
  Dhan: ['Mrig', 'Chit'],
  Chit: ['Mrig', 'Dhan']
};
