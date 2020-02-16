var Pool = require('pg').Pool;
var connection = new Pool ({
    user: 'ssoro',
    host: 'localhost',
    database: 'travail',
    password: '12345',
    port: 5432
})

connection.connect((err, client, done) => {
    if(err) {
        console.log(err.stack)
    } else {
        console.log('✅ Connected to Database!')
    }
})

module.exports = connection;