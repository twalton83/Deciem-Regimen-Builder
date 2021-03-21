import React from 'react';
import Header from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import theme from './context/ThemeContext'

import "./App.css"
import Router from './components/Router/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header>
          <p>Deciem Regiment Builder</p>
        </Header>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
