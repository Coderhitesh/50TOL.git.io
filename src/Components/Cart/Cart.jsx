import React, { useEffect, useState } from 'react'
import './Cart.css'
import p1 from './p4.webp'

function Cart() {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])

    const [value, setValue] = useState(1)

    const handleDecrise = () => {
        if(value === 0 )(
            setValue(0)
        )
        else{
            setValue(value - 1);
        }
    }

    const handleIncrease = () => {
        setValue(value + 1)
    }

    const data = [
        {
            id: 1,
            name: 'Anushka Sharma Silver Deer Heart Necklace',
            img: p1,
            mainPrice: 5000,
            descountPrice: 3000
        },
        {
            id: 2,
            name: 'Anushka Sharma Silver Deer Heart Necklace 2',
            img: p1,
            mainPrice: 5000,
            descountPrice: 3600
        },
    ]

    return (
        <section className='cart-section'>
            <div className="cart-container">
                <div className="heading">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="main-container">
                    <div className="left">
                        {
                            data && data.map((item, index) => (
                                <div key={index} className="row">
                                    <div className="img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="price">
                                            <h2>Rs.{item.descountPrice}</h2>
                                            <del>Rs.{item.mainPrice}</del>
                                        </div>
                                        <div className="name-in">
                                            <h1>{item.name}</h1>
                                            <div className="count">
                                                <div className="pluse" onClick={handleDecrise}>
                                                    <i class="ri-subtract-fill"></i>
                                                </div>
                                                <div className="input">
                                                    <span>{value}</span>
                                                </div>
                                                <div className="pluse" onClick={handleIncrease}>
                                                    <i class="ri-add-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <button>Remove</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="right">
                        <div className="head">
                            <h2>Order Summary</h2>
                        </div>
                        <div className="heading">
                            <h3>Estimated total</h3>
                            <div className="price">
                                <h2>Rs.6600</h2>
                                <del>Rs.10000</del>
                            </div>
                        </div>
                        <p>Pan India Free Shipping for orders above ₹450</p>
                        <button> <i class="ri-git-repository-private-fill"></i> CHECKOUT SECURELY</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
