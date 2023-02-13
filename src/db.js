const express = require('express');
const mysql = require('mysql2');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '',
  database: 'product'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', function(req, res) {
  const name = req.body.name;
  const price = req.body.price;
  const image = req.body.image;

  const query = `
    INSERT INTO products (name, price, image)
    VALUES (?, ?, ?)
  `;

  connection.query(query, [name, price, image], function(error, results) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: 'Product uploaded successfully' });
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});