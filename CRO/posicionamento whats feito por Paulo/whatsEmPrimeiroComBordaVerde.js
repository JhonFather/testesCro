function changeWppButton() {

    function moveLabelAfterH1(label) {

        const h1 = document.querySelector("h1");

        if (label.previousSibling.nodeName == "H1") {
            return;
        }

        const parentContainer = h1.parentNode;

        parentContainer.insertBefore(label, h1.nextSibling);

        label.style.border = "1px solid #25D366";

        label.style.background = "rgba(38,212,102,0.31)";
    }

    function handleIntersection(entries, observer) {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const targetText = entry.target.querySelector("h2").textContent;

                if (targetText === "Receber código via WhatsApp") {

                    moveLabelAfterH1(entry.target);

                    observer.unobserve(entry.target);

                }
            }
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    let observer;

    function startIntersectionObserver() {

        observer = new IntersectionObserver(handleIntersection, options);

        const labels = document.querySelectorAll("label");

        labels.forEach((label) => {

            if (label.textContent.includes("Receber código via WhatsApp")) {

                observer.observe(label);

            }
        });
    }

    const mutationObserver = new MutationObserver((mutations) => {

        for (let mutation of mutations) {

            if (mutation.type === "childList" && mutation.addedNodes.length) {

                startIntersectionObserver();

                break;

            }
        }
    });

    const nextElement = document.querySelector("body");

    mutationObserver.observe(nextElement, {
        childList: true,
        subtree: true,
    });

    console.log("convert");

}
document.addEventListener("DOMContentLoaded", () => { changeWppButton(); });