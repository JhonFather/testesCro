function removeElementById() {
    const element = document.getElementById('beneficios-tecnologo-mobile');

    if (element) {
        element.remove();

        observer.disconnect();
    }
}

const observer = new MutationObserver(() => {
    removeElementById();
});

observer.observe(document.body, { childList: true, subtree: true });

removeElementById();