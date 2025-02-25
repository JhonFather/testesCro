let callback = {
    topFiveCardInteligentPersonalized: false,
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const modalTestHTML = /*html*/ `
    <div class="cro-overlay-cardInteligenteNovoEcomm" id="cro-modal-overlay">
        <div class="cro-modal-cardInteligenteNovoEcomm" id="cro-modal">
            <div class="cro-container-title-modal-cardInteligenteNovoEcomm">
                <p class="cro-cta-text-modal-cardInteligenteNovoEcomm"></p>
                <span id="cro-close-modal" class="cro-button-close-cardInteligenteNovoEcomm" onclick='newFireGA("anhanguera", "modal:button", "modal:clique:button", "modal:button:close_button", "teste-card-inteligente-media-salarial", "b", "")'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path d="M11.3985 11.9994 6.47962 7.28477C6.3326 7.14363 6.25 6.95221 6.25 6.7526c0-.1996.0826-.39103.22962-.53217C6.62664 6.07929 6.82604 6 7.03396 6c.20792 0 .40732.07929.55435.22043l4.91099 4.72207 4.9111-4.72207c.147-.14114.3464-.22043.5543-.22043.2079 0 .4073.07929.5544.22043.147.14114.2296.33257.2296.53217 0 .19961-.0826.39103-.2296.53217l-4.9189 4.71463 4.9189 4.7145c.0731.0697.1312.1526.1709.244.0396.0913.06.1893.06.2882 0 .099-.0204.1969-.06.2883-.0397.0913-.0978.1742-.1709.2439-.0726.0702-.159.126-.2541.1641-.0952.038-.1972.0576-.3003.0576-.1031 0-.2051-.0196-.3003-.0576-.0951-.0381-.1815-.0939-.254-.1641l-4.9111-4.7221-4.91099 4.7221c-.07259.0702-.15894.126-.25408.1641-.09515.038-.1972.0576-.30027.0576s-.20512-.0196-.30026-.0576c-.09515-.0381-.1815-.0939-.25408-.1641-.07318-.0697-.13127-.1526-.17091-.2439-.03964-.0914-.06004-.1893-.06004-.2883 0-.0989.0204-.1969.06004-.2882.03964-.0914.09773-.1743.17091-.244l4.91888-4.7145Z" fill="var(--cro-color-close-modal)"/></svg>
                </span>
            </div>
            <div class="cro-center-grid">
                <div class="cro-hide-container-cards-cardInteligenteNovoEcomm">
                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                        <h3>Média Salarial:</h3>
                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                    </div>
                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                        <h3>Média Salarial:</h3>
                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                    </div>
                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                        <h3>Média Salarial:</h3>
                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                    </div>
                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                        <h3>Média Salarial:</h3>
                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                    </div>
                </div>
            </div>
            <div class="cro-hide-carousel-cardInteligenteNovoEcomm">
                <div class="cro-carousel-modal">
                    <div class="swiper-container mySwiper-modal">
                        <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                                        <h3>Média Salarial:</h3>
                                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                                        <h3>Média Salarial:</h3>
                                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                                        <h3>Média Salarial:</h3>
                                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="cro-box-carousel-modal-cardInteligenteNovoEcomm">
                                        <h3>Média Salarial:</h3>
                                        <span class="cro-salary-cardInteligenteNovoEcomm"></span>
                                        <span class="cro-position-cardInteligenteNovoEcomm"></span>
                                    </div>
                                </div>
                            </div>
                        <div class="cro-container-navigation-carousel-modal-cardInteligenteNovoEcomm">
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="cro-footer-modal-cardInteligenteNovoEcomm">*Fonte: Portal Salário das Profissões.</p>
        </div>
    </div>
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const newContentCard = {
    "administração": {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-novo-ecomm">Focado em gerenciar pessoas, otimizar processos e liderar.</p>`,
        averageSalary: /*html*/ `<div class="cro-container-media-salarial-card-inteligente-novo-ecomm">
                                    <span class="cro-media-salarial-card-inteligente-novo-ecomm">Média salarial: ${formatter.format(3700.00)}</span>
                                    <button onclick='newFireGA("anhanguera", "card:tooltip", "card:clique:tooltip", "card:tooltip:media-salarial", "teste-card-inteligente-media-salarial", "b", "")' class="cro-button-open-media-salarial-card-inteligente-novo-ecomm">
                                        <svg width="30" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7.5" y="8" width="15" height="15" rx="7.5" stroke="var(--cro-buttom-open-media-salarial)"/><path d="M14.5 19.5v-5.3h1v5.3h-1Zm.5-6.3c-.2 0-.3 0-.5-.2a.6.6 0 0 1-.2-.4l.2-.5.5-.2c.2 0 .3 0 .5.2l.1.4-.1.5-.5.2Z" fill="var(--cro-buttom-open-media-salarial)"/></svg>
                                    </button>
                                </div>`,
        salaries: [
            {
                salary: 4411.43,
                description: 'Administrador de Empresas'
            },
            {
                salary: 5122.56,
                description: 'Gerente Administrativo'
            },
            {
                salary: 4535.29,
                description: 'Administrador de Imóveis'
            },
            {
                salary: 4535.29,
                description: 'Administrador de Bens'
            },
        ]
    },
    "pedagogia": {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-novo-ecomm">Eduque o futuro e lidere a transformação com esse curso.</p>`,
        averageSalary: /*html*/ `<div class="cro-container-media-salarial-card-inteligente-novo-ecomm">
                                    <span class="cro-media-salarial-card-inteligente-novo-ecomm">Média salarial: ${formatter.format(2800.00)}</span>
                                    <button onclick='newFireGA("anhanguera", "card:tooltip", "card:clique:tooltip", "card:tooltip:media-salarial", "teste-card-inteligente-media-salarial", "b", "")' class="cro-button-open-media-salarial-card-inteligente-novo-ecomm">
                                        <svg width="30" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7.5" y="8" width="15" height="15" rx="7.5" stroke="var(--cro-buttom-open-media-salarial)"/><path d="M14.5 19.5v-5.3h1v5.3h-1Zm.5-6.3c-.2 0-.3 0-.5-.2a.6.6 0 0 1-.2-.4l.2-.5.5-.2c.2 0 .3 0 .5.2l.1.4-.1.5-.5.2Z" fill="var(--cro-buttom-open-media-salarial)"/></svg>
                                    </button>
                                </div>`,
        salaries: [
            {
                salary: 4800.00,
                description: 'Coordenador Pedagógico'
            },
            {
                salary: 3500.00,
                description: 'Orientador Educacional'
            },
            {
                salary: 3800.00,
                description: 'Supervisor Escolar'
            },
            {
                salary: 4500.00,
                description: 'Psicopedagogo'
            },
        ]
    },
    "análise e desenvolvimento de sistemas": {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-novo-ecomm">Para quem gosta de inovar e liderar projetos tecnológicos.</p>`,
        averageSalary: /*html*/ `<div class="cro-container-media-salarial-card-inteligente-novo-ecomm">
                                    <span class="cro-media-salarial-card-inteligente-novo-ecomm">Média salarial: ${formatter.format(5800.00)}</span>
                                        <button onclick='newFireGA("anhanguera", "card:tooltip", "card:clique:tooltip", "card:tooltip:media-salarial", "teste-card-inteligente-media-salarial", "b", "")' class="cro-button-open-media-salarial-card-inteligente-novo-ecomm">
                                            <svg width="30" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7.5" y="8" width="15" height="15" rx="7.5" stroke="var(--cro-buttom-open-media-salarial)"/><path d="M14.5 19.5v-5.3h1v5.3h-1Zm.5-6.3c-.2 0-.3 0-.5-.2a.6.6 0 0 1-.2-.4l.2-.5.5-.2c.2 0 .3 0 .5.2l.1.4-.1.5-.5.2Z" fill="var(--cro-buttom-open-media-salarial)"/></svg>
                                        </button>
                                    </div>`,
        salaries: [
            {
                salary: 8500.00,
                description: 'Desenvolvedor de Software'
            },
            {
                salary: 7500.00,
                description: 'Analista de Sistemas'
            },
            {
                salary: 9000.00,
                description: 'Engenheiro de Software'
            },
            {
                salary: 9000.00,
                description: 'Arquiteto de Soluções'
            },
        ]
    },
    "gestão de recursos humanos": {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-novo-ecomm">Gerencie equipes e otimize processos com esse curso.</p>`,
        averageSalary: /*html*/ `<div class="cro-container-media-salarial-card-inteligente-novo-ecomm">
                                    <span class="cro-media-salarial-card-inteligente-novo-ecomm">Média salarial: ${formatter.format(3500.00)}</span>
                                    <button onclick='newFireGA("anhanguera", "card:tooltip", "card:clique:tooltip", "card:tooltip:media-salarial", "teste-card-inteligente-media-salarial", "b", "")' class="cro-button-open-media-salarial-card-inteligente-novo-ecomm">
                                        <svg width="30" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7.5" y="8" width="15" height="15" rx="7.5" stroke="var(--cro-buttom-open-media-salarial)"/><path d="M14.5 19.5v-5.3h1v5.3h-1Zm.5-6.3c-.2 0-.3 0-.5-.2a.6.6 0 0 1-.2-.4l.2-.5.5-.2c.2 0 .3 0 .5.2l.1.4-.1.5-.5.2Z" fill="var(--cro-buttom-open-media-salarial)"/></svg>
                                    </button>
                                </div>`,
        salaries: [
            {
                salary: 5800.00,
                description: 'Analista de Recursos Humanos'
            },
            {
                salary: 9000.00,
                description: 'Coordenador de Recursos Humanos'
            },
            {
                salary: 9500.00,
                description: 'Gerente de Recursos Humanos'
            },
            {
                salary: 8000.00,
                description: 'Business Partner de Recursos Humanos'
            },
        ]
    },
    "enfermagem": {
        paragraph: /*html*/ `<p class="cro-paragraph-card-inteligente-novo-ecomm">Para quem deseja cuidar de pessoas e liderar na saúde.</p>`,
        averageSalary: /*html*/ `<div class="cro-container-media-salarial-card-inteligente-novo-ecomm">
                                    <span class="cro-media-salarial-card-inteligente-novo-ecomm">Média salarial: ${formatter.format(3500.00)}</span>
                                    <button onclick='newFireGA("anhanguera", "card:tooltip", "card:clique:tooltip", "card:tooltip:media-salarial", "teste-card-inteligente-media-salarial", "b", "")' class="cro-button-open-media-salarial-card-inteligente-novo-ecomm">
                                        <svg width="30" height="31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7.5" y="8" width="15" height="15" rx="7.5" stroke="var(--cro-buttom-open-media-salarial)"/><path d="M14.5 19.5v-5.3h1v5.3h-1Zm.5-6.3c-.2 0-.3 0-.5-.2a.6.6 0 0 1-.2-.4l.2-.5.5-.2c.2 0 .3 0 .5.2l.1.4-.1.5-.5.2Z" fill="var(--cro-buttom-open-media-salarial)"/></svg>
                                    </button>
                                </div>`,
        salaries: [
            {
                salary: 7500.00,
                description: 'Enfermeiro Chefe'
            },
            {
                salary: 5800.00,
                description: 'Enfermeiro de UTI'
            },
            {
                salary: 4500.00,
                description: 'Enfermeiro Auditor'
            },
            {
                salary: 7800.00,
                description: 'Coordenador de Enfermagem'
            },
        ]
    }        
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyModificationCardInteligent(containerTopCourses) {
    if (!containerTopCourses) {
        return;
    }

    const title = containerTopCourses.querySelector('div > div > h3');
    const subTitle = containerTopCourses.querySelector('div > div > p');

    title.style.fontSize = "32px";
    subTitle.style.fontSize = "16px";

    if (window.screen.width > 768) {
        title.textContent = "Os Cursos Queridinhos dos alunos";
        subTitle.textContent = "Valores exibidos de acordo com a unidade selecionada";
    } else {
        title.textContent = "Top 10 Cursos";
        subTitle.textContent = "Os cursos favoritos dos nossos alunos";
    }

    const containerCards = containerTopCourses.querySelector('[data-testid="slider-content"] > .slick-initialized');

    if (containerCards) {
        const track = containerCards.querySelector('.slick-list > .slick-track');

        if (track) {
            const slides = track.querySelectorAll('.slick-slide');

            if (slides) {
                slides?.forEach((card, index) => {
                    const containerTitle = card.querySelector('div > .product-card');
                    const courseName = containerTitle?.querySelector('div > h3');
                    const courseType = containerTitle?.querySelector('div > p');
                    const containerModality = card.querySelector('.product-card-ul');
                    const containerShifts = card.querySelector('[data-testid="course-details-undefined"]');
                    const shifts = containerShifts?.querySelector('div:nth-of-type(2) > article').textContent;

                    const key = courseName?.textContent.toLowerCase();
                    
                    if (window.screen.width > 768){
                        card.style.setProperty("min-width", "327px", "important");
                        card.style.setProperty("max-width", "327px", "important");
                    } else {
                        card.style.minWidth ="inherit";
                        card.style.maxWidth = "inherit";
                    }

                    if (courseName && courseType) {
                        courseName.style.fontSize = "14px";
                        courseType.style.fontWeight = "500";
                    }

                    if(containerModality) {
                        const btnModality = containerModality.querySelectorAll('.product-card-li > button');

                        if (btnModality) {
                            btnModality.forEach(btn => {
                                btn.style.padding = "8px";
                                btn.style.fontSize = "14px";
                            })
                        }
                    }

                    if (newContentCard[key]) {
                        if (!containerTitle.querySelector('.cro-paragraph-card-inteligente-novo-ecomm')) {
                            containerTitle.querySelector('div').insertAdjacentHTML('afterend', newContentCard[key].paragraph)
                            containerTitle.querySelector('.cro-paragraph-card-inteligente-novo-ecomm').insertAdjacentHTML('afterend', newContentCard[key].averageSalary)
                            containerShifts.querySelector('div:nth-of-type(2) > article').style.fontSize = "12px";
                            containerShifts.querySelector('div:nth-of-type(2) > p').style.fontWeight = "400";
                        }
                    }
                });
            }
        }
    }

    const croModalOverlay = document.getElementById('cro-modal-overlay');
    const croModal = document.getElementById('cro-modal');
    const croCloseModal = document.getElementById('cro-close-modal');
    const croButtonModalGalery = document.querySelectorAll('.cro-button-open-media-salarial-card-inteligente-novo-ecomm');

    function bloquearScroll(event) {
        event.preventDefault();
    }

    function desabilitarScroll() {
        window.addEventListener('wheel', bloquearScroll, { passive: false });
        window.addEventListener('touchmove', bloquearScroll, { passive: false });
        document.documentElement.style.overflow = "hidden";
    }

    function habilitarScroll() {
        if (croModalOverlay.classList.contains('cro-apply-animation-overlay') && croModal.classList.contains('cro-apply-animation-modal')) {
            croModalOverlay.classList.remove('cro-apply-animation-overlay');
            croModal.classList.remove('cro-apply-animation-modal');
            croModalOverlay.classList.add('cro-remove-animation-overlay');
            croModal.classList.add('cro-remove-animation-modal');
        } else {
            croModalOverlay.classList.add('cro-remove-animation-overlay');
            croModal.classList.add('cro-remove-animation-modal');
        }

        setTimeout(() => {
            croModalOverlay.style.display = 'none';
        }, 350);

        window.removeEventListener('wheel', bloquearScroll);
        window.removeEventListener('touchmove', bloquearScroll);
        document.documentElement.style.overflow = "inherit";
    }

    croButtonModalGalery?.forEach(item => {
        item.addEventListener('click', (event) => {

            const card = event.target.closest('.product-card');
            const courseNameElement = card?.querySelector('h3');

            if (!courseNameElement) return;

            let cn = courseNameElement.textContent;
            const lowerCourseName = courseNameElement.textContent.toLowerCase();

            if (!newContentCard[lowerCourseName]) return;

            const courseCardsMobile = document.querySelectorAll('.mySwiper-modal > .swiper-wrapper > .swiper-slide');
            const courseCardsDesk = document.querySelectorAll('.cro-hide-container-cards-cardInteligenteNovoEcomm > .cro-box-carousel-modal-cardInteligenteNovoEcomm');
            const titleModalLocal = document.querySelector('.cro-cta-text-modal-cardInteligenteNovoEcomm');

            titleModalLocal.textContent = `Salários dos Profissionais de ${cn}:`;

            if (courseCardsMobile) {
                courseCardsMobile.forEach((item, index) => {
                    item.querySelector('.cro-salary-cardInteligenteNovoEcomm').textContent = formatter.format(newContentCard[lowerCourseName].salaries[index].salary);
                    item.querySelector('.cro-position-cardInteligenteNovoEcomm').textContent = newContentCard[lowerCourseName].salaries[index].description;
                })
            }

            if (courseCardsDesk) {
                courseCardsDesk.forEach((item, index) => {
                    item.querySelector('.cro-salary-cardInteligenteNovoEcomm').textContent = formatter.format(newContentCard[lowerCourseName].salaries[index].salary);
                    item.querySelector('.cro-position-cardInteligenteNovoEcomm').textContent = newContentCard[lowerCourseName].salaries[index].description;
                })
            }

            if (croModalOverlay.classList.contains('cro-remove-animation-overlay') && croModal.classList.contains('cro-remove-animation-modal')) {
                croModalOverlay.classList.remove('cro-remove-animation-overlay');
                croModal.classList.remove('cro-remove-animation-modal');
                croModalOverlay.classList.add('cro-apply-animation-overlay');
                croModal.classList.add('cro-apply-animation-modal');
            } else {
                croModalOverlay.classList.add('cro-apply-animation-overlay');
                croModal.classList.add('cro-apply-animation-modal');
            }

            croModalOverlay.style.display = 'flex';
            desabilitarScroll();
        });
    })
    

    croCloseModal.addEventListener('click', () => {
        habilitarScroll();
    });

    croModalOverlay.addEventListener('click', function (event) {
        if (event.target === croModalOverlay) {
            habilitarScroll();
            newFireGA("anhanguera", "overlay_modal", "overlay:click", "overlay_modal:background:close", "teste-card-inteligente-media-salarial", "b", "");
        }
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyCardInteligentNewEcomm(containerTopCourses) {
    containerTopCourses.classList.add('already-haves-containerTopCourses-cardInteligenteNovoEcomm-personalization');

    applyModificationCardInteligent(containerTopCourses)

    callback.topFiveCardInteligentPersonalized = true;

    const observerNewCardInteligent = new MutationObserver(applyModificationCardInteligent(containerTopCourses));

    observerNewCardInteligent.observe(containerTopCourses, { childList: true, subtree: true });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getStoredTheme() {
    const storageKey = 'persist:root-ecomm-v1';
    const storedData = localStorage.getItem(storageKey);
    const htmlElement = document.documentElement;

    if (!storedData) return;

    try {
        const globalData = JSON.parse(JSON.parse(storedData).global);
        const { isContrastActive, isDarkThemeActive } = globalData;

        if (isContrastActive) {
            htmlElement.classList.remove("cro-dark-mode");
            htmlElement.classList.add("cro-contrast-mode");
        } else {
            if (isDarkThemeActive) {
                htmlElement.classList.remove("cro-contrast-mode");
                htmlElement.classList.add("cro-dark-mode");
            } else {
                htmlElement.classList.remove("cro-dark-mode", "cro-contrast-mode");
            }
        }
    } catch (error) {
        console.error('Erro ao acessar localStorage:', error);
    }
}

function forceUpdateTheme() {
    const croObserveThemeElement = document.querySelector('header');

    const observerTheme = new MutationObserver(() => {
        setTimeout(() => {
            getStoredTheme();
        }, 10);
    });
    observerTheme.observe(croObserveThemeElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadScript(src, callback) {
    if (document.querySelector(`script[src="${src}"]`)) {
        callback();
        return;
    }

    const script = document.createElement('script');

    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadStyle(href) {
    if (document.querySelector(`link[href="${href}"]`)) {
        return;
    }

    const link = document.createElement('link');

    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
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
    console.warn('card inteligente novo ecomm rodando');

    const containerTopCourses = document.getElementsByClassName('5-cursos-em-alta-anhanguera')[0];

    if (!containerTopCourses || document.documentElement.classList.contains('already-haves-cardInteligenteNovoEcomm-personalization')) {
        return;
    }
    document.documentElement.classList.add('already-haves-cardInteligenteNovoEcomm-personalization');

    const styles = /*css*/ `
        :root {
            --cro-primary: #F94D12;
            --cro-paragraph-card: #383838;
            --cro-span-media-salarial: #F94D12;
            --cro-buttom-open-media-salarial: #2B2B2F;
            --cro-bg-modal: #FAFAFA;
            --cro-border-card-modal: #B7B7B7;
            --cro-text-card-modal: #383838;
            --cro-color-close-modal: #2B2B2F;
            --cro-background-dots-carousel-modal: #B7B7B7;
            --cro-color-arrow-modal: #F94D12;
        }
        .cro-dark-mode {
            --cro-primary: #FFAA8E;
            --cro-paragraph-card: #EDEDED;
            --cro-span-media-salarial: #FFAA8E;
            --cro-buttom-open-media-salarial: #FEFEFE;
            --cro-bg-modal: #292929;
            --cro-border-card-modal: #B7B7B7;
            --cro-text-card-modal: #FAFAFA;
            --cro-color-close-modal: #FCFCFC;
            --cro-background-dots-carousel-modal: #B7B7B7;
            --cro-color-arrow-modal: #FFA68C;
        }
        .cro-contrast-mode {
            --cro-primary: #F5FF00;
            --cro-paragraph-card: #FFFFFF;
            --cro-span-media-salarial: #F5FF00;
            --cro-buttom-open-media-salarial: #FFFFFF;
            --cro-bg-modal: #000000;
            --cro-border-card-modal: #FFFFFF;
            --cro-text-card-modal: #FFFFFF;
            --cro-color-close-modal: #F5FF00;
            --cro-background-dots-carousel-modal: #FFFFFF;
            --cro-color-arrow-modal: #F5FF00;
        }

        body {
            -webkit-tap-highlight-color: transparent;
        }

        @keyframes changeBackgroundColor {
            0% {
                backdrop-filter: blur(0);
            }
            100% {
                backdrop-filter: blur(6px);
            }
        }
        @keyframes changeOpacityModal {
            0% {
                transform: translateY(100px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
        @keyframes reverseChangeBackgroundColor {
            0% {
                backdrop-filter: blur(6px);
            }
            100% {
                backdrop-filter: blur(0);
            }
        }
        @keyframes reverseChangeOpacityModal {
            0% {
                transform: translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateY(100px);
                opacity: 0;
            }
        }

        .cro-apply-animation-overlay {
            animation-name: changeBackgroundColor;
            animation-duration: 0.35s;
            animation-iteration-count: inherit;
        }

        .cro-remove-animation-overlay {
            animation-name: reverseChangeBackgroundColor;
            animation-duration: 0.35s;
            animation-iteration-count: inherit;
        }

        .cro-apply-animation-modal {
            animation-name: changeOpacityModal;
            animation-duration: 0.35s;
            animation-iteration-count: inherit;
        }

        .cro-remove-animation-modal {
            animation-name: reverseChangeOpacityModal;
            animation-duration: 0.35s;
            animation-iteration-count: inherit;
        }

        .cro-overlay-cardInteligenteNovoEcomm {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999999;
            will-change: background-color;
            backdrop-filter: blur(6px);
            transition: background easy 0.3s;
        }

        .cro-modal-cardInteligenteNovoEcomm {
            display: flex;
            width: 98%;
            max-width: 320px;
            padding: 28px;
            position: relative;
            align-items: flex-start;
            align-content: flex-start;
            gap: 10px;
            flex-shrink: 0;
            flex-wrap: wrap;
            background-color: var(--cro-bg-modal) !important;
            border-radius: 24px;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
            will-change: transform;
            opacity: 1;
            box-sizing: border-box;
            flex-direction: column;

            .cro-container-title-modal-cardInteligenteNovoEcomm {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 1rem;
            }

            .cro-cta-text-modal-cardInteligenteNovoEcomm {
                color: var(--cro-paragraph-card) !important;
                text-align: center;
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                text-align: left;
                max-width: 236px;
            }
        }

        .cro-button-close-cardInteligenteNovoEcomm {
            display: flex;
            width: 50px;
            height: 50px;
            justify-content: center;
            align-items: center;
            margin-right: -17px;
            cursor: pointer;
        }

        .cro-carousel-modal {
            width: 100%;
            overflow: hidden;
        }

        .cro-box-carousel-modal-cardInteligenteNovoEcomm {
                border: 2px solid var(--cro-border-card-modal);
                border-radius: 24px;
                padding: 24px 4px;
                background-color: var(--cro-bg-modal);
                width: 100%;
                height: 142px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                flex-direction: column;

                h3 {
                    color: var(--cro-text-card-modal);
                    text-align: center;
                    font-family: Montserrat;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }

                .cro-salary-cardInteligenteNovoEcomm {
                    color: var(--cro-primary);
                    font-family: Montserrat;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-bottom: 16px;
                }

                .cro-position-cardInteligenteNovoEcomm {
                    color: var(--cro-text-card-modal);
                    text-align: center;
                    font-family: Montserrat;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            }

        .cro-footer-modal-cardInteligenteNovoEcomm {
            color: var(--cro-paragraph-card);
            text-align: center;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .cro-hide-container-cards-cardInteligenteNovoEcomm {
            display: none;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
        }

        .cro-hide-carousel-cardInteligenteNovoEcomm {
            .cro-hide-carousel-cardInteligenteNovoEcomm, .swiper-container {
                width: 100%;
                display: flow;
                max-width: 265px;
                margin: 0 auto;
            }

            .cro-hide-carousel-cardInteligenteNovoEcomm, .swiper-pagination {
                position: relative !important;
            }

            .cro-hide-carousel-cardInteligenteNovoEcomm, .swiper-pagination-bullet {
                width: 16px !important;
                height: 16px !important;
                background-color: var(--cro-background-dots-carousel-modal) !important;
            }

            .cro-hide-carousel-cardInteligenteNovoEcomm, .swiper-pagination-bullets {
                margin-top: 30px !important;
            }

            .cro-hide-carousel-cardInteligenteNovoEcomm, .swiper-pagination-bullet-active  {
                background-color: var(--cro-primary) !important;
            }

            .cro-hide-carousel-cardInteligenteNovoEcomm, .swiper-button-next, .swiper-button-prev {
                position: inherit !important;
                top: auto !important;
                width: auto !important;
                color: var(--cro-primary) !important;
                font-weight: bold !important;
                --swiper-navigation-size: 25px !important;
            }

            .cro-hide-carousel-cardInteligenteNovoEcomm, .cro-container-navigation-cardInteligenteNovoEcomm {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-top: 35px;
                margin-left: -7px;
            }
        }

        .cro-paragraph-card-inteligente-novo-ecomm {
            color: var(--cro-paragraph-card);
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            transition: all 0.1s;
        }

        .cro-container-media-salarial-card-inteligente-novo-ecomm {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .cro-container-media-salarial-card-inteligente-novo-ecomm, .cro-media-salarial-card-inteligente-novo-ecomm {
                color: var(--cro-span-media-salarial);
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                transition: all 0.1s;
            }

            .cro-container-media-salarial-card-inteligente-novo-ecomm, .cro-button-open-media-salarial-card-inteligente-novo-ecomm {
                all: unset;
                width: 30px;
                height: 30px;
                transition: all 0.1s;
            }

            .cro-container-media-salarial-card-inteligente-novo-ecomm, .cro-button-open-media-salarial-card-inteligente-novo-ecomm:hover {
                cursor: pointer;
                background-color: transparent;
            }
        }

         @media (min-width: 768px) {
            .cro-hide-carousel-cardInteligenteNovoEcomm {
                display: none;
            }

            .cro-hide-container-cards-cardInteligenteNovoEcomm {
                display: flex;
            }

            .cro-modal-cardInteligenteNovoEcomm {
                width: 98%;
                height: auto;
                max-width: 981px;
                padding: 28px;

                .cro-cta-text-modal-cardInteligenteNovoEcomm {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    max-width: inherit;
                }
            }

            .cro-carousel-modal, .cro-footer-modal-cardInteligenteNovoEcomm {
                text-align: left;
                margin-top: 20px;
            }

            .cro-carousel-modal, .cro-box-carousel-modal-cardInteligenteNovoEcomm {
                width: 218px;
                max-height: 124px;
            }

            .cro-container-navigation-carousel-modal-cardInteligenteNovoEcomm {
                margin-top: 35px !important;
            }

            .cro-box-carousel-modal-cardInteligenteNovoEcomm {
                p {
                    margin-top: 15px !important;
                    font-size: 20px !important;
                }
            }
        }

        @media (min-width: 768px) and (max-width: 1000px) {
            .cro-center-grid {
                display: flex;
                justify-content: center;
            }

            .cro-modal-cardInteligenteNovoEcomm {
                max-width: 507px;
            }

            .cro-hide-container-cards-cardInteligenteNovoEcomm {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
            }
        }
    `;

    if (!document.documentElement.classList.contains('already-haves-addStyles-card-inteligente-novo-ecomm')) {
        addStyles(styles);
    }
    document.documentElement.classList.add('already-haves-addStyles-card-inteligente-novo-ecomm');

    
    document.body.insertAdjacentHTML('afterbegin', modalTestHTML);

    loadStyle("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");
    loadScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", () => {
        new Swiper('.mySwiper-modal', {
            loop: false,
            slidesPerView: 1.29,
            spaceBetween: 15,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

    });

    const handleResize = debounce(() => applyModificationCardInteligent(containerTopCourses), 200);
    window.addEventListener('resize', handleResize);
    
    applyModificationCardInteligent(containerTopCourses);
    getStoredTheme();
    forceUpdateTheme();

    const observerTopFive = new MutationObserver(() => {
        if (containerTopCourses && !containerTopCourses.classList.contains('already-haves-containerTopCourses-cardInteligenteNovoEcomm-personalization')) {
            modifyCardInteligentNewEcomm(containerTopCourses);
        }

        if (callback.topFiveCardInteligentPersonalized) {
            observerTopFive.disconnect()
        }
    });
    observerTopFive.observe(containerTopCourses, { childList: true, subtree: true });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    startCroPersonalization();
})
startCroPersonalization();