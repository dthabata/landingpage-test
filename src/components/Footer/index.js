/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../styles/components/footer.scss';
import contactImg from '../../assets/contact.png';
import wppImg from '../../assets/wpp.png';
import brandImg from '../../assets/brand.png';
import socialImg from '../../assets/social.png';
import rectangleImg from '../../assets/rectangle.png';
import mobileImg from '../../assets/mobile.png';
import mailImg from '../../assets/mail.png';
import masterImg from '../../assets/flag_master.png';
import visaImg from '../../assets/flag_visa.png';
import amexImg from '../../assets/flag_amex.png';
import eloImg from '../../assets/flag_elo.png';
import dinersImg from '../../assets/flag_diners.png';
import hiperImg from '../../assets/flag_hiper.png';
import paymentImg from '../../assets/payment.png';
import discountImg from '../../assets/discount.png';
import bank1Img from '../../assets/bank_1.png';
import bank2Img from '../../assets/bank_2.png';
import bank3Img from '../../assets/bank_3.png';
import bank4Img from '../../assets/bank_4.png';
import bank5Img from '../../assets/bank_5.png';
import bank6Img from '../../assets/bank_6.png';
import pixImg from '../../assets/pix.png';
import bitmapImg from '../../assets/bitmap.png';

const Footer = () => {
return (
        <>
            <section className="footer-chunk">
            <div className="desktop-elements">
                <div className="footer-web">
                    <div className="lp-footer">
                        <div className="footer-title">
                            <h1>Ainda não sabe qual seguro contratar?</h1>
                        </div>
                        <div className="footer-content">
                            <p>Ligue pra gente e receba uma consultoria personalizada gratuitamente!</p>
                            <div className="contact-info">
                                <img src={contactImg} alt="Contact" className="contact" /><span>(99) 99999.9999</span>
                            </div>
                            <div className="column button-contact">
                                <a href="#" className="button-wpp"><img src={wppImg} alt="WhatsApp" className="wpp" />Se preferir, entre em contato pelo Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>Atendemos pelo telefone de seg. a sex., das 9h às 17h</p>
                    </div>
                </div>
            </div>
            <div className="mobile-elements">
                <div className="footer-mobile">
                    <div className="lp-footer">
                        <div className="footer-title">
                            <h1>Ainda tem dúvidas sobre seguro de vida?</h1>
                        </div>
                        <div className="footer-content">
                            <p>Entre em contato e receba uma consultoria personalizada gratuitamente</p>
                            <div className="contact-info">
                                <img src={contactImg} alt="Contact" className="contact" /><span>(99) 99999.9999</span>
                            </div>
                            <div className="add-info">Atendemos pelo telefone de seg. a sex., das 9h às 17h</div>
                            <div className="column button-contact">
                                <a href="#" className="button-wpp"><img src={wppImg} alt="WhatsApp" className="wpp" />Também respondemos pelo Whatsapp!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="mobile-elements">
                <div className="mobile-footer">
                    <div className="colorful-block">
                        <div className="colorful-line"></div>
                    </div>
                    <div className="logo-block">
                        <img src={brandImg} alt="Brand" className="brand" />
                        <img src={socialImg} alt="Social media" className="social" />
                        <img src={rectangleImg} alt="Rectangle" className="rectangle" />
                    </div>
                    <div className="baseboard">
                        <p>CENTRAL DE VENDAS:</p>
                        <div className="column button-contact">
                            <a href="#" className="button-wpp"><img src={wppImg} alt="WhatsApp" className="wpp" />(31) 4007-2586</a>
                            <a href="#" className="button-wpp"><img src={mobileImg} alt="Mobile" className="phone-mobile" />(31) 98204-2542</a>
                        </div>
                    </div>
                    <div className="baseboard">
                        <p>ATENDIMENTO:</p>
                        <div className="column button-contact">
                            <a href="#" className="button-wpp"><img src={mobileImg} alt="Mobile" className="phone-mobile" />(31) 4007-2586</a>
                            <a href="#" className="button-wpp">Central de Ajuda</a>
                            <a href="#" className="button-wpp"><img src={mailImg} alt="Mail" className="mail" />atendimento@segurosp</a>
                        </div>
                        <div className="accordion-content-footer">
                            <div className="accordion-footer">
                                <div className="section-footer">
                                    <div className="trigger-footer">
                                        Seguros
                                        <div className="arrow-accordion-footer"></div>
                                    </div>
                                    <div className="content">
                                        <p>Seguro Viagem América do Norte</p>
                                        <p>Seguro Viagem Europa</p>
                                        <p>Seguro Viagem América do Sul</p>
                                        <p>Seguro Viagem América Central</p>
                                        <p>Seguro Viagem África</p>
                                        <p>Seguro Viagem Ásia</p>
                                        <p>Seguro Viagem Internacional</p>
                                        <p>Seguro Viagem Nacional</p>
                                        <p>Seguro Viagem Oceania</p>
                                        <p>Seguro Viagem Oriente Médio</p>
                                        <p>Seguro Viagem Cruzeiro</p>
                                        <p>Seguro de Vida</p>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="trigger">
                                        Quem somos
                                        <div className="arrow-accordion"></div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="trigger">
                                        Seguradoras
                                        <div className="arrow-accordion"></div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                                    </div>
                                </div>
                                <div className="section">
                                    <div className="trigger">
                                        Blog
                                        <div className="arrow-accordion"></div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payments">
                    <h3>FORMAS DE PAGAMENTO:</h3>
                    <p>Crédito em até 12 vezes</p>
                    <div className="flags-container">
                        <div className="flag"><img src={masterImg} alt="Flag Mastercard" className="master" /></div>
                        <div className="flag"><img src={visaImg} alt="Flag Visa" className="visa" /></div>
                        <div className="flag"><img src={amexImg} alt="Flag American Express" className="amex" /></div>
                        <div className="flag"><img src={eloImg} alt="Flag Elo" className="elo" /></div>
                        <div className="flag"><img src={dinersImg} alt="Flag Divers Club" className="diners" /></div>
                        <div className="flag"><img src={hiperImg} alt="Flag Hipercard" className="hiper" /></div>
                    </div>
                    <p>Boleto bancário</p>
                    <div className="payment-container">
                        <div className="payment"><img src={paymentImg} alt="Payment code" className="payment" /></div>
                        <div className="payment"><img src={discountImg} alt="Discount" className="discount" /></div>
                    </div>
                    <p>Transferência bancária</p>
                    <div className="bank-container">
                        <div className="bank"><img src={bank1Img} alt="Bank 1" className="bank1" /></div>
                        <div className="bank"><img src={bank2Img} alt="Bank 2" className="bank2" /></div>
                        <div className="bank"><img src={bank3Img} alt="Bank 3" className="bank3" /></div>
                        <div className="bank"><img src={bank4Img} alt="Bank 4" className="bank4" /></div>
                        <div className="bank"><img src={bank5Img} alt="Bank 5" className="bank5" /></div>
                        <div className="bank"><img src={bank6Img} alt="Bank 6" className="bank6" /></div>
                    </div>
                    <p>Pagamento com pix</p>
                    <div className="pix-container">
                        <div className="pix"><img src={pixImg} alt="Pix" className="pix" /></div>
                    </div>
                    <div className="logo-block">
                        <img src={rectangleImg} alt="Rectangle" className="rectangle" />
                    </div>
                    <div className="mobile-memo">
                        <p>2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras,
                            nº 1.532, 10º andar - Belo Horizonte - MG © 2017 Seguros Promo - Emitir Shop | By - 2XT Tecnologia</p>
                        <div className="bitmap"><img src={bitmapImg} alt="Bitmap" className="bitmap" /></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
