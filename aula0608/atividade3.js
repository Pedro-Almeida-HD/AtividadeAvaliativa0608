const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    nivelBateria: 67,
    espaçoLivreGB: 64,
}
for(let prop in celular){
    console.log(`O celular tem essa caracteristica: ${celular[prop]}`);
}
celular.nivelBateria = celular.nivelBateria - 10;
celular.espacoLivreGB = celular.espacoLivreGB - 32;
for(let prop in celular){
    console.log(`O celular tem essa caracteristica: ${celular[prop]}`);
}