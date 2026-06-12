export type TableRow = {
  type: string;
  value: number | null;
  favoriteColors: string;
  excellent: string;
  good: string;
  bad: string;
  neutral: string;
};

export type LetterScoreItem = {
  letter: string;
  score: number;
};

export type YearEntry = {
  label: string;
  year: number;
};
