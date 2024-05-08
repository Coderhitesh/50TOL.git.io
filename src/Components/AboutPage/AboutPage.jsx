import React from 'react'
import bg from './bg.jpg'
import './AboutPage.css'

function AboutPage() {
  return (
    <section className='AboutPage-section'>
        <div className="bg">
            <img src={bg} alt="" />
        </div>
      <div className="AboutPage-container">
        <div className="heading">
            <span>About Us</span>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
