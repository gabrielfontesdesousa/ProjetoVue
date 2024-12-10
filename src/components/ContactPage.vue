<template>
  <main class="main">
    <div class="form-container">
      <form @submit.prevent="enviarMensagem" class="form">
        <div class="form-group">
          <label for="email">Entre em contato</label>
          <input v-model="contact.email" type="email" id="email" name="email" required placeholder="Email">
        </div>

        <div class="form-group">
          <label for="textarea">Como podemos ajudar?</label>
          <textarea v-model="contact.mensagem" name="textarea" id="textarea" rows="10" cols="50" required></textarea>
        </div>

        <button class="form-submit-btn" type="submit">Enviar</button>
      </form>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      contact: {
        email: '',
        mensagem: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
  async enviarMensagem() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(this.contact.email)) {
      this.errorMessage = 'Por favor, insira um email válido.';
      this.successMessage = '';
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/contatos', this.contact);
      this.successMessage = 'Mensagem enviada com sucesso!';
      this.contact = { email: '', mensagem: '' }; 
      this.errorMessage = '';
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      this.errorMessage = 'Erro ao enviar a mensagem. Tente novamente.';
      this.successMessage = '';
    }
  }
}
};
</script>

<style>
.main {
  background-color: #121212;
  height: 81vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
  width: 65vh;
  background: linear-gradient(#1c1c1c, #000000) padding-box,
    linear-gradient(145deg, transparent 35%, #0e0e0e, #2f2f2f) border-box;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 18px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 19px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #ffffff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #ffffff;
}

.form-container .form-submit-btn {
  display: flex;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: 18px;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 18px;
}

.form-submit-btn:hover {
  background-color: #ffffff;
  border-color: #fff;
  transition: all 0.5s;
  transform: all scale(1, 1);
  -webkit-transition: all 0.5s;
}

.form-group label {
  padding-bottom: 10px;
}

.success-message {
  color: #28a745;
  font-size: 16px;
  margin-top: 20px;
}

.error-message {
  color: #dc3545;
  font-size: 16px;
  margin-top: 20px;
}
</style>
