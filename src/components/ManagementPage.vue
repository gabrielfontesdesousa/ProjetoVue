<template>
    <div>
      <h2>Gerenciar Itens</h2>
      <input v-model="newItem" placeholder="Novo Item" />
      <button @click="createItem">Adicionar</button>
  
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item.name }}
          <button @click="updateItem(item)">Atualizar</button>
          <button @click="deleteItem(item.id)">Excluir</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newItem: '',
        items: []
      };
    },
    async created() {
      await this.fetchItems();
    },
    methods: {
      async fetchItems() {
        const response = await axios.get('http://localhost:3000/api/items');
        this.items = response.data;
      },
      async createItem() {
        const newItem = { name: this.newItem };
        await axios.post('http://localhost:3000/api/items', newItem);
        this.newItem = '';
        await this.fetchItems();
      },
      async updateItem(item) {
        item.name = prompt('Atualize o nome do item:', item.name);
        await axios.put(`http://localhost:3000/api/items/${item.id}`, item);
        await this.fetchItems();
      },
      async deleteItem(id) {
        await axios.delete(`http://localhost:3000/api/items/${id}`);
        await this.fetchItems();
      }
    }
  };
  </script>