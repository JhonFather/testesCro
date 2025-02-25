function showQuiz() {
    document.querySelector('.cro-hide-banner-medicina').style.display = 'none';
    document.querySelector('.cro-hide-banner-quiz').style.display = 'block';
}
function croFunction() {
    showQuiz();
    const observer = new MutationObserver(() => { showQuiz() });
    observer.observe(document.getElementById('__next'), { childList: true, subtree: true });
    showQuiz();
}
showQuiz();
croFunction();