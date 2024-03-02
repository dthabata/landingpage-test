/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.css';
import computerImg from '../../assets/computer.png';

const Plans = () => {
return (
        <section class="items-chunk">
            <div class="flex-container-items">
                <div class="column image-column">
                    <div class="desktop-elements">
                        <img src={computerImg} alt="Computer" class="computer" />
                    </div>
                </div>
                <div class="column content-column">
                    <h2>Planos personalizados e sem burocracia</h2>
                    <ul class="items">
                        <li><span>1.</span> Informe seus dados</li>
                        <li><span>2.</span> Descubra o plano ideal para o seu perfil</li>
                        <li><span>3.</span> Escolha a sua forma de pagamento e contrate 100% online</li>
                        <li>Pronto! Agora você e sua família têm todos os benefícios de viver com segurança total</li>
                    </ul>
                    <div class="mobile-elements">
                        <img src={computerImg} alt="Computer" class="computer" />
                    </div>
                    <div class="column button-column">
                        <a href="#" class="button-cta">Faça sua cotação</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;
