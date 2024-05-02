import React from 'react'
import './ContactUs.css'
import left from './left.webp'

function ContactUs() {
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
                    <button type='submit' className='sendbtn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
