import React from 'react'
import { Switch, Route } from 'react-router';
import InventoryDisplay from '../InventoryDisplay/InventoryDisplay'
import Landing from '../Landing/Landing'
import Cart from '../Cart/Cart'

export default function Router({ products }) {
  return (
    <Switch>
      {/* <Route exact path="/item/:item">
        <h1>item</h1>
      </Route> */}
      <Route exact path="/shop">
        <InventoryDisplay products={products} />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  )
}
