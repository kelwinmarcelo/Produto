console.log("produtos");
// criando variáveis para os elemtentos do form
const form = document.querySelector('form');
const nomeProduto = document.querySelector('input[name="nome_produto"]');
const tamanhoProduto = document.querySelector('select[name="tamanho_produto"]');
const categoriaProduto = document.querySelector('select[name="categoria_produto"]');
const fornecedorProduto = document.querySelector('select[name="fornecedor_produto"]');
const produtos = [];
const listaProdutos = document.querySelector('#listaProdutos');

nomeProduto.value = '';
tamanhoProduto.value = '';
categoriaProduto.value = '';
fornecedorProduto.value = '';

// exibir produtos na tela
function exibirProdutos() {
    let html = '';
    for (const produto of produtos) {
        html += `<tr id="linha">
        <td class="colunas" id="colunaProduto">${produto.nome}</td>
        <td class="colunas" id="colunaTamanho">${produto.tamanho}</td>
        <td class="colunas" id="colunaCategoria">${produto.categoria}</td>
        <td class="colunas" id="colunaFornecedor">${produto.fornecedor}</td>
        </tr>`;
    }
    listaProdutos.innerHTML = html;
}

//adicionando o evento de submit no formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // verifica se foi preenchido
    if (nomeProduto.value.trim() === '' || tamanhoProduto.value === '' || categoriaProduto.value === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Criar obj do produto
    const produto = {
        nome: nomeProduto.value,
        tamanho: tamanhoProduto.value,
        categoria: categoriaProduto.value,
        fornecedor: fornecedorProduto.value
    };

    //adc o produto ao array e limpando campos do formulario 
    produtos.push(produto);
    alert('Produto cadastrado!');
    nomeProduto.value = '';
    tamanhoProduto.value = '';
    categoriaProduto.value = '';
    fornecedorProduto.value = '';

    // exibir prod na tela
    exibirProdutos();
});
console.log(produtos);

