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

    const style = /*css*/ `
        .cta-bar-container {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #FFEBD9;
            opacity: 0.99;
            filter: blur(40%);
            position: fixed;
            bottom: 0;
            z-index: 4;
            box-shadow: 0px -10px 15px -3px rgba(0, 0, 0, 0.2);
            transition: all 0.5s ease-in-out;
        }
        .cta-bar--close-btn {
            position: absolute;
            right: 1rem;
            top: 0.5rem;
            cursor: pointer;
        }
        .cta-bar--close-btn:hover {
            opacity: 0.8;
            transition: all 0.2s ease;
        }
        .cta-bar--close-btn svg {
            fill: var(--text-contrast);
        }
        .cta-bar-container--closed {
            bottom: -150px;
            transition: all 0.5s ease-in-out;
        }
        .cta-bar-wrapper {
            width: 100%;
            max-width: 1440px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
        }
        .content-center {
            display: flex;
            align-items: center;
        }
        .al-describe {
            display: flex;
            flex-direction: column;
        }
        .describe-potential {
            color: #17375C;
            font-size: 24px;
            font-weight: 700;
            line-height: 29px;
            letter-spacing: 0em;
            text-align: left;
            text-shadow: 2px 3px 0px #847BBE;
        }
        .cta-bar-info-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
        .cta-bar-title-mobile {
            display: none;
            color:  #444;
            text-align: center;
            font-size: 19px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 0.5rem;
        }
        .cta-bar-title {
            font-size: 21.2px;
            line-height: 24.38px;
            font-weight: 700;
            color: #444444;
        }
        .cta-bar-subtitle {
            font-size: 16px;
            font-weight: 500;
            color: #252525;
        }
        .cta-bar-button {
            border: 0;
            border-radius: 2rem;
            padding: 1rem 1.5rem;
            background: #183253;
            box-shadow: 0 0 0 0 #183253;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
            outline: none;
            animation: pulse 2s infinite;
            text-decoration: none;
            line-height: 1;
        }
        .cta-bar-button:hover {
            opacity: 0.8;
            transition: all 0.2s ease;
            color: white !important;
        }
        @keyframes pulse {
            to {
                -webkit-box-shadow: 0 0 0 10px transparent;
                box-shadow: 0 0 0 10px transparent;
            }
        }
        .floater .floater-btn {
            transition: all 0.5s ease-in-out;
        }
        .cta-bar-openned .floater .floater-btn {
            bottom: 6.5rem !important;
        }
        @media (max-width: 1550px) {
            .cta-bar-wrapper {
                padding: 0 3rem 0 1rem;
            }
        }
        @media (max-width: 1023px) {
            .cta-bar-container--closed {
                bottom: -150px;
            }
            .cta-bar-wrapper {
                padding: 1rem;
            }
            .cta-bar-logo-play {
                width: 120px;
                position: absolute;
                left: -25px;
                bottom: 0;
            }
            .al-describe {
                display: none;
            }
            .floater .floater-btn {
                transition: all 0.5s ease-in-out;
            }
            .cta-bar-openned .floater .floater-btn {
                bottom: 8rem !important;
                transition: all 0.5s ease-in-out;
            }
            .cta-bar-title-mobile {
                display: flex;
            }
            .cta-bar-title {
                display: none;
            }
            .cta-bar-subtitle {
                display: none;
            }
            .cta-bar-info-container {
                align-items: flex-start;
            }
            .cta-bar-wrapper {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    `;

    addStyle(style);

    const ctaBarHtml = /*html*/ `
        <div class="cta-bar-container cta-bar-container--closed">
            <div class="cta-bar--close-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                    id="Vector"
                    d="M9.40913 7.99915L15.7052 1.71303C15.8934 1.52485 15.9991 1.26961 15.9991 1.00347C15.9991 0.737334 15.8934 0.482097 15.7052 0.29391C15.517 0.105723 15.2618 0 14.9957 0C14.7295 0 14.4743 0.105723 14.2861 0.29391L8 6.59002L1.71388 0.29391C1.5257 0.105723 1.27046 2.36288e-07 1.00432 2.38271e-07C0.738185 2.40254e-07 0.482948 0.105723 0.294761 0.29391C0.106574 0.482097 0.000851294 0.737334 0.000851292 1.00347C0.00085129 1.26961 0.106574 1.52485 0.294761 1.71303L6.59087 7.99915L0.294761 14.2853C0.201091 14.3782 0.126742 14.4887 0.0760052 14.6105C0.0252678 14.7323 -0.000854492 14.8629 -0.000854492 14.9948C-0.000854492 15.1268 0.0252678 15.2574 0.0760052 15.3792C0.126742 15.5009 0.201091 15.6115 0.294761 15.7044C0.387667 15.7981 0.498199 15.8724 0.619983 15.9231C0.741767 15.9739 0.872392 16 1.00432 16C1.13625 16 1.26688 15.9739 1.38866 15.9231C1.51045 15.8724 1.62098 15.7981 1.71388 15.7044L8 9.40827L14.2861 15.7044C14.379 15.7981 14.4896 15.8724 14.6113 15.9231C14.7331 15.9739 14.8637 16 14.9957 16C15.1276 16 15.2582 15.9739 15.38 15.9231C15.5018 15.8724 15.6123 15.7981 15.7052 15.7044C15.7989 15.6115 15.8733 15.5009 15.924 15.3792C15.9747 15.2574 16.0009 15.1268 16.0009 14.9948C16.0009 14.8629 15.9747 14.7323 15.924 14.6105C15.8733 14.4887 15.7989 14.3782 15.7052 14.2853L9.40913 7.99915Z"
                    />
                </svg>
            </div>
            <div class="cta-bar-wrapper">
                <div class="content-center">
                    <img
                        class="cta-bar-logo-play"
                        src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/insider/%5Bwebsales%5D%20workalove%20home%20e%20cursos/VectorPlayAnhanguera-cursos.png"
                        alt="logo-play"
                    />
                    <div class="al-describe">
                        <span class="describe-potential">Descubra</span>
                        <span class="describe-potential">seu potencial!</span>
                    </div>
                </div>
                <div class="cta-bar-info-container">
                    <span class="cta-bar-title-mobile">Descubra qual curso tem a sua cara!</span>
                    <span class="cta-bar-title">Está com dúvida sobre qual é o curso ideal para você?</span
                    ><span class="cta-bar-subtitle"
                    >Faça o teste de carreura gratuito e maximize suas chances de
                    sucesso.</span
                    >
                </div>
                <a
                    target="_blank"
                    onclick='fireGA("anhanguera:cursos:workalove","clique:cta","fazer-teste-carreira")'
                    href="https://admission.worka.love/chat/anhanguera?utm_source=Site&utm_content=E-commerce+AEDU&link_identification=3883&utm_medium=link"
                    class="cta-bar-button ins-custom-container"
                    >Fazer teste de carreira</a
                >
            </div>
        </div>  
    `;

    const body = document.body;

    body.classList.add("workalove-on");

    body.insertAdjacentHTML("afterbegin", ctaBarHtml);
    body.addEventListener("scroll", showWorkalove);

    document.querySelector(".cta-bar--close-btn").addEventListener("click", closeWorkalove);

    function showWorkalove() {
        const workalove = document.querySelector(".cta-bar-container");
        if (body.scrollTop + screen.height > body.scrollHeight * 0.1) {
            workalove.classList.remove("cta-bar-container--closed");
            body.classList.add("cta-bar-openned");
            body.removeEventListener("scroll", showWorkalove);
        }
    }

    function closeWorkalove() {
        const workalove = document.querySelector(".cta-bar-container");
        workalove.classList.add("cta-bar-container--closed");
        body.classList.remove("cta-bar-openned");
    }
}

if (!document.body.classList.contains("workalove-on")) {
    try {
        workaloveInit();
        fireGA(
            "anhanguera:cursos:workalove:scroll",
            "page-load:mobile",
            "page-load"
        );
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}
