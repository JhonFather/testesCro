function modifyCards() {
    function modifyUniqueCards() {
        document.querySelector('.cro-height-most-searched-section').style.padding = '2.5rem 0 6.4rem';
        document.querySelectorAll('.cro-height-card').forEach(card => {
            card.style.height = '355px';
            card.querySelector('.cro-hide-modalities').style.display = 'none';
            card.querySelector('.cro-show-modalities').style.display = 'flex';
            card.querySelector('.cro-show-price').style.display = 'flex';
            card.querySelector('.cro-hide-button-register').style.display = 'none';
            card.querySelector('.cro-show-button-register').style.display = 'block';
            card.querySelector('.cro-hide-button-readMore').style.display = 'none';
            card.querySelector('.cro-show-button-readMore').style.display = 'block';
        });

    }
    const observer = new MutationObserver(() => {
        modifyUniqueCards();
    });

    const options = {
        childList: true,
        subtree: true
    };

    const interval = setInterval(() => {
        if (document.querySelector('.cro-height-card')) {
            observer.observe(document.querySelector('.cro-height-card'), options)
            clearInterval(interval);
        }
    }, 500)

    modifyUniqueCards();
}
modifyCards();