function modifyPrice(funilOffer) {
    console.log('ta dentro da modifyPrice() e vai fazer as alterações')
    const offerPrice = funilOffer.querySelector('[data-testid="course-price-info"]');

    offerPrice.parentElement.querySelector('div:nth-of-type(4)').style.display = "none";
    offerPrice.style.display = "none";

    document.documentElement.classList.add('already-haves-funil-remove-price-test');
}

const funilOffer = document.querySelector('[data-testid="offer-result-component"]');

console.log('teste de remover preço iniciou')
if (funilOffer) {
    console.log('vai aplicar a primeira mudança')
    modifyPrice(funilOffer)

    console.log('vai entrar no mutation')
    let count = 0
    const observer = new MutationObserver(() => {
        console.log(count === 0 ? 'rodou mutation' : 'aplicou novamente as mudanças')

        console.log('ta dentro do mutation e vai chamar a modifyPrice()')
        modifyPrice(funilOffer);
        count++
    })

    const config = {
        childList: true,
        subtree: true,
    };

    observer.observe(funilOffer, config);
} else {
    console.error("Elemento funilOffer não encontrado");
}