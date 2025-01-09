import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'




const App = () => {
  return (
    <>
    <center>
      <h1>****** Day-5 ******</h1>
      <h1>****** React-Router-Dom Day-1st******</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>

      </Route>



    </Routes>
    
    </BrowserRouter>
    </center>
    </>
  )
}

export default App