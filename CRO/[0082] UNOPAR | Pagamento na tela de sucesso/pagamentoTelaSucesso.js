function modifyCards() {
    function addStyle(styles) {
        var css = document.createElement('style');
        css.type = 'text/css';

        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));
            document.head.insertAdjacentElement('afterbegin', css);
        }
    }

    const styles = `
        .cro-container-pix {
            width: 100%;
            border: 1px solid #32BCAD;
            border-radius: 8px;
            margin-top: 3rem;
            margin-bottom: 1rem;

            > a {
                all: unset;
            }
        }
        
        .cro-section-pix {
            > span {
                position: absolute;
                background-color: #0385E3;
                padding: 0 0.5rem;
                color: white;
                border-radius: 8px;
                margin-top: -15px;
                margin-left: -1px;
            }    
        }

         .cro-content-pix {
            display: flex;
            padding: 1rem 1.5rem;
            gap: 20px;

            > img {

            }

            > p {
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        } 
      `;
    addStyle(styles);

    const scriptNewFireGA = document.createElement("script");

    scriptNewFireGA.textContent = `
        function newFireGA(
            brand,
            locationElement,
            typeElement,
            text,
            campaignName,
            variant
        ) {
            dataLayer.push({ ecommerce: null });
            dataLayer.push({
            event: "evento_cro",
            brand: brand ?? undefined,
            locationElement: locationElement ?? undefined,
            typeElement: typeElement ?? undefined,
            text: text ?? undefined,
            campaignName: campaignName ?? undefined,
            variant: variant ?? undefined,
            });
        }
    `;

    document.head.appendChild(scriptNewFireGA);

    async function modifyUniqueCards() {
        const contentStep = document.querySelector('#vueApp > main > div > div.d-flex.flex-column > div.d-flex.flex-column.align-items-center');

        if (!contentStep.classList.contains('card-already-modify')) {
            contentStep.classList.add('card-already-modify');
            contentStep.insertAdjacentHTML(
                'beforeend',
                `
                    <div class="cro-container-pix" onclick='newFireGA("unopar", "step:5:container:unopar-indica", "step:5:click:potencializar-pix", "cta:Pague com pix: Conclua sua matrícula o mais rápido possível!", "potencializar-o-pix", "")'>
                        <a href="https://www.anhanguera.com/area-do-candidato/login" target="_blank">
                            <div class="cro-section-pix">
                                <span>Unopar indica</span>
                                <div class="cro-content-pix">
                                    <img src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/unopar/%5B0069%5D%20Unopar%20%7C%20Teste%20A%20-%20B%20%7C%20Potencializar%20o%20PIX%20na%20tela%20de%20sucesso/iconePix.svg" />
                                    <p><b>Pague com pix:</b> Conclua sua matrícula o mais rápido possível!</p>
                                </div>
                            </div>
                        </a>
                    </div>
                `
            );
        }
    }

    const observer = new MutationObserver(() => {
        console.log('rodou');
        modifyUniqueCards();
    });

    const options = {
        childList: true,
        subtree: false
    };
    observer.observe(document.querySelector('#vueApp > main > div > div.d-flex.flex-column > div.d-flex.flex-column.align-items-center'), options);

    modifyUniqueCards();
}

modifyCards();