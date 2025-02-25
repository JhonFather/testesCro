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
  
    const styles = `.cro-modal {
        position: fixed;
        z-index: 9;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        overflow: auto;
      }
      
      .cro-modal .cro-modal--content {
        background: #FFF;
        border-radius: 8px;
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
      }
      
      .cro-modal .cro-modal--button-close {
        cursor: pointer;
        width: 21px;
        height: 21px;
        align-self: flex-end;
        background-color: transparent;
        border: none;
        font-weight: 700;
        font-size: 16px;
        color: #868E96;
        padding: 0;
        margin-top: -8px
      }
      
      .cro-modal .cro-modal--title {
        font-weight: bold;
        font-size: 1.7rem;
        color: #212529;
        text-align: center;
      }
      
      .cro-modal .cro-modal--image {
        width: 90%;
        margin: 0 auto;
        margin-top: 1rem;
        
      }
      
      .cro-modal .cro-modal--paragraph {
        color: #495057;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 1.3rem;
        display: none;
      }
      
      .cro-modal .cro-modal--paragraph-alternative {
        color: #495057;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 2.2rem;
        display: flex;
      }
      
      .cro-modal .cro-modal--button-keep-browsing {
        background-color: transparent;
        color: #004ECC;
        margin-top: 0.8rem;
        padding: 16px;
        border-radius: 8px;
        border: none;
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
        cursor: pointer;
      }
      
      .cro-modal .cro-modal--button-signup-whatsapp {
        background-color: #075E54;
        padding: 16px;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
      display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px
      }
      
      @media (min-width: 768px) {
        .cro-modal .cro-modal--content {
          max-width: 32rem;
          margin-top: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      
        .cro-modal .cro-modal--title {
          font-size: 2rem;
        }
      
        .cro-modal .cro-modal--image {
          min-width: 23rem;
          max-width: 26rem;
          width: 29vh;
        }
      
        .cro-modal .cro-modal--paragraph {
          display: flex;
        }
      
        .cro-modal .cro-modal--paragraph-alternative {
          display: none;
        }
      
        .cro-modal .cro-modal--button-keep-browsing {
          background-color: #E85A13;
          color: #FFFFFF;
          font-size: 1rem;
        }
      
        .cro-modal .cro-modal--button-signup-whatsapp {
          display: none;
        }
      
      }`;
    addStyle(styles);

  const modalHtml = `<div id="cro-modal" class="cro-modal">
  <div class="cro-modal--content">
    <button id="cro-modal--button-close" class="cro-modal--button-close"><img src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0013%5D%20VESTIBULARES%3A%20Pop%20up%20-%20Redirecionamento%20Wpp%20e%20Site%20Aedu/closeBtn.svg" alt="botão fechar modal"></button>
    <h1 class="cro-modal--title">Vestibulares agora pertence a Anhanguera</h1>
    <img class="cro-modal--image" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0013%5D%20VESTIBULARES%3A%20Pop%20up%20-%20Redirecionamento%20Wpp%20e%20Site%20Aedu/venhaParaAnhanguera.svg" alt="venha para a Anhanguera">
    <p class="cro-modal--paragraph">
      Navegue pelo site da Anhanguera para avaliar cursos, grades curriculares, ofertas e faça sua inscrição de uma
      maneira rápida e personalizada
    </p>
    <p class="cro-modal--paragraph-alternative">
      Escolha uma das formas abaixo para saber mais e se inscrever!
    </p>
    <button id="cro-modal--button-signup-whatsapp" class="cro-modal--button-signup-whatsapp"><img src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/optmize/%5B0013%5D%20VESTIBULARES%3A%20Pop%20up%20-%20Redirecionamento%20Wpp%20e%20Site%20Aedu/whatsappWhite.svg" alt="icone whatsapp"> Inscreva-se pelo
      WhatsApp</button>
    <button id="cro-modal--button-keep-browsing" class="cro-modal--button-keep-browsing">Continue navegando pelo site
      Anhanguera</button>
  </div>
</div>`;

  document.querySelector("body").insertAdjacentHTML("afterbegin", modalHtml);

  const modal = document.querySelector("#cro-modal");
  const closeModalBtn = document.querySelector("#cro-modal--button-close");
  const signupWhatsappBtn = document.querySelector("#cro-modal--button-signup-whatsapp");
  const keepBrowsingBtn = document.querySelector("#cro-modal--button-keep-browsing");
  var widthSize = window.screen.width
  var dataLayer = window.dataLayer = window.dataLayer || [];
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (widthSize <= 768) {
      dataLayer.push({
        'event': 'mobile_fechou_modal',
      })
  } else {
    dataLayer.push({
      'event': 'desk_fechou_modal',
    })
  }
  });
  signupWhatsappBtn.addEventListener("click", () => {
    dataLayer.push({
      'event': 'mobile_inscreva_se_pelo_whatsapp'
    })
      document.location = "https://api.whatsapp.com/send/?phone=5511989511509&text=+%5BTicket+ANH0026%5D+Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+a+inscri%C3%A7%C3%A3o%21+%2AN%C3%A3o+apague+esta+mensagem%2C+ela+%C3%A9+o+seu+ticket%2A&type=phone_number&app_absent=0"
  });
  keepBrowsingBtn.addEventListener("click", () => {
    if (widthSize <= 768) {
      dataLayer.push({
        'event': 'mobile_continue_navegando_pelo_site',
      });
  } else {
    dataLayer.push({
      'event': 'desk_continue_navegando_pelo_site',
    });
  }
location.href='https://www.anhanguera.com/cursos?utm_source=puc&utm_medium=site&utm_campaign=redirecionamento-puc-geral'
  });
  modal.style.display = "block";
}

croFunction();