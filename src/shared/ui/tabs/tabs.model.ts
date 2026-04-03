import { TemplateRef } from '@angular/core';

export type TabItem = {
  title: string;
  value: string;
  content: any; // Or TemplateRef<any> if passing templates
};
