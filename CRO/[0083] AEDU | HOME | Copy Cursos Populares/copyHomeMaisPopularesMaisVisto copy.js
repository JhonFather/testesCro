function croFunction() {

    function alterarTextos(observer) {
        const morePopularElement = document.querySelector('.wrapper-home-mais-populares');

        if (!morePopularElement) {
            return;
        }

        const titulo = morePopularElement.querySelector('div > h2');

        let alterado = false;

        if (titulo) {
            titulo.innerText = "Os mais vistos";
            alterado = true;
        } else {
            console.log('Título não encontrado ou já alterado');
        }

        if (alterado && observer) {
            observer.disconnect();
        }
    }

    const observer = new MutationObserver((mutations) => {

        mutations.forEach((mutation) => {

            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                alterarTextos(observer);
            }
        });
    });

    const targetNode = document.querySelector('main');

    const config = { childList: true, subtree: true };

    if (targetNode) {
        console.log('rodou');
        observer.observe(targetNode, config);

        alterarTextos(observer);

    } else {
        console.error('Elemento <main> não encontrado');
    }
}

croFunction();