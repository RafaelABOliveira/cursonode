function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Deu erro!')
}

function init(){
    try {
        execute()
    } catch (error) {
        console.log(`Temos um problema! ${e.message}`)
    }
}

init();
console.log('Depois do Erro');