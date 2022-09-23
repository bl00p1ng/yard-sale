import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/Header.scss'
import Menu from '@components/Menu.jsx';
import menuIcon from '@icons/icon_menu.svg';
import logotype from '@logos/logo_yard_sale.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg'
import MyOrders from '@containers/MyOrders'

const Header = () => {
    // State para mostrar/ocultar el menu
    const [toggle, setToggle] = useState(false);

    // State para mostrar/ocultar el checkout del carrito
    const [toggleMyOrders, setToggleMyOrders] = useState(false);

    // Cambiar el state para mostrar el menu
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
                    <li 
                        className="email" 
                        onClick={ handleToggle }
                    >
                        johndoe@gmail.com
                    </li>

                    <li 
                        className="navbar-shopping-cart" 
                        // Mostrar el carrito
                        onClick={ () => setToggleMyOrders(!toggleMyOrders) }
                    >
                        <img 
                            src={ shoppingCartIcon } 
                            alt="Shopping cart icon" 
                        />

                        {/* Mostrar la cantidad de productos agregados al carrito */}
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>

            {/* Mostar/ocultar el menu */}
            { toggle && <Menu /> }

            {/* Mostar/ocultar el menu */}
            { toggleMyOrders && <MyOrders /> }
        </nav>
    )
}

export default Header