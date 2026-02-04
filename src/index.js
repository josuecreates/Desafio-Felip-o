const heroilista = [
    {nome: 'flash', nivel: 9},
    {nome: 'batman', nivel: 10},
    {nome: 'mulher maravila', nivel: 1}
];

heroilista.sort((b, f) => f.nivel - b.nivel);

console.log(heroilista);