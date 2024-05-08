import React from 'react'
import f1 from './f1.jpg'
import './fetureimg.css'
import './FeatureProduct.css'

function FeatureProduct() {
  return (
    <section className=' feature-section w-full'>
      <div className=' feature-container max-w-[1920px] m-[0 auto] px-[10px] py-[40px] flex justify-center items-center gap-4'>
        <div className={`same-col w-[31%] h-[440px] flex items-end justify-center bgimages bg-cover bg-center`} >
            <div className='content w-[60%] h-[38%] flex flex-col items-center justify-center gap-2 bg-white opacity-[0.9]'>
                <span className=' font-light'>PROMISE</span>
                <h2 className=' font-extrabold text-xl text-center'>Our Vow To You</h2>
                <a href="" className=' font-bold py-1 px-4 bg-[black] text-white'>READ MORE</a>
            </div>
        </div>
        <div className=" same-col w-[31%] h-[440px] flex items-end justify-center bgimages bg-cover bg-center">
            <div className=' content w-[60%] h-[38%] flex flex-col items-center justify-center gap-2 bg-white opacity-[0.9]'>
                <span className=' font-light'>CRAFTED</span>
                <h2 className='font-extrabold text-xl text-center'>Bespoke Ring Design</h2>
                <a href="" className=' font-bold py-1 px-4 bg-[black] text-white'>READ MORE</a>
            </div>
        </div>
        <div className=" same-col w-[31%] h-[440px] flex items-end justify-center bgimages bg-cover bg-center">
            <div className=' content w-[60%] h-[38%] flex flex-col items-center justify-center gap-2 bg-white opacity-[0.9]'>
                <span className=' font-light'>SURPRISE HER</span>
                <h2 className='font-extrabold text-xl text-center'>Diamond Jewellery</h2>
                <a href="" className=' font-bold py-1 px-4 bg-[black] text-white'>READ MORE</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureProduct
