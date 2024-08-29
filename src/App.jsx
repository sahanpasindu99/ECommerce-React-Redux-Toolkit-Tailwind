import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import store from './store/store'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'
// import './App.css'

function App() {
   

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </Provider>
  )
}

export default App
