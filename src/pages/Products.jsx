import React from 'react'
import Product from '@components/Product'
import '@styles/Products.scss'

const Products = () => {
  return (
    <main className='Products'>
        <div className="cards-container">
            <Product />
        </div>
    </main>
  )
}

export default Products