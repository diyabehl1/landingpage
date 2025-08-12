import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Main/Nav'
import Home from './Main/Home'
import Footer from './Main/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
   <>
   <BrowserRouter>
    <Nav></Nav>
   <Routes>
   <Route path='/' element={<Home></Home>}></Route>
    
    
    </Routes>
<Footer></Footer>
    </BrowserRouter>
   
   
   </>
  )
}

export default App















