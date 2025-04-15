let callback = {
    testFaqApply: false,
}
function applyTestFaq() {
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

    const styles = /*css*/`
        .cro-container-button-test-faq {
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
        }
        .chat-button {
            all: unset;
            display: flex;
            align-items: center;
            cursor: pointer;
            border: none;

            span {
                text-decoration-line: underline;
                color: #0078d4;
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
        .chat-container {
            z-index: 99999;
            display: none;
            position: fixed;
            bottom: 10px;
            right: 20px;
            width: 390px;
            height: 650px;
            min-height: 300px;
            border-radius: 6px;
            overflow: hidden;
            opacity: 1;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
        }
        .chat-container .chat-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #0b556a;
            height: 50px;
            padding: 0 20px;

            h3 {
                font-family: "Roboto";
                font-size: 14px;
                color: #fff;
            }
        }
        .chat-container .chat-header .cro-button-faq-close {
            all: unset;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            position: absolute;
            right: -10px;
        }
        .chat-container #webchat {
            height: calc(100% - 50px);
            overflow: hidden;
            width: 100%;
            background-color: #fff;
        }
    `;
    addStyle(styles);

    const bodyFaqHTML = /*html*/`
        <div class="cro-container-button-test-faq">
            <button class="chat-button" onclick="toggleOpenChat()">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path d="m11.93 14.63-.1.12a.6.6 0 0 0-.07.15.51.51 0 0 0-.04.14v.16c0 .1.02.2.06.3a.72.72 0 0 0 .43.44.75.75 0 0 0 .61 0 .72.72 0 0 0 .43-.44.8.8 0 0 0 .05-.3.8.8 0 0 0-1.37-.57ZM12.5 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14.4a6.4 6.4 0 1 1 0-12.8 6.4 6.4 0 0 1 0 12.8Zm0-10.4a2.4 2.4 0 0 0-2.08 1.2.8.8 0 1 0 1.38.8.8.8 0 1 1 .7 1.2.8.8 0 0 0-.8.8v.8a.8.8 0 1 0 1.6 0v-.14A2.4 2.4 0 0 0 12.5 8Z" fill="#015CE6"/></svg>
                <span>Preciso de ajuda</span>
            </button>
            <div class="chat-container" id="chatContainer">
                <div class="chat-header">
                    <h3>FAQ Área do Candidato</h3>
                    <button class="cro-button-faq-close" onclick="toggleCloseChat()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="m13.06 12 4.72-4.72a.75.75 0 0 0-1.06-1.06L12 10.94 7.3 6.22a.75.75 0 1 0-1.07 1.06L10.94 12 6.22 16.7a.75.75 0 0 0 .25 1.23.75.75 0 0 0 .82-.16L12 13.06l4.72 4.72a.75.75 0 1 0 1.06-1.07L13.06 12Z" fill="#FAFAFA"/></svg>
                    </button>
                    </div>
                <div id="webchat" role="main"></div>
            </div>
        </div>
    `;
    const faqDestion = document.querySelector('[data-testid="layout-container"] > div');
    faqDestion.insertAdjacentHTML("beforeend", bodyFaqHTML);
    callback.testFaqApply = true;
}

