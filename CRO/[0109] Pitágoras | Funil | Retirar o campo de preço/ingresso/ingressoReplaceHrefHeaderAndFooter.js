let callback = {
    headerPersonalized: false,
    footerPersonalized: false,
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function modifyHeader(header) {

    function applyHeaderModification() {

        const headerLogo = document.querySelectorAll('[data-testid="container-link"], [data-testid="container-link-mobile"]');

        headerLogo?.forEach(item => {
            item.setAttribute('href', '/ingresso/inscricao/');
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

        const footerLink = footer.querySelector('a');

        if (footerLink) {
            footerLink.setAttribute('href', '/ingresso/inscricao/');
        }
    }

    footer.classList.add('already-haves-href-footer-mutation');

    callback.footerPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(footer, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroTest() {
    console.warn('troca de href do logo rodando');
    document.documentElement.classList.add('already-haves-replace-href-logo');

    const body = document.querySelector('body');

    const observer = new MutationObserver(() => {
        const header = document.querySelector('body > header');
        const footer = document.querySelector('body > div');

        if (header && !header.classList.contains('already-haves-href-header-mutation')) {
            modifyHeader(header);
        }

        if (footer && !footer.classList.contains('already-haves-href-footer-mutation')) {
            modifyFooter(footer);
        }

        if (callback.footerPersonalized && callback.headerPersonalized) {
            observer.disconnect();
        }
    });

    observer.observe(body, { childList: true, subtree: true });
}
startCroTest();