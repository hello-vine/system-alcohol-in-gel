import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import logoSystem from '../../assets/logo.svg';

import { FiLogOut, FiTruck, FiMapPin, FiSettings, FiShoppingBag } from 'react-icons/fi';

import './styles.css';

export default function SystemMenu() {

    return (

        <nav className="system-menu">

            <img src={logoSystem} alt="Logo" className="logo-system" />
            
            <ul>

                <li>

                    <Link className="link-system" to="/bespeak">

                        <FiTruck className="icon-system" size={18} color="#3F9BBF" />

                        <div className="link-nav-system">
                            Encomendar
                        </div>
                    
                    </Link>

                </li>

                <li>

                    <Link className="link-system" to="/follow-bespeak">
                    
                        <FiMapPin className="icon-system" size={18} color="#3F9BBF" />

                        <div className="link-nav-system">
                            Acompanhar Pedido 
                        </div>
                    
                    </Link>

                </li>

                <li>

                    <Link className="link-system" to="/products">
                    
                        <FiShoppingBag className="icon-system" size={18} color="#3F9BBF" />

                        <div className="link-nav-system">
                            Produtos
                        </div>
                    
                    </Link>

                </li>

                <li>

                    <Link className="link-system" to="/config">
                    
                        <FiSettings className="icon-system" size={18} color="#3F9BBF" />

                        <div className="link-nav-system">
                            Configurações
                        </div>
                    
                    </Link>

                </li>

                <li className="active-system">

                    <Link className="link-system" to="/">
                    
                        <FiLogOut className="icon-system active-icon" size={18} color="#3F9BBF" />

                        <div className="link-nav-system">
                            Sair
                        </div>
                    
                    </Link>

                </li>

            </ul>

        </nav>

    );

}