let callback = {
    videoPersonalized: false,
}

function addStyles(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';
    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    } else {
        css.appendChild(document.createTextNode(styles));
        document.head.insertAdjacentElement('afterbegin', css);
    }
}

function croFunction() {

    function applyModification() {
        const url_atual = window.location.href;

        let objCourse = {
            urlVideo: '',
            textTitle: '',
            thumbVideo: ''
        }

        if (url_atual.includes("direito")) {
            objCourse = {
                urlVideo: 'https://www.youtube.com/embed/6g5ghZItLt0?autoplay=1',
                textTitle: 'Descubra o mundo do Direito',
                thumbVideo: 'https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/CRO/(AJUSTES)%20%5B0067%5D%20AEDU%20%7C%20Teste%20A/thumbDireito.jpeg',
                course: 'direito',
                // thumbVideo: 'https://img.youtube.com/vi/6g5ghZItLt0/sddefault.jpg'
            }
        } else {
            objCourse = {
                urlVideo: 'https://www.youtube.com/embed/vyt2WJ77aq8?autoplay=1',
                textTitle: 'Descubra o mundo da Enfermagem',
                thumbVideo: 'https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/CRO/(AJUSTES)%20%5B0067%5D%20AEDU%20%7C%20Teste%20A/thumbEnfermagem.png',
                course: 'enfermagem',
                // thumbVideo: 'https://img.youtube.com/vi/vyt2WJ77aq8/sddefault.jpg'
            }
        }

        const divDestinoTexto = document.querySelector("main > section:nth-of-type(2) > div > div > div");
        const divDestinoVideo = document.querySelector("main > section:nth-of-type(2) > div > div > div:nth-child(2) > div");
        const htmlDescriptionCourse = document.querySelector(".description-main");
        const htmlButtonReadMoreCourse = document.querySelector(".button-open-modal");

        if (divDestinoTexto) {
            const iframeThumbnail = /*html*/ `
            <div class="container-video-wrapper">
                <div class="header-video-wrapper">
                    <div>
                        <h3 class="title-video-wrapper">Assista ao nosso vídeo agora!</h3>
                        <span class="span-video-wrapper">${objCourse.textTitle}</span>
                        
                    </div>
                </div>
                <div class="container-svg-video-wrapper">
                    <svg class="svg-fundo-video" xmlns="http://www.w3.org/2000/svg" width="115" height="118" fill="none">
                        <path d="M70.93 60.32a2.5 2.5 0 0 1 3.06 3.06L63.77 101.4a2.5 2.5 0 0 1-4.18 1.12L31.67 74.68a2.49 2.49 0 0 1 1.12-4.17l38.14-10.19ZM66.16 13.22c1.8.67 2.2 3.03.72 4.25l-13.3 10.99a2.5 2.5 0 0 1-4.06-1.5l-2.89-17a2.5 2.5 0 0 1 3.34-2.74l16.19 6Z" fill="var(--cro-background-0067-svg-triangulo-azul)"/>
                        <path d="M17.9 94.34a2.5 2.5 0 0 1 3.75 2.15v11.33a2.5 2.5 0 0 1-3.75 2.16l-9.83-5.67a2.49 2.49 0 0 1 0-4.31l9.83-5.66ZM103.9 35.86a2.5 2.5 0 0 1-2.17 3.73H79.42a2.5 2.5 0 0 1-2.17-3.73l11.16-19.27a2.5 2.5 0 0 1 4.33 0l11.15 19.27Z" fill="var(--cro-background-0067-svg-triangulo-laranja)"/>
                    </svg>
                    <div class="main-video-wrapper">
                        <img class="youtube-thumbnail" src="${objCourse.thumbVideo}" />
                    </div>
                </div>
            </div>
        `;

            const embededVideoIframe = `<iframe class="youtube-iframe" width="100%" height="100%" src="${objCourse.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

            divDestinoTexto.insertAdjacentElement('beforeend', htmlDescriptionCourse);

            divDestinoTexto.insertAdjacentElement('beforeend', htmlButtonReadMoreCourse);

            divDestinoVideo.parentNode.parentNode.classList.add('cro-column-reverse')

            divDestinoVideo.parentNode.parentNode.style.alignItems = "start";

            divDestinoVideo.style.height = "auto";

            divDestinoVideo.style.maxWidth = "510px";

            divDestinoVideo.style.margin = "0 auto";

            htmlDescriptionCourse.firstElementChild.style.marginTop = "1.5rem"

            htmlDescriptionCourse.firstElementChild.style.fontFamily = "Montserrat";

            htmlDescriptionCourse.firstElementChild.style.fontSize = "16px";

            htmlDescriptionCourse.firstElementChild.style.fontStyle = "normal";

            htmlDescriptionCourse.firstElementChild.style.fontWeight = "400";

            htmlDescriptionCourse.firstElementChild.style.lineHeight = "1.5";

            htmlButtonReadMoreCourse.style.marginBottom = "1.5rem";

            divDestinoVideo.insertAdjacentHTML('beforeend', iframeThumbnail)

            const handleVideoClick = () => {
                document
                    .querySelector(".main-video-wrapper")
                    .insertAdjacentHTML("afterbegin", embededVideoIframe);
                document.querySelector(".play-button").style.display = "none";
            };

            const playVideoElements = document.querySelectorAll(
                ".youtube-thumbnail , .play-button"
            );

            playVideoElements.forEach((item) => {
                item.addEventListener("click", () => {
                    newFireGA("anhanguera", `sobre-o-curso:${objCourse.course}:video`, "clique:video", "thumbnail:play", "video-na-pdp", "");
                    handleVideoClick();
                });
            });
        }
    }
    document.body.classList.add('already-haves-video-pdp-mutation');

    callback.videoPersonalized = true;

    applyModification();

}

function startCroTest() {
    console.warn('teste video na pdp rodando');

    const styles = /*css*/ `
        :root {
            --cro-primary: #FF2800;
            --cro-text-0067-h3: #FF3E00;
            --cro-primary-light: #FF5F37;
            --cro-background-0067-svg-triangulo-azul: #2CA8FF;
            --cro-background-0067-svg-triangulo-laranja: #FFA500;
            --cro-secondary: #17375C;
            --cro-secondery-0067: #16375C;
            --cro-text-inverse: #FCFCFC;
            --cro-text-0067-span: #2B2B2F;
            --cro-text-0067-p: #5F5F5F;
            --cro-0067-bg: #FAFAFA;
            --cro-bg: #FAFAFA;
        }
        .dark-mode {
            --cro-primary: #FFA68C;
            --cro-text-0067-h3: #FFA68C;
            --cro-primary-light: #FFCAB9;
            --cro-background-0067-svg-triangulo-azul: #B4E5FC;
            --cro-background-0067-svg-triangulo-laranja: #FFAA8E;
            --cro-secondary: #FAFAFA;
            --cro-secondery-0067: #FAFAFA;
            --cro-text-inverse: #292929;
            --cro-text-0067-span: #FCFCFC;
            --cro-text-0067-p: #FCFCFC;
            --cro-0067-bg: #292929;
            --cro-bg: #3D3D3D;
        }
        .container-video-wrapper {
            display: flex;
            flex-direction: column;
        }
        .container-svg-video-wrapper {
            position: relative;
        }
        .svg-fundo-video {
            position: absolute;
            top: -135px;
            right: -40px;
            z-index: 2;
        }
        @media (max-width: 992px) {
            .cro-column-reverse {
            display: flex !important;
            flex-direction: column-reverse !important;
            }
        }
        @media (max-width: 768px) {
            .svg-fundo-video {
                display: none;
            }
        }
        .header-video-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
        }
        .title-video-wrapper {
            color: var(--cro-text-0067-h3);
            font-family: Montserrat;
            font-size: 21.6px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        .span-video-wrapper {
            color: var(--cro-text-0067-span);
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        .main-video-wrapper {
            background-color: transparent;
            display: block;
            width: 100%;
            position: relative;
            z-index: 999;
            border-radius: 6px;
            overflow: hidden;
            aspect-ratio: 16 / 9;
        }
        .main-video-wrapper:hover {
            .play-button {
                opacity: 0.7;
            }
        }
        .play-button {
            opacity: 0.44;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 11%;
            cursor: pointer;
            transition: opacity 0.3 ease;
        }
        .youtube-thumbnail {
            cursor: pointer;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .youtube-iframe {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border: none;
        }
    `;

    if (!document.documentElement.classList.contains('already-haves-addStyles-0067')) {
        addStyles(styles);
    }
    document.documentElement.classList.add('already-haves-addStyles-0067');

    const body = document.querySelector('body');

    const observer = new MutationObserver(() => {

        if (body && !body.classList.contains('already-haves-video-pdp-mutation')) {
            croFunction();
        }
    });
    observer.observe(body, { childList: true, subtree: true });
}

startCroTest();