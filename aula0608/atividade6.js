const bibliotecaJogos = [
    {
        titulo: "God Of War 1",
        genero: "Ação",
        preco: 150,
        zerado: false,
    },
    {
        titulo: "Terraria",
        genero: "Aventura",
        preco: 30,
        zerado: true,
    },
    {
        titulo: "Hollow Knight",
        genero: "Metroidvania",
        preco: 45,
        zerado: false,
    },
    {
        titulo: "Pokemon Emerald",
        genero: "RPG",
        preco: 20,
        zerado: true,
    }
]

let totalGasto = 0;

for (let jogo of bibliotecaJogos) {
    if (jogo.zerado) {
        console.log(`O jogo ${jogo.titulo} foi zerado`);
    }
    totalGasto += jogo.preco;
}

console.log(`Valor total gasto na biblioteca: R$ ${totalGasto}`);
