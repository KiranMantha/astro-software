import { Injectable } from '@angular/core';
import { NAVAMSA_COMBINATION, RASI_FULL_NAMES } from '../../data/constants';
import { parseAstroText } from '../../shared/helpers';
import { AstroRowData } from './astro-parse-table.model';

@Injectable()
export class AstroParseTableService {
  private rasis = Object.keys(RASI_FULL_NAMES);

  getRasiDistances(rasiCodeA: string, rasiCodeB: string): string {
    const idxA = this.rasis.indexOf(rasiCodeA) + 1;
    const idxB = this.rasis.indexOf(rasiCodeB) + 1;

    const forward = ((idxB - idxA + 12) % 12) + 1;
    const backward = ((idxA - idxB + 12) % 12) + 1;
    const isVargottam = forward === 1 && backward === 1;

    return `${forward},${backward}${isVargottam ? ' (Vargottam)' : ''}`;
  }

  processInput(input: string): {
    rows: AstroRowData[];
    matrix: Record<string, number>;
  } {
    const parsedRows = parseAstroText(input);
    const matrix: Record<string, number> = {};

    parsedRows.forEach((item) => {
      let planetName = item.body.trim().split(' ')[0];
      if (planetName === 'Lagna') planetName = 'As';
      if (planetName === 'Bhrigu') planetName = 'Bhrigu Bindu';
      planetName = planetName.replace(' (R)', '');

      let d1 = item.rasiCode === 'Cn' ? 'Ca' : item.rasiCode;
      let d9 = item.navamsaCode === 'Cn' ? 'Ca' : item.navamsaCode;

      const navamsaNum = (NAVAMSA_COMBINATION as any)[`${d1},${d9}`];
      if (navamsaNum) matrix[planetName] = navamsaNum;
    });

    return { rows: parsedRows, matrix };
  }
}
