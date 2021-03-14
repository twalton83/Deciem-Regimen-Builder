import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyles = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

height: 64px;
background-color: ${props => props.theme.secondaryBgColor};
color: #FFFFFF;

  a {
    text-decoration: none;
    color: inherit;
  }

  h1{
    text-transform: uppercase;
    font-weight: 300;
  }
  
  nav {
    height: 100%;
    display: flex;
    flex-direction: row;
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

  .current {
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.primaryText};
    }

`

export default function Header() {
  return (
    <HeaderStyles>
      <NavLink to="/">
        <h1>Deciem Regiment Builder</h1>
      </NavLink>
      <nav>
        <NavLink activeClassName="current" to="/shop">
          Shop
        </NavLink>
        <NavLink activeClassName="current" to="/cart">
          Cart
        </NavLink>
      </nav>
    </HeaderStyles>
  )
}
