import React, { useEffect } from 'react'
import './Privacy.css'

function Privacy() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
  return (
    <section className='privacy-section'>
        <div className="privacy-container">
            <div className="heading">
                <h2>Privacy Policy</h2>
            </div>
            <div className="main-container">
                <p>At 50TOLA, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us when you visit our website or make a purchase.</p>
                <div className="same-col">
                    <h3>1. Information We Collect:</h3>
                    <ul>
                        <li><strong>Personal Information: </strong>When you place an order or register an account on our website, we may collect personal information such as your name, email address, shipping address, and phone number.</li>
                        <li><strong>Payment Information: </strong>In order to process your orders, we collect payment information such as credit card details or other payment methods. This information is securely processed through encrypted payment gateways and is not stored on our servers.</li>
                        <li><strong>Browsing Information: </strong>Like many websites, we may collect non-personal information such as your IP address, browser type, and pages visited to analyze trends and improve the user experience.</li>
                    </ul>
                </div>
                <div className="same-col">
                    <h3>2. How We Use Your Information:</h3>
                    <ul>
                        <li><strong>Order Fulfillment: </strong>We use the information you provide to process and fulfill your orders, communicate with you about your purchases, and provide customer support.</li>
                        <li><strong>Account Management: </strong>If you create an account on our website, we may use your information to manage your account, including order history, preferences, and account settings.</li>
                        <li><strong>Marketing and Communication: </strong>With your consent, we may use your email address to send you promotional offers, newsletters, and updates about our products and services. You can opt out of marketing communications at any time by following the unsubscribe instructions in the email or contacting us directly.</li>
                    </ul>
                </div>
                <div className="same-col">
                    <h3>3. Information Sharing:</h3>
                    <ul>
                        <li><strong>Third-Party Service Providers: </strong>We may share your information with third-party service providers who assist us in operating our website, processing payments, fulfilling orders, or providing other services. These service providers are contractually obligated to protect your information and may only use it for the purposes of providing services to us.</li>
                        <li><strong>Legal Compliance: </strong>We may disclose your information as required by law, such as in response to a subpoena, court order, or other legal process, or to protect the rights, property, or safety of 50TOLA, our customers, or others.</li>
                    </ul>
                </div>
                <div className="same-col">
                    <h3>4. Data Security:</h3>
                    <p>We take the security of your information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, disclosure, alteration, or destruction. We use encryption technology, secure servers, and other safeguards to ensure the integrity and confidentiality of your data.</p>
                </div>
                <div className="same-col">
                    <h3>5. Your Rights:</h3>
                    <p>You have the right to access, correct, or delete the personal information we hold about you. You may also have the right to object to or restrict certain processing of your information. To exercise these rights or for any questions regarding our Privacy Policy, please contact us using the information provided below.</p>
                </div>
                <div className="same-col">
                    <h3>6. Changes to this Privacy Policy:</h3>
                    <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the revised policy will become effective immediately upon posting. We encourage you to review this Privacy Policy periodically for any updates or changes.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Privacy
