import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Template from './components/template/Template';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AuthPage  from './components/auth/AuthPage'; 
import Cart from './components/cart/Cart';

function App() {
  return (
    <Routes> {/* Define el contenedor de rutas */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
  );
}
export default App
