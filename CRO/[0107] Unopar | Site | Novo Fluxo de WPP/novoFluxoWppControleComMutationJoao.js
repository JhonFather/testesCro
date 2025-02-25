function croFunction() {
    const observerConfig = {
        childList: true,
        subtree: true,
    };

    const observerHeader = function (mutationsList, observer) {
        let found = false;

        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const parentElement = document.querySelector('.top-header-nav-list-component');

                if (parentElement) {
                    const a = parentElement.querySelectorAll('.top-header-nav-list-item-component > a');

                    if (a.length > 1) {
                        const targetElement = a[1];

                        targetElement.href = 'https://www.unopar.com.br/whatsapp-redirect/?number=5511994326167&message=[Unopar CH] Não altere ou apague esta mensagem. Vim do site da Unopar e que me inscrever.';

                        observer.disconnect();

                        found = true;

                        break;

                    } else {
                        console.log('Second link not found yet');
                    }
                }
            }
        }

        if (found) {
            observer.disconnect();
        }
    };

    const observerFooter = function (mutationsList, observer) {
        let found = false;

        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const floaterElement = document.querySelector('.floater-whatsapp-link');

                if (floaterElement) {
                    floaterElement.href = 'https://www.unopar.com.br/whatsapp-redirect/?number=5511994326167&message=[Unopar CF] Não altere ou apague esta mensagem. Vim do site da Unopar e que me inscrever.';

                    observer.disconnect();

                    found = true;

                    break;

                } else {
                    console.log('Link not found yet');
                }
            }
        }

        if (found) {
            observer.disconnect();
        }
    };


    const observer = new MutationObserver(() => { observerHeader, observerFooter });

    observer.observe(document.body, observerConfig);
}

croFunction();