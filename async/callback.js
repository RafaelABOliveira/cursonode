function soma(x, callback){
    return setTimeout(()=> {
        return callback(null, x + 5000);
    }, 3000);
};

//callback function
function resolveSoma(err, result){
    if(err) throw err;
    console.log(result);
};

soma(2000, resolveSoma);