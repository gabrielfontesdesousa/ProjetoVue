
<template>
  
    <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    </head>
    <img style="margin: 20px 0px 0px 20px; width: 6%; position: absolute; background-color: black;" src="../assets/logo.png" alt="Vertus Store">
    <header class="header">
            <nav>
                <ul style="margin-left: 20rem; display: flex; gap: 20px; align-items: center;   background-color: #000000;
">
                    <li>
                      <router-link to="/HomePage">
                        <a class="btn-login" href="">Home</a>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/ManagementPage">
                        <a class="btn-login" href="">Gerenciar</a>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/AboutUsPage">
                        <a class="btn-sobre">Sobre nós</a>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/ContactPage" class="">
                        <a class="btn-contato" href="">Contato</a>
                    </router-link>

                    </li>
                    <ul style="display: flex; align-items: center;width: 65%; height: 50px; flex-direction: row-reverse;">
                    <li>
                      <router-link to="/CartPage">
                          <a class="btn-carrinho" href="carrinho"><img style="background-color: black;" src="../assets/cart.png" alt=""></a>
                      </router-link>
                    </li>
                    <router-link to="/LoginPage">
                          <a class="btn-login" href="">Login</a>
                        </router-link>
                    <li style="align-items: center; margin-right: 40px; height: 50px;">
                        <div class="input-wrapper">
                        <button class="icon">
                            <img style="width: 5rem; background-color: black;" src="../assets/lupa.png" alt="">
                        </button>
                        <input type="text" name="text" class="input" placeholder="Procurar..." />
                    </div>
                    </li>
                    
                </ul>
                </ul>
            </nav>

    </header>

</template>

<script>
  export default {
      name: 'Header'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


header{
    width: 100%;
    height: 19vh;
    background-color: rgb(0, 0, 0);
}
nav, ul{
  height: auto;
  background-color: #000000;
  padding-top: 2vh;
}

.Logo{
    width: 7.5%;
    display: flex;
    flex-flow: wrap;
    margin-top: 30px;
    margin-left: 20px;
    
}

ul li a{
    text-decoration: none;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 17px;
    
}
ul li a img{
  background-color: #000000;

}

ul li{
    list-style: none;   
}

.search{
    border: 0;
    font-family: 'Poppins';
    color: white;
    text-decoration: none;
    font-size: 17px;
    background-color: black ;

}
ul li a img{
    width: 25%;
}


/*sobre botao*/

.btn-sobre{
    width: 21vh;
    appearance: none;
    background-color: transparent;
    border: 0.15rem solid #ffffff;
    border-radius: 1.8rem;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
}
.btn-sobre:disabled {
 pointer-events: none;
}

.btn-sobre:hover {
 color: #000000;
 background-color: #ffffff;
 box-shadow: rgba(255, 255, 255, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

.btn-sobre:active {
 box-shadow: none;
 transform: translateY(0);
}


/*login botao*/
.btn-login{
    appearance: none;
    background-color: transparent;
    border: 0.15rem solid #ffffff;
    border-radius: 1.8rem;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
}
.btn-login:disabled {
 pointer-events: none;
}

.btn-login:hover {
 color: #000000;
 background-color: #ffffff;
 box-shadow: rgba(255, 255, 255, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

.btn-login:active {
 box-shadow: none;
 transform: translateY(0);
}



/*botao contato*/
.btn-contato{
    appearance: none;
    background-color: transparent;
    border: 0.15rem solid #ffffff;
    border-radius: 1.8rem;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.3em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
}
.btn-contato:disabled {
 pointer-events: none;
}

.btn-contato:hover {
 color: #000000;
 background-color: #ffffff;
 box-shadow: rgba(255, 255, 255, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

.btn-contato:active {
 box-shadow: none;
 transform: translateY(0);
}


/*BARRA DE PROCURA*/

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
}

.input {
  border-style: none;
  height: 50px;
  width: 230px;
  padding: 10px;
  outline: none;
  border-radius: 50px;
  transition: 0.5s ease-in-out;
  background-color: transparent;
  box-shadow: 0px 0px 3px #000000;
  padding-right: 40px;
  color: #fff;
  background-color: white;
}

.input::placeholder,
.input {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 17px;
}

.input::placeholder {
  color: #8f8f8f;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -25px;
  cursor: pointer;
  width: 80px;
  height: 50px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s linear;
  border-color: #ffffff;
  border: #ffffff ;
}

.icon:focus ~ .input,
.input:focus {
  box-shadow: none;
  width: 250px;
  border-radius: 20px;
  border-bottom: 3px transparent;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  color: #000000;

}

</style>
