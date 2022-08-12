import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../store/main-context';
import CartProduct from './CartProduct';
import TotalPayable from './TotalPayable';

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
        {
          cart.length<=0 && <h1>Cart is empty</h1>
        }
        {
          cart.length > 0  && (
            <>
              <h1>This is Cart</h1>
              <div className="row">
                <div className='col-8'>
                  {
                    cart.map((product) =>
                      <CartProduct key={product.id} product={product} />
                    )
                  }
                </div>
                <div className='col-4'>
                  <TotalPayable total={total} />
                </div>
              </div>
            </>)
        }
      </div>
    </div>
  )
}

export default Cart