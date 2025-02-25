function changeWppButton() {

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                const targetText = entry.target.querySelector("h2").textContent;

                if (targetText === "Receber código via WhatsApp") {

                    entry.target.style.border = "1px solid #25D366";

                    entry.target.style.background = "rgba(38,212,102,0.31)";

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

changeWppButton();
