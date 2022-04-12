import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <Link to = '/'>HOTEL.COM</Link>
            </div>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About Us</Link>
                <Link className='register' to = '/register'>Register</Link>
                <Link className='login' to = '/login'>Log In</Link>
            </nav>
        </div>
    );
};

export default Header;