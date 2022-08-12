import React, { useContext } from 'react'
import { MainContext } from '../store/main-context'

const TotalPayable = ({total}) => {
  const ctx=useContext(MainContext);
  return (
    <div className='card sticky-container'>
      <h3>Total Payable</h3>
      <hr className='mt-0' />
      <ul className='p-0 m-0'>
        {
          ctx.cart.map((item)=> {
            return (
              <li className='payable-list-item'>
                <p className='payable_item'>{item.title}</p>
                <p className='payable_price ml-auto'>${item.price}</p>
              </li>
              )
            })
          }
        <li className='payable-list-item border-top pt-2'>
          <p className='payable_item'>Total</p>
          <p className='payable_price ml-auto'>${total}</p>
        </li>
      </ul>      
    </div>
  )
}


export default TotalPayable