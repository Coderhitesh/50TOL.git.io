import React, { useEffect } from 'react'
import './Term.css'

function Term() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior: "smooth"
        })
    },[])
  return (
    <section className='privacy-section'>
      <div className="privacy-container">
        <div className="heading">
            <h2>Term & Conditions</h2>
        </div>
        <div className="main-container">
            <p>Welcome to 50Tola! These terms and conditions ("Terms") govern your use of the 50Tola website (the "Website") and the purchase of products from 50Tola ("we", "us", or "our"). By accessing the Website and/or making a purchase, you agree to comply with and be bound by these Terms. Please read them carefully before using the Website or making a purchase.</p>
            <div className="same-col">
                <h3>1. Use of the Website:</h3>
                <ul>
                    <li>You may use the Website for lawful purposes only and in accordance with these Terms.</li>
                    <li>You agree not to use the Website in any way that violates applicable laws or regulations or infringes upon the rights of others.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>2. Product Information:</h3>
                <ul>
                    <li>We strive to provide accurate and up-to-date information about our products, including descriptions, prices, and availability. However, we do not warrant the accuracy, completeness, or reliability of this information.</li>
                <li>We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>Orders and Payment:</h3>
                <ul>
                    <li>By placing an order on the Website, you make an offer to purchase the products listed in your order.</li>
                    <li>All orders are subject to acceptance by us. We reserve the right to accept or decline any order for any reason.</li>
                    <li>Payment must be made in full at the time of purchase. We accept various payment methods, including credit/debit cards and other online payment platforms.</li>
                    <li>Prices listed on the Website are in [currency] and are exclusive of shipping and handling charges, which will be added to your total order amount.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>4. Shipping and Delivery:</h3>
                <ul>
                    <li>We aim to ship orders promptly to the address provided by you during the checkout process. Please ensure that the shipping address is accurate and complete.</li>
                    <li>Delivery times may vary depending on your location and the shipping method selected. We will provide you with an estimated delivery date, but we cannot guarantee delivery by a specific date.</li>
                    <li>Risk of loss and title for products purchased from us pass to you upon delivery of the items to the carrier.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>5. Returns and Exchanges:</h3>
                <ul>
                    <li>We want you to be satisfied with your purchase. If you are not completely satisfied, you may return or exchange eligible products within 7 days of receipt, subject to our return policy.</li>
                    <li>Please review our Return Policy for detailed information on eligibility criteria, return process, and any applicable restocking fees or return shipping charges.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>6. Intellectual Property:</h3>
                <ul>
                    <li>All content on the Website, including text, graphics, logos, images, and software, is the property of 50Tola or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
                    <li>You may not use, reproduce, modify, distribute, or display any content from the Website without our prior written consent.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>7. Limitation of Liability:</h3>
                <ul>
                    <li>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website or the purchase of products from us.</li>
                    <li>Our total liability for any claims arising out of or related to these Terms shall not exceed the total amount paid by you for the products giving rise to such claims.</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>8. Governing Law and Dispute Resolution:</h3>
                <ul>
                    <li>These Terms shall be governed by and construed in accordance with the laws of [jurisdiction], without regard to its conflict of law principles.</li>
                    <li>Any dispute arising out of or related to these Terms shall be resolved exclusively by arbitration conducted in [jurisdiction] in accordance with the rules of [arbitration organization].</li>
                </ul>
            </div>
            <div className="same-col">
                <h3>Changes to Terms and Conditions:</h3>
                <ul>
                    <li>We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the Website.</li>
                    <li>Your continued use of the Website after any such changes constitutes your acceptance of the revised Terms</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Term
