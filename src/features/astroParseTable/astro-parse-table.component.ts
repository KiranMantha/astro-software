import {
  Component,
  ElementRef,
  ViewChild,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AstroParseTableService } from './astro-parse-table.service';
import { AstroRowData } from './astro-parse-table.model';
import { KarmicDoshas } from '../../data/karmicDoshas';
import { NakshatraPadaData } from '../../data/nakshatraPada.data';

@Component({
  selector: 'app-astro-parse-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AstroParseTableService],
  templateUrl: './astro-parse-table.component.html',
  styleUrls: ['./astro-parse-table.component.scss'],
})
export class AstroParseTableComponent {
  private astroService = inject(AstroParseTableService);

  // State Signals
  input = signal('');
  rows = signal<AstroRowData[]>([]);
  planetMatrix = signal<Record<string, number>>({});

  // Hover State
  hoveredRow = signal<number | null>(null);
  hoveredCol = signal<number | null>(null);

  // Modal State
  selectedDosha = signal<any>(null);
  karmicResultsHtml = signal('');

  @ViewChild('doshaDialog') doshaDialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('resultsDialog') resultsDialog!: ElementRef<HTMLDialogElement>;

  planets = [
    { name: 'As' },
    { name: 'Sun' },
    { name: 'Moon' },
    { name: 'Mars' },
    { name: 'Mercury' },
    { name: 'Jupiter' },
    { name: 'Venus' },
    { name: 'Saturn' },
    { name: 'Rahu' },
    { name: 'Ketu' },
    { name: 'Uranus' },
    { name: 'Neptune' },
    { name: 'Pluto' },
    { name: 'Maandi' },
    { name: 'Bhrigu Bindu' },
  ];

  protected readonly NakshatraPadaData = NakshatraPadaData as any;

  handleSubmit() {
    const result = this.astroService.processInput(this.input());
    this.rows.set(result.rows);
    this.planetMatrix.set(result.matrix);
  }

  getDistance(a: string, b: string) {
    return this.astroService.getRasiDistances(a, b);
  }

  // Hover logic
  setHover(row: number | null, col: number | null) {
    this.hoveredRow.set(row);
    this.hoveredCol.set(col);
  }

  getCellBg(row: number, col: number): string {
    const isRow = this.hoveredRow() === row;
    const isCol = this.hoveredCol() === col;
    if (isRow && isCol) return '#ffeb3b';
    if (isRow || isCol) return '#fff3cd';
    return 'transparent';
  }

  // Dialog actions
  openDosha(code: string, rasi: string) {
    this.selectedDosha.set({ ...KarmicDoshas[code], rasi });
    this.doshaDialog.nativeElement.showModal();
  }

  openResults(html: string) {
    this.karmicResultsHtml.set(html);
    this.resultsDialog.nativeElement.showModal();
  }
}
