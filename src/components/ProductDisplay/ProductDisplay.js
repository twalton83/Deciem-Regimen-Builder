import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'

const ProductDisplayStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

height: 90vh;

  .info-container {

    padding: 16px;
    max-width: 100vw;

    img {
      width: calc(100vw - 16px);
    }
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }

.price-container {
  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .price {
    font-size: 18px;
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
}
  .back {
    width: 50px;

    font-size: 20px;
    font-weight: 500;
    color: #a3a09b;
    
    background-color: transparent;
    border: none;
    text-decoration: underline;
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
  const [quantity, setQuantity] = useState(1);

  const { cart, dispatch } = useContext(CartContext)

  const handleChange = (e) => {
    if (quantity === 0 && e.target.id !== "add") return
    e.target.id === "add" ? setQuantity(quantity + 1) : setQuantity(quantity - 1)
  }

  let history = useHistory()

  return (
    <ProductDisplayStyles>
      <button className="back" onClick={() => history.goBack()}>
        {'<<<'}
      </button>
      <div className="info-container">
        <h1>
          {item.name}
        </h1>
        <img src={item.image} alt="" />

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
        </div>
      </div>
      <button className="atc" onClick={() => dispatch({
        type: "ADD",
        payload: {
          item, quantity
        }
      })}>
        ADD TO BASKET
      </button>
    </ProductDisplayStyles>
  )
}
