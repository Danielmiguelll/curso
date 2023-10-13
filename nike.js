document.addEventListener('DOMContentLoaded', function () {
    const comprarBtns = document.querySelectorAll('.buy-button');
    const carrinho = document.querySelector('.carrinho');
    const carrinhoLista = document.getElementById('carrinho-lista');
    const notificacao = document.getElementById('notificacao');

    const itensCarrinho = [];

    comprarBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const produto = {
                nome: `Produto ${index + 1}`,
                preco: 199.99
            };
            itensCarrinho.push(produto);

            // Atualize a lista do carrinho
            atualizarCarrinho();

            // Mostrar notificação
            mostrarNotificacao();

            // Altere o texto do botão
            btn.innerText = 'Produto Adicionado ao Carrinho';
            btn.disabled = true;
        });
    });

    function atualizarCarrinho() {
        carrinhoLista.innerHTML = '';
        itensCarrinho.forEach((item) => {
            const li = document.createElement('li');
            li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            carrinhoLista.appendChild(li);
        });
    }

    function mostrarNotificacao() {
        notificacao.style.display = 'block';
        setTimeout(() => {
            notificacao.style.display = 'none';
        }, 3000); //tempo que a notificação ficará na tela//
    }
 
    });
 