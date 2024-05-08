import React from 'react'
import img from './img.webp'
import './AboutHomePage.css'

function AboutHomePage() {
  return (
    <section className='about-section w-full'>
      
      <div className=' about-container max-w-[1920px] m-[0 auto] px-[10px] py-[40px] flex justify-center items-center'>
        <div className='same-col w-[48%] flex justify-center items-center'>
            <img src={img} className=' w-[80%]' alt="" />
        </div>
        <div className='same-col w-[48%] flex flex-col items-start gap-3'>
            <span className=' font-light'>50 TOLA JEWELLERS</span>
            <h3 className=' font-bold text-xl'>Crafted With Love, For Love</h3>
            <p className=' font-light text-lg'>At 50 Tola, love means everything. In the heart of 50 we craft beautiful fine jewellery with exceptional attention to detail; a celebration of what matters most.</p>
            <p className=' font-light text-lg'>Our passion is creating the most perfect jewellery for you, whether an engagement or wedding ring from our beautifully designed collection or a completely bespoke creation. We are with you every step of the way, as you make your choice and in the years thereafter. Because behind everything, is love.</p>
            <a href="" className=' px-3 py-1 font-bold bg-black text-white'>FIND OUT MORE</a>
        </div>
      </div>
    </section>
  )
}

export default AboutHomePage
