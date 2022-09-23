import React, { useContext } from 'react'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const OrderItem = ({ product, indexValue }) => {
    // Obtener los atributos del producto
    const {title, price, images} = product;

    // Obtener función para eliminar elementos del carrito
    const { removeFromCart } = useContext(AppContext);

    // Eliminar del carrito el producto seleccionado
    const handleRemove = indexToRemove => {
        removeFromCart(indexToRemove);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img 
                    src={ images[0] }
                    alt={ title }
                />
            </figure>

            <p className="product-name">{ title }</p>

            <p className="price">$ { price }</p>

            <img 
                src={ closeIcon} 
                className="close-icon"
                alt="Close icon"
                onClick={ () => handleRemove(indexValue) }
            />
        </div>
    )
}

export default OrderItem