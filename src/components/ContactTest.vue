<template>
    <div>
      <h2>Contato</h2>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          <p><strong>Nome:</strong> {{ contact.name }}</p>
          <p><strong>Email:</strong> {{ contact.email }}</p>
          <p><strong>Telefone:</strong> {{ contact.phone }}</p>
          <p><strong>Endereço:</strong> {{ contact.address }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        contacts: []
      };
    },
    async created() {
      await this.fetchContacts();
    },
    methods: {
      async fetchContacts() {
        try {
          const response = await axios.get('http://localhost:3000/api/contatos');
          this.contacts = response.data;
        } catch (error) {
          console.error('Erro ao buscar os dados de contato:', error);
        }
      }
    }
  };
  </script>