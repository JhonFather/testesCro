function croFunction() {
  const admLink = document.querySelector("#cro-link__Administracao-Bacharelado");
  const psicoLink = document.querySelector("#cro-link__Psicologia-Bacharelado");
  const adsLink = document.querySelector("#cro-link__analise-desenvolvimento-sistemas-tecnologo");
  const pdgLink = document.querySelector("#cro-link__pedagogia-licenciatura");
  const efgLink = document.querySelector("#cro-link__enfermagem-bacharelado");

  // var dataLayer = window.dataLayer = window.dataLayer || [];

  admLink.addEventListener("click", () => {
    // dataLayer.push({
    //   'event': 'clique_menu_atalhos',
    //   'element_text': 'cursos_graduacao'
    // })
    document.location = "https://www.unopar.com.br/curso/administracao-bacharelado/"
  });

  psicoLink.addEventListener("click", () => {
    // dataLayer.push({
    //   'event': 'clique_menu_atalhos',
    //   'element_text': 'acompanhe_sua_inscricao'
    // })
    document.location = "https://www.unopar.com.br/curso/psicologia-bacharelado/"
  });

  adsLink.addEventListener("click", () => {
    // dataLayer.push({
    //   'event': 'clique_menu_atalhos',
    //   'element_text': 'unidades'
    // })
    document.location = "https://www.unopar.com.br/curso/analise-e-desenvolvimento-de-sistemas/"
  });

  pdgLink.addEventListener("click", () => {
    // dataLayer.push({
    //   'event': 'clique_menu_atalhos',
    //   'element_text': 'atendimento'
    // })
    document.location = "https://www.unopar.com.br/curso/pedagogia-licenciatura/"
  });

  efgLink.addEventListener("click", () => {
    // dataLayer.push({
    //   'event': 'clique_menu_atalhos',
    //   'element_text': 'atendimento'
    // })
    document.location = "https://www.unopar.com.br/curso/enfermagem-bacharelado/"
  });

  const elementInsert = document.querySelector(".cro-course-highlight")
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
          if (lista) {
            lista.appendChild(elementInsert);
          }
        }
      });
    }
  }
}

croFunction();