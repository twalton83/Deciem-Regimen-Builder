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
    line-height: 10vh;
  }

  h1{
    text-transform: uppercase;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
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
    top: 8px;
    right: 8px;
    position: absolute;
    background-color: white;
    color: black;
    border-radius: 50%;
    border: none;
    width: 26px;
    height: 26px;

    font-size: 20px;
    font-weight: 600;
    text-align: center;

    line-height: 26px;
  }

  .current {
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.primaryText};

      svg {
        fill: black;
      }

      .item-count {
        background-color: black;
        color: white;
      }
    }



`

export default function Header() {
  const { state } = useContext(CartContext)
  const cartAmount = state.cart.reduce((acc, curr) => curr.qty + acc, 0)
  return (
    <HeaderStyles>
      <NavLink to="/">
        <h1>Deciem Regimen Builder</h1>
      </NavLink>
      <nav>
        <NavLink className="shop" activeClassName="current" to="/shop">
          Shop
        </NavLink>
        <NavLink className="cart" activeClassName="current" to="/cart">
          {state.cart.length > 0 && <span className="item-count">
            {cartAmount ? cartAmount.toString() : 0}
          </span>}
          <Cart />
        </NavLink>
      </nav>
    </HeaderStyles>
  )
}
