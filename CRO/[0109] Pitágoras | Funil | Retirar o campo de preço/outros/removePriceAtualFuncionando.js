let callback = {
    pricePersonalized: false,
}

function modifyPrice(funilOffer) {
    function applyPriceChanges() {

        if (!funilOffer) {
            return;
        }

        const offerPrice = funilOffer.querySelector('[data-testid="course-price-info"]');

        if (offerPrice) {
            offerPrice.parentElement.querySelector('div:nth-of-type(4)').style.display = "none";
            offerPrice.style.display = "none";
        }
    }

    funilOffer.classList.add('already-haves-price-mutation');

    callback.pricePersonalized = true;

    applyPriceChanges();

    const observer = new MutationObserver(applyPriceChanges);

    observer.observe(funilOffer, { childList: true, subtree: true });
}


function startCroTest() {
    console.warn('teste 0105 rodando')
    const contentPage = document.querySelector('[data-testid="full-screen"]');

    document.documentElement.classList.add('already-haves-test-0109');

    const observer = new MutationObserver(() => {
        const funilOffer = document.querySelector('[data-testid="offer-result-component"]');

        if (funilOffer && !funilOffer.classList.contains('already-haves-price-mutation')) {
            modifyPrice(funilOffer);
        }

        if (callback.pricePersonalized) {
            observer.disconnect();
        }
    });

    observer.observe(contentPage, { childList: true, subtree: true });
}

startCroTest();