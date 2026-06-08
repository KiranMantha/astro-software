import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  AstroParseTableComponent,
  MatchMakingComponent,
  NakshatraPadaComponent,
  NumerologyPyramidComponent
} from './features';
import { TabsComponent } from './shared/ui';

enum Views {
  ASTRO_TABLE = 'ASTRO_TABLE',
  NAKSHATRA_PADA = 'NAKSHATRA_PADA',
  MATCH_MAKING = 'MATCH_MAKING',
  NUMEROLOGY = 'NUMEROLOGY'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TabsComponent,
    AstroParseTableComponent,
    MatchMakingComponent,
    NakshatraPadaComponent,
    NumerologyPyramidComponent
  ],
  template: `
    <main id="app">
      <app-tabs [tabs]="tabConfig" [activeTabValue]="selectedView()" (tabChange)="handleTabChange($event)">
        @switch (selectedView()) {
          @case (Views.ASTRO_TABLE) {
            <app-astro-parse-table />
          }
          @case (Views.NAKSHATRA_PADA) {
            <app-nakshatra-pada />
          }
          @case (Views.MATCH_MAKING) {
            <app-match-making />
          }
          @case (Views.NUMEROLOGY) {
            <app-numerology />
          }
        }
      </app-tabs>
    </main>
  `
})
export class App {
  // Expose Views to the template
  protected readonly Views = Views;

  // Replaces useLiveSignal(selectedView)
  selectedView = signal<string>(Views.ASTRO_TABLE);

  // The configuration for the tab headers
  tabConfig = [
    { title: 'Astro Table', value: Views.ASTRO_TABLE },
    { title: 'Nakshatra Pada', value: Views.NAKSHATRA_PADA },
    { title: 'Match Making', value: Views.MATCH_MAKING },
    { title: 'Numerology', value: Views.NUMEROLOGY }
  ];

  handleTabChange(newValue: string) {
    this.selectedView.set(newValue);
    console.log('Current View:', this.selectedView());
  }
}

bootstrapApplication(App);
