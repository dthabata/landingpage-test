/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../styles/components/coverage.scss';
import angelImg from '../../assets/angel.png';
import chairImg from '../../assets/chair.png';
import candleImg from '../../assets/candle.png';
import coinsImg from '../../assets/coins.png';

const Coverage = () => {
return (
        <section class="coverage-chunk">
            <div class="column content-column">
                    <h2>Nossas coberturas</h2>
                    <p>Veja mais detalhes de cada proteção!</p>
                <div class="desktop-elements">
                    <div class="flex-container-cards">
                        <div class="card">
                            <img src={angelImg} alt="Angel" class="angel" />
                            <h3>Morte</h3>
                            <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                        <div class="card">
                            <img src={angelImg} alt="Angel" class="angel" />
                            <h3>Morte</h3>
                            <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                        <div class="card">
                            <img src={angelImg} alt="Angel" class="angel" />
                            <h3>Morte</h3>
                            <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                    </div>
                </div>
                <div class="mobile-elements">
                    <div class="flex-container-cards">
                        <div class="card">
                            <img src={angelImg} alt="Angel" class="angel" />
                            <h3>Morte</h3>
                            <p>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                        <div class="card">
                            <img src={chairImg} alt="Chair" class="chair" />
                            <h3>Invalidez por acidente</h3>
                            <p>Caso a pessoa segurada sofra um acidente que a torne permanentemente inválida, seja total ou parcialmente, ela recebe uma uma indenização.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                        <div class="card">
                            <img src={candleImg} alt="Candle" class="candle" />
                            <h3>Assistência funeral</h3>
                            <p>No caso do falecimento da pessoa segurada, a pessoa beneficiária recebe assistência para a realização do funeral ou cremação.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                        <div class="card">
                            <img src={coinsImg} alt="Coins" class="coins" />
                            <h3>Sorteios mensais de 10 mil reais</h3>
                            <p>A pessoa segurada concorre a sorteios de R$10.000 todo mês enquanto continuar com seu o plano ativo.</p>
                            <a href="#" class="button-card">Saiba Mais</a>
                        </div>
                    </div>
                </div>
                <div class="column button-column">
                    <a href="#" class="button-cta">Faça sua cotação</a>
                </div>
            </div>
        </section>
    );
};

export default Coverage;
