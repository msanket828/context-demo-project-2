import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../store/main-context';

const Navbar = () => {
  const ctx=useContext(MainContext);
  return (
    <nav className='navbar py-3 bg-dark'>
      <div className="container d-flex align-items-center">
        <a href="#fixme">EKart</a>
        <ul className='d-flex align-items-center justify-content-between p-0 mb-0'>
          <li>
            <NavLink to='/' activeclassname='active'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products' activeclassname='active'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/cart' activeclassname='active' className="cart-nav-link">
              Cart 
              {
                ctx.cart.length>0 &&
                <span className='cart-counter'> {ctx.cart.length > 0 && ctx.cart.length}</span>
              }
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar