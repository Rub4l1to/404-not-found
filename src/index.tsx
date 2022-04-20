import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//* Screens
import { Home } from 'screens';

//* Emotion
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyles } from 'styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </StrictMode>,
);
