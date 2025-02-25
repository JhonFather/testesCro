function croFunction() {

    function alterarTextos(observer) {
        const mainElement = document.querySelector('main');

        if (!mainElement) {
            return;
        }

        const titulo = mainElement.querySelector('.content > form > .pt-2');

        let alterado = false;

        if (titulo) {
            titulo.innerText = "Selecione sua forma de ingresso.\nDICA: Sua nota do ENEM é válida por 10 anos! Aproveite!";
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