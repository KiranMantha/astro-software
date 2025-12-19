export type PadaInfo = {
  'Rasi and Degrees': string;
  Characteristics: string;
  'Behaviour Influence and Insights': string;
  Ruler: string;
  'Career Path': string;
};

export type NakshatraPadas = {
  '1': PadaInfo;
  '2': PadaInfo;
  '3': PadaInfo;
  '4': PadaInfo;
};

export type NakshatraData = Record<string, NakshatraPadas>;
