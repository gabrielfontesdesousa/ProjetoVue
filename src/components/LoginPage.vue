<template>
  <main class="main">
    <div class="Container">
      <h1>Iniciar Sessão</h1>
      <br />
      <ul>
        <router-link to="/HomePage">
          <a class="a-Login-Page" href="">Inicio|</a>
        </router-link>
        <router-link to="/LoginPage">
          <a class="a-Login-Page2" href="">Login</a>
        </router-link>
        <br />
      </ul>

      <!-- Adicionei @submit.prevent para chamar o método login ao enviar o formulário -->
      <form style="display: flex;" class="Container-Form" @submit.prevent="login">
        <h3></h3>
        <input v-model="email" class="inputLogin" placeholder="Usuário" type="text" />
        <br /><br />
        <h3></h3>
        <input v-model="password" class="inputLogin" placeholder="Senha" type="password" />
        <div class="ForgotContainer">
          <a href=""><span>Esqueceu sua senha?</span></a>
        </div>
      </form>

      <div class="ButtonLogin">
        <!-- Botão de login já dispara o envio do formulário por estar dentro do form -->
        <button type="submit" class="btnLogin">Entrar</button>
        <button class="btnLogin2">Criar Conta</button>
        <p>{{ message }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  }
};
</script>

<style scoped>
/* Suas estilizações existentes já estão ótimas e foram mantidas */
.ForgotContainer {
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 73%;
  margin-top: 20px;
}
.ForgotContainer {
  font-family: 'Poppins';
  text-decoration: none;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8vh;
  background-color: #131313;
  height: 82vh;
}
.inputLogin {
  margin-left: 5vh;
  width: 70vh;
  background-color: #f5f5f5;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
}
body {
  background-color: #000000;
}
input:focus {
  border-bottom: 4px solid #aeaeae;
  border-radius: 4px 4px 2px 2px;
}
input:hover {
  outline: 2px solid #aeaeae;
}
.Container {
  margin-bottom: 40px;
  width: 90vh;
  height: 65vh;
  background-color: #000000;
  border-radius: 5vh;
}
.Container h1 {
  font-family: 'Poppins';
  font-weight: 700;
  text-align: center;
  padding-top: 6vh;
  color: white;
}
.a-Login-Page {
  font-family: 'Poppins';
  font-weight: 700;
  margin-left: 8vh;
  text-decoration: none;
  color: white;
}
.a-Login-Page2 {
  color: white;
  font-family: 'Poppins';
  font-weight: 700;
  text-decoration: none;
}
.Container-Form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.btnLogin {
  width: 10.5em;
  height: 2.6em;
  margin: 0.5em;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 0.825em;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.btnLogin:hover {
  color: rgb(255, 255, 255);
}
.btnLogin:after {
  content: "";
  background: #000000;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-50deg) scale(0, 1.1);
  transition: all 0.5s;
}
.btnLogin:hover:after {
  transform: skewX(-45deg) scale(1, 10);
  transition: all 0.5s;
}
.ButtonLogin {
  display: flex;
  width: 100%;
  padding-top: 10vh;
  justify-content: center;
}
.btnLogin2 {
  width: 10.5em;
  height: 2.6em;
  margin: 0.5em;
  background: rgb(41, 41, 41);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 0.825em;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.btnLogin2:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  transition: all 0.5s;
}
</style>
