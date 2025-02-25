function croFunction() {
    if (window.screen.width > 768) {
        fireGA("anhanguera:cursos:primeira-dobra-pdp-teste", "page-load:desktop", "page-load")
    } else {
        fireGA("anhanguera:cursos:primeira-dobra-pdp-teste", "page-load:mobile", "page-load")
    }


}

const observer = new MutationObserver(() => {
    croFunction();
})

const options = {
    childList: true,
    subtree: true,
};

observer.observe(document.querySelector('.row.my-0'), options);

croFunction();