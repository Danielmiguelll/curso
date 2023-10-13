function identificarBandeira() {
    const cartaoCreditoInput = document.getElementById("cartao_credito");
    const bandeiraLabel = document.getElementById("bandeira");
    const bandeiraImagem = document.getElementById("bandeira_imagem");
    const numeroCartao = cartaoCreditoInput.value.replace(/\s/g, "");
    const dígitosIniciais = numeroCartao.substr(0, 6);

    let bandeira = "Desconhecida";
    let imagemSrc = "";

    if (/^4/.test(dígitosIniciais)) {
        bandeira = "Visa";
        imagemSrc = "https://logospng.org/download/visa/logo-visa-4096.png";
    } else if (/^5[1-5]/.test(dígitosIniciais)) {
        bandeira = "MasterCard";
        imagemSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwd18FhJ3tV6F4VQxKAsjYDtw8vIjxhyWvAw&usqp=CAU";
    } else if (/^3[47]/.test(dígitosIniciais)) {
        bandeira = "American Express";
        imagemSrc = "https://cdn.icon-icons.com/icons2/1487/PNG/512/8365-american-express_102492.png";
    } else if (/^6/.test(dígitosIniciais)) {
        bandeira = "Discover";
        imagemSrc = "https://w7.pngwing.com/pngs/28/795/png-transparent-discover-card-credit-card-mastercard-american-express-debit-card-credit-card-text-orange-logo.png";
    }

    bandeiraLabel.textContent = `Bandeira: ${bandeira}`;

    if (bandeira === "Desconhecida") {
        bandeiraLabel.classList.add("desconhecida");
        bandeiraImagem.classList.add("hidden");
    } else {
        bandeiraLabel.classList.remove("hidden");
        bandeiraImagem.classList.remove("hidden");
        bandeiraImagem.src = imagemSrc;
    }
}

const cepInput = document.getElementById("cep");
const estadoInput = document.getElementById("estado");
const ruaInput = document.getElementById("rua");
const bairroInput = document.getElementById("bairro");

cepInput.addEventListener("input", () => {
    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    estadoInput.value = data.uf;
                    ruaInput.value = data.logradouro;
                    bairroInput.value = data.bairro;
                }
            })
            .catch(error => {
                console.error("Erro ao consultar o CEP:", error);
            });
    }
});
function validarFormulario() {
const cepInput = document.getElementById("cep");
const cepValue = cepInput.value.trim();

if (!/^\d{5}-?\d{3}$/.test(cepValue)) {
    alert("Formato de CEP inválido. Use XXXXX-XXX ou XXXXXXXX.");
    return false;
}

// Outras validações podem ser adicionadas aqui

return true; // Permite o envio do formulário se todas as validações passarem
}
