import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SelectComponent } from '../../shared/ui';
import { NAKSHATRA_FULL_NAMES } from '../../data/constants';
import { NakshatraPadaData } from '../../data/nakshatraPada.data';
import { PadaInfo } from '../../shared/models';

@Component({
  selector: 'app-nakshatra-pada',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectComponent],
  templateUrl: './nakshatra-pada.component.html',
  styleUrls: ['./nakshatra-pada.component.scss'],
})
export class NakshatraPadaComponent {
  // Signal to hold the result
  selectedNakshatra = '';
  selectedPada = '';
  selectedPadaInfo = signal<PadaInfo | null>(null);

  // Transform constants for the Select component
  nakshatraOptions = [
    { label: 'Select', value: '' },
    ...Object.entries(NAKSHATRA_FULL_NAMES).map(([key, value]) => ({
      label: value,
      value: key,
    })),
  ];

  padaOptions = [
    { label: 'Select', value: '' },
    { label: 'Pada 1', value: '1' },
    { label: 'Pada 2', value: '2' },
    { label: 'Pada 3', value: '3' },
    { label: 'Pada 4', value: '4' },
  ];

  onSubmit(form: NgForm) {
    if (this.selectedNakshatra && this.selectedPada) {
      const data = (NakshatraPadaData as any)[this.selectedNakshatra][
        this.selectedPada
      ];
      this.selectedPadaInfo.set(data);
    }
  }
}
