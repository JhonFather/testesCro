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

    const headerObserverControle = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parentElement = document.querySelector('.top-header-nav-list-component');

                if (parentElement) {
                    const links = parentElement.querySelectorAll('.top-header-nav-list-item-component > a');

                    if (links.length > 1) {
                        const targetElement = links[1];

                        updateHref(targetElement, 'https://www.unopar.com.br/whatsapp-redirect/?number=5511994326167&message=[Unopar CH] Não altere ou apague esta mensagem. Vim do site da Unopar e quero me inscrever.');

                        observer.unobserve(entry.target);
                    }
                }
            }
        });
    };

    const footerObserverControle = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const floaterElement = document.querySelector('.floater-whatsapp-link');

                updateHref(floaterElement, 'https://www.unopar.com.br/whatsapp-redirect/?number=5511994326167&message=[Unopar CF] Não altere ou apague esta mensagem. Vim do site da Unopar e quero me inscrever.');

                observer.unobserve(entry.target);
            }
        });
    };

    const headerObserver = new IntersectionObserver(headerObserverControle, observerConfig);

    const footerObserver = new IntersectionObserver(footerObserverControle, observerConfig);


    headerObserver.observe(document.querySelector('.top-header-nav-list-component'));

    footerObserver.observe(document.querySelector('.floater-whatsapp-link'));
}

croFunction();