import React, { useEffect } from 'react'
import './WhyChooseUs.css'

function WhyChooseUs() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
    return (
        <section className='WhyChooseUs-section'>
            <div className="WhyChooseUs-container">
                <div className="heading">
                    <h2>Why Choose Us</h2>
                </div>
                <div className="main-container">
                    <ul>
                        <li><strong>Quality Assurance: </strong>At 50TOLA, we pride ourselves on offering high-quality gold, silver, and diamond jewelry. Each piece undergoes rigorous quality checks to ensure durability and beauty.</li>
                        <li><strong>Wide Range of Options: </strong>Whether you're looking for a timeless diamond ring, a classic gold necklace, or trendy silver earrings, we have a diverse selection to cater to every style and occasion.</li>
                        <li><strong>Expert Craftsmanship: </strong>Our jewelry is crafted by skilled artisans who pay attention to every detail, ensuring exquisite designs and superior craftsmanship.</li>
                        <li><strong>Transparent Pricing: </strong>We believe in transparent pricing, so you'll always know exactly what you're paying for. No hidden costs or surprises.</li>
                        <li><strong>Customer Satisfaction: </strong>Your satisfaction is our priority. From the moment you browse our website to the delivery of your purchase, we strive to provide excellent customer service and a seamless shopping experience.</li>
                        <li><strong>Customization Options: </strong>At 50TOLA, we understand that jewelry is often deeply personal. That's why we offer customization options, allowing you to create a piece that reflects your unique style and preferences. Whether it's engraving a special message or designing a bespoke piece from scratch, our team is dedicated to bringing your vision to life.</li>
                        <li><strong>Ethical Sourcing: </strong>We are committed to ethical sourcing practices, ensuring that the materials used in our jewelry are sourced responsibly. We work closely with suppliers who adhere to strict ethical standards, promoting fair labor practices and environmentally sustainable mining methods.</li>
                        <li><strong>Lifetime Guarantee: </strong>We stand behind the quality of our products with a lifetime guarantee. If you encounter any issues with your jewelry due to manufacturing defects, we will repair or replace it free of charge. Our commitment to quality extends long after your purchase, providing you with peace of mind and confidence in your investment.</li>
                        <li><strong>Community Engagement: </strong>50TOLA is more than just a jewelry brand; we are actively involved in giving back to the communities that support us. Through various philanthropic initiatives and partnerships, we strive to make a positive impact and contribute to the well-being of society.</li>
                        <li><strong>Exclusive Collections and Limited Editions: </strong>In addition to our timeless classics, we regularly introduce exclusive collections and limited-edition pieces that showcase the latest trends and innovations in jewelry design. By choosing 50TOLA, you'll have access to unique and coveted pieces that set you apart from the crowd.</li>
                        <li><strong>Secure Shopping Experience: </strong>We prioritize the security of your personal and financial information. Our website utilizes the latest encryption technology to ensure that your transactions are safe and secure. You can shop with confidence, knowing that your privacy and security are our top priorities.</li>
                        <li><strong>Expert Guidance: </strong>Our team of jewelry experts is here to assist you every step of the way. Whether you need help selecting the perfect engagement ring, understanding the 4Cs of diamond quality, or choosing the right metal for your necklace, we're here to provide expert guidance and advice tailored to your needs.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
