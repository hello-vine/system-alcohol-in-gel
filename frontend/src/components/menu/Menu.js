import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default function Menu() {

    return (

        <nav className="menu">
            
            <ul>

                <li>

                    <Link className="link-nav" to="/">
                        Home
                    </Link>

                </li>

                <li>

                    <Link className="link-nav" to="/login">
                        Sobre
                    </Link>

                </li>

                <li>

                    <Link className="link-nav" to="/login">
                        Produtos
                    </Link>

                </li>

                <li>

                    <Link className="link-nav" to="/login">
                        Contato
                    </Link>

                </li>

                <li>

                    <Link className="btn-nav" to="/login">
                        Proteja-se
                    </Link>

                </li>

            </ul>

        </nav>

    );

}