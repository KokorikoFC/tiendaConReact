import "./Product.css";

function Product({ products }) {
    return (
        <div className="product-container">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <p>Categoría: {product.category}</p>
                        <div>
                            <button>Añadir al carrito</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Product;
