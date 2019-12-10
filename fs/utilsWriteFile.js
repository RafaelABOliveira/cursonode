const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const conteudo = `Criando um arquivo utilizando promisify do múdulo nativo util`;

writeFile('utilArquivo.txt', conteudo)
.then(()=>{
    console.log('Arquivo utilArquivo criado com sucesso!');
})
.catch((err)=>{
    console.log(`Deu erro: ${err}`);
})