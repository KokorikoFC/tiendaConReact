import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo CSS

function Header() {
    return (
        <header className="header"> {/* Usa className="header" */}
            <div className="header-logo"> {/* Usa className="header-logo" */}
                {/* Aquí puedes colocar tu logo (imagen o texto) */}
                <Link to="/" className="header-logo"> {/* Usa className="header-logo" también en el Link si quieres */}
                    Logo Aquí
                </Link>
            </div>

            <div className="header-icons-container"> {/* Usa className="header-icons-container" */}
                <div className="header-cart-icon"> {/* Usa className="header-cart-icon" */}
                    
                    <Link to="/carrito" className="header-cart-icon"> {/* Usa className="header-cart-icon" también en el Link si quieres */}
                        🛒
                    </Link>
                </div>
                <div className="header-profile-icon"> {/* Usa className="header-profile-icon" */}
                </div>
            </div>
        </header>
    );
}


export default Header;