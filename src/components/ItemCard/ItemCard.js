import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { createURL } from '../../product-data/helpers';

const ItemCardStyles = styled.div`
display: flex;
flex-direction: column;

opacity: ${props => props.display ? ".65" : "1"};

  a{
    text-decoration: none;
  }

  img {
    width: 100%;
    opacity: ${props => props.display ? ".4" : "1"};
  }

  .name{
    color: ${props => props.theme.primaryText};
    font-weight: 600;
  }

  .price {
    font-family: 'Raleway', sans-serif;
    color: #333;
    font-weight: 600;
  }

`

export default function ItemCard({ item, contraindication }) {
  return (
    <ItemCardStyles display={+contraindication}>
      <div>
        <Link to={"/item/" + createURL(item.name)}>
          <img src={item.image} alt="" />
          <p className="name">
            {item.name}
          </p>
          <p className="price">
            {item.price} USD
          </p>
        </Link>
      </div>
    </ItemCardStyles>
  )
}
