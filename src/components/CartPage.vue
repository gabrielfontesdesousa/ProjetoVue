<template>
    <div class="cart-page">
      <h1 style="font-family: 'Poppins'; font-weight: bold;">Carrinho de Compras</h1>
  
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço Unitário</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="item.id">
            <td>{{ item.nome }}</td>
            <td>
              <input 
                type="number" 
                v-model.number="item.quantidade" 
                min="1" 
                @change="updateCart(item)"
              />
            </td>
            <td>R$ {{ Number(item.preco).toFixed(2) }}</td>
            <td>R$ {{ (Number(item.preco) * item.quantidade).toFixed(2) }}</td>
            <td>
              <button @click="removeFromCart(item.id, index)">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="cart-total">
        <h3 style="font-weight: 300;">Total do Carrinho: R$ {{ cartTotal.toFixed(2) }}</h3>
      </div>
  
      <div class="add-to-cart">
        <h2 style="font-weight: bold;"> Adicionar Produto ao Carrinho</h2>
        <select v-model="selectedProduct">
          <option disabled value="">Selecione um produto</option>
          <option v-for="product in products" :key="product.id" :value="product">
            {{ product.nome }} - R$ {{ Number(product.preco).toFixed(2) }}
          </option>
        </select>
        <input 
          type="number" 
          v-model.number="quantityToAdd" 
          min="1" 
          placeholder="Quantidade" 
        />
        <button @click="addToCart">Adicionar</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "CartPage",
    data() {
      return {
        products: [], 
        cart: [],
        selectedProduct: "", 
        quantityToAdd: 1, 
      };
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => {
          return total + Number(item.preco) * item.quantidade;
        }, 0);
      },
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get("http://localhost:3000/api/produtos");
          this.products = response.data.map(product => ({
            ...product,
            preco: Number(product.preco), 
          }));
        } catch (error) {
          console.error("Erro ao buscar produtos:", error);
        }
      },
      async fetchCart() {
        try {
          const response = await axios.get("http://localhost:3000/api/carrinho");
          this.cart = response.data.map(item => ({
            ...item,
            preco: Number(item.preco), 
          }));
        } catch (error) {
          console.error("Erro ao buscar carrinho:", error);
        }
      },
      async addToCart() {
        if (!this.selectedProduct || this.quantityToAdd < 1) {
          alert("Selecione um produto e insira uma quantidade válida.");
          return;
        }
  
        const { id, preco } = this.selectedProduct;
  
        try {
          await axios.post("http://localhost:3000/api/carrinho", {
            produto_id: id,
            quantidade: this.quantityToAdd,
            preco,
          });
  
          this.fetchCart(); 
          this.selectedProduct = "";
          this.quantityToAdd = 1;
          alert("Produto adicionado ao carrinho com sucesso!");
        } catch (error) {
          console.error("Erro ao adicionar produto ao carrinho:", error);
        }
      },
      async removeFromCart(cartItemId, index) {
        try {
          const response = await axios.delete(`http://localhost:3000/api/carrinho/${cartItemId}`);
          
          if (response.status === 200) {
            this.cart.splice(index, 1); 
            alert("Produto removido do carrinho.");
          } else {
            alert("Falha ao remover o produto.");
          }
        } catch (error) {
          console.error("Erro ao remover produto do carrinho:", error);
          alert("Erro ao remover produto.");
        }
      },
      async updateCart(item) {
        try {
          await axios.put(`http://localhost:3000/api/carrinho/${item.id}`, {
            quantidade: item.quantidade,
            preco: item.preco,
          });
  
          this.fetchCart();
        } catch (error) {
          console.error("Erro ao atualizar carrinho:", error);
        }
      },
    },
    mounted() {
      this.fetchProducts();
      this.fetchCart();
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding: 20px;
    font-family: 'Poppins';
    min-height: 81vh;
    max-height: 180vh;
  }
  
  table {
    margin-top: 3%;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    font-family: 'Poppins';
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    font-family: 'Poppins';

  }
  
  .cart-total {
    font-size: 18px;
    font-weight: bold;
    margin-top: 3%;
  }
  
  .add-to-cart {
    margin-top: 3%;
  }
  
  button {
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    background-color: black
  }
  option{
    border-radius: 10px;
  }
  </style>
  