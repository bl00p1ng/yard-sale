import React from 'react';
import '../styles/Header.scss'
import menuIcon from '../../public/assets/icons/icon_menu.svg';
import logotype from '../../public/assets/logotypes/logo_yard_sale.svg';
import shoppingCartIcon from '../../public/assets/icons/icon_shopping_cart.svg'

const Header = () => {
    return (
        <nav className="navbar">
            <img 
                src={ menuIcon }
                alt="Menu icon" 
                className="menu" 
            />

            <div className="navbar-left">
                <img 
                    src={ logotype }
                    alt="Yard Sale logo" 
                    className="navbar-logo" 
                />

                {/* MENU */}
                <ul>
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li>
                        <a href="#">Clothes</a>
                    </li>
                    <li>
                        <a href="#">Electronics</a>
                    </li>
                    <li>
                        <a href="#">Furnitures</a>
                    </li>
                    <li>
                        <a href="#">Toys</a>
                    </li>
                    <li>
                        <a href="#">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="email">johndoe@gmail.com</li>

                    <li className="navbar-shopping-cart">
                        <img 
                            src={ shoppingCartIcon } 
                            alt="Shopping cart icon" 
                        />

                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header