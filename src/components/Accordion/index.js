/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.css';
import coupleImg from '../../assets/couple.png';

const Accordion = () => {
return (
        <section class="accordion-chunk">
            <div class="column content-column">
                <h2 class="accordion-title">Mas por que ter um seguro de vida?</h2>
            </div>
            <div class="accordion-container">
                <div class="accordion-content">
                    <div class="accordion">
                        <div class="section">
                            <div class="trigger">
                                Custo-benefício
                                <div class="arrow-accordion"></div>
                            </div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="trigger">
                                Segurança financeira
                                <div class="arrow-accordion"></div>
                            </div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="trigger">
                                Proteção financeira aos dependentes e ao cônjuge
                                <div class="arrow-accordion"></div>
                            </div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="trigger">
                                Tranquilidade para o segurado
                                <div class="arrow-accordion"></div>
                            </div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                            </div>
                        </div>
                        <div class="section">
                            <div class="trigger">
                                Garantias nas horas em que você mais precisar
                                <div class="arrow-accordion"></div>
                            </div>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="desktop-elements">
                    <div class="image-content">
                        <div class="column image-column">
                            <img src={coupleImg} alt="Couple" class="couple" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="column button-column">
                <a href="#" class="button-cta-accordion">Faça sua cotação</a>
            </div>
        </section>
    );
};

export default Accordion;
