let callback = {
    progressBarPersonalized: false,
    pricePersonalized: false,
    ctaButtonPersonalized: false,
    headerPersonalized: false,
    footerPersonalized: false,
}
const urlIngresso = "/selecao/inscricao/"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyHeader(header) {

    function applyHeaderModification() {

        if (!header) {
            return;
        }

        const headerLogo = document.querySelectorAll('[data-testid="container-link"], [data-testid="container-link-mobile"]');

        headerLogo?.forEach(item => {
            item.setAttribute('href', urlIngresso);
        });
    }

    header.classList.add('already-haves-href-header-mutation');

    callback.headerPersonalized = true;

    applyHeaderModification();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(applyHeaderModification);
    });

    observer.observe(header, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyFooter(footer) {
    function applyModification() {

        if (!footer) {
            return;
        }

        const footerLink = footer.querySelector('a');

        if (footerLink) {
            footerLink.setAttribute('href', urlIngresso);
        }
    }

    footer.classList.add('already-haves-href-footer-mutation');

    callback.footerPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(footer, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyProgressBar(progressBar) {

    function applyProgressBarChanges() {

        if (!progressBar) {
            return;
        }

        const numberSteps = progressBar.querySelectorAll('.step-bar > .step > .step-number');
        const barSteps = progressBar.querySelectorAll('.step-bar > .progress-bar > .progress');

        if (numberSteps) {
            numberSteps.forEach((item) => {
                if (item.classList.contains('completed')) {
                    item.style.fontSize = "21px"
                } else {
                    if (!item.classList.contains('active')) {
                        item.style.setProperty("background-color", "var(--cro-disabled)", "important");
                    }
                }
            });
        }
        if (barSteps) {
            barSteps.forEach((item, index) => {
                if (index !== 0) {
                    item.style.setProperty("background-color", "var(--cro-disabled)", "important");
                }
            });
        }
    }

    progressBar.classList.add('already-haves-progress-bar-mutation');

    callback.progressBarPersonalized = true;

    applyProgressBarChanges();

    const observer = new MutationObserver(applyProgressBarChanges);

    observer.observe(progressBar, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyPrice(funilOffer) {

    function applyPriceChanges() {

        if (!funilOffer) {
            return;
        }

        const offerPrice = funilOffer.querySelector('[data-testid="course-price-info"]');
        const showMonthlyPayments = funilOffer.querySelector('[data-testid="payment-info-button"]');

        if (offerPrice) {
            offerPrice.parentElement.querySelector('div:nth-of-type(4)').style.display = "none";
            offerPrice.style.display = "none";
            offerPrice.parentElement.querySelector('[data-testid="discount-info-modal"]').style.display = "none";
            // offerPrice.parentElement.querySelector('button').style.display = "none";
        }
        if (showMonthlyPayments) {
            offerPrice.parentElement.querySelector('div:nth-of-type(6)').style.display = "none";
            showMonthlyPayments.style.display = "none";
        }
    }

    funilOffer.classList.add('already-haves-price-mutation');

    callback.pricePersonalized = true;

    applyPriceChanges();

    const observer = new MutationObserver(applyPriceChanges);

    observer.observe(funilOffer, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyCtaButton(ctaButton) {

    function applyPriceChanges() {

        if (!ctaButton) {
            return;
        }

        const textButton = ctaButton.querySelector('span');

        if (textButton) {
            if (textButton.textContent !== "Tentar Novamente") {
                textButton.textContent = "Finalizar Matrícula";
                textButton.style.paddingTop = "18px";
            } else {
                ctaButton?.setAttribute('href', urlIngresso);
            }
        }
    }

    ctaButton.classList.add('already-haves-cta-button-mutation');

    // callback.ctaButtonPersonalized = true;

    applyPriceChanges();

    const observer = new MutationObserver(applyPriceChanges);

    observer.observe(ctaButton, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const addStyles = function (styles) {
    const css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
        document.head.insertAdjacentElement("afterbegin", css);
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function crofindTheme() {
    const contrastMode = window?.getComputedStyle(document.querySelector('[data-testid="button-candidate-area"]')).backgroundColor;
    const darkMode = window.getComputedStyle(document.body).backgroundColor;

    const htmlElement = document.documentElement;

    if (contrastMode === "rgb(245, 255, 0)") {
        htmlElement.classList.add("contrast-mode");
    } else {
        htmlElement.classList.remove("contrast-mode");

        if (darkMode === "rgb(15, 15, 15)") {
            htmlElement.classList.add("dark-mode");
        } else {
            htmlElement.classList.remove("dark-mode");
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroTest() {
    console.warn('teste 0105 e alterar o href do logo rodando');
    document.documentElement.classList.add('already-haves-test-0105-href-logo');

    const styles = /*css*/ `
        :root {
            --cro-disabled: #B7B7B7;
        }
        .dark-mode {
            --cro-disabled: #292929;
        }
        .contrast-mode {
            --cro-disabled: #FFFFFF;
        }
    `;

    if (!document.documentElement.classList.contains('already-haves-addStyles')) {
        addStyles(styles);
    }
    document.documentElement.classList.add('already-haves-addStyles');

    const body = document.querySelector('body');

    const observerReplaceHrefLogo = new MutationObserver(() => {
        const header = document.querySelector('body > header');
        const footer = document.querySelector('body > div');

        if (header && !header.classList.contains('already-haves-href-header-mutation')) {
            modifyHeader(header);
        }

        if (footer && !footer.classList.contains('already-haves-href-footer-mutation')) {
            modifyFooter(footer);
        }

        if (callback.footerPersonalized && callback.headerPersonalized) {
            observerReplaceHrefLogo.disconnect();
        }
    });
    observerReplaceHrefLogo.observe(body, { childList: true, subtree: true });

    const contentPage = document.querySelector('[data-testid="full-screen"]');

    const observerRemovePrice = new MutationObserver(() => {
        const progressBar = document.querySelector('[data-testid="stepsbar-wrapper"]');
        const funilOffer = document.querySelector('[data-testid="offer-result-component"]');
        const ctaButton = document.querySelector('[data-testid="button-candidate-area"]');

        if (progressBar && !progressBar.classList.contains('already-haves-progress-bar-mutation')) {
            modifyProgressBar(progressBar);
        }

        if (funilOffer && !funilOffer.classList.contains('already-haves-price-mutation')) {
            modifyPrice(funilOffer);
        }

        if (ctaButton && !ctaButton.classList.contains('already-haves-cta-button-mutation')) {
            modifyCtaButton(ctaButton);
        }

        if (callback.progressBarPersonalized && callback.pricePersonalized && callback.ctaButtonPersonalized) {
            observerRemovePrice.disconnect();
        }
    });
    observerRemovePrice.observe(contentPage, { childList: true, subtree: true, attributes: true });

    const croObserveThemeElement = document.querySelector('[data-testid="switch-mode-slider"]');

    const observerTheme = new MutationObserver(() => {
        crofindTheme();
    });

    observerTheme.observe(croObserveThemeElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    crofindTheme();
}
startCroTest();