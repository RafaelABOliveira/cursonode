const fs = require("fs");


fs.readFile("arquivo.txt", (err, data)=> {
    if(err) throw err;
    console.log(data);
    fs.unlink("arquivo.txt", (unlikeErr)=> {
        if(unlikeErr) throw unlikeErr;
        console.log("Arquivo excluído");
    });
});