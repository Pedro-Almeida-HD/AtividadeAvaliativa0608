const vetor = []
const playlist = [
    {
        musica: "Highway to Hell",
        cantor: "AC/DC",
        duracaoSegundos: 210,
    },
    {
        musica: "Wonder of You",
        cantor: "Elvis Presley",
        duracaoSegundos: 180,
    },
    {
        musica: "I want to break free",
        cantor: "Queen",
        duracaoSegundos: 240,
    },
];
vetor.push(playlist[0]);
vetor.push(playlist[1]);
vetor.push(playlist[2]);
playlist[3] = {
    musica: "Staying Alive",
    cantor: "Bee Gees",
    duracaoSegundos: 200,
};
vetor.push(playlist[3]);
if(playlist[0].duracaoSegundos > 180){
    console.log(`As músicas ${playlist[0].musica} têm mais de 180 segundos.`);
}
if(playlist[1].duracaoSegundos > 180){
    console.log(`As músicas ${playlist[1].musica} têm mais de 180 segundos.`);
}
if(playlist[2].duracaoSegundos > 180){
    console.log(`As músicas ${playlist[2].musica} têm mais de 180 segundos.`);
}
if(playlist[3].duracaoSegundos > 180){
    console.log(`As músicas ${playlist[3].musica} têm mais de 180 segundos.`);
}