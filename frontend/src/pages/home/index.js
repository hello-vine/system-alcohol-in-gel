import React from 'react';

import App from '../../containers/App';

import { FiChevronDown } from 'react-icons/fi';

import './styles.css';

export default function Home() {

    return (

        <App>

            <section className="background">

                <div className="overlay-home">

                    <div className="content-home">

                        <h1> Solução em Equipamentos<br /> de Proteção Individual </h1>
                        
                        <button> Proteja-se </button>

                        <FiChevronDown className="icon-home" size={32} color="#F6F2F1" />
                        
                    </div>

                </div>

            </section>

            <section className="about">

                <div className="container">

                    <div className="content-about">

                        <div className="text-about">

                            <h1> Easy <div> kit </div> </h1>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus maximus nibh, eu vulputate elit consequat non. Quisque tortor nisi, vulputate vel justo sit amet, convallis lacinia purus. Aenean vestibulum velit ut sapien congue, non pulvinar massa imperdiet. In ligula risus, egestas ut tincidunt in, pellentesque vel turpis.
                            </p>
                                    
                            <p>
                                In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget mattis augue. Fusce sed dui et risus rhoncus porttitor nec quis odio. Mauris ut congue tellus.
                            </p>

                        </div>

                        <div className="image-about"></div>

                    </div>

                </div>
                
            </section>

            <section className="products">

                <div className="container">

                    <div className="content-products">
                        
                        <article className="product">

                            <div className="icon-product" style={{backgroundImage: "url(/static/media/mask.ba6df56a.svg)"}}></div>

                            <h4> Máscaras Decartáveis </h4>

                            <p> In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. </p>

                        </article>

                        <article className="product">

                            <div className="icon-product" style={{backgroundImage: "url(/static/media/medical.02391c67.svg)"}}></div>

                            <h4> Máscaras Reutilizáveis </h4>

                            <p> In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. </p>

                        </article>

                        <article className="product">

                            <div className="icon-product" style={{backgroundImage: "url(/static/media/hand.c42ea233.svg)"}}></div>

                            <h4> Mascaras decartáveis </h4>

                            <p> In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. </p>

                        </article>

                    </div>

                </div>

            </section>

        </App>

    );

}