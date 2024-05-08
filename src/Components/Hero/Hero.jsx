import React from 'react';
import video from './video.mp4'
import './Hero.css'
function Hero() {
    return (
        <section className='w-full hero-section'>
            <div className='hero-container max-width-[1920px] m-[0 auto]'>
                <div className='w-full relative main-container'>
                    <video className='video w-full h-full' autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                    </video>
                    {/* <div className="banner-for-mob">

                    </div> */}
                    <div className=' content absolute top-0 left-0 w-full h-full flex items-end'>
                        <div className=' w-full h-[30%] flex justify-center gap-1 items-center flex-col'>
                            <h2 className=' text-6xl font-bold'>Jewellery & Diamond Experts</h2>
                            <p className=' text-xl font-semibold'>Harper Tait are renowned for their beautiful designs, exquisite diamonds and their unique design service.</p>
                            <a className=' px-4 py-1 bg-[black] text-white' href="">VIEW ENGAGEMENT RINGS</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
