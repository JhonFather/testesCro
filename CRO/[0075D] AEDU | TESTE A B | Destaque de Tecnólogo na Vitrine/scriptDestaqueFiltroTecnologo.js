function croFunction() {
  const filterMover = document.querySelector("#vueApp > div.container-fluid.bg-color-bg > div.row.pb-4.my-0 > div > div > div.row > div:nth-child(1) > div > div.overflow-auto.\\.h-100.h-100 > div:nth-child(4)");

  const filterDestino = document.querySelector("#vueApp > div.container-fluid.bg-color-bg > div.row.pb-4.my-0 > div > div > div.row > div:nth-child(1) > div > div.overflow-auto.\\.h-100.h-100 > div:nth-child(1)");

  if (filterDestino && !document.querySelector(".cro-container-filter")) {
    const divFilterHtml = `<div class="cro-container-filter"></div>`;

    filterDestino.insertAdjacentHTML("beforebegin", divFilterHtml);

    const divFilter = document.querySelector(".cro-container-filter");

    divFilter.appendChild(filterMover);
  }
}
document.addEventListener('DOMContentLoaded', croFunction);
croFunction();