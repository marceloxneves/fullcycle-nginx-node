const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Fulano da Silva')`;
connection.query(sql);

connection.query('SELECT * FROM people', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);

    app.get('/', (req, res) => {
        res.send('<h1>Full Cycle Rocks!</h1> \n <h2>People</h2> \n <ul>' + rows.map(row => `<li>${row.name}</li>`).join('') + '</ul>');
      });
});

connection.end();

// app.get('/', (req, res) => {
//   res.send('<h1>Full Cycle</h1>');
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});