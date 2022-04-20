export type Flexbox = {
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
};

export type InlineSize = {
  inlineSize: string;
  maxInlineSize: string;
};

export type Grid = {
  inlineSize: string;
};

export type SpaceSize = {
  start?: number;
  end?: number;
};
