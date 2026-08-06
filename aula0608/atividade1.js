const perfilInstagram = {
    username: "@pedro",
    bio: "Gosto de Terraria",
    seguidores: 100,
    estaAtivo: 0,
};

console.log(`O usuário ${perfilInstagram.username} possui ${perfilInstagram.seguidores} seguidores.`);

perfilInstagram.seguidores = perfilInstagram.seguidores + 150;
console.log(perfilInstagram);