import "./Home.css";
import Header from "../../components/header/Header";
import Product from "../../components/product/Product";
import Filters from "../../components/filters/Filters";
import Footer from "../../components/footer/Footer";
import { products } from "../../mocks/products.json";
import { useFilter } from "../../hooks/useFilters";
import { CartProvider } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const { filterProducts } = useFilter();

    const filteredProducts = filterProducts(products);

    return (
        <CartProvider>
            <div className="home">
                <Header />
                <div className="hero">
                    <div className="hero-text">
                    <h1>Delicias recién horneadas <br />para los amantes de la repostería</h1>
                    <h2>Descubre la dulzura en su forma más delicada. <br />En nuestra pastelería, fusionamos recetas tradicionales asiáticas con técnicas artesanales para crear postres únicos que deleitan tanto a la vista como al paladar.</h2>
                    </div>
                    <img className="strawberry1" src="src/assets/img/fresa-Photoroom.png" alt="" />
                    <img className="strawberry2" src="src/assets/img/fresa-Photoroom.png" alt="" />
                    <img className="strawberry3" src="src/assets/img/fresa-Photoroom.png" alt="" />
                    <div className="hero-circle"></div>
                    <img className="cake-img" src="src/assets/img/tarta_dibujo-Photoroom.png" alt="" />
                </div>
                <div className="products-section">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#fefdf9"
                            fillOpacity="1"
                            d="M0,192L18.5,170.7C36.9,149,74,107,111,122.7C147.7,139,185,213,222,208C258.5,203,295,117,332,96C369.2,75,406,117,443,154.7C480,192,517,224,554,213.3C590.8,203,628,149,665,144C701.5,139,738,181,775,165.3C812.3,149,849,75,886,85.3C923.1,96,960,192,997,224C1033.8,256,1071,224,1108,181.3C1144.6,139,1182,85,1218,80C1255.4,75,1292,117,1329,149.3C1366.2,181,1403,203,1422,213.3L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
                        ></path>
                    </svg>
                    <Filters />
                    <Product products={filteredProducts} />
                </div>

                <div className="aboutUs-section">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#f8f7e2"
                            fillOpacity="1"
                            d="M0,256L16,218.7C32,181,64,107,96,112C128,117,160,203,192,213.3C224,224,256,160,288,154.7C320,149,352,203,384,213.3C416,224,448,192,480,154.7C512,117,544,75,576,90.7C608,107,640,181,672,176C704,171,736,85,768,69.3C800,53,832,107,864,144C896,181,928,203,960,186.7C992,171,1024,117,1056,101.3C1088,85,1120,107,1152,112C1184,117,1216,107,1248,128C1280,149,1312,203,1344,224C1376,245,1408,235,1424,229.3L1440,224L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
                        ></path>
                    </svg>
                    <div className="aboutUs-infoCard">
                        <img
                            src="src/assets/img/flor1.png"
                            alt=""
                            className="flower1"
                        />
                        <img
                            src="src/assets/img/flor2.png"
                            alt=""
                            className="flower2"
                        />
                        <img
                            src="src/assets/img/flor3.png"
                            alt=""
                            className="flower3"
                        />
                        <img
                            src="src/assets/img/flor3.png"
                            alt=""
                            className="flower4"
                        />
                        <div className="about-img">
                            <img
                                src="src/assets/img/strawberry_cake.png"
                                alt=""
                            />
                        </div>
                        <div className="about-text1">
                            <h4>Pasteles recién hechos</h4>
                            <p>
                                En nuestra pastelería, nos esforzamos por
                                ofrecerte lo mejor de lo mejor. Todos nuestros
                                pasteles son elaborados con ingredientes frescos
                                y naturales, como frutas de temporada
                                seleccionadas cuidadosamente, nata de alta
                                calidad y harinas orgánicas.
                            </p>
                            <p>
                                Cada día, nos aseguramos de que nuestros
                                pasteles estén recién salidos del horno, listos
                                para ser disfrutados. Nos enorgullece que
                                nuestros productos no solo se vean deliciosos,
                                sino que también ofrezcan un sabor excepcional
                                que te hará querer volver por más.
                            </p>
                        </div>

                        <div className="about-text2">
                            <h4>Hechos con cariño</h4>
                            <p>
                                Cada tarta y bollo es hecho a mano, con
                                dedicación y amor. Usamos técnicas tradicionales
                                asiáticas para brindarte una experiencia única.
                            </p>
                        </div>

                        <div className="about-text3">
                            <h4>Frescos y naturales</h4>
                            <p>
                                Creemos en el uso de ingredientes frescos y
                                naturales, garantizando que cada bocado sea una
                                explosión de sabor.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="subscribe-section">
                    <div className="subscribe-section-cont">
                        <img
                            className="wave1"
                            src="src/assets/img/wave.png"
                            alt=""
                        />
                        <img
                            className="wave2"
                            src="src/assets/img/wave.png"
                            alt=""
                        />
                        <img
                            className="wave3"
                            src="src/assets/img/wave2.png"
                            alt=""
                        />
                        <img
                            className="wave4"
                            src="src/assets/img/wave2.png"
                            alt=""
                        />
                        <div className="subscribe-text-cont">
                            <div className="text-cont">
                                <h4>
                                Suscríbete y descubre más
                                </h4>
                                <hr />
                                <p>
                                    Recibe las últimas noticias sobre nuestros
                                    productos, ofertas especiales y eventos.
                                </p>
                                <button onClick={() => navigate("/login")}>Suscríbete</button>
                            </div>
                            <img src="src/assets/img/tarta_dibujo-Photoroom.png" alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default Home;
