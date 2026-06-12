import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NUMEROLOGY_LETTER_SCORES,
  NUMEROLOGY_MAP,
  PYTHAGOREAN_NUMEROLOGY_LETTER_SCORES,
  SHIVAMAYA_MATRIX_FOR_RULING_NUMBER
} from '../../data/constants';
import { LetterScoreItem, TableRow, YearEntry } from './numerology.component.model';

@Component({
  selector: 'app-numerology',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './numerology.component.html',
  styleUrls: ['./numerology.component.scss']
})
export class NumerologyPyramidComponent {
  inputName: string = '';
  inputDate: string = '';
  lettersRow: string[] = [];
  pyramidRows: number[][] = [];

  // Tables state
  favoritesTable: TableRow[] = [];
  showTable: boolean = false;
  pythagoreanScores: LetterScoreItem[] = [];
  yearTimeline: YearEntry[] = [];
  shivamayaMatrixForRulingNumber: number[][] = [];

  // Map representation of the matrix cells to hold arrays of matched letters
  matrixCellLetters: { [key: string]: string[] } = {};

  // Clockwise trail layout path starting at Ar as index 0
  private clockwisePath = ['Ar', 'Ta', 'Ge', 'Ca', 'Le', 'Vi', 'Li', 'Sc', 'Sg', 'Cp', 'Aq', 'Pi'];

  generatePyramid(): void {
    const cleanedName = this.inputName.replace(/[^a-zA-Z]/g, '').toUpperCase();

    if (!cleanedName) {
      this.lettersRow = [];
      this.pyramidRows = [];
      this.pythagoreanScores = [];
      this.matrixCellLetters = {};
      this.yearTimeline = [];
      this.updateTableVisibility();
      return;
    }

    this.lettersRow = cleanedName.split('');
    const firstNumericRow = this.lettersRow.map((char) => NUMEROLOGY_LETTER_SCORES[char] || 0);
    this.pyramidRows = [firstNumericRow];

    while (this.pyramidRows[this.pyramidRows.length - 1].length > 1) {
      const lastRow = this.pyramidRows[this.pyramidRows.length - 1];
      const nextRow: number[] = [];

      for (let i = 0; i < lastRow.length - 1; i++) {
        const sum = lastRow[i] + lastRow[i + 1];
        nextRow.push(this.reduceToSingleDigit(sum));
      }
      this.pyramidRows.push(nextRow);
    }

    this.calculatePythagoreanScores(cleanedName);
    this.generateFavoritesTable();
  }

  generateFavoritesTable(): void {
    this.updateTableVisibility();

    if (!this.showTable) {
      this.favoritesTable = [];
      this.yearTimeline = [];
      return;
    }

    // --- 1. Core Profile Table Calculations ---
    const dayDigits = this.inputDate.split('-')[2] || '';
    const rulingSum = dayDigits.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const rulingNumber = this.reduceToSingleDigit(rulingSum);

    const allDobDigits = this.inputDate.replace(/[^0-9]/g, '');
    const destinySum = allDobDigits.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const destinyNumber = this.reduceToSingleDigit(destinySum);

    const firstRowSum = this.pyramidRows[0]?.reduce((acc, num) => acc + num, 0) || 0;
    const nameNumber = this.reduceToSingleDigit(firstRowSum);

    const lastRow = this.pyramidRows[this.pyramidRows.length - 1];
    const pyramidNumber = lastRow && lastRow.length === 1 ? lastRow[0] : 0;

    this.favoritesTable = [
      this.buildTableRow('Ruling number', rulingNumber),
      this.buildTableRow('Destiny number', destinyNumber),
      this.buildTableRow('Name number', nameNumber),
      this.buildTableRow('Pyramid number', pyramidNumber)
    ];

    this.shivamayaMatrixForRulingNumber =
      SHIVAMAYA_MATRIX_FOR_RULING_NUMBER[rulingNumber as keyof typeof SHIVAMAYA_MATRIX_FOR_RULING_NUMBER];

    // --- 2. Clockwise Matrix Placements & Year Lists ---
    this.calculateClockwiseMatrixPlacements();
    this.calculateYearTimeline();
  }

  private calculatePythagoreanScores(cleanedName: string): void {
    this.pythagoreanScores = cleanedName.split('').map((letter) => ({
      letter,
      score: PYTHAGOREAN_NUMEROLOGY_LETTER_SCORES[letter as keyof typeof PYTHAGOREAN_NUMEROLOGY_LETTER_SCORES] || 0
    }));
  }

  private calculateClockwiseMatrixPlacements(): void {
    // Reset/Initialize all matrix cell string placeholders
    this.matrixCellLetters = {};
    this.clockwisePath.forEach((key) => (this.matrixCellLetters[key] = []));

    let currentIndex = 0; // Starts always tracking from 'Ar' (index 0)

    this.pythagoreanScores.forEach((item) => {
      // Advance clockwise index relative to current position by item's loop score
      currentIndex = (currentIndex - 1 + item.score) % this.clockwisePath.length;

      const targetedCellKey = this.clockwisePath[currentIndex];
      // Append the corresponding name letter to this cell mapping array
      this.matrixCellLetters[targetedCellKey].push(item.letter);
    });
  }

  private calculateYearTimeline(): void {
    const birthYearStr = this.inputDate.split('-')[0];
    if (!birthYearStr || this.pythagoreanScores.length === 0) {
      this.yearTimeline = [];
      return;
    }

    const startYear = parseInt(birthYearStr, 10);
    const timeline: YearEntry[] = [];

    timeline.push({ label: 'Birth Year', year: startYear });
    let currentYearValue = startYear;

    for (let round = 1; round <= 2; round++) {
      this.pythagoreanScores.forEach((item) => {
        currentYearValue += item.score;
        timeline.push({
          label: `Round ${round} - ${item.letter} (${item.score})`,
          year: currentYearValue
        });
      });
    }

    this.yearTimeline = timeline;
  }

  private updateTableVisibility(): void {
    const hasName = this.inputName.replace(/[^a-zA-Z]/g, '').length > 0;
    this.showTable = !!(hasName && this.inputDate);
  }

  private reduceToSingleDigit(sum: number): number {
    if (sum === 0) return 0;
    const mod = sum % 9;
    return mod === 0 ? 9 : mod;
  }

  private buildTableRow(type: string, value: number): TableRow {
    const data = NUMEROLOGY_MAP[value as keyof typeof NUMEROLOGY_MAP];
    return {
      type,
      value: value || null,
      favoriteColors: data ? data.favorableColors.join(', ') : '-',
      excellent: data ? data.excellent.join(', ') : '-',
      good: data ? data.good.join(', ') : '-',
      bad: data ? data.bad.join(', ') : '-',
      neutral: data ? data.neutral.join(', ') : '-'
    };
  }

  // Helper method for HTML cleanly mapping letter list string values
  getCellLettersDisplay(cellKey: string): string {
    const letters = this.matrixCellLetters[cellKey];
    return letters && letters.length > 0 ? `(${letters.join(', ')})` : '';
  }
}
