import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Shop'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Navbaar from './Navbaar.jsx'
import Compdata from './Compdata.jsx'
import SliderComp from './website.jsx'
// import App from './App.jsx'
import List from './list.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbaar />
      <Routes>
        <Route path='/' element={<SliderComp />}></Route>
        <Route path='/Home' element={<SliderComp />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/list' element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  // <App />
)
