// import './App.css'
import React, { createContext, useState } from 'react'
// import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Shop'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Navbaar from './Navbaar.jsx'
import SliderComp from './website.jsx'
import List from './list.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Cart from './Cart.jsx'


const ContextCounter = createContext();
const AddToCart = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([])


  return (
    <>
      <ContextCounter.Provider value={{ count, setCount }}>
        <AddToCart.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <Navbaar />
            <Routes>
              <Route path='/' element={<SliderComp />}></Route>
              <Route path='/Home' element={<SliderComp />}></Route>
              <Route path='/About' element={<About />}></Route>
              <Route path='/Shop' element={<Shop />}></Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path="/signup" element={<Register />} ></Route>
              <Route path="/login" element={<Login />} ></Route>
              <Route path='/list' element={<List />}></Route>
              <Route path='/Cart' element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </AddToCart.Provider>
      </ContextCounter.Provider>
    </>
  )
}

export { ContextCounter, AddToCart };
export default App
