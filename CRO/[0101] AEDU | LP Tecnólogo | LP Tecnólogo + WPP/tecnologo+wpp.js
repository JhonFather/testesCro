let callback = {
    topFivePersonalized: false,
    fiveSemestersPersonalized: false,
    lookingForPersonalized: false,
}

const registerWithIcon = /*html*/`
        <div style="display: flex; align-items: center; padding: 0 10px;">
            <svg style="margin-right: 2px;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 24" fill="none">
                <path d="M18.1683 6.33139C17.4312 5.58946 16.5532 5.00122 15.5855 4.60095C14.6179 4.20068 13.5799 3.99641 12.5322 4.00005C8.14221 4.00005 4.56432 7.56515 4.56432 11.9394C4.56432 13.3414 4.93417 14.7034 5.62563 15.9051L4.5 20.023L8.72111 18.9174C9.88693 19.5503 11.1975 19.8868 12.5322 19.8868C16.9221 19.8868 20.5 16.3217 20.5 11.9474C20.5 9.82439 19.6719 7.82953 18.1683 6.33139ZM12.5322 18.5409C11.3422 18.5409 10.1764 18.2204 9.15528 17.6195L8.91407 17.4753L6.40553 18.1323L7.07286 15.6968L6.91206 15.4484C6.25095 14.3965 5.89991 13.1806 5.89899 11.9394C5.89899 8.30221 8.87387 5.33796 12.5241 5.33796C14.293 5.33796 15.9573 6.02695 17.2035 7.27674C17.8206 7.88879 18.3096 8.61679 18.6422 9.41854C18.9748 10.2203 19.1444 11.0799 19.1412 11.9474C19.1573 15.5846 16.1824 18.5409 12.5322 18.5409ZM16.1663 13.6058C15.9653 13.5097 14.9844 13.029 14.8075 12.9569C14.6226 12.8928 14.494 12.8607 14.3573 13.053C14.2206 13.2533 13.8427 13.7019 13.7302 13.8301C13.6176 13.9663 13.497 13.9823 13.296 13.8782C13.095 13.7821 12.4518 13.5657 11.696 12.8928C11.101 12.364 10.707 11.7151 10.5864 11.5148C10.4739 11.3145 10.5704 11.2104 10.6749 11.1062C10.7633 11.0181 10.8759 10.8739 10.9724 10.7617C11.0688 10.6496 11.109 10.5614 11.1734 10.4333C11.2377 10.2971 11.2055 10.1849 11.1573 10.0888C11.109 9.99263 10.707 9.01523 10.5462 8.61465C10.3854 8.2301 10.2166 8.27817 10.096 8.27016H9.71005C9.57337 8.27016 9.36432 8.31823 9.1794 8.51852C9.00251 8.7188 8.48794 9.19949 8.48794 10.1769C8.48794 11.1543 9.20352 12.0996 9.3 12.2278C9.39648 12.364 10.707 14.3669 12.701 15.2241C13.1754 15.4324 13.5452 15.5526 13.8347 15.6407C14.309 15.7929 14.7432 15.7689 15.0889 15.7208C15.4749 15.6647 16.2709 15.2401 16.4317 14.7755C16.6005 14.3108 16.6005 13.9182 16.5442 13.8301C16.4879 13.742 16.3673 13.7019 16.1663 13.6058Z" fill="#FAFAFA" />
            </svg >
            <span style="margin-right: 5px;">Inscreva-se</span>
        </div>
    `

function modifyTopFive(containerTopFive) {
    function applyModification() {
        
        if (!containerTopFive) {
            return;
        }
        
        const topFive = document.querySelectorAll('.button-subscribe-card-top-five');

        if (topFive) {
            topFive.forEach(item => {
                item.innerHTML = registerWithIcon;
                item.style.backgroundColor = "#31B51A";
                item.setAttribute('href', 'https://api.whatsapp.com/send?phone=5511989511509&text=%5BProtocolo%20864432730.1704825511%5D%20-%20N%C3%A3o%20apague%20essa%20mensagem!%20Quero%20me%20inscrever%20em%20um%20curso%20Tecn%C3%B3logo%20na%20Anhanguera.');
            });
        }
    }

    callback.topFivePersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(containerTopFive, { childList: true, subtree: true });
}

