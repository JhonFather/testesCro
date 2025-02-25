let callback = {
    headerPersonalized: false,
    floaterPersonalized: false,
}

function modifyHeader(header) {

    function applyHeaderModification() {

        const headerWpp = document.querySelectorAll('[data-testid="top-header-nav-list-item-component-container-link-0"], [data-testid="dropdown-slider-item-list-item-link-item-0"]');

        headerWpp?.forEach(item => {
            item.setAttribute('href', 'https://www.unopar.com.br/whatsapp-redirect/?number=5511994326167&message=[Unopar CH] Não altere ou apague esta mensagem. Vim do site da Unopar e quero me inscrever.');
        });
    }

    header.classList.add('already-haves-mutation');

    callback.headerPersonalized = true;

    applyHeaderModification();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(applyHeaderModification);
    });

    observer.observe(header, { childList: true, subtree: true });
}

function modifyFloater(floater) {
    function applyModification() {

        if (!floater) {
            return;
        }

        const floaterLink = floater.querySelector('a');

        if (floaterLink) {
            floaterLink.setAttribute('href', 'https://www.unopar.com.br/whatsapp-redirect/?number=5511994326167&message=[Unopar CH] Não altere ou apague esta mensagem. Vim do site da Unopar e quero me inscrever.');
        }
    }

    floater.classList.add('already-haves-mutation');

    callback.floaterPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(floater, { childList: true, subtree: true });
}

function startCroPersonalization() {
    const divNext = document.querySelector("#__next");

    if (!divNext || document.documentElement.classList.contains('already-haves-wpp-personalization')) {
        return;
    }
    document.documentElement.classList.add('already-haves-wpp-personalization');

    const observer = new MutationObserver(() => {
        const floaterWpp = document.querySelector('.floater-whatsapp');

        const header = document.querySelector('header');

        if (floaterWpp && !floaterWpp.classList.contains('floaterWpp')) {
            modifyFloater(floaterWpp);
        }

        if (header && !header.hasAttribute('already-haves-mutation')) {
            modifyHeader(header);
        }

        if (callback.floaterPersonalized && callback.headerPersonalized) {
            observer.disconnect()
        }
    });

    observer.observe(divNext, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
    startCroPersonalization();
})

startCroPersonalization();