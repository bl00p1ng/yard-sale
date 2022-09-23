import React from 'react'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
    // Obetener los atributos del producto
    const {title, price, images} = product;

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

            <img src={ closeIcon} alt="Close icon"></img>
        </div>
    )
}

export default OrderItem