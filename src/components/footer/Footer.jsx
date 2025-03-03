import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <svg className='footer-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 320">
        <path
          fill="#b6c089"
          fillOpacity="1"
          d="M0,160L34.3,176C68.6,192,137,224,206,229.3C274.3,235,343,213,411,213.3C480,213,549,235,617,240C685.7,245,754,235,823,213.3C891.4,192,960,160,1029,165.3C1097.1,171,1166,213,1234,224C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="content">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="src/assets/img/logo-Photoroom.png" alt="" />
            <p>小猫咪 - Cake</p>
          </div>
          <div className="footer-section">
            <h4>Productos</h4>
            <ul>
              <li><a href="#">Tartas</a></li>
              <li><a href="#">Sandwiches</a></li>
              <li><a href="#">Bollería</a></li>
              <li><a href="#">Panes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Información</h4>
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 小猫咪 - Cake. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;