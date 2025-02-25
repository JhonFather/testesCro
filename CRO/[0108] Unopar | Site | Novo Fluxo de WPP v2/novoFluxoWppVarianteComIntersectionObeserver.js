function croFunction() {
    const updateHref = (element, newHref) => {
        if (element) {
            element.href = newHref;
        } else {
            console.log(`Elemento com classe ${element.className} não encontrado`);
        }
    };

    const observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const headerObserverVariante = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parentElement = document.querySelector('.top-header-nav-list-component');

                if (parentElement) {
                    const links = parentElement.querySelectorAll('.top-header-nav-list-item-component > a');

                    if (links.length > 1) {
                        const targetElement = links[1];

                        updateHref(targetElement, 'https://www.unopar.com.br/whatsapp-redirect/?number=551151071636&message=[Unopar VH] Não altere ou apague esta mensagem. Vim do site da Unopar e quero me inscrever.');

                        observer.unobserve(entry.target);
                    }
                }
            }
        });
    };

    const footerObserverVariante = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const floaterElement = document.querySelector('.floater-whatsapp-link');

                updateHref(floaterElement, 'https://www.unopar.com.br/whatsapp-redirect/?number=551151071636&message=[Unopar VF] Não altere ou apague esta mensagem. Vim do site da Unopar e quero me inscrever.');

                observer.unobserve(entry.target);
            }
        });
    };

    const headerObserver = new IntersectionObserver(headerObserverVariante, observerConfig);

    const footerObserver = new IntersectionObserver(footerObserverVariante, observerConfig);


    headerObserver.observe(document.querySelector('.top-header-nav-list-component'));

    footerObserver.observe(document.querySelector('.floater-whatsapp-link'));
}

croFunction();