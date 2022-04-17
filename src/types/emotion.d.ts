import '@emotion/react';

//* Interfaces
import { IEmotion } from '@/interfaces';

declare module '@emotion/react' {
  export interface Theme {
    color: string;
    breakpoints: IEmotion.BreakPoints;
  }
}
