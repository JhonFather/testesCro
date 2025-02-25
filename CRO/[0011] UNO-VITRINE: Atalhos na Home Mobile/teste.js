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
  .cro-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 4rem 1rem 2rem 1rem;
    gap: 7.5px;
  }

  .cro-menu .cro-menu--button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background-color: transparent;
    width: 100%;
  }

  .cro-menu .cro-menu--circle {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #B7B7B7;
    border-radius: 50%;
    background-color: transparent;
    margin-bottom: 8px;
  }
    
    
  .cro-menu .cro-menu--text {
    color: #000;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 768px) {
    .cro-menu {
      display: none;
    }
  }
`;
  addStyle(styles);

  const iconsHtml = `
  <div class="cro-menu">
  <button id="cro-menu--button-graduation-courses" class="cro-menu--button">
    <div class="cro-menu--circle">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
        <path class="cro-menu--image" d="M26.6856 8.01547L25.4156 7.31696L13.9854 0.966826H13.8457C13.7678 0.933906 13.687 0.908393 13.6044 0.890625H13.363H13.1344C13.0477 0.908404 12.9627 0.933906 12.8804 0.966826H12.7407L1.3105 7.31696C1.11505 7.42773 0.952473 7.58836 0.839366 7.78247C0.726258 7.97658 0.666664 8.19722 0.666664 8.42188C0.666664 8.64654 0.726258 8.86718 0.839366 9.06129C0.952473 9.2554 1.11505 9.41603 1.3105 9.5268L4.47287 11.2794V17.2994C4.47287 18.3099 4.87428 19.279 5.58881 19.9935C6.30334 20.708 7.27245 21.1094 8.28294 21.1094H18.4431C19.4536 21.1094 20.4228 20.708 21.1373 19.9935C21.8518 19.279 22.2532 18.3099 22.2532 17.2994V11.2794L24.7933 9.85701V13.4893C24.7933 13.8261 24.9271 14.1491 25.1653 14.3873C25.4034 14.6255 25.7265 14.7593 26.0633 14.7593C26.4001 14.7593 26.7232 14.6255 26.9613 14.3873C27.1995 14.1491 27.3333 13.8261 27.3333 13.4893V9.12039C27.3329 8.89535 27.2728 8.67445 27.159 8.4803C27.0451 8.28616 26.8818 8.12574 26.6856 8.01547ZM19.7132 17.2994C19.7132 17.6362 19.5794 17.9592 19.3412 18.1974C19.103 18.4356 18.78 18.5694 18.4431 18.5694H8.28294C7.94611 18.5694 7.62308 18.4356 7.3849 18.1974C7.14672 17.9592 7.01292 17.6362 7.01292 17.2994V12.6892L12.7407 15.8642L12.9312 15.9404H13.0455C13.151 15.9537 13.2576 15.9537 13.363 15.9404C13.4685 15.9537 13.5751 15.9537 13.6806 15.9404H13.7949C13.8623 15.9262 13.9267 15.9004 13.9854 15.8642L19.7132 12.6892V17.2994ZM13.363 13.3115L4.54907 8.40918L13.363 3.50688L22.177 8.40918L13.363 13.3115Z" fill="#FB5F26"></path>
      </svg>
    </div>
    <spam class="cro-menu--text">Cursos Graduação</spam>
  </button>

  <button id="cro-menu--button-follow-application" class="cro-menu--button">
    <div class="cro-menu--circle">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
        <path class="cro-menu--image" d="M12.3297 24.6597H4.33199C3.97847 24.6597 3.63943 24.5193 3.38945 24.2693C3.13947 24.0193 2.99904 23.6803 2.99904 23.3268V4.66553C2.99904 4.31201 3.13947 3.97297 3.38945 3.72299C3.63943 3.47302 3.97847 3.33258 4.33199 3.33258H10.9967V7.33142C10.9967 8.39198 11.418 9.4091 12.168 10.159C12.9179 10.909 13.935 11.3303 14.9956 11.3303H18.9944V17.995C18.9944 18.3485 19.1348 18.6876 19.3848 18.9375C19.6348 19.1875 19.9738 19.3279 20.3274 19.3279C20.6809 19.3279 21.0199 19.1875 21.2699 18.9375C21.5199 18.6876 21.6603 18.3485 21.6603 17.995V9.99732C21.6603 9.99732 21.6603 9.99731 21.6603 9.91734C21.6464 9.79489 21.6196 9.67425 21.5803 9.55744V9.43748C21.5162 9.30042 21.4307 9.17444 21.3271 9.06425L13.3294 1.06657C13.2192 0.962889 13.0932 0.877401 12.9562 0.813311C12.9121 0.805593 12.867 0.805593 12.8229 0.813311C12.6932 0.744002 12.554 0.694575 12.4096 0.666687H4.33199C3.27143 0.666687 2.25431 1.08799 1.50438 1.83792C0.754451 2.58785 0.333145 3.60497 0.333145 4.66553V23.3268C0.333145 24.3873 0.754451 25.4045 1.50438 26.1544C2.25431 26.9043 3.27143 27.3256 4.33199 27.3256H12.3297C12.6832 27.3256 13.0222 27.1852 13.2722 26.9352C13.5222 26.6852 13.6626 26.3462 13.6626 25.9927C13.6626 25.6392 13.5222 25.3001 13.2722 25.0501C13.0222 24.8002 12.6832 24.6597 12.3297 24.6597ZM13.6626 5.21204L17.1149 8.66437H14.9956C14.642 8.66437 14.303 8.52393 14.053 8.27396C13.8031 8.02398 13.6626 7.68494 13.6626 7.33142V5.21204ZM6.99788 16.6621H14.9956C15.3491 16.6621 15.6881 16.5216 15.9381 16.2716C16.1881 16.0217 16.3285 15.6826 16.3285 15.3291C16.3285 14.9756 16.1881 14.6365 15.9381 14.3866C15.6881 14.1366 15.3491 13.9962 14.9956 13.9962H6.99788C6.64436 13.9962 6.30532 14.1366 6.05534 14.3866C5.80537 14.6365 5.66493 14.9756 5.66493 15.3291C5.66493 15.6826 5.80537 16.0217 6.05534 16.2716C6.30532 16.5216 6.64436 16.6621 6.99788 16.6621ZM12.3297 19.3279H6.99788C6.64436 19.3279 6.30532 19.4684 6.05534 19.7184C5.80537 19.9683 5.66493 20.3074 5.66493 20.6609C5.66493 21.0144 5.80537 21.3535 6.05534 21.6034C6.30532 21.8534 6.64436 21.9938 6.99788 21.9938H12.3297C12.6832 21.9938 13.0222 21.8534 13.2722 21.6034C13.5222 21.3535 13.6626 21.0144 13.6626 20.6609C13.6626 20.3074 13.5222 19.9683 13.2722 19.7184C13.0222 19.4684 12.6832 19.3279 12.3297 19.3279ZM6.99788 11.3303H8.33083C8.68435 11.3303 9.02339 11.1898 9.27336 10.9399C9.52334 10.6899 9.66377 10.3508 9.66377 9.99732C9.66377 9.6438 9.52334 9.30476 9.27336 9.05478C9.02339 8.8048 8.68435 8.66437 8.33083 8.66437H6.99788C6.64436 8.66437 6.30532 8.8048 6.05534 9.05478C5.80537 9.30476 5.66493 9.6438 5.66493 9.99732C5.66493 10.3508 5.80537 10.6899 6.05534 10.9399C6.30532 11.1898 6.64436 11.3303 6.99788 11.3303ZM25.2726 19.7145C25.1487 19.5896 25.0012 19.4904 24.8388 19.4227C24.6764 19.3551 24.5022 19.3202 24.3262 19.3202C24.1502 19.3202 23.976 19.3551 23.8136 19.4227C23.6511 19.4904 23.5037 19.5896 23.3798 19.7145L18.9944 24.1132L17.2749 22.3804C17.1506 22.2561 17.0031 22.1575 16.8407 22.0903C16.6783 22.023 16.5043 21.9884 16.3285 21.9884C16.1527 21.9884 15.9787 22.023 15.8163 22.0903C15.6539 22.1575 15.5064 22.2561 15.3821 22.3804C15.2578 22.5047 15.1592 22.6522 15.092 22.8146C15.0247 22.977 14.9901 23.151 14.9901 23.3268C14.9901 23.5025 15.0247 23.6766 15.092 23.839C15.1592 24.0014 15.2578 24.1489 15.3821 24.2732L18.048 26.9391C18.1719 27.064 18.3194 27.1632 18.4818 27.2308C18.6442 27.2985 18.8184 27.3334 18.9944 27.3334C19.1704 27.3334 19.3446 27.2985 19.507 27.2308C19.6695 27.1632 19.8169 27.064 19.9408 26.9391L25.2726 21.6073C25.3975 21.4834 25.4967 21.3359 25.5644 21.1735C25.632 21.0111 25.6669 20.8369 25.6669 20.6609C25.6669 20.4849 25.632 20.3107 25.5644 20.1483C25.4967 19.9858 25.3975 19.8384 25.2726 19.7145Z" fill="#FB5F26"></path>
      </svg>
    </div>
    <spam class="cro-menu--text">Acompanhe sua inscrição</spam>
  </button>

  <button id="cro-menu--button-units" class="cro-menu--button">
    <div id="dod" class="cro-menu--circle">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path class="cro-menu--image" d="M20.0069 3.9804C17.8852 1.85866 15.0075 0.666687 12.0069 0.666687C9.00633 0.666687 6.12865 1.85866 4.00692 3.9804C1.88518 6.10213 0.693207 8.97981 0.693207 11.9804C0.693207 14.981 1.88518 17.8587 4.00692 19.9804L11.0336 27.0204C11.1575 27.1454 11.305 27.2446 11.4675 27.3123C11.63 27.3799 11.8042 27.4148 11.9802 27.4148C12.1563 27.4148 12.3305 27.3799 12.493 27.3123C12.6555 27.2446 12.803 27.1454 12.9269 27.0204L20.0069 19.9137C22.1198 17.8008 23.3068 14.9351 23.3068 11.9471C23.3068 8.95899 22.1198 6.0933 20.0069 3.9804ZM18.1002 18.0071L12.0069 24.1271L5.91358 18.0071C4.70977 16.8022 3.89022 15.2674 3.55851 13.5968C3.2268 11.9262 3.39783 10.1947 4.04999 8.6213C4.70214 7.04788 5.80614 5.70313 7.22242 4.75703C8.63871 3.81094 10.3037 3.30597 12.0069 3.30597C13.7101 3.30597 15.3751 3.81094 16.7914 4.75703C18.2077 5.70313 19.3117 7.04788 19.9638 8.6213C20.616 10.1947 20.787 11.9262 20.4553 13.5968C20.1236 15.2674 19.3041 16.8022 18.1002 18.0071ZM8.00692 7.88706C6.93053 8.96676 6.32611 10.4292 6.32611 11.9537C6.32611 13.4783 6.93053 14.9407 8.00692 16.0204C8.8066 16.8214 9.82503 17.3685 10.9344 17.5929C12.0439 17.8174 13.1949 17.7092 14.243 17.2819C15.2912 16.8547 16.1898 16.1274 16.8262 15.1914C17.4626 14.2554 17.8084 13.1522 17.8202 12.0204C17.8263 11.2647 17.6807 10.5154 17.3921 9.81691C17.1036 9.11842 16.6779 8.48487 16.1402 7.95373C15.6118 7.41317 14.9817 6.98245 14.2861 6.68635C13.5906 6.39025 12.8434 6.23463 12.0875 6.22843C11.3315 6.22224 10.5818 6.36559 9.88154 6.65025C9.18124 6.9349 8.54414 7.35524 8.00692 7.88706ZM14.2602 14.1271C13.755 14.6401 13.0872 14.9616 12.3711 15.0367C11.655 15.1119 10.935 14.9359 10.3343 14.539C9.73352 14.142 9.28931 13.5487 9.07759 12.8605C8.86587 12.1723 8.89978 11.4319 9.17353 10.7659C9.44727 10.1 9.94385 9.54975 10.5784 9.20938C11.2129 8.86901 11.9459 8.75961 12.6522 8.89989C13.3584 9.04016 13.994 9.42141 14.4503 9.97844C14.9065 10.5355 15.1551 11.2337 15.1536 11.9537C15.1342 12.7768 14.7889 13.5584 14.1936 14.1271H14.2602Z" fill="#FB5F26"></path>
      </svg>
    </div>
    <spam class="cro-menu--text">Unidades</spam>
  </button>

  <button id="cro-menu--button-service" class="cro-menu--button">
    <div class="cro-menu--circle">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path class="cro-menu--image" d="M19.0459 12.1006C18.8097 12.1006 18.5627 12.0255 18.3265 11.9718C17.8482 11.8664 17.3782 11.7264 16.9201 11.5531C16.422 11.3719 15.8745 11.3813 15.383 11.5795C14.8914 11.7777 14.4905 12.1507 14.2575 12.6267L14.0213 13.1098C12.9756 12.5281 12.0146 11.8056 11.1654 10.9626C10.3224 10.1133 9.59988 9.15243 9.01817 8.10672L9.46909 7.8061C9.9451 7.57304 10.3181 7.17216 10.5163 6.68061C10.7145 6.18906 10.7239 5.64158 10.5427 5.14351C10.3723 4.68445 10.2324 4.2146 10.124 3.73705C10.0703 3.50086 10.0274 3.25392 9.99517 3.00699C9.86479 2.25075 9.46869 1.5659 8.87819 1.07579C8.28769 0.585674 7.5416 0.322497 6.77429 0.333654H3.5534C3.0907 0.329309 2.6325 0.424712 2.20998 0.613366C1.78747 0.802021 1.41056 1.0795 1.10492 1.42691C0.799278 1.77432 0.572081 2.18351 0.438794 2.62662C0.305507 3.06972 0.269259 3.53635 0.332518 3.99473C0.90448 8.49256 2.95864 12.6717 6.17053 15.8719C9.38242 19.0721 13.569 21.111 18.0689 21.6666H18.4768C19.2685 21.6678 20.0329 21.3773 20.6241 20.8507C20.9637 20.5469 21.2351 20.1745 21.4201 19.7581C21.6052 19.3417 21.6998 18.8907 21.6977 18.435V15.2141C21.6846 14.4684 21.413 13.7503 20.9294 13.1825C20.4457 12.6146 19.78 12.2323 19.0459 12.1006ZM19.5827 18.5424C19.5825 18.6948 19.5498 18.8455 19.4869 18.9843C19.4239 19.1232 19.3322 19.247 19.2176 19.3476C19.098 19.4518 18.9578 19.5295 18.8061 19.5757C18.6544 19.622 18.4946 19.6357 18.3373 19.616C14.3164 19.1005 10.5816 17.261 7.72199 14.3878C4.86236 11.5145 3.04065 7.77104 2.54419 3.74779C2.5271 3.59052 2.54208 3.43143 2.58821 3.28011C2.63435 3.12879 2.71068 2.9884 2.8126 2.86742C2.91321 2.75289 3.03705 2.66111 3.17589 2.59817C3.31473 2.53523 3.46538 2.50258 3.61782 2.50238H6.8387C7.08837 2.49683 7.33217 2.57848 7.52813 2.73329C7.72409 2.8881 7.85995 3.10637 7.91233 3.35055C7.95528 3.64401 8.00896 3.93389 8.07338 4.22019C8.1974 4.78614 8.36246 5.34232 8.56724 5.88431L7.06416 6.58217C6.93565 6.64113 6.82005 6.7249 6.72399 6.82867C6.62794 6.93243 6.55333 7.05415 6.50445 7.18683C6.45557 7.31951 6.43338 7.46054 6.43915 7.60182C6.44492 7.7431 6.47854 7.88184 6.53809 8.01009C8.08325 11.3198 10.7438 13.9803 14.0535 15.5255C14.3149 15.6329 14.6081 15.6329 14.8694 15.5255C15.0033 15.4776 15.1264 15.4036 15.2314 15.3077C15.3365 15.2119 15.4215 15.0962 15.4814 14.9672L16.1471 13.4641C16.7021 13.6626 17.2686 13.8275 17.8434 13.958C18.1297 14.0224 18.4196 14.0761 18.713 14.119C18.9572 14.1714 19.1755 14.3073 19.3303 14.5032C19.4851 14.6992 19.5667 14.943 19.5612 15.1927L19.5827 18.5424Z" fill="#FB5F26"></path>
      </svg>
    </div>
    <spam class="cro-menu--text">Atendimento</spam>
  </button>
  </div>
