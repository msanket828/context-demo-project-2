import React, { createContext, useEffect, useState } from 'react';

export const MainContext = createContext();

const Context = (props) => {
  const [cart, setCart] = useState([]);
  const [productData,setProductData]=useState([]);
  const baseUrl='https://dummyjson.com/products';

  useEffect(()=> {
    fetch(baseUrl)
    .then(res=> res.json())
    .then(data=> setProductData(data.products));
  },[])

  return (
    <MainContext.Provider value={{
      cart, setCart, productData
    }}>
      {props.children}
    </MainContext.Provider>
  )
}

export default Context;
