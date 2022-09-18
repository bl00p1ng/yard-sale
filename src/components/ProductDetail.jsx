import React from 'react';
import '@styles/ProductDetail.scss';
import closeIcon from '@icons/icon_close.png'
import addToCartIcon from '@icons/bt_add_to_cart.svg'

const ProductDetail = () => {
    return (
        <aside className='ProductDetail'>
            <div className="ProductDetail-container">
                <img 
                    src={ closeIcon } 
                    alt="Close icon"
                />

                <img 
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Bike"
                    className="product-image"
                />

                <div className="ProductDetail-info">
                    <p>$ 120.00</p>
                    <p>Bike</p>
                    <p>
                        With its functional and practical design, this bike also fulfills a 
                        decorative function, adding personality and a retro-vintage aesthetic 
                        to your house. 
                    </p>

                </div>

                <div className="add-to-cart">
                    <button className="primary-button">
                        <img 
                            src={ addToCartIcon }
                            alt="Add to shopping cart icon"
                        />
                        <span>
                            Add to cart
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail