<template>
  <div class="management-page">
    <h1 style="font-weight: 700;">Gestão de Produtos</h1>

    <form @submit.prevent="handleSubmit" class="product-form">
      <h2 style="font-weight: 300;">{{ editing ? 'Editar Produto' : 'Adicionar Produto' }}</h2>
      <input style="font-weight: 200;" v-model="product.nome" type="text" placeholder="Nome" required />
      <textarea style="font-weight: 200;" v-model="product.descricao" placeholder="Descrição"></textarea>
      <input style="font-weight: 200;" v-model.number="product.preco" type="number" step="0.01" placeholder="Preço" required />
      <input style="font-weight: 200;" v-model.number="product.estoque" type="number" placeholder="Estoque" required />
      <input style="font-weight: 200;" v-model="product.imagem_url" type="text" placeholder="URL da Imagem" />
      <div class="ButtonDiv" style="display: flex; justify-content: center; width: 100%;">
        <button class="submitManagement" type="submit">{{ editing ? 'Salvar Alterações' : 'Adicionar Produto' }}</button>
      </div>
    </form>

    <div class="product-list">
      <h2 style="font-weight: 700;">Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prod in products" :key="prod.id">
            <td>{{ prod.id }}</td>
            <td>{{ prod.nome }}</td>
            <td>{{ prod.descricao }}</td>
            <td>R$ {{ parseFloat(prod.preco).toFixed(2) }}</td>
            <td>{{ prod.estoque }}</td>
            <td>
              <button style="background-color: black; color: white; border-radius: 10px;" @click="editProduct(prod)">Editar</button>
              <button style="background-color: black; color: white; border-radius: 10px;" @click="deleteProduct(prod.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ManagementPage",
  data() {
    return {
      products: [],
      product: {
        id: null,
        nome: "",
        descricao: "",
        preco: null,
        estoque: null,
        imagem_url: "",
      },
      editing: false, 
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/produtos");
        this.products = response.data;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    },

    async handleSubmit() {
      try {
        if (this.editing) {
          await axios.put(
            `http://localhost:3000/api/produtos/${this.product.id}`,
            this.product
          );
          alert("Produto atualizado com sucesso!");
        } else {
          await axios.post("http://localhost:3000/api/produtos", this.product);
          alert("Produto adicionado com sucesso!");
        }
        this.resetForm();
        this.fetchProducts();
      } catch (error) {
        console.error("Erro ao salvar produto:", error);
      }
    },

    editProduct(prod) {
      this.product = { ...prod };
      this.editing = true;
    },

    async deleteProduct(id) {
      if (!confirm("Deseja realmente excluir este produto?")) return;
      try {
        await axios.delete(`http://localhost:3000/api/produtos/${id}`);
        alert("Produto excluído com sucesso!");
        this.fetchProducts();
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
      }
    },

    resetForm() {
      this.product = {
        id: null,
        nome: "",
        descricao: "",
        preco: null,
        estoque: null,
        imagem_url: "",
      };
      this.editing = false;
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.management-page {
  padding: 20px;
  font-family: 'Poppins';
}

.product-form {
  margin-bottom: 30px;
}

.product-form input,
.product-form textarea,
.product-form button {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.product-list table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.product-list th,
.product-list td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.product-list button {
  display: flex;
  justify-content: space-around;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 100%;
  background: #313131;
  border: 1px solid #414141;
  padding: 6px 1px;
  font-size: 18px;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 18px;
}

.product-list button:hover{
  background-color: #ffffff;
  transition: all 0.5s;
  transform: scale(1.1);
  color: black;
  background-color: white;
}
.submitManagement{
  width: 100px;
  text-align: center;
  background-color:
  black; color:
  white;
  border-radius: 20px;
  margin-top: 30px;
}
.submitManagement:hover{
  transform: scale(1.01);
  transition: all 0.5s;
  
}
</style>
