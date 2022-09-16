import React, { Fragment } from 'react'
import Header from '../components/Header'
import ProductDetail from '../components/ProductDetail'
import Products from './Products'

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Products />
            <ProductDetail />
        </Fragment>
    )
}

export default Home