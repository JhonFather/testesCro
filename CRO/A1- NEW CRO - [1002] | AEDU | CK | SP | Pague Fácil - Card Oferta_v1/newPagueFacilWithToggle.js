let toggleStatus = false;

function addStylesIfNeeded() {
    const styles = /*css*/ `
        :root {
            --cro-primary: #F4511E;
            --cro-text: #2B2B2F;
            --cro-logo-pague-facil: #5DA83C;
            --cro-line-logo-pague-facil: #FCFCFC;
            --cro-bg-switch: #DBDBDB;
        }
        .cro-dark-mode {
            --cro-primary: #FFAA8E;
            --cro-text: #FAFAFA;
            --cro-logo-pague-facil: #CCF5BA;
            --cro-line-logo-pague-facil: #000000;
            --cro-bg-switch: #b7b7b7;
        }
        .cro-contrast-mode {
            --cro-primary: #F5FF00;
            --cro-text: #FFFFFF;
            --cro-logo-pague-facil: #F5FF00;
            --cro-line-logo-pague-facil: #000000;
            --cro-bg-switch: #b7b7b7;
        }

        .cro-body-teste-pague-facil {
            position: absolute;
            bottom: 1rem;
            width: -webkit-fill-available;
        }

        .cro-dividerr {
            margin: 24px 0px;
            height: 1px;
            background-color: rgb(183, 183, 183);
            width: 100%;
        }

        .cro-oferta-pague-facil {
            font-weight: bold;
            color: var(--cro-primary);
            margin-bottom: 10px;
        }

        .cro-container-pague-facil {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 19px;

            span {
                color: var(--cro-text);
            }
        }

        .cro-toggle-container-pague-facil {
            all: unset;
            width: 32.084px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-color: var(--cro-bg-switch);
            border-radius: 12px;
            position: relative;
            cursor: pointer;
            margin-right: 8px;
            padding: 1.337px;
        }

        .cro-toggle-container-pague-facil.active {
            justify-content: flex-end;

            .cro-toggle-switch-pague-facil {
                background-color: var(--cro-primary);
            }
        }

        .cro-toggle-switch-pague-facil {
            width: 17.326px;
            height: 17.326px;
            background-color: #808080;
            border-radius: 50%;
        }

        @media (max-width: 768px) {
            .cro-body-teste-pague-facil {
                bottom: 0;
            }
        }
    `;

    if (!document.head.querySelector('#cro-styles-pague-facil')) {
        const css = document.createElement("style");
        css.id = "cro-styles-pague-facil";
        css.type = "text/css";
        css.textContent = styles;
        document.head.insertAdjacentElement("afterbegin", css);
    }
}

