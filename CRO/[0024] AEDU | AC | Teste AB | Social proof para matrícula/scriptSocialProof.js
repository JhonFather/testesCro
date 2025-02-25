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
        .cro-popUpSocialProof {
          position: fixed;
          width: 320px;
          height: 60px;
          display: none;
          background-color: #8B8B8B;
          border-radius: 8px;
          bottom: 15px;
          left: 30px;
          z-index: 99999;
        }
        .cro-popUpSocialProof .cro-popUpSocialProof--button-close {
          cursor: pointer;
          align-self: flex-start;
          background-color: transparent;
          border: none;
          padding: 0;
          margin-top: 3px;
          margin-right: 3px;
          }
        .cro-popUpSocialProof .cro-popUpSocialProof--content {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .cro-popUpSocialProof .cro-popUpSocialProof--content .cro-popUpSocialProof-content--image {
          width: 21%;
          margin-left: 5px;
        }
        .cro-popUpSocialProof .cro-popUpSocialProof--content .cro-popUpSocialProof-content--image .cro-popUpSocialProof-content-image--item {
          height: 100%;
        }
        .cro-popUpSocialProof .cro-popUpSocialProof--content .cro-popUpSocialProof--paragraph {
          color: #FFF;
          margin: 0 auto;
          align-self: center;
          line-height: 1.2;
          padding: 6px 11px;
          margin-left: -6px;
        }
        @media (max-width: 768px) {
          .cro-popUpSocialProof {
            margin: 0 auto;
            right: 0;
            left: 0;
          }
        }
    `;
  addStyle(styles);
  const popUpSocialProofHtml = `
    <div id="cro-popUpSocialProof" class="cro-popUpSocialProof">
      <div id="cro-popUpSocialProof--content" class="cro-popUpSocialProof--content">
        <div id="cro-popUpSocialProof-content--image" class="cro-popUpSocialProof-content--image">
          <img id="cro-popUpSocialProof-content-image--item" class="cro-popUpSocialProof-content-image--item" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0024%5D%20AEDU%20%7C%20AC%20%7C%20Teste%20AB%20%7C%20Social%20proof%20para%20matr%C3%ADcula/instant-purchase.webp" alt="fogo" />
        </div>
      </div>
      <button id="cro-popUpSocialProof--button-close" class="cro-popUpSocialProof--button-close">
        <img class="cro-popUpSocialProof-button-close--image" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0024%5D%20AEDU%20%7C%20AC%20%7C%20Teste%20AB%20%7C%20Social%20proof%20para%20matr%C3%ADcula/close_24px_outlined.svg" alt="icone fechar botão" />
      </button>
    </div>
    `;
  document
    .querySelector("body")
    .insertAdjacentHTML("afterbegin", popUpSocialProofHtml);
  var widthSize = window.screen.width;
  var dataLayer = (window.dataLayer = window.dataLayer || []);
  var url_atual = window.location.href;
  var areaCandidato = "https://www.anhanguera.com/area-do-candidato/detalhes";
  var dailyPurchase = 0;
  var spamCurso = document.querySelector(".details span").innerText;
  const popUpSocialProof = document.querySelector("#cro-popUpSocialProof");
  const closePopUpSocialProofBtn = document.querySelector(
    "#cro-popUpSocialProof--button-close"
  );
  const ancoraParagrafo = document.querySelector(
    "#cro-popUpSocialProof--content"
  );
  function getCookie(k) {
    var cookies = " " + document.cookie;
    var key = " " + k + "=";
    var start = cookies.indexOf(key);
    if (start === -1) return null;
    var pos = start + key.length;
    var last = cookies.indexOf(";", pos);
    if (last !== -1) return cookies.substring(pos, last);
    return cookies.substring(pos);
  }
  function setCookie(k, v, path) {
    if (!path) path = "/";
    var dataExpiracao = new Date();
    dataExpiracao.setDate(dataExpiracao.getDate() + 1);
    dataExpiracao.setUTCHours(0, 0, 0, 0);
    document.cookie =
      encodeURIComponent(k) +
      "=" +
      encodeURIComponent(v) +
      "; expires=" +
      dataExpiracao +
      "; path=" +
      path;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function getParagraph(dailyPurchase) {
    return `<p class="cro-popUpSocialProof--paragraph" >${dailyPurchase} pessoas se matricularam neste curso hoje!</p>`;
  }
  if (url_atual.includes(areaCandidato)) {
    if (spamCurso === "Administração - Bacharelado") {
      const item = getCookie("socialProof-administracao");
      if (!item) {
        dailyPurchase = getRandomInt(256, 362);
        setCookie("socialProof-administracao", dailyPurchase);
        ancoraParagrafo.insertAdjacentHTML(
          "beforeend",
          getParagraph(dailyPurchase)
        );
      } else {
        ancoraParagrafo.insertAdjacentHTML("beforeend", getParagraph(item));
      }
      popUpSocialProof.style.display = "flex";
    } else if (spamCurso === "Direito - Bacharelado") {
      const item = getCookie("socialProof-direito");
      if (!item) {
        dailyPurchase = getRandomInt(196, 289);
        setCookie("socialProof-direito", dailyPurchase);
        ancoraParagrafo.insertAdjacentHTML(
          "beforeend",
          getParagraph(dailyPurchase)
        );
      } else {
        ancoraParagrafo.insertAdjacentHTML("beforeend", getParagraph(item));
      }
      popUpSocialProof.style.display = "flex";
    } else if (spamCurso === "Psicologia - Bacharelado") {
      const item = getCookie("socialProof-psicologia");
      if (!item) {
        dailyPurchase = getRandomInt(113, 198);
        setCookie("socialProof-psicologia", dailyPurchase);
        ancoraParagrafo.insertAdjacentHTML(
          "beforeend",
          getParagraph(dailyPurchase)
        );
      } else {
        ancoraParagrafo.insertAdjacentHTML("beforeend", getParagraph(item));
      }
      popUpSocialProof.style.display = "flex";
    } else if (spamCurso === "Enfermagem - Bacharelado") {
      const item = getCookie("socialProof-enfermagem");
      if (!item) {
        dailyPurchase = getRandomInt(176, 226);
        setCookie("socialProof-enfermagem", dailyPurchase);
        ancoraParagrafo.insertAdjacentHTML(
          "beforeend",
          getParagraph(dailyPurchase)
        );
      } else {
        ancoraParagrafo.insertAdjacentHTML("beforeend", getParagraph(item));
      }
      popUpSocialProof.style.display = "flex";
    } else if (spamCurso === "Pedagogia - Licenciatura") {
      const item = getCookie("socialProof-pedagogia");
      if (!item) {
        dailyPurchase = getRandomInt(90, 247);
        setCookie("socialProof-pedagogia", dailyPurchase);
        ancoraParagrafo.insertAdjacentHTML(
          "beforeend",
          getParagraph(dailyPurchase)
        );
      } else {
        ancoraParagrafo.insertAdjacentHTML("beforeend", getParagraph(item));
      }
      popUpSocialProof.style.display = "flex";
    } else {
      popUpSocialProof.style.display = "none";
    }
  }
  closePopUpSocialProofBtn.addEventListener("click", () => {
    popUpSocialProof.style.display = "none";
    if (widthSize <= 768) {
      dataLayer.push({
        event: "mobile_fechou_modal",
      });
    } else {
      dataLayer.push({
        event: "desk_fechou_modal",
      });
    }
  });
}
croFunction();
