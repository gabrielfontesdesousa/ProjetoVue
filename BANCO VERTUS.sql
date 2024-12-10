-- Criação do banco de dados
drop database vertus_db;
create database vertus_db; 
Use vertus_db;

CREATE TABLE contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  mensagem TEXT NOT NULL,
  data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2) NOT NULL,
  estoque INT NOT NULL,
  imagem_url VARCHAR(255)
);
INSERT INTO produtos (nome, descricao, preco, estoque, imagem_url) VALUES
('Air Max Plus', 'Tênis Air Max Plus na cor preta e branca.', 500.00, 10, 'url_da_imagem'),
('Air Max 95 CORTEIZ', 'Tênis Air Max 95 CORTEIZ na cor preta.', 500.00, 10, 'url_da_imagem'),
('Air Max 97', 'Tênis Air Max 97 na cor branca.', 500.00, 10, 'url_da_imagem'),
('Air Max 97', 'Tênis Air Max 97 na cor preta.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus totalmente preto.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus totalmente branco.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus na cor rosa e preta.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus na cor preta com detalhes brancos.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus na cor azul e prata.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus na cor branca com detalhes vermelhos.', 500.00, 10, 'url_da_imagem');
INSERT INTO produtos (nome, descricao, preco, estoque, imagem_url) VALUES
('Air Max 95 CORTEIZ', 'Tênis Air Max 95 CORTEIZ na cor verde com detalhes amarelos.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus na cor azul com preto.', 500.00, 10, 'url_da_imagem'),
('Air Max Plus', 'Tênis Air Max Plus na cor roxa com detalhes laranjas.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor preta com detalhes azuis.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 totalmente preto.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor branca com detalhes azuis claros.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 totalmente branco.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor preta com detalhes amarelos.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor branca com detalhes roxos e vermelhos.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor preta com detalhes vermelhos.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor preta com detalhes azuis.', 500.00, 10, 'url_da_imagem'),
('Air Max Tn 3', 'Tênis Air Max Tn 3 na cor preta com detalhes laranjas.', 500.00, 10, 'url_da_imagem');

CREATE TABLE carrinho (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NOT NULL,
  quantidade INT NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
select * from contatos;
INSERT INTO contatos (email, mensagem) VALUES 
('joao.silva@email.com', 'Gostaria de saber mais sobre os seus serviços.'),
('ana.oliveira@email.com', 'Preciso de ajuda para concluir meu pedido.'),
('carlos.souza@email.com', 'Vocês têm suporte técnico 24h?'),
('mariana.almeida@email.com', 'Quando será a próxima promoção?'),
('fernando.lima@email.com', 'Tenho uma sugestão para melhorar o site.');


ALTER TABLE carrinho
DROP FOREIGN KEY carrinho_ibfk_1;  -- Remove a chave estrangeira existente

ALTER TABLE carrinho
ADD CONSTRAINT carrinho_ibfk_1
FOREIGN KEY (produto_id) REFERENCES produtos(id)
ON DELETE CASCADE;  -- Define a exclusão em cascata

DELETE FROM carrinho WHERE produto_id = 6


