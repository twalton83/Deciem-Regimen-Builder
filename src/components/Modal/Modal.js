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
  padding: 16px;
  position: relative;
  z-index: 20;
  width: auto;
  max-width: 70vw;
  height: 50%;
  background-color: #FFF;
  color: black;
  margin: 0 auto;
  margin-top: 30%;

  @media(min-width: 768px){
    margin-top: 10%;
    width: 30vw;
  }

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 70% 15%;

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      width: 75px;

      font-weight: 600;
      font-size: 24px;

      border: none;

    }

    .yes {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    .no {
      background-color: black;
      color: white;
    }
  }
`

export default function Modal({ submit, toggleModal }) {

  const handleSubmit = () => {
    submit()
    toggleModal()
  }
  return (
    <ModalStyles>
      <DialogStyles>
        <h1>WARNING</h1>
        <p>This product is not compatible with one or more items in your cart, would you still like to add it to your cart?</p>
        <div className="button-container">
          <button className="yes" onClick={handleSubmit}>
            Yes
          </button>
          <button className="no" onClick={toggleModal}>
            No
          </button>
        </div>
      </DialogStyles>
    </ModalStyles>
  )
}