function applyCroToggle() {
    const buttonVisualizarMensalidades = document.querySelector('[data-testid="payment-info-button"]');
    const cardOffer = document.querySelector('[data-testid="offer-result-component"]');
    cardOffer.style.position = "relative";
    if (window.screen.width > 768) {
        cardOffer.style.setProperty('padding-bottom', '100px', 'important');
    }

    if (!buttonVisualizarMensalidades) return;

    const bodyCroTesteHTML = /*html*/ `
        <div class="cro-body-teste-pague-facil">
            <div class="cro-divider"></div>
            <p class="cro-oferta-pague-facil">Oferta imperdível: Ative agora Pague Fácil por R$ 59,00!</p>
            <div class="cro-container-pague-facil">
                <button onclick='newFireGA("anhanguera", "oferta:toggle", "oferta:clique:toggle", "oferta:toggle:parcelado-com-pague_facil", "teste-toggle-pague-facil", "b", "")' class="cro-toggle-container-pague-facil">
                    <div class="cro-toggle-switch-pague-facil"></div>
                </button>
                <span style="height: 17px !important">Parcelado com <b>Pague Fácil</b></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect x=".1" y="23.5" width="23" height="23" rx="11.5" transform="rotate(-90 0 23.5)" fill="var(--cro-logo-pague-facil)"/><path d="M11.8 10.9a.3.3 0 0 1 0 .2l-4.5 4.2a.3.3 0 0 0 .1.6.4.4 0 0 0 .4-.1l1.3-1.2a.3.3 0 0 1 .4 0l.1.3v.2l-1.3 1.2a1 1 0 0 1-.7.3 1 1 0 0 1-.8-.4 1 1 0 0 1 0-1.4l4.4-4.1.2-.1h.2l.2.1v.2Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M10.6 15.8v.2l-.8.7a1 1 0 0 1-1.7-1.1l.2-.4a.4.4 0 0 1 .6.3l-.1.2a.4.4 0 0 0 0 .4.4.4 0 0 0 .3.2.4.4 0 0 0 .2 0l.7-.8a.4.4 0 0 1 .6.3Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M12 16.3v.2l-.7.7a1 1 0 0 1-1.6 0 1 1 0 0 1 0-1.5.4.4 0 0 1 .5 0 .3.3 0 0 1 0 .5.4.4 0 0 0 0 .4.4.4 0 0 0 .2.2.4.4 0 0 0 .4 0l.7-.8a.4.4 0 0 1 .6.3Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M13.4 17a.3.3 0 0 1-.1.2l-.5.5a1 1 0 0 1-1.2.2 1 1 0 0 1-.5-.5 1 1 0 0 1 .2-1.1.3.3 0 0 1 .4-.1.3.3 0 0 1 .2.2.3.3 0 0 1-.1.3.3.3 0 0 0 0 .5.4.4 0 0 0 .5 0l.5-.5a.3.3 0 0 1 .4 0 .3.3 0 0 1 .2.3Zm-6-1.9-.1.2a.3.3 0 0 1-.4.1l-.2-.1c-.1-.2-.6-.8-1-.8l-.2-.1a.3.3 0 0 1 .2-.6c.4 0 .8.2 1.2.6l.4.6v.1ZM14 11v.3c-.3.4-1 .4-1.2.5-.1 0-1.2 0-2.4-1.5a.3.3 0 0 1 0-.3.3.3 0 0 1 .2-.2.3.3 0 0 1 .4.1c.9 1.2 1.7 1.2 1.8 1.2l.5-.1v-.1l-.6-.7-.4-.6c-.3-.6-.9-.8-1.1-.9a3.6 3.6 0 0 0-3.3.7c-.8.7-1.9.7-2.2.8a.3.3 0 0 1-.2-.1.3.3 0 0 1-.1-.3v-.2l.3-.1c.2 0 1.1 0 1.7-.6.3-.3.7-.5 1.1-.6a4.3 4.3 0 0 1 2.8-.2c.3 0 1.1.3 1.6 1.2l.4.5.5.7.2.5Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M14.5 8.5v.1s-.6 1-1.8 1.2a.3.3 0 0 1-.3 0 .3.3 0 0 1 .2-.7c.9 0 1.3-.7 1.3-.8a.3.3 0 0 1 .4-.1.3.3 0 0 1 .2.3Zm3.8 3.7-.1.3-1.1 1a.3.3 0 0 1-.6 0 .3.3 0 0 1 .1-.4l1.1-1a.3.3 0 0 1 .6.1Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M17.6 14.2a1 1 0 0 1-1.7.6l-.4-.4a1 1 0 1 1 1.3-1.4l.5.5a1 1 0 0 1 .3.7Zm-1.8-.5a.3.3 0 0 0 .1.2l.5.5a.3.3 0 0 0 .4-.5l-.4-.4a.3.3 0 0 0-.6.2Z" fill="var()"/><path d="M16.9 15a1 1 0 0 1-1.7.8L14 14.7a1 1 0 1 1 1.4-1.4l1.2 1a1 1 0 0 1 .3.8Zm-2.5-1a.3.3 0 0 0 .1.2l1.1 1.1a.3.3 0 0 0 .6-.3l-.1-.1-1.1-1.2a.3.3 0 0 0-.6.3Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M15.9 16c0 .2 0 .4-.2.6a1 1 0 0 1-.4.4h-.5a.9.9 0 0 1-.5-.3l-1-1-.2-.4a1 1 0 0 1 .2-1c0-.2.2-.3.3-.3a.9.9 0 0 1 1 .2l1 1.1.2.4.1.3Zm-2.2-1a.3.3 0 0 0 0 .1l1 1.2h.2a.3.3 0 0 0 .3 0 .3.3 0 0 0 0-.3.3.3 0 0 0 0-.2l-1-1.1H14c0-.1-.1-.1-.2 0h-.1v.2Z" fill="var(--cro-line-logo-pague-facil)"/><path d="M14.9 16.7a1 1 0 0 1-1.3 1 1 1 0 0 1-.5-.3l-.6-.6a1 1 0 0 1 1.4-1.4l.6.6a1 1 0 0 1 .4.7Zm-2-.6a.4.4 0 0 0 0 .3l.7.6a.4.4 0 0 0 .6-.3l-.1-.3-.6-.6a.4.4 0 0 0-.7.3Zm7.3-5a1.5 1.5 0 0 1-1.9 1.5c-.3 0-.5-.2-.7-.4L14 8.7a1.6 1.6 0 1 1 2.2-2.2l3.6 3.5a1.5 1.5 0 0 1 .4 1.1Zm-6-3.5a.9.9 0 0 0 .3.6l3.5 3.5a.9.9 0 0 0 1.3-1.2l-3.6-3.6a.9.9 0 0 0-1.5.7ZM6.1 9v5a1.6 1.6 0 0 1-2.7 1c-.3-.2-.4-.6-.4-1V9A1.6 1.6 0 0 1 5.6 8c.3.3.5.7.5 1Zm-2.5 5a.9.9 0 0 0 1.5.6l.3-.6V9A.9.9 0 0 0 4 8.4c-.2.2-.3.4-.3.7v5Z" fill="var(--cro-line-logo-pague-facil)"/></svg>
            </div>
        </div>
    `;

    if (!document.querySelector('cro-body-teste-pague-facil')) {
        if (buttonVisualizarMensalidades) {
            if (window.screen.width < 768) {
                document.querySelector('[data-testid="offer-result-component"] > div > div').insertAdjacentHTML('beforeend', bodyCroTesteHTML);
            } else {
                cardOffer.insertAdjacentHTML('beforeend', bodyCroTesteHTML);
            }

            document.querySelector('.cro-toggle-container-pague-facil').addEventListener('click', function () {
                document.querySelector('[data-testid="payment-info-button"]').click();
            });
        }
    }
    document.documentElement.classList.add('already-haves-toggle-pague-facil');
}

