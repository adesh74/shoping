import React, { useState, useEffect, useRef } from 'react';
import './side.css';
import product from './script.js'

function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedItems((prev) =>
            checked
                ? [...prev, value]
                : prev.filter((item) => item !== value)
        );
    };

    const unselectAll = () => {
        setSelectedItems([]);
    };

    function toggleHeart(button) {
        button.classList.toggle('liked');
      }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const buttonText =
        selectedItems.length > 0 ? `${selectedItems.join(', ')} ▼` : 'IDEAL FOR ▼';

    return (
        <div className='gg'>
            <nav className="sidebar-container">
                <h3>Customizable</h3>
                <div className="dropdown" ref={dropdownRef}>
                    <button
                        className="dropdown-button"
                        onClick={toggleDropdown}
                    >
                        {buttonText}
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content show">
                            <div className="dropdown-header">All</div>
                            <button
                                className="unselect-all"
                                onClick={unselectAll}
                            >
                                Unselect all
                            </button>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Men"
                                    checked={selectedItems.includes('Men')}
                                    onChange={handleCheckboxChange}
                                />
                                Men
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Women"
                                    checked={selectedItems.includes('Women')}
                                    onChange={handleCheckboxChange}
                                />
                                Women
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="Baby & Kids"
                                    checked={selectedItems.includes('Baby & Kids')}
                                    onChange={handleCheckboxChange}
                                />
                                Baby & Kids
                            </label>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>OCCASION<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div>
                <div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>WORK<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div><div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>FABRIC<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div><div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>SEGMENT<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div>
                <div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>SUITABLE FOR<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div><div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>RAW MATERIAL<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div><div className="dropdown">
                    <button
                        className="dropdown-button"
                    >

                        <p><b>PATTERN<img
                            src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                            alt="Dropdown Arrow"
                            class="arrow-icon"
                        /></b><br></br>ALL </p>
                    </button>
                </div>
            </nav>
            <div class="main-content">
            <div id="products">

                
            </div>
            </div>
        </div>
    );
}

export default Sidebar;