let callback = {
    toggleAutoClicked: false,
    croTogglePagueFacil: false,
    applyCroTogglePersonalization: false,
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const bodyCroTesteHTML = /*html*/ `
    <div>
        <p class="cro-oferta-pague-facil">Oferta imperdível: Ative agora Pague Fácil por R$ 59,00!</p>
        <div class="cro-container-pague-facil">
            <div class="cro-toggle-container-pague-facil">
                <div class="cro-toggle-switch-pague-facil"></div>
            </div>
            <span>Parcelado com <span class="cro-parcelado-pague-facil">Pague Fácil</span> <img class="icon" src="icon.png" alt="Ícone"></span>
        </div>
    </div>
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyCroToggle(buttonVisualizarMensalidades) {
    function applyModification() {

        if (!buttonVisualizarMensalidades) {
            return
        }

        if (buttonVisualizarMensalidades) {
            const offer = document.querySelector('[data-testid="offer-result-component"] > button')
            offer.insertAdjacentHTML('afterend', bodyCroTesteHTML);

            document.querySelector('.cro-container-pague-facil').addEventListener('click', function () {
                document.querySelector('.cro-toggle-switch-pague-facil').classList.toggle('active');
                document.querySelector('[data-testid="payment-info-button"]').click()
            });

            document.querySelector('.cro-toggle-switch-pague-facil').addEventListener('click', function () {
                this.classList.toggle('active');
                document.querySelector('[data-testid="payment-info-button"]').click()
            });

        }
    }

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(buttonVisualizarMensalidades, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modalOpened(modal) {
    function applyModification() {
        if (!modal) {
            return
        }

        if (modal) {
            const buttomPagueFacil = document.querySelector('[data-testid="easy-pay-button"]');

            const interval = setInterval(() => {
                if (document.querySelector('[data-testid="switch-slider"]')) {
                    document.querySelector('[data-testid="switch-slider"]').click()
                    clearInterval(interval);
                }
            }, 10)

            if (buttomPagueFacil) {
                console.log('buttomPagueFacil: ', buttomPagueFacil)
                buttomPagueFacil.addEventListener("click", () => {
                    // Obtém o valor atual do localStorage e converte para booleano
                    const currentValue = localStorage.getItem("easyPayActive") === "true";

                    // Alterna o valor booleano e armazena no localStorage
                    localStorage.setItem("easyPayActive", !currentValue);

                    console.log("Novo valor de easyPayActive:", !currentValue);
                });
            }
        }
    }

    applyModification();

    // const observer = new MutationObserver(applyModification);

    // observer.observe(modal, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function hideToggle(togglePagueFacil) {
    function applyModification() {

        if (!togglePagueFacil) {
            return
        }

        if (togglePagueFacil) {
            togglePagueFacil.style.display = "none"
        }
    }

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(togglePagueFacil, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroTestPagueFacil() {
    console.warn('teste pague facil rodando');
    document.documentElement.classList.add('already-haves-toggle-pague-facil');
    

    const styles = /*css*/ `
        .cro-oferta-pague-facil {
            font-weight: bold;
            color: #f4511e;
            margin-bottom: 10px;
        }

        .cro-container-pague-facil {
            display: flex;
        }

        .cro-toggle-container-pague-facil {
            display: flex;
            align-items: center;
            width: 34px;
            height: 20px;
            background: #DBDBDB;
            border-radius: 12px;
            cursor: pointer;
            margin-right: 8px;
            padding: 1.337px;
        }

        .cro-toggle-switch-pague-facil {
            width: 17.326px;
            height: 17.326px;
            background: #808080;
            border-radius: 50%;
            transition: 0.3s;
        }

        .cro-toggle-switch-pague-facil.active {
            background: #f4511e;
            transition: 0.3s;
        }

        .cro-parcelado-pague-facil {
            font-weight: bold;
        }

        .icon {
            width: 18px;
            height: 18px;
            margin-left: 4px;
        }
    `;
    if (!document.documentElement.classList.contains('already-haves-addStyles-pague-facil')) {
        addStyles(styles);
    }
    document.documentElement.classList.add('already-haves-addStyles-pague-facil');

    const body = document.querySelector('body');
    const modal = document.querySelector('[data-testid="content-modal-undefined"]');
    const buttonVisualizarMensalidades = document.querySelector('[data-testid="payment-info-button"]');

    const observer = new IntersectionObserver(modalOpened(modal), { childList: true, subtree: true });
    if (modal) {
        observer.observe(modal);
    }

    // const observer = new MutationObserver(() => {
    //     if (modal) {
    //         modalOpened(modal);
    //     }

    //     // if (callback.toggleAutoClicked) {
    //     //     observer.disconnect();
    //     // }
    // });
    // observer.observe(modal, { childList: true, subtree: true });

    applyCroToggle(buttonVisualizarMensalidades);
    const observerVisualizarMensalidades = new MutationObserver(() => {
        if (buttonVisualizarMensalidades) {
            applyCroToggle(buttonVisualizarMensalidades);
        }

        // if (callback.applyCroTogglePersonalization) {
        //     observer.disconnect();
        // }
    });
    observerVisualizarMensalidades.observe(buttonVisualizarMensalidades, { childList: true, subtree: true });



    // const observerToggle = new MutationObserver(() => {
    //     const togglePagueFacil = document.querySelector('[data-testid="easy-pay-switch-content"]');

    //     if (togglePagueFacil) {
    //         hideToggle(togglePagueFacil);
    //     }

    //     if (callback.croTogglePagueFacil) {
    //         observer.disconnect();
    //     }
    // });
    // observerToggle.observe(body, { childList: true, subtree: true });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    startCroTestPagueFacil();
})
startCroTestPagueFacil();