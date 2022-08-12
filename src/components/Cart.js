import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../store/main-context';
import CartProduct from './CartProduct';

const Cart = () => {
  const ctx = useContext(MainContext);
  const [total, setTotal] = useState(0);
  let { cart } = ctx;
  useEffect(() => {
    cart.length && setTotal(cart.reduce((a, b) => {      
      return (Number(a) + Number(b.price))
    }, 0))
  }, [cart])

  return (
    <div className='common cart'>
      <div className="container">
        <h1>This is Cart</h1>
        <div className="row">

          <div className='col-8'>
            {
              cart.map((product)=>
              <CartProduct key={product.id} product={product}/>
              )
            }
          </div>
          <div className='col-4'>

            <div className='card'>
              {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart