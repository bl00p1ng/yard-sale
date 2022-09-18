import React from 'react'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png';

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img 
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Bike"
                />
            </figure>

            <p className="product-name">Bike</p>

            <p className="price">$ 120.00</p>

            <img src={ closeIcon} alt="Close icon"></img>
        </div>
    )
}

export default OrderItem