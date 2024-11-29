<template>
    <main>
        <div class="Catalogue">
            <main>
      <section id="catalog-section" class="dsc-container">
        <div class="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/air1.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom" >
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/air2.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/air3.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/tn1.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/tn2.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/tn3.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/tn4.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/tn5.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/tn6.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
          <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <a href=""><img src="../assets/mizuno1.png" alt="Computer" /></a>
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 397,00</h3>
              <h4>
                Air Max Tuned Air
              </h4>
              <button class="btnBuy">
                <a href="">Adicionar ao Carrinho</a>
              </button>
            </div>
          </div>
        </div>

        <div class="dsc-btn-next-page">Carregar mais</div>
      </section>
    </main>
        </div>
    </main>
</template>
<script>

</script>
<style>
    .Catalogue{
        width: 100%;
        height: 50vh;
        background-color: rgb(22, 22, 22);
    }
    
#catalog-section {
  padding: 20px 0;
  background-color: #ffffff;

}

.dsc-catalog-cards {
  margin-left: 6vh;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  background-color: #ffffff;
  margin-bottom: 0px;
  
}

.dsc-catalog-card-top {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #ffffff;


}

.dsc-catalog-card-top img {
  width: 45vh;
  height: 40vh;
  background-color: #ffffff;

}

.dsc-catalog-card-bottom {
  padding: 10px 20px;
  min-height: 110px;
  background-color: #ffffff;

}

.dsc-catalog-card-bottom h3 {
  color: var(--dsc-color-font-secondary);
  font-size: 24px;
  color: rgb(0, 0, 0);
  font-family: 'Poppins';
  font-weight: 700;
  background-color: #ffffff;
  margin-left: 84px;

}

.dsc-catalog-card-bottom h4 {
  color: var(--dsc-color-font-primary);
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-family: 'Poppins';
  font-weight: 400;
  background-color: #ffffff;
  margin-left: 84px;


}



/*botao comprar */

.btnBuy{
  margin-top: 15px;
  padding: 12.5px 30px;
  border: 0;
  border-radius: 100px;
  background-color: #000000;
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  text-decoration: none;
  margin-left: 74px;

}

.btnBuy:hover {
  background-color: #000000;
  box-shadow: 0 0 20px #000000;
  transform: scale(1.1);
  color: #ffffff;
  text-decoration: none;
  -webkit-transition: all 0.5s;

}
.btnBuy a{
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: 'Poppins';

}
.btnBuy a:hover{
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.btnBuy:active {
  background-color: #000000;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
  color: #ffffff;
  text-decoration: none;
}
</style>