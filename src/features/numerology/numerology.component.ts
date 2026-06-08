import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numerology',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './numerology.component.html',
  styleUrls: ['./numerology.component.scss']
})
export class NumerologyPyramidComponent {
  inputName: string = '';
  lettersRow: string[] = [];
  pyramidRows: number[][] = [];

  // Chaldean Numerology Mapping
  private letterValues: { [key: string]: number } = {
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

  generatePyramid(): void {
    // 1. Clean input: keep only alphabets and convert to uppercase
    const cleanedName = this.inputName.replace(/[^a-zA-Z]/g, '').toUpperCase();

    if (!cleanedName) {
      this.lettersRow = [];
      this.pyramidRows = [];
      return;
    }

    // 2. Setup the top letters row
    this.lettersRow = cleanedName.split('');

    // 3. Generate the first numeric row based on the letter mapping
    const firstNumericRow = this.lettersRow.map((char) => this.letterValues[char] || 0);

    this.pyramidRows = [firstNumericRow];

    // 4. Iteratively build subsequent rows using (n + n+1) modulo 9 rules
    // Note: In numerology modulo 9 math, if (a + b) % 9 === 0, the value is 9.
    while (this.pyramidRows[this.pyramidRows.length - 1].length > 1) {
      const lastRow = this.pyramidRows[this.pyramidRows.length - 1];
      const nextRow: number[] = [];

      for (let i = 0; i < lastRow.length - 1; i++) {
        const sum = lastRow[i] + lastRow[i + 1];
        const mod9 = sum % 9;
        nextRow.push(mod9 === 0 ? 9 : mod9);
      }

      this.pyramidRows.push(nextRow);
    }
  }
}
