import React, { useState } from 'react'
import '@styles/Product.scss'
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const Product = ({ product }) => {
    // Obtener las propiedades del producto
    const { title, images, price } = product;

    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([])
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

                <figure onClick={ handleClick }>
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