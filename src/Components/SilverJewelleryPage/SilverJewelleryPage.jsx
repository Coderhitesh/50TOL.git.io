import React, { useEffect, useState } from 'react';
import p1 from './p11.webp'
import p2 from './p2.jpg'
import p3 from './p3.webp'
import p4 from './p4.webp'
import p5 from './p5.webp'
import p6 from './p6.webp'
import p7 from './p7.jpg'
import p8 from './p8.jpg'
import p9 from './p9.webp'
import p10 from './p10.webp'
import { Link } from 'react-router-dom';
import bg from './bg.jpg'

function SilverJewelleryPage() {
    const [isMaleTabActive, setIsMaleTabActive] = useState(true);
    const [isFemaleTabActive, setIsFemaleTabActive] = useState(false);

    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior: "smooth"
        })
    },[])

    const MaleTabActive = () => {
        setIsMaleTabActive(true);
        setIsFemaleTabActive(false);
    }

    const FemaleTabActive = () => {
        setIsFemaleTabActive(true);
        setIsMaleTabActive(false);
    }

    useEffect(()=>{

    },[])

    const MaleData = [
        {
            id : 1,
            name : 'MetaMan Dog Tag Pendnt',
            img : p2,
            price : '2999'
        },
        {
            id : 2,
            name : 'MetaMan Dog Tag Pendnt',
            img : p3,
            price : '2999'
        },
        {
            id : 3,
            name : 'MetaMan Dog Tag Pendnt',
            img : p4,
            price : '2999'
        },
        {
            id : 4,
            name : 'MetaMan Dog Tag Pendnt',
            img : p5,
            price : '2999'
        },
        {
            id : 5,
            name : 'MetaMan Dog Tag Pendnt',
            img : p6,
            price : '2999'
        },
        {
            id : 1,
            name : 'First',
            img : p7,
            price : '2999'
        },
        {
            id : 2,
            name : 'MetaMan Dog Tag Pendnt',
            img : p8,
            price : '2999'
        },
        {
            id : 3,
            name : 'MetaMan Dog Tag Pendnt',
            img : p9,
            price : '2999'
        },
        {
            id : 4,
            name : 'MetaMan Dog Tag Pendnt',
            img : p10,
            price : '2999'
        },
        {
            id : 5,
            name : 'MetaMan Dog Tag Pendnt',
            img : p1,
            price : '2999'
        },
    ]

    const FemMaleData = [
        {
            id : 1,
            name : 'female1',
            img : p1,
            price : '2999'
        },
        {
            id : 2,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 3,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 4,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 5,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 1,
            name : 'female1',
            img : p1,
            price : '2999'
        },
        {
            id : 2,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 3,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 4,
            name : 'female2',
            img : p1,
            price : '2999'
        },
        {
            id : 5,
            name : 'female2',
            img : p1,
            price : '2999'
        },
    ]
  return (
    <section className='SilverCategoryHome-section'>
        <div className="bg">
            <img src={bg} alt="" />
        </div>
            <div className="SilverCategoryHome-container">
                <div className="heading">
                    <span>Silver Jewellery</span>
                    <div className="options">
                        <button onClick={MaleTabActive}>Male</button>
                        <button onClick={FemaleTabActive}>Female</button>
                    </div>
                </div>
                <div className="main-container">
                    {isMaleTabActive && (
                        <div className="male-container">
                            {
                                MaleData && MaleData.map((item,index)=>(
                                    <div key={index} className="col">
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>{item.name}</h3>
                                            <p>Price: Rs.{item.price}/pc</p>
                                            <Link to={''} >Add to Cart</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                    {isFemaleTabActive && (
                        <div className="male-container">
                            {
                                FemMaleData && FemMaleData.map((item,index)=>(
                                    <div key={index} className="col">
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>{item.name}</h3>
                                            <p>Price: Rs.{item.price}/pc</p>
                                            <Link to={''} >Add to Cart</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
  )
}

export default SilverJewelleryPage
