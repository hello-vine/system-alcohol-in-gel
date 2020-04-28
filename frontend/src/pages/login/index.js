import React from 'react';

import { Link } from 'react-router-dom';

import ContainerLogin from '../../containers/Login';

import { FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import './styles.css';

export default function Login() {

    return (

        <ContainerLogin>
            
            <section className="background">
                
                <div className="overlay">

                    <div className="container content">

                        <Link to="./">

                            <img src={logo} alt="MedicalKit" className="logo-register"/>

                        </Link>

                        <section className="container-login">

                            <div className="content-login">

                                <h1> Entrar na&nbsp; <div> Easykit </div> </h1>

                                <div className="container-input">

                                    <FiMail className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                    <input placeholder="E-mail" />
                                    
                                </div>

                                <div className="container-input">

                                    <FiLock className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                    <input placeholder="Senha" />
                                    
                                </div>

                                <p> Esqueceu sua senha ? </p>

                                <Link to="bespeak" className="button" type="submit"> Entrar </Link>

                            </div>

                        </section>

                        <div className="space-container-info"></div>

                        <section className="container-info">

                            <div className="content-info-login">

                                <h1> Bem vindo! </h1>

                                <p> Ainda não tem cadastro ? </p>

                                <Link className="button-info" to="/register">
                                    Cadastre-se
                                </Link> 

                            </div>

                        </section>

                    </div>
                    
                </div>

            </section>
            
        </ContainerLogin>

    );

}