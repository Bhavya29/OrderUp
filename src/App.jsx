
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import PizzaMenu from './components/PizzaMenu/PizzaMenu'
import PizzaOrder from './components/PizzaOrder/PizzaOrder'
import WriteReviews from './components/WriteReviews/WriteReviews'
import OrderCOnfirmation from './components/OrderConfirmation/OrderCOnfirmation'

function App() {
  const res_name = "Order Up!"

  return (
    <>
      
      <BrowserRouter>
      <Header res_name={res_name}/>
      <Routes>
      <Route path='/' element={<Home res_name={res_name}/>}/>
      <Route path='/menu' element={<PizzaMenu/>}/>
      <Route path='/order' element={<PizzaOrder/>}/>
      <Route path='/reviews' element={<WriteReviews/>}/>
      <Route path='/confirmation' element={<OrderCOnfirmation/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
