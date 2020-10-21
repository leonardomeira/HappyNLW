import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-2.svg';
import {FiArrowLeft} from 'react-icons/fi';

import '../styles/pages/password-rec.css'

function PasswordRec() {
    return (
        <div id="page-passrec">
            <aside>
                <img src={logo} />
                <div className="location">
                    <p>São Gonçalo</p>
                    <span>Rio de Janeiro</span>
                </div>
            </aside>
            <div className="recovery">
                <Link to="/" className="back-btn"><FiArrowLeft size={26} color="#15C3D6" /></Link>
                    <form action="">
                        <h1>Redefinição de senha</h1>
                        <p>Escolha uma nova senha de acesso para o dashboard do Happy.</p>
                            <div className="form">
                                <label className="label" htmlFor="password">Nova senha</label>
                                <input id="password" type="password"/>
                                <label className="label" htmlFor="password-confirmation">Repetir senha</label>
                                <input id="password-confirmation" type="password"/>
                            </div>
                            <button type="button">Enviar</button>      
                    </form>
               
                
            </div>
        </div>
    );
}

export default PasswordRec;