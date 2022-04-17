import '@emotion/react';

//* Interfaces
import { IEmotion } from '@/interfaces';

declare module '@emotion/react' {
  export interface Theme {
    colors: IEmotion.Colors;
    breakpoints: IEmotion.BreakPoints;
    fonts: IEmotion.Fonts;
  }
}
