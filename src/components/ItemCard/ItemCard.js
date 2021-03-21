import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemCardStyles = styled.div`
display: flex;
flex-direction: column;

  img {
    width: 100%;
  }

  .name{
    font-weight: 600;
  }

  .price {
    font-family: 'Raleway', sans-serif;
    color: #333;
    font-weight: 600;
  }

`

export default function ItemCard({ item }) {
  return (
    <ItemCardStyles>
      <Link to={`/item/${item.name}`}>
        <img src={item.image} alt="" />
        <p className="name">
          {item.name}
        </p>
        <p className="price">
          {item.price} USD
      </p>
      </Link>
    </ItemCardStyles>
  )
}
