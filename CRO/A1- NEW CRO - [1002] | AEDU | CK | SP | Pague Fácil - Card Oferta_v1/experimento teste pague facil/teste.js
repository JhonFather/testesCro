let callback = {
    toggleAutoClicked: false,
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function openModal(buttonShowModal) {
    function applyModification() {
        const buttonVisible = document.querySelector('[data-testid="form-contact-button"]')

        if (!buttonVisible) {
            return
        }

        if (buttonShowModal) {
            buttonShowModal.click()

            const interval = setInterval(() => {
                if (document.querySelector('[data-testid="switch-slider"]')) {
                    document.querySelector('[data-testid="switch-slider"]').click()
                    clearInterval(interval);
                }
            }, 1000)
        }
    }

    buttonShowModal.classList.add('already-haves-apply-modal-changes-mutation');

    callback.toggleAutoClicked = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(buttonShowModal, { childList: true, subtree: true });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroTestPagueFacil() {
    console.warn('teste pague facil rodando');
    document.documentElement.classList.add('already-haves-auto-open-modal-pague-facil');

    const body = document.querySelector('body');

    const observer = new MutationObserver(() => {
        const buttonShowModal= document.querySelector('[data-testid="payment-info-button"]');

        if (buttonShowModal && !buttonShowModal.classList.contains('already-haves-apply-modal-changes-mutation')) {
            openModal(buttonShowModal);
        }

        if (callback.toggleAutoClicked) {
            observer.disconnect();
        }
    });

    observer.observe(body, { childList: true, subtree: true });
}
startCroTestPagueFacil();