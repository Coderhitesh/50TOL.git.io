import React, { useState } from 'react';
import './SilverCategoryHome.css';
import p1 from './p2.webp'
import p2 from './p3.jpg'
import p3 from './p4.webp'
import p4 from './p5.webp'
import p5 from './p6.webp'
import { Link } from 'react-router-dom';

function SilverCategoryHome() {
    const [isMaleTabActive, setIsMaleTabActive] = useState(true);
    const [isFemaleTabActive, setIsFemaleTabActive] = useState(false);

    const MaleTabActive = () => {
        setIsMaleTabActive(true);
        setIsFemaleTabActive(false);
    }

    const FemaleTabActive = () => {
        setIsFemaleTabActive(true);
        setIsMaleTabActive(false);
    }

    const MaleData = [
        {
            id : 1,
            name : 'Trident Pendant - Silver Toned',
            img : p1,
            price : '2999'
        },
        {
            id : 2,
            name : 'Iris PENDANT - Silver Toned',
            img : p2,
            price : '2999'
        },
        {
            id : 3,
            name : 'Aqua Pendant - Silver Toned',
            img : p3,
            price : '2999'
        },
        {
            id : 4,
            name : 'Ganesha Pendant (Silver)',
            img : p4,
            price : '2999'
        },
        {
            id : 5,
            name : 'MetaMan Dog Tag Pendnt',
            img : p5,
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
    ]

    return (
        <section className='SilverCategoryHome-section'>
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
                                            {/* <Link to={''} >Add to Cart</Link> */}
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
                                            {/* <Link to={''} >Add to Cart</Link> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
                <div className="btn">
                    <Link to={'/silver-jewellery'}>Show More</Link>
                </div>
            </div>
        </section>
    );
}

export default SilverCategoryHome;
