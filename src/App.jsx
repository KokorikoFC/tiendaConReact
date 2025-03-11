import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './components/template/Template';
import Home from './components/home/Home';
import AuthPage from './components/auth/AuthPage'; 
import Cart from './components/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
      />

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/template" element={<Template />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </>
  );
}

export default App;