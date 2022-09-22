import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/Header.scss'
import Menu from '@components/Menu.jsx';
import menuIcon from '@icons/icon_menu.svg';
import logotype from '@logos/logo_yard_sale.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    // Obtener el estado con los productos del carrito
    const { state } = useContext(AppContext);

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
                    <li className="email" onClick={ handleToggle }>
                        johndoe@gmail.com
                    </li>

                    <li className="navbar-shopping-cart">
                        <img 
                            src={ shoppingCartIcon } 
                            alt="Shopping cart icon" 
                        />

                        {/* Mostrar la cantidad de productos agregados al carrito */}
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>

            { toggle && <Menu /> }
        </nav>
    )
}

export default Header