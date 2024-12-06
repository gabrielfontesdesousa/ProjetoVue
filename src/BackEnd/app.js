const connection = require('./db');

function createItem(nome,preco) {
  const query = 'INSERT INTO items (nome, preco) VALUES (?) (?)';
  connection.query(query, [nome,preco], (error, results) => {
    if (error) throw error;
    console.log('Item criado:', results.insertId);
  });
}

function readItems() {
    const query = 'SELECT * FROM items';
    connection.query(query, (error, results) => {
      if (error) throw error;
      console.log('Itens:', results);
    });
  }

  function updateItem(id, nome) {
    const query = 'UPDATE items SET nome = ? WHERE id = ?';
    connection.query(query, [nome, id], (error, results) => {
      if (error) throw error;
      console.log('Item atualizado:', results.affectedRows);
    });
  }

  function deleteItem(id) {
    const query = 'DELETE FROM items WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) throw error;
      console.log('Item excluído:', results.affectedRows);
    });
  }
    
  