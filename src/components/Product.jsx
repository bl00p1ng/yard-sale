import React from 'react'
import '../styles/Product.scss'
import addToCartIcon from '../../public/assets/icons/bt_add_to_cart.svg';

const Product = () => {
    return (
        <div className='Product'>
            <img 
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Product image" 
                class="product-img"
            />

            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>

                <figure>
                    <img 
                        src={ addToCartIcon }
                        alt="Add to cart icon"
                    />
                </figure>
            </div>
        </div>
    )
}

export default Product