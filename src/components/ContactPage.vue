<template>
   
      <h1>Contate Nós</h1>
      <form action="contact" method="POST" class="form">

        <div class="input-container">
          <input type="text" name="nome" id="nome" placeholder="Nome Completo" required/>
          <input type="email" name="email" id="email" placeholder="E-mail" required/>
          <input type="text" name="assunto" id="assunto" placeholder="Assunto" required/>
          <button type="submit" class="btn">Enviar</button>
          <a href="https://api.whatsapp.com/send?phone=5511987437847&text=Ol%C3%A1%2C%20meu%20amigo!"><img class="wpp" src="../assets/whatsaap.png"></a>
        </div>

       
      </form>

  </template>
  
  <script>
  
  </script>
  
  <style>
h1 {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  font-family: Poppins;
  margin-top: 50px;
  padding: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.input-container {
  width: 100%;
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  font-family: Poppins;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #000000; 
  color: #ffffff; 
}

input:focus {
  outline: none;
  border-color: #000000;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-family: Poppins;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: #5c8dc2;
}

.wpp{
    margin-top: 5px;
    height: 25%;
    width: 25%;
}
  
  </style>
  