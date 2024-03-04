/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../styles/components/home.scss';

const Home = () => {
return (
        <section className="home-chunk">
            <div className="lp-home">
                <div className="top-page">
                    <h1>Tranquilidade para viver mais</h1>
                </div>
                <div className="bottom-page">
                    <p>Viva mais e melhor com os benefícios que um serguro de vida te oferece</p>
                    <div className="column button-column">
                        <a href="#" className="button-cta-primary">Faça sua cotação</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
