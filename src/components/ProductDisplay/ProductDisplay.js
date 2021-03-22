import React, { useState, useContext } from 'react'

import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'
import { useContraindications } from '../../product-data/hooks'
import { isCompatible } from '../../product-data/helpers'
import Modal from '../Modal/Modal';
import BackButton from '../BackButton/BackButton'


const ProductDisplayStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;


@media(max-width: 768px){
  .desktop {
    display:none;
  }
}


@media(min-width: 768px){
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;

  .mobile {
      display: none;
  }
}

height: 90vh;

  .info-container {

    @media(min-width: 768px){
      display: grid;
      grid-template-columns: 50% 50%;
      grid-column: 2/3;

    } 


    padding: 16px;
    max-width: 100vw;

    img {
      width: calc(100vw - 16px);

    @media(min-width: 768px){
      max-width: 400px;
    }
    }
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    margin-top: 5px;
    text-align: left;
  }

.right-col {
  display: flex;
  flex-direction: column;


  @media(min-width: 768px){
    justify-content: center;
  }

  h1 {
    width: 100%;
  }
}

.price-container {
  width: 100%;

  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .price {
    font-size: 18px;

    @media(min-width: 768px){
      font-size: 24px;
      margin-right: 24px;
    }
  }

  button {
    &:hover {
      background-color: black;
      color: white;
  }


  transition: background-color 1s;

  }
}


.atc {
  height: 10vh;
  width: 100%;

  background-color: ${props => props.theme.secondaryBgColor};
  color: #FFF;

  margin: 0;

  z-index: 10;

  font-size: 20px;
  font-weight: 600;

  border: none;

  &.mobile {
    display: block;
    @media(min-width: 768px){
      display: none;
    }
  }
  &.desktop {
    display: none;
    background-color: white;
    color: black;
    border: 1px solid black;

    height: 48px;
    width: auto;

    margin-left: 16px;

    @media(min-width: 768px){
      display: block;
    }
  }
}
`

const Incrementer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;

max-width: 150px;

border: 1px solid black;
height: 46px;
width: 90px;

  button {
    width: 100%;

    font-weight: 600;
    font-size: 24px;

    border: none;
    background-color: transparent;
  }
  input {
    font-size: 18px;
    font-weight: 600;
    text-align: center;

    border: none;
    padding: 0;
    max-width: 30px;


  }
`



export default function ProductDisplay({ item }) {
  const contraindications = useContraindications()

  const [quantity, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);

  const { dispatch } = useContext(CartContext)

  const handleChange = (e) => {
    if (quantity === 0 && e.target.id !== "add") return
    e.target.id === "add" ? setQuantity(quantity + 1) : setQuantity(quantity - 1)
  }

  const handleClick = (e) => {
    if (!isCompatible(item, contraindications)) {
      dispatch({
        type: "ADD",
        payload: {
          item, quantity
        }
      })
    } else {
      setModal(true)
    }
  }


  return (
    <ProductDisplayStyles>
      <BackButton />
      <div className="info-container">
        <div>
          <h1 className="mobile">
            {item.name}
          </h1>
          <img src={item.image} alt="" />
        </div>
        <div className="right-col">
          <h1 className="desktop">
            {item.name}
          </h1>
          <p>Category: {item.category.toString()}</p>
          <p>Contraindications: {item.contraindications.toString()}</p>
          <p className="desc">{item.desc}</p>
          <div className="price-container">
            <p className="price">{item.price} USD</p>
            <Incrementer>
              <button id="subtract" onClick={handleChange}>
                -
              </button>
              <input onChange={setQuantity} type="text" name="qty" id="qty" value={quantity} />
              <button id="add" onClick={handleChange}>
                +
              </button>
            </Incrementer>
            <button className="atc desktop" onClick={handleClick}>
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
      <button className="atc mobile" onClick={handleClick}>
        ADD TO BASKET
      </button>
      {modal && <Modal submit={() => dispatch({
        type: "ADD",
        payload: {
          item, quantity
        }
      })}
        toggleModal={() => setModal(!modal)} />}
    </ProductDisplayStyles>
  )
}
