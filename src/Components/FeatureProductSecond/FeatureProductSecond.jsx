import React from 'react'
import './FeatureProductSecond.css'
import left from './left.jpg'
import right from './right.jpg'

function FeatureProductSecond() {
  return (
    <section className='feature-section-second'>
      <div className="feature-section-second-container">
        <div className="left same-col">
            <img src={left} alt="" />
            <div className="main-content">
                <div className="content">
                    <h2>Engagement Rings</h2>
                    <p>Browse our stunning range of Diamond Solitaire and Halo Engagement Rings</p>
                    <div className="btn-parents">
                        <a href="">SOLITAIRE RINGS</a>
                        <a href="">HALO RINGS</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="right same-col">
            <img src={right} alt="" />
            <div className="main-content">
                <div className="content">
                    <h2>Wedding Rings</h2>
                    <p>Love for a lifetime with Harper Taits Classic and Diamond Set Wedding Bands</p>
                    <div className="btn-parents">
                        <a href="">CLASSIC</a>
                        <a href="">DIAMOND SET</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureProductSecond
