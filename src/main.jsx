import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
import { FiltersProvider } from './context/filtersContext.jsx';
import { CartProvider } from './context/cartContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <FiltersProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FiltersProvider>
  </BrowserRouter>
);
