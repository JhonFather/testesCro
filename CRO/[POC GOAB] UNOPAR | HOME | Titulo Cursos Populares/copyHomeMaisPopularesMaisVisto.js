function croFunction() {

    function alterarTextos(observer) {
        const morePopularElement = document.querySelector('main');

        if (!morePopularElement) {
            return;
        }

        const titulo = morePopularElement.querySelector('section:nth-child(6) > div > div > h2');

        let alterado = false;

        if (titulo) {
            titulo.innerText = "OS MAIS VISTOS";
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