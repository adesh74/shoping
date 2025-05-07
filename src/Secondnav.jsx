import React, { useState } from 'react';
import Sidebar from './Sidebar';
import product from './script.js';

function Secondnav() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <div className='main'>
                <nav className="icon-bar">
                    <p>3425 Items</p>
                    <button className="icon-btn" onClick={toggleSidebar}>
                        <p>{isSidebarVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</p>
                    </button>
                </nav>
                <nav className="icon-bar">
                    <select className="icon-btn icon-bar">
                        <option>
                            <p>RECOMMENDED</p>
                            <img
                                src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                                alt="Dropdown Arrow"
                                className="arrow-icon"
                            />
                        </option>
                    </select>
                </nav>
            </div>
            <div className='gg'>
                {isSidebarVisible && <Sidebar />}
                <div className="main-content">
                    <div id="products"></div>
                </div>
            </div>
        </div>
    );
}

export default Secondnav;