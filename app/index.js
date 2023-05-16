const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
  port: 3306
});

async function handleQuery(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, function (error, results, fields) {
      if (error) {
        console.log(error);
        if (error.code == "ECONNREFUSED")
          return reject(new Error('Aguardando Conexão Com Bando de Dados! Tente novamente mais tarde'));
        return reject(new Error("Erro ao acessar banco de dados!"));
      }
      return resolve(results);
    });

  });

}

app.get('/', async (req, res) => {
  const query = `Select * from people`;

  try {
    const peoples = await handleQuery(query);
    const peoplesList = peoples.map(p => `<li>${p.name}</li>`);

    const response = `
    <h1>Full Cycle Rocks!</h1>
    <ul>${peoplesList.map(people => people).join(' ')}<ul>
    `

    return res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`server listening in port ${port}`);
});