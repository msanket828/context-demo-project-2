import React, { useContext } from 'react'
import { MainContext } from '../store/main-context'
import Product from './Product';


const Products = () => {
  const context = useContext(MainContext);  
  return (
    <div className='products'>
      <div className="container">
        <ul className='products_list pt-5'>
          {
            context.productData.map((product) => (
              <Product key={product.id} product={product}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Products