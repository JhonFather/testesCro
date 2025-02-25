function modifyCards() {
    // Selecionando todos os cards da tela
    const cards = document.querySelectorAll('.row.my-0 .card');
    if (window.screen.width > 768) {
        fireGA("anhanguera:cursos:saiba-mais-teste", "page-load:desktop", "page-load")
    } else {
        fireGA("anhanguera:cursos:saiba-mais-teste", "page-load:mobile", "page-load")
    }

    // Iterando todos os cards
    cards.forEach((card, index) => {
        const checkbox = card.querySelector('.card-footer .checkbox');
        const readMoreBtn = card.querySelector('.card-body > a');
        const subscribeBtn = card.querySelector('.card-footer > a');

        // Condicional para remover estilos de cards que tenham pré-inscrição (esses cards não tem botão saiba mais ou inscreva-se)
        if (!checkbox && !readMoreBtn && card.innerHTML.includes('pré-inscrição')) {

            // Caso o card já tenha sido personalizado em uma renderização passada, o saiba mais e o checkbox são removidos
            if (card.querySelector('.card-body .checkbox') && card.querySelector('.read-more-btn')) {
                card.querySelector('.card-body .checkbox').remove();
                card.querySelector('.read-more-btn').remove();
            }

            // Remoção da classe para que em uma renderização posterior ele possa ser modificado (entrar no if da linha 44)
            card.classList.remove('modified-card');
        }

        if (checkbox && readMoreBtn && !card.innerHTML.includes('pré-inscrição')) {

            const clonedCheckbox = checkbox.cloneNode(true);
            const clonedReadMoreBtn = readMoreBtn.cloneNode(true);

            // Estilos para o botão inscreva-se (para ele ficar preenchido e não só com bordas)
            if (subscribeBtn.innerText.includes('INSCREVA-SE')) {
                subscribeBtn.classList.remove('outlined');
            }

            // Estilos e eventos para o checkbox clonado
            clonedCheckbox.classList.add('mt-1');
            clonedCheckbox.style.marginBottom = '-0.5rem';
            clonedCheckbox.querySelector('input').setAttribute('id', `new-checkbox-${index}`);
            clonedCheckbox.addEventListener('click', () => {
                checkbox.click();
                checkbox.querySelector('input').checked ? clonedCheckbox.querySelector('input').checked = false : clonedCheckbox.querySelector('input').checked = true;
            })

            // Adicionando os estilos para o botão saiba mais
            clonedReadMoreBtn.setAttribute('class', 'btn btn-primary-default outlined rounded sm');
            // clonedReadMoreBtn.setAttribute('target', '_blank');
            clonedReadMoreBtn.addEventListener('click', () => {
                if (window.screen.width > 768) {
                    fireGA("anhanguera:cursos:saiba-mais-teste", "click:botao:desktop", "saiba-mais-teste")
                } else {
                    fireGA("anhanguera:cursos:saiba-mais-teste", "click:botao:mobile", "saiba-mais-teste")
                }

            });
            subscribeBtn.style.width = '47%'

            // Caso o card não tenha sido modificado, ele é modificado
            if (!card.classList.contains('modified-card')) {
                card.querySelector('.card-footer').insertAdjacentElement('afterbegin', clonedReadMoreBtn);
                card.querySelector('.card-body').appendChild(clonedCheckbox);
                card.classList.add('modified-card');
            }

            // Ocultando checkbox e saiba mais originais (não podemos remover ele do card pois o vue perde a referencia se fizermos isso e quebra)
            checkbox.style.setProperty('display', 'none', 'important');
            readMoreBtn.style.setProperty('display', 'none', 'important');
        }
    });
}

// Mutation para quando novos cards forem renderizados (quando o usuário mudar a modalidade ou filtro)
const observer = new MutationObserver(() => {
    modifyCards();
})

// Observando a lista de filhos e subarvore da lista
const options = {
    childList: true,
    subtree: true,
};

// Startando o observador no container onde os cards são renderizados
observer.observe(document.querySelector('.row.my-0'), options);

// Start inicial da estilização
modifyCards();