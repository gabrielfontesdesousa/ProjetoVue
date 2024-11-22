<template>
    <header class="header">
            <nav>
                <ul style="display: flex; justify-content: space-between; align-items: center;">
                    <img class="Logo" src="../assets/vertus.png" alt="Vertus Store">
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Contato</a></li>
                    <input type="text" class="search" placeholder="Pesquisar">
                    <li><a href="carrinho"><img src="../assets/cart.png" alt=""></a></li>
                </ul>
            </nav>

    </header>

</template>

<script>

export default {
    name: 'NavPage',

}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.Body, *{
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: rgb(28, 28, 28);
}
.Logo{
    width: 7.5%;
    display: flex;
    flex-flow: wrap;
    margin-top: 0px;
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
ul li{
    list-style: none;   
}

.search{
    border: 0;
    font-family: 'Poppins';
    color: white;
    text-decoration: none;
    font-size: 17px;

}
ul li a img{
    width: 25%;
}

</style>
