const mysql = require('mysql');

let db = mysql.createConnection({
    host        : 'localhost',
    user        : 'Oscar',
    password    : 'oscar',
    database    : 'agencia',
    dateStrings : true
});

db.connect((err)=>{
    if(err){
        console.log('Hubo error en la conexíon.');
        throw err;  
    } 
})

module.exports = db;