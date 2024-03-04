/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../../styles/components/header.scss';
import phoneImg from '../../assets/phone.png';
import wppImg from '../../assets/wpp.png';
import logoImg from '../../assets/logo.png';
import userImg from '../../assets/user.png';
import arrowImg from '../../assets/arrow.png';
import menuImg from '../../assets/menu.png';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

return (
        <header>
            <div className="header-text">
                <p>Central de vendas:</p>
                <img src={phoneImg} alt="Phone" className="phone"/>
                <p>(31) 4000-1667</p>
                <img src={wppImg}  alt="WhatsApp" className="wpp"/>
                <p>
                    <a href="https://wa.me/553125342115" target='_black'>
                    (31) 2534-2115
                    </a>
                </p>
            </div>

            <div className="desktop-elements">
                <div className="logo-row">
                    <img src={logoImg} alt="Seguros Promo" className="logo" />
                    <div className="buttons">
                        <a href="#" className="button-header">Seguro de vida</a>
                        <a href="#" className="button-header">Multi-trip</a>
                        <a href="#" className="button-header">Atendimento</a>
                        <a href="#" className="button-header">FAQ</a>
                        <a href="#" className="button-header">Afiliados</a>
                        <a href="#" className="button-header">Blog</a>
                        <a href="#" className="button-header-right">
                            <img src={userImg} alt="User" className="user" />
                            Área do cliente
                            <img src={arrowImg} alt="Arrow right" className="arrow" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mobile-elements">
                <div className="logo-row-mobile">
                <img src={logoImg} alt="Seguros Promo" className="logo" />
                    <div className="buttons-mobile" onClick={() => setOpenMenu(!openMenu)}>
                        <a className="button-header" id="menuButton">Menu<img src={menuImg} alt="Menu" className="menu" /></a>
                    </div>
                </div>
                {openMenu &&
                    <div className="mini-menu">
                        <button>Seguro de Vida</button>
                        <button>Multi-trip</button>
                        <button>Atendimento</button>
                        <button>FAQ</button>
                        <button>Afiliados</button>
                        <button>Blog</button>
                        <button>Área do cliente</button>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;
