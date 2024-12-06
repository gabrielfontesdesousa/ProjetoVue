<template>
  <div>
    <h1>Produtos</h1>
    <form @submit.prevent="adicionarProduto">
      <input v-model="produto.nome" placeholder="Nome do Produto" required />
      <input v-model="produto.descricao" placeholder="Descrição" required />
      <input v-model="produto.preco" type="number" step="0.01" placeholder="Preço" required />
      <input v-model="produto.estoque" type="number" placeholder="Estoque" required />
      <button type="submit">Adicionar Produto</button>
    </form>

    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <div>{{ produto.nome }} - R$ {{ produto.preco }}</div>
        <button @click="editarProduto(produto)">Editar</button>
        <button @click="excluirProduto(produto.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: [],
      produto: {
        nome: '',
        descricao: '',
        preco: 0,
        estoque: 0
      }
    };
  },
  methods: {
    async carregarProdutos() {
      const res = await fetch('http://localhost:3000/api/produtos');
      this.produtos = await res.json();
    },
    async adicionarProduto() {
      const res = await fetch('http://localhost:3000/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.produto)
      
      }
    );
      if (res.ok) {
        this.carregarProdutos();
      }
    },
    async editarProduto(produto) {
      this.produto = { ...produto };
    },
    async excluirProduto(id) {
      await fetch(`http://localhost:3000/api/produtos/${id}`, {
        method: 'DELETE'
      });
      this.carregarProdutos();
    }
  },
  created() {
    this.carregarProdutos();
  }
};
</script>
