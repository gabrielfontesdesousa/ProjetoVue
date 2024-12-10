const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.post('/api/contatos', (req, res) => {
  const { email, mensagem } = req.body;

  if (!email || !mensagem) {
    return res.status(400).send('Email e mensagem são obrigatórios.');
  }

  const query = 'INSERT INTO contatos (email, mensagem) VALUES (?, ?)';
  db.query(query, [email, mensagem], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      return res.status(500).send('Erro no servidor.');
    }
    res.status(201).send('Contato adicionado com sucesso!');
  });
});

app.post('/api/produtos', (req, res) => {
  const { nome, descricao, preco, estoque, imagem_url } = req.body;

  if (!nome || !preco || !estoque) {
    return res.status(400).send('Nome, preço e estoque são obrigatórios.');
  }

  const query = `INSERT INTO produtos (nome, descricao, preco, estoque, imagem_url) 
                 VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [nome, descricao, preco, estoque, imagem_url], (err, result) => {
    if (err) {
      console.error('Erro ao criar produto:', err);
      return res.status(500).send('Erro no servidor.');
    }
    res.status(201).send('Produto criado com sucesso!');
  });
});

app.get('/api/produtos', (req, res) => {
  const query = 'SELECT * FROM produtos';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar produtos:', err);
      return res.status(500).send('Erro no servidor.');
    }
    res.json(results);
  });
});

app.put('/api/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, estoque, imagem_url } = req.body;

  const query = `UPDATE produtos 
                 SET nome = ?, descricao = ?, preco = ?, estoque = ?, imagem_url = ?
                 WHERE id = ?`;

  db.query(query, [nome, descricao, preco, estoque, imagem_url, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar produto:', err);
      return res.status(500).send('Erro no servidor.');
    }
    res.send('Produto atualizado com sucesso!');
  });
});

app.delete('/api/produtos/:id', (req, res) => {
  const { id } = req.params;

  const queryCarrinho = 'DELETE FROM carrinho WHERE produto_id = ?';
  db.query(queryCarrinho, [id], (err, result) => {
    if (err) {
      console.error('Erro ao remover do carrinho:', err);
      return res.status(500).send('Erro no servidor.');
    }

    console.log('Produto removido do carrinho com sucesso.');

    const queryProduto = 'DELETE FROM produtos WHERE id = ?';
    db.query(queryProduto, [id], (err, result) => {
      if (err) {
        console.error('Erro ao deletar produto:', err);
        return res.status(500).send('Erro no servidor.');
      }

      res.send('Produto e suas referências no carrinho excluídos com sucesso!');
    });
  });
});


app.post('/api/carrinho', (req, res) => {
  const { produto_id, quantidade } = req.body;

  if (!produto_id || !quantidade) {
    return res.status(400).send('Produto e quantidade são obrigatórios.');
  }

  const queryProduto = 'SELECT preco, estoque FROM produtos WHERE id = ?';
  db.query(queryProduto, [produto_id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar produto:', err);
      return res.status(500).send('Erro no servidor.');
    }

    if (results.length === 0) {
      return res.status(404).send('Produto não encontrado.');
    }

    const produto = results[0];

    if (produto.estoque < quantidade) {
      return res.status(400).send('Estoque insuficiente.');
    }

    const totalPreco = produto.preco * quantidade;

    const queryCarrinho = `INSERT INTO carrinho (produto_id, quantidade, preco) 
                           VALUES (?, ?, ?)`;
    db.query(queryCarrinho, [produto_id, quantidade, totalPreco], (err, result) => {
      if (err) {
        console.error('Erro ao adicionar ao carrinho:', err);
        return res.status(500).send('Erro no servidor.');
      }

      const queryAtualizarEstoque = 'UPDATE produtos SET estoque = estoque - ? WHERE id = ?';
      db.query(queryAtualizarEstoque, [quantidade, produto_id], (err, result) => {
        if (err) {
          console.error('Erro ao atualizar estoque:', err);
          return res.status(500).send('Erro no servidor.');
        }
        res.status(201).send('Produto adicionado ao carrinho com sucesso!');
      });
    });
  });
});

app.get('/api/carrinho', (req, res) => {
  const query = `
    SELECT c.id, p.nome, c.quantidade, c.preco, c.quantidade * c.preco AS total
    FROM carrinho c
    JOIN produtos p ON c.produto_id = p.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar carrinho:', err);
      return res.status(500).send('Erro no servidor.');
    }
    res.json(results);
  });
});

app.delete('/api/carrinho/:produto_id', (req, res) => {
  const { produto_id } = req.params;  
  console.log('Removendo produto com ID:', produto_id);  
  
  const queryCarrinho = 'DELETE FROM carrinho WHERE produto_id = ?';
  db.query(queryCarrinho, [produto_id], (err, result) => {
    if (err) {
      console.error('Erro ao remover do carrinho:', err);
      return res.status(500).send('Erro no servidor.');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Produto não encontrado no carrinho.');
    }

    res.send('Produto removido do carrinho com sucesso!');
  });
});
