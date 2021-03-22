import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'
import { ReactComponent as Cart } from './shopping-cart.svg'

const HeaderStyles = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

height: 10vh;
background-color: ${props => props.theme.secondaryBgColor};
color: #FFFFFF;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1{
    text-transform: uppercase;
    font-weight: 300;
    font-size: 24px;
  }
  
  nav {
    height: 100%;
    display: flex;
    flex-direction: row;

    .shop {
    display: none;

    @media(min-width: 760px){
      display: block;
    }
  }
  }

  nav > a {

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 0 16px;

    background-color: ${props => props.theme.secondaryBgColor};
    color: #FFFFFF;
    border: none;

    font-size: 1.5rem;

    &:hover {
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.primaryText};
    }

    transition: background-color 1s;
  }

  svg {
    fill: white;
    height: 36px;
  }

  .item-count {
    top: 5px;
    right: 0;
    position: absolute;
    background-color: white;
    color: black;
    border-radius: 50%;
    border: none;
    width: 26px;
    height: 26px;

    font-size: 20px;
    text-align: center;
  }

  .current {
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.primaryText};


    }



`

export default function Header() {
  const { state, dispatch } = useContext(CartContext)

  return (
    <HeaderStyles>
      <NavLink to="/">
        <h1>Deciem Regiment Builder</h1>
      </NavLink>
      <nav>
        <NavLink className="shop" activeClassName="current" to="/shop">
          Shop
        </NavLink>
        <NavLink className="cart" activeClassName="current" to="/cart">
          {state.cart.length > 0 && <span className="item-count">
            {state.cart.length}
          </span>}
          <Cart />
        </NavLink>
      </nav>
    </HeaderStyles>
  )
}
