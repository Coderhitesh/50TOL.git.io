import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from './bg.jpg'
import p1 from './p2.webp'
import p2 from './p3.webp'
import p3 from './p4.webp'
import p4 from './p5.webp'
import p5 from './p6.webp'
import p6 from './p7.webp'
import p7 from './p8.webp'
import p8 from './p9.webp'

function DimondJewelleryPage() {
    const [isMaleTabActive, setIsMaleTabActive] = useState(true);
    const [isFemaleTabActive, setIsFemaleTabActive] = useState(false);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
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
        window.scrollTo({
            top : 0,
            behavior: "smooth"
        })
    },[])

    const MaleData = [
        {
            id : 1,
            name : 'Diamond Owl Ring',
            img : p1,
            price : '2999'
        },
        {
            id : 2,
            name : 'Diamond Owl Ring',
            img : p2,
            price : '2999'
        },
        {
            id : 3,
            name : 'Diamond Owl Ring',
            img : p3,
            price : '2999'
        },
        {
            id : 4,
            name : 'Diamond Owl Ring',
            img : p4,
            price : '2999'
        },
        {
            id : 5,
            name : 'Diamond Owl Ring',
            img : p5,
            price : '2999'
        },
        {
            id : 1,
            name : 'First',
            img : p6,
            price : '2999'
        },
        {
            id : 2,
            name : 'Diamond Owl Ring',
            img : p7,
            price : '2999'
        },
        {
            id : 3,
            name : 'Diamond Owl Ring',
            img : p8,
            price : '2999'
        },
        {
            id : 4,
            name : 'Diamond Owl Ring',
            img : p8,
            price : '2999'
        },
        {
            id : 5,
            name : 'Diamond Owl Ring',
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
                    <span>Golden Jewellery</span>
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

export default DimondJewelleryPage