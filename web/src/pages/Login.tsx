import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-2.svg';
import {FiArrowLeft} from 'react-icons/fi';

import '../styles/pages/login.css'

function LoginScreen() {
    return (
        <div id="page-login">
            <aside>
                <img src={logo} />
                <div className="location">
                    <p>São Gonçalo</p>
                    <span>Rio de Janeiro</span>
                </div>
            </aside>
            <div className="login">
                <Link to="/" className="back-btn"><FiArrowLeft size={26} color="#15C3D6" /></Link>
                    <form action="">
                        <h1>Fazer login</h1>
                            <div className="form">
                                <label className="label" htmlFor="email">E-mail</label>
                                <input id="email" type="email"/>
                                <label className="label" htmlFor="password">Senha</label>
                                <input id="password" type="password" />
                                <div className="remember-pass">
                                    <div>
                                        <input id="remember-me" type="checkbox"/>
                                        <label className="label" htmlFor="remember-me">Lembrar-me</label>
                                    </div>
                                    <Link to="/prepasswordrec" className="label link">Esqueci minha senha</Link>
                                </div>
                            </div>
                            <button type="button">Entrar</button>      
                    </form>
               
                
            </div>
        </div>
    );
}

export default LoginScreen;