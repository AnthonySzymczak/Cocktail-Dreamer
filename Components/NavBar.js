import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] =useState(true)

    const closeMobileMenu = () =>setClick(false)
    const handleClick =() => setClick(!click)

//function to show on mobile
const showButton =()=>{
    if(window.innerwidth <= 960){
        setButton(false)
    } else {
        setButton(true)
    }
};

window.addEventListener('resize',showButton);

    return (
        <>
         <nav className="navbar">
            <div>
                
                <Link to="/" className="navbar-logo">
                <br/>
                <i class="fas fa-cocktail"/><i class="fas fa-hat-wizard"/>
                </Link>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-angle-double-down': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Welcome
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Cocktails' className='nav-links' onClick={closeMobileMenu}>
                            Cocktails
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/CYO' className='nav-links' onClick={closeMobileMenu}>
                            Create your own!
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/knowledge' className='nav-links' onClick={closeMobileMenu}>
                            Learn More
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/suggestions' className='nav-links' onClick={closeMobileMenu}>
                            Talk About it!
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact</Button>}
            </div>   
         </nav> 
        </>
    )
}

export default Navbar