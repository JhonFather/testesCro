function croFunction() {
  const elementoMover = document.querySelector("#__next > main > div.Structure__Wrapper-sc-tto9fg-0")
  const localDestino = document.querySelector(".pg-home__banner-home")

  if (elementoMover && localDestino) {
    localDestino.appendChild(elementoMover);
  }

  const graduationCoursesBtn = document.querySelector("#cro-menu--button-graduation-courses");
  const followApplicationBtn = document.querySelector("#cro-menu--button-follow-application");
  const unitsBtn = document.querySelector("#cro-menu--button-units");
  const serviceBtn = document.querySelector("#cro-menu--button-service");


  var dataLayer = window.dataLayer = window.dataLayer || [];

  graduationCoursesBtn.addEventListener("click", () => {
    dataLayer.push({
      'event': 'clique_menu_atalhos',
      'element_text': 'cursos_graduacao'
    })
    document.location = "https://www.unopar.com.br/cursos/"
  });

  followApplicationBtn.addEventListener("click", () => {
    dataLayer.push({
      'event': 'clique_menu_atalhos',
      'element_text': 'acompanhe_sua_inscricao'
    })
    document.location = "https://www.unopar.com.br/area-do-candidato/login"
  });

  unitsBtn.addEventListener("click", () => {
    dataLayer.push({
      'event': 'clique_menu_atalhos',
      'element_text': 'unidades'
    })
    document.location = "https://www.unopar.com.br/unidades/"
  });

  serviceBtn.addEventListener("click", () => {
    dataLayer.push({
      'event': 'clique_menu_atalhos',
      'element_text': 'atendimento'
    })
    document.location = "https://www.unopar.com.br/faq/"
  });

  //observador do botao de tema
  const elementoObservado = document.querySelector(".sc-eZkCL");
  const circle = document.querySelectorAll(".cro-menu--circle");
  const image = document.querySelectorAll(".cro-menu--image");
  const text = document.querySelectorAll(".cro-menu--text");
  var theme = localStorage.getItem("theme");

  if (theme === 'contrast') {
    circle.forEach(element => {
      element.style.border = "1px solid #F4F4F4";
    });
    image.forEach(element => {
      element.style.fill = "#F5FF00";
    });
    text.forEach(element => {
      element.style.color = "#F4F4F4";
    });
  }

  const observerElemento = new MutationObserver(() => {

    theme = localStorage.getItem("theme");

    if (theme === 'contrast') {
      circle.forEach(element => {
        element.style.border = "1px solid #F4F4F4";
      });
      image.forEach(element => {
        element.style.fill = "#F5FF00";
      });
      text.forEach(element => {
        element.style.color = "#F4F4F4";
      });
    } else {
      circle.forEach(element => {
        element.style.border = "1px solid #B7B7B7";
      });
      image.forEach(element => {
        element.style.fill = "#FB5F26";
      });
      text.forEach(element => {
        element.style.color = "#000";
      });
    }

  });

  const options = {
    subtree: true,
    attributes: true,
    attributeFilter: ['class'],
  }

  observerElemento.observe(elementoObservado, options);

  const elementObserved = document.querySelector('.pg-home__search__container');

  const observerElement = new MutationObserver(() => {
    const targetElement = document.querySelector('#react-select-Select-listbox');

    if (targetElement) {
      observeIntersection(targetElement);
    }
  });

  observerElement.observe(elementObserved, { childList: true, subtree: true });

  function observeIntersection(targetElement) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(targetElement);

    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lista = document.querySelector('#react-select-Select-listbox');
          const options = lista.querySelectorAll('.select__option')
          options.forEach(option => {
            option.addEventListener('click', (event) => {
              let texto = option.innerText;
              let textoFormatado = formatarTexto(texto);
              dataLayer.push({
                'event': 'buscou_curso',
                'nome_curso': textoFormatado
              });
              observer.disconnect()
            });
          });

          function formatarTexto(texto) {
            const textoSemAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const textoComUnderline = textoSemAcentos.replace(/\s+/g, "_");
            const textoFormatado = textoComUnderline.replace(/-/g, "");
            return textoFormatado.toLowerCase();
          }
        }
      });
    }
  }
}

if (window.screen.width < 768) {
  croFunction();
}
