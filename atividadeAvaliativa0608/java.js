const notas = [
    {
        nota: 6,
    },
    {
        nota: 7,
    },
    {
        nota: 8,
    },
    {
        nota: 9,
    },
    {
        nota: 10,
    },
]
for(let prop in notas){
    console.log(`A ${prop}º é ${notas.nota}`);
}
const media = (notas[0].nota + notas[1].nota + notas[2].nota + notas[3].nota + notas[4].nota) / 5;
const soma = (notas[0].nota + notas[1].nota + notas[2].nota + notas[3].nota + notas[4].nota)
