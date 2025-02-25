function croFunction() {
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
  const styles = `
            #floater-btn {
                box-shadow: none;
            }
            #floater-btn > span {
                background-color: #00AC6B;
                border: none;
            }
            .cro-floaterWpp {
                position: fixed;
                display: none;
                width: 190px;
                height: 56px;
                right: 7.2rem;
                bottom: 4rem;
                background-color: #FFFFFF;
                box-shadow: 0px 2px 13px 0px #00000040;
                border-radius: 0 10px 0px 10px;
                z-index: 99999;
            }
            .cro-floaterWpp .cro-floaterWpp--button-close {
                width: 18px;
                height: 18px;
                cursor: pointer;
                background-color: #FFFFFF;
                box-shadow: 0px 0px 4px 0px #0000001F;
                position: absolute;
                margin-top: -7px;
                margin-left: -7px;
                border: none;
                border-radius: 50%;
                display: flex;
                padding: 0;
                justify-content: center;
                align-items: center;
            }
            .cro-floaterWpp .cro-floaterWpp--paragraph {
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: left;
                color: #000000;
                margin: 0 auto;
                padding: 13px;
                margin-top: -5px;
            }
            @media (max-width: 768px) {
            .cro-floaterWpp {
                right: 7.8rem;
            }
        }
    `;
  addStyle(styles);

  var widthSize = window.screen.width;
  var dataLayer = (window.dataLayer = window.dataLayer || []);

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
    const id = ga.getAll()[0]?.get("clientId");
    return id;
  }
  function whatsappUrl(event, section) {
    const defaultWhatsappUrl =
      "https://api.whatsapp.com/send?phone=5511989511509&text=";
    const whatsappMessage =
      "Não apague esta mensagem. Quero me inscrever e matricular pelo WhatsApp";
    const gaCodeWhatsapp =
      getWhatsappCodeByCookie() ?? getWhatsappCodeByGa() ?? "ANH0005";
    let newUrlWhatsapp = `${defaultWhatsappUrl}[Protocolo ${gaCodeWhatsapp}] - ${whatsappMessage}`;
    dataLayer.push({
      event: "whatsapp",
      ga_id: gaCodeWhatsapp,
      section: section ?? "unset",
    });
    return newUrlWhatsapp;
  }

  const popUpFloaterWppHtml = `
      <div id="cro-floaterWpp" class="cro-floaterWpp">
      <button id="cro-floaterWpp--button-close" class="cro-floaterWpp--button-close">
          <img class="cro-floaterWpp-button-close--image" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0045%5D%20AEDU%20%7C%20Floater%20com%20destaque%20pro%20WPP%20/CloseIcon.svg" alt="icone fechar botão" />
        </button>    
          <p class="cro-floaterWpp--paragraph" >Faça sua inscrição e matrícula pelo WhatsApp</p>
      </div>
      `;

  const floaterDestino = document.querySelector("body");
  floaterDestino.insertAdjacentHTML("afterend", popUpFloaterWppHtml);
  const floaterWpp = document.querySelector("#cro-floaterWpp");

  document.querySelector("#floater-btn > span > svg").remove();
  document.querySelector("#floater > div > div").remove();
  document
    .querySelector("#floater-btn > span")
    .insertAdjacentHTML(
      "beforeend",
      `<img class="closed" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0045%5D%20AEDU%20%7C%20Floater%20com%20destaque%20pro%20WPP%20/Whatsapp_p%26b.svg" alt="icone whatsapp" />`
    );
  document.querySelector("#floater-btn").addEventListener("click", () => {
    window.open(whatsappUrl(), "_blank");
  });

  setTimeout(() => {
    floaterWpp.style.display = "flex";

    setTimeout(() => {
      floaterWpp.style.display = "none";
    }, 5000);
  }, 3000);

  const closefloaterWppBtn = document.querySelector(
    "#cro-floaterWpp--button-close"
  );

  closefloaterWppBtn.addEventListener("click", () => {
    floaterWpp.style.display = "none";
    if (widthSize <= 768) {
      dataLayer.push({
        event: "mobile_fechou_floater",
      });
    } else {
      dataLayer.push({
        event: "desk_fechou_floater",
      });
    }
  });
}
croFunction();
