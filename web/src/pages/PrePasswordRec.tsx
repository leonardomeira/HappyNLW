import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-2.svg';
import {FiArrowLeft} from 'react-icons/fi';

import '../styles/pages/pre-password-rec.css'

function PrePasswordRec() {
    return (
        <div id="page-pre-passrec">
            <aside>
                <img src={logo} />
                <div className="location">
                    <p>São Gonçalo</p>
                    <span>Rio de Janeiro</span>
                </div>
            </aside>
            <div className="pre-recovery">
                <Link to="/login" className="back-btn"><FiArrowLeft size={26} color="#15C3D6" /></Link>
                    <form action="">
                        <h1>Esqueci a senha</h1>
                        <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
                        <div className="form">
                            <label className="label" htmlFor="email">E-mail</label>
                            <input id="email" type="email"/>
                        </div>
                        <button type="button">Enviar</button>      
                    </form>
               
                
            </div>
        </div>
    );
}

export default PrePasswordRec;