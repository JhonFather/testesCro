function modifyConsultorOdonto(main) {
    document.body.classList.add("cro-test-consultor-odonto");
    if (main.classList.contains('already-haves-mutation-test-consultor-odonto')) {
        return;
    }
    main.classList.add('already-haves-mutation-test-consultor-odonto');
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
    const styles = /*css*/ `
        :root {
            --cro-primary: #F94D12;
            --cro-primary-light: #FF5F37;
            --cro-secondary: #17375C;
            --cro-text-inverse: #FCFCFC;
            --cro-bg: #FAFAFA;
            --cro-bg-0090: #FBF5EC;
            --cro-p-0090: #2B2B2F;
            --cro-disabled: #B7B7B7;
            --cro-suspended: #C52E00;
            --cro-text-suspended: #FCFCFC;
            --cro-bg-modal-0090: #EDEDED;
            --cro-color-arrow-modal-0090: #5F5F5F;
            --cro-color-p-modal-0090: #000;
        }
        .dark-mode {
            --cro-primary: #FFA68C;
            --cro-primary-light: #FFCAB9;
            --cro-secondary: #FAFAFA;
            --cro-text-inverse: #FCFCFC;
            --cro-bg: #3D3D3D;
            --cro-bg-0090: #3D3D3D;
            --cro-p-0090: #FCFCFC;
            --cro-suspended: #FFA68C;
            --cro-text-suspended: #3D3D3D;
            --cro-bg-modal-0090: #3D3D3D;
            --cro-color-arrow-modal-0090: #FFA68C;
            --cro-color-p-modal-0090: #FCFCFC;
        }
        body {
            -webkit-tap-highlight-color: transparent;
        }
        @keyframes changeBackgroundColor {
            0% {
                background-color: transparent;
            }
            100% {
                background-color: rgba(29, 29, 29, 0.70);
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
                background-color: rgba(29, 29, 29, 0.70);
            }
            100% {
                background-color: transparent;
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
            animation-duration: 0.45s;
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
        .cro-overlay-consultor-odonto {
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
            background-color: rgba(29, 29, 29, 0.70);
            transition: background easy 0.3s;
        }
        .cro-modal-consultor-odonto {
            display: flex;
            width: 98%;
            height: 409px;
            max-width: 360px;
            padding: 10px 24px;
            position: relative;
            justify-content: center;
            align-items: flex-start;
            align-content: flex-start;
            gap: 10px;
            flex-shrink: 0;
            flex-wrap: wrap;
            background-color: var(--cro-bg-modal-0090) !important;
            border-radius: 24px;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
            will-change: transform;
            opacity: 1;
            .cro-cta-text-modal-consultor-odonto {
                color: var(--cro-p-0090) !important;
                text-align: center;
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-top: 40px;
            }
        }
        .cro-button-close-consultor-odonto {
            display: flex;
            position: absolute;
            width: 70px;
            height: 70px;
            justify-content: center;
            align-items: center;
            right: 0;
            cursor: pointer;
            right: -3px;
            top: -8px;
        }
        .cro-carousel-modal {
            width: 100%;
            overflow: hidden;
            .cro-carousel-modal, .swiper-container {
                width: 100%;
                margin: 0 auto;
            }
            .cro-carousel-modal, .swiper-pagination {
                position: relative !important;
            }
            .cro-carousel-modal, .swiper-pagination-bullet {
                width: 11px !important;
                height: 11px !important;
                background-color: transparent !important;
                border: 1px solid var(--cro-color-arrow-modal-0090) !important;
            }
            .cro-carousel-modal, .swiper-pagination-bullets {
                width: 100px !important;
                margin-top: 5px !important;
            }
            .cro-carousel-modal, .swiper-pagination-bullet-active  {
                background-color: var(--cro-color-arrow-modal-0090) !important;
            }
            .cro-carousel-modal, .swiper-button-next, .swiper-button-prev {
                position: inherit !important;
                top: auto !important;
                width: auto !important;
                color: var(--cro-color-arrow-modal-0090) !important;
                font-weight: bold !important;
                --swiper-navigation-size: 25px !important;
            }
            .cro-carousel-modal, .cro-container-navigation-carousel-modal-consultor-odonto {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-top: 20px;
            }
            .cro-carousel-modal, .cro-box-carousel-image-modal-consultor-odonto {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p {
                    margin-top: 10px;
                    color: var(--cro-p-modal-0090);
                    text-align: center;
                    font-family: Montserrat;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
            .cro-carousel-modal, .cro-container-carousel-image-modal-consultor-odonto {
                width: 286px;
                height: 201px;
                overflow: hidden;
                display: flex;
                border-radius: 24px;
                margin-top: 10px;
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
        .cro-container-consultor-odonto {
            height: auto !important;
            padding-bottom: 20px;
            background-color: var(--cro-bg-0090);
        }
        .cro-content-cta-consultor-odonto {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 32px 20px 0 20px;
        }
        .cro-images-header-consultor-odonto {
            width: 100%;
            position: relative;
            .cro-triangule-image-header-left {
                position: absolute;
                left: -70px;
                margin-top: -33px;
            }
            .cro-triangule-image-header-right {
                display: none;
            }
            .cro-stripes-image-header {
                display: none;
            }
        }
        .cro-first-paragraph-cta-consultor-odonto {
            color: var(--cro-p-0090);
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-top: 40px;
        }
        .cro-second-paragraph-cta-consultor-odonto {
            color: var(--cro-p-0090);
            font-family:Montserrat;
            font-size: 16px;
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
            background-image: url("https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/imageGaleryBackgroundCompressed.jpg");
            background-size: cover;
            background-position: center;
            margin-top: -15px;
            margin-bottom: 15px;
        }
        .cro-container-button-consultor-odonto {
            background-color: rgba(0, 0, 0, 0.5);
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
                span {
                    color: var(--cro-text-suspended);
                }
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
            background-color: var(--cro-bg);
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
                margin-top: -6px;
                margin-bottom: 3px;
            }
        }
        .cro-container-top-svg-consultor-odonto {
            position: relative;
            div {
                margin-bottom: 11px;
                span {
                    position: absolute;
                    color: var(--cro-text-suspended);
                    font-family: Montserrat;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    text-transform: uppercase;
                    align-self: center;
                    pointer-events: none;
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
            text-decoration: none;
            span {
                color: var(--cro-text-suspended);
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
        .cro-hide-carousel {
            .cro-hide-carousel, .swiper-container {
                width: 100%;
                display: flow;
                max-width: 375px;
                margin: 0 auto;
                padding-left: 13px;
            }
            .cro-hide-carousel, .swiper-pagination {
                position: relative !important;
            }
            .cro-hide-carousel, .swiper-pagination-bullet {
                width: 11px !important;
                height: 11px !important;
                background-color: transparent !important;
                border: 1px solid var(--cro-primary) !important;
            }
            .cro-hide-carousel, .swiper-pagination-bullets {
                width: 60px !important;
                margin-top: 5px !important;
            }
            .cro-hide-carousel, .swiper-pagination-bullet-active  {
                background-color: var(--cro-primary) !important;
            }
            .cro-hide-carousel, .swiper-button-next, .swiper-button-prev {
                position: inherit !important;
                top: auto !important;
                width: auto !important;
                color: var(--cro-primary) !important;
                font-weight: bold !important;
                --swiper-navigation-size: 25px !important;
            }
            .cro-hide-carousel, .cro-container-navigation-carousel-consultor-odonto {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                margin-top: 35px;
                margin-left: -7px;
            }
        }
        @media (max-width: 360px) {
            .cro-modal-consultor-odonto {
                padding: 0;
            }
            .cro-cta-text-modal-consultor-odonto {
                margin-top: 45px !important;
                padding: 0 30px;
            }
            .cro-box-carousel-image-modal-consultor-odonto {
                p {
                    padding: 0 25px;
                }
            }
            .cro-hide-carousel {
                .cro-hide-carousel, .swiper-container {
                    max-width: 415px;
                    padding-left: 55px;
                }
                .cro-hide-carousel, .cro-container-navigation-carousel-consultor-odonto {
                    margin-left: -28px;
                }
            }
            .cro-modal-consultor-odonto {
                .cro-modal-consultor-odonto, .cro-container-navigation-carousel-consultor-odonto {
                    margin-top: 20px;
                    
                }
                .cro-carousel-modal, .cro-container-carousel-image-modal-consultor-odonto {
                    margin-top: 0;
                }
            }
        }
        @media (min-width: 768px) {
            .cro-triangule-image-header-left {
                left: -20px;
            }
            .cro-triangule-image-header-right {
                display: block !important;
                position: absolute;
                right: -20px;
                margin-top: -33px;
            }
            .cro-first-paragraph-cta-consultor-odonto {
                font-size: 24px;
            }
            .cro-second-paragraph-cta-consultor-odonto {
                font-size: 20px;
                width: 100%;
                text-align: center;
            }
            .cro-svg-back-galery-consultor-odonto {
                display: none;
            }
            .cro-galery-consultor-odonto {
                width: 420.297px;
                height: 228px;
            }
            .cro-container-unidades-consultor-odonto {
                display: flex;
                gap: 30px;
                align-self: flex-start;
                flex-wrap: wrap;
                justify-content: center;
            }
            .cro-hide-carousel {
                display: none;
            }
            .cro-modal-consultor-odonto {
                width: 98%;
                height: 608px;
                max-width: 708px;
                .cro-cta-text-modal-consultor-odonto {
                    font-size: 24px;
                    margin-top: 15px;
                }
            }
            .cro-container-carousel-image-modal-consultor-odonto {
                width: 618px !important;
                height: 389px !important;
            }
            .cro-container-navigation-carousel-modal-consultor-odonto {
                margin-top: 35px !important;
            }
            .cro-box-carousel-image-modal-consultor-odonto {
                p {
                    margin-top: 15px !important;
                    font-size: 20px !important;
                }
            }
        }
        @media (min-width: 1200px) {
            .cro-first-paragraph-cta-consultor-odonto {
                margin-top: 40px;
            }
            .cro-triangule-image-header-left {
                left: -25px !important;
            }
            .cro-stripes-image-header {
                display: block !important;
                position: absolute;
                right: -20px;
                margin-top: -33px;
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
        }
    `;
    addStyles(styles);
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
    loadStyle("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");
    const divLocalTeste = main.querySelector("main > div:nth-of-type(2)");
    if (divLocalTeste) {
        divLocalTeste.classList.add('cro-container-consultor-odonto');
        const unidades = [
            {
                unidade: "Vila Mariana",
                especialista: "Bruno Dias",
                endereco: "Rua Afonso Celso 235, São Paulo, SP, 04119-001",
                disponibilidade: true,
                link: "https://anhanguera.com/whatsapp-redirect/?number=5511968306834&message=[Campus Vila Mariana] Não altere ou apague esta mensagem. Quero falar com o especialista Bruno Dias no Campus Vila Mariana da Anhanguera sobre o curso de Odontologia.",
                dl: {
                    brand: "anhanguera",
                    locationElement: "consultor_pdp",
                    typeElement: "clique:botao",
                    text: "vamos_conversar",
                    campaignName: "vila_mariana"
                }
            },
            {
                unidade: "Marte",
                especialista: "Vanessa Garrido",
                endereco: "Av Braz Leme, 3029",
                disponibilidade: true,
                link: "https://anhanguera.com/whatsapp-redirect/?number=5511914549138&message=[Campus Marte] Não altere ou apague esta mensagem. Quero falar com a especialista Vanessa Garrido no Campus Marte da Anhanguera sobre o curso de Odontologia.",
                dl: {
                    brand: "anhanguera",
                    locationElement: "consultor_pdp",
                    typeElement: "clique:botao",
                    text: "vamos_conversar",
                    campaignName: "marte"
                }
            },
            {
                unidade: "Guarulhos",
                especialista: "Celso Costa",
                endereco: "Av. Papa Pio XII, 291 Macedo, Guarulhos",
                disponibilidade: false,
                dl: {
                    brand: "anhanguera",
                    locationElement: "consultor_pdp",
                    typeElement: "clique:botao:inscricoes_suspensas",
                    text: "vamos_conversar",
                    campaignName: "guarulhos"
                }
            }
        ];
        const galery = [
            {
                img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/Cl%C3%ADnica%20de%20Odontologia%20-%20Unidade%20Vila%20MarianaCompressed.jpg",
                alt: "Foto da Clínica de Odontologia - Unidade Vila Mariana",
                description: "Clínica de Odontologia - Unidade Vila Mariana"
            },
            {
                img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/Pr%C3%A9-Cl%C3%ADnica%20de%20Odontologia%20-%20Unidade%20Vila%20MarianaCompressed.jpg",
                alt: "Foto da Pré-Clínica de Odontologia - Unidade Vila Mariana",
                description: "Pré-Clínica de Odontologia - Unidade Vila Mariana"
            },
            {
                img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/Cl%C3%ADnica%20de%20Odontologia%20-%20Unidade%20MarteCompressed.jpg",
                alt: "Foto da Clínica de Odontologia - Unidade Marte",
                description: "Clínica de Odontologia - Unidade Marte"
            },
            {
                img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/Laborat%C3%B3rio%20de%20Odontologia%20-%20Unidade%20GuarulhosCompressed.jpg",
                alt: "Foto do Laboratório de Odontologia - Unidade Guarulhos",
                description: "Laboratório de Odontologia - Unidade Guarulhos"
            },
            {
                img: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/teste%20vitrine%203.0/Cl%C3%ADnica%20de%20Odontologia%20-%20Unidade%20GuarulhosCompressed.jpg",
                alt: "Foto da Clínica de Odontologia - Unidade Guarulhos",
                description: "Clínica de Odontologia - Unidade Guarulhos"
            }
        ];
        const modalTestHTML = /*html*/ `
            <div class="cro-overlay-consultor-odonto" id="cro-modal-overlay">
                <div class="cro-modal-consultor-odonto" id="cro-modal">
                    <span id="cro-close-modal" class="cro-button-close-consultor-odonto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path d="M11.3985 11.9994 6.47962 7.28477C6.3326 7.14363 6.25 6.95221 6.25 6.7526c0-.1996.0826-.39103.22962-.53217C6.62664 6.07929 6.82604 6 7.03396 6c.20792 0 .40732.07929.55435.22043l4.91099 4.72207 4.9111-4.72207c.147-.14114.3464-.22043.5543-.22043.2079 0 .4073.07929.5544.22043.147.14114.2296.33257.2296.53217 0 .19961-.0826.39103-.2296.53217l-4.9189 4.71463 4.9189 4.7145c.0731.0697.1312.1526.1709.244.0396.0913.06.1893.06.2882 0 .099-.0204.1969-.06.2883-.0397.0913-.0978.1742-.1709.2439-.0726.0702-.159.126-.2541.1641-.0952.038-.1972.0576-.3003.0576-.1031 0-.2051-.0196-.3003-.0576-.0951-.0381-.1815-.0939-.254-.1641l-4.9111-4.7221-4.91099 4.7221c-.07259.0702-.15894.126-.25408.1641-.09515.038-.1972.0576-.30027.0576s-.20512-.0196-.30026-.0576c-.09515-.0381-.1815-.0939-.25408-.1641-.07318-.0697-.13127-.1526-.17091-.2439-.03964-.0914-.06004-.1893-.06004-.2883 0-.0989.0204-.1969.06004-.2882.03964-.0914.09773-.1743.17091-.244l4.91888-4.7145Z" fill="var(--cro-color-arrow-modal-0090)"/></svg>
                    </span>
                    <p class="cro-cta-text-modal-consultor-odonto">Explore as fotos do campus e descubra nossa estrutura completa.</p>
                    <div class="cro-carousel-modal">
                        <div class="swiper-container mySwiper-modal">
                            <div class="swiper-wrapper">
                                ${galery.map(galery => `
                                    <div class="swiper-slide">
                                        <div class="cro-box-carousel-image-modal-consultor-odonto">
                                            <div class="cro-container-carousel-image-modal-consultor-odonto">
                                                <img src="${galery.img}" alt="${galery.alt}" />
                                            </div>
                                            <p>${galery.description}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="cro-container-navigation-carousel-modal-consultor-odonto">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-pagination"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        const bodyTestHTML = /*html*/ `
            <div class="cro-content-cta-consultor-odonto">
                <div class="cro-images-header-consultor-odonto">
                    <svg class="cro-triangule-image-header-left" width="162" height="52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.6082 23.4147c1.9708 1.1601 1.9708 4.0105 0 5.1706L17.2719 45.8548c-1.9999 1.1772-4.5219-.2647-4.5219-2.5854V8.73056c0-2.32068 2.522-3.76259 4.5219-2.58531L46.6082 23.4147ZM83.6082 23.4147c1.9708 1.1601 1.9708 4.0105 0 5.1706L54.2719 45.8548c-1.9999 1.1772-4.5219-.2647-4.5219-2.5854V8.73056c0-2.32068 2.522-3.76259 4.5219-2.58531L83.6082 23.4147ZM120.608 23.4147c1.971 1.1601 1.971 4.0105 0 5.1706L91.2719 45.8548c-1.9999 1.1772-4.5219-.2647-4.5219-2.5854V8.73056c0-2.32068 2.522-3.76259 4.5219-2.58531L120.608 23.4147ZM157.608 23.4147c1.971 1.1601 1.971 4.0105 0 5.1706l-29.336 17.2695c-2 1.1772-4.522-.2647-4.522-2.5854V8.73056c0-2.32068 2.522-3.76259 4.522-2.58531l29.336 17.26945Z" fill="var(--cro-primary)"/></svg>
                    <svg class="cro-triangule-image-header-right" width="131" height="52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.6082 23.4147c1.9708 1.1601 1.9708 4.0105 0 5.1706L17.2719 45.8548c-1.9999 1.1772-4.5219-.2647-4.5219-2.5854V8.73056c0-2.32068 2.522-3.76259 4.5219-2.58531L46.6082 23.4147ZM83.6082 23.4147c1.9708 1.1601 1.9708 4.0105 0 5.1706L54.2719 45.8548c-1.9999 1.1772-4.5219-.2647-4.5219-2.5854V8.73056c0-2.32068 2.522-3.76259 4.5219-2.58531L83.6082 23.4147ZM120.608 23.4147c1.971 1.1601 1.971 4.0105 0 5.1706L91.2719 45.8548c-1.9999 1.1772-4.5219-.2647-4.5219-2.5854V8.73056c0-2.32068 2.522-3.76259 4.5219-2.58531L120.608 23.4147ZM157.608 23.4147c1.971 1.1601 1.971 4.0105 0 5.1706l-29.336 17.2695c-2 1.1772-4.522-.2647-4.522-2.5854V8.73056c0-2.32068 2.522-3.76259 4.522-2.58531l29.336 17.26945Z" fill="var(--cro-primary)"/></svg>
                    <svg class="cro-stripes-image-header" width="293" height="333" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><path fill="var(--cro-primary)" d="m24.7188-39.061 358.85697204 179.68260129-15.98400954 31.92280845L8.73479046-7.13819154z"/><path d="M47.9464-2.27404c-.5937-.29729-1.0961-.66966-1.5073-1.1171-.4041-.44387-.7043-.93418-.9008-1.47095-.1893-.53319-.2695-1.08778-.2405-1.66377.0361-.57242.1938-1.1376.4732-1.69557.2794-.55796.6374-1.02286 1.0741-1.3947.4438-.36825.9395-.63447 1.487-.79877.5475-.1643 1.1199-.2176 1.7174-.16.5974.0576 1.1894.2332 1.776.5269.5937.29729 1.089.66607 1.4859 1.10635.404.44387.7007.93239.89 1.46558.1965.53677.2803 1.09315.2513 1.66914-.0253.56885-.1795 1.13583-.4625 1.70094-.2793.55797-.6427 1.02465-1.0902 1.40006-.4438.36825-.9395.63451-1.487.79878-.5367.16069-1.1038.21224-1.7013.15466-.5902-.054-1.1787-.22785-1.7653-.52155Zm.7307-1.48613c.3362.16834.6725.26513 1.0088.29037.3434.02881.6762-.01035.9982-.1175.3221-.10715.6138-.27872.8751-.5147.2684-.2324.4922-.52743.6713-.8851.1791-.35767.2813-.71359.3065-1.06777.0324-.3506-.005-.68693-.1121-1.00898-.1-.31847-.2644-.60657-.4933-.8643-.2288-.25772-.5113-.47075-.8475-.6391-.3362-.16834-.6761-.26692-1.0195-.29574-.3363-.02523-.6655.01573-.9875.12288-.3221.10715-.6173.27692-.8858.50932-.2613.23598-.4815.5328-.6606.89047-.1755.35052-.2812.70465-.3172 1.0624-.0253.35418.0121.69051.1121 1.00898.1072.32206.2752.61195.504.86967.2288.25773.5113.47076.8475.6391ZM53.4162.303663 57.177-7.2074l3.4122 1.7085c.8155.40832 1.4556.92566 1.9204 1.55203.4683.6192.738 1.29554.8092 2.02902.0711.73347-.085 1.482908-.4682 2.248321-.3797.758259-.8862 1.332199-1.5197 1.721809-.6299.38246-1.3348.57525-2.1148.57839-.7763-.00402-1.5723-.21019-2.3877-.61851L53.4162.303663Zm2.4528-.556734 1.5881.795151c.5007.250723.9801.374425 1.438.371107.4687-.00689.8909-.135449 1.2667-.385675.383-.246646.6927-.6060301.9291-1.078154.2399-.479278.3422-.942528.3066-1.389768-.0247-.4508-.1766-.86233-.4554-1.23457-.2681-.37581-.6526-.68907-1.1533-.9398l-1.588-.79515L55.869-.253071Zm9.9958 6.950921c-.5937-.29729-1.0961-.66966-1.5073-1.1171-.4041-.44387-.7043-.93418-.9008-1.47095-.1893-.53319-.2695-1.08778-.2405-1.66377.0361-.57242.1938-1.13761.4732-1.69557.2794-.557964.6374-1.022864 1.0741-1.394698.4438-.368252.9395-.634512 1.487-.798772.5475-.16427 1.1199-.21761 1.7174-.16003.5974.05758 1.1894.23323 1.776.52693.5937.297286 1.089.66607 1.4859 1.1063531.4041.4438649.7007.9323909.89 1.4655769.1965.53677.2803 1.09315.2513 1.66914-.0253.56885-.1795 1.13582-.4625 1.70094-.2793.55797-.6427 1.02465-1.0902 1.40006-.4438.36825-.9395.63451-1.487.79877-.5367.1607-1.1038.21225-1.7012.15467-.5903-.054-1.1788-.22785-1.7654-.52155Zm.7307-1.48613c.3363.16834.6725.26513 1.0088.29037.3434.02881.6762-.01035.9982-.1175.3221-.10715.6138-.27872.8751-.5147.2684-.2324.4922-.52743.6713-.8851.1791-.35767.2813-.71359.3065-1.06777.0324-.3506-.005-.68693-.1121-1.00898-.1-.31847-.2644-.60657-.4933-.8643-.2288-.257722-.5113-.470755-.8475-.639098C68.6663.2363 68.3264.13772 67.983.108904c-.3363-.025235-.6655.015722-.9875.122871-.3221.107149-.6173.276923-.8858.509323-.2613.235981-.4815.532802-.6606.890472-.1755.35052-.2812.70465-.3172 1.0624-.0252.35418.0121.69051.1121 1.00898.1072.32206.2752.61195.504.86967.2288.25772.5113.47076.8475.6391Zm4.7391 4.06383 3.7608-7.51106 1.4379.71993 1.7237 7.62688-.6975-.34923 2.7078-5.40797 1.7169.85963-3.7609 7.51107-1.4271-.7146-1.7344-7.63221.6974.34922-2.7078 5.40799-1.7168-.85965Zm10.2217 5.11805 3.0516-6.09467-2.4035-1.20347.7092-1.41637 6.5453 3.27731-.7092 1.4164-2.4035-1.2035-3.0517 6.0947-1.7382-.8704Zm8.556 4.4452c-.5937-.2973-1.0962-.6697-1.5073-1.1171-.4041-.4439-.7043-.9342-.9008-1.471-.1893-.5332-.2695-1.0878-.2405-1.6638.0361-.5724.1938-1.1376.4732-1.6955.2793-.558.6374-1.0229 1.0741-1.3947.4438-.3683.9395-.6345 1.487-.7988.5474-.1643 1.1199-.2176 1.7174-.16.5974.0575 1.1894.2332 1.776.5269.5937.2973 1.089.6661 1.4859 1.1064.404.4438.7007.9323.89 1.4655.1965.5368.2803 1.0932.2513 1.6692-.0254.5688-.1795 1.1358-.4625 1.7009-.2794.558-.6428 1.0247-1.0902 1.4001-.4438.3682-.9395.6345-1.487.7987-.5367.1607-1.1038.2123-1.7013.1547-.5903-.054-1.1787-.2278-1.7653-.5215Zm.7307-1.4862c.3362.1684.6725.2652 1.0088.2904.3434.0288.6762-.0104.9982-.1175.3221-.1072.6138-.2787.8751-.5147.2684-.2324.4922-.5274.6713-.8851.1791-.3577.2812-.7136.3065-1.0678.0324-.3506-.005-.6869-.1121-1.009-.1-.3184-.2645-.6065-.4933-.8643-.2288-.2577-.5113-.4707-.8475-.6391-.3362-.1683-.6761-.2669-1.0195-.2957-.3363-.0252-.6655.0157-.9875.1229-.3221.1071-.6173.2769-.8858.5093-.2613.236-.4815.5328-.6606.8905-.1755.3505-.2812.7046-.3172 1.0624-.0253.3542.0121.6905.1121 1.009.1072.322.2751.6119.504.8696.2288.2578.5113.4708.8475.6391Zm4.7391 4.0639 3.7608-7.5111 1.7381.8704-3.0515 6.0947 3.7665 1.8858-.709 1.4163-5.5049-2.7561Zm9.9339 5.1349c-.594-.2973-1.096-.6696-1.508-1.1171-.404-.4438-.704-.9342-.9-1.4709-.19-.5332-.27-1.0878-.241-1.6638.036-.5724.194-1.1376.473-1.6956.28-.5579.638-1.0228 1.075-1.3947.443-.3682.939-.6345 1.487-.7987.547-.1643 1.119-.2176 1.717-.1601.597.0576 1.189.2333 1.776.527.594.2973 1.089.666 1.486 1.1063.404.4439.701.9324.89 1.4656.196.5368.28 1.0932.251 1.6691-.025.5689-.179 1.1359-.462 1.701-.28.558-.643 1.0246-1.091 1.4-.443.3683-.939.6346-1.487.7988-.536.1607-1.103.2123-1.701.1547-.59-.054-1.179-.2279-1.765-.5216Zm.731-1.4861c.336.1683.672.2651 1.008.2904.344.0288.677-.0104.999-.1175.322-.1072.613-.2787.875-.5147.268-.2324.492-.5275.671-.8851.179-.3577.281-.7136.306-1.0678.033-.3506-.005-.6869-.112-1.009-.1-.3185-.264-.6065-.493-.8643-.229-.2577-.511-.4707-.847-.6391-.337-.1683-.677-.2669-1.02-.2957-.336-.0252-.665.0157-.987.1229-.323.1071-.618.2769-.886.5093-.262.236-.482.5328-.661.8905-.175.3505-.281.7046-.317 1.0624-.025.3541.012.6905.112 1.0089.107.3221.275.612.504.8697.229.2577.511.4708.848.6391Zm8.301 6.0085c-.594-.2972-1.094-.6642-1.502-1.1009-.397-.4403-.694-.9289-.89-1.4656-.189-.5332-.27-1.0878-.241-1.6638.036-.5724.196-1.1412.479-1.7063.283-.5651.643-1.0336 1.079-1.4054.444-.3683.94-.6345 1.487-.7988.548-.1643 1.119-.214 1.712-.1493.598.0576 1.197.2368 1.798.5377.665.3331 1.207.743 1.625 1.2298.426.4904.715 1.038.869 1.6427l-1.632.4713c-.129-.4222-.32-.7819-.574-1.079-.25-.3042-.565-.5512-.944-.7411-.365-.1827-.726-.292-1.084-.328-.357-.0359-.701-.0021-1.03.1014-.322.1072-.617.2769-.886.5093-.261.236-.481.5329-.66.8905-.176.3505-.28.7011-.312 1.0517-.025.3542.014.6959.117 1.0251.115.3256.29.6191.526.8804.243.2649.543.4869.901.666.343.1719.703.2848 1.078.3387.387.0503.8.0201 1.24-.0906l.359 1.7497c-.562.1035-1.156.1013-1.782-.0063-.619-.1042-1.197-.2905-1.733-.5592Zm2.039-.455 1.413-2.822 1.589.7952-1.526 3.0473-1.476-1.0205Zm2.677 2.6552 3.761-7.511 1.738.8703-3.761 7.5111-1.738-.8704Zm2.533 1.2687 7.109-5.8348 1.717.8596-.403 9.1927-1.824-.9134.574-8.0066.686.3439-6.077 5.2504-1.782-.8918Zm2.48-.7714 1.122-1.0888 3.863 1.9341-.189 1.5562-4.796-2.4015Zm14.652 7.2962c-.243-.1217-.439-.2918-.59-.5101-.139-.2219-.219-.4635-.241-.7246-.017-.2684.04-.5349.173-.7996.132-.2646.309-.4667.531-.6061.222-.1394.462-.2162.719-.2303.269-.0178.525.0342.768.156.243.1218.434.2936.574.5155.15.2184.236.4581.257.7193.021.2612-.034.5241-.167.7888-.133.2647-.312.4703-.537.6168-.222.1394-.467.218-.735.2358-.258.0141-.508-.0397-.752-.1615Zm11.655 8.0501c-.593-.2973-1.096-.6697-1.507-1.1171-.404-.4439-.704-.9342-.901-1.471-.189-.5332-.269-1.0878-.24-1.6638.036-.5724.193-1.1376.473-1.6955.279-.558.637-1.0229 1.074-1.3947.444-.3683.939-.6345 1.487-.7988.547-.1643 1.12-.2176 1.717-.16.598.0576 1.19.2332 1.776.5269.594.2973 1.089.6661 1.486 1.1064.404.4438.701.9324.89 1.4655.197.5368.281 1.0932.252 1.6692-.026.5688-.18 1.1358-.463 1.7009-.279.558-.643 1.0247-1.09 1.4001-.444.3682-.94.6345-1.487.7988-.537.1606-1.104.2122-1.701.1546-.591-.054-1.179-.2278-1.766-.5215Zm.731-1.4862c.336.1684.672.2652 1.009.2904.343.0288.676-.0103.998-.1175.322-.1071.614-.2787.875-.5147.269-.2324.492-.5274.671-.8851.179-.3577.282-.7136.307-1.0678.032-.3506-.005-.6869-.112-1.0089-.1-.3185-.265-.6066-.493-.8643-.229-.2578-.512-.4708-.848-.6391-.336-.1684-.676-.267-1.02-.2958-.336-.0252-.665.0157-.987.1229-.322.1071-.617.2769-.886.5093-.261.236-.481.5328-.66.8905-.176.3505-.282.7046-.318 1.0624-.025.3542.013.6905.113 1.009.107.322.275.6119.503.8696.229.2578.512.4708.848.6391Zm4.739 4.0639 3.761-7.5111 3.412 1.7085c.816.4083 1.456.9257 1.92 1.552.469.6192.739 1.2956.81 2.0291.071.7334-.085 1.4829-.469 2.2483-.379.7582-.886 1.3322-1.519 1.7218-.63.3824-1.335.5752-2.115.5784-.776-.004-1.572-.2102-2.388-.6185l-3.412-1.7085Zm2.453-.5568 1.588.7952c.501.2507.98.3744 1.438.3711.469-.0069.891-.1355 1.267-.3857.383-.2466.692-.606.929-1.0781.24-.4793.342-.9426.306-1.3898-.024-.4508-.176-.8623-.455-1.2346-.268-.3758-.653-.689-1.153-.9398l-1.588-.7951-2.332 4.6568Zm9.996 6.951c-.594-.2973-1.096-.6697-1.508-1.1171-.404-.4439-.704-.9342-.9-1.471-.19-.5332-.27-1.0878-.241-1.6638.036-.5724.194-1.1376.473-1.6955.28-.558.638-1.0229 1.074-1.3947.444-.3683.94-.6345 1.487-.7988.548-.1643 1.12-.2176 1.718-.16.597.0576 1.189.2332 1.776.5269.594.2973 1.089.6661 1.486 1.1064.404.4438.7.9323.89 1.4655.196.5368.28 1.0932.251 1.6692-.025.5688-.18 1.1358-.462 1.7009-.28.558-.643 1.0247-1.091 1.4001-.444.3682-.939.6345-1.487.7987-.536.1607-1.104.2123-1.701.1547-.59-.054-1.179-.2278-1.765-.5215Zm.73-1.4862c.337.1684.673.2652 1.009.2904.344.0288.676-.0104.998-.1175.322-.1072.614-.2787.875-.5147.269-.2324.493-.5274.672-.8851.179-.3577.281-.7136.306-1.0678.033-.3506-.005-.6869-.112-1.009-.1-.3184-.264-.6065-.493-.8642-.229-.2578-.511-.4708-.848-.6391-.336-.1684-.676-.267-1.019-.2958-.336-.0252-.666.0157-.988.1229-.322.1071-.617.2769-.885.5093-.262.236-.482.5328-.661.8905-.175.3505-.281.7046-.317 1.0624-.025.3542.012.6905.112 1.009.107.322.275.6119.504.8696.229.2578.511.4708.847.6391Zm4.739 4.0639 3.761-7.5111 1.438.7199 1.724 7.6269-.698-.3492 2.708-5.408 1.717.8596-3.761 7.5111-1.427-.7146-1.734-7.6322.697.3492-2.708 5.408-1.717-.8596Zm10.222 5.118 3.052-6.0947-2.404-1.2034.709-1.4164 6.546 3.2773-.709 1.4164-2.404-1.2035-3.052 6.0947-1.738-.8704Zm8.556 4.4452c-.594-.2973-1.096-.6697-1.507-1.1171-.404-.4439-.704-.9342-.901-1.471-.189-.5332-.269-1.0878-.24-1.6638.036-.5724.193-1.1376.473-1.6955.279-.558.637-1.0229 1.074-1.3947.444-.3683.939-.6345 1.487-.7988.547-.1643 1.12-.2176 1.717-.16.598.0576 1.19.2332 1.776.5269.594.2973 1.089.6661 1.486 1.1064.404.4438.701.9323.89 1.4655.197.5368.28 1.0932.251 1.6692-.025.5688-.179 1.1358-.462 1.7009-.279.558-.643 1.0247-1.09 1.4001-.444.3682-.94.6345-1.487.7988-.537.1606-1.104.2122-1.701.1546-.591-.054-1.179-.2278-1.766-.5215Zm.731-1.4862c.336.1684.672.2652 1.009.2904.343.0288.676-.0103.998-.1175.322-.1071.614-.2787.875-.5147.268-.2324.492-.5274.671-.8851.179-.3577.282-.7136.307-1.0678.032-.3506-.005-.6869-.112-1.0089-.1-.3185-.265-.6066-.494-.8643-.228-.2578-.511-.4708-.847-.6391-.336-.1684-.676-.267-1.02-.2958-.336-.0252-.665.0157-.987.1229-.322.1071-.617.2769-.886.5093-.261.236-.481.5328-.661.8905-.175.3505-.281.7046-.317 1.0624-.025.3542.012.6905.112 1.009.108.322.276.6119.504.8696.229.2578.512.4708.848.6391Zm4.739 4.0639 3.761-7.5111 1.738.8704-3.052 6.0947 3.767 1.8858-.709 1.4163-5.505-2.7561Zm9.934 5.1349c-.594-.2972-1.096-.6696-1.508-1.1171-.404-.4438-.704-.9341-.9-1.4709-.19-.5332-.27-1.0878-.241-1.6638.036-.5724.194-1.1376.473-1.6955.28-.558.638-1.0229 1.074-1.3947.444-.3683.94-.6346 1.487-.7988.548-.1643 1.12-.2176 1.718-.16.597.0575 1.189.2332 1.776.5269.594.2973 1.089.6661 1.486 1.1063.404.4439.7.9324.89 1.4656.196.5368.28 1.0932.251 1.6692-.025.5688-.179 1.1358-.462 1.7009-.28.558-.643 1.0246-1.091 1.4001-.444.3682-.939.6345-1.487.7987-.536.1607-1.103.2123-1.701.1547-.59-.054-1.179-.2279-1.765-.5216Zm.73-1.4861c.337.1684.673.2651 1.009.2904.344.0288.676-.0104.998-.1175.323-.1072.614-.2787.875-.5147.269-.2324.493-.5274.672-.8851.179-.3577.281-.7136.306-1.0678.033-.3506-.005-.6869-.112-1.009-.1-.3184-.264-.6065-.493-.8643-.229-.2577-.511-.4707-.848-.6391-.336-.1683-.676-.2669-1.019-.2957-.336-.0252-.666.0157-.988.1229-.322.1071-.617.2769-.885.5093-.262.236-.482.5328-.661.8905-.175.3505-.281.7046-.317 1.0624-.025.3541.012.6905.112 1.0089.107.3221.275.612.504.8697.229.2577.511.4708.847.6391Zm8.302 6.0086c-.594-.2973-1.095-.6643-1.502-1.101-.397-.4403-.694-.9288-.89-1.4656-.19-.5332-.27-1.0878-.241-1.6638.036-.5724.196-1.1412.479-1.7063.283-.5651.643-1.0336 1.079-1.4054.444-.3683.94-.6345 1.487-.7988.548-.1643 1.118-.214 1.712-.1493.598.0576 1.197.2368 1.798.5377.665.3331 1.207.7431 1.625 1.2299.426.4903.715 1.0379.869 1.6426l-1.632.4714c-.129-.4223-.32-.782-.574-1.0791-.25-.3042-.565-.5512-.944-.7411-.365-.1826-.726-.292-1.084-.3279-.357-.036-.701-.0022-1.03.1013-.322.1072-.617.277-.886.5094-.261.2359-.481.5328-.66.8904-.176.3505-.28.7011-.312 1.0517-.026.3542.014.6959.117 1.0251.114.3256.29.6191.526.8804.243.2649.543.4869.901.666.343.1719.703.2848 1.078.3387.387.0503.8.0201 1.24-.0906l.359 1.7497c-.562.1035-1.156.1013-1.782-.0063-.619-.1041-1.197-.2905-1.733-.5591Zm2.039-.455 1.413-2.8221 1.588.7952-1.525 3.0473-1.476-1.0204Zm2.677 2.6552 3.76-7.5111 1.739.8704-3.761 7.511-1.738-.8703Zm2.533 1.2686 7.109-5.8348 1.717.8596-.403 9.1927-1.824-.9134.574-8.0065.686.3438-6.078 5.2504-1.781-.8918Zm2.48-.7714 1.122-1.0888 3.863 1.9342-.189 1.5562-4.796-2.4016Zm14.652 7.2962c-.243-.1217-.44-.2918-.59-.5101-.139-.2219-.219-.4635-.241-.7246-.018-.2684.04-.5349.172-.7996.133-.2646.31-.4667.532-.6061.222-.1394.462-.2162.719-.2303.269-.0178.524.0343.768.156.243.1218.434.2937.574.5155.15.2184.235.4581.257.7193.021.2612-.035.5241-.167.7888-.133.2647-.312.4703-.537.6169-.222.1394-.467.2179-.735.2357-.258.0141-.508-.0397-.752-.1615Zm11.655 8.0499c-.594-.297-1.096-.6695-1.507-1.1169-.404-.4439-.704-.9342-.901-1.471-.189-.5332-.269-1.0877-.24-1.6637.036-.5725.193-1.1376.473-1.6956.279-.558.637-1.0229 1.074-1.3947.444-.3683.939-.6345 1.487-.7988.547-.1642 1.12-.2176 1.717-.16.598.0576 1.19.2332 1.776.5269.594.2973 1.089.6661 1.486 1.1064.404.4438.701.9324.89 1.4655.197.5368.28 1.0932.251 1.6692-.025.5688-.179 1.1358-.462 1.7009-.279.558-.643 1.0247-1.09 1.3998-.444.369-.94.635-1.487.799-.537.161-1.104.212-1.701.155-.591-.054-1.179-.228-1.766-.522Zm.731-1.4859c.336.1683.672.2651 1.009.2903.343.0288.676-.0103.998-.1175.322-.1071.614-.2787.875-.5147.268-.2324.492-.5274.671-.8851.179-.3577.282-.7136.307-1.0678.032-.3506-.005-.6869-.112-1.0089-.1-.3185-.265-.6066-.494-.8643-.228-.2578-.511-.4708-.847-.6391-.336-.1684-.676-.267-1.02-.2958-.336-.0252-.665.0158-.987.1229-.322.1072-.617.2769-.886.5093-.261.236-.481.5328-.661.8905-.175.3505-.281.7047-.317 1.0624-.025.3542.012.6905.112 1.009.108.322.276.6119.504.8696.229.2578.512.4708.848.6392Zm4.739 4.0639 3.761-7.5112 1.438.72 1.723 7.6272-.697-.35 2.708-5.4076 1.717.8597-3.761 7.5109-1.427-.714-1.735-7.6327.698.3492-2.708 5.4085-1.717-.86Zm8.666 4.339 3.761-7.5111 3.412 1.7081c.815.409 1.455.926 1.92 1.552.468.62.738 1.296.809 2.029.071.734-.085 1.483-.468 2.249-.379.758-.886 1.332-1.52 1.722-.629.382-1.334.575-2.114.578-.777-.004-1.573-.21-2.388-.619l-3.412-1.708Zm2.453-.557 1.588.795c.5.251.98.375 1.438.371.468-.006.891-.135 1.266-.385.383-.247.693-.606.929-1.078.24-.48.343-.943.307-1.39-.025-.451-.176-.862-.455-1.235-.268-.376-.653-.689-1.154-.94l-1.588-.795-2.331 4.657Zm9.995 6.951c-.593-.297-1.096-.67-1.507-1.117-.404-.444-.704-.934-.901-1.471-.189-.533-.269-1.088-.24-1.664.036-.572.194-1.137.473-1.695.279-.558.637-1.023 1.074-1.395.444-.368.94-.634 1.487-.799.548-.164 1.12-.217 1.717-.16.598.058 1.19.233 1.776.527.594.297 1.09.666 1.486 1.106.404.444.701.933.89 1.466.197.537.281 1.093.252 1.669-.026.569-.18 1.136-.463 1.701-.279.558-.643 1.025-1.09 1.4-.444.368-.94.635-1.487.799-.537.161-1.104.212-1.701.155-.591-.054-1.179-.228-1.766-.522Zm.731-1.486c.336.168.673.265 1.009.29.343.029.676-.01.998-.117.322-.107.614-.279.875-.515.269-.232.492-.527.671-.885.18-.358.282-.714.307-1.068.032-.35-.005-.687-.112-1.009-.1-.318-.265-.606-.493-.864-.229-.258-.512-.471-.848-.639-.336-.168-.676-.267-1.019-.296-.337-.025-.666.016-.988.123-.322.107-.617.277-.886.509-.261.236-.481.533-.66.891-.176.35-.282.704-.318 1.062-.025.354.013.691.113 1.009.107.322.275.612.504.87.228.258.511.471.847.639Zm4.739 4.064 3.761-7.511 1.438.72 1.724 7.627-.698-.35 2.708-5.408 1.717.86-3.761 7.511-1.427-.715-1.735-7.632.698.349-2.708 5.408-1.717-.859Zm10.222 5.118 3.051-6.095-2.403-1.203.709-1.417 6.546 3.278-.71 1.416-2.403-1.203-3.052 6.094-1.738-.87Zm8.556 4.445c-.594-.297-1.096-.67-1.507-1.117-.404-.444-.705-.934-.901-1.471-.19-.533-.27-1.088-.241-1.664.036-.572.194-1.137.473-1.695.28-.558.638-1.023 1.075-1.395.443-.368.939-.635 1.487-.799.547-.164 1.119-.217 1.717-.16.597.058 1.189.233 1.776.527.594.297 1.089.666 1.486 1.106.404.444.701.933.89 1.466.196.537.28 1.093.251 1.669-.025.569-.179 1.136-.462 1.701-.28.558-.643 1.025-1.091 1.4-.443.368-.939.635-1.487.799-.536.161-1.103.212-1.701.155-.59-.054-1.179-.228-1.765-.522Zm.731-1.486c.336.168.672.265 1.008.29.344.029.677-.01.999-.117.322-.107.613-.279.875-.515.268-.232.492-.527.671-.885.179-.358.281-.714.306-1.068.033-.35-.005-.687-.112-1.009-.1-.318-.264-.606-.493-.864-.229-.258-.511-.471-.847-.639-.337-.169-.676-.267-1.02-.296-.336-.025-.665.016-.987.123-.323.107-.618.277-.886.509-.262.236-.482.533-.661.891-.175.35-.281.704-.317 1.062-.025.354.012.691.112 1.009.107.322.275.612.504.87.229.258.511.471.848.639Zm4.739 4.064 3.761-7.511 1.738.87-3.052 6.095 3.766 1.886-.709 1.416-5.504-2.756Zm9.933 5.135c-.593-.298-1.096-.67-1.507-1.117-.404-.444-.704-.935-.901-1.471-.189-.534-.269-1.088-.24-1.664.036-.573.194-1.138.473-1.696.279-.558.637-1.023 1.074-1.394.444-.369.94-.635 1.487-.799.548-.164 1.12-.218 1.717-.16.598.057 1.19.233 1.777.527.593.297 1.089.666 1.485 1.106.404.444.701.932.89 1.466.197.536.281 1.093.252 1.669-.026.569-.18 1.136-.463 1.701-.279.558-.643 1.024-1.09 1.4-.444.368-.939.634-1.487.799-.537.16-1.104.212-1.701.154-.591-.054-1.179-.228-1.766-.521Zm.731-1.486c.336.168.673.265 1.009.29.343.029.676-.01.998-.118.322-.107.614-.278.875-.514.269-.233.492-.528.671-.885.18-.358.282-.714.307-1.068.032-.351-.005-.687-.112-1.009-.1-.319-.265-.607-.493-.864-.229-.258-.512-.471-.848-.64-.336-.168-.676-.266-1.019-.295-.337-.025-.666.015-.988.123-.322.107-.617.277-.886.509-.261.236-.481.533-.66.89-.176.351-.282.705-.318 1.063-.025.354.013.69.113 1.009.107.322.275.612.504.869.228.258.511.471.847.64Zm8.301 6.008c-.593-.297-1.094-.664-1.502-1.101-.396-.44-.693-.929-.89-1.465-.189-.534-.269-1.088-.24-1.664.036-.573.196-1.141.478-1.707.283-.565.643-1.033 1.08-1.405.444-.368.939-.634 1.487-.799.547-.164 1.118-.214 1.712-.149.597.058 1.197.237 1.797.538.666.333 1.208.743 1.626 1.23.425.49.715 1.037.868 1.642l-1.631.471c-.129-.422-.32-.781-.574-1.079-.25-.304-.565-.551-.944-.741-.365-.182-.726-.292-1.084-.328-.358-.036-.701-.002-1.03.102-.322.107-.618.277-.886.509-.261.236-.482.533-.661.891-.175.35-.279.701-.312 1.051-.025.354.014.696.118 1.025.114.326.289.619.525.881.243.265.544.487.901.666.344.172.703.285 1.079.338.386.051.8.021 1.24-.09l.358 1.75c-.561.103-1.155.101-1.781-.007-.619-.104-1.197-.29-1.734-.559Zm2.04-.455 1.413-2.822 1.588.795-1.526 3.048-1.475-1.021Zm2.676 2.655 3.761-7.511 1.738.871-3.76 7.511-1.739-.871Zm2.534 1.269 7.109-5.835 1.716.86-.402 9.192-1.824-.913.573-8.007.687.344-6.078 5.251-1.781-.892Zm2.48-.771 1.122-1.089 3.863 1.934-.189 1.556-4.796-2.401Z" fill="var(--cro-text-suspended)"/></g><g filter="url(#b)"><path fill="var(--cro-primary)" d="m52.5156-60.4819 358.23726591 358.23726591-25.24434848 25.24434849L27.27125152-35.23755152z"/><path d="M86.4891 5.30354c-.8428-.84288-1.2671-1.73666-1.2728-2.68135-.0056-.9447.4271-1.852623 1.2983-2.723779l3.3262-3.326231 1.3746 1.37462-3.2753 3.27532c-.5657.56568-.857 1.08894-.874 1.56977-.0169.48084.1839.93055.6025 1.34916.4186.41861.8683.61943 1.3491.60246.4809-.01697 1.0041-.3083 1.5698-.87399L93.8628.594204l1.3577 1.357646-3.3262 3.32623c-.8712.87116-1.7791 1.30391-2.7238 1.29825-.9447-.00566-1.8385-.42992-2.6814-1.27279Zm4.1501 3.94638 5.9397-5.9397 1.137 1.13703-.7722 7.78105-.5515-.5516 4.2768-4.27657 1.357 1.35764-5.9393 5.93973-1.1285-1.1286.7636-7.78946.5516.55154-4.2766 4.27662-1.3576-1.35768Zm6.8528 6.85288 5.94-5.9397 1.374 1.3746-5.9394 5.9397-1.3746-1.3746Zm2.784 2.7842 5.94-5.9397 2.698 2.6983c.645.6449 1.089 1.3379 1.332 2.0789.249.7354.292 1.4623.128 2.1807-.164.7185-.549 1.3803-1.154 1.9856-.6.5996-1.262.9843-1.986 1.154-.718.1641-1.448.1245-2.189-.1188-.735-.2489-1.426-.6958-2.07-1.3407l-2.699-2.6983Zm2.503.2461 1.256 1.2558c.396.396.812.6647 1.248.8061.446.1414.888.1527 1.323.034.442-.1132.849-.3564 1.222-.7298.379-.379.622-.7863.73-1.2219.119-.4355.105-.8739-.043-1.3152-.135-.4412-.401-.8598-.797-1.2558l-1.256-1.2558-3.683 3.6826Zm3.644 5.9007 8.587-3.2923 1.358 1.3577-3.284 8.5956-1.443-1.4425 3.072-7.4162.543.5431-7.424 3.0632-1.409-1.4086Zm2.597.0509 1.408-.6788 3.055 3.0547-.671 1.417-3.792-3.7929Zm11.599 11.5488c-.192-.1924-.325-.4158-.399-.6704-.062-.2545-.062-.5091 0-.7637.068-.2602.207-.4949.416-.7042.209-.2093.441-.3451.696-.4073.255-.0623.506-.0594.755.0085.26.0678.487.1979.679.3903.192.1923.32.4158.382.6703.073.2546.079.5091.017.7637-.062.2545-.198.4865-.408.6958-.209.2093-.444.3479-.704.4158-.254.0622-.512.0594-.772-.0085-.249-.0679-.469-.198-.662-.3903Zm5.869 8.6685c-.843-.8428-1.268-1.7366-1.273-2.6813-.006-.9447.427-1.8526 1.298-2.7238l3.326-3.3262 1.375 1.3746-3.275 3.2753c-.566.5657-.857 1.089-.874 1.5698-.017.4808.183.9305.602 1.3491.419.4187.868.6195 1.349.6025.481-.017 1.004-.3083 1.57-.874l3.275-3.2753 1.358 1.3576-3.326 3.3263c-.871.8711-1.779 1.3039-2.724 1.2982-.945-.0056-1.839-.4299-2.681-1.2728Zm4.15 3.9464 5.939-5.9397 1.137 1.137-.772 7.781-.551-.5515 4.276-4.2766 1.358 1.3577-5.94 5.9397-1.128-1.1286.763-7.7895.552.5516-4.277 4.2766-1.357-1.3577Zm6.853 6.8529 5.939-5.9397 1.375 1.3746-5.94 5.9397-1.374-1.3746Zm2.784 2.7842 5.939-5.9397 2.699 2.6983c.645.6449 1.089 1.3379 1.332 2.0789.249.7354.291 1.4623.127 2.1807-.164.7185-.548 1.3803-1.154 1.9856-.599.5996-1.261.9843-1.985 1.154-.719.164-1.448.1244-2.19-.1188-.735-.2489-1.425-.6958-2.07-1.3407l-2.698-2.6983Zm2.503.2461 1.256 1.2558c.396.396.811.6647 1.247.8061.447.1414.888.1527 1.324.0339.441-.1131.848-.3563 1.222-.7297.379-.379.622-.7863.729-1.2219.119-.4355.105-.874-.042-1.3152-.136-.4412-.402-.8598-.798-1.2558l-1.255-1.2558-3.683 3.6826Zm3.644 5.9007 8.587-3.2923 1.357 1.3577-3.284 8.5955-1.442-1.4425 3.072-7.4161.543.5431-7.425 3.0632-1.408-1.4086Zm2.596.0509 1.409-.6788 3.054 3.0547-.67 1.417-3.793-3.7929Zm4.681 7.2263 5.939-5.9397 2.699 2.6983c.645.6449 1.089 1.3379 1.332 2.0789.249.7354.291 1.4623.127 2.1807-.164.7184-.549 1.3803-1.154 1.9856-.599.5996-1.261.9843-1.985 1.154-.719.164-1.449.1244-2.19-.1188-.735-.2489-1.425-.6958-2.07-1.3407l-2.698-2.6983Zm2.503.2461 1.256 1.2558c.396.396.811.6647 1.247.8061.447.1414.888.1527 1.324.0339.441-.1131.848-.3564 1.222-.7297.379-.379.622-.7863.729-1.2219.119-.4356.105-.874-.042-1.3152-.136-.4412-.402-.8599-.798-1.2558l-1.256-1.2559-3.682 3.6827Zm9.318 4.4816 2.86 2.8596-1.069 1.0691-2.86-2.8595 1.069-1.0692Zm-2.342 2.5456 3.233 3.2329-1.103 1.1031-4.599-4.599 5.94-5.9397 4.488 4.4887-1.103 1.1031-3.122-3.1226-3.734 3.7335Zm5.074 7.4832c-.476-.4752-.869-.9928-1.18-1.5528-.305-.5657-.489-1.0833-.551-1.5528l1.501-.5685c.074.4355.224.8853.45 1.3491.238.4639.535.874.891 1.2304.272.2715.515.4638.73.577.226.1131.427.1612.602.1442.176-.0169.326-.0876.45-.2121.158-.1584.221-.3451.187-.56-.029-.2206-.116-.4611-.263-.7213-.142-.2658-.311-.5487-.509-.8485-.187-.2998-.365-.6138-.535-.9419-.164-.3224-.286-.6477-.365-.9758-.079-.3281-.082-.659-.008-.9928.079-.3281.277-.6505.594-.9673.339-.3394.738-.5572 1.196-.6533.47-.0962.97-.0425 1.502.1612.543.2036 1.095.5855 1.655 1.1455.373.3733.695.7863.967 1.2388.277.4469.467.8967.568 1.3492l-1.468.6194c-.118-.4355-.28-.8287-.483-1.1794-.198-.3564-.43-.6675-.696-.9334-.266-.2659-.515-.4526-.747-.56-.232-.1075-.435-.1471-.611-.1188-.169.0226-.319.099-.449.2291-.153.1527-.215.3394-.187.56.034.215.124.4526.271.7128.148.2602.314.5402.501.84.192.3055.373.6166.543.9334.176.3224.303.6477.382.9758.079.3281.079.6562 0 .9843-.074.3337-.266.6562-.577.9673-.334.3338-.733.5459-1.196.6364-.464.0905-.968.0339-1.511-.1697-.537-.198-1.089-.5798-1.654-1.1455Zm10.48 7.68c-.193-.1923-.326-.4157-.399-.6703-.062-.2546-.062-.5091 0-.7637.068-.2602.206-.495.416-.7043.209-.2093.441-.345.696-.4073.254-.0622.506-.0594.755.0085.26.0679.486.198.679.3904.192.1923.319.4157.381.6703.074.2546.08.5091.017.7637-.062.2545-.198.4865-.407.6958-.209.2093-.444.3479-.704.4157-.255.0623-.512.0594-.772-.0084-.249-.0679-.47-.198-.662-.3904Zm5.868 8.669c-.843-.843-1.267-1.737-1.273-2.682-.005-.9444.427-1.8524 1.299-2.7235l3.326-3.3262 1.374 1.3746-3.275 3.2753c-.566.5657-.857 1.0888-.874 1.5698-.017.481.184.931.603 1.349.418.419.868.62 1.349.603.481-.017 1.004-.309 1.57-.874l3.275-3.2757 1.358 1.3577-3.327 3.326c-.871.871-1.779 1.304-2.723 1.298-.945-.005-1.839-.43-2.682-1.272Zm4.15 3.946 5.94-5.94 1.137 1.137-.772 7.781-.552-.551 4.277-4.277 1.357 1.358-5.939 5.94-1.129-1.129.764-7.789.551.551-4.276 4.277-1.358-1.358Zm6.853 6.853 5.94-5.94 1.374 1.375-5.939 5.939-1.375-1.374Zm2.784 2.784 5.94-5.94 2.698 2.699c.645.645 1.089 1.338 1.333 2.079.248.735.291 1.462.127 2.18-.164.719-.549 1.381-1.154 1.986-.6.6-1.262.984-1.986 1.154-.718.164-1.448.124-2.189-.119-.735-.249-1.425-.696-2.07-1.341l-2.699-2.698Zm2.503.246 1.256 1.256c.396.396.812.665 1.248.806.447.142.888.153 1.323.034.442-.113.849-.356 1.222-.73.379-.379.622-.786.73-1.222.119-.435.105-.874-.042-1.315-.136-.441-.402-.86-.798-1.256l-1.256-1.255-3.683 3.682Zm3.644 5.901 8.587-3.292 1.358 1.357-3.284 8.596-1.442-1.443 3.071-7.416.543.543-7.424 3.063-1.409-1.408Zm2.597.051 1.408-.679 3.055 3.055-.67 1.417-3.793-3.793Zm4.68 7.226 5.94-5.94 2.698 2.699c.645.645 1.089 1.338 1.333 2.079.248.735.291 1.462.127 2.18-.164.719-.549 1.381-1.154 1.986-.6.599-1.262.984-1.986 1.154-.718.164-1.448.124-2.189-.119-.735-.249-1.426-.696-2.07-1.341l-2.699-2.698Zm2.503.246 1.256 1.256c.396.396.812.665 1.248.806.447.141.888.153 1.323.034.442-.113.849-.356 1.222-.73.379-.379.622-.786.73-1.222.119-.435.105-.874-.042-1.315-.136-.441-.402-.86-.798-1.256l-1.256-1.255-3.683 3.682Zm9.319 4.482 2.859 2.859-1.069 1.07-2.859-2.86 1.069-1.069Zm-2.342 2.545 3.233 3.233-1.103 1.103-4.599-4.599 5.939-5.939 4.489 4.488-1.103 1.103-3.123-3.122-3.733 3.733Zm5.073 7.484c-.475-.476-.868-.993-1.179-1.553-.306-.566-.49-1.084-.552-1.553l1.502-.569c.074.436.223.886.45 1.35.237.463.534.874.891 1.23.271.271.514.464.729.577.227.113.428.161.603.144.175-.017.325-.087.45-.212.158-.158.22-.345.186-.56-.028-.221-.116-.461-.263-.721-.141-.266-.311-.549-.509-.849-.187-.3-.365-.613-.534-.942-.164-.322-.286-.647-.365-.975-.079-.328-.082-.659-.009-.993.079-.328.277-.651.594-.967.34-.34.738-.558 1.197-.654.469-.096.97-.042 1.502.161.543.204 1.094.586 1.654 1.146.373.373.696.786.967 1.239.278.447.467.896.569 1.349l-1.468.619c-.119-.435-.28-.828-.484-1.179-.198-.357-.43-.668-.695-.934-.266-.265-.515-.452-.747-.56-.232-.107-.436-.147-.611-.118-.17.022-.32.099-.45.229-.153.152-.215.339-.186.56.033.215.124.452.271.713.147.26.314.54.501.84.192.305.373.616.543.933.175.322.302.648.382.976.079.328.079.656 0 .984-.074.334-.266.656-.577.967-.334.334-.733.546-1.197.637-.464.09-.967.034-1.51-.17-.538-.198-1.089-.58-1.655-1.145Zm10.48 7.68c-.192-.193-.325-.416-.398-.671-.063-.254-.063-.509 0-.763.067-.261.206-.495.415-.705.21-.209.442-.345.696-.407.255-.062.506-.059.755.009.261.067.487.198.679.39.192.192.32.416.382.67.073.255.079.509.017.764-.062.254-.198.486-.407.696-.21.209-.444.348-.705.415-.254.063-.512.06-.772-.008-.249-.068-.469-.198-.662-.39Zm5.869 8.668c-.843-.843-1.267-1.736-1.273-2.681-.006-.945.427-1.853 1.298-2.724l3.326-3.326 1.375 1.374-3.275 3.276c-.566.565-.857 1.089-.874 1.57-.017.48.184.93.602 1.349.419.418.869.619 1.349.602.481-.017 1.004-.308 1.57-.874l3.275-3.275 1.358 1.358-3.326 3.326c-.871.871-1.779 1.304-2.724 1.298-.945-.006-1.838-.43-2.681-1.273Zm4.15 3.947 5.939-5.94 1.138 1.137-.773 7.781-.551-.552 4.276-4.276 1.358 1.357-5.94 5.94-1.128-1.128.763-7.79.552.552-4.277 4.276-1.357-1.357Zm6.853 6.852 5.939-5.939 1.375 1.374-5.94 5.94-1.374-1.375Zm2.784 2.785 5.94-5.94 2.698 2.698c.645.645 1.089 1.338 1.332 2.079.249.736.291 1.462.127 2.181-.164.718-.548 1.38-1.154 1.985-.599.6-1.261.985-1.985 1.154-.719.165-1.448.125-2.189-.118-.736-.249-1.426-.696-2.071-1.341l-2.698-2.698Zm2.503.246 1.256 1.256c.396.396.812.664 1.247.806.447.141.888.152 1.324.034.441-.114.848-.357 1.222-.73.379-.379.622-.786.73-1.222.118-.436.104-.874-.043-1.315-.136-.441-.402-.86-.798-1.256l-1.255-1.256-3.683 3.683Zm3.644 5.9 8.587-3.292 1.357 1.358-3.283 8.595-1.443-1.442 3.072-7.416.543.543-7.425 3.063-1.408-1.409Zm2.596.051 1.409-.678 3.054 3.054-.67 1.417-3.793-3.793Zm4.681 7.227 5.94-5.94 2.698 2.698c.645.645 1.089 1.338 1.332 2.079.249.736.291 1.462.127 2.181-.164.718-.548 1.38-1.154 1.985-.599.6-1.261.985-1.985 1.154-.719.164-1.448.125-2.189-.118-.736-.249-1.426-.696-2.071-1.341l-2.698-2.698Zm2.503.246 1.256 1.256c.396.396.812.664 1.247.806.447.141.888.152 1.324.034.441-.114.848-.357 1.222-.73.379-.379.622-.786.73-1.222.118-.436.104-.874-.043-1.315-.136-.441-.402-.86-.798-1.256l-1.255-1.256-3.683 3.683Zm9.318 4.481 2.86 2.86-1.069 1.069-2.86-2.859 1.069-1.07Zm-2.342 2.546 3.233 3.233-1.103 1.103-4.599-4.599 5.94-5.94 4.489 4.489-1.104 1.103-3.122-3.123-3.734 3.734Zm5.074 7.483c-.475-.475-.869-.993-1.18-1.553-.305-.565-.489-1.083-.551-1.552l1.502-.569c.073.436.223.885.449 1.349.238.464.535.874.891 1.231.272.271.515.463.73.577.226.113.427.161.602.144.176-.017.326-.088.45-.212.159-.159.221-.345.187-.56-.028-.221-.116-.461-.263-.722-.142-.265-.311-.548-.509-.848-.187-.3-.365-.614-.535-.942-.164-.322-.286-.648-.365-.976-.079-.328-.082-.659-.008-.993.079-.328.277-.65.594-.967.339-.339.738-.557 1.196-.653.47-.096.97-.043 1.502.161.543.204 1.095.585 1.655 1.145.373.374.696.787.967 1.239.277.447.467.897.569 1.349l-1.468.62c-.119-.436-.28-.829-.484-1.18-.198-.356-.43-.667-.696-.933-.266-.266-.515-.452-.747-.56-.231-.107-.435-.147-.611-.119-.169.023-.319.099-.449.229-.153.153-.215.34-.187.56.034.215.125.453.272.713.147.26.314.54.5.84.193.306.374.617.543.934.176.322.303.647.382.975.079.328.079.657 0 .985-.073.333-.266.656-.577.967-.334.334-.732.546-1.196.636-.464.091-.968.034-1.511-.169-.537-.198-1.089-.58-1.654-1.146Zm10.48 7.68c-.192-.192-.325-.416-.399-.67-.062-.255-.062-.509 0-.764.068-.26.207-.495.416-.704.209-.209.441-.345.696-.407.254-.063.506-.06.755.008.26.068.486.198.679.39.192.193.319.416.382.671.073.254.079.509.016.763-.062.255-.197.487-.407.696-.209.21-.444.348-.704.416-.255.062-.512.059-.772-.008-.249-.068-.47-.198-.662-.391Zm8.271 11.072c-.842-.843-1.267-1.737-1.272-2.682-.006-.944.427-1.852 1.298-2.723l3.326-3.327 1.375 1.375-3.276 3.275c-.565.566-.857 1.089-.874 1.57-.017.481.184.931.603 1.349.418.419.868.62 1.349.603.481-.017 1.004-.308 1.57-.874l3.275-3.276 1.358 1.358-3.326 3.326c-.872.872-1.78 1.304-2.724 1.299-.945-.006-1.839-.43-2.682-1.273Zm4.15 3.946 5.94-5.939 1.137 1.137-.772 7.781-.552-.552 4.277-4.277 1.358 1.358-5.94 5.94-1.129-1.129.764-7.789.552.551-4.277 4.277-1.358-1.358Zm6.853 6.853 5.94-5.94 1.375 1.375-5.94 5.94-1.375-1.375Zm2.785 2.784 5.939-5.939 2.699 2.698c.644.645 1.088 1.338 1.332 2.079.249.735.291 1.462.127 2.181-.164.718-.549 1.38-1.154 1.985-.6.6-1.261.984-1.986 1.154-.718.164-1.448.125-2.189-.119-.735-.249-1.425-.695-2.07-1.34l-2.698-2.699Zm2.503.246 1.256 1.256c.395.396.811.665 1.247.806.447.142.888.153 1.324.034.441-.113.848-.356 1.221-.729.379-.38.623-.787.73-1.222.119-.436.105-.874-.042-1.316-.136-.441-.402-.859-.798-1.255l-1.256-1.256-3.682 3.682Zm3.643 5.901 8.587-3.292 1.358 1.357-3.284 8.596-1.442-1.442 3.071-7.417.543.543-7.424 3.064-1.409-1.409Zm2.597.051 1.408-.679 3.055 3.055-.67 1.417-3.793-3.793Zm4.681 7.226 5.939-5.939 2.699 2.698c.644.645 1.088 1.338 1.332 2.079.249.735.291 1.462.127 2.181-.164.718-.549 1.38-1.154 1.985-.6.6-1.261.984-1.986 1.154-.718.164-1.448.125-2.189-.119-.735-.249-1.425-.696-2.07-1.34l-2.698-2.699Zm2.503.246 1.255 1.256c.396.396.812.665 1.248.806.447.142.888.153 1.324.034.441-.113.848-.356 1.221-.73.379-.379.623-.786.73-1.221.119-.436.105-.874-.042-1.316-.136-.441-.402-.859-.798-1.255l-1.256-1.256-3.682 3.682Zm9.318 4.482 2.86 2.86-1.07 1.069-2.859-2.86 1.069-1.069Zm-2.342 2.546 3.233 3.233-1.103 1.103-4.599-4.599 5.94-5.94 4.488 4.489-1.103 1.103-3.122-3.123-3.734 3.734Zm5.073 7.483c-.475-.475-.868-.993-1.179-1.553-.306-.566-.489-1.083-.552-1.553l1.502-.568c.074.435.224.885.45 1.349.238.464.535.874.891 1.23.271.272.515.464.73.577.226.113.427.161.602.144.175-.017.325-.087.45-.212.158-.158.22-.345.187-.56-.029-.22-.116-.461-.264-.721-.141-.266-.311-.549-.509-.849-.186-.299-.365-.613-.534-.941-.164-.323-.286-.648-.365-.976-.079-.328-.082-.659-.009-.993.08-.328.278-.65.594-.967.34-.34.739-.557 1.197-.654.469-.096.97-.042 1.502.162.543.203 1.094.585 1.654 1.145.374.373.696.786.968 1.239.277.447.466.897.568 1.349l-1.468.62c-.119-.436-.28-.829-.483-1.18-.198-.356-.43-.667-.696-.933-.266-.266-.515-.453-.747-.56-.232-.108-.436-.147-.611-.119-.17.022-.319.099-.45.229-.152.153-.215.339-.186.56.034.215.124.453.271.713.147.26.314.54.501.84.192.305.373.616.543.933.175.323.303.648.382.976.079.328.079.656 0 .984-.074.334-.266.656-.577.968-.334.333-.733.545-1.197.636-.463.091-.967.034-1.51-.17-.537-.198-1.089-.58-1.655-1.145Z" fill="var(--cro-text-suspended)"/></g><defs><filter id="a" x=".734741" y="-45.061" width="390.841" height="227.605" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="4"/><feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.145098 0 0 0 0 0.160784 0 0 0 0.12 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17362_72"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_17362_72" result="shape"/></filter><filter id="b" x="19.2712" y="-66.4819" width="399.482" height="399.482" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="4"/><feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.145098 0 0 0 0 0.160784 0 0 0 0.12 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17362_72"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_17362_72" result="shape"/></filter></defs></svg>
                </div>
                <p class="cro-first-paragraph-cta-consultor-odonto">Estude Odontologia com benefícios exclusivos e suporte completo!</p>
                <p class="cro-second-paragraph-cta-consultor-odonto">Escolha a unidade em <b>São Paulo</b> que melhor atende às suas necessidades:</p>
                <div class="cro-container-galery-consultor-odonto">
                    <svg class="cro-svg-back-galery-consultor-odonto" xmlns="http://www.w3.org/2000/svg" width="166" height="223" fill="none"><path d="M0 24C0 10.7452 10.7452 0 24 0h118c13.255 0 24 10.7452 24 24v237H0V24Z" fill="var(--cro-primary)"/></svg>
                    <div class="cro-galery-consultor-odonto">
                        <div class="cro-container-button-consultor-odonto">
                            <a onclick='newFireGA("anhanguera", "consultor_pdp", "clique:botao", "ver_fotos", "Consultor_odonto")'id="cro-button-modal-galery">
                                <span>Ver todas as fotos</span>
                            </a>
                        </div>
                    </div>
                    <div class="cro-container-unidades-consultor-odonto">
                        ${unidades.map(unidade => /*html*/`
                        <div class="cro-box-unidade-consultor-odonto">
                            <div class="cro-container-top-svg-consultor-odonto">
                                ${!unidade.disponibilidade ? /*html*/ `<div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="34" fill="none"><path d="M191.077 30.8161 200-12H0l8.40194 42.771C8.77047 32.647 10.415 34 12.3269 34H187.161c1.894 0 3.529-1.3292 3.916-3.1839Z" fill="var(--cro-suspended)"/></svg>
                                    <span>Inscrições suspensas</span>
                                </div>`: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="var(--cro-primary)"><path d="M26.2089 9.47175c-2.0095-2.00951-4.735-3.13844-7.5769-3.13844-2.8418 0-5.5673 1.12893-7.5768 3.13844-2.00952 2.00955-3.13845 4.73495-3.13845 7.57685s1.12893 5.5674 3.13845 7.5769l6.655 6.6676c.1174.1184.2571.2123.4109.2764.1539.0641.319.0971.4857.0971.1667 0 .3318-.033.4856-.0971.1539-.0641.2936-.158.411-.2764l6.7055-6.7308c2.0011-2.0011 3.1253-4.7152 3.1253-7.5453 0-2.83-1.1242-5.5441-3.1253-7.54525ZM24.4031 22.7565l-5.7711 5.7963-5.771-5.7963c-1.1401-1.1412-1.9163-2.5948-2.2305-4.177-.3142-1.5822-.1522-3.2221.4655-4.7123.6176-1.4902 1.6632-2.7638 3.0046-3.6599 1.3414-.89605 2.9183-1.3743 4.5314-1.3743 1.6132 0 3.1901.47825 4.5315 1.3743 1.3414.8961 2.387 2.1697 3.0046 3.6599.6177 1.4902.7797 3.1301.4655 4.7123-.3142 1.5822-1.0904 3.0358-2.2305 4.177Zm-9.5595-9.5847c-1.0194 1.0226-1.5919 2.4076-1.5919 3.8516 0 1.4439.5725 2.8289 1.5919 3.8515.7574.7587 1.722 1.2768 2.7727 1.4894 1.0507.2125 2.1409.1101 3.1336-.2946.9927-.4046 1.8438-1.0934 2.4466-1.9799.6027-.8866.9302-1.9313.9414-3.0033.0057-.7158-.1322-1.4254-.4055-2.0869-.2733-.6616-.6764-1.2616-1.1856-1.7647-.5005-.5119-1.0973-.9199-1.7561-1.2003-.6587-.2805-1.3664-.4278-2.0824-.4337-.7159-.0059-1.4259.1299-2.0892.3995-.6633.2696-1.2667.6677-1.7755 1.1714Zm5.9226 5.9099c-.4786.4859-1.111.7904-1.7892.8616-.6783.0712-1.3602-.0955-1.9291-.4714-.569-.376-.9897-.9379-1.1902-1.5897-.2006-.6518-.1684-1.3531.0908-1.9838.2593-.6308.7296-1.1519 1.3306-1.4742.6009-.3224 1.2952-.426 1.9641-.2932.6689.1329 1.2708.494 1.703 1.0215.4321.5276.6675 1.1889.6661 1.8709-.0184.7794-.3454 1.5198-.9092 2.0583h.0631Z"/></svg>`}
                            </div>
                            <p class="cro-cta-unidade-consultor-odonto">Unidade - ${unidade.unidade}</p>
                            <p class="cro-cta-especialista-consultor-odonto">Especialista:<br>${unidade.especialista}</p>
                            <a ${unidade.disponibilidade ? `href="${unidade.link}" target="_blank" ${unidade.disponibilidade ? '' : 'disabled'}` : ''} onclick="newFireGA('${unidade?.dl?.brand}', '${unidade?.dl?.locationElement}', '${unidade?.dl?.typeElement}', '${unidade?.dl?.text}', '${unidade?.dl?.campaignName}')" class="cro-cta-button-consultor-odonto" style="background-color: ${unidade.disponibilidade ? 'var(--cro-primary)' : 'var(--cro-disabled)'}; cursor: ${unidade.disponibilidade ? 'pointer' : 'not-allowed'};">
                                <span>Vamos conversar!</span>
                            </a>
                            <p class="cro-cta-endereco-consultor-odonto">${unidade.endereco}</p>
                        </div>
                        `).join('')}
                    </div>
                    <div class="cro-hide-carousel">
                        <div class="swiper-container mySwiper">
                            <div class="swiper-wrapper">
                                ${unidades.map(unidade => /*html*/ `
                                    <div class="swiper-slide">
                                        <div class="cro-box-unidade-consultor-odonto">
                                            <div class="cro-container-top-svg-consultor-odonto">
                                                ${!unidade.disponibilidade ? /*html*/ `<div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="34" fill="none"><path d="M191.077 30.8161 200-12H0l8.40194 42.771C8.77047 32.647 10.415 34 12.3269 34H187.161c1.894 0 3.529-1.3292 3.916-3.1839Z" fill="var(--cro-suspended)"/></svg>
                                                    <span>Inscrições suspensas</span>
                                                </div>`: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="var(--cro-primary)"><path d="M26.2089 9.47175c-2.0095-2.00951-4.735-3.13844-7.5769-3.13844-2.8418 0-5.5673 1.12893-7.5768 3.13844-2.00952 2.00955-3.13845 4.73495-3.13845 7.57685s1.12893 5.5674 3.13845 7.5769l6.655 6.6676c.1174.1184.2571.2123.4109.2764.1539.0641.319.0971.4857.0971.1667 0 .3318-.033.4856-.0971.1539-.0641.2936-.158.411-.2764l6.7055-6.7308c2.0011-2.0011 3.1253-4.7152 3.1253-7.5453 0-2.83-1.1242-5.5441-3.1253-7.54525ZM24.4031 22.7565l-5.7711 5.7963-5.771-5.7963c-1.1401-1.1412-1.9163-2.5948-2.2305-4.177-.3142-1.5822-.1522-3.2221.4655-4.7123.6176-1.4902 1.6632-2.7638 3.0046-3.6599 1.3414-.89605 2.9183-1.3743 4.5314-1.3743 1.6132 0 3.1901.47825 4.5315 1.3743 1.3414.8961 2.387 2.1697 3.0046 3.6599.6177 1.4902.7797 3.1301.4655 4.7123-.3142 1.5822-1.0904 3.0358-2.2305 4.177Zm-9.5595-9.5847c-1.0194 1.0226-1.5919 2.4076-1.5919 3.8516 0 1.4439.5725 2.8289 1.5919 3.8515.7574.7587 1.722 1.2768 2.7727 1.4894 1.0507.2125 2.1409.1101 3.1336-.2946.9927-.4046 1.8438-1.0934 2.4466-1.9799.6027-.8866.9302-1.9313.9414-3.0033.0057-.7158-.1322-1.4254-.4055-2.0869-.2733-.6616-.6764-1.2616-1.1856-1.7647-.5005-.5119-1.0973-.9199-1.7561-1.2003-.6587-.2805-1.3664-.4278-2.0824-.4337-.7159-.0059-1.4259.1299-2.0892.3995-.6633.2696-1.2667.6677-1.7755 1.1714Zm5.9226 5.9099c-.4786.4859-1.111.7904-1.7892.8616-.6783.0712-1.3602-.0955-1.9291-.4714-.569-.376-.9897-.9379-1.1902-1.5897-.2006-.6518-.1684-1.3531.0908-1.9838.2593-.6308.7296-1.1519 1.3306-1.4742.6009-.3224 1.2952-.426 1.9641-.2932.6689.1329 1.2708.494 1.703 1.0215.4321.5276.6675 1.1889.6661 1.8709-.0184.7794-.3454 1.5198-.9092 2.0583h.0631Z"/></svg>`}
                                            </div>
                                            <p class="cro-cta-unidade-consultor-odonto">Unidade - ${unidade.unidade}</p>
                                            <p class="cro-cta-especialista-consultor-odonto">Especialista:<br>${unidade.especialista}</p>
                                            <a ${unidade.disponibilidade ? `href="${unidade.link}" target="_blank" ${unidade.disponibilidade ? '' : 'disabled'}` : ''} onclick="newFireGA('${unidade?.dl?.brand}', '${unidade?.dl?.locationElement}', '${unidade?.dl?.typeElement}', '${unidade?.dl?.text}', '${unidade?.dl?.campaignName}')" class="cro-cta-button-consultor-odonto" style="background-color: ${unidade.disponibilidade ? 'var(--cro-primary)' : 'var(--cro-disabled)'}; cursor: ${unidade.disponibilidade ? 'pointer' : 'not-allowed'};">
                                                <span>Vamos conversar!</span>
                                            </a>
                                            <p class="cro-cta-endereco-consultor-odonto">${unidade.endereco}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="cro-container-navigation-carousel-consultor-odonto">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-pagination"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        loadScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", () => {
            divLocalTeste.innerHTML = bodyTestHTML;
            document.body.insertAdjacentHTML('afterbegin', modalTestHTML);
            new Swiper('.mySwiper', {
                loop: true,
                slidesPerView: 1.5,
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        allowTouchMove: false,
                        loop: false,
                        autoplay: false,
                    },
                    0: {
                        allowTouchMove: true,
                        loop: true,
                        autoplay: {
                            delay: 5000,
                        },
                    },
                },
            });
            new Swiper('.mySwiper-modal', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 15,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                autoplay: {
                    delay: 5000,
                },
            });
            const croModalOverlay = document.getElementById('cro-modal-overlay');
            const croModal = document.getElementById('cro-modal');
            const croCloseModal = document.getElementById('cro-close-modal');
            const croButtonModalGalery = document.getElementById('cro-button-modal-galery');
            function bloquearScroll(event) {
                event.preventDefault();
            }
            function desabilitarScroll() {
                window.addEventListener('wheel', bloquearScroll, { passive: false });
                window.addEventListener('touchmove', bloquearScroll, { passive: false });
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
            }
            croButtonModalGalery.addEventListener('click', () => {
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
            croCloseModal.addEventListener('click', () => {
                habilitarScroll();
            });
            croModalOverlay.addEventListener('click', function (event) {
                if (event.target === croModalOverlay) {
                    habilitarScroll();
                }
            });
        });
    }
}
// document.addEventListener('DOMContentLoaded', () => {
if (!document.body.classList.contains("cro-test-consultor-odonto")) {
    try {
        if (window.screen.width < 768) {
            newFireGA("anhanguera", "pdp-odonto", "page-load:mobile", undefined, "consultor-odonto", "b");
        } else {
            newFireGA("anhanguera", "pdp-odonto", "page-load:desktop", undefined, "consultor-odonto", "b");
        }
        modifyConsultorOdonto(document.querySelector('main'));
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}
// });