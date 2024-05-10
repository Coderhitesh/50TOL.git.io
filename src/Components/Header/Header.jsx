import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

function Header() {
    const [isMobModeActive, setIsMobModeActive] = useState(false)
    const [isSearchActive, setIsSearchActive] = useState(false)

    const activeMobMode = () => {
        setIsMobModeActive(!isMobModeActive)
    }

    const deActiveMobMode = () => {
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
                    <span>Spread your payments with 50Tola</span>
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
                        <Link to={'/'} className={`logo ${isSearchActive ? 'logo-none' : ''}`} >
                            {/* <img src={logo} alt="" /> */}
                            <h2>50<span>Tola</span></h2>
                        </Link>
                        <div className="bag">
                            <Link to={''}><i class="ri-user-line"></i></Link>
                            <Link to={'/cart'} className="bag">
                            <i class="ri-shopping-bag-line"></i>
                            </Link>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><Link to={'/silver-jewellery'}>SILVER JEWELLERY</Link></li>
                            <li><Link to={'/golden-jewellery'}>GOLDEN JEWELLERY</Link></li>
                            {/* <li><Link>DIAMONDS</Link></li> */}
                            <li><Link to={'/diamond-jewellery'}>DIAMOND JEWELLERY</Link></li>
                            <li><Link to={'/why-choose-us'}>WHY CHOOSE US</Link></li>
                            {/* <li><Link>JOURNAL</Link></li> */}
                            <li><Link to={'/about'}>ABOUT</Link></li>
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
                        <li><Link onClick={deActiveMobMode} to={'/silver-jewellery'}>SILVER JEWELLERY</Link></li>
                        <li><Link onClick={deActiveMobMode} to={'/golden-jewellery'}>GOLDEN JEWELLERY</Link></li>
                        {/* <li><Link>DIAMONDS</Link></li> */}
                        <li><Link onClick={deActiveMobMode} to={'/diamond-jewellery'}>DIAMOND JEWELLERY</Link></li>
                        <li><Link onClick={deActiveMobMode} to={'/why-choose-us'}>WHY CHOOSE US</Link></li>
                        <li><Link>JOURNAL</Link></li>
                        <li><Link onClick={deActiveMobMode} to={'/about'}>ABOUT</Link></li>
                        <li><Link onClick={deActiveMobMode} to={'/contact'}>CONTACT</Link></li>
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
