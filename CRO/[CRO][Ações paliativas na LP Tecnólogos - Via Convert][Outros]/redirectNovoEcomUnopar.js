let callback = {
    topFivePersonalized: false,
    fiveSemestersPersonalized: false,
    lookingForPersonalized: false,
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function substituirWWW(url) {
    return url.replace('www', 'cursos');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateModalityInUrl(url) {
    try {
        const urlObj = new URL(url);
        const modality = urlObj.searchParams.get("modality");

        if (modality) {
            if (modality.toLowerCase() === "presencial") {
                urlObj.searchParams.set("modality", "PRESENCIAL");
            } else {
                urlObj.searchParams.set("modality", "SEMIPRESENCIAL");
            }

            // Retorna a URL atualizada
            return urlObj.toString();
        }

        // Retorna a URL original se "modality" não estiver presente
        return url;
    } catch (error) {
        console.error("URL inválida:", error);
        return url;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyModificationTopFive(containerTopFive) {
    if (!containerTopFive) {
        return;
    }

    const topFive = document.querySelectorAll('.button-subscribe-card-top-five');

    if (topFive) {
        topFive?.forEach(item => {
            console.log('vai aplicar as alterações')
            const modalidade = item.parentElement.querySelector('.cta-container-card > .cta-container-modalities-top-five-card > .container-skeleton-modality-top-five-card > .active').textContent.toUpperCase()
            const urlOriginal = item.getAttribute('href');
            const urlAlterada = substituirWWW(urlOriginal);
            item.setAttribute('href', urlAlterada.includes('&modality=EAD&category=curso') ? urlAlterada : `${urlAlterada}&modality=${modalidade === 'SEMI' ? 'SEMIPRESENCIAL' : modalidade}&category=curso`);
            console.log('url final')
        });
    }
}
function modifyTopFive(containerTopFive) {
    console.log('entrou na modify')
    // containerTopFive.classList.add('already-haves-containerTopFive-tecnologosForNovoEcom-personalization');

    callback.topFivePersonalized = false;

    const observer = new MutationObserver(applyModificationTopFive(containerTopFive));

    observer.observe(containerTopFive, { childList: true, subtree: true, attributes: true, attributeFilter: '[class]' });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyModificationFiveSemesters(containerFiveSemesters) {
    if (!containerFiveSemesters) {
        return;
    }

    const fiveSemesters = document.querySelectorAll('.container-card-five-semester > div > a');

    if (fiveSemesters) {
        fiveSemesters?.forEach(item => {
            const urlOriginal = item.getAttribute('href');
            const urlAlterada = substituirWWW(urlOriginal);
            item.setAttribute('href', urlAlterada.includes('&modality=EAD&category=curso') ? urlAlterada : `${urlAlterada}&modality=EAD&category=curso`);
        });
    }
}
function modifyFiveSemesters(containerFiveSemesters) {
    containerFiveSemesters.classList.add('already-haves-containerFiveSemesters-tecnologosForNovoEcom-personalization');

    callback.fiveSemestersPersonalized = true;

    const observer = new MutationObserver(applyModificationFiveSemesters(containerFiveSemesters));

    observer.observe(containerFiveSemesters, { childList: true, subtree: true });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function applyModificationLookingFor(containerLookingFor) {
    if (!containerLookingFor) {
        return;
    }

    const lookingFor = document.querySelectorAll('.cta-blue-banner > div > section > div:nth-of-type(2) > div > div > a');

    if (lookingFor) {
        lookingFor?.forEach(item => {
            const urlOriginal = item.getAttribute('href');
            const urlAlterada = substituirWWW(urlOriginal);
            item.setAttribute('href', `${updateModalityInUrl(urlAlterada)}&category=curso`);
        });
    }
}
function modifyLookingFor(containerLookingFor) {
    containerLookingFor.classList.add('already-haves-containerLookingFor-tecnologosForNovoEcom-personalization');

    callback.lookingForPersonalized = true;

    const observer = new MutationObserver(applyModificationLookingFor(containerLookingFor));

    observer.observe(containerLookingFor, { childList: true, subtree: true });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateUrlByClick(allModalityButtons) {
    

        allModalityButtons.forEach(item => {
            item.addEventListener('click', () => {
                console.log('botoes modalidade: ', item)
                applyModificationTopFive()
            })
        })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startCroPersonalization() {
    console.warn('redirect novo ecomm unopar rodando')
    const divNext = document.querySelector("#__next");

    if (!divNext || document.documentElement.classList.contains('already-haves-tecnologosForNovoEcom-personalization')) {
        return;
    }
    document.documentElement.classList.add('already-haves-tecnologosForNovoEcom-personalization');

    const containerTopFive = document.querySelector('.cta-top-five-banner');
    const containerFiveSemesters = document.querySelector('.cta-five-semester-banner');
    const containerLookingFor = document.querySelector('.cta-blue-banner');
    const allModalityButtons = document.querySelectorAll('.cta-button-modality-top-five-card');

    applyModificationTopFive(containerTopFive);
    applyModificationFiveSemesters(containerFiveSemesters);
    applyModificationLookingFor(containerLookingFor);
    updateUrlByClick(allModalityButtons);

    const observerModalityClick = new MutationObserver(() => {
        console.log('chamou a by click')
        updateUrlByClick(allModalityButtons);
    });
    observerModalityClick.observe(allModalityButtons, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    const observer = new MutationObserver(() => {
        updateUrlByClick();
        // if (containerTopFive && !containerTopFive.classList.contains('already-haves-containerTopFive-tecnologosForNovoEcom-personalization')) {
            modifyTopFive(containerTopFive);
        // }
        if (containerFiveSemesters && !containerFiveSemesters.classList.contains('already-haves-containerFiveSemesters-tecnologosForNovoEcom-personalization')) {
            modifyFiveSemesters(containerFiveSemesters);
        }
        if (containerLookingFor && !containerLookingFor.classList.contains('already-haves-containerLookingFor-tecnologosForNovoEcom-personalization')) {
            modifyLookingFor(containerLookingFor);
        }

        if (callback.topFivePersonalized && callback.fiveSemestersPersonalized && callback.lookingForPersonalized) {
            observer.disconnect()
        }
    });
    observer.observe(divNext, { childList: true, subtree: true });

    
}
document.addEventListener('DOMContentLoaded', () => {
    startCroPersonalization();
})
startCroPersonalization();