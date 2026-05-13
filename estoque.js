//Array (vetor) que armazena os produtos do estoque
let estoque = [];

//Capturar os elementos do HTML
const nomeprodutoinput = document.getElementById("nomeproduto");
const qtdprodutoinput = document.getElementById("qtdproduto");
const btnadicionar = document.getElementById("btnadc");
const listaestoque = document.getElementById("lista");

//Função para adicionar um produto ao estoque
function adicionarproduto(){
    const nome = nomeprodutoinput.value;
    const quantidade = Number(qtdprodutoinput.value);

    //Validação de dados
    if (nome === "" || quantidade <= 0){
        alert("Preencha os campos corretamente!");
        return;
    }

    //Adicionar o produto ao array (vetor)
    estoque.push({nome, quantidade});

    //Limpar os campos
    nomeprodutoinput.value = "";
    qtdprodutoinput.value = "";

    //Atualizar a tela
    renderizarEstoque();
}

    //Evento de clique no botão
    btnadc.addEventListener ("click", adicionarproduto);
    

    //Função exibir estoque
        function renderizarEstoque(){
            lista.innerHTML ="";

            estoque.forEach((produto, index) => {
            const item = document.createElement("li");

            item.innerHTML = `
            ${produto.nome} - Quantidade: ${produto.quantidade}
            <button onclick = "removerProduto(${index})">Remover</button>
            `;

            lista.appendChild(item);
        });
    }

    //Função paera remover produto
    function removerProduto(index) {
        estoque.splice(index, 1);
        renderizarEstoque();
    }

