function addStylesIfNeeded() {
    const styles = /*css*/ `
        :root {
            --cro-primary: #F4511E;
            --cro-logo: #F4511E;
            --cro-bg: #FAFAFA;
            --cro-text: #2B2B2F;
        }
        .cro-dark-mode {
            --cro-primary: #FFAA8E;
            --cro-logo: #FFFFFF;
            --cro-bg: #292929;
            --cro-text: #FCFCFC;
        }
        .cro-contrast-mode {
            --cro-primary: #F5FF00;
            --cro-logo: #FFFFFF;
            --cro-bg: #000000;
            --cro-text: #FFFFFF;
        }

        body {
            -webkit-tap-highlight-color: transparent;
        }

         @keyframes showNewPositionSearchBar {
            0% {
                transform: translateX(335px);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes reverseShowNewPositionSearchBar {
            0% {
                transform: translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateX(335px);
                opacity: 0;
            }
        }

        .cro-apply-show-new-position-search-bar  {
            animation-name: showNewPositionSearchBar;
            animation-duration: 0.35s;
            animation-iteration-count: inherit;
        }

        .cro-remove-show-new-position-search-bar {
            animation-name: reverseShowNewPositionSearchBar;
            animation-duration: 0.35s;
            animation-iteration-count: inherit;
        }

        .cro-search-icon-test-new-position-search-bar {
            all: unset;
            cursor: pointer;
            display: flex;
            align-items: center;
            position: absolute;
            right: 0;
        }

        .cro-body-test-new-position-search-bar {
            position: absolute;
            background-color: var(--cro-bg);
            display: flex;
            align-items: center;
            justify-content: space-between;
            right: 0;
            gap: 10px;
        }

        .cro-close-button-test-new-position-search-bar {
            all: unset;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cro-force-apply-body-test {
            padding-right: 34px !important;
            position: relative !important;
            align-items: center !important;
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

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function applyTest() {

    function applyChanges() {
        const titleSearchBar = document.querySelector('[data-testid="title-section-search"]');
        const searchBar = document.querySelector('[data-testid="courses-list"]');

        if (titleSearchBar) {
            titleSearchBar.remove();
        }

        if (window.screen.width > 992) {
            const destinoSearchBarDesk = document.querySelector('[data-testid="container-link"]');
            destinoSearchBarDesk.insertAdjacentElement('afterend', searchBar)

            searchBar.style.margin = "0 10px";
        } else {
            const destinoSearchBarMobile = document.querySelector('[data-testid="second-level-mobile-component"]');

            const searchIcon = /*html*/ `
            <button class="cro-search-icon-test-new-position-search-bar">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.8 18.6-3-2.9a7.2 7.2 0 1 0-1.1 1.1l3 3a.8.8 0 0 0 1 0 .8.8 0 0 0 0-1.2Zm-8.6-1.8a5.6 5.6 0 1 1 0-11.2 5.6 5.6 0 0 1 0 11.2Z" fill="var(--cro-text)"/></svg>
            </button>
        `;
            const bodyNewPositionSearchBarHTML = /*html*/ `
            <div class="cro-body-test-new-position-search-bar">
                <div class="cro-content-test-new-position-search-bar"></div>
                <button class="cro-close-button-test-new-position-search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="m13.06 12 4.72-4.72a.75.75 0 0 0-1.06-1.06L12 10.94 7.3 6.22a.75.75 0 1 0-1.07 1.06L10.94 12 6.22 16.7a.75.75 0 0 0 .25 1.23.75.75 0 0 0 .82-.16L12 13.06l4.72 4.72a.75.75 0 1 0 1.06-1.07L13.06 12Z" fill="var(--cro-text)"/></svg>
                </button>
            </div>
        `;

            if (destinoSearchBarMobile.querySelector('[data-testid="content-buttons-mobile"]')) {
                destinoSearchBarMobile.querySelector('[data-testid="content-buttons-mobile"]').classList.add('cro-force-apply-body-test');
                destinoSearchBarMobile.querySelector('[data-testid="content-buttons-mobile"]').insertAdjacentHTML('beforeend', searchIcon);

                destinoSearchBarMobile.insertAdjacentHTML('beforeend', bodyNewPositionSearchBarHTML);
            } else {
                destinoSearchBarMobile.insertAdjacentHTML('afterbegin', searchIcon);
            }

            destinoSearchBarMobile.style.position = "relative";

            document.querySelector('.cro-content-test-new-position-search-bar').insertAdjacentElement('afterend', searchBar);

            searchBar.querySelector('.react-select > div').style.height = "56px";

            const bodyTest = destinoSearchBarMobile.querySelector('.cro-body-test-new-position-search-bar');
            if (bodyTest) {
                bodyTest.style.display = 'none';

                function showSearchBar() {
                    if (bodyTest.classList.contains('cro-remove-show-new-position-search-bar')) {
                        bodyTest.classList.remove('cro-remove-show-new-position-search-bar');
                        bodyTest.classList.add('cro-apply-show-new-position-search-bar');
                    } else {
                        bodyTest.classList.add('cro-apply-show-new-position-search-bar');
                    }

                    bodyTest.style.display = 'flex';
                }

                function closeSearchBar() {
                    if (bodyTest.classList.contains('cro-apply-show-new-position-search-bar')) {
                        bodyTest.classList.remove('cro-apply-show-new-position-search-bar');
                        bodyTest.classList.add('cro-remove-show-new-position-search-bar');
                    } else {
                        bodyTest.classList.add('cro-remove-show-new-position-search-bar');
                    }

                    setTimeout(() => {
                        bodyTest.style.display = 'none';
                    }, 350);
                }

                const buttonSearch = destinoSearchBarMobile.querySelector('.cro-search-icon-test-new-position-search-bar');
                if (buttonSearch) {
                    buttonSearch.addEventListener('click', () => {
                        showSearchBar();
                        newFireGA("anhanguera", "header:button:search", "search:clique:button", "search:button:open_new_search", "teste-nova-posicao-barra-de-pesquisa", "b", "");
                    });
                }

                const closeButton = destinoSearchBarMobile.querySelector('.cro-close-button-test-new-position-search-bar');
                if (closeButton) {
                    closeButton.addEventListener('click', () => {
                        closeSearchBar();
                        newFireGA("anhanguera", "body-test:button:close", "close:clique:button", "close:button:close_new_search", "teste-nova-posicao-barra-de-pesquisa", "b", "");
                    });
                }
            }
        }

    }

    applyChanges();

    const observer = new MutationObserver(() => {
        if (!document.querySelector('header')) {
            applyChanges();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function changeLogo() {
    const logo = document.querySelector('[data-testid="container-link-mobile"]');

    const logoSVG = /*html*/ `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path d="M8.7 19.8c-1.3.5-2.7 1-4 1.8l-.8.8-2 4c-.2.3-.1.4.2.3l1.7-.5 5.6-1.5c.4-.1.7-.4.9-.7l2.9-5.4c.1-.3 0-.4-.3-.3 0 0-2 .6-4.2 1.5ZM27.2 22h.2l.2-.1a.4.4 0 0 0 0-.4l-2.8-5.2a1 1 0 0 0-.4-.4 1 1 0 0 0-.5 0l-5.5 1h-.2a.4.4 0 0 0-.2.4v.2l2.6 4.6c0 .2.2.3.4.4l.5.1 5.7-.5ZM23.5 13.9l-.5-1-1-1.8-1.3-2.4c0-.2-.2-.3-.3-.3h-.5c-3.3.9-6.4 2.3-9.3 4l-1.8 1.4a4 4 0 0 0-.8 1L5.7 19c-.2.3 0 .5.3.3l1.2-.6c2.4-1 5-1.9 7.5-2.6h.1a124.7 124.7 0 0 1 8.7-2 .4.4 0 0 0 0-.3ZM10.5 10.9c1.4-.9 2.8-1.7 4.3-2.4L19.2 7a.5.5 0 0 0 .3-.3.5.5 0 0 0 0-.4l-2.6-4.8c-.5-.9-1.4-.9-1.9 0v.1l-4.8 9c-.2.3 0 .4.3.3ZM31.9 29.5l-3-5.5a1 1 0 0 0-.3-.4 1 1 0 0 0-.4-.2h-.3c-8 .5-16 1.9-23.7 4.1l-3 1a1.3 1.3 0 0 0-1 .8v.2c-.5 1 0 1.6 1 1.6h29.5c1 0 1.6-.7 1.2-1.6Z" fill="var(--cro-logo)"/></svg>
    `;

    if (logo) {
        logo.querySelector('figure').style.display = 'none';
        logo.innerHTML = logoSVG;
        logo.style.margin = '8px 0';
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

function startCroNewPositionBar() {
    console.warn('Teste novo posicionamento da barra de pesquisa rodando.');

    if (document.documentElement.classList.contains('already-haves-nova-posição-barra-de-pesquisa')) return
    document.documentElement.classList.add('already-haves-nova-posição-barra-de-pesquisa');

    addStylesIfNeeded();
    applyTest();
    getStoredTheme();
    forceUpdateTheme();
    changeLogo();
}

document.addEventListener('DOMContentLoaded', startCroNewPositionBar);
startCroNewPositionBar();