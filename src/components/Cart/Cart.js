import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import BackButton from '../BackButton/BackButton'
import { Link } from 'react-router-dom'
import CheckoutModal from '../CheckoutModal/CheckoutModal'

const CartStyles = styled.div`
display: flex;
flex-direction: column;

min-height: 85vh;
max-height: 85vh;

overflow-y: scroll;

padding: 16px;

  .total {
    font-weight: 600;
    text-align: right;
    padding-bottom: 15vh;
  }

  .checkout {
    height: 48px;
    width: 120px;

    border: none;

    background-color: black;
    color: white;

    font-weight: 600;
    font-size: 16px;

    margin-left: auto;
    margin-top: 16px;
  }

  .no-items {
    margin: 0 auto;
    text-align: center;
  }
`

const ShopButton = styled.button`
background-color: #DED7D3;
border: none;
height: 36px;
font-size: 24px;
margin: 16px 0;
max-width: 150px;

a {
  text-decoration: none;
  color: ${props => props.theme.primaryText};
}
`

export default function Cart() {
  const { state } = useContext(CartContext)
  const [modal, setModal] = useState(true);

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <CartStyles>
      <BackButton />
      {state.cart.length > 0 &&
        <>
          {state.cart.map(cartItem => (
            <CartItem key={`${cartItem.item.name}${cartItem.item.qty}`} item={cartItem.item} quantity={cartItem.qty} />
          ))}
          <p className="total">
            TOTAL: {state.total} USD
      </p>
          <button className="checkout" onClick={handleModal}>
            CHECK OUT
          </button>
        </>
      }
      {state.cart.length === 0 &&
        <div className="no-items">
          <p>
            No items in cart!
        </p>
          <ShopButton>
            <Link to="/shop">
              SHOP NOW
        </Link>
          </ShopButton>
        </div>
      }
      {modal && <CheckoutModal toggleModal={handleModal} />}

    </CartStyles >
  )
}
