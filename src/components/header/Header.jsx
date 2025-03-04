import { useState, useEffect } from "react";
import "./Header.css";
import Cart from "../cart/Cart";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [headerOpacity, setHeaderOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
                setHeaderOpacity(1);
            } else {
                setHeaderOpacity(0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className="header"
            style={{ backgroundColor: `rgba(202, 209, 163, ${headerOpacity})` }}
        >
            <div className="header-logo " onClick={() => navigate("/home")}>
                <img src="src/assets/img/logo-black.png" alt="" />
            </div>

            <div className="header-icons-container">
                <div className="header-cart-icon">
                    <Cart className="header-cart-icon-svg" />
                </div>
                <div className="header-profile-icon">
                    <FaUserCircle
                        className="header-profile-icon-svg"
                        onClick={() => navigate("/login")}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
