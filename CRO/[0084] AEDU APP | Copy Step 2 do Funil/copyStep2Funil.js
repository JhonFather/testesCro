function croFunction() {

    function alterarTextos(observer) {
        const mainElement = document.querySelector('main');

        if (!mainElement) {
            return;
        }

        const titulo = mainElement.querySelector('h1');
        const subtitulo = mainElement.querySelector('b');

        let alterado = false;

        if (titulo && titulo.innerText.toLowerCase() === "antes de começarmos") {
            titulo.innerText = "PARABÉNS PELA ESCOLHA!";
            alterado = true;
        } else {
            console.log('Título não encontrado ou já alterado');
        }

        if (subtitulo && subtitulo.innerText.toLowerCase() === "queremos saber um pouquinho sobre você!") {
            subtitulo.innerText = "Queremos conhecer você";
            alterado = true;
        } else {
            console.log('Subtítulo não encontrado ou já alterado');
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