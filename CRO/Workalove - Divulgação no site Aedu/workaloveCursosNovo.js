function workaloveInit() {
    function addStyle(styles) {
        var css = document.createElement("style");
        css.type = "text/css";

        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));
            document.head.insertAdjacentElement("afterbegin", css);
        }
    }

    if (typeof newFireGA === "undefined") {
        const scriptContent = `
        const newFireGA = (brand, locationElement, typeElement, text, campaignName, variant, content) => {
            const eventData = {
                event: "evento_cro",
                ...(brand && { brand }),
                ...(locationElement && { locationElement }),
                ...(typeElement && { typeElement }),
                ...(text && { text }),
                ...(campaignName && { campaignName }),
                ...(variant && { variant }),
                ...(content && { content }),
            };
    
            dataLayer.push({ ecommerce: null });
            dataLayer.push(eventData);
        };
      `;

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.text = scriptContent;
        document.head.appendChild(script);
    }

    function crofindTheme() {
        setTimeout(() => {
            const themeMode = localStorage.getItem("theme");
            const htmlElement = document.documentElement;

            if (themeMode === "darkMode" || themeMode === "contrast") {
                htmlElement.classList.add("dark-mode");
            } else {
                htmlElement.classList.remove("dark-mode");
            }
        }, 50);
    }
    const croObservedNextElement = document.querySelector("header");
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

    const style = `:root{--cro-primary: #ff2800;--cro-primary-light: #ff5f37;--cro-secondary: #17375c;--cro-text-inverse: #fcfcfc;--cro-bg: #fafafa;--cro-workalove-bg: #FFEBD9;--cro-text: #808080;--cro-text-dark: #1D1D1D}.dark-mode{--cro-primary: #ffa68c;--cro-primary-light: #ffcab9;--cro-secondary: #fafafa;--cro-text-inverse: #292929;--cro-bg: #3d3d3d;--cro-workalove-bg: #383838;--cro-text: #FAFAFA;--cro-text-dark: #DBDBDB}.cta-bar-container{width: 100%;display: flex;justify-content: center;background-color: var(--cro-workalove-bg);opacity: 0.99;filter: blur(40%);position: fixed;bottom: 0;z-index: 11;box-shadow: 0px -10px 15px -3px rgba(0, 0, 0, 0.2);transition: all 0.5s ease-in-out}.cta-bar--close-btn{position: absolute;right: 12px;top: 12px;cursor: pointer;display: flex;svg, svg path{fill: var(--cro-text-dark)}}.cta-bar--close-btn:hover{opacity: 0.8;transition: all 0.2s ease}.cta-bar-container--closed{bottom: -150px;transition: all 0.5s ease-in-out}.cta-bar-wrapper{width: 100%;max-width: 1440px;display: flex;align-items: center;justify-content: space-between;padding: 0 1rem;gap: 1rem}.content-center{display: flex;align-items: center}.al-describe{display: flex;flex-direction: column}.describe-potential{color: var(--cro-secondary);font-size: 24px;font-weight: 700;line-height: 29px;letter-spacing: 0em;text-align: left}.cta-bar-info-container{display: flex;flex-direction: column;justify-content: center;align-items: flex-start}.cta-bar-title-mobile{display: none;color: var(--cro-text-dark);text-align: center;font-size: 18px;font-style: normal;font-weight: 700;line-height: normal;margin-bottom: 1rem}.cta-bar-title{font-size: 21.2px;line-height: 24.38px;font-weight: 700;color: var(--cro-text-dark);text-align: center}.cta-bar-subtitle{font-size: 16px;font-weight: 500;color: var(--cro-text);width: 100%;text-align: center}.cta-bar-button{border: 0;border-radius: 2rem;padding: 1rem 1.5rem;background: var(--cro-primary);box-shadow: 0 0 0 0 var(--cro-primary);color: white;font-weight: bold;text-transform: uppercase;cursor: pointer;outline: none;animation: pulse 2s infinite;text-decoration: none;line-height: 1;color: var(--cro-text-inverse);text-align: center;font-size: 14px;}.cta-bar-button:hover{transition: all 0.2s ease;background-color: var(--cro-primary-light)}@keyframes pulse{to{-webkit-box-shadow: 0 0 0 10px transparent;box-shadow: 0 0 0 10px transparent}}#floater-whatsapp{transition: all 0.5s ease-in-out}.cta-bar-openned #floater-whatsapp{bottom: 9rem !important}@media (max-width: 1550px){.cta-bar-wrapper{padding: 1rem 3rem 1rem 1rem}}@media (max-width: 1023px){.cta-bar-container--closed{bottom: -150px}.cta-bar-wrapper{padding: 2rem 1rem 1rem;}.cta-bar-logo-play{width: 120px;position: absolute;left: -25px;bottom: 5px;z-index: -1}.al-describe{display: none}#floater-whatsapp{transition: all 0.5s ease-in-out}.cta-bar-openned #floater-whatsapp{bottom: 10.5rem !important;transition: all 0.5s ease-in-out}.cta-bar-title-mobile{display: flex}.cta-bar-title{display: none}.cta-bar-subtitle{display: none}.cta-bar-info-container{align-items: flex-start}.cta-bar-wrapper{flex-direction: column;gap: 0.5rem}}.dark-mode{.cta-bar-logo-play{filter: saturate(0) brightness(0.8)}}`;

    addStyle(style);

    const ctaBarHtml = `<div class="cta-bar-container cta-bar-container--closed"><div class="cta-bar--close-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#252525"><path d="M9.40925 7.99915L15.7053 1.71303C15.8935 1.52485 15.9992 1.26961 15.9992 1.00347C15.9992 0.737334 15.8935 0.482097 15.7053 0.29391C15.5171 0.105723 15.2619 0 14.9958 0C14.7296 0 14.4744 0.105723 14.2862 0.29391L8.00012 6.59002L1.714 0.29391C1.52582 0.105723 1.27058 2.36288e-07 1.00444 2.38271e-07C0.738307 2.40254e-07 0.48307 0.105723 0.294883 0.29391C0.106696 0.482097 0.000973364 0.737334 0.000973362 1.00347C0.00097336 1.26961 0.106696 1.52485 0.294883 1.71303L6.59099 7.99915L0.294883 14.2853C0.201213 14.3782 0.126864 14.4887 0.0761273 14.6105C0.0253899 14.7323 -0.000732422 14.8629 -0.000732422 14.9948C-0.000732422 15.1268 0.0253899 15.2574 0.0761273 15.3792C0.126864 15.5009 0.201213 15.6115 0.294883 15.7044C0.387789 15.7981 0.498321 15.8724 0.620105 15.9231C0.741889 15.9739 0.872514 16 1.00444 16C1.13637 16 1.267 15.9739 1.38878 15.9231C1.51057 15.8724 1.6211 15.7981 1.714 15.7044L8.00012 9.40827L14.2862 15.7044C14.3791 15.7981 14.4897 15.8724 14.6114 15.9231C14.7332 15.9739 14.8638 16 14.9958 16C15.1277 16 15.2583 15.9739 15.3801 15.9231C15.5019 15.8724 15.6124 15.7981 15.7053 15.7044C15.799 15.6115 15.8734 15.5009 15.9241 15.3792C15.9748 15.2574 16.001 15.1268 16.001 14.9948C16.001 14.8629 15.9748 14.7323 15.9241 14.6105C15.8734 14.4887 15.799 14.3782 15.7053 14.2853L9.40925 7.99915Z" fill="#252525"/></svg></div><div class="cta-bar-wrapper"><div class="content-center"><img class="cta-bar-logo-play" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/insider/%5Bwebsales%5D%20workalove%20home%20e%20cursos/VectorPlayAnhanguera-cursos.png" alt="logo-play"><div class="al-describe"><span class="describe-potential">Descubra</span><span class="describe-potential">seu potencial!</span></div></div><div class="cta-bar-info-container"><span class="cta-bar-title-mobile">Descubra qual curso tem a sua cara!</span><span class="cta-bar-title">Está com dúvida sobre qual é o curso ideal para você?</span><span class="cta-bar-subtitle">Faça o teste de carreira gratuito e maximize suas chances de sucesso.</span></div><a target="_blank" onclick='newFireGA("anhanguera", "body", "clique:botao", "fazer_teste_de_carreira", "workalove", "a", undefined)' href="https://admission.worka.love/chat/anhanguera?utm_source=Site&utm_content=E-commerce+AEDU&link_identification=3883&utm_medium=link" class="cta-bar-button ins-custom-container">Fazer teste de carreira</a></div></div>`;

    const body = document.body;

    body.classList.add("workalove-on");

    body.insertAdjacentHTML("afterbegin", ctaBarHtml);

    window.addEventListener("scroll", showWorkalove);

    function showWorkalove() {
        const workalove = document.querySelector(".cta-bar-container");
        if (
            window.scrollY + window.innerHeight >
            document.documentElement.scrollHeight * 0.2
        ) {
            workalove.classList.remove("cta-bar-container--closed");
            document.body.classList.add("cta-bar-openned");
            window.removeEventListener("scroll", showWorkalove);
            newFireGA(
                "anhanguera",
                "body",
                "show-modal",
                undefined,
                "workalove",
                "a",
                undefined
            );
        }
    }

    function closeWorkalove() {
        const workalove = document.querySelector(".cta-bar-container");
        workalove.classList.add("cta-bar-container--closed");
        document.body.classList.remove("cta-bar-openned");

        newFireGA(
            "anhanguera",
            "body",
            "fechar-modal",
            undefined,
            "workalove",
            "a",
            undefined
        );
    }

    document
        .querySelector(".cta-bar--close-btn")
        .addEventListener("click", closeWorkalove);

    newFireGA(
        "anhanguera",
        "body",
        "page-load",
        undefined,
        "workalove",
        "a",
        undefined
    );
}

if (!document.body.classList.contains("workalove-on")) {
    try {
        workaloveInit();
    } catch (error) {
        console.error("Ocorreu um erro ao carregar o workalove:", error);
    }
}
