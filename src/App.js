import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App