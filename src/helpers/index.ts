import {
  GANAS,
  NAADIS,
  NAKSHATRA_ALIAS_MAP,
  NAKSHATRA_FULL_NAMES,
  PLANET_FULL_NAMES,
  RASI_FULL_NAMES,
  VARNAS,
  VASYAS
} from '../data/constants';
import { KarmicNakshatras, KarmicPlanets } from '../data/KarmicDoshas';
import {
  GanaMatrix,
  GrahaMatrix,
  MaitriMatrix,
  NaadiMatrix,
  NaadiNakshatraExceptions,
  RaasiMatrix,
  TaraMatrix,
  VarnaMatrix,
  VasyaMatrix,
  YoniMatrix
} from '../data/MatchMaking.data';

export function print(target: string, heading?: string) {
  const printContent = document.querySelector('.print-content');
  printContent && printContent.remove();

  const printContainer = document.createElement('div');
  printContainer.classList.add('print-content');

  if (heading) {
    const header = document.createElement('h1');
    header.textContent = heading;
    printContainer.appendChild(header);
  }

  const clonedTarget = (document.getElementById(target) as HTMLElement).cloneNode(true);
  printContainer.appendChild(clonedTarget);

  document.body.appendChild(printContainer);

  window.print();

  window.onafterprint = () => {
    document.body.removeChild(printContainer);
    window.onafterprint = null;
  };
}

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
      let karmicPlanetResults = '';

      Object.entries(KarmicPlanets).forEach(([key, value]) => {
        if (value.stars.includes(nakshatra)) {
          karmicPlanet = key;
          karmicPlanetResults = value.result;
        }
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
        karmicPlanet,
        karmicPlanetResults
      };
    });

  return parsedRows;
};

export const getMaitriByNakshatraAndPada = (nakshatraCode: string, pada: string) => {
  let selectedMaitri: string[] = [];
  Object.entries(MaitriMatrix).find(([key, values]) => {
    const newKey = key.split('-');
    if (newKey.length == 1 && newKey[0] === nakshatraCode) {
      selectedMaitri = values;
    } else if (newKey[0] === nakshatraCode && newKey[1].includes(pada)) {
      selectedMaitri = values;
    }
  });
  return selectedMaitri;
};

export const getMatchScores = (brideMaitri: string[], groomMaitri: string[]) => {
  const scores: Array<{ bride: string; groom: string; score: number; scoreWithExceptions: number; remarks: string }> =
    [];

  const getScoreByIndex = (index: number, brideItem: string, groomItem: string) => {
    switch (index) {
      case 0: {
        return {
          bride: VARNAS[brideItem],
          groom: VARNAS[groomItem],
          score: VarnaMatrix[brideItem][groomItem],
          scoreWithExceptions: VarnaMatrix[brideItem][groomItem],
          remarks: ''
        };
      }
      case 1: {
        return {
          bride: VASYAS[brideItem],
          groom: VASYAS[groomItem],
          score: VasyaMatrix[brideItem][groomItem],
          scoreWithExceptions: VasyaMatrix[brideItem][groomItem],
          remarks: ''
        };
      }
      case 2: {
        let score = 0;
        Object.entries(TaraMatrix).forEach(([key, value]) => {
          const brideStars = key.split(',');
          if (brideStars.includes(brideItem)) {
            Object.entries(value).forEach(([subkey, subvalue]) => {
              const groomStars = subkey.split(',');
              if (groomStars.includes(groomItem)) {
                score = subvalue;
              }
            });
          }
        });
        return {
          bride: NAKSHATRA_FULL_NAMES[brideItem],
          groom: NAKSHATRA_FULL_NAMES[groomItem],
          score,
          scoreWithExceptions: score,
          remarks: ''
        };
      }
      case 3: {
        return {
          bride: brideItem,
          groom: groomItem,
          score: YoniMatrix[brideItem][groomItem],
          scoreWithExceptions: YoniMatrix[brideItem][groomItem],
          remarks: ''
        };
      }
      case 4: {
        return {
          bride: PLANET_FULL_NAMES[brideItem],
          groom: PLANET_FULL_NAMES[groomItem],
          score: GrahaMatrix[brideItem][groomItem],
          scoreWithExceptions: GrahaMatrix[brideItem][groomItem],
          remarks: ''
        };
      }
      case 5: {
        return {
          bride: GANAS[brideItem],
          groom: GANAS[groomItem],
          score: GanaMatrix[brideItem][groomItem],
          scoreWithExceptions: GanaMatrix[brideItem][groomItem],
          remarks: ''
        };
      }
      case 6: {
        return {
          bride: RASI_FULL_NAMES[brideItem],
          groom: RASI_FULL_NAMES[groomItem],
          score: RaasiMatrix[brideItem][groomItem],
          scoreWithExceptions: RaasiMatrix[brideItem][groomItem],
          remarks: ''
        };
      }
      case 7: {
        const score = NaadiMatrix[brideItem][groomItem];
        let naadiRemarks = '';
        if (score === 0) {
          const { affectedStars, remarks } = NaadiNakshatraExceptions[brideItem];
          const brideStar = brideMaitri[2];
          const groomStar = groomMaitri[2];
          if (affectedStars.includes(brideStar) && affectedStars.includes(groomStar)) {
            naadiRemarks = remarks;
          }
        }
        return {
          bride: NAADIS[brideItem],
          groom: NAADIS[groomItem],
          score,
          scoreWithExceptions: score ? score : naadiRemarks ? 0 : 8,
          remarks: naadiRemarks
        };
      }
      default: {
        return {
          bride: brideItem,
          groom: groomItem,
          score: 0,
          scoreWithExceptions: 0,
          remarks: ''
        };
      }
    }
  };

  brideMaitri.forEach((item, index) => {
    scores.push(getScoreByIndex(index, item, groomMaitri[index]));
  });
  return scores;
};
