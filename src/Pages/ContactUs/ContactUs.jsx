import React, { useEffect } from 'react'
import './ContactUs.css'
import left from './left.webp'
import AdressHomePage from '../../Components/AdressHomePage/AdressHomePage'

function ContactUs() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior: 'smooth'
        })
    },[])
    return (
        <section className='contact-section'>
            <div className="bg"></div>
            <div className="contact-container">
                <div className="first">
                    <div className="left">
                        <img src={left} alt="" />
                    </div>
                    <div className="right">
                        <h2>Contact Us</h2>
                        <p>We love hearing from our customers. If you have a question please get in touch and speak to one of our consultants.</p>
                        <p><span>Tel: </span>020 3728 8337 </p>
                        <p><span>Email: </span>info@gmail.com</p>
                        <p><span>Harper Tait: </span>Suite 26, New House, 67-68 Hatton Garden, London, EC1N 8JY</p>
                    </div>
                </div>
                <div className="second">
                    <div className="heading">
                        <h2>Schedule a Consultation</h2>
                        <p>Fill in the form below to book an online or in-store appointment with one of our diamond and jewellery experts. We will walk you through our bespoke design process, guide you on our product range or help you explore your ideas to create the perfect piece.</p>
                    </div>
                <form action="">
                    <div className="same-field">
                        <div className="left">
                            <label htmlFor="firstName">First Name*</label>
                            <input type="text" name='firstName' id="name" />
                        </div>
                        <div className="right">
                            <label htmlFor="lastName">Last Name*</label>
                            <input type="text" name='lastName' id="surname" />
                        </div>
                    </div>
                    <div className="same-field">
                        <div className="left">
                            <label htmlFor="email">First Email*</label>
                            <input type="text" name='email' id="name" />
                        </div>
                        <div className="right">
                            <label htmlFor="phoneNo">Phone number*</label>
                            <input type="text" name='phoneNo' id="surname" />
                        </div>
                    </div>
                    <div className="same-field formessage">
                        <label htmlFor="message">Message*</label>
                        <textarea name="message" id="msg"></textarea>
                    </div>
                    <button type='submit' className='sendbtn'>Submit</button>
                </form>
                </div>
                <div className="third">
                    <AdressHomePage />
                </div>
            </div>
        </section>
    )
}

export default ContactUs
