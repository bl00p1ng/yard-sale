import { useState, useEffect } from 'react';
import axios from 'axios';

// Traer los productos desde la API
const getProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, [])

    return products;
};

export default getProducts;