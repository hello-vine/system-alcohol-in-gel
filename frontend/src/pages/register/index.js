import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import ContainerLogin from '../../containers/Login';

import { FiMail, FiUser, FiLock, FiPhone, FiMapPin, FiHome, FiMap } from 'react-icons/fi';

import { FaMapPin, FaRegCompass, FaMapSigns, FaWaveSquare } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import './styles.css';

export default function Login() {

    const [complement, setComplement] = useState('none');

    const [register, setRegister] = useState('flex');
    
    function complementToggle() {

        if (complement === 'none') {
            
            setComplement('flex');

            setRegister('none');

        } else {

            setComplement('none'); 

            setRegister('flex');

        }

    }

    return (

        <ContainerLogin>
            
            <section className="background">
                
                <div className="overlay">

                    <div className="container content">

                        <Link to="./">

                            <img src={logo} alt="MedicalKit" className="logo-register"/>
                        
                        </Link>

                        <section className="container-register">

                            <div className="content-register">

                                <section className="register" style={{display: register}}>

                                    <h1> Cadastrar-se na&nbsp; <div> Easykit </div> </h1>

                                    <div className="container-input">

                                        <FiUser className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="Nome Completo" />
                                        
                                    </div>

                                    <div className="container-input">

                                        <FiMail className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="E-mail" />
                                        
                                    </div>

                                    <div className="container-input">

                                        <FiLock className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="Senha" />

                                    </div>

                                    <div className="container-input">

                                        <FiPhone className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="Telefone" />

                                    </div>

                                    <button className="button button-register" onClick={complementToggle} type="submit"> Próximo... </button>

                                </section>

                                <section className="complement"  style={{display: complement}}>

                                    <h2> Infomações <div> Complementares </div> </h2>

                                    <div className="container-input">

                                        <FiMapPin className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="Endereço" />

                                    </div>

                                    <div className="group-input">

                                        <div className="container-input f30 m-right">

                                            <FiHome className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                            <input placeholder="n°" />

                                        </div>

                                        <div className="container-input f70">

                                            <FaWaveSquare className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                            <input placeholder="Complemento" /> 

                                        </div>

                                    </div>

                                    <div className="group-input">

                                        <div className="container-input f70 m-right">

                                            <FiMap className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                            <input placeholder="Cidade" />

                                        </div>

                                        <div className="container-input f30">

                                            <FaMapPin className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                            <input placeholder="UF" /> 

                                        </div>

                                    </div>

                                    <div className="group-input">

                                        <div className="container-input f50 m-right">

                                            <FaMapSigns className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                            <input placeholder="Bairro" />

                                        </div>

                                        <div className="container-input f50">

                                            <FaRegCompass className="icon-input" size={16} color="rgb(72, 79, 82, .4)" />

                                            <input placeholder="CEP" /> 

                                        </div>

                                    </div>

                                    <button className="button button-register" type="submit"> Cadastrar </button>

                                    <button className="button-back" onClick={complementToggle}> voltar </button>

                                </section>

                            </div>

                        </section>

                        <div className="space-container-info"></div>

                        <section className="container-info">

                            <div className="content-info-register">

                                <h1> Bem vindo! </h1>

                                <p> Já tem cadastro ? </p>

                                <Link className="button-info" to="/login"> Entrar </Link>

                            </div>

                        </section>

                    </div>
                    
                </div>

            </section>
            
        </ContainerLogin>

    );

}