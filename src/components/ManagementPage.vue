<template>
    <div class="container">
      <h2>Gerenciar Itens</h2>
      <form @submit.prevent="createItem">
      <input v-model="newItem" placeholder="Novo Item" />
      <input v-model="newItem" placeholder="Preço">
      <button @click="submit">Adicionar</button>
    </form>
  
     <ul>
        <li class="list" v-for="(item, index) in items" :key="index">
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
        try {
          const response = await axios.get('http://localhost:3000/api/items');
          this.items = response.data;

        } catch (error) {
          console.error("Erro ao buscar itens: ", error);
          alert("Não foi possível carregar os itens")
          
        }
        
      },
      async createItem() {

        if (!this.newItem.trim()) {
          alert("O nome do item não pode estar vazio.");
          return;
        }

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
        if (confirm("Você tem certeza que deseja excluir este item?")) {
        await axios.delete(`http://localhost:3000/api/items/${id}`);
        await this.fetchItems();
        }
      }
    }
  };
  </script>

  <style>



h2 {
  margin-top: 20px;
  text-align: center;
  color: #333;
}

.container {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #1f1f1f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #000000;
}

.list {
  list-style: none;
  padding: 0;

}

.list li {
  background-color: #f8f9fa;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list button {
  width: auto;
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #007BFF;
}

.list button:hover {
  background-color: #0056b3;
}

.list button:last-child {
  background-color: #dc3545;
}

.list button:last-child:hover {
  background-color: #c82333;
}




</style>