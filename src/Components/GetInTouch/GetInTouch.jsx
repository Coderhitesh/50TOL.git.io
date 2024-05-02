import React from 'react'
import './GetInTouch.css'

function GetInTouch() {
  return (
    <section className='GetInTouch-section'>
      <div className="GetInTouch-container">
        <h2>Exclusive News & Offers</h2>
        <p>Subscribe to get exclusive member offers, news and updates from Harper Tait.</p>
        <div className="input-box">
            <input type="text" placeholder='Enter Your Email' />
            <button>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
