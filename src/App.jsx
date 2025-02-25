import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Template from './components/template/Template';
import Login from './components/login/Login';
import Home from './components/home/Home';
import AuthPage  from './components/auth/AuthPage'; 

function App() {
  return (
    <Routes> {/* Define el contenedor de rutas */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/template" element={<Template />} />
      </Routes>
  );
}
export default App
