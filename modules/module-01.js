console.log('Executando module-01.js')

const oculta = () => {
    console.log('Executando função oculta.')
}

executa = () => {
    console.log("Executando a função executa")
}

welcome = `Bem vindo ao módulo modulo-01.js`;

module.exports = {executa, welcome, oculta};