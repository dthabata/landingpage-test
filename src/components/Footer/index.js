/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.css';
import contactImg from '../../assets/contact.png';
import wppImg from '../../assets/wpp.png';

const Footer = () => {
return (
        <section class="footer-chunk">
            <div class="desktop-elements">
                <div class="footer-web">
                    <div class="lp-footer">
                        <div class="footer-title">
                            <h1>Ainda não sabe qual seguro contratar?</h1>
                        </div>
                        <div class="footer-content">
                            <p>Ligue pra gente e receba uma consultoria personalizada gratuitamente!</p>
                            <div class="contact-info">
                            <img src={contactImg} alt="Contact" class="contact" /><span>(99) 99999.9999</span>
                            </div>
                            <div class="column button-contact">
                            <a href="#" class="button-wpp"><img src={wppImg} alt="WhatsApp" class="wpp" />Se preferir, entre em contato pelo Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-info">
                        <p>Atendemos pelo telefone de seg. a sex., das 9h às 17h</p>
                    </div>
                </div>
            </div>
            <div class="mobile-elements">
                <div class="footer-mobile">
                    <div class="lp-footer">
                        <div class="footer-title">
                            <h1>Ainda tem dúvidas sobre seguro de vida?</h1>
                        </div>
                        <div class="footer-content">
                            <p>Entre em contato e receba uma consultoria personalizada gratuitamente</p>
                            <div class="contact-info">
                            <img src={contactImg} alt="Contact" class="contact" /><span>(99) 99999.9999</span>
                            </div>
                            <div class="add-info">Atendemos pelo telefone de seg. a sex., das 9h às 17h</div>
                            <div class="column button-contact">
                            <a href="#" class="button-wpp"><img src={wppImg} alt="WhatsApp" class="wpp" />Também respondemos pelo Whatsapp!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
