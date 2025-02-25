let callback = {
    linkBannerPersonalized: false,
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyModificationLinkBanner(linkWpp) {
    if (!linkWpp) {
        return;
    }

    if (linkWpp) {
        linkWpp.setAttribute('href', 'https://api.whatsapp.com/send?phone=551151071636&text=[Protocolo%201513092159.1722952989]%20-%20N%C3%A3o%20altere%20ou%20apague%20esta%20mensagem.%20Quero%20me%20inscrever%20em%20um%20curso%20tecn%C3%B3logo%20na%20Unopar. ');
    }
}
function modifyLinkBanner(linkWpp) {
    linkWpp.classList.add('already-haves-new-wpp-link-mutation');

    callback.linkBannerPersonalized = true;

    const observer = new MutationObserver(applyModificationLinkBanner(linkWpp));

    observer.observe(linkWpp, { childList: true, subtree: true });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroPersonalization() {
    const divNext = document.querySelector("#__next");

    if (!divNext || document.documentElement.classList.contains('already-haves-new-wpp-link-personalization')) {
        return;
    }

    document.documentElement.classList.add('already-haves-wpp-personalization');

    const linkWpp = document.querySelector('main > div:nth-of-type(4) > div > div > a');

    applyModificationLinkBanner(linkWpp);

    const observer = new MutationObserver(() => {
        if (linkWpp && !linkWpp.classList.contains('already-haves-new-wpp-link-mutation')) {
            modifyLinkBanner(linkWpp);
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