<template>
    <main>
        <div class="form-container">
      <p class="title">Bem-vindo!</p>
      <form class="form">
        <input type="email" class="input2" placeholder="Email">
        <input type="password" class="input2" placeholder="Senha">
        <p class="page-link">
          <span class="page-link-label">Esqueceu a senha?</span>
        </p>
        <button class="form-btn">Entrar</button>
      </form>
      <p class="sign-up-label">
        Não tem uma conta? <span class="sign-up-link">  Criar</span>
      </p>
      
    </div>
    </main>
</template>
<style>

main{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;  
    margin-top: 30vh;
    background-color: #000000;
    }
*{  
  background-color: #000000;
  
}
.form-container {
  width: 350px;
  height: 400px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  
  
}

.title {
  text-align: center;
  font-family: 'Poppins';
  margin: 10px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
  background-color: white;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
  background-color: white;
}

.input2 {
  border-radius: 20px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
  background-color: white;
  width: 100%;
}

.page-link {
  margin: 0;
  text-align: end;
  text-decoration-color: #747474;
  border: 0;
}
.page-link:hover{
    background-color: white;
}

.page-link-label {
    font-family: 'Poppins';
  font-size: 9px;
  font-weight: 700;
  color: aqua;
  background-color: white;
  text-decoration: none;
}

.page-link-label:hover {
  color: #000;
  text-decoration: none;
}

.form-btn {
  padding: 10px 15px;
  font-family: 'Poppins';
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0;
  font-size: 10px;
  color: #747474;
  font-family: 'Poppins';
    background-color: white;
}

.sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: 'Poppins';
  background-color: white;
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 15px;
  background-color: white;
}

.apple-login-button,
    .google-login-button {
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 11px;
  gap: 5px;
  color: #ffffff;

}
.google-login-button {
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';
  font-size: 11px;
  gap: 5px;
  color: #ffffff;
  background-color: teal;
  
}
.google-login-button svg, .span-google{
    background-color: teal;
    font-family: 'Poppins';

}

.apple-login-button {
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  font-family: 'Poppins';
}

.google-login-button {
  border: 2px solid #747474;
}

.apple-icon,
    .google-icon {
  font-size: 18px;
  margin-bottom: 1px;
}
.span-apple{
      font-family: 'Poppins';
}

</style>