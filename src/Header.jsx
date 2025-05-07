import React from 'react'
import image from './image.png';
import Secondbar from './Secondbar';
function Header() {
    return (
        <header>
            <div className='main'>
            <nav><img src={image} alt="logo" /></nav>
            <nav><b><h1>LOGO</h1></b></nav>
            <nav>
                <div class="icon-bar">
                    <button class="icon-btn" aria-label="Search">
                        <img src="https://unpkg.com/feather-icons/dist/icons/search.svg" alt="Search" />
                    </button>
                    <button class="icon-btn" aria-label="Wishlist">
                        <img src="https://unpkg.com/feather-icons/dist/icons/heart.svg" alt="Wishlist" />
                    </button>
                    <button class="icon-btn" aria-label="Cart">
                        <img src="https://unpkg.com/feather-icons/dist/icons/shopping-bag.svg" alt="Cart" />
                    </button>
                    <button class="icon-btn" aria-label="User">
                        <img src="https://unpkg.com/feather-icons/dist/icons/user.svg" alt="User" />
                    </button>
                    <div class="lang-select">
                        <span>ENG</span>
                        <img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        />
                    </div>
                </div>

            </nav>
            </div>
            <Secondbar />
        </header>
    )
}

export default Header