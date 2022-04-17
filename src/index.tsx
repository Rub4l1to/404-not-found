import React from 'react';
import ReactDOM from 'react-dom/client';

//* Screens
import { Home } from '@/screens';

//* Emotion
import { ThemeProvider, Global } from '@emotion/react';
import { theme, globalStyles } from '@/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
