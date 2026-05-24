function filtrar(categoria) {

    const produtos = document.querySelectorAll(".card");
    const botoes = document.querySelectorAll(".filtros button");

    botoes.forEach(btn => btn.classList.remove("ativo"));
    event.target.classList.add("ativo");

    produtos.forEach(produto => {

        if (categoria === "todos" || produto.classList.contains(categoria)) {
            produto.classList.remove("hide");
            produto.classList.add("show");
        } else {
            produto.classList.remove("show");
            produto.classList.add("hide");
        }

    });
}

let carrinho = [];

function adicionarCarrinho(nome, preco) {

    carrinho.push({ nome, preco });

    console.log("Carrinho:", carrinho);

    alert(nome + " adicionado ao carrinho!");
}