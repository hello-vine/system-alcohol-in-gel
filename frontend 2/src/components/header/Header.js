import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

import Menu from '../menu';

export default function Header() {

    return (

        <header className="header">
            
            <div className="container">

                <div className="content-header">

                    <Link className="logo" to="/">
                        <img src={logo} alt="Easykit"/>
                    </Link>

                    <Menu />

                </div>

            </div>

        </header>

    );

}