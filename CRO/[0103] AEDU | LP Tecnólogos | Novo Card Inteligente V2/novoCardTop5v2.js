let callback = {
    topFiveCardInteligentPersonalized: false,
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const newContentCard = [
    {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-v2">O curso de <b>Investigação e Perícia Criminal</b> ensina técnicas de análise forense, investigação de crimes e elaboração de laudos.</p>`,
        shifts: /*html*/ `<span class="cro-title-shifts-card-inteligente-v2"><b>Turnos: </b>Manhã, Tarde e Noite</span>`,
        likes: /*html*/ `<div class="cro-container-likes-card-inteligente-v2">
                            <h3>Curso para você que gosta: </h3>
                            <div>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Investigar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Analisar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Elaborar</span>
                            </div>
                        </div>`,
    },
    {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-v2">O curso de <b>Terapias Integrativas</b> ensina práticas alternativas de saúde, como acupuntura, fitoterapia e aromaterapia.</p>`,
        shifts: /*html*/ `<span class="cro-title-shifts-card-inteligente-v2"><b>Turnos: </b>Manhã, Tarde e Noite</span>`,
        likes: /*html*/ `<div class="cro-container-likes-card-inteligente-v2">
                            <h3>Curso para você que gosta: </h3>
                            <div>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Harmonizar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Cuidar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Restaurar</span>
                            </div>
                        </div>`,
    },
    {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-v2">O curso de <b>Gestão de Recursos Humanos</b> ensina o gerenciamento de pessoas, recrutamento e desenvolvimento nas empresas.</p>`,
        shifts: /*html*/ `<span class="cro-title-shifts-card-inteligente-v2"><b>Turnos: </b>Manhã, Tarde e Noite</span>`,
        likes: /*html*/ `<div class="cro-container-likes-card-inteligente-v2">
                            <h3>Curso para você que gosta: </h3>
                            <div>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Gerenciar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Organizar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Recrutar</span>
                            </div>
                        </div>`,
    },
    {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-v2">O curso de <b>Análise e Desenvolvimento</b> ensina a criar, implementar e gerenciar sistemas de software para empresas.</p>`,
        shifts: /*html*/ `<span class="cro-title-shifts-card-inteligente-v2"><b>Turnos: </b>Manhã, Tarde e Noite</span>`,
        likes: /*html*/ `<div class="cro-container-likes-card-inteligente-v2">
                            <h3>Curso para você que gosta: </h3>
                            <div>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Desenvolver</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Gerenciar</span>
                                <span class="cro-cta-text-likes-card-inteligente-v2">Codificar</span>
                            </div>
                        </div>`,
    },
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyModificationTopFiveCardInteligent(containerTopFive) {
    if (!containerTopFive) {
        return;
    }

    const titleTop5 = containerTopFive.querySelector('.title-top-five-banner');
    titleTop5.textContent = "Cursos mais procurados:";
    titleTop5.style.marginBottom = "2rem";
    titleTop5.parentElement.style.width = "100%";
    titleTop5.parentElement.parentElement.style.maxWidth = "1235px";
    titleTop5.parentElement.parentElement.style.margin = "0 auto";

    const containerCards = containerTopFive.querySelector('.container-card-top-five');

    if (containerCards) {
        const cards = containerCards.querySelectorAll('.content-card-top-five');

        if (cards) {
            cards?.forEach((item, index) => {
                const card = item.querySelector('.card-top-five');
                const image = card.querySelector('.cta-image-card');
                const content = card.querySelector('.cta-container-card');
                const buttonRegister = card.querySelector('.button-subscribe-card-top-five');
                const containerModality = content.querySelector('.cta-container-modalities-top-five-card > .container-skeleton-modality-top-five-card')
                const buttonsModality = containerModality.querySelectorAll('.cta-button-modality-top-five-card ')

                card.style.width = "290px";
                card.style.borderRadius = "16px";
                image.style.height = "96.329px";
                content.querySelector('.title-card-top-five-course').style.fontSize = "15px";
                content.querySelector('.title-card-top-five-course').style.marginTop = "-25px";
                content.querySelector('.title-card-top-five-course').insertAdjacentHTML('afterend', newContentCard[index]?.paragraph);
                content.querySelector('.cro-paragraph-card-inteligente-v2').insertAdjacentElement('afterend', buttonRegister);
                content.querySelector('.cta-time-top-five-card').style.fontSize = "14px";
                buttonRegister.style.width = "220px";
                buttonRegister.style.textAlign = "center";
                content.querySelector('.cta-container-modalities-top-five-card').insertAdjacentHTML('afterend', newContentCard[index]?.shifts);
                content.querySelector('.cta-container-price-top-five-card').insertAdjacentHTML('afterend', newContentCard[index]?.likes);
                containerModality.style.gap = "4px";
                buttonsModality?.forEach(item => {
                    item.style.padding = "8px 10.5px";
                    item.textContent === "Semi" ? item.textContent = "Semipresencial" : item.textContent
                });
                item.querySelector('.number-card-top-five')?.remove();
                content.querySelector('.container-accordion--')?.remove();
            });
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyTopFiveCardInteligent(containerTopFive) {
    containerTopFive.classList.add('already-haves-containerTopFive-novoCardInteligenteV2-personalization');

    callback.topFiveCardInteligentPersonalized = true;

    const observerNewCardInteligent = new MutationObserver(() => {
        if (containerTopFive && !containerTopFive.classList.contains('already-haves-containerTopFive-novoCardInteligenteV2-personalization')) {
            applyModificationTopFiveCardInteligent(containerTopFive);
        }
    })
    observerNewCardInteligent.observe(containerTopFive, { childList: true, subtree: true });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyWidth1400(containerTopFive) {
    const containerCards = containerTopFive.querySelector('.container-card-top-five');
    if (window.matchMedia('(max-width: 1400px)').matches) {
        containerCards.style.minWidth = '1200px';
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const addStyles = function (styles) {
    const css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
        document.head.insertAdjacentElement("afterbegin", css);
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroPersonalization() {
    console.warn('novo card inteligente v2 rodando')
    const divNext = document.querySelector('#__next');

    if (!divNext || document.documentElement.classList.contains('already-haves-novoCardInteligenteV2-personalization')) {
        return;
    }
    document.documentElement.classList.add('already-haves-novoCardInteligenteV2-personalization');

    const styles = /*css*/ `
        .cro-paragraph-card-inteligente-v2 {
            color: #383838;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-top: -10px;
            margin-bottom: 14px;
        }

        .cro-title-shifts-card-inteligente-v2 {
            color: #383838;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom: 14px;
        }

        .cro-container-likes-card-inteligente-v2 {
            h3 {
                color: #383838;
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                 margin-bottom: 10px;
            }

            div {
                display: flex;
                gap: 4px;

                .cro-cta-text-likes-card-inteligente-v2 {
                    color: #2B2B2F;
                    font-family: Montserrat;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    padding: 8px;
                    border-radius: 8px;
                    background: #FFF7CC;
                }
            }
            
        }
    `;

    if (!document.documentElement.classList.contains('already-haves-addStyles-0103')) {
        addStyles(styles);
    }
    document.documentElement.classList.add('already-haves-addStyles-0103');

    const containerTopFive = document.querySelector('.cta-top-five-banner');

    applyModificationTopFiveCardInteligent(containerTopFive);
    modifyTopFiveCardInteligent(containerTopFive);
    applyWidth1400(containerTopFive);
    window.addEventListener('resize', applyWidth1400(containerTopFive));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    startCroPersonalization();
})
startCroPersonalization();