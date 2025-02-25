function loadVgPersonalization() {
  document.body.classList.add("banner-workalove-popup");
  function addStyle(styles) {
    const css = document.createElement("style");
    css.type = "text/css";

    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
      document.head.insertAdjacentElement("afterbegin", css);
    }
  }

  const styles = `
    .popup-vg{
        height: 100vh;
        width: 100vw;
        position: fixed;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999
    }
    .popup-vg-shadow{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 10;
    }
    .popup-container{
        position: relative;
        margin-inline: 2rem;
    }
    .popup-vg--image{
        width: 100%;
        border-radius: 24px;
        z-index: 11;
        position: relative;
        cursor: pointer

    }

    .popup-container--button {
        position: absolute;
        z-index: 12;
        background-color: #ddd;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -20px;
        margin-right: -20px;
        right: 0;
        cursor: pointer;
        padding: 5px;
    }

    .popup-vg--closeBtn{
        width: 32px;
        height: 32px;
        
    }
    .popup-vg.closed{
        display: none
    }

  `;

  addStyle(styles);

  const htmlModal = `
    <div class="popup-vg closed">
        <span class="popup-vg-shadow" onclick='fireGA("anhanguera:home:banner-workalove","clique:shadow","fechar-popup")'></span>
        <div class="popup-container" href="https://www.anhanguera.com/inscricao/" target="_self">
            <div class="popup-container--button" >
                <svg class="popup-vg--closeBtn" onclick='fireGA("anhanguera:home:banner-workalove","clique:button","fechar-popup")' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#181818">
                    <path d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"/>
                </svg>
            </div>
            <picture data-modal-cta="">
                <source srcset="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/insider/%5Bwebsales%5D%20workalove%20home%20e%20cursos/popup%20-%20mobile-home.webp" type="image/webp">
                <source srcset="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/insider/%5Bwebsales%5D%20workalove%20home%20e%20cursos/popup%20-%20mobile-home.jpg">
                <img class="popup-vg--image" src="https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/insider/%5Bwebsales%5D%20workalove%20home%20e%20cursos/popup%20-%20mobile-home.jpg" alt="Popup Vestibular Geral Meritocracia">
            </picture>
        </div>
    </div>
    `;

  document.body.insertAdjacentHTML("afterbegin", htmlModal);

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
  function setCookie(k, v, expira, path) {
    if (!path) path = "/";
    var d = new Date();
    d.setTime(d.getTime() + expira * 1000);
    document.cookie =
      encodeURIComponent(k) +
      "=" +
      encodeURIComponent(v) +
      "; expires=" +
      d.toUTCString() +
      "; path=" +
      path;
  }

  function handleScroll() {
    const item = getCookie("workalove-banner-home");
    if (!item) {
      if (body.scrollTop + screen.height > body.scrollHeight * 0.46) {
        showModal();
      }
    }
  }

  document.body.addEventListener("scroll", handleScroll);

  function showModal() {
    fireGA(
      "anhanguera:home:banner-workalove",
      "show-popup",
      "descubra-seu-potencial"
    );
    document.querySelector(".popup-vg").classList.remove("closed");
    document.body.style.overflowY = "hidden";
    document.body.removeEventListener("scroll", handleScroll);
  }

  const popup = document.querySelector(".popup-vg");
  const shadow = document.querySelector(".popup-vg-shadow");
  const closeBtn = document.querySelector(".popup-vg--closeBtn");

  shadow.addEventListener("click", closePopup);
  closeBtn.addEventListener("click", closePopup);

  function closePopup() {
    popup.classList.add("closed");
    document.body.style.overflowY = "auto";
    setCookie("workalove-banner-home", "banner", 604800000);
  }

  function pushWorkalove() {
    fireGA("anhanguera:home:banner-workalove", "clique:popup", "inscreva-se");
    window.open("/inscricao/", "_self");
    setCookie("workalove-banner-home", "banner", 604800000);
  }
  document
    .querySelector("[data-modal-cta]")
    .addEventListener("click", pushWorkalove);
}

if (!document.body.classList.contains("banner-workalove-popup")) {
  try {
    loadVgPersonalization();
    fireGA("anhanguera:home:banner-workalove", "page-load:mobile", "page-load");
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}
