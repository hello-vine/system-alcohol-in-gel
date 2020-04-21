import React from 'react';

import './styles.css';

export default function Footer() {

    return (

        <footer className="footer">
            
            <div className="container">

                <div className="content-footer">

                    <div className="content-left">

                        <h1> Logo </h1>

                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet est finibus, pellentesque dolor eu, dignissim augue. Nulla feugiat, neque et pellentesque bibendum, purus lacus ultricies tortor, at imperdiet lacus ligula et magna. </p>
                        
                    </div>

                    <div className="content-right">

                        <h1> Contato </h1>

                        <ul>

                            <li> Rua Endereço Aleatório 00 </li>

                            <li> (41) 00000-0000 </li>

                            <li> contato@mail.com </li>

                        </ul>

                    </div>

                </div>

            </div>

        </footer>

    );

}