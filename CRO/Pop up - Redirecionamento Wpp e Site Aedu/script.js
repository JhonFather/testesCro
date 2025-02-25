function croFunction() {
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