/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../../styles/components/accordion.scss';
import coupleImg from '../../assets/couple.png';
import reasonService from '../../services/reasonService';

const Accordion = () => {
    const [reasonsList, setReasonsList] = useState([]);
    
    const toggleAccordion = (id) => {
        const reasonsListAux = [...reasonsList];

        reasonsListAux.forEach(function(part, index, theArray) {
            if(reasonsListAux[index].value.id === id) {
                reasonsListAux[index].show = !reasonsListAux[index].show;
                return;
            }
        });

        setReasonsList(reasonsListAux);
    }

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await reasonService.load();
            if (reasonsList.length === 0){
                const reasonsListAux = []
                response.forEach(reason => {
                    reasonsListAux.push({value: reason, show: false });
                });
                console.log(reasonsListAux);
                setReasonsList(reasonsListAux);
            }
        }
    
        fetchMyAPI()
    })

return (
        <section className="accordion-chunk">
            <div className="column content-column">
                <h2 className="accordion-title">Mas por que ter um seguro de vida?</h2>
            </div>
            <div className="accordion-container">
                <div className="accordion-content">
                    <div className="accordion">
                    {
                        reasonsList.map((item, index) => (
                            <div key={item.value.id} className="section">
                                <div className="trigger" onClick={() => toggleAccordion(item.value.id)}>
                                    {item.value.title}
                                    <div className="arrow-accordion"></div>
                                </div>
                                <div className={item.show ? 'fadeIn':'fadeOut'}>
                                    <p>{item.value.content}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="desktop-elements">
                    <div className="image-content">
                        <div className="column image-column">
                            <img src={coupleImg} alt="Couple" className="couple" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="column button-column">
                <a href="#" className="button-cta-accordion">Faça sua cotação</a>
            </div>
        </section>
    );
};

export default Accordion;
