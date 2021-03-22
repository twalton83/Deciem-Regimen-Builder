import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

position: absolute;
bottom: 0;

height: 10vh;
width: 100%;

background-color: black;
color: white;

a{
  font-weight: 600;
  color: inherit;
}

`

export default function Footer() {
  return (
    <FooterStyles>
      <p>
        All products courtesy of <a href="https://deciem.com/us">
          Deciem.
        </a>
      </p>
    </FooterStyles>
  )
}
