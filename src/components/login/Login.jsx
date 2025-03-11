import './Login.css'
import Gato from '../../assets/img/gato1.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login({ usuariosRegistrados, onRegisterClick }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setMessage('Por favor, completa todos los campos.');
            return;
        }

        const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.email === email);

        if (!usuarioEncontrado) {
            setMessage('Correo electrónico no registrado.');
            return;
        }

        if (usuarioEncontrado.password !== password) {
            setMessage('Contraseña incorrecta.');
            return;
        }

        // Login Exitoso
        setMessage('Inicio de sesión exitoso.');
        setEmail('');
        setPassword('');
        navigate('/home');
        console.log('Inicio de sesión exitoso para:', email);
    };

    return (
        <main>
            <div className="main-container">
                <div className="login-container">
                    <div className="form-container login-form">
                        <div className="title">
                            <h1>Iniciar Sesión</h1>
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
                            <button type="submit" className="login-button">Inicar Sesión</button>
                            <div className="register-link" onClick={onRegisterClick}>
                                ¿No tienes cuenta? <span>Regístrate</span>
                            </div>
                        </form>
                        {message && <p className="message">{message}</p>} {/* Display message */}
                    </div>
                </div>
                <div className="decoration-container">
                    <div className="decoration-title">小猫咪 - Cake</div>
                    <div className="decoration-image">
                        <img src={Gato} alt="Gato" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login