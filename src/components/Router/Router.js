import React from 'react'
import { Switch, Route } from 'react-router';
import InventoryDisplay from '../InventoryDisplay/InventoryDisplay'
import Landing from '../Landing/Landing'
import Cart from '../Cart/Cart'

export default function Router() {
  return (
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
  )
}
