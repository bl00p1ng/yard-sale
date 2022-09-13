import React from 'react'
import '../styles/NotFound.scss'
import ImgError404 from '../../public/assets/img/404_not_found.jpg' 

const NotFound = () => {
    return (
        <main className='error-404'>
            <img src={ ImgError404 } alt="Error 404" />

            <h1>
                Error 404
            </h1>

            <p>
                Lo sentimos, no hemos encontrado lo que buscabas.
            </p>

            <a href="/">Volver al Inicio</a>
        </main>
    )
}

export default NotFound