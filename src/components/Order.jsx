import React from 'react';
import '@styles/Order.scss';
import arrowIcon from '@icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <div>
                <p>
                    <span>09.25.22</span>
                    <span>6 articles</span>
                </p>

                <p className="price">
                    <span>$ 120.00</span>
                    <img 
                        src={ arrowIcon } 
                        alt="arrow icon" 
                    />
                </p>
            </div>

        </div>
    );
}

export default Order