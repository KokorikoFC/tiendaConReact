import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Template from './components/template/Template';
import Home from './components/home/Home';

function App() {
  return (
    <Routes> {/* Define el contenedor de rutas */}
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
      </Routes>
  );
}
export default App