function observeModal() {
    const observer = new MutationObserver(() => {
        const modal = document.querySelector('[data-testid="content-modal-undefined"]');

        if (!modal) return;
        
        if (!modal.classList.contains('cro-modal-open-pague-facil')) {
            if (modal) {
                const switchSlider = modal.querySelector('[data-testid="switch-slider"]');
                
                if (switchSlider) {
                    switchSlider.click();
                }
            }
        }
        modal.classList.add('cro-modal-open-pague-facil')
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function hideToggleAndAddEventInButtonEasyPayment() {   
    const observer = new MutationObserver(() => {
        const containerSwitch = document.querySelector('[data-testid="easy-pay-switch-content"]');
        const btnEazyPayment = document.querySelector('[data-testid="easy-pay-button"]');

        if (containerSwitch) {
            containerSwitch.style.display = "none";
        }
        
        if (btnEazyPayment) {
            btnEazyPayment.addEventListener("click", function () {

                if (btnEazyPayment.querySelector('span').textContent === 'Continuar sem Pague Fácil') {
                    toggleStatus = false;
                    if (document.body.classList.contains('cro-toggle-true')) {
                        document.body.classList.remove('cro-toggle-true');
                    }
                } else {
                    toggleStatus = true;
                    document.body.classList.add('cro-toggle-true');
                }
            });
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function verifyToggleTrue() {

    if (window.screen.width > 768) {
        const isPagueFacilDesk = document.querySelector('[data-testid="offer-result-component"] > div:nth-of-type(8)');

        if (isPagueFacilDesk === null) {
            if (document.querySelector('.cro-toggle-container-pague-facil')) {
                if (document.querySelector('.cro-toggle-container-pague-facil').classList.contains('active')) {
                    document.querySelector('.cro-toggle-container-pague-facil').classList.remove('active');
                }
            }
        }

        if (isPagueFacilDesk) {
            if (isPagueFacilDesk.querySelector('p').textContent === 'Parcelado com') {
                toggleStatus = true;
                document.querySelector('.cro-toggle-container-pague-facil').classList.add('active');
            }
        }
    } else {
        const isPagueFacilMobile = document.querySelector('[data-testid="offer-result-component"] > div > div > div:nth-of-type(7)');

        if (isPagueFacilMobile === null) {
            if (document.querySelector('.cro-toggle-container-pague-facil')) {
                if (document.querySelector('.cro-toggle-container-pague-facil').classList.contains('active')) {
                    document.querySelector('.cro-toggle-container-pague-facil').classList.remove('active');
                }
            }
        }

        if (isPagueFacilMobile) {
            if (isPagueFacilMobile.querySelector('p').textContent === 'Parcelado com') {
                toggleStatus = true;
                document.querySelector('.cro-toggle-container-pague-facil').classList.add('active');
            }
        }
    }
}

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

function handleChangeToggleStatus() {
    const observerTheme = new MutationObserver(() => {
        const offerMobile = document.querySelector('[data-testid="offer-result-component"] > div > div > div:nth-of-type(7)');
        const isPagueFacilDesk = document.querySelector('[data-testid="offer-result-component"] > div:nth-of-type(8)');

        if (document.body.classList.contains('cro-toggle-true')) {
            document.querySelector('.cro-toggle-container-pague-facil').classList.add('active');
        } else {
            if (document.querySelector('.cro-toggle-container-pague-facil')) {
                document.querySelector('.cro-toggle-container-pague-facil').classList.remove('active');
            }
        }
        
        if (window.screen.width > 768) {
            if (isPagueFacilDesk) {
                if (isPagueFacilDesk.querySelector('p').textContent === 'Parcelado com') {
                    document.querySelector('[data-testid="offer-result-component"] > div:nth-of-type(8)').style.display = "none";
                }
            }
        } else {
            if (offerMobile) {
                if (offerMobile.querySelector('p').textContent === 'Parcelado com') {
                    offerMobile.style.display = "none";
                }
            }
        }
    });
    observerTheme.observe(document.body, { childList: true, subtree: true });
}

function forceApplyTest() {
    const observerTheme = new MutationObserver(() => {
        setTimeout(() => {
            if (!document.documentElement.classList.contains('already-haves-toggle-pague-facil')) {
                if (!document.querySelector('cro-body-teste-pague-facil')) {
                    applyCroToggle();
                }
            }
        }, 100)
    });
    observerTheme.observe(document.body, { childList: true, subtree: true });
}

function startCroTestPagueFacil() {
    console.warn('Teste Pague Fácil rodando');

    if (document.documentElement.classList.contains('already-haves-toggle-pague-facil')) return


    if (window.screen.width < 768) {
        const offerMobile = document.querySelector('[data-testid="offer-result-component"] > div > div');

        document.querySelector('[aria-controls="accordion-control"]').click();

        offerMobile.style.position = "relative";
        offerMobile.style.paddingBottom = "80px";

        setTimeout(() => {
            if (!document.querySelector('cro-body-teste-pague-facil')) {
                applyCroToggle();
            }
        }, 100)

    } else {
        if (!document.querySelector('cro-body-teste-pague-facil')) {
            applyCroToggle();
        }
    }

    addStylesIfNeeded();
    observeModal();
    hideToggleAndAddEventInButtonEasyPayment();
    getStoredTheme();
    forceUpdateTheme();
    verifyToggleTrue();
    handleChangeToggleStatus();
    forceApplyTest();
}

document.addEventListener('DOMContentLoaded', startCroTestPagueFacil);
startCroTestPagueFacil();