function startCroTest() {
    const body = document.querySelector('body > div:nth-of-type(1)');

    if (!body || document.documentElement.classList.contains('already-haves-funil-pitagoras-test')) {
        return;
    }
    document.documentElement.classList.add('already-haves-funil-pitagoras-test');

    const observer = new MutationObserver(() => {
        const funilPitagorasOffer = document.querySelector('[data-testid="offer-result-component"]');
        const funilPitagorasSteps = document.querySelector('body > div:nth-of-type(1) > div > div:nth-of-type(2)');

        if (funilPitagorasOffer && funilPitagorasSteps) {
            const steps = funilPitagorasSteps.querySelectorAll('[data-testid="stepsbar-wrapper"] > .step-bar > .step > .step-number.step.active');
            const offerPrice = funilPitagorasOffer.querySelector('[data-testid="course-price-info"]');
            const formStep = document.querySelector('form > button');
            const textButton = document.querySelector('[data-testid="submit-button"] > span');
            const title = document.querySelector('body > div:nth-of-type(1) > div > div:nth-of-type(2) > h2');
            const paragraph = document.querySelector('body > div:nth-of-type(1) > div > div:nth-of-type(2) > p');

            funilPitagorasSteps.style.maxWidth = "895px"
            funilPitagorasSteps.style.margin = "0 auto"

            if (steps) {
                steps.forEach((item, index) => {
                    if (index !== steps.length - 1) {
                        item.textContent = "\u2713"
                        item.style.fontSize = "23px"
                    } else {
                        item.style.fontSize = "1rem"
                        item.textContent = steps.length
                    }
                });
            }

            if (formStep && offerPrice) {
                formStep.insertAdjacentElement('beforebegin', funilPitagorasOffer);

                if (window.screen.width < 768) {
                    const titleOfferMobile = funilPitagorasOffer.querySelector('button > div > p:nth-of-type(1)');
                    const priceOfferMobile = funilPitagorasOffer.querySelector('button > div > p:nth-of-type(2)');

                    titleOfferMobile.style.paddingTop = "1px";
                    titleOfferMobile.style.paddingLeft = "4px";
                    titleOfferMobile.style.fontSize = "18px";

                    priceOfferMobile.style.display = "none";

                    offerPrice.parentElement.querySelector('div:nth-of-type(3)').style.display = "none";
                } else {
                    offerPrice.parentElement.querySelector('div:nth-of-type(4)').style.display = "none";
                }

                offerPrice.style.display = "none";
            }

            if (textButton) {
                textButton.textContent = "Finalizar Matrícula"
                textButton.style.paddingTop = "18px";
            }

            if (title) {
                if (steps.length === 2) {
                    const { name } = JSON.parse(localStorage.getItem('form-data'))

                    title.textContent = `FALTA POUCO ${name.toUpperCase()}!`
                }

                title.style.setProperty("margin-bottom", "3rem", "important");
                title.style.textAlign = "center"
            }

            if (paragraph) {
                paragraph.textContent = "Sua nota do Vestibular te garante entrar na sua graduação sem prova."
                paragraph.style.textAlign = "center"
                paragraph.style.fontWeight = "400"
                paragraph.style.maxWidth = "420px"
                paragraph.style.margin = "0 auto"
            }

            if (window.screen.width < 768) {
                funilPitagorasSteps.style.marginBottom = "2rem";
            }
        }

        // observer.disconnect()
    });

    observer.observe(body, { childList: true, subtree: true });
}

// document.addEventListener('DOMContentLoaded', () => {
//     startCroTest();
// })

startCroTest();