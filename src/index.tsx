import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//* Screens
import { Home } from '@/screens';

//* Emotion
import { ThemeProvider, Global } from '@emotion/react';
import { theme, globalStyles } from '@/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Home />
    </ThemeProvider>
  </StrictMode>,
);
