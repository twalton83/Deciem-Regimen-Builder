import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const BackButtonStyles = styled.button`
    width: 50px;

    font-size: 20px;
    font-weight: 500;
    color: #a3a09b;
    
    background-color: transparent;
    border: none;
    text-decoration: underline;

  @media(min-width: 768px){
    display: none;
  }
`

export default function BackButton() {
  const history = useHistory()

  return (
    <BackButtonStyles onClick={() => history.goBack()}>
      {'<<<'}
    </BackButtonStyles>
  )
}
