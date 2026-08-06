const pet = {
    nome: "Rex",
    especie: "Cachorro",
    raça: "Labrador",
    idade: 3,
};
pet.vacinado = true;
delete pet.raça;
console.log(pet);