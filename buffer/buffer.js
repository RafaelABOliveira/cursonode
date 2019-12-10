const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso Completo de NodeJS')

console.log(buf.toString());
console.log(buf.toString('utf161e'));

const buf_string = Buffer.from('Carregando String...', 'utf-8');

console.log(buf_string.toString('utf-8', 0, 10));