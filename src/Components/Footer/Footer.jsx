import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import img1 from './product.webp'

function Footer() {
  return (
    <footer className='footer-section'>
      <div className="footer-container">
        <div className="top">
          <i class="ri-instagram-line"></i>
          <i class="ri-facebook-line"></i>
          <i class="ri-pinterest-line"></i>
        </div>
        <div className="mid">
          <div className="same-col same-link-col">
            <h2>SERVICES & GUIDES</h2>
            <ul>
              <li><Link to={'/silver-jewellery'}>SILVER JEWELLERY</Link></li>
              <li><Link to={'/golden-jewellery'}>GOLDEN JEWELLERY</Link></li>
              <li><Link to={'/diamond-jewellery'}>DIAMOND JEWELLERY</Link></li>
              {/* <li><Link to={'/contact'}>CONTACT</Link></li> */}
              
            </ul>
          </div>
          <div className="img same-col">
            <img src={img1} alt="" />
          </div>
          <div className="same-col same-link-col">
            <h2>CUSTOMER SERVICES</h2>
            <ul>
              <li><Link to={'/about'}>About us</Link></li>
              <li><Link to={'/why-choose-us'}>Why Choose Use</Link></li>
              <li><Link to={'/contact'}>Contact us</Link></li>
              <li><Link to={'/privacy'}>Privacy Policy</Link></li>
              <li><Link to={'/term'}>Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="address-name">
            <h4>50Tola</h4>
            <p>Suite 26, New House, 67-68 Hatton Garden, London, EC1N 8JY</p>
          </div>
          <div className="number-mail">
            <p><span>Tel: </span>9999999999</p>
            <p><span>Email: </span>info@gmail.com</p>
          </div>
          <div className="copyright">
              <p>2024 50Tola</p>
              <p>Design by <a href="">Digi India Solution</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
