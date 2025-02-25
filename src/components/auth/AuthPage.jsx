import { useState, useEffect } from 'react'; // Import useEffect
import Registro from '../register/Register';
import Login from '../login/Login';

function AuthPage() {
    // Function to get users from localStorage, or default if not found
    const getStoredUsers = () => {
        const storedUsers = localStorage.getItem('usuariosRegistrados');
        if (storedUsers) {
            return JSON.parse(storedUsers);
        }
        return [{ email: 'test@example.com', password: 'testpassword' }]; // Default users
    };

    const [usuariosRegistrados, setUsuariosRegistrados] = useState(getStoredUsers());
    const [isLoginView, setIsLoginView] = useState(true);

    // Use useEffect to save usuariosRegistrados to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
    }, [usuariosRegistrados]); // зависимость от usuariosRegistrados

    const handleRegistroExitoso = (nuevoUsuario) => {
        console.log('Nuevo usuario registrado en AuthPage:', nuevoUsuario);
        setUsuariosRegistrados(prevUsuarios => [...prevUsuarios, nuevoUsuario]);
        setIsLoginView(true);
    };

    const switchToRegister = () => {
        setIsLoginView(false);
    };

    const switchToLogin = () => {
        setIsLoginView(true);
    };

    return (
        <div>
            {isLoginView ? (
                <Login usuariosRegistrados={usuariosRegistrados} onRegisterClick={switchToRegister} />
            ) : (
                <Registro onRegistroExitoso={handleRegistroExitoso} onLoginClick={switchToLogin} />
            )}
        </div>
    );
}

export default AuthPage;