import React from 'react'

function Secondnav() {
    return (
        <div className='main'>
            <nav class="icon-bar"><p>3425 Items</p> <button class="icon-btn"><p>HIDE FILTER</p></button></nav>
            <nav class="icon-bar">
                <select  class="icon-btn icon-bar">
                    <option>
                <p>RECOMMENDED</p><img
                    src="https://unpkg.com/feather-icons/dist/icons/chevron-down.svg"
                    alt="Dropdown Arrow"
                    class="arrow-icon"
                /></option>
                </select>
            </nav>

            
        </div>
    )
}

export default Secondnav