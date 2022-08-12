import React from 'react'

const CartProduct = ({product}) => {
  const { price, title, images, category,id } = product;  

  return (
    <div className='cart-product'> 
      <img src={images[0]} alt="thumbnail" className='img-fluid cart-product__image' />
      <p className='cart-product__title'>{title}</p>
    </div>
  )
}

export default CartProduct