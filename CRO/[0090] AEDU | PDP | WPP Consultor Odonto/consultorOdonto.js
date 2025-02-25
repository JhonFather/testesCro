let callback = {
    consultorOdontoPersonalized: false,
}

function modifyConsultorOdonto(main) {
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
            --cro-text-inverse: #FCFCFC;
            --cro-bg: #FAFAFA;
            --cro-bg-0090: #FBF5EC;
            --cro-p-0090: #2B2B2F;
            --cro-disabled: #B7B7B7;
        }

        .dark-mode {
            --cro-primary: #FFA68C;
            --cro-primary-light: #FFCAB9;
            --cro-secondary: #FAFAFA;
            --cro-text-inverse: #292929;
            --cro-bg: #3D3D3D;
            --cro-bg-0090: #3D3D3D;
        }

        .cro-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
        }

        .cro-modal {
            display: flex;
            width: 320px;
            height: 409px;
            padding: 10px 24px;
            justify-content: center;
            align-items: flex-start;
            align-content: flex-start;
            gap: 10px;
            flex-shrink: 0;
            flex-wrap: wrap;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
        }

        .cro-buttonclose {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 24px;
            cursor: pointer;
        }


        .cro-container-consultor-odonto {
            min-height: 692px;
            background-color: var(--cro-bg-0090);
        }

        .cro-content-cta-consultor-odonto {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 32px 20px 0 20px;
        }
        
        .cro-first-paragraph-cta-consultor-odonto {
            color: var(--cro-p-0090);
            text-align: center;
            font-family: Montserrat;
            font-size:16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-top: 30px;
        }

        .cro-second-paragraph-cta-consultor-odonto {
            color: var(--cro-p-0090);
            font-family:Montserrat;
            font-size:16px;
            font-style:normal;
            font-weight:400;
            line-height:normal;
            width: 301px;
            margin-top: 13px;
            margin-bottom: 44px;
        }

        .cro-container-galery-consultor-odonto {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .cro-svg-back-galery-consultor-odonto {
            display: none;
        }

        .cro-galery-consultor-odonto {
            width: 296.258px;
            height: 197px;
            border-radius: 24px;
            overflow: hidden;
            background-image: url("https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg");
            background-size: cover;
            margin-top: -15px;
            margin-bottom: 15px;
        }
        
        .cro-container-button-consultor-odonto {
            background-color: rgba(0, 0, 0, 0.3);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                all: unset;
                padding: 0 20px;
                border-radius: 24px;
                border: 1px solid var(--cro-text-inverse);
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 180px;
                height: 47.198px;
                transition: background-color 0.3s;

                span {
                    color: var(--cro-text-inverse);
                    font-family: Montserrat;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }

            a:hover {
                background-color: var(--cro-primary);
                border: none;
            }
        }

        .cro-container-unidades-consultor-odonto {
            display: none;
        }

        .cro-box-unidade-consultor-odonto {
            border: 2px solid var(--cro-primary);
            border-radius: 24px;
            padding: 10px;
            text-align: center;
            background-color: #FFF8F1;
            width: 240px;
            height: 228px;
            display: flex;
            flex-shrink: 0;
            flex-direction: column;

            div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: -5px;
            }
        }

        .cro-container-top-svg-consultor-odonto {
            position: relative;

            div {
                span {
                    position: absolute;
                    color: var(--cro-text-inverse);
                    font-family: Montserrat;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    text-transform: uppercase;
                    align-self: center;
                }
            }
        }

        .cro-cta-unidade-consultor-odonto {
            color: var(--cro-p-0090);
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .cro-cta-especialista-consultor-odonto {
            color: var(--cro-p-0090);
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .cro-cta-button-consultor-odonto {
            padding: 13px 22px;
            border: none;
            border-radius: 24px;
            margin: 14px 0;
            max-width: 196px;
            align-self: center;
            transition: opacity 0.2s;

            span {
                color: var(--cro-text-inverse);
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                font-size: 16px;
            }
        }

        .cro-cta-button-consultor-odonto:hover {
            opacity: 0.8;
        }

        .cro-cta-endereco-consultor-odonto {
            color: var(--cro-p-0090);
            text-align: center;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            width: 183px;
            align-self: center;
        }

        .cro-container-carousel-unidades-consultor-odonto {
            width: 100%;
        }

        .cro-content-carousel-unidades-consultor-odonto {
            overflow-x: auto;
            display: flex;
            width:100%;
            scroll-behavior:smooth;
            margin:auto;
            gap: 20px;
        }

        .cro-content-carousel-unidades-consultor-odonto::-webkit-scrollbar {
            display: none;
        }

        .cro-container-actions-consultor-odonto {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 20px;
        }

        @media (min-width: 768px) {
            .cro-container-consultor-odonto {
                min-height: 402px;
            }

            .cro-first-paragraph-cta-consultor-odonto {
                font-size: 24px;
                margin-top: 0;
            }

            .cro-second-paragraph-cta-consultor-odonto {
                font-size: 20px;
                width: 100%;
                text-align: center;
            }

            .cro-container-galery-consultor-odonto {
                flex-direction: row;
                align-items: center;
                gap: 30px;
            }

            .cro-svg-back-galery-consultor-odonto {
                display: block;
                margin-left: -30px;
                margin-bottom: -68px;
            }

            .cro-galery-consultor-odonto {
                width: 331.297px;
                height: 228px;
                margin-top: 0;
                margin-left: -170px;
            }

            .cro-container-unidades-consultor-odonto {
                display: flex;
                gap: 30px;
                align-self: flex-start;
            }

            .cro-container-carousel-unidades-consultor-odonto {
                display: none;
            }
        }
    `;

    addStyles(styles);

    const linkSwiper = document.createElement("link");

    linkSwiper.rel = "stylesheet";

    linkSwiper.href = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";

    document.head.appendChild(linkSwiper);

    const scriptSwiper = document.createElement("script");

    scriptSwiper.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";

    scriptSwiper.onload = () => {
        console.log("Swiper carregado com sucesso!");
    };

    document.body.appendChild(scriptSwiper);

    function applyModification() {

        if (!main) {
            return;
        }

        // if (main.classList.contains('already-haves-mutation')) {
        //     return;
        // }

        const divLocalTeste = main.querySelector("main > div:nth-of-type(2)");

        if (divLocalTeste) {
            divLocalTeste.classList.add('cro-container-consultor-odonto');

            const unidades = [
                {
                    unidade: "Vila Mariana",
                    especialista: "Bruno Dias",
                    endereco: "Rua Afonso Celso 235, São Paulo, SP, 04119-001",
                    disponibilidade: true
                },
                {
                    unidade: "Marte",
                    especialista: "Vanessa Garrido",
                    endereco: "Av Braz Leme, 3029",
                    disponibilidade: true
                },
                {
                    unidade: "Guarulhos",
                    especialista: "Celso Costa",
                    endereco: "Av. Papa Pio XII, 291 Macedo, Guarulhos",
                    disponibilidade: false
                }
            ];

            const galery = [
                {
                    img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg",
                    alt: "Foto da Clínica de Odontologia - Unidade Vila Mariana",
                    description: "Clínica de Odontologia - Unidade Vila Mariana"
                },
                {
                    img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg",
                    alt: "Foto da Pré-Clínica de Odontologia - Unidade Vila Mariana",
                    description: "Pré-Clínica de Odontologia - Unidade Vila Mariana"
                },
                {
                    img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg",
                    alt: "Foto da Clínica de Odontologia - Unidade Marte",
                    description: "Clínica de Odontologia - Unidade Marte"
                },
                {
                    img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg",
                    alt: "Foto do Laboratório de Odontologia - Unidade Guarulhos",
                    description: "Laboratório de Odontologia - Unidade Guarulhos"
                },
                {
                    img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/e70df8255b187c0e51b7642a9ea750ef__1_.jpg",
                    alt: "Foto da Clínica de Odontologia - Unidade Guarulhos",
                    description: "Clínica de Odontologia - Unidade Guarulhos"
                }
            ]

            const modalTestHTML = `
                <div class="cro-overlay" id="modalOverlay" style="display: none;">
                    <div class="cro-modal">
                        <span id="closeModal" class="cro-button-close">&times;</span>
                        <h2>Seu Título</h2>
                        <p>Conteúdo do modal...</p>
                    </div>
                </div>
            `;

            const bodyTestHTML = `
                <div class="cro-content-cta-consultor-odonto">
                    <p class="cro-first-paragraph-cta-consultor-odonto">Estude Odontologia com benefícios exclusivos e suporte completo!</p>
                    <p class="cro-second-paragraph-cta-consultor-odonto">Escolha a unidade em <b>São Paulo</b> que melhor atende às suas necessidades:</p>
                    <div class="cro-container-galery-consultor-odonto">
                        <svg class="cro-svg-back-galery-consultor-odonto" xmlns="http://www.w3.org/2000/svg" width="166" height="223" viewBox="0 0 166 223" fill="none">
                            <path d="M0 24C0 10.7452 10.7452 0 24 0H142C155.255 0 166 10.7452 166 24V261H0V24Z" fill="var(--cro-primary)"/>
                        </svg>
                        <div class="cro-galery-consultor-odonto">
                            <div class="cro-container-button-consultor-odonto">
                                <a id="buttonModalGalery">
                                    <span>Ver todas as fotos</span>
                                </a>
                            </div>
                        </div>
                        <div class="cro-container-unidades-consultor-odonto">
                        ${unidades.map(unidade => `
                            <div class="cro-box-unidade-consultor-odonto">
                                <div class="cro-container-top-svg-consultor-odonto">
                                    ${!unidade.disponibilidade
                    ? `<div style="margin-bottom: 10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 200 34" fill="none">
                                <path d="M191.077 30.8161L200 -12H0L8.40194 30.771C8.77047 32.647 10.415 34 12.3269 34H187.161C189.055 34 190.69 32.6708 191.077 30.8161Z" fill="#C52E00"/>
                            </svg>
                            <span>Inscrições suspensas</span>
                       </div>`
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="var(--cro-primary)">
                          <path d="M26.2089 9.47175C24.1994 7.46224 21.4739 6.33331 18.632 6.33331C15.7902 6.33331 13.0647 7.46224 11.0552 9.47175C9.04568 11.4813 7.91675 14.2067 7.91675 17.0486C7.91675 19.8905 9.04568 22.616 11.0552 24.6255L17.7102 31.2931C17.8276 31.4115 17.9673 31.5054 18.1211 31.5695C18.275 31.6336 18.4401 31.6666 18.6068 31.6666C18.7735 31.6666 18.9386 31.6336 19.0924 31.5695C19.2463 31.5054 19.386 31.4115 19.5034 31.2931L26.2089 24.5623C28.21 22.5612 29.3342 19.8471 29.3342 17.017C29.3342 14.187 28.21 11.4729 26.2089 9.47175ZM24.4031 22.7565L18.632 28.5528L12.861 22.7565C11.7209 21.6153 10.9447 20.1617 10.6305 18.5795C10.3163 16.9973 10.4783 15.3574 11.096 13.8672C11.7136 12.377 12.7592 11.1034 14.1006 10.2073C15.442 9.31125 17.0189 8.833 18.632 8.833C20.2452 8.833 21.8221 9.31125 23.1635 10.2073C24.5049 11.1034 25.5505 12.377 26.1681 13.8672C26.7858 15.3574 26.9478 16.9973 26.6336 18.5795C26.3194 20.1617 25.5432 21.6153 24.4031 22.7565ZM14.8436 13.1718C13.8242 14.1944 13.2517 15.5794 13.2517 17.0234C13.2517 18.4673 13.8242 19.8523 14.8436 20.8749C15.601 21.6336 16.5656 22.1517 17.6163 22.3643C18.667 22.5768 19.7572 22.4744 20.7499 22.0697C21.7426 21.6651 22.5937 20.9763 23.1965 20.0898C23.7992 19.2032 24.1267 18.1585 24.1379 17.0865C24.1436 16.3707 24.0057 15.6611 23.7324 14.9996C23.4591 14.338 23.056 13.738 22.5468 13.2349C22.0463 12.723 21.4495 12.315 20.7907 12.0346C20.132 11.7541 19.4243 11.6068 18.7083 11.6009C17.9924 11.595 17.2824 11.7308 16.6191 12.0004C15.9558 12.27 15.3524 12.6681 14.8436 13.1718ZM20.7662 19.0817C20.2876 19.5676 19.6552 19.8721 18.977 19.9433C18.2987 20.0145 17.6168 19.8478 17.0479 19.4719C16.4789 19.0959 16.0582 18.534 15.8577 17.8822C15.6571 17.2304 15.6893 16.5291 15.9485 15.8984C16.2078 15.2676 16.6781 14.7465 17.2791 14.4242C17.88 14.1018 18.5743 13.9982 19.2432 14.131C19.9121 14.2639 20.514 14.625 20.9462 15.1525C21.3783 15.6801 21.6137 16.3414 21.6123 17.0234C21.5939 17.8028 21.2669 18.5432 20.7031 19.0817H20.7662Z" fill="#F94D12"/>
                       </svg>`}
                                    
                                </div>
                                <p class="cro-cta-unidade-consultor-odonto">Unidade - ${unidade.unidade}</p>
                                <p class="cro-cta-especialista-consultor-odonto">Especialista:<br>${unidade.especialista}</p>
                                <a class="cro-cta-button-consultor-odonto" style="background-color: ${unidade.disponibilidade ? 'var(--cro-primary)' : 'var(--cro-disabled)'}; cursor: ${unidade.disponibilidade ? 'pointer' : 'not-allowed'};" ${unidade.disponibilidade ? '' : 'disabled'}>
                                    <span>Vamos conversar!</span>
                                </a>
                                <p class="cro-cta-endereco-consultor-odonto">${unidade.endereco}</p>
                            </div>
                          `).join('')}
                        </div>
                        <div>  
                            <div class="cro-container-carousel-unidades-consultor-odonto mySwiper">
                                <div class="cro-content-carousel-unidades-consultor-odonto">
                                    ${unidades.map(unidade => `
                                        <div class="cro-box-unidade-consultor-odonto">
                                            <div class="cro-container-top-svg-consultor-odonto">
                                                ${!unidade.disponibilidade
                            ? `<div style="margin-bottom: 10px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="34" viewBox="0 0 200 34" fill="none">
                                            <path d="M191.077 30.8161L200 -12H0L8.40194 30.771C8.77047 32.647 10.415 34 12.3269 34H187.161C189.055 34 190.69 32.6708 191.077 30.8161Z" fill="#C52E00"/>
                                        </svg>
                                        <span>Inscrições suspensas</span>
                                    </div>`
                            : `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="var(--cro-primary)">
                                        <path d="M26.2089 9.47175C24.1994 7.46224 21.4739 6.33331 18.632 6.33331C15.7902 6.33331 13.0647 7.46224 11.0552 9.47175C9.04568 11.4813 7.91675 14.2067 7.91675 17.0486C7.91675 19.8905 9.04568 22.616 11.0552 24.6255L17.7102 31.2931C17.8276 31.4115 17.9673 31.5054 18.1211 31.5695C18.275 31.6336 18.4401 31.6666 18.6068 31.6666C18.7735 31.6666 18.9386 31.6336 19.0924 31.5695C19.2463 31.5054 19.386 31.4115 19.5034 31.2931L26.2089 24.5623C28.21 22.5612 29.3342 19.8471 29.3342 17.017C29.3342 14.187 28.21 11.4729 26.2089 9.47175ZM24.4031 22.7565L18.632 28.5528L12.861 22.7565C11.7209 21.6153 10.9447 20.1617 10.6305 18.5795C10.3163 16.9973 10.4783 15.3574 11.096 13.8672C11.7136 12.377 12.7592 11.1034 14.1006 10.2073C15.442 9.31125 17.0189 8.833 18.632 8.833C20.2452 8.833 21.8221 9.31125 23.1635 10.2073C24.5049 11.1034 25.5505 12.377 26.1681 13.8672C26.7858 15.3574 26.9478 16.9973 26.6336 18.5795C26.3194 20.1617 25.5432 21.6153 24.4031 22.7565ZM14.8436 13.1718C13.8242 14.1944 13.2517 15.5794 13.2517 17.0234C13.2517 18.4673 13.8242 19.8523 14.8436 20.8749C15.601 21.6336 16.5656 22.1517 17.6163 22.3643C18.667 22.5768 19.7572 22.4744 20.7499 22.0697C21.7426 21.6651 22.5937 20.9763 23.1965 20.0898C23.7992 19.2032 24.1267 18.1585 24.1379 17.0865C24.1436 16.3707 24.0057 15.6611 23.7324 14.9996C23.4591 14.338 23.056 13.738 22.5468 13.2349C22.0463 12.723 21.4495 12.315 20.7907 12.0346C20.132 11.7541 19.4243 11.6068 18.7083 11.6009C17.9924 11.595 17.2824 11.7308 16.6191 12.0004C15.9558 12.27 15.3524 12.6681 14.8436 13.1718ZM20.7662 19.0817C20.2876 19.5676 19.6552 19.8721 18.977 19.9433C18.2987 20.0145 17.6168 19.8478 17.0479 19.4719C16.4789 19.0959 16.0582 18.534 15.8577 17.8822C15.6571 17.2304 15.6893 16.5291 15.9485 15.8984C16.2078 15.2676 16.6781 14.7465 17.2791 14.4242C17.88 14.1018 18.5743 13.9982 19.2432 14.131C19.9121 14.2639 20.514 14.625 20.9462 15.1525C21.3783 15.6801 21.6137 16.3414 21.6123 17.0234C21.5939 17.8028 21.2669 18.5432 20.7031 19.0817H20.7662Z" fill="#F94D12"/>
                                </svg>`}
                                                
                                            </div>
                                            <p class="cro-cta-unidade-consultor-odonto">Unidade - ${unidade.unidade}</p>
                                            <p class="cro-cta-especialista-consultor-odonto">Especialista:<br>${unidade.especialista}</p>
                                            <a class="cro-cta-button-consultor-odonto" style="background-color: ${unidade.disponibilidade ? 'var(--cro-primary)' : 'var(--cro-disabled)'}; cursor: ${unidade.disponibilidade ? 'pointer' : 'not-allowed'};" ${unidade.disponibilidade ? '' : 'disabled'}>
                                                <span>Vamos conversar!</span>
                                            </a>
                                            <p class="cro-cta-endereco-consultor-odonto">${unidade.endereco}</p>
                                        </div>
                                    `).join('')}
                                    </div>
                                    <div class="swiper-pagination"></div>
                                    <div class="cro-container-actions-consultor-odonto">
                                        <a class="cro-prev">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="var(--cro-primary)">
                                                <path d="M21.2504 6.19437C21.4088 6.36007 21.5344 6.55691 21.6201 6.77359C21.7059 6.99028 21.75 7.22256 21.75 7.45715C21.75 7.69174 21.7059 7.92403 21.6201 8.14071C21.5344 8.3574 21.4088 8.55423 21.2504 8.71994L14.6216 15.6697L21.2504 22.6195C21.4085 22.7854 21.534 22.9823 21.6196 23.1989C21.7052 23.4156 21.7493 23.6478 21.7493 23.8823C21.7493 24.1169 21.7052 24.3491 21.6196 24.5657C21.534 24.7824 21.4085 24.9793 21.2504 25.1451C21.0922 25.311 20.9044 25.4425 20.6978 25.5322C20.4911 25.622 20.2696 25.6682 20.0459 25.6682C19.8222 25.6682 19.6007 25.622 19.3941 25.5322C19.1874 25.4425 18.9996 25.311 18.8414 25.1451L10.9996 16.9236C10.8412 16.7579 10.7156 16.561 10.6299 16.3443C10.5441 16.1277 10.5 15.8954 10.5 15.6608C10.5 15.4262 10.5441 15.1939 10.6299 14.9772C10.7156 14.7605 10.8412 14.5637 10.9996 14.398L18.8414 6.17645C19.4907 5.4958 20.5841 5.4958 21.2504 6.19437Z" fill="#F94D12"/>
                                            </svg>
                                        </a>
                                        <a class="cro-next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="var(--cro-primary)">
                                            <path d="M10.9996 6.19437C10.8412 6.36007 10.7156 6.55691 10.6299 6.77359C10.5441 6.99028 10.5 7.22256 10.5 7.45715C10.5 7.69174 10.5441 7.92403 10.6299 8.14071C10.7156 8.3574 10.8412 8.55423 10.9996 8.71994L17.6284 15.6697L10.9996 22.6195C10.8415 22.7854 10.716 22.9823 10.6304 23.1989C10.5448 23.4156 10.5007 23.6478 10.5007 23.8823C10.5007 24.1169 10.5448 24.3491 10.6304 24.5657C10.716 24.7824 10.8415 24.9793 10.9996 25.1451C11.1578 25.311 11.3456 25.4425 11.5522 25.5322C11.7589 25.622 11.9804 25.6682 12.2041 25.6682C12.4278 25.6682 12.6493 25.622 12.8559 25.5322C13.0626 25.4425 13.2504 25.311 13.4086 25.1451L21.2504 16.9236C21.4088 16.7579 21.5344 16.561 21.6201 16.3443C21.7059 16.1277 21.75 15.8954 21.75 15.6608C21.75 15.4262 21.7059 15.1939 21.6201 14.9772C21.5344 14.7605 21.4088 14.5637 21.2504 14.398L13.4086 6.17645C12.7593 5.4958 11.6659 5.4958 10.9996 6.19437Z" fill="#F94D12"/>
                                        </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            divLocalTeste.innerHTML = bodyTestHTML;

            // const modalOverlay = document.getElementById('modalOverlay');
            // const buttonModalGalery = document.getElementById('buttonModalGalery');
            // const closeModal = document.getElementById('closeModal');

            // buttonModalGalery.addEventListener('click', function () {
            //     modalOverlay.style.display = 'flex';
            // });

            // closeModal.addEventListener('click', function () {
            //     modalOverlay.style.display = 'none';
            // });

            // modalOverlay.addEventListener('click', function (event) {
            //     if (event.target === modalOverlay) {
            //         modalOverlay.style.display = 'none';
            //     }
            // });

            // var obj = document.getElementsByClassName('cro-box-unidade-consultor-odonto')[0].clientWidth;

            // function goNext() {
            //     document.getElementsByClassName('cro-content-carousel-unidades-consultor-odonto')[0].scrollBy({
            //         left: obj,
            //     });
            // }

            // function goPrevious() {
            //     document.getElementsByClassName('cro-content-carousel-unidades-consultor-odonto')[0].scrollBy({
            //         left: -obj,
            //     });
            // }

            // document.querySelector('.cro-prev').addEventListener('onclick', goPrevious);

            // document.querySelector('.cro-next').addEventListener('onclick', goNext);

            // var swiper = new Swiper(".mySwiper", {
            //     slidesPerView: "auto",
            //     spaceBetween: 30,
            //     pagination: {
            //         el: ".swiper-pagination",
            //         clickable: true,
            //     },
            // });
        }
    }

    main.classList.add('already-haves-mutation');

    callback.consultorOdontoPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(main, { childList: true, subtree: true });
}

function startCroPersonalization() {
    const divNext = document.querySelector("#__next");

    if (!divNext || document.documentElement.classList.contains('already-haves-consultorOdonto-personalization')) {
        return;
    }

    document.documentElement.classList.add('already-haves-consultorOdonto-personalization');

    const observer = new MutationObserver(() => {
        const main = document.querySelector("main")

        if (main && !main.hasAttribute('already-haves-mutation')) {
            modifyConsultorOdonto(main);
        }

        if (callback.consultorOdontoPersonalized) {
            observer.disconnect()
        }
    });

    observer.observe(divNext, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
    startCroPersonalization();
})

startCroPersonalization();