import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

height: 64px;
background-color: ${props => props.theme.secondaryBgColor};
color: #FFFFFF;

  h1{
    text-transform: uppercase;
    font-weight: 300;
  }
  
  .button-container {
    height: 100%
  }

  button {
    height: 100%;

    background-color: ${props => props.theme.secondaryBgColor};
    color: #FFFFFF;

    border: none;

    font-size: 1.5rem;

    &:hover {
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.primaryText}
    }
  }

`

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Deciem Regiment Builder</h1>
      <div className="button-container">
        <button>
          Shop
        </button>
        <button>
          Cart
        </button>
      </div>
    </HeaderStyles>
  )
}
