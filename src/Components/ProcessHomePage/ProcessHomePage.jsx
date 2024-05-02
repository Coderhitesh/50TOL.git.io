import React from 'react'
import './ProcessHomePage.css'
import p1 from './one.svg'
import p2 from './two.svg'
import p3 from './three.svg'
import p4 from './four.svg'

function ProcessHomePage() {
  return (
    <section className='ProcessHomePage-section'>
      <div className="ProcessHomePage-container">
        <div className="header">
            <span>Our Process</span>
            <p>Build your perfect engagement ring with our simple 4 step process.</p>
        </div>
        <div className="content">
            <div className="same-col">
                <div className="img">
                    <img src={p1} alt="" />
                </div>
                <p>CHOOSE YOUR SETTING</p>
            </div>
            <div className="same-col">
                <div className="img">
                    <img src={p2} alt="" />
                </div>
                <p>CHOOSE YOUR DIAMOND</p>
            </div>
            <div className="same-col">
                <div className="img">
                    <img src={p3} alt="" />
                </div>
                <p>CREATE YOUR FINAL RING DESIGN</p>
            </div>
            <div className="same-col">
                <div className="img">
                    <img src={p4} alt="" />
                </div>
                <p>SELECT AND ORDER YOUR RING</p>
            </div>
        </div>
        <div className='btn-parents'>
            <a href="">START HERE</a>
            <a href="">SCHEDULE A CONSULTATION</a>
        </div>
      </div>
    </section>
  )
}

export default ProcessHomePage
