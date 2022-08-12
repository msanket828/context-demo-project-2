import React, { createContext, useEffect, useState } from 'react';

export const MainContext = createContext();

const Context = (props) => {
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState([]);
  // const [total, setTotal] = useState(0);

  const baseUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setProductData(data.products));
  }, [])


  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  // useEffect(()=> {
  //   let total=cart.reduce((prevValue,currentValue)=> {
  //     return (
  //       +prevValue.price + +currentValue.price
  //     )
  //   },[]);
  //   console.log(total);
  // },[cart]);

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
