const mysql = require('mysql');

let db = mysql.createConnection({
    host        : 'localhost',
    user        : 'Oscar',
    password    : 'oscar',
    database    : 'agencia',
    // port        : 3305,
    dateStrings : true
});

db.connect((err)=>{
    if(err){
        console.log('Hubo error en la conexíon.');
        throw err;  
    } else {
        console.log('Está conectado!')
    }
})

module.exports = db;