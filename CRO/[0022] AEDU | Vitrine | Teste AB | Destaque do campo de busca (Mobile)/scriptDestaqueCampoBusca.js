function modificacaoMutation() {
  
  const elementObserved = document.querySelector("#vueApp > div.container-fluid.bg-color-bg > div.row.pb-4.my-0 > div > div > div.row") ?? document.querySelector('.row.pb-4.my-0')
  
  const observerElement = new MutationObserver(() => {
      const search = document.querySelector(".form-group.form-search");

      search && modifyElements(search);
  });

  const options = { childList: true };

  observerElement.observe( elementObserved, options );

  function modifyElements(search) {
      const divSearch = document.querySelector('.cro-search');

      divSearch.classList.remove('skeleton');

      divSearch.appendChild(search)

      document.querySelector(".input-group > button").remove();


      const filterMover = document.querySelector("#vueApp > div:nth-child(2) > div.row.my-1.p-relative.hide-sm > div:nth-child(2) > button");

      const orderFilter = document.querySelector("#vueApp > div:nth-child(2) > div.row.my-1.p-relative.hide-sm > div.col.flex-grow-1 > button");

      const filterDestino = document.querySelector("#vueApp > div.container-fluid.bg-color-bg > div.row.pb-4.my-0 > div > div > div.row > div.col-xs-12.col-sm-8.col-md-9.mt-2 > div > div.row.my-0");


      if (filterDestino && !document.querySelector(".cro-container-filter")) {
        const divFilterHtml = `<div class="cro-container-filter"></div>`;

        filterDestino.insertAdjacentHTML("beforebegin", divFilterHtml);

        const divFilter = document.querySelector(".cro-container-filter");

        divFilter.appendChild(filterMover);

        divFilter.appendChild(orderFilter);
      }

      document.querySelector(".form-search > div > div > button").addEventListener('click', ()=>{
        document.body.scrollTo(0,160)
      })
      observerElement.disconnect(); 
  }
}
document.addEventListener('DOMContentLoaded', modificacaoMutation);

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
    #navMenu {
      z-index: 1
    }

    #vueApp > div:nth-child(2) {
      display: none
    }

    .cro-container-filter {
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      padding: 2rem 0 0 0;
    }

    .form-search {
      padding-top: 1rem;
    }

    .container-fluid {
      padding-top: 2rem
    }

    .cro-search.skeleton {
      width: 100%;
      height: 68px;
    }

    .cro-search.skeleton::before {
      border-radius: 50px;
      box-shadow:0 0 0 1px var(--text-30);
    }

    .cro-search.skeleton::after {
      border-radius: 50px;
    }
  `;
  addStyles(styles);

  const removeText = document.querySelector("#vueApp > div:nth-child(2) > div.row.my-1.p-relative.hide-sm > div.col-xs-12 > p");

  const novaDivHTML = `<div class="cro-search skeleton"></div>`

  document.querySelector('header').insertAdjacentHTML('beforeend', novaDivHTML);
  
  if(removeText){
    removeText.remove();
  }

  modificacaoMutation();
}

if (window.screen.width < 768) {
  croFunction();
}
