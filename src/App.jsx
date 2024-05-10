import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/ContactUs/ContactUs'
import SilverJewelleryPage from './Components/SilverJewelleryPage/SilverJewelleryPage'
import GoldenJewelleryPage from './Components/GoldenJewelleryPage/GoldenJewelleryPage'
import DimondJewelleryPage from './Components/DimondJewelleryPage/DimondJewelleryPage'
import AboutPage from './Components/AboutPage/AboutPage'
import SinglePage from './Components/SinglePage/SinglePage'
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUs'
import Privacy from './Components/Privacy/Privacy'
import Term from './Components/Term/Term'
import Cart from './Components/Cart/Cart'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/contact" element={<ContactUs />}/>
        <Route  path="/silver-jewellery" element={<SilverJewelleryPage />}/>
        <Route  path="/golden-jewellery" element={<GoldenJewelleryPage />}/>
        <Route  path="/diamond-jewellery" element={<DimondJewelleryPage />}/>
        <Route  path="/about" element={<AboutPage />}/>
        <Route  path="/single-Page" element={<SinglePage />}/>
        <Route  path="/why-choose-us" element={<WhyChooseUs />}/>
        <Route  path="/privacy" element={<Privacy />}/>
        <Route  path="/term" element={<Term />}/>
        <Route  path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
