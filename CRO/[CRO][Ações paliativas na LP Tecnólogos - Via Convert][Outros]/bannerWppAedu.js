let callback = {
    linkBannerPersonalized: false,
}

function modifyLinkBannerAedu(linkWpp) {
    function applyModification() {

        if (!linkWpp) {
            return;
        }

        if (linkWpp) {
            linkWpp.setAttribute('href', 'https://api.whatsapp.com/send/?phone=5511989511509&text=N%C3%A3o%20altere%20ou%20apague%20esta%20mensagem.%20Quero%20me%20inscrever%20em%20um%20curso%20tecn%C3%B3logo%20na%20Anhanguera.');
        }
    }

    linkWpp.classList.add('already-haves-new-wpp-link-mutation');

    callback.linkBannerPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(linkWpp, { childList: true, subtree: true });
}

function startCroPersonalization() {
    const divNext = document.querySelector('#__next');

    if (!divNext || document.documentElement.classList.contains('already-haves-tecnologosBannerWpp-personalization')) {
        return;
    }
    document.documentElement.classList.add('already-haves-tecnologosBannerWpp-personalization');

    const observer = new MutationObserver(() => {
        const linkWpp = document.querySelector('main > div:nth-of-type(4) > div > div > a');

        if (linkWpp && !linkWpp.classList.contains('already-haves-new-wpp-link-mutation')) {
            modifyLinkBannerAedu(linkWpp);
        }

        if (callback.linkBannerPersonalized) {
            observer.disconnect()
        }
    });
    observer.observe(divNext, { childList: true, subtree: true });
}
document.addEventListener('DOMContentLoaded', () => {
    startCroPersonalization();
})
startCroPersonalization();