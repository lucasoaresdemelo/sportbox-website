// =========================
// PRODUTOS
// =========================

const produtos = [

    {
        nome: "Camisa Brasil Amarelo 2026",
        preco: 120,
        imagem: "brasil.amarelo.vini.jpg",
        categoria: "copa",
        pagina: "produto-brasil-amarelo.html",
        galeria: "galeria-brasil-amarelo.html"
    },

    {
        nome: "Camisa Brasil Azul 2026",
        preco: 120,
        imagem: "brasil.azul.vini.jpg",
        categoria: "copa",
        pagina: "produto-brasil-azul.html",
        galeria: "galeria-brasil-azul.html"
    },

    {
        nome: "Camisa Brasil 98 Amarelo",
        preco: 70,
        imagem: "brasil.retro.amarelo.JPG",
        categoria: "copa",
        pagina: "produto-brasil-98-amarelo.html",
        galeria: "galeria-brasil-98-amarelo.html"
    },

    {
        nome: "Camisa Brasil 98 Azul",
        preco: 70,
        imagem: "brasil.retro.azul.jpg",
        categoria: "copa",
        pagina: "produto-brasil-98-azul.html",
        galeria: "galeria-brasil-98-azul.html"
    },

    {
        nome: "Camisa Dry-Fit Amarelo",
        preco: 50,
        imagem: "brasil.dryfit.amarelo.detalhe.jpg",
        categoria: "copa",
        pagina: "produto-dryfit-amarelo.html",
        galeria: "galeria-dryfit-amarelo.html"
    },

    {
        nome: "Camisa Dry-Fit Azul",
        preco: 50,
        imagem: "brasil.dryfit.azul.detalhe.jpg",
        categoria: "copa",
        pagina: "produto-dryfit-azul.html",
        galeria: "galeria-dryfit-azul.html"
    },

    {
        nome: "Camisa Dry-Fit Branco",
        preco: 50,
        imagem: "brasil.dryfit.branco.detalhe.jpg",
        categoria: "copa",
        pagina: "produto-dryfit-branco.html",
        galeria: "galeria-dryfit-branco.html"
    },

    {
        nome: "Camisa Dry-Fit Preto",
        preco: 50,
        imagem: "brasil.dryfit.preto.detalhe.jpg",
        categoria: "copa",
        pagina: "produto-dryfit-preto.html",
        galeria: "galeria-dryfit-preto.html"
    }

];


// =========================
// RENDERIZAR PRODUTOS
// =========================

const grid = document.querySelector(".grid");

function renderizarProdutos(lista) {

    grid.innerHTML = "";

    lista.forEach(produto => {

        grid.innerHTML += `

        <div class="card ${produto.categoria} show">

            <a href="${produto.galeria}" style="text-decoration: none; color: inherit;">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </a>

            <div class="card-info">

                <h3>${produto.nome}</h3>

                <p>R$ ${produto.preco.toFixed(2)}</p>

                <a href="${produto.pagina}" style="text-decoration: none;">
                    <button class="btn">
                        Comprar
                    </button>
                </a>

            </div>

        </div>

        `;
    });
}


// =========================
// FILTROS
// =========================

function filtrar(categoria, event) {

    const botoes = document.querySelectorAll(".filtros button");

    botoes.forEach(btn => btn.classList.remove("ativo"));

    event.target.classList.add("ativo");

    if (categoria === "todos") {

        renderizarProdutos(produtos);

    } else {

        const filtrados = produtos.filter(produto =>
            produto.categoria === categoria
        );

        renderizarProdutos(filtrados);
    }
}


// =========================
// CARRINHO
// =========================

let carrinho = [];

function adicionarCarrinho(nome, preco) {

    carrinho.push({ nome, preco });

    console.log("Carrinho:", carrinho);

    alert(nome + " adicionado ao carrinho!");
}


// =========================
// INICIAR
// =========================

renderizarProdutos(produtos);