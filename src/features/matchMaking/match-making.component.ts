import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ASTA_KOOTAMI } from '../../data/constants';
import { getMaitriByNakshatraAndPada, getMatchScores, parseAstroText, print } from '../../shared/helpers';

@Component({
  selector: 'app-match-making',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.scss']
})
export class MatchMakingComponent {
  // State Signals
  brideData = signal('');
  groomData = signal('');
  scores = signal<any[]>([]);

  // Expose constants to template
  protected readonly ASTA_KOOTAMI = ASTA_KOOTAMI;

  // Computed totals (replaces the .reduce in the template for better performance)
  totalMaxScore = computed(() => this.ASTA_KOOTAMI.reduce((sum, item) => sum + item.maxScore, 0));

  totalCurrentScore = computed(() => this.scores().reduce((sum, item) => sum + (item.score || 0), 0));

  handleSubmit() {
    const parsedBride = parseAstroText(this.brideData());
    const parsedGroom = parseAstroText(this.groomData());

    // Logic from your TSX (using index 2 which usually corresponds to Moon/Rasi in these datasets)
    const brideMaitri = getMaitriByNakshatraAndPada(parsedBride[2].nakshatraCode, parsedBride[2].pada);
    const groomMaitri = getMaitriByNakshatraAndPada(parsedGroom[2].nakshatraCode, parsedGroom[2].pada);

    if (brideMaitri && groomMaitri) {
      const matchResults = getMatchScores(brideMaitri, groomMaitri);
      this.scores.set(matchResults);
    }
  }

  handlePrint(containerId: string) {
    print(containerId);
  }
}
