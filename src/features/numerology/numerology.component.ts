import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NUMEROLOGY_LETTER_SCORES, NUMEROLOGY_MAP } from '../../data/constants'; // Adjusted imports
import { TableRow } from './numerology.component.model';

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

  // Table state
  favoritesTable: TableRow[] = [];
  showTable: boolean = false;

  generatePyramid(): void {
    const cleanedName = this.inputName.replace(/[^a-zA-Z]/g, '').toUpperCase();

    if (!cleanedName) {
      this.lettersRow = [];
      this.pyramidRows = [];
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

    // Trigger table calculation whenever pyramid changes (if conditions are met)
    this.generateFavoritesTable();
  }

  generateFavoritesTable(): void {
    this.updateTableVisibility();

    if (!this.showTable) {
      this.favoritesTable = [];
      return;
    }

    // --- 1. Ruling Number Logic ---
    // Extract only the day part from 'YYYY-MM-DD'
    const dayDigits = this.inputDate.split('-')[2] || '';
    const rulingSum = dayDigits.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const rulingNumber = this.reduceToSingleDigit(rulingSum);

    // --- 2. Destiny Number Logic ---
    // Sum all digits in the entire YYYY-MM-DD string
    const allDobDigits = this.inputDate.replace(/[^0-9]/g, '');
    const destinySum = allDobDigits.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    const destinyNumber = this.reduceToSingleDigit(destinySum);

    // --- 3. Name Number Logic ---
    // Sum all the 1st row numbers in the pyramid
    const firstRowSum = this.pyramidRows[0]?.reduce((acc, num) => acc + num, 0) || 0;
    const nameNumber = this.reduceToSingleDigit(firstRowSum);

    // --- 4. Pyramid Number Logic ---
    // Last row digit in the pyramid
    const lastRow = this.pyramidRows[this.pyramidRows.length - 1];
    const pyramidNumber = lastRow && lastRow.length === 1 ? lastRow[0] : 0;

    // Map numbers to their data rows
    this.favoritesTable = [
      this.buildTableRow('Ruling number', rulingNumber),
      this.buildTableRow('Destiny number', destinyNumber),
      this.buildTableRow('Name number', nameNumber),
      this.buildTableRow('Pyramid number', pyramidNumber)
    ];
  }

  private updateTableVisibility(): void {
    // Requires both a clean name and a selected date
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
      favColors: data ? data.favorableColors.join(', ') : '-',
      excellent: data ? data.excellent.join(', ') : '-',
      good: data ? data.good.join(', ') : '-',
      bad: data ? data.bad.join(', ') : '-',
      neutral: data ? data.neutral.join(', ') : '-'
    };
  }
}
