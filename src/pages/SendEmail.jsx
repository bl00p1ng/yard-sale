import React from 'react'
import '@styles/SendEmail.scss'
import logotype from '@logos/logo_yard_sale.svg'
import emailIcon from '@icons/email.svg'


const PasswordRecovery = () => {
    return (
        <div className="SendEmail">
            <div className="container">
                <img src={logotype} alt="Logo" className="logo" />

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reset the password.
                </p>

                <figure className="icon">
                    <img src={emailIcon} alt="Email icon" />
                </figure>

                <button className="primary-button login-button">Log in</button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="#">Resend</a>
                </p>
            </div>
        </div>

    )
}

export default PasswordRecovery