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
        body {
            -webkit-tap-highlight-color: transparent;
        }
        .cta-title-new-card {
            color: #FF2E00;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            height: 80px;
            display: flex;
            align-items: center;
            margin-top: -15px;
        }
        .cta-time-new-card {
            color: #2B2B2F;
            font-family: Montserrat;
            font-size: 17px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 15px;
        }
        .cta-container-modalities-new-card {
            gap: 10px;
        }
        .container-skeleton-modality-new-card {
            display: flex;
            gap: 10px;
            margin-bottom: 1rem;
        }
        .skeleton-modality-new-card {
            width: 53px;
            height: 33px;
            background-color: #e0e0e0;
            border-radius: 24px;
            animation: shimmer 1.5s infinite linear;
            background: linear-gradient(
                to right,
                #e0e0e0 0%,
                #f0f0f0 50%,
                #e0e0e0 100%
            );
            background-size: 200% 100%;

            @keyframes shimmer {
                0% {
                    background-position: -200% 0;
                }
                100% {
                    background-position: 200% 0;
                }
            }
        }
        .second-skeleton-modality-new-card {
            width: 88px;
            height: 33px;
            background-color: #e0e0e0;
            border-radius: 24px;
            animation: shimmer 1.5s infinite linear;
            background: linear-gradient(
                to right,
                #e0e0e0 0%,
                #f0f0f0 50%,
                #e0e0e0 100%
            );
            background-size: 200% 100%;

            @keyframes shimmer {
                0% {
                    background-position: -200% 0;
                }
                100% {
                    background-position: 200% 0;
                }
            }
        }
        .cta-button-modality-new-card {
            all: unset;
            color: #808080;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            padding: 8px 12px;
            border-radius: 24px;
            background-color: transparent;
            border: 1px solid #B7B7B7;
            cursor: pointer;
        }
        .active {
            color: #FF2E00;
            border: 1px solid #FF2E00;
        }
        .cta-container-price-new-card {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }
        .cta-text-price-new-card {
            color: #383838;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        .cta-price-new-card {
            display: none;
            color: #FF2E00;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        .skeleton-price-new-card {
            width: 130px;
            height: 24px;
            background-color: #e0e0e0;
            border-radius: 8px;
            animation: shimmer 1.5s infinite linear;
            background: linear-gradient(
                to right,
                #e0e0e0 0%,
                #f0f0f0 50%,
                #e0e0e0 100%
            );
            background-size: 200% 100%;

            @keyframes shimmer {
                0% {
                    background-position: -200% 0;
                }
                100% {
                    background-position: 200% 0;
                }
            }
        }
        .show {
            display: flex;
        }
        .cta-button-modality-new-card:hover {
            color: #FF2E00;
            border: 1px solid #FF2E00;
        }
        .cta-button-modality-new-card.active:hover {
            opacity: 1 !important;
        }
        .cta-divider {
            height: 1px;
            background-color: #808080;
            border-radius: 8px;
        }
        .tab input {
            display: none;
            opacity: 0;
            z-index: -1;
        }
        .tab__content {
            display: grid;
            grid-template-rows: 0fr;
            transition: 250ms grid-template-rows ease;
        }
        .tab input:checked ~ .tab__content {
            grid-template-rows: 1fr;
        }
        .tab__content > div {
            overflow: hidden;
        }
        .accordion {
            overflow: hidden;
        }
        .tab__label,
        .tab__close {
            display: flex;
            color: #2B2B2F;
            cursor: pointer;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        .tab__label {
            justify-content: space-between;
            padding: 0.7rem 0 0.7rem 10px;
            display: flex;
            align-items: center;
        }
        .tab__label::after {
            content: url("https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/Lps/Tecnologo/orangeArrowNewCardTecnologo.png");
            text-align: center;
            transition: transform 0.35s ease;
            transform: rotate(0deg);
        }
        .tab input:checked + .tab__label::after {
            transform: rotate(180deg) translateY(20%);
            transition: transform 0.35s ease;
        }
        .tab__content p {
            margin: 0;
            padding: 0 0.6rem 0 0.5rem;
            color: #5F5F5F;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        .tab__close {
            justify-content: flex-end;
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
        }
        .cta-container-list-new-card {
            list-style: inside;
            padding: 0 0 1rem 16px;
            > li {
                margin: 0;
                color: #5F5F5F;
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            > li::marker {
                font-size: 10px;
            }
        }
        .cta-button-new-card {
            max-height: 44px !important;
            padding: 0.8rem 1.2rem !important;
            margin-top: 0 !important;
            margin-bottom: 1rem !important;
            font-family: Montserrat !important;
            font-style: normal !important;
            font-weight: 700 !important;
            line-height: normal !important;
        }
        .container-card-top-five .cta-price, .container-card-top-five .cta-text, .container-card-top-five .cta-container-card > div:last-child {
            display: none !important;
        }
               
    `;
    addStyle(styles);

    const objectNewContent = [
        {
            course: 'Gestão de Recursos Humanos',
            time: 'Tecnólogo - 4 semestres',
            modalities: ['Presencial', 'EAD', 'Semi'],
            price: 129,
            info: [
                {
                    id: 1,
                    name: 'Visão geral do curso',
                    contentInfo:
                        '<p>A Gestão de Recursos Humanos é fundamental para o sucesso de qualquer organização pois cuida da relação entre a empresa e seus colaboradores, garantindo um ambiente de trabalho saudável e produtivo. Algumas atividades realizadas são:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Auditoria e Consultoria em RH<li>Desenvolvimento de Pessoas</li><li>Coaching e Mentoring</li><li>Gestão de Pessoas</li><li>Departamento pessoal</li></ul>'
                },
                {
                    id: 2,
                    name: 'Área de atuação',
                    contentInfo: '<p>Um profissional de Gestão de RH pode atuar em:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Empresas privadas</li><li>Orgão governamentais</li><li>Indústrias</li><li>Instituições financeiras</li><li>ONGs</li><li>Agências de consultoria de RH</li><li>Instituições de ensino</li><li>E mais!</li>'
                },
                {
                    id: 3,
                    name: 'Mercado de trabalho',
                    contentInfo:
                        '<p>Profissionais em Gestão de RH são essenciais no mercado.</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Salários variam de R$1.400 a R$6.100.</li></ul>'
                }
            ]
        },
        {
            course: 'Análise e Desenvolvimento de Sistemas',
            time: 'Tecnólogo - 5 semestres',
            modalities: ['Presencial', 'EAD', 'Semi'],
            price: 129,
            info: [
                {
                    name: 'Visão geral do curso',
                    contentInfo:
                        '<p>O profissional de Desenvolvimento de Sistemas desempenha diversas funções, incluindo:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Gestão de projetos de TI</li><li>Consultoria em TI</li><li>Garantia da qualidade e segurança da informação</li><ul/>'
                },
                {
                    name: 'Área de atuação',
                    contentInfo:
                        '<p>Tecnólogos em Gestão da TI encontram oportunidades em diversos setores, como:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Empresas privadas</li><li>Órgãos governamentais</li><li>Empresas de consultoria</li><li>Instituições de ensino</li>'
                },
                {
                    name: 'Mercado de trabalho',
                    contentInfo:
                        '<p>O mercado para profissionais em Gestão da Tecnologia da Informação está em constante crescimento. Empresas estão buscando cada vez mais por tecnologia e inovação, criando uma demanda crescente por esses profissionais.</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Os salários variam conforme a região, atividade e empregador, podendo chegar a até R$ 9.600.</li></ul>'
                }
            ]
        },
        {
            course: 'Logística',
            time: 'Tecnólogo - 4 semestres',
            modalities: ['Presencial', 'EAD', 'Semi'],
            price: 129,
            info: [
                {
                    name: 'Visão geral do curso',
                    contentInfo:
                        '<p>O curso de Tecnólogo em Logística é dividido em dois ciclos. No básico, estudam Gestão de Projetos e Matemática Financeira. No específico, aprendem Planejamento de Materiais e Logística Reversa.</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Avaliar, projetar e implementar sistemas de transporte, armazenamento, distribuição e entrega de produtos</li><li>Gerenciar redes de distribuição</li><li>Supervisionar o armazenamento e transporte de carga</li>'
                },
                {
                    name: 'Área de atuação',
                    contentInfo:
                        '<p>A Logística abrange vários setores econômicos e visa otimizar o fluxo de materiais, informações e recursos em uma empresa, garantindo eficiência e redução de custos. Suas áreas de atuação incluem:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Gestão de estoques Distribuição</li><li>Transporte</li><li>Compras</li><li>Planejamento e coordenação de operações logísticas</li>'
                },
                {
                    name: 'Mercado de trabalho',
                    contentInfo:
                        '<p>O mercado de trabalho para Logística está em alta, com um crescimento de 42% nas contratações.</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Os salários variam e podem começar em torno de R$ 1.700 e chegar a R$ 7.200 em cargos mais avançados em empresas maiores.</li></ul>'
                }
            ]
        },
        {
            course: 'Investigação e Perícia Criminal',
            time: 'Tecnólogo - 4 semestres',
            modalities: ['Presencial', 'EAD', 'Semi'],
            price: 129,
            info: [
                {
                    name: 'Visão geral do curso',
                    contentInfo:
                        '<p>O curso de Investigação e Perícia Criminal oferece uma formação abrangente e especializada nas diversas áreas da perícia criminal. As principais atuações profissionais são:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Análises em investigações relacionadas à informática forense</li><li>Suporte técnico em casos de investigação financeira e contábil</li><li>Análises laboratoriais em casos de química forense</li>'
                },
                {
                    name: 'Área de atuação',
                    contentInfo:
                        '<p>O Perito Criminal desempenha um papel essencial na investigação de ocorrências. Suas áreas de atuação abrangem:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Investigação de crimes e acidentes</li><li>Coleta de evidências</li><li>Análise de cenas e elementos relacionados</li><li>Produção de laudos técnicos e periciais</li>'
                },
                {
                    name: 'Mercado de trabalho',
                    contentInfo:
                        '<p>A demanda por profissionais de Investigação e Perícia Criminal tem crescido em todo o Brasil, devido ao aumento da criminalidade.</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Na contratação por meio de concurso público, os salários podem chegar a R$ 11 mil</li><li>Na área privada, os salários iniciais são de, aproximadamente, R$ 2 mil.</li></ul>'
                }
            ]
        },
        {
            course: 'Marketing Digital',
            time: 'Tecnólogo - 4 semestres',
            modalities: ['Presencial', 'EAD', 'Semi'],
            price: 129,
            info: [
                {
                    id: 1,
                    name: 'Visão geral do curso',
                    contentInfo:
                        '<p>O curso de Marketing Digital oferece uma formação abrangente e atualizada nas práticas e ferramentas do marketing, capacitando os alunos para atuarem no dinâmico mercado digital. O profissional formado:</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Desenvolve estratégias para promover produtos ou serviços</li><li>Utiliza diversas ferramentas e plataformas online para alcançar o público-alvo</li><li>Gerencia campanhas de publicidade digital e monitora o desempenho de anúncios</li>'
                },
                {
                    name: 'Área de atuação',
                    contentInfo:
                        '<p>Os principais caminhos que o Tecnólogo em Marketing Digital pode seguir são:</p><ul class="cta-container-list-new-card"><li>Vendas e Publicidade</li><li>Marca/Branding</li><li>Endomarketing</li></ul>',

                    list: '<p>E são muitas as instituições que necessitam desses profissionais, como:</p><ul class="cta-container-list-new-card"><li>Institutos de Pesquisa</li><li>Agências de Publicidade</li><li>Empresas de Comunicação</li></ul>'
                },
                {
                    name: 'Mercado de trabalho',
                    contentInfo:
                        '<p>O mercado de trabalho para profissionais de Marketing Digital é competitivo, com salários variados de acordo com a região, atividade e empregador.</p>',
                    list: '<ul class="cta-container-list-new-card"><li>Empresas de Atividades de intermediação e agenciamento oferecem as melhores remunerações, cerca de R$ 5.300.</li></ul>'
                }
            ]
        }
    ];

    async function fetchData() {
        const url =
            'https://captacao-frontend.kroton.com.br/portalinstitucional/portalinstitucional-backend/v2/products?brand=anhanguera&category=curso';

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

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
        const contentCard = document.querySelectorAll('.container-card-top-five .cta-container-card');

        const buttonsCard = document.querySelectorAll('.container-card-top-five .content-card-top-five .card-top-five a');

        let forEachIndex;

        let courseIndex;

        contentCard.forEach((card, index) => {
            forEachIndex = index;

            courseIndex = objectNewContent[index].course;

            if (!card.classList.contains('card-already-modify')) {
                card.classList.add('card-already-modify');
                card.querySelector('.title-card-top-five-course').style.display = 'none';
                card.querySelector('.cta-time-top-five-card').style.display = 'none';
                card.querySelector('.cta-container-modalities-top-five-card').style.display = 'none';
                card.querySelector('.cta-container-price-top-five-card').style.display = 'none';
                card.querySelector('.cta-price-top-five-card').style.display = 'none';
                card.querySelector('.container-accordion--').style.display = 'none';
                card.insertAdjacentHTML(
                    'afterbegin',
                    `
                        <h3 class="cta-title-new-card">${courseIndex}</h3>
                        <h3 class="cta-time-new-card">${objectNewContent[index].time}</h3>
                        <div class="cta-container-modalities-new-card">
                            <div class="container-skeleton-modality-new-card">
                                <div class="skeleton-modality-new-card"></div>
                                <div class="second-skeleton-modality-new-card"></div>
                                <div class="skeleton-modality-new-card"></div>
                            </div>
                        </div>
                        <div class="cta-container-price-new-card">
                            <span class="cta-text-price-new-card">A partir de:</span>
                            <div class="skeleton-price-new-card"></div>   
                        </div>
                        ${objectNewContent[index].info
                        .map(
                            (item, index) => `
                            <hr class="cta-divider"/>
                            <section class="accordion">
                                <div class="tab">
                                    <input onclick='newFireGA("anhanguera", "card:${courseIndex}:accordion", "card:clique:accordion", "card:accordion:${item.name}", "novo-card-lp-tecnologo", "")' type="checkbox" name="accordion-1" id="cb${forEachIndex}-${index}">
                                    <label for="cb${forEachIndex}-${index}" class="tab__label">${item.name}</label>
                                    <div class="tab__content">
                                        <div>
                                            ${item.contentInfo}
                                            ${item.list}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            `
                        )
                        .join('')}
                        <hr class="cta-divider"/>
                    `
                );
            }
        });

        buttonsCard.forEach((button, index) => {
            if (!button.classList.contains('button-already-modify')) {
                button.classList.add('button-already-modify')
                button.setAttribute('style', 'font-size: 16px !important');
                button.innerHTML = 'Inscreva-se';
                button.classList.add('cta-button-new-card');
                button.addEventListener('click', () => {
                    newFireGA(
                        "anhanguera",
                        `card:${objectNewContent[index].course}:button`,
                        "card:clique:cta",
                        "card:button:Inscreva-se",
                        "novo-card-lp-tecnologo",
                        "",
                        window.screen.width > 940 ? "desktop" : "mobile"
                    );
                });
            }
        });

        let containerModality = document.querySelectorAll('.cta-container-modalities-new-card');

        let containerPrice = document.querySelectorAll('.cta-container-price-new-card');

        let dataApi = await fetchData();
        const idsToFilter = [
            'fd18fd5d33dc90775fe0bfccb5e44720', //Gestão de Recursos Humanos
            'bc0e9fe153a4f760ee51f8f52b41b0bf', //Análise e Desenvolvimento de Sistemas
            '7dda628364fc980a4362ee05503f0929', //Logística
            'c4171c96f6ae4aafb2ccbe48bd318dd9', //Investigação e Perícia Criminal
            'a2b7d2884502ddd900865a1e26977297'  //Marketing Digital
        ];

        const sortedCourses = idsToFilter
            .map((id) => dataApi.data.products.find((course) => course.unique_id === id))
            .filter(Boolean)
            .map((course) => ({
                ...course,
                price_categories: course.price_categories.sort((a, b) => a.category.localeCompare(b.category)),
            }));

        if (sortedCourses.length == idsToFilter.length) {
            let whereChangeModality;

            containerModality.forEach((item, index) => {
                whereChangeModality = index;

                if (!item.classList.contains('modality-already-modify')) {
                    document.querySelector('.container-skeleton-modality-new-card').remove();
                    item.classList.add('modality-already-modify')
                    item.style.display = 'flex';
                    item.insertAdjacentHTML(
                        'afterbegin',
                        `${sortedCourses[index].price_categories.map((item, index) =>
                            `<button class="cta-button-modality-new-card ${index === 0 ? 'active' : ''}" onclick='newFireGA("anhanguera", "card:${objectNewContent[whereChangeModality].course}:modalidade", "card:clique:modalidade", "card:modalidade:${item.category}", "novo-card-lp-tecnologo", "")'>
                                ${item.category === 'Semipresencial' ? 'Semi' : item.category}
                            </button>`
                        ).join('')}`
                    );
                }
            });

            containerPrice.forEach((item, index) => {
                if (!item.classList.contains('card-price-already-modify')) {
                    document.querySelector('.skeleton-price-new-card').remove();
                    item.classList.add('card-price-already-modify')
                    item.style.display = 'flex';
                    item.insertAdjacentHTML(
                        'beforeend',
                        `${sortedCourses[index].price_categories.map((item, index) =>
                            `<span class="cta-price-new-card ${index === 0 ? 'show' : ''}">${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</span>`
                        ).join('')}`
                    );
                }
            });

            containerModality.forEach((item) => {
                let btns = item.querySelectorAll('.cta-button-modality-new-card');

                btns.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        let whereChangePrice = index;

                        btns.forEach((btn) => {
                            btn.classList.remove('active');
                        });
                        button.classList.add('active');

                        let pricesIndex = button.parentNode.nextSibling.nextSibling;

                        let priceElements = pricesIndex.querySelectorAll(".cta-price-new-card");

                        priceElements.forEach((prc) => {
                            prc.classList.remove('show');
                        });
                        priceElements[whereChangePrice].classList.add("show");
                    });
                });
            });
        }
    }
    const observer = new MutationObserver(() => {
        modifyUniqueCards();
    });

    const options = {
        childList: true,
        subtree: true
    };

    const interval = setInterval(() => {
        if (document.querySelector('.container-card-top-five')) {
            observer.observe(document.querySelector('.container-card-top-five'), options)
            clearInterval(interval);
        }
    }, 500)

    modifyUniqueCards();
}

modifyCards();
