function addStylesIfNeeded() {
    const styles = /*css*/ `
        :root {
            --cro-primary: #F4511E;
            --cro-bg: #FAFAFA;
            --cro-text: #2B2B2F;
        }
        .cro-dark-mode {
            --cro-primary: #FFAA8E;
            --cro-bg: #292929;
            --cro-text: #FCFCFC;
        }
        .cro-contrast-mode {
            --cro-primary: #F5FF00;
            --cro-bg: #000000;
            --cro-text: #FFFFFF;
        }

        .cro-body-test-new-position-search-bar {
            position: absolute;
            background-color: var(--cro-bg);
            display: flex;
            align-items: center;
            justify-content: space-between;
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

        const bodyNewPositionSearchBarHTML = /*html*/ `
            <div class="cro-body-test-new-position-search-bar">
                <div class="cro-content-test-new-position-search-bar"></div>
                <div class="cro-close-button-test-new-position-search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="m13.06 12 4.72-4.72a.75.75 0 0 0-1.06-1.06L12 10.94 7.3 6.22a.75.75 0 1 0-1.07 1.06L10.94 12 6.22 16.7a.75.75 0 0 0 .25 1.23.75.75 0 0 0 .82-.16L12 13.06l4.72 4.72a.75.75 0 1 0 1.06-1.07L13.06 12Z" fill="var(--cro-text)"/></svg>
                </div>
            </div>
        `;
        
        destinoSearchBarMobile.style.position = "relative";
        destinoSearchBarMobile.insertAdjacentHTML('beforeend', bodyNewPositionSearchBarHTML);
        document.querySelector('.cro-content-test-new-position-search-bar').insertAdjacentElement('afterend', searchBar);
    }
}

function startCroTestPagueFacil() {
    console.warn('Teste novo posicionamento da barra de pesquisa rodando.');
    
    if (document.documentElement.classList.contains('already-haves-nova-posição-barra-de-pesquisa')) return
    document.documentElement.classList.add('already-haves-nova-posição-barra-de-pesquisa');

    addStylesIfNeeded();
    applyTest();

    const handleResize = debounce(() => applyTest, 200);
    window.addEventListener('resize', handleResize);
}

document.addEventListener('DOMContentLoaded', startCroTestPagueFacil);
startCroTestPagueFacil();