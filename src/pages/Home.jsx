import React, { Fragment } from 'react'
import Header from '@components/Header'
import Products from './Products'

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Products />
        </Fragment>
    )
}

export default Home