function modifyFiveSemesters(containerFiveSemesters) {
    function applyModification() {

        if (!containerFiveSemesters) {
            return;
        }

        const fiveSemesters = document.querySelectorAll('.container-card-five-semester > div > a');

        if (fiveSemesters) {
            fiveSemesters.forEach(item => {
                item.innerHTML = registerWithIcon;
                item.style.backgroundColor = "#31B51A";
                item.style.setProperty("font-size", "14px", "important");
                item.style.setProperty("margin-bottom", "16px", "important");
                item.setAttribute('href', 'https://api.whatsapp.com/send?phone=5511989511509&text=%5BProtocolo%20864432730.1704825511%5D%20-%20N%C3%A3o%20apague%20essa%20mensagem!%20Quero%20me%20inscrever%20em%20um%20curso%20Tecn%C3%B3logo%20na%20Anhanguera.');
            });
        }
    }

    callback.fiveSemestersPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(containerFiveSemesters, { childList: true, subtree: true });
}

function modifyLookingFor(containerLookingFor) {
    function applyModification() {

        if (!containerLookingFor) {
            return;
        }

        const lookingFor = document.querySelectorAll('.cta-blue-banner > div > section > div:nth-of-type(2) > div > div > a');

        if (lookingFor) {

            lookingFor.forEach(item => {
                item.parentElement.style.height = "inherit"
                item.style.backgroundColor = "#31B51A";
                item.innerHTML = registerWithIcon;
                item.style.setProperty("font-size", "14px", "important");
                item.setAttribute('href', 'https://api.whatsapp.com/send?phone=5511989511509&text=%5BProtocolo%20864432730.1704825511%5D%20-%20N%C3%A3o%20apague%20essa%20mensagem!%20Quero%20me%20inscrever%20em%20um%20curso%20Tecn%C3%B3logo%20na%20Anhanguera.');
            });
        }
    }

    callback.lookingForPersonalized = true;

    applyModification();

    const observer = new MutationObserver(applyModification);

    observer.observe(containerLookingFor, { childList: true, subtree: true });
}

function startCroPersonalization() {
    console.warn('tecnologos+wpp anhanguera rodando')
    const divNext = document.querySelector("#__next");

    if (!divNext || document.documentElement.classList.contains('already-haves-tecnologos+wpp-personalization')) {
        return;
    }
    document.documentElement.classList.add('already-haves-tecnologos+wpp-personalization');

    const containerTopFive = document.querySelector('.cta-top-five-banner');
    const containerFiveSemesters = document.querySelector('.cta-five-semester-banner');
    const containerLookingFor = document.querySelector('.cta-blue-banner');

    modifyTopFive(containerTopFive);
    modifyFiveSemesters(containerFiveSemesters);
    modifyLookingFor(containerLookingFor);

    const observer = new MutationObserver(() => {
        console.log('ta entrando dentro do mutation')

        if (containerTopFive && !containerTopFive.classList.contains('already-haves-containerTopFive-tecnologos+wpp-personalization')) {
            containerTopFive.classList.add('already-haves-containerTopFive-tecnologos+wpp-personalization');
            modifyTopFive(containerTopFive);
        }
        if (containerFiveSemesters && !containerFiveSemesters.classList.contains('already-haves-containerFiveSemesters-tecnologos+wpp-personalization')) {
            containerFiveSemesters.classList.add('already-haves-containerFiveSemesters-tecnologos+wpp-personalization');
            modifyFiveSemesters(containerFiveSemesters);
        }
        if (containerLookingFor && !containerLookingFor.classList.contains('already-haves-containerLookingFor-tecnologos+wpp-personalization')) {
            containerLookingFor.classList.add('already-haves-containerLookingFor-tecnologos+wpp-personalization');
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