import { NAKSHATRA_ALIAS_MAP, NAKSHATRA_FULL_NAMES, RASI_FULL_NAMES } from '../data/constants';
import { KarmicNakshatras, KarmicPlanets } from '../data/KarmicDoshas';

export const parseAstroText = (text: string) => {
  const parsedRows = text
    .trim()
    .split('\n')
    .filter(Boolean)
    .slice(1)
    .map((line) => {
      const parts = line.trim().split(/\s+/);

      const body = parts.slice(0, parts.length - 5).join(' ');
      const longitude = parts.slice(parts.length - 5, parts.length - 4).join(' ');
      let nakshatra = parts.slice(parts.length - 4, parts.length - 3).join(' ');
      const pada = parts.slice(parts.length - 3, parts.length - 2).join(' ');
      const rasi = parts.slice(parts.length - 2, parts.length - 1).join(' ');
      const navamsa = parts.slice(parts.length - 1).join(' ');

      nakshatra = NAKSHATRA_ALIAS_MAP[nakshatra] ?? nakshatra;

      let karmicPlanet = '';

      Object.entries(KarmicPlanets).forEach(([key, value]) => {
        if (value.includes(nakshatra)) karmicPlanet = key;
      });

      return {
        body,
        longitude,
        nakshatraCode: nakshatra,
        nakshatra: NAKSHATRA_FULL_NAMES[nakshatra as keyof typeof NAKSHATRA_FULL_NAMES],
        pada,
        rasi: RASI_FULL_NAMES[rasi as keyof typeof RASI_FULL_NAMES],
        rasiCode: rasi,
        navamsa: RASI_FULL_NAMES[navamsa as keyof typeof RASI_FULL_NAMES],
        navamsaCode: navamsa,
        hasKarmicDosha: KarmicNakshatras[rasi as keyof typeof KarmicNakshatras].includes(nakshatra),
        karmicPlanet
      };
    });

  return parsedRows;
};
