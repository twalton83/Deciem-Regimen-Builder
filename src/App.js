import React from 'react';
import Header from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import theme from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <p>Deciem Regiment Builder</p>
        </Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
