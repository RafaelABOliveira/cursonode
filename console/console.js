console.log('Exibindo mensagem no console!');

console.error(new Error('Exibindo mensagem de erro, temos problemas!'));

const carros = ['GM', 'FIAT', 'FORD', 'VW', 'RENAULT', 'HONDA'];

console.table(carros);

const dados = {name: 'Rafael Antonio', companies: 'FoxCorp'};

console.table(dados);

console.count('processo');
console.count('processo');
console.count('processo');

console.log('Resetando processo...');
console.countReset('processo');

console.count('processo');

console.time('contador');
for (let index = 0; index < 100; index++) {
    //console.log('-');
}

console.timeEnd('contador');

console.assert(true, 'Faça alguma coisa...');

console.assert(false, 'Ih rapaz %s, que pena!', 'não funcionou');

//Limpa todos dados do console
//console.clear();