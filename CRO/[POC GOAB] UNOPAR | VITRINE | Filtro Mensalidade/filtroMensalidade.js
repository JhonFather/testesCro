function croFunction() {
    function getPriceFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);

        const price = urlParams.get('price');

        return price ? parseFloat(price) : 999;
    }

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
            --cro-primary: #F94D12;
            --cro-primary-light: #FF5F37;
            --cro-secondary: #17375C;
            --cro-secondery-POC-GOAB: #16375C;
            --cro-text-inverse: #FCFCFC;
            --cro-text-POC-GOAB-p: #1D1D1D;
            --cro-text-POC-GOAB-span: #2B2B2F;
            --cro-POC-GOAB-label: #808080;
            --cro-POC-GOAB-border: #B7B7B7;
            --cro-POC-GOAB-bg: #FAFAFA;
            --cro-bg: #FAFAFA;
        }

        .dark-mode {
            --cro-primary: #FFA68C;
            --cro-primary-light: #FFCAB9;
            --cro-secondary: #FAFAFA;
            --cro-secondery-POC-GOAB: #FAFAFA;
            --cro-text-inverse: #292929;
            --cro-text-POC-GOAB-p: #FCFCFC;
            --cro-text-POC-GOAB-span: #FCFCFC;
            --cro-POC-GOAB-label: #FCFCFC;
            --cro-POC-GOAB-border: #FCFCFC;
            --cro-POC-GOAB-bg: #292929;
            --cro-bg: #3D3D3D;
        }

        body {
            -webkit-tap-highlight-color: transparent;
        }

        .cro-filter-monthly-container {
            > p {
                color: var(--cro-text-POC-GOAB-p);
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin-bottom: 16px;
            }

            > button {
                all: unset;
                width: 100%;
                padding: 16px 0;
                color: var(--cro-text-inverse);
                background-color: var(--cro-primary);
                border-radius: 24px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
            
        .cro-filter-monthly-input-container {
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            margin-bottom: 20px;

            > div {
                display: flex;
                flex-direction: column;

                > label {
                    color: var(--cro-POC-GOAB-label);
                    font-family: Montserrat;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }

                > span {
                    border-radius: 24px;
                    border: 1px solid var(--cro-POC-GOAB-border);
                    color: var(--cro-text-POC-GOAB-span);
                    font-family: Montserrat;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    width: 102px;
                    padding: 8px 0;
                    text-align: center;
                    margin-top: 6px;
                    cursor: default;
                }

                > input {
                    width: 100px;
                    padding: 8px 0;
                    color: var(--cro-text-POC-GOAB-span);
                    background-color: var(--cro-POC-GOAB-bg);
                    border: 1px solid var(--cro-POC-GOAB-border);
                    border-radius: 24px;
                    text-align: center;
                    width: 102px;
                    margin-top: 6px;
                    font-family: Montserrat;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            }
        }

        .cro-filter-monthly-slider-container {
            margin-bottom: 20px;

            input[type="range"] {
                -webkit-appearance: none;
                width: 100%;
                height: 8px;
                border-radius: 4px;
                outline: none;
                opacity: 0.7;
                transition: opacity .15s ease-in-out;
                box-shadow: 0px 0px 4px 0px rgba(29, 29, 29, 0.24);
            }

            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background-color: var(--cro-primary);
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            input[type="range"]::-moz-range-thumb {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: var(--cro-primary);
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
        }
  `;

    addStyles(styles);

    const bodyFiltermonthlyHTML = `
        <div class="cro-filter-monthly-container">
            <p>Base do valor mensal das mensalidades.</p>
            <div class="cro-filter-monthly-input-container">
                <div>
                    <label>Mínimo</label>
                    <label>R$ 0,00</label>
                    <span id="valueDisplay">R$ 0,00</span>
                </div>
                <div>
                    <label>Máximo</label>
                    <label>R$ 999,00</label>
                    <input type="text" id="valueInput" value="R$ 0,00" />
                </div>
            </div>
            <div class="cro-filter-monthly-slider-container">
                <input type="range" id="valueSlider" min="0" max="999" value="0" />
            </div>
            <button id="updateButton">Aplicar filtro</button>
        </div>
    `;

    function insertNewFilter(targetElement) {
        if (targetElement.querySelector('.cro-filter-monthly-container')) {
            return
        }

        if (!targetElement) {
            return;
        }

        targetElement.innerHTML = bodyFiltermonthlyHTML;

        const valueInputs = document.querySelectorAll('#valueInput');

        const valueSliders = document.querySelectorAll('#valueSlider');

        const updateButtons = document.querySelectorAll('#updateButton');

        let value = getPriceFromUrl();

        function formatCurrency(value) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(value);
        }

        function parseCurrencyValue(currencyValue) {
            return parseInt(currencyValue.replace(/[^\d]+/g, ''), 10) / 100;
        }

        valueInputs.forEach(input => {
            input.addEventListener('change', () => {
                newFireGA("unopar", "menu_lateral_esquerdo", "campo_digitavel", `${formatCurrency(value)}`, "filtro-mensalidade", "a");
            });
        });

        valueSliders.forEach(slider => {
            slider.addEventListener('change', () => {
                newFireGA("unopar", "menu_lateral_esquerdo", "slider", `${formatCurrency(value)}`, "filtro-mensalidade", "a");
            });
        });

        function updateInput(newValue) {
            value = newValue;

            valueInputs.forEach(input => {
                input.value = formatCurrency(newValue);

            });

            valueSliders.forEach(slider => {
                const min = slider.min

                const max = slider.max

                slider.style.background = `linear-gradient(to right, var(--cro-primary) 0%, var(--cro-primary) ${(value - min) / (max - min) * 100}%, #FDFDFD ${(value - min) / (max - min) * 100}%, #FDFDFD 100%)`

                slider.oninput = function () {
                    this.style.background = `linear-gradient(to right, var(--cro-primary) 0%, var(--cro-primary) ${(this.value - this.min) / (this.max - this.min) * 100}%, #FDFDFD ${(this.value - this.min) / (this.max - this.min) * 100}%, #FDFDFD 100%)`
                };

                slider.value = value;
            });
        }

        valueInputs.forEach(input => {
            input.addEventListener('input', (event) => {
                let inputValue = event.target.value;

                let numericValue = parseCurrencyValue(inputValue);

                if (numericValue >= 999) {
                    numericValue = 999;
                }

                updateInput(numericValue);
            });
        });

        valueSliders.forEach(slider => {
            slider.addEventListener('input', (event) => {
                updateInput(parseInt(event.target.value, 10));
            });
        });

        updateButtons.forEach(button => {
            button.addEventListener('click', () => {
                const url = new URL(window.location.href);

                newFireGA("unopar", "menu_lateral_esquerdo", "botao", `${formatCurrency(value)}`, "filtro-mensalidade", "a");

                url.searchParams.set('price', value);

                window.location.href = url.toString();
            });
        });

        updateInput(value);
    }

    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node?.classList?.contains('col-mobile')) {
                    const targetElement = node.querySelector('.accordion-box-content-area');

                    if (targetElement) {
                        insertNewFilter(targetElement);
                    }
                }
            });
        });
    });

    const targetElementDesk = document.querySelector(".accordion-range-price > .accordion-box-content-area");

    if (targetElementDesk) {
        insertNewFilter(targetElementDesk);
    }

    const targetElementMobile = document.querySelector(".col-mobile .accordion-box-content-area");

    if (targetElementMobile) {
        insertNewFilter(targetElementMobile);
    }

    const mainContent = document.querySelector('.main-content');

    if (mainContent) {
        mutationObserver.observe(mainContent, { childList: true, subtree: true });
    } else {
        console.error('Elemento pai .main-content não encontrado.');
    }
}

croFunction();