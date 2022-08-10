import React, { useContext } from 'react'
import { MainContext } from '../store/main-context';

const Product = ({ product }) => {
  const ctx=useContext(MainContext);
  const { price, title, images, category,id } = product;  
  return (
    <li className='product_item'>
      <h1 className='product_item_category'>{category}</h1>
      <figure>
        <img src={images[0]} alt="thumbnail" className='img-fluid product_item_image' />
      </figure>
      <h2 className='product_item_title'>{title}</h2>
      <div className='badge'>
        <p>${price}</p>
      </div>
      <div className='btn-container'> 
      { ctx.cart && ctx.cart.find((item)=> item.id === id) ? (
        <button className='btn btn-danger w-100' onClick={()=>ctx.removeFromCart(product)}>Remove from Cart</button>
        ) : (
          <button className='btn btn-success mb-2 w-100' onClick={()=>ctx.addToCart(product)}>Add To Cart</button>
        )}       
      </div>
    </li>
  )
}

export default Product