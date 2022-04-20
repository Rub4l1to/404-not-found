export interface BreakPoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  third: string;
  fourth: string;
}

export interface Fonts {
  primary: FontTypes;
  secondary: FontTypes;
  third: FontTypes;
}

export interface FontTypes {
  regular: string;
  medium?: string;
  bold: string;
  extrabold?: string;
}
