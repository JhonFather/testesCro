function croFunction() {
    function crofindTheme() {
        const themeMode = localStorage.getItem("theme");

        const htmlElement = document.documentElement;

        if (themeMode === "darkMode" || themeMode === "contrast") {
            htmlElement.classList.add("dark-mode");
        } else {
            htmlElement.classList.remove("dark-mode");
        }
    }

    const croObservedNextElement = document.getElementById("__next");

    const observer = new MutationObserver(() => {
        crofindTheme();
    });

    const config = {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    };

    observer.observe(croObservedNextElement, config);

    crofindTheme();

    const addStyles = function (styles) {
        const css = document.createElement("style");

        css.type = "text/css";

        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));

            document.head.insertAdjacentElement("afterbegin", css);
        }
    };

    const styles = `
        :root {
            --cro-primary: #FF2800;
            --cro-primary-light: #FF5F37;
            --cro-secondary: #17375C;
            --cro-secondery-0092: #16375C;
            --cro-text-inverse: #FCFCFC;
            --cro-text-0092-h2: #2B2B2F;
            --cro-text-0092-p: #5F5F5F;
            --cro-0092-bg: #FAFAFA;
            --cro-bg: #FAFAFA;
        }

        .dark-mode {
            --cro-primary: #FFA68C;
            --cro-primary-light: #FFCAB9;
            --cro-secondary: #FAFAFA;
            --cro-secondery-0092: #FAFAFA;
            --cro-text-inverse: #292929;
            --cro-text-0092-h2: #FCFCFC;
            --cro-text-0092-p: #FCFCFC;
            --cro-0092-bg: #292929;
            --cro-bg: #3D3D3D;
        }
            
        body {
            -webkit-tap-highlight-color: transparent;
        }

        .cro-header-container {
            display: flex;
            width: 100%;
            height: auto;
            align-items: center;
            border-radius: 24px;
            background: var(--cro-0092-bg);
            gap: 13px;
        }
        
        .cro-header-image-container {
            width: 320px;
            height: 150px;
            border-radius: 24px;
            overflow: hidden;
        }

        .cro-header-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .cro-header-content {
            max-width: 1030px;
            padding: 17px;
        }

        .cro-header-content h2 {
            color: var(--cro-text-0092-h2);
            font-family: 'Montserrat', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 20px;
        }

        .cro-header-content p {
            color: var(--cro-text-0092-p);
            font-family: 'Montserrat', sans-serif;
            font-size: 19px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
        }
        
        .cro-header-content input {
            display: none;
        }
        
        .cro-header-tab__label{
            display: none;
        }
        
        @media (max-width: 768px) {
            .cro-header-container {
                border-radius: 24px;
                flex-direction: column;
                text-align: center;
                max-width: 314px;
                margin: 0 auto;
                gap: 0;
            }
            
            .cro-header-image-container {
                width: 100%;
                height: 99px;
            }
            
            .cro-header-image-container img {
                width: 100%;
                max-width: 320px;
            }
            
            .cro-header-content {
                padding: 20px;
            }
            
            .cro-header-content h2 {
                color: var(--cro-text-0092-h2);
                text-align: center;
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 0;
            }
            
            .cro-header-content p {
                color: var(--cro-text-0092-p);
                text-align: center;
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin: 12px 0;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                display: -webkit-box;
            }
            
            .cro-header-tab__label{
                display: flex;
            }
            
            .cro-header-content input:checked ~ p {
                overflow: visible;
                text-overflow: initial;
                display: block;
                -webkit-line-clamp: none;
                -webkit-box-orient: initial;
            }
            
            .cro-header-tab__label {
                color: var(--cro-secondery-0092);
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
            }
            
            .cro-header-tab__label::after {
                content: url("https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/ChevronIcon.png");
                text-align: center;
                transition: transform 0.35s ease;
                transform: rotate(0deg);
                height: 24px;
            }
            
            .dark-mode .cro-header-tab__label {
                color: var(--cro-secondery-0092);
            }
            
            .dark-mode .cro-header-tab__label::after {
                filter: brightness(0) invert(1);
            }

            .cro-header-content input:checked ~ .cro-header-tab__label::after {
                transform: rotate(180deg);
                transition: transform 0.35s ease;
            }
        }
    `;
    addStyles(styles);


    function changeLocationSearchBar() {
        const contentStep = document.querySelector("#__next > main > section > div > div:nth-child(1)");

        const searchBar = document.querySelector("#__next > main > section > div > div > div.main-content > div:nth-child(2)");

        // const buttonFIlterTypeCourses = document.querySelectorAll("#__next > main > section > div > div > div.main-content > div > ul > div > li > button");

        const divSearchHtml = `<div class="cro-container-search"></div>`;

        contentStep.style.height = 'auto';

        contentStep.style.margin = '32px 0';

        // console.log(buttonFIlterTypeCourses)

        // buttonFIlterTypeCourses.forEach((li) => {
        //     li.style.padding = '17px 10px';
        //     li.style.borderRadius = '24px';
        //     li.style.fontSize = '1rem';
        //     li.style.fontWeight = '500';
        // });

        const headerHTML = `
            <div class="cro-header-container">
                <div class="cro-header-image-container">
                    <img src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg" alt="Imagem ilustrativa">
                </div>
                <div class="cro-header-content">
                    <h2>O que é Graduação?</h2>
                    <input type="checkbox" name="accordion-1" id="croReadMore">
                    <p>A graduação é a etapa subsequente ao ensino médio, marcando o início de uma jornada de aprendizado e desenvolvimento profissional aprofundados.</p>
                    <label for="croReadMore" class="cro-header-tab__label">Veja mais</label>  
                </div>                          
            </div>
        `;


        if (window.screen.width > 768) {

            const searchDestinyDesc = document.querySelector("#__next > main > section > div > div > div.col-filter-side-left");

            searchDestinyDesc.insertAdjacentHTML("afterbegin", divSearchHtml);

            const croSearch = document.querySelector(".cro-container-search");

            croSearch.appendChild(searchBar);

            searchDestinyDesc.style.marginTop = '-10px';

            searchBar.style.marginBottom = '16px';

            const containerFilterCourses = document.querySelector("#__next > main > section > div > div > div.main-content > div:nth-child(1)");

            containerFilterCourses.style.marginBottom = '0';

            const containerCards = document.querySelector("#__next > main > section > div > div > div.main-content > div:nth-child(2)");

            containerCards.style.marginTop = '75px';

            contentStep.innerHTML = headerHTML;

            const h6FilterHTML = document.querySelector("#__next > main > section > div > div > div.col-filter-side-left > div:nth-child(2)");

            h6FilterHTML.style.paddingBottom = '0';

            h6FilterHTML.style.marginBottom = '16px';

            h6FilterHTML.style.paddingLeft = '5px';

        } else {
            const searchDestinyMobi = contentStep;

            searchDestinyMobi.insertAdjacentHTML("afterbegin", divSearchHtml);

            const croSearch = document.querySelector(".cro-container-search");

            croSearch.appendChild(searchBar);

            croSearch.insertAdjacentHTML("beforeend", headerHTML);
        }
    }

    changeLocationSearchBar();
}

croFunction();