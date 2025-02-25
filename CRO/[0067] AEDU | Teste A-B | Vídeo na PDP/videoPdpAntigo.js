function croFunctionAddVideoPDP() {
    document.body.classList.add("video-pdp-injected");
    console.log("video inserido");

    function crofindTheme() {
        const themeMode = localStorage.getItem("theme");
        const htmlElement = document.documentElement;
        if (themeMode === "darkMode" || themeMode === "contrast") {
            htmlElement.classList.add("dark-mode");
        } else {
            htmlElement.classList.remove("dark-mode");
        }
    }

    const croObservedNextElement = document.getElementById("__next");
    const observer = new MutationObserver(() => {
        crofindTheme();
    });

    const config = {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    };
    observer.observe(croObservedNextElement, config);
    crofindTheme();

    function addStyle(styles) {
        var css = document.createElement("style");
        css.type = "text/css";
        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));
            document.head.insertAdjacentElement("afterbegin", css);
        }
    }

    const styles = `
    :root {
        --cro-primary: #FF2800;
        --cro-text-0067-h3: #FF3E00;
        --cro-primary-light: #FF5F37;
        --cro-background-0067-svg-triangulo-menor: #FFAA8E;
        --cro-background-0067-svg-triangulo-maior: #F94D12;
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
        --cro-background-0067-svg-triangulo-menor: #94A5BA;
        --cro-background-0067-svg-triangulo-maior: #FFAA8E;
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
        top: -40px;
        right: -95px; 
        z-index: 2;
    }
    
    @media (max-width: 768px) {
        .svg-fundo-video {
            width: 240px;
            top: -70px;
            right: 0;
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
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
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
        background-color: #000000;
        display: block;
        width: 100%;
        position: relative;
        z-index: 999;
        border-radius: 14px;
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
        border-radius: 12px;
    }
`;
    addStyle(styles);

    const url_atual = window.location.href;

    let objCourse = {
        urlVideo: "",
        textTitle: "",
        thumbVideo: "",
    };

    if (url_atual.includes("direito")) {
        objCourse = {
            urlVideo: "https://www.youtube.com/embed/6g5ghZItLt0?autoplay=1",
            textTitle: "Descubra o mundo do Direito",
            thumbVideo: "https://img.youtube.com/vi/6g5ghZItLt0/sddefault.jpg",
        };
    } else {
        objCourse = {
            urlVideo: "https://www.youtube.com/embed/vyt2WJ77aq8?autoplay=1",
            textTitle: "Descubra o mundo da Enfermagem",
            thumbVideo: "https://img.youtube.com/vi/vyt2WJ77aq8/sddefault.jpg",
        };
    }

    const htmlDescriptionCourse = document.querySelector(".description-main");
    const htmlButtonReadMoreCourse = document.querySelector(".button-open-modal");
    const divDestinoTexto = document.querySelector("main > section:nth-child(4) > div > div > div");
    const divDestinoVideo = document.querySelector(
        "main > section:nth-child(4)  > div > div > div:nth-child(2) > div"
    );

    const iframeThumbnail = `
    <div class="container-video-wrapper">
        <div class="header-video-wrapper">
            <div>
                <h3 class="title-video-wrapper">${objCourse.textTitle}</h3>
                <span class="span-video-wrapper">Assista ao nosso vídeo agora!</span>
                
            </div>
        </div>
        <div class="container-svg-video-wrapper">
            <svg class="svg-fundo-video" width="298" height="380" viewBox="0 0 298 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M244.233 237.117C254.47 231.746 255.278 217.398 245.71 210.91L40.0779 71.503C30.2416 64.8331 16.8899 71.4385 16.2214 83.3038L1.86269 338.137C1.19415 350.001 13.7192 358.065 24.2422 352.543L244.233 237.117Z" fill="var(--cro-background-0067-svg-triangulo-maior)"/>
                <path d="M241.835 141.409C248.036 141.32 251.901 134.649 248.894 129.225L184.277 12.6627C181.187 7.08633 173.196 7.01103 170 12.5274L101.356 131.002C98.1599 136.519 102.199 143.414 108.574 143.322L241.835 141.409Z" fill="var(--cro-background-0067-svg-triangulo-menor)"/>
            </svg>
            <div class="main-video-wrapper">
                <img class="youtube-thumbnail" src="${objCourse.thumbVideo}" />
                <svg onclick='newFireGA("anhanguera", "sobre-o-curso:video", "clique:video", "thumbnail:play", "video-na-pdp", "")' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104" fill="none" class="play-button">
                    <path opacity="1" fill-rule="evenodd" clip-rule="evenodd" d="M52.4023 0.907227C23.9103 0.907227 0.8125 24.005 0.8125 52.497C0.8125 80.989 23.9103 104.087 52.4023 104.087C80.8943 104.087 103.992 80.989 103.992 52.497C103.992 24.005 80.8943 0.907227 52.4023 0.907227ZM35.2074 26.7021L78.1972 52.497L35.2074 78.2919V26.7021Z" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
`;

    const embededVideoIframe = `<iframe class="youtube-iframe" width="100%" height="100%" src="${objCourse.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

    divDestinoTexto.insertAdjacentElement("beforeend", htmlDescriptionCourse);
    divDestinoTexto.insertAdjacentElement("beforeend", htmlButtonReadMoreCourse);

    divDestinoVideo.parentNode.parentNode.style.alignItems = "start";

    divDestinoVideo.style.height = "auto";

    divDestinoVideo.style.maxWidth = "510px";

    divDestinoVideo.style.margin = "0 auto";

    htmlDescriptionCourse.firstElementChild.style.marginTop = "1.5rem";

    // htmlDescriptionCourse.firstElementChild.style.color = "#1D1D1D";

    // htmlDescriptionCourse.firstElementChild.style.fontFamily = "Montserrat";

    // htmlDescriptionCourse.firstElementChild.style.fontSize = "16px";

    // htmlDescriptionCourse.firstElementChild.style.fontStyle = "normal";

    // htmlDescriptionCourse.firstElementChild.style.fontWeight = "400";

    htmlDescriptionCourse.firstElementChild.style.lineHeight = "1.5";

    htmlButtonReadMoreCourse.style.marginBottom = "1.5rem";

    divDestinoVideo.insertAdjacentHTML("beforeend", iframeThumbnail);

    const handleVideoClick = () => {
        document
            .querySelector(".main-video-wrapper")
            .insertAdjacentHTML("afterbegin", embededVideoIframe);
        document.querySelector(".play-button").style.display = "none";
    };

    const playVideoElements = document.querySelectorAll(".youtube-thumbnail , .play-button");

    playVideoElements.forEach((item) => {
        item.addEventListener("click", () => {
            handleVideoClick();
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const croObservedNextElement = document.getElementById("__next");
    if (croObservedNextElement) {
        const observer = new MutationObserver(() => {
            if (!document.body.classList.contains("video-pdp-injected")) {
                croFunctionAddVideoPDP();
            }
        });

        const config = {
            childList: true,
            subtree: true,
        };

        observer.observe(croObservedNextElement, config);
    } else {
        console.error("Elemento __next não encontrado");
    }
});