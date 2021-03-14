import React from 'react';
import Header from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import theme from './context/ThemeContext'
import { Switch, Route } from 'react-router';
import InventoryDisplay from './components/InventoryDisplay/InventoryDisplay'
import Landing from './components/Landing/Landing'
import Cart from './components/Cart/Cart'
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header>
          <p>Deciem Regiment Builder</p>
        </Header>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/shop">
            <InventoryDisplay />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>

    </ThemeProvider>
  );
}

export default App;
