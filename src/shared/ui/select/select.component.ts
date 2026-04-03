import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) fieldName!: string;
  @Input() options: { label: string; value: string }[] = [];

  // 1. Define the missing 'value' property
  @Input() value: string = '';

  // 2. Add an emitter so the parent knows when the selection changes
  @Output() valueChange = new EventEmitter<string>();

  protected inputId = `select-${Math.random().toString(36).substring(2, 9)}`;

  // 3. Helper to emit changes
  onModelChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.value = selectElement.value;
    this.valueChange.emit(this.value);
  }
}
