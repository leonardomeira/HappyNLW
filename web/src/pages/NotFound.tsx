import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/pages/not-found.css';

import logoImg from '../images/logo.svg';
import sadFace from '../images/sad-face.svg'

function NotFound() {
    return(
        <div id="not-found">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>

                <main>
                    <div className="error-note">
                        <h1>404 - Página não encontrada...</h1>
                        <img src={sadFace}></img>
                    </div>
                    <p>
                        Ops! Parece que esta página não existe.<br></br>
                        <Link to="/" className="main-link">Clique aqui para voltar à página inicial</Link>
                    </p>
                </main>
            </div>
        </div>
    );
}

export default NotFound;