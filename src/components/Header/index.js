/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import phoneImg from '../../assets/phone.png';
import wppImg from '../../assets/wpp.png';
import logoImg from '../../assets/logo.png';
import userImg from '../../assets/user.png';
import arrowImg from '../../assets/arrow.png';

const Header = () => {
return (
        <header>
            <div className="header-text">
                <p>Central de vendas:</p>
                <img src={phoneImg} alt="Phone" className="phone"/>
                <p>(31) 4000-1667</p>
                <img src={wppImg}  alt="WhatsApp" className="wpp" />
                <p>(31) 2534-2115</p>
            </div>

            <div class="desktop-elements">
                <div class="logo-row">
                    <img src={logoImg} alt="Seguros Promo" class="logo" />
                    <div class="buttons">
                        <a href="#" class="button-header">Seguro de vida</a>
                        <a href="#" class="button-header">Multi-trip</a>
                        <a href="#" class="button-header">Atendimento</a>
                        <a href="#" class="button-header">FAQ</a>
                        <a href="#" class="button-header">Afiliados</a>
                        <a href="#" class="button-header">Blog</a>
                        <a href="#" class="button-header-right">
                            <img src={userImg} alt="User" class="user" />
                            Área do cliente
                            <img src={arrowImg} alt="Arrow right" class="arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
