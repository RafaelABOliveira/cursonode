console.log(`Nome do ;arquivo: `, __filename);
console.log(`Diretório do Arquivo: `, __dirname);
console.log(`Diretório que foi invocado: `, process.cwd());
console.log(`S.O.: `, process.env.OS);
console.log(`USER: `, process.env.USERNAME);
console.log(`Language: `, process.env.LANG);
console.log(`Server name: `, process.env.COMPUTERNAME);

switch(process.argv[2]){
    case '-a': 
        console.log('Execute rotina principal');
        break;
    case '-i':
        console.log('Execute instalação');
    case '-q':
        console.log('Encerrando Aplicação');
        process.exit(); //encerra imediatamente o código
        break;
    default:
        console.log('Parâmetro inválido');
}

console.log(`Ambiente do Servidor: `, process.platform);