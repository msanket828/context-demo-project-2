import React, { createContext, useEffect, useState } from 'react';

export const MainContext = createContext();

const Context = (props) => {
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState([]);
  
  const baseUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setProductData(data.products));
  }, [])


  const addToCart = (product) => {
    setCart([...cart, product]);
  }


  const removeFromCart = (product) => {
    setCart(
      cart.filter((item) => item.id !== product.id)
    )
  }

  return (
    <MainContext.Provider value={{
      cart, setCart, productData, addToCart, removeFromCart
    }}>
      {props.children}
    </MainContext.Provider>
  )
}

export default Context;
