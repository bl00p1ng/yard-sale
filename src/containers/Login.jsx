import React from 'react';
import '../styles/Login.scss';
import logotype from '../../public/assets/logotypes/logo_yard_sale.svg'

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img 
                    src={logotype}
                    alt="Logo" className="logo" 
                />

                <h1 className="title">
                    Create a new password
                </h1>

                <p className="subtitle">
                    Enter a new password for your account
                </p>

                <form action="/" className="form">
                    {/* CREAR CONTRASEÑA */}
                    <label htmlFor="password" className="label">
                        Password
                    </label>

                    <input 
                        type="password" 
                        id="password" 
                        placeholder="********" 
                        className="input input-password" 
                    />

                    {/* CONFIRMAR CONTRASEÑA */}
                    <label htmlFor="new-password" className="label">
                        Re-enter password
                    </label>

                    <input 
                        type="password" 
                        id="new-password" 
                        placeholder="********" 
                        className="input input-password" 
                    />

                    <input 
                        type="submit" 
                        defaultValue="Confirm" 
                        className="primary-button login-button" 
                    />
                </form>
            </div>
        </div>
    );
}

export default Login