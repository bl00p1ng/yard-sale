import React, { useContext } from 'react'
import '@styles/Product.scss'
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';

const Product = ({ product }) => {
    // Obtener las propiedades del producto
    const { title, images, price } = product;

    // Obtener del contexto la función para agregar productos al carrito
    const { addToCart } = useContext(AppContext);

    // Agregar al carrito el producto seleccionado al hacer click
    const handleClick = (productItem) => {
        addToCart(productItem)
    };

    return (
        <div className='Product'>
            <img 
                src={ images[0] }
                alt={ title } 
                className="product-img"
            />

            <div className="product-info">
                <div>
                    <p>${ price }</p>
                    <p>{ title }</p>
                </div>

                <figure onClick={ () => handleClick(product) }>
                    <img 
                        src={ addToCartIcon }
                        alt="Add to cart icon"
                    />
                </figure>
            </div>
        </div>
    );
}

export default Product