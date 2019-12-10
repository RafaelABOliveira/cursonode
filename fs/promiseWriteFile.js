const {writeFile} = require('fs');

function criaArquivo(name, content){
    return new Promise((resolve, reject)=>{
        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}

criaArquivo('promiseArquivo.txt', 'Criando arquivo com promises.')
    .then(() => console.log('Arquivo promiseArquivo criado com sucesso'))
    .catch(err => console.log(err))