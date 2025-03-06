let callback = {
    topFiveSelecionarModalidadePersonalized: false,
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

function applyModificationSelecionarModalidades(containerTopCourses) {
    if (!containerTopCourses) return;

    const containerCards = containerTopCourses.querySelector('[data-testid="slider-content"] > .slick-initialized');

    if (containerCards) {
        const track = containerCards.querySelector('.slick-list > .slick-track');

        if (track) {
            const slides = track.querySelectorAll('.slick-slide');

            if (slides) {
                slides?.forEach((card) => {
                    const containerTitle = card.querySelector('div > .product-card');
                    const courseName = containerTitle?.querySelector('div > h3');
                    const containerModality = card.querySelector('.product-card-ul');

                    const key = courseName?.textContent.toLowerCase();

                    if (window.screen.width > 768) {
                        card.style.setProperty("min-width", "327px", "important");
                        card.style.setProperty("max-width", "327px", "important");
                    } else {
                        card.style.minWidth = "inherit";
                        card.style.maxWidth = "inherit";
                    }

                    if (containerModality) {
                        const btnModality = containerModality.querySelectorAll('.product-card-li > button');

                        if (btnModality) {
                            btnModality.forEach(btn => {
                                btn.style.padding = "8px";
                                btn.style.fontSize = "14px";
                                
                                if (btn.classList.contains('active')) {
                                    btn.style.backgroundColor = "var(--cro-primary)";
                                    btn.style.borderColor = "var(--cro-primary)";
                                    btn.style.color = "var(--cro-text-active)";
                                    btn.style.fontWeight = "500";
                                } else {
                                    btn.style.backgroundColor = "inherit";
                                    btn.style.borderColor = "var(--cro-primary)";
                                    btn.style.color = "var(--cro-text)";
                                    btn.style.fontWeight = "400";
                                }
                            })
                        }

                        if (!containerModality.querySelector('.cro-paragraph-selecionar-modalidades')) {
                            containerModality.insertAdjacentHTML('afterbegin', '<p class="cro-paragraph-selecionar-modalidades">Escolha a modalidade do curso:</p>');
                        }
                    }
                });
            }
        }
    }
}

function modifySelecionarModalidade(containerTopCourses) {
    containerTopCourses.classList.add('already-haves-containerTopCourses-selecionarModalidade-personalization');

    applyModificationSelecionarModalidades(containerTopCourses)

    callback.topFiveSelecionarModalidadePersonalized = true;

    const observerNew = new MutationObserver(applyModificationSelecionarModalidades(containerTopCourses));

    observerNew.observe(containerTopCourses, { childList: true, subtree: true });
}

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

function startCroSelecionarModalidade() {
    console.warn('Teste selecionar modalidade rodando.');

    const containerTopCourses = document.getElementsByClassName('5-cursos-em-alta-anhanguera')[0];

    if (document.documentElement.classList.contains('already-haves-test-selecionar-modalidade')) {
        return;
    }
    document.documentElement.classList.add('already-haves-test-selecionar-modalidade');

    const styles = /*css*/ `
        :root {
            --cro-primary: #F4511E;
            --cro-bg: #FAFAFA;
            --cro-p: #2B2B2F;
            --cro-text: #C52E00;
            --cro-text-active: #FFFFFF;
        }
        .cro-dark-mode {
            --cro-primary: #FFAA8E;
            --cro-bg: #292929;
            --cro-p: #FAFAFA;
            --cro-text: var(--cro-primary);
            --cro-text-active: #000000;
        }
        .cro-contrast-mode {
            --cro-primary: #F5FF00;
            --cro-bg: #000000;
            --cro-p: #FFFFFF;
            --cro-text: var(--cro-primary);;
            --cro-text-active: #000000;
        }

        .cro-paragraph-selecionar-modalidades {
            color: var(--cro-p);
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    `;

    if (!document.documentElement.classList.contains('already-haves-addStyles-selecionar-modalide')) {
        addStyles(styles);
    }
    document.documentElement.classList.add('already-haves-addStyles-selecionar-modalide');

    applyModificationSelecionarModalidades(containerTopCourses);
    getStoredTheme();
    forceUpdateTheme();

    const observerTopFive = new MutationObserver(() => {
        if (containerTopCourses && !containerTopCourses.classList.contains('already-haves-containerTopCourses-selecionarModalidade-personalization')) {
            modifySelecionarModalidade(containerTopCourses);
        }

        if (callback.topFiveSelecionarModalidadePersonalized) {
            observerTopFive.disconnect()
        }
    });
    observerTopFive.observe(containerTopCourses, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
    startCroSelecionarModalidade();
})
startCroSelecionarModalidade();