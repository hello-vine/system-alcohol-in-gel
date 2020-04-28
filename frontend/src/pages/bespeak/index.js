import React from 'react';

import ContainerSystem from '../../containers/System';

import mask from '../../assets/mask.svg';

import medical from '../../assets/medical.svg';

import hand from '../../assets/hand.svg';

import { FiPlus, FiMinus } from 'react-icons/fi';

import './styles.css';

export default function Bespeak() {

    return (

        <ContainerSystem>

            <section className="bespeak">

                <div className="container container-bespeak">

                    <h1> Encomendar </h1>

                    <section className="content-bespeak">

                        <section className="products-bespeak">

                            <div className="item-bespeak">
          
                                <img src={mask} className="icon-bespeak" alt="Máscara"/>

                                <div className="content-item-bespeak">

                                    <h1> Máscaras Decartáveis </h1>
                                    
                                    <p> R$ 0,50 por unidade </p>

                                    <div className="selection-value-bespeak">
                                        
                                        <FiMinus className="add-bespeak" size={16} color="#3F9BBF" /> 

                                        <input className="input-selection-value-bespeak" type="text" value={0}/> 

                                        <FiPlus className="sub-bespeak" size={16} color="#3F9BBF" />            

                                    </div>

                                    <div className="show-value-bespeak"> R$ 22,00 </div>

                                </div>

                            </div>


                            <div className="item-bespeak">
          
                                <img src={medical} className="icon-bespeak" alt="Máscara"/>

                                <div className="content-item-bespeak">

                                    <h1> Máscaras Reutilizáveis </h1>
                                    
                                    <p> R$ 9,00 por unidade </p>

                                    <div className="selection-value-bespeak">
                                        
                                        <FiMinus className="add-bespeak" size={16} color="#3F9BBF" /> 

                                        <input className="input-selection-value-bespeak" type="text" value={0}/> 

                                        <FiPlus className="sub-bespeak" size={16} color="#3F9BBF" />            

                                    </div>

                                    <div className="show-value-bespeak"> R$ 22,00 </div>

                                </div>

                            </div>


                            <div className="item-bespeak">
          
                                <img src={hand} className="icon-bespeak" alt="Máscara"/>

                                <div className="content-item-bespeak">

                                    <h1> Álcool em Gel </h1>
                                    
                                    <p> R$ 0,50 por unidade </p>

                                    <div className="selection-value-bespeak">
                                        
                                        <FiMinus className="add-bespeak" size={16} color="#3F9BBF" /> 

                                        <input className="input-selection-value-bespeak" type="text" value={0}/> 

                                        <FiPlus className="sub-bespeak" size={16} color="#3F9BBF" />            

                                    </div>

                                    <div className="show-value-bespeak"> R$ 22,00 </div>

                                </div>

                            </div>


                            <div className="content-final-value-bespeak">

                                <div className="final-value">

                                    <label> Valor final: </label>

                                    <div> R$ 66,00 </div>

                                </div>

                                <div className="btn-final-value-bespeak"> Encomendar </div>

                            </div>

                        </section>

                        <section className="content-info-bespeak">

                            <h1> Informações </h1>

                            <div className="date-delivery-bespeak">

                                <h1> Próxima entrega: </h1>

                                <h2> 26/04/2020 </h2>

                            </div>

                            <div className="warning-bespeak">

                                <h2> Importante! </h2>

                                <ul>

                                    <li>

                                        <b> Confira se seus dados estão corretos! </b>

                                        <small> Para que nós da MedicalKit encontremos seu endereço e possamos entrar em contato com você </small>

                                    </li>

                                    <li>

                                        <b> Ligaremos para você no máximo 3 vezes pouco antes da entrega </b>

                                        <small> Fazemos isso para que tenha-mos certeza que haverá alguém para receber a entrega e para confirmar o endereço </small>

                                    </li>

                                    <li>

                                        <b> Não aceitamos pagamento em cartão por enquanto </b>

                                        <small> Conforme as necessidades iremos integrar recursos de pagamento online e cartão na entrega também </small>

                                    </li>

                                </ul>

                                <h3> Para mais dúvidas </h3>

                                <div className="btn-contact-bespeak"> Entre em contato </div>

                            </div>

                        </section>

                    </section>

                </div>

            </section>
            
        </ContainerSystem>

    );

}