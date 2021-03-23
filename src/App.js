import React from 'react';
import Header from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import theme from './context/ThemeContext'

import "./App.css"
import Router from './components/Router/Router';
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer/Footer'
import products from './product-data/products'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <div className="App">
          <Header>
            <p>Deciem Regiment Builder</p>
          </Header>
          <Router products={products} />
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