function loadScript(src) {
    const scriptCDN = document.createElement('script');
    scriptCDN.src = src;
    scriptCDN.onload = callback;
    document.head.appendChild(scriptCDN);

    // url antiga "https://c6541a989433e2588d8b5f038e90f4.eb.environment.api.powerplatform.com/powervirtualagents/botsbyschema/crd7f_faqAreaDoCandidato/directline/token?api-version=2022-03-01-preview"
    const tokenEndpointURL = new URL(
        "https://df93df8d0cc2e4cab1a511795a04bd.e7.environment.api.powerplatform.com/powervirtualagents/botsbyschema/crd7f_faqAreaDoCandidato_7XCy31/directline/token?api-version=2022-03-01-preview"
    );
    const locale = document.documentElement.lang || "en";

    const apiVersion = tokenEndpointURL.searchParams.get("api-version");

    const scripFAQ = document.createElement('script');

    scripFAQ.textContent = /*js*/`
        function toggleOpenChat() {
            let chatContainer = document.getElementById("chatContainer");
            chatContainer.style.display = 'block';
            initializeWebChat();
            newFireGA("teste_cro", "unopar", "area-do-candidato", "clique:botao", "preciso-de-ajuda", "faq-AC", "a", "abrir-faq");
        }

        function toggleCloseChat() {
            let chatContainer = document.getElementById("chatContainer");
            chatContainer.style.display = 'none';
            newFireGA("teste_cro", "unopar", "area-do-candidato", "clique:botao", "fechar", "faq-AC", "a", "fechar-faq");
        }

        function initializeWebChat() {
            const styleOptions = {
                hideUploadButton: true,
                backgroundColor: "white",
                bubbleBackground: "#fff",
                bubbleFromUserBackground: "#fff",
                primaryFont: "Roboto",
                botAvatarBackgroundColor: "#FFFFFF",
                botAvatarImage: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/CRO/%5B0104%5D%20AEDU%20%7C%20AC%20%7C%20FAQ%20na%20%C3%81rea%20do%20Candidato/avatarFaqAreaCandidatoBot.png",
                botAvatarInitials: "AN",
                userAvatarBackgroundColor: "#FFFFFF",
                userAvatarImage: "https://storage.googleapis.com/cro_in_house_cogna-hospedagem/img/anhanguera/CRO/%5B0104%5D%20AEDU%20%7C%20AC%20%7C%20FAQ%20na%20%C3%81rea%20do%20Candidato/avatarFaqAreaCandidatoUser.png",
                userAvatarInitials: "US",
            };

            adaptiveCardsHostConfig = {
                spacing: {
                    small: 3,
                    default: 8,
                    medium: 20,
                    large: 30,
                    extraLarge: 40,
                    padding: 10,
                },
                separator: {
                    lineThickness: 1,
                    lineColor: "#EEEEEE",
                },
                supportsInteractivity: true,
                fontTypes: {
                    default: {
                        fontFamily: "Roboto",
                        fontSizes: {
                            small: 13,
                            default: 16,
                            medium: 18,
                            large: 22,
                            extraLarge: 26,
                        },
                        fontWeights: {
                            lighter: 200,
                            default: 400,
                            bolder: 600,
                        },
                    },
                    monospace: {
                        fontFamily: "Roboto",
                        fontSizes: {
                            small: 13,
                            default: 16,
                            medium: 18,
                            large: 22,
                            extraLarge: 26,
                        },
                        fontWeights: {
                            lighter: 200,
                            default: 400,
                            bolder: 600,
                        },
                    },
                },
                containerStyles: {
                    default: {
                        backgroundColor: "#fff",
                        foregroundColors: {
                            default: {
                                default: "#000000",
                                subtle: "#fff",
                            },
                            accent: {
                                default: "#0b556a",
                                subtle: "#0b556a",
                            },
                        },
                    },
                    accent: {
                        backgroundColor: "#fff",
                        foregroundColors: {
                            default: {
                                default: "#000000",
                                subtle: "#000000",
                            },
                            accent: {
                                default: "#2e89fc",
                                subtle: "#000000",
                            },
                        },
                    },
                },
                imageSizes: {
                    small: 40,
                    medium: 80,
                    large: 160,
                },
                actions: {
                    maxActions: 100,
                    spacing: "default",
                    buttonSpacing: 8,
                    showCard: {
                        actionMode: "inline",
                        inlineTopMargin: 8,
                    },
                    actionsOrientation: "vertical",
                    actionAlignment: "stretch",
                },
                adaptiveCard: {
                    allowCustomStyle: true,
                },
                imageSet: {
                    imageSize: "medium",
                    maxImageHeight: 100,
                },
                factSet: {
                    title: {
                        color: "default",
                        size: "default",
                        isSubtle: false,
                        weight: "bolder",
                        wrap: true,
                        maxWidth: 150,
                    },
                    value: {
                        color: "default",
                        size: "default",
                        isSubtle: false,
                        weight: "default",
                        wrap: true,
                    },
                    spacing: 8,
                },
            };

            (async function () {
                const [directLineURL, token] = await Promise.all([
                    fetch(new URL("/powervirtualagents/regionalchannelsettings?api-version=${apiVersion}", "${tokenEndpointURL}"))
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error(
                                    "Failed to retrieve regional channel settings."
                                );
                            }
                            return response.json();
                        })
                        .then(({ channelUrlsById: { directline } }) => directline),
                    fetch("${tokenEndpointURL}")
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Failed to retrieve Direct Line token.");
                            }
                            return response.json();
                        })
                        .then(({ token }) => token),
                ]);

                const directLine = WebChat.createDirectLine({
                    domain: new URL("v3/directline", directLineURL),
                    token,
                });

                const subscription = directLine.connectionStatus$.subscribe({
                    next(value) {
                        if (value === 2) {
                            directLine
                                .postActivity({
                                    localTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                    locale: "${locale}",
                                    name: "startConversation",
                                    type: "event",
                                })
                                .subscribe();
                            subscription.unsubscribe();
                        }
                    },
                });

                WebChat.renderWebChat(
                    { directLine, locale: "${locale}", styleOptions, adaptiveCardsHostConfig },
                    document.getElementById("webchat")
                );
            })().catch(err => console.error(err));
        }
    `;
    document.head.appendChild(scripFAQ);
    document.documentElement.classList.add('already-haves-mutation-test-faq');
    if (document.documentElement.classList.contains('already-haves-mutation-test-faq')) {
        applyTestFaq();
    }
}

function startCroTest() {
    const divNext = document.querySelector("#__next");

    if (!divNext || document.documentElement.classList.contains('already-haves-mutation-test-faq')) {
        return;
    }

    const observer = new MutationObserver(() => {
        const cdn = "https://cdn.botframework.com/botframework-webchat/latest/webchat.js";

        if (!document.querySelector(`script[src="${cdn}"]`)) {
            loadScript(cdn);
        }

        // if (callback.testFaqApply) {
        //     observer.disconnect()
        // }
    });

    observer.observe(divNext, { childList: true, subtree: true });
}
document.addEventListener('DOMContentLoaded', () => {
    startCroTest();
})
startCroTest();