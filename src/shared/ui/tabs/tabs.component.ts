import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  // Use these names to match your main.ts bindings
  @Input({ required: true }) tabs: any[] = [];
  @Input({ required: true }) activeTabValue: string = '';

  @Output() tabChange = new EventEmitter<string>();

  selectTab(value: string) {
    this.tabChange.emit(value);
  }
}
