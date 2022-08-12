import React, { useContext } from 'react'
import { MainContext } from '../store/main-context';

const CartProduct = ({ product }) => {
  const ctx=useContext(MainContext);
  const { price, title, images, id, description } = product;

  return (
    <div className='cart-product'>
      <figure>
        <img src={images[0]} alt="thumbnail" className='img-fluid cart-product__image' />
      </figure>
      <div className='flex-1'>
        <p className='cart-product__title'>{title}</p>
        <p className='cart-product__desc'>{description}</p>
        <h3 className='cart-product__price'>${price}</h3>
      </div>
      <div className='align-self-center'>
        <button className='btn btn-danger' onClick={() => ctx.removeFromCart(product)}>Remove</button>
      </div>
    </div>
  )
}

export default CartProduct