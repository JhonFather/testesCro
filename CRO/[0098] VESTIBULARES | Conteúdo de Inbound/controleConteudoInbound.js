function showLibrary() {
    document.querySelector('.cro-hide-banner-medicina').style.display = 'none';
    document.querySelector('.cro-hide-banner-biblioteca').style.display = 'block';
}
function croFunction() {
    showLibrary();
    const observer = new MutationObserver(() => { showLibrary() });
    observer.observe(document.getElementById('__next'), { childList: true, subtree: true });
    showLibrary();
}
showLibrary();
croFunction();