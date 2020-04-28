import React from 'react';

import App from '../../containers/App';

import { FiChevronDown, FiCheck, FiPhone, FiMail, FiUser, FiTruck, FiCheckSquare, FiUsers, FiTag, FiMessageSquare } from 'react-icons/fi';

import { FaHandHoldingUsd } from 'react-icons/fa';

import mask from '../../assets/mask.svg';

import medical from '../../assets/medical.svg';

import hand from '../../assets/hand.svg';

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

                            <h1> Medical <div> kit </div> </h1>

                            <h2> <div>Juntos</div>&nbsp;somos mais&nbsp;<div>Fortes</div> </h2>

                            <p>
                                A Medicalkit foi criada com intuito principal de disponibilizar produtos de proteção pessoal como máscaras e álcool em gel para maior número de pessoas possível, de forma mais acessível, barata, fácil.
                            </p>
                                    
                            <p>
                                Não sabemos quando tudo isso irá passar, esperamos que seja o quanto antes. Mas para que isso aconteça, é necessário que cada um faça sua parte, nos cuidando na medida do possível.
                            </p>

                            <p>
                                Por isso criamos a MedicalKit, para que todas as pessoas tenham acesso aos recursos de proteção pessoal nessa epidemia, de forma fácil, segura e prática. Além disso, com produtos de alta qualidade e em conta, para que alcancemos maior número de pessoas possível. Para que o Brasil saia desta crise mais rápido, vamos fazer nossa parte juntos!
                            </p>

                        </div>

                        <div className="image-about"></div>

                    </div>

                </div>
                
            </section>

            <section className="informations">

                <div className="container">

                    <div className="content-informations">
 
                        <div className="image-informations"></div>

                        <div className="text-informations">
                            
                            <h1> Siga as&nbsp;<div> Dicas </div> </h1>
                            <h2><div>Ajude</div>&nbsp;a combater o&nbsp;<div>Corona Virus</div> </h2>

                            <ul>

                                <li>

                                    <FiCheck size={16} color="#1F67A6" />&nbsp; Lave as mãos frequentemente 
                                    
                                </li>

                                <li>

                                    <FiCheck size={16} color="#1F67A6" />&nbsp; Use Mascara 
                                    
                                </li>

                                <li>

                                    <FiCheck size={16} color="#1F67A6" />&nbsp; Use Cotovelo para cobrir a tosse 
                                    
                                </li>

                                <li>

                                    <FiCheck size={16} color="#1F67A6" />&nbsp; Não toque o rosto
                                    
                                </li>

                                <li>

                                    <FiCheck size={16} color="#1F67A6" />&nbsp; Mantenha uma distância segura 
                                    
                                </li>

                                <li>

                                    <FiCheck size={16} color="#1F67A6" />&nbsp; Se possível, não sair de casa 
                                    
                                </li>
                                
                            </ul>

                            <button> Proteja-se </button>

                        </div>

                    </div>

                </div>
                
            </section>

            <section className="products">

                <div className="container">

                    <div className="container-products">

                        <h1> Produtos </h1>

                        <h2>Os&nbsp;<div>Melhores</div>&nbsp;em custo&nbsp;<div>Benefício e Qualidade</div> </h2>

                        <div className="content-products">
                        
                            <article className="product">

                                <img src={mask} alt="Máscaras Decartáveis" className="icon-product"/>

                                <h4> Máscaras Decartáveis </h4>

                                <p> In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. </p>

                            </article>

                            <article className="product">

                                <img src={medical} alt="Máscaras Reutilizáveis" className="icon-product"/>

                                <h4> Máscaras Reutilizáveis </h4>

                                <p> In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. </p>

                            </article>

                            <article className="product">

                                <img src={hand} alt="Álcool em Gel" className="icon-product"/>

                                <h4> Álcool em Gel </h4>

                                <p> In vulputate ultrices tellus, sed feugiat nibh mollis eu. Integer aliquet nisi quis magna laoreet, ut ultricies ligula volutpat. </p>

                            </article>

                        </div>

                    </div>

                </div>

            </section>

            <section className="benefits">

                <div className="container">

                    <div className="content-benefits">

                        <h1 className="h1-benefits"> Benefícios </h1>

                        <h2>Separamos&nbsp;<div>especialmente </div>&nbsp;para&nbsp;<div> você </div> </h2>

                        <div className="container-items-benefits">

                            <div className="item-benefits">

                                <FiTruck className="icon-benefits" size={64} color="#F1F4F6" />

                                <div className="text-benefits">

                                    <h1> Entregamos na sua Casa </h1>

                                    <p> Para que não precise sair de casa nessa epidemia, nós levamos os produtos até você. Consulte sua região para saber se tem direito ao frete Grátis! </p>

                                </div>

                            </div>

                            <div className="item-benefits">

                                <FiCheckSquare className="icon-benefits" size={64} color="#F1F4F6" />

                                <div className="text-benefits">

                                    <h1> Produtos de Qualidade </h1>

                                    <p> Todos nossos produtos são selecionados para que nossos clientes tenham o melhor em qualidade e eficácia. </p>

                                </div>

                            </div>

                        </div>

                        <div className="container-items-benefits">

                            <div className="item-benefits">

                                <FaHandHoldingUsd className="icon-benefits" size={64} color="#F1F4F6" />

                                <div className="text-benefits">

                                    <h1> Custo Benefício </h1>

                                    <p> Para que todos tenham acesso, deixamos nossos produtos em faixas de preços acessíveis para todas as pessoas. </p>

                                </div>

                            </div>

                            <div className="item-benefits">

                                <FiUsers className="icon-benefits" size={64} color="#F1F4F6" />

                                <div className="text-benefits">

                                    <h1> Ajudar o próximo </h1>

                                    <p> A cada R$100,00 arrecadados em vendas, serão doados a pessoas que não tenham acessibilidade a estes recursos, 3 recipientes de 100ml de álcool em gel e 1 máscara. </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="contact">

                <div className="container">

                    <div className="content-contact">

                        <h1> Contato </h1>

                        <h2> Caso tenha alguma dúvida,&nbsp;<div> entre em contato </div> </h2>

                        <div className="container-form-contact">

                            <div className="information-contact">

                                <h3> Informações de contato </h3>

                                <ul>

                                    <li> <FiMail size={16} color="#3F9BBF" />&nbsp; contato@medicalkit.com.br </li>

                                    <li> <FiPhone size={16} color="#3F9BBF" />&nbsp; (41) 00000-0000 </li>

                                    <li> <FiPhone size={16} color="#3F9BBF" />&nbsp; (41) 00000-0000 </li>

                                </ul>

                            </div>

                            <div className="form-contact">

                                <h3> Envie uma Mensagem </h3>

                                <div className="container-input-contact">

                                    <FiUser className="icon-input-contact" size={16} color="rgb(72, 79, 82, .4)" />

                                    <input placeholder="Nome Completo" />
                                    
                                </div>

                                <div className="container-input-contact">

                                    <FiMail className="icon-input-contact" size={16} color="rgb(72, 79, 82, .4)" />

                                    <input placeholder="E-mail" />
                                    
                                </div>

                                <div className="group-input-contact">

                                    <div className="container-input-contact f50 m-right">

                                        <FiPhone className="icon-input-contact" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="Telefone" />

                                    </div>

                                    <div className="container-input-contact f50">

                                        <FiTag className="icon-input-contact" size={16} color="rgb(72, 79, 82, .4)" />

                                        <input placeholder="Assunto" /> 

                                    </div>

                                </div>

                                <div className="container-input-contact">

                                    <FiMessageSquare className="icon-input-contact text-area-icon" size={16} color="rgb(72, 79, 82, .4)" />

                                    <textarea placeholder="Sua mensagem"></textarea>

                                </div>

                                <button> Enviar sua Mensagem </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </App>

    );

}