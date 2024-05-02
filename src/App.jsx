import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/ContactUs/ContactUs'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/contact" element={<ContactUs />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
