function croCreateMutationObserver() {
    let observer;

    const checkAddressField = () => {
        const cepAddressField = document.querySelector(".address");

        if (cepAddressField) {
            croSendoToWpp(observer);
            setupWhatsAppLink();
        } else {
            setTimeout(checkAddressField, 500);
        }
    };

    const observeTargetNode = () => {
        const targetNode = document.querySelector(".content");

        if (!targetNode) return;

        checkAddressField();

        const config = { childList: true, subtree: true };

        observer = new MutationObserver((mutationsList) => {
            checkAddressField();
        });

        observer.observe(targetNode, config);
    };

    const interval = setInterval(() => {
        const targetNode = document.querySelector(".content");

        if (targetNode) {
            observeTargetNode();
            clearInterval(interval);
        }
    }, 500);
}

function croSendoToWpp(observer) {
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

    const styles = `.cro-wpp__mensagem {display: flex;align-items: center;gap: 6px;padding: 20px 12px;background: #D7E9F5;border-radius: 8px;margin: 1rem 0;}.cro-wpp__mensagem p {color: #2B2B2F;font-weight: 400;font-size: 14px;}.cro-wpp__mensagem a {color: #5DA83C;}`;
    addStyles(styles);

    const mensageRedirectWpp = `<div class="cro-wpp__mensagem"><img src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/insider/%5BCRO%5D%20Atendimento%20WPP%20Direito/whatsappIcon.png" alt="" width="24" height="24"><p>Fale diretamente com nosso atendimento exclusivo do curso de Direito. <a href id="cro-open-wpp"> Clique aqui.</a></p></div>`;

    const mesagePosition = document.querySelector(".pt-1.f-size-18");

    mesagePosition.insertAdjacentHTML("beforebegin", mensageRedirectWpp);

    if (observer) {
        observer.disconnect();
    }
}

function setupWhatsAppLink() {
    const element = document.getElementById("cro-open-wpp");

    if (element && !element.classList.contains("wpp-linked")) {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const url = setUpWhatsappUrl(
                "5511994326167",
                "Atendimento Especializado",
                "Não apague esta mensagem. Nosso Especialista em Direito irá te atender"
            );

            element.href = url;

            window.open(url, "_blank");

            newFireGA(
                "anhanguera",
                "step:3",
                "clique:botao",
                "whatsapp:cliqueaqui",
                "funil:grupo:direito",
                "b",
                window.screen.width > 940 ? "desktop" : "mobile"
            );
        });

        element.classList.add("wpp-linked");
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let cookie = document.cookie.toString().replace(/%/g, "~~pct~~");
    let decodedCookie = decodeURIComponent(cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getWhatsappCodeByCookie() {
    const pattern = "GA1.1.";

    const gaCookie = getCookie("_ga");

    let id = null;

    if (gaCookie) {
        id = gaCookie.substr(pattern.length);
    }
    return id;
}

function getWhatsappCodeByGa() {
    let id = typeof ga !== "undefined" ? ga : null;

    if (id !== null) {
        id = ga.getAll()[0]?.get("clientId");
    }
    return id;
}

function setUpWhatsappUrl(number, protocolo, message) {
    number;

    let whatsProtocolo = protocolo;

    let whatsMessage = message;

    const defaultWhatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=`;

    const gaCodeWhatsapp = getWhatsappCodeByCookie() ?? getWhatsappCodeByGa() ?? "UNP0025";

    let newUrlWhatsapp = `${defaultWhatsappUrl}[${whatsProtocolo} ${gaCodeWhatsapp}] - ${whatsMessage}`;

    return newUrlWhatsapp;
}

function croCheckAndRun() {
    if (window.location.href.includes("/inscricao/unidade/direito-bacharelado")) {
        croCreateMutationObserver();
    } else {
        console.log("Não caiu na url");
    }
}

function croMonitorURLChange() {
    let lastHref = window.location.href;

    setInterval(() => {
        const currentHref = window.location.href;

        if (currentHref !== lastHref) {
            lastHref = currentHref;
            croCheckAndRun();
        }
    }, 500);
}

function croInitializeTest() {
    croCheckAndRun();

    croMonitorURLChange();

    const scriptNewFireGA = document.createElement("script");

    scriptNewFireGA.textContent = `
      function newFireGA(
          brand,
          locationElement,
          typeElement,
          text,
          campaignName,
          variant,
              device,
      )   {
              dataLayer.push({ ecommerce: null });
              dataLayer.push({
              event: "evento_cro",
              brand: brand ?? undefined,
              locationElement: locationElement ?? undefined,
              typeElement: typeElement ?? undefined,
              text: text ?? undefined,
              campaignName: campaignName ?? undefined,
              variant: variant ?? undefined,
                      device: device ?? undefined,
              });
          }
      `;

    document.head.appendChild(scriptNewFireGA);
}

if (!document.documentElement.classList.contains('convert-wpp-group')) {
    document.documentElement.classList.add('convert-wpp-group');

    croInitializeTest();
}