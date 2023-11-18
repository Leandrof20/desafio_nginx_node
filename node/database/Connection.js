const mysql = require('mysql')

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)
connection.connect((error) => {
    if (error) {
       console.error('Erro ao conectar ao MySQL: ' + error);
       return;
    }
    console.log('Conexão bem sucedida ao MySQL.');
});

connection.query(`CREATE TABLE IF NOT EXISTS people (nome varchar(255))`)
connection.query(`INSERT INTO people values ('Leandro'),('João'),('Maria')`)

module.exports = connection