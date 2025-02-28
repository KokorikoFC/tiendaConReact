import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import './index.css';
import App from './App.jsx';
import { FiltersProvider } from './context/filtersContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Envuelve toda la app con BrowserRouter */}
    <FiltersProvider> 
      <App />
    </FiltersProvider>
  </BrowserRouter>
);
