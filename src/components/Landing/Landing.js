import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BalanceSet from '../../images/carousel/rdn-balance-set.png'

const LandingStyles = styled.div`
height: 100%;
max-height: 85vh;

padding: 16px;

display: flex;
flex-direction: column;
justify-content: space-evenly;

  .text-container {

    .tagline {
      max-width: 196px;
    }
    .logo {
      font-weight: 600;
      font-size: 1.5rem;
      width: 10px;
    }
    span {
      display: block;
      font-weight: 600;
      font-size: 2.5rem;
    }
  }
`

const Button = styled.button`
background-color: #DED7D3;
border: none;
height: 36px;
font-size: 24px;
margin: 16px 0;

a {
  text-decoration: none;
  color: ${props => props.theme.primaryText};

}
`

export default function Landing() {
  return (
    <LandingStyles>
      {/* TO DO: Needs to be an image carousel */}
      <img src={BalanceSet} alt="" />
      <div className="text-container">
        <p className="tagline">Clinical Formulations </p>
        <p className="tagline">with Integrity.</p>
        <p className="logo">
          The <span>Ordinary.</span>
        </p>
        <Button>
          <Link to="/shop">
            SHOP NOW
        </Link>
        </Button>
      </div>
    </LandingStyles>
  )
}
