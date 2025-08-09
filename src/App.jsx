import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts'; // Replaced use-dark-mode
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
  window.matchMedia = null;
  const { isDarkMode, toggle } = useDarkMode(true); // Updated hook usage

  const theme = isDarkMode ? darkTheme : lightTheme;
  const darkModeValue = { value: isDarkMode, toggle };

  return (
    <AppContext.Provider value={{ darkMode: darkModeValue }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;