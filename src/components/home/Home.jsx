import { useNavigate } from 'react-router-dom';
import Header from '../header/Header'; // Importa Header

function Home() {
    const navigate = useNavigate();

    const goToTemplate = () => {
        navigate('/template');
    };

    return (
        <div>
            <Header /> {/* Usa el componente Header aquí */}
            <h1>Página Principal (Home)</h1>
            <p>Esta es la página de inicio.</p>
            <button onClick={goToTemplate}>Ir a Template</button>
        </div>
    );
}

export default Home;