`;

  document.querySelector("main").insertAdjacentHTML("afterbegin", iconsHtml);

  const elementoMover = document.querySelector(".pg-home__course-search__home");
  const localDestino = document.querySelector(".pg-home__banner-home");

  if (elementoMover && localDestino) {
    localDestino.appendChild(elementoMover);
  }

  const graduationCoursesBtn = document.querySelector(
    "#cro-menu--button-graduation-courses"
  );
  const followApplicationBtn = document.querySelector(
    "#cro-menu--button-follow-application"
  );
  const unitsBtn = document.querySelector("#cro-menu--button-units");
  const serviceBtn = document.querySelector("#cro-menu--button-service");

  var dataLayer = (window.dataLayer = window.dataLayer || []);

  graduationCoursesBtn.addEventListener("click", () => {
    dataLayer.push({
      event: "clique_menu_atalhos",
      element_text: "cursos_graduacao",
    });
    document.location = "https://www.unopar.com.br/cursos/";
  });

  followApplicationBtn.addEventListener("click", () => {
    dataLayer.push({
      event: "clique_menu_atalhos",
      element_text: "acompanhe_sua_inscricao",
    });
    document.location = "https://www.unopar.com.br/area-do-candidato/login";
  });

  unitsBtn.addEventListener("click", () => {
    dataLayer.push({
      event: "clique_menu_atalhos",
      element_text: "unidades",
    });
    document.location = "https://www.unopar.com.br/unidades/";
  });

  serviceBtn.addEventListener("click", () => {
    dataLayer.push({
      event: "clique_menu_atalhos",
      element_text: "atendimento",
    });
    document.location = "https://www.unopar.com.br/faq/";
  });

  //observador do botao de tema
  const elementoObservado = document.querySelector(".button-contrast");
  const circle = document.querySelectorAll(".cro-menu--circle");
  const image = document.querySelectorAll(".cro-menu--image");
  const text = document.querySelectorAll(".cro-menu--text");
  var theme = localStorage.getItem("theme");

  if (theme === "contrast") {
    circle.forEach((element) => {
      element.style.border = "1px solid #F4F4F4";
    });
    image.forEach((element) => {
      element.style.fill = "#F5FF00";
    });
    text.forEach((element) => {
      element.style.color = "#F4F4F4";
    });
  }

  const observerElemento = new MutationObserver(() => {
    theme = localStorage.getItem("theme");

    if (theme === "contrast") {
      circle.forEach((element) => {
        element.style.border = "1px solid #F4F4F4";
      });
      image.forEach((element) => {
        element.style.fill = "#F5FF00";
      });
      text.forEach((element) => {
        element.style.color = "#F4F4F4";
      });
    } else {
      circle.forEach((element) => {
        element.style.border = "1px solid #B7B7B7";
      });
      image.forEach((element) => {
        element.style.fill = "#FB5F26";
      });
      text.forEach((element) => {
        element.style.color = "#000";
      });
    }
  });

  const options = {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  };

  observerElemento.observe(elementoObservado, options);

  const elementObserved = document.querySelector(".pg-home__search__container");

  const observerElement = new MutationObserver(() => {
    const targetElement = document.querySelector(
      "#react-select-Select-listbox"
    );

    if (targetElement) {
      observeIntersection(targetElement);
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

    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lista = document.querySelector("#react-select-Select-listbox");
          const options = lista.querySelectorAll(".select__option");
          options.forEach((option) => {
            option.addEventListener("click", (event) => {
              let texto = option.innerText;
              let textoFormatado = formatarTexto(texto);
              dataLayer.push({
                event: "buscou_curso",
                nome_curso: textoFormatado,
              });
              observer.disconnect();
            });
          });

          function formatarTexto(texto) {
            const textoSemAcentos = texto
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
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
