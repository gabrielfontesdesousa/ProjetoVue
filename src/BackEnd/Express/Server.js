const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();


const db = mysql.createConnection({
  port: '3306',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vertus_db'
});


db.connect(err => {
  console.log('Conectado ao banco de dados!');
});


app.listen(4000, () => {
  console.log('Servidor rodando na porta 3000');
});

app.post('/api/produtos', (req, res) => {
    const { nome, descricao, preco, estoque } = req.body;
    const query = 'INSERT INTO produtos (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, descricao, preco, estoque], (err, result) => {
        alert("tooopp");

      if (err) throw err;
      res.status(201).send('Produto adicionado');
      alert("Produto adicionado")
    });
  });
  
  app.get('/api/produtos', (req, res) => {
    const query = 'SELECT * FROM produtos';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  app.delete('/api/produtos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM produtos WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.send('Produto excluído');
    });
  });
  
  app.post('/api/contato', (req, res) => {
    const { email, mensagem } = req.body;
    const query = 'INSERT INTO contato (email, mensagem) VALUES (?, ?)';
    db.query(query, [email, mensagem], (err, result) => {
      if (err) throw err;
      res.status(201).send('Mensagem enviada');
    });
  });
  
  app.get('/api/carrinho', (req, res) => {
    const query = 'SELECT c.*, p.nome, p.preco FROM carrinho c JOIN produtos p ON c.produto_id = p.id';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  app.post('/api/contatos', (req, res) => {
    const { email, mensagem } = req.body;
    const query = 'INSERT INTO contatos (email, mensagem) VALUES (?, ?)';
    db.query(query, [email, mensagem], (err, result) => {
      if (err) throw err;
      res.status(201).send('Mensagem enviada');
      alert("uhuuuul")
    });
  });