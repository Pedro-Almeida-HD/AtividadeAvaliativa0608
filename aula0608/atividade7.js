const cardapio = [
    {
        id: 1,
        nome: "Coca-Cola",
        preco: 5.00,
        categoria: "Bebida",
    },
    {
        id: 2,
        nome: "Mini-Pizza",
        preco: 8.00,
        categoria: "Salgado",
    },
    {
        id: 3,
        nome: "Bombom",
        preco: 2.00,
        categoria: "Doce",
    }
]
console.log("01-Inserir novo produto: ");
console.log("02-Listar todos os produtos: ");
console.log("03-Buscar preco igual ou inferior a: ");
console.log("04-Buscar pelo nome: ");
console.log("05-Fechar programa: ");
while (true) {
    let opcao = prompt("Escolha uma opção: ");
    switch (opcao) {
        case "01":
            switch (prompt("Inserir novo produto? (s/n)")) {
                case "s":
                    let novoproduto = {
                    id: prompt("Digite o ID do produto: "),
                    nome: prompt("Digite o nome do produto: "),
                    preco: Number(prompt("Digite o preço do produto: ")), 
                    categoria: prompt("Digite a categoria do produto: "),
                }
                cardapio.push(novoproduto);
                break;
            case "n":
                break;
        }
        break;
    case "02":
        for (let produto of cardapio) {
            console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Preço: R$ ${produto.preco} - Categoria: ${produto.categoria}`);
        }
        break;
    case "03":
        let precobusca = Number(prompt("Digite o preço: "));
        for (let produto of cardapio) {
            if (produto.preco <= precobusca) {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Preço: R$ ${produto.preco} - Categoria: ${produto.categoria}`);
            }
        }
        break;
    case "04":
        let nomebusca = prompt("Digite o nome do produto: ");
        for(let produto of cardapio){
            if (produto.nome === nomebusca) {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Preço: R$ ${produto.preco} - Categoria: ${produto.categoria}`);
            }
        }
        break;
    case "05":
        console.log("Programa encerrado."); 
        break;
    default:
        console.log("Opção inválida.");
        break;
}
}


