function croFunction() {
    function addStyles(styles) {
        var css = document.createElement("style");
        css.type = "text/css";
        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));
            document.head.insertAdjacentElement("afterbegin", css);
        }
    }
    var styles = `
        .countdown {
            margin-top: 2rem;
            text-align: center;
            padding: 1rem;
            border-radius: 10px;
            display: flex;
            border: 1px solid #C5D2E0;
            gap: 2rem;
        }

        .countdownHome {
            text-align: center;
            padding: 1rem;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            display: flex;
            border: 1px solid #C5D2E0;
            gap: 2rem;
            max-width: 1440px;
            margin: 20px auto;
        }
      
        #timer {
            display: flex;
            gap: 5px;
        }
        .backgroundNumber {
            margin-top: 0 !important;
            background-color: #FF2800;
            color: #FFF;
            font-size: 21px;
            font-weight: 700;
            padding: 8px 10px;
            border-radius: 6px;
            pointer-events: none;
            line-height: 1;
        }
        .dots {
            margin-top: -14px;
            font-size: 38px;
            color: #2B2B2F;
        }
        .columnNumbers {
            display: flex;
            flex-direction: column;

            span {
                font-size: 14px;
                font-weight: 500;
                margin-top: 5px;
                margin-bottom: -6px;

            }
        }
        .numberCountDown {
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
        .textContent {
            text-align: left;

            h3 {
                color: #FF2800;
            }

            p {
                color: #2B2B2F;
            }
        }

        .dark-mode .dots {
            color: #FFF;
        }

        .dark-mode .textContent {
            p {
                color: #FFF;
            }
        }

        .dark-mode .textContentHome {
            p {
                color: #FFF;
            }
        }

        .textContentHome {
            display: flex;
            flex-direction: row;
            gap: 2rem;

            text-align: left;

            h3 {
                line-height: 1.7 !important;
                color: #FF2800;

            }

            p {
                margin-top: 0 !important;
                color: #2B2B2F;
            }
        }

        @media (max-width: 1080px) {
            .countdown {
                flex-wrap: wrap;
                justify-content: center;
            }

            .quebra {
                display: none;
            }

            .countdownHome {
                flex-direction: column;
            }
            .textContent {
                max-width: 400px;
                margin-top: -10px;
                text-align: center;
                p {
                    text-align: justify;
                }
            }

            .textContentHome {
                max-width: 400px;
                margin-top: -10px;
                text-align: center;
                flex-direction: column;
                gap: 0;

                h3 {
                    font-size: 16px;
                }
                p {
                    text-align: justify;
                }
            }
        }

        @media (max-width: 768px) {
            .textContent {
                max-width: 250px;
            }

            .textContentHome {
                max-width: 250px;
            }
        }
    `;
    addStyles(styles);

    const countDown = `
        <div class="countdown">
            <div id="timer">
                <div class="columnNumbers">
                    <div class="numberCountDown">
                        <h2 class="backgroundNumber" id="DY1"></h2>
                        <h2 class="backgroundNumber" id="DY2"></h2>
                    </div>
                    <span>Dias</span>
                </div>
                <span class="dots">:</span>
                <div class="columnNumbers">
                    <div class="numberCountDown">
                        <h2 class="backgroundNumber" id="HR1"></h2>
                        <h2 class="backgroundNumber" id="HR2"></h2>
                    </div>
                    <span>Horas</span>
                </div>
                <span class="dots">:</span>
                <div  class="columnNumbers">
                    <div class="numberCountDown">
                        <h2 class="backgroundNumber" id="MN1"></h2>
                        <h2 class="backgroundNumber" id="MN2"></h2>
                    </div>
                    <span>Minutos</span>
                </div>
            </div>
            <div class="textContent">
                <h3>NÃO PERCA TEMPO!</h3>
                ${window.screen.width < 1380 ? "<p>Suas aulas presenciais começam em breve. Matricule-se e inicie em 19/02!</p>" : "<p>Suas aulas presenciais começam em breve. </br> Matricule-se e inicie em 19/02!</p>"}
                
            </div>
        </div>
    `
    const countDownHome = `
        <div style="padding: 0 1rem">
            <div class="countdownHome">
                <div id="timer">
                    <div class="columnNumbers">
                        <div class="numberCountDown">
                            <h2 class="backgroundNumber" id="DY1"></h2>
                            <h2 class="backgroundNumber" id="DY2"></h2>
                        </div>
                        <span>Dias</span>
                    </div>
                    <span class="dots">:</span>
                    <div class="columnNumbers">
                        <div class="numberCountDown">
                            <h2 class="backgroundNumber" id="HR1"></h2>
                            <h2 class="backgroundNumber" id="HR2"></h2>
                        </div>
                        <span>Horas</span>
                    </div>
                    <span class="dots">:</span>
                    <div  class="columnNumbers">
                        <div class="numberCountDown">
                            <h2 class="backgroundNumber" id="MN1"></h2>
                            <h2 class="backgroundNumber" id="MN2"></h2>
                        </div>
                        <span>Minutos</span>
                    </div>
                </div>
                <div class="textContentHome">
                    <h3>NÃO PERCA TEMPO!</h3>
                    <p>Suas aulas presenciais começam em breve. <br class="quebra"><b> Matricule-se e inicie em 19/02!</b></p>
                    
                </div>
                <a onclick="fireGA('anhanguera:home:countDown:matricule-se_ja','clique:botao','matricule-se_ja')" href="/area-do-candidato/login" class="btn btn-primary-medium rounded">Matricule-se já!</a>
            </div>
        </div>
    `
    var url_atual = window.location.href;
    var login = "/login"
    var detalhes = "/detalhes"

    if (url_atual.includes(login)) {
        document.querySelector("h2").insertAdjacentHTML("beforebegin", countDown);
    } else if (url_atual.includes(detalhes)) {
        document.querySelector("#__next > div > div > div > div").insertAdjacentHTML("beforebegin", countDown);
        document.querySelector(".countdown").style.marginTop = "-1rem"
        document.querySelector(".countdown").style.marginBottom = "2rem"
    } else {
        document.querySelector("#vueApp > div.svg-sprite").insertAdjacentHTML("beforebegin", countDownHome);
    }
    document.body.classList.add("CROCountDown")

    function countDownMatricula() {
        const targetDate = new Date("2024-02-19T00:00:00");

        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            // const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("DY1").textContent = "0";
            document.getElementById("DY2").textContent = `${days}`;
            document.getElementById("HR1").textContent = hours < 10 ? "0" : `${hours.toString().charAt(0)}`;
            document.getElementById("HR2").textContent = `${hours.toString().charAt(0)}`;
            document.getElementById("MN1").textContent = minutes < 10 ? "0" : `${minutes.toString().charAt(0)}`;
            document.getElementById("MN2").textContent = minutes < 10 ? `${minutes.toString().charAt(0)}` : `${minutes.toString().charAt(1)}`;

            if (difference <= 0) {
                clearInterval(interval);
                document.querySelector(".countdown").style.display = "none";
            }
        }
        const interval = setInterval(updateCountdown, 1000);

        updateCountdown();
    };
    countDownMatricula()
}
if (!document.body.classList.contains("CROCountDown")) {
    croFunction();
}