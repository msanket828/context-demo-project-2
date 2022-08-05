import React from 'react'

const Product = ({ product }) => {
  const { price, title, images, category } = product;
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
        <button className='btn btn-success mb-2 w-100'>Add To Cart</button>
        <button className='btn btn-danger w-100'>Remove from Cart</button>
      </div>
    </li>
  )
}

export default Product