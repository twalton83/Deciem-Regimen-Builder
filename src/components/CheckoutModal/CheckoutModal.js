import React from 'react'
import styled from 'styled-components'

const ModalStyles = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
`

const DialogStyles = styled.div`
  position: relative;
  z-index: 20;

  width: auto;
  max-width: 70vw;
  height: 30vh;

  background-color: #FFF;
  color: black;

  margin: 0 auto;
  margin-top: 30%;

  @media(min-width: 768px){
    margin-top: 10%;
    width: 30vw;
    height: 20vh;
  }

  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    background-color: black;
    color: white;

  }
  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 16px;

    button {
      height: 46px;
      width: 90px;

      font-weight: 600;
      font-size: 24px;

      border: none;

      background-color: black;
      color: white;
      
      margin: 24px auto;
  }
  }
`

export default function CheckoutModal({ toggleModal }) {
  return (
    <ModalStyles>
      <DialogStyles onClick={toggleModal}>
        <div className="header">
          <h1>NOTE:</h1>
        </div>
        <div className="message">
          <p>This is not an e-commerce store, but you can check out all of these amazing products at <a href="https://theordinary.deciem.com/us/theordinary-products">Deciem's website!</a></p>
          <button onClick={toggleModal}>
            OK
        </button>
        </div>
      </DialogStyles>
    </ModalStyles>
  )
}
