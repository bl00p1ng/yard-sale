import React from 'react'
import Product from '@components/Product'
import useGetProducts from '@hooks/useGetProducts'
import '@styles/Products.scss'

const API = 'https://api.escuelajs.co/api/v1/products';

const Products = () => {
    // Obtener los productos de la API
    const products = useGetProducts(API);

    return (
        <main className='Products'>
            <div className="cards-container">
                {/* Mostrar los productos traidos de la API en la interfaz */}
                {products.map(product => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </main>
    );
}

export default Products