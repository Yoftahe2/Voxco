import React,{ useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import AppLayout from './pages/Homepage'
import Numbers from './components/Numbers'
import Header from './components/Header'
import OrdersPage from './pages/OrdersPage'

function App() {

 const [isAdmin, setIsAdmin] = useState(false)


  return (
    <>
    <BrowserRouter>
       <Header/> 
      <Routes>
         <Route path='/sign-in' element={<Signin setIsAdmin={setIsAdmin}/>} />
          <Route path='/sign-up' element={<Signup setIsAdmin={setIsAdmin}/>} />
          {/* <Route path='/' element={<AppLayout setIsAdmin={setIsAdmin}/>} /> */}
          <Route path='/' element={<OrdersPage/>} />
          <Route path='/numbers' element={<Numbers/>}/>
          <Route path='/orders' element={<OrdersPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
