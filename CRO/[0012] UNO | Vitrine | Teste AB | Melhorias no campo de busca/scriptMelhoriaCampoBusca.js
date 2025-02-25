function croFunction() {
  function addStyles(styles) {
    var css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
      document.head.insertAdjacentElement("afterbegin", css);
    }
  }
  var styles = `
    .cro-course-highlight {
      padding: 1.5rem;
    }
    .cro-course-highlight__title {
      color: #404040;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
      margin-bottom: 1rem;
    }
    .cro-course-highlight-list__item {
      margin-bottom: 1.5rem;
      color: #404040;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      list-style-type: none;
      display: flex;
      align-items: center;
    }
    .cro-course-highlight-list-item__counter {
      width: 23px;
      height: 23px;
      margin-right: 15px;
      border-radius: 5px;
      background-color: #173C7D;
      color: #FFFFFF;
      flex-shrink: 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cro-course-highlight-list-item__link {
      text-decoration: none;
      color: #404040;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      cursor: pointer;
    }
    .cro-course-highlight-list-item__link:hover {
      color: #173C7D;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      .cro-course-highlight {
        padding: 0.8rem;
      }
      .cro-course-highlight__title {
        font-size: 16px
      }
      .cro-course-highlight-list-item__counter {
        width: 19px;
        height: 19px;
        font-size: 12px;
        margin-right: 10px;
      }
      .cro-course-highlight-list-item__link {
        font-size: 13px;
      }
    }
  `;
  addStyles(styles);
  const elementObserved = document.querySelector(
    ".pg-cursos__search__container"
  );
  const inputElement = document.querySelector(".select__input");
  let timeoutId;

  inputElement.addEventListener('keyup', function (event) {
    clearTimeout(timeoutId); // Limpa o timeout anterior
    timeoutId = setTimeout(function () {
      if (inputElement.value.length > 0) {
        dataLayer.push({
          'event': 'buscou_curso',
          'nome_curso': inputElement.value
        })
      }
    }, 500); // Aguarda 1 segundo antes de executar o código
  });

  const observerElement = new MutationObserver(() => {
    const targetElement = document.querySelector(
      "#react-select-Select-listbox"
    );
    if (
      targetElement &&
      inputElement.value.length == 0
    ) {
      observeIntersection(targetElement);
      const options = document.querySelectorAll(".select__option");
      options.forEach((option) => {
        option.style.display = "none";
      });
    } else {
      if (document.querySelector(".cro-course-highlight")) {
        document.querySelector(".cro-course-highlight").remove();
        const options = document.querySelectorAll(".select__option");
        options.forEach((option) => {
          option.style.display = "block";
        });
      }
    }
  });
  observerElement.observe(elementObserved, { childList: true, subtree: true });
  function observeIntersection(targetElement) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetElement);
    function callback() {
      const lista = document.querySelector("#react-select-Select-listbox");
      if (lista && !document.querySelector(".cro-course-highlight")) {
        lista.insertAdjacentHTML(
          "afterbegin",
          `<div id="cro-course-highlight" class="cro-course-highlight">
              <h3 class="cro-course-highlight__title">Cursos mais buscados</h3>
              <ul class="cro-course-highlight__list">
                <li class="cro-course-highlight-list__item">
                  <div class="cro-course-highlight-list-item__counter">1</div>
                  <a id="cro-link__Administracao-Bacharelado" class="cro-course-highlight-list-item__link"> Administração - Bacharelado</a>
                </li>
                <li class="cro-course-highlight-list__item">
                  <div class="cro-course-highlight-list-item__counter">2</div>
                  <a id="cro-link__Psicologia-Bacharelado" class="cro-course-highlight-list-item__link">Psicologia - Bacharelado</a>
                </li>
                <li class="cro-course-highlight-list__item">
                  <div class="cro-course-highlight-list-item__counter">3</div>
                  <a id="cro-link__analise-desenvolvimento-sistemas-tecnologo" class="cro-course-highlight-list-item__link"
                    > Análise e Desenvolvimento de sistemas - Tecnólogo</a>
                </li>
                <li class="cro-course-highlight-list__item">
                  <div class="cro-course-highlight-list-item__counter">4</div>
                  <a id="cro-link__pedagogia-licenciatura" class="cro-course-highlight-list-item__link"> Pedagogia - Licenciatura</a>
                </li>
                <li class="cro-course-highlight-list__item">
                  <div class="cro-course-highlight-list-item__counter">5</div>
                  <a id="cro-link__enfermagem-bacharelado" class="cro-course-highlight-list-item__link"> Enfermagem - Bacharelado</a>
                </li>
              </ul>
            </div>`
        );
        const admLink = document.querySelector(
          "#cro-link__Administracao-Bacharelado"
        );
        const psicoLink = document.querySelector(
          "#cro-link__Psicologia-Bacharelado"
        );
        const adsLink = document.querySelector(
          "#cro-link__analise-desenvolvimento-sistemas-tecnologo"
        );
        const pdgLink = document.querySelector(
          "#cro-link__pedagogia-licenciatura"
        );
        const efgLink = document.querySelector(
          "#cro-link__enfermagem-bacharelado"
        );
        var dataLayer = (window.dataLayer = window.dataLayer || []);
        admLink.addEventListener("click", () => {
          dataLayer.push({
            event: "clicou_cursos_mais_buscados",
            curso_buscado: "administracao_bacharelado",
          });
          // document.location =
          //   "https://www.unopar.com.br/curso/administracao-bacharelado/";
        });
        psicoLink.addEventListener("click", () => {
          dataLayer.push({
            event: "clicou_cursos_mais_buscados",
            curso_buscado: "psicologia_bacharelado",
          });
          // document.location =
          //   "https://www.unopar.com.br/curso/psicologia-bacharelado/";
        });
        adsLink.addEventListener("click", () => {
          dataLayer.push({
            event: "clicou_cursos_mais_buscados",
            curso_buscado: "analise_e_desenvolvimento_de_sistemas_tecnologo",
          });
          // document.location =
          //   "https://www.unopar.com.br/curso/analise-e-desenvolvimento-de-sistemas/";
        });
        pdgLink.addEventListener("click", () => {
          dataLayer.push({
            event: "clicou_cursos_mais_buscados",
            curso_buscado: "pedagogia_licenciatura",
          });
          // document.location =
          //   "https://www.unopar.com.br/curso/pedagogia-licenciatura/";
        });
        efgLink.addEventListener("click", () => {
          dataLayer.push({
            event: "clicou_cursos_mais_buscados",
            curso_buscado: "enfermagem_bacharelado",
          });
          // document.location =
          //   "https://www.unopar.com.br/curso/enfermagem-bacharelado/";
        });
      }
    }
  }
}
croFunction();