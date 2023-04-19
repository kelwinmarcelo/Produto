console.log("produtos");
// CRIANDO VARIÁVEIS PARA OS ELEMENTOS DO FORMULÁRIO
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

// Exibir produtos na tela
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

// ADICIONANDO EVENTO DE SUBMISSÃO NO FORMULÁRIO
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // VERIFICANDO SE TODOS OS CAMPOS FORAM PREENCHIDOS
    if (nomeProduto.value.trim() === '' || tamanhoProduto.value === '' || categoriaProduto.value === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // CRIANDO OBJETO DO PRODUTO
    const produto = {
        nome: nomeProduto.value,
        tamanho: tamanhoProduto.value,
        categoria: categoriaProduto.value,
        fornecedor: fornecedorProduto.value
    };

    // ADICIONANDO PRODUTO AO ARRAY E LIMPANDO CAMPOS DO FORMULÁRIO
    produtos.push(produto);
    alert('Produto cadastrado!');
    nomeProduto.value = '';
    tamanhoProduto.value = '';
    categoriaProduto.value = '';
    fornecedorProduto.value = '';

    // EXIBINDO PRODUTOS NA TELA
    exibirProdutos();
});

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// EXIBINDO O ARRAY DE PRODUTOS NO CONSOLE
console.log(produtos);

