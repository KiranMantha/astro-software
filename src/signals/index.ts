import { signal } from '@preact/signals';

export const Views = {
  ASTRO_TABLE: 'ASTRO_TABLE',
  NAKSHATRA_PADA: 'NAKSHATRA_PADA'
} as const;

export const selectedNavamsa = signal({ nakshatra: '', pada: '' });
export const selectedView = signal<string>(Views.ASTRO_TABLE);
