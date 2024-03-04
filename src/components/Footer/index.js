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
            <section class="mobile-elements">
                <div class="mobile-footer">
                    <div class="colorful-block">
                        <div class="colorful-line"></div>
                    </div>
                    <div class="logo-block">
                        <img src={brandImg} alt="Brand" class="brand" />
                        <img src={socialImg} alt="Social media" class="social" />
                        <img src={rectangleImg} alt="Rectangle" class="rectangle" />
                    </div>
                    <div class="baseboard">
                        <p>CENTRAL DE VENDAS:</p>
                        <div class="column button-contact">
                            <a href="#" class="button-wpp"><img src={wppImg} alt="WhatsApp" class="wpp" /></a>
                            <a href="#" class="button-wpp"><img src={mobileImg} alt="Mobile" class="phone-mobile" /></a>
                        </div>
                    </div>
                    <div class="baseboard">
                        <p>ATENDIMENTO:</p>
                        <div class="column button-contact">
                            <a href="#" class="button-wpp"><img src={mobileImg} alt="Mobile" class="phone-mobile" />(31) 4007-2586</a>
                            <a href="#" class="button-wpp">Central de Ajuda</a>
                            <a href="#" class="button-wpp"><img src={mailImg} alt="Mail" class="mail" />atendimento@segurosp</a>
                        </div>
                        <div class="accordion-content">
                            <div class="accordion">
                                <div class="section">
                                    <div class="trigger">
                                        Seguros
                                        <div class="arrow-accordion"></div>
                                    </div>
                                    <div class="content">
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
                                <div class="section">
                                    <div class="trigger">
                                        Quem somos
                                        <div class="arrow-accordion"></div>
                                    </div>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="trigger">
                                        Seguradoras
                                        <div class="arrow-accordion"></div>
                                    </div>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                                    </div>
                                </div>
                                <div class="section">
                                    <div class="trigger">
                                        Blog
                                        <div class="arrow-accordion"></div>
                                    </div>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payments">
                    <h3>FORMAS DE PAGAMENTO:</h3>
                    <p>Crédito em até 12 vezes</p>
                    <div class="flags-container">
                        <div class="flag"><img src={masterImg} alt="Flag Mastercard" class="master" /></div>
                        <div class="flag"><img src={visaImg} alt="Flag Visa" class="visa" /></div>
                        <div class="flag"><img src={amexImg} alt="Flag American Express" class="amex" /></div>
                        <div class="flag"><img src={eloImg} alt="Flag Elo" class="elo" /></div>
                        <div class="flag"><img src={dinersImg} alt="Flag Divers Club" class="diners" /></div>
                        <div class="flag"><img src={hiperImg} alt="Flag Hipercard" class="hiper" /></div>
                    </div>
                    <p>Boleto bancário</p>
                    <div class="payment-container">
                        <div class="payment"><img src={paymentImg} alt="Payment code" class="payment" /></div>
                        <div class="payment"><img src={discountImg} alt="Discount" class="discount" /></div>
                    </div>
                    <p>Transferência bancária</p>
                    <div class="bank-container">
                        <div class="bank"><img src={bank1Img} alt="Bank 1" class="bank1" /></div>
                        <div class="bank"><img src={bank2Img} alt="Bank 2" class="bank2" /></div>
                        <div class="bank"><img src={bank3Img} alt="Bank 3" class="bank3" /></div>
                        <div class="bank"><img src={bank4Img} alt="Bank 4" class="bank4" /></div>
                        <div class="bank"><img src={bank5Img} alt="Bank 5" class="bank5" /></div>
                        <div class="bank"><img src={bank6Img} alt="Bank 6" class="bank6" /></div>
                    </div>
                    <p>Pagamento com pix</p>
                    <div class="pix-container">
                        <div class="pix"><img src={pixImg} alt="Pix" class="pix" /></div>
                    </div>
                    <div class="logo-block">
                        <img src={rectangleImg} alt="Rectangle" class="rectangle" />
                    </div>
                    <div class="mobile-memo">
                        <p>2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras,
                            nº 1.532, 10º andar - Belo Horizonte - MG © 2017 Seguros Promo - Emitir Shop | By - 2XT Tecnologia</p>
                        <div class="bitmap"><img src={bitmapImg} alt="Bitmap" class="bitmap" /></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
