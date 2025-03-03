import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cart from "../cart/Cart";
import { FaUserCircle } from 'react-icons/fa';

function Header() {
    const [headerOpacity, setHeaderOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
                setHeaderOpacity(0);
            } else {
                setHeaderOpacity(1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header" style={{ backgroundColor: `rgba(202, 209, 163, ${headerOpacity})` }}>
            <div className="header-logo">
                <Link to="/" className="header-logo">
                    Pastel
                </Link>
            </div>
            <div className="header-icons-container">
                <div className="header-cart-icon">
                    <Cart />
                </div>
                <div className="header-profile-icon">
                    <FaUserCircle className="header-profile-icon-svg" />
                </div>
            </div>
        </header>
    );
}

export default Header;