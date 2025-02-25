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
  .nav-grid-col > ul > li:nth-child(5) > a {
    align-items: center;
  }
  
.cro-highlight {
  background: #FF572A;
  margin-left: 10px;
  padding: 1px 6px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #FFFFFF;
  letter-spacing: 0.15px;
}
`;
  addStyles(styles);

  document.querySelector(".nav-grid-col > ul > li:nth-child(5) > a").innerHTML = `EJA - Supletivo <span class="cro-highlight">Destaque</span>`;
}

croFunction();