import './Register.css'
import Gato from '../../assets/img/gato2.png'
import { useState } from 'react';

function Register({ onRegistroExitoso, onLoginClick }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password || !confirmPassword) {
            setMessage('Por favor, completa todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden.');
            return;
        }

        if (usuariosRegistrados.some(usuario => usuario.email === email)) {
            setMessage('Este correo electrónico ya está registrado.');
            return;
        }

        // Registro exitoso
        const nuevoUsuario = { email, password };
        setUsuariosRegistrados([...usuariosRegistrados, nuevoUsuario]);
        setMessage('Registro completado con éxito.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        console.log('Usuarios Registrados:', usuariosRegistrados);
        if (onRegistroExitoso) {
            onRegistroExitoso(nuevoUsuario);
        }
    };

    return (
        <main>
            <div className="main-container">
                <div className="decoration-container2">
                    <div className='decoration-title2'>
                        <p>Bienvenido a 小猫咪 - Cake</p>
                    </div>
                    <div className="decoration-image2">
                        <img src={Gato} alt="Gato" />
                    </div>
                </div>
                <div className="register-container">
                    <div className="form-container">
                        <div className="title">
                            <h1>Registrarse</h1>
                        </div>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="register-button">Registrarse</button>
                            <div className="register-link" onClick={onLoginClick}>
                                ¿Ya tienes cuenta? <span>Inicia Sesión</span>
                            </div>
                        </form>
                        {message && <p className="message">{message}</p>} {/* Display message */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register