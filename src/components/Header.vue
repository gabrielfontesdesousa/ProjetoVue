<template>
    <img src="../assets/fire.jpg" alt="" style="position: absolute; width: 100%; height: 19vh; opacity: 0.4; z-index: 1;">
    <div class="header">
        <img src="../assets/beefmathlogo.png" alt="">
        <nav>
            <h2>Seu churrasco, Nossa Conta!</h2>
        </nav>
    </div>

</template>
<script>

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .header {
    background-color: #ff0000;
    display: flex;
    width: 100%;
    height: 19vh;
    }


    @media screen and (max-width: 500px) {

    }
    div img {
        width: 7%;
        height: 70%;
        justify-content: center;
        margin-left: 18px;  
        z-index: 1;
    }
    div h2{
        color: white;
    }
    .header nav{
        width: 100%;
        height: 19vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10vh;
    }
    .header nav h2{
        font-family: 'Bebas Neue', serif;
        text-spacing-trim: 2px;
        font-size: 75px;
        z-index: 1;
    }
</style>