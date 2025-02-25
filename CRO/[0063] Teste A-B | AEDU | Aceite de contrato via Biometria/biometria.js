// Função para buscar a chave de criptografia do servidor
async function fetchEncryptionKey() {
    try {
        const response = await fetch('/get-encryption-key', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Erro ao buscar a chave de criptografia');
        }
        const data = await response.json();
        return data.key;
    } catch (error) {
        console.error('Erro ao buscar a chave de criptografia:', error);
        return null;
    }
}

// Função para criptografar o CPF usando AES-256-GCM
async function encryptCPF(cpf, key) {
    const encoder = new TextEncoder();
    const keyBytes = encoder.encode(key);
    const plaintextBytes = encoder.encode(cpf);

    // Importa a chave para ser usada pelo Web Crypto API
    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyBytes,
        { name: 'AES-GCM' },
        false,
        ['encrypt']
    );

    // Criptografa os dados
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedBytes = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        cryptoKey,
        plaintextBytes
    );

    // Combina IV e dados criptografados
    const encryptedArray = new Uint8Array(encryptedBytes);
    const combinedArray = new Uint8Array(iv.length + encryptedArray.length);
    combinedArray.set(iv);
    combinedArray.set(encryptedArray, iv.length);

    // Converte os dados combinados para Base64
    const encryptedBase64 = btoa(String.fromCharCode(...combinedArray));
    return encryptedBase64;
}

// Função para obter o CPF do localStorage
function getCPF() {
    const persistRoot = localStorage.getItem("persist:root");
    if (!persistRoot) {
        console.error("persist:root não encontrado no localStorage");
        return null;
    }

    const persistObj = JSON.parse(persistRoot);
    if (!persistObj.user) {
        console.error('Campo "user" não encontrado no persist:root');
        return null;
    }

    const userObj = JSON.parse(persistObj.user);
    if (!userObj.cpf) {
        console.error('Campo "cpf" não encontrado no objeto user');
        return null;
    }

    const cpf = userObj.cpf;
    return cpf;
}

// Função para observar mudanças no DOM
function croMutationCallback(mutationsList, observer) {
    console.log("rodou croMutationCallback");
    for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
            handleAddedNodes(mutation.addedNodes);
        }
    }
}

// Função para lidar com os nós adicionados
function handleAddedNodes(addedNodes) {
    addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === "BUTTON" && node.textContent.trim() === "Assinar o contrato") {
                console.log("botão encontrado");
                croRedirectBiometria(node);
            }
            node.querySelectorAll("button").forEach((button) => {
                if (button.textContent.trim() === "Assinar o contrato") {
                    croRedirectBiometria(button);
                }
            });
        }
    });
}

// Função para redirecionar para a página de biometria
async function croRedirectBiometria(button) {
    console.log("rodou croRedirectBiometria");
    button.addEventListener("click", async () => {
        const cpf = getCPF();
        if (cpf) {
            const key = await fetchEncryptionKey();
            if (key) {
                const encryptedCPF = await encryptCPF(cpf, key);
                const url = `https://fullfacelab.com/cogna/Enviar/CapturarFotos?ffId=${encryptedCPF}`;
                window.open(url, "_blank");
                console.log(url, " adicionada ao botão:", url);
                dataLayer.push({
                    event: "evento_cro",
                    brand: "anhanguera",
                    locationElement: "contratos",
                    typeElement: "clique:botao",
                    text: "Assinar o contrato",
                    campaignName: "aceite-de-contrato-via-biometria",
                    variant: "a",
                });
            } else {
                console.error('Erro ao obter a chave de criptografia.');
            }
        } else {
            console.error("CPF não encontrado.");
        }
    });
}


// Observa mudanças no DOM para detectar novos botões
const croObservedElement = document.getElementById("__next");
if (croObservedElement) {
    console.log("rodou MutationObserver");
    const observer = new MutationObserver(croMutationCallback);
    const config = { childList: true, subtree: true };
    observer.observe(croObservedElement, config);
} else {
    console.log("O elemento observado (__next) não foi encontrado.");
}