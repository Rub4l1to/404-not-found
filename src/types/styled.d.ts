// styled.d.ts
import 'styled-components';

//* Interfaces
import { IStyled } from 'interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IStyled.Colors;
    breakpoints: IStyled.BreakPoints;
    fonts: IStyled.Fonts;
  }
}
