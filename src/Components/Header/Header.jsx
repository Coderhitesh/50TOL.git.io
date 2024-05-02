import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

function Header() {
    const [isMobModeActive,setIsMobModeActive] = useState(false)
    const [isSearchActive,setIsSearchActive] = useState(false)

    const activeMobMode = () =>{
        setIsMobModeActive(!isMobModeActive)
    }

    const deActiveMobMode = () =>{
        setIsMobModeActive(false)
    }

    const activeSearchBar = () => {
        setIsSearchActive(!isSearchActive)
    }

    const deActiveSearchBar = () => {
        setIsSearchActive(false)
    }

    return (
        <header className='header-section'>
            <div className="header-container">
                <div className="top-header">
                    <span>Spread your payments with KLARNA</span>
                </div>
                <div className="mid-header">
                    <div className="left">
                        <a href="">Tel: 012345689</a>
                        <Link to={''} >Showroom</Link>
                        <Link to={'/contact'} >Contact</Link>
                    </div>
                    <div className="right">
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-line"></i>
                        <i class="ri-pinterest-line"></i>
                    </div>
                </div>
                <div className="bottom-header">
                    <div className="top">
                        <div className="search">
                            <div className="icon">
                                <i class="ri-search-line" onClick={activeSearchBar}></i>
                                <i class="ri-menu-line" onClick={activeMobMode}></i>
                            </div>
                            <div className={`search-box ${isSearchActive ? 'active-searchbar' : ''}`} >
                                <input type="text" placeholder="Search" />
                                <button>Search</button>
                            </div>
                        </div>
                        <div className={`logo ${isSearchActive ? 'logo-none' : ''}`} >
                            {/* <img src={logo} alt="" /> */}
                            <h2>50<span>Tola</span></h2>
                        </div>
                        <div className="bag">
                            <i class="ri-user-line"></i>
                            <i class="ri-shopping-bag-line"></i>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><Link>ENGAGEMENT RINGS</Link></li>
                            <li><Link>WEDDING RINGS</Link></li>
                            <li><Link>DIAMONDS</Link></li>
                            <li><Link>DIAMOND JEWELLERY</Link></li>
                            <li><Link>EDUCATION</Link></li>
                            <li><Link>JOURNAL</Link></li>
                            <li><Link>ABOUT</Link></li>
                            <li><Link to={'/contact'}>CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className={`mob-nav ${isMobModeActive ? 'mob-active' : ''}`}>
                    <div className="menu-close">
                        <i class="ri-close-fill" onClick={deActiveMobMode}></i>
                    </div>
                    <div onClick={deActiveMobMode} className="booking-btn">
                        <span>BOOK A CONSULTATION</span>
                    </div>
                    <ul>
                        <li><Link onClick={deActiveMobMode}>ENGAGEMENT RINGS</Link></li>
                        <li><Link onClick={deActiveMobMode}>WEDDING RINGS</Link></li>
                        <li><Link onClick={deActiveMobMode}>DIAMONDS</Link></li>
                        <li><Link onClick={deActiveMobMode}>DIAMOND JEWELLERY</Link></li>
                        <li><Link onClick={deActiveMobMode}>EDUCATION</Link></li>
                        <li><Link onClick={deActiveMobMode}>JOURNAL</Link></li>
                        <li><Link onClick={deActiveMobMode}>ABOUT</Link></li>
                        <li><Link onClick={deActiveMobMode}>CONTACT</Link></li>
                        <li><Link onClick={deActiveMobMode}>MY ACCOUNT</Link></li>
                    </ul>
                    <div className="social-link">
                        <div onClick={deActiveMobMode} className="link-icon">
                            <i class="ri-instagram-line"></i>
                        </div>
                        <div onClick={deActiveMobMode} className="link-icon">
                            <i class="ri-facebook-line"></i>
                        </div>
                        <div onClick={deActiveMobMode} className="link-icon">
                            <i class="ri-pinterest-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
