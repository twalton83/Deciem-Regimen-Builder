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
  max-width: 50vw;
  height: 50%;
  background-color: #394554;
  color: white;
  margin: 0 auto;
  margin-top: 10%;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 70% 15%;
`

export default function Modal() {
  return (
    <ModalStyles>
      <DialogStyles>
        <h1>WARNING</h1>
        <p>This product is not compatible with one or more items in your cart, would you still like to add it to your cart?</p>
        <button>
          Yes
        </button>
        <button>
          No
        </button>
      </DialogStyles>
    </ModalStyles>
  )
}
