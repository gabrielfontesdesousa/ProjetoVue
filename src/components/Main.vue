<template>
    <main>
        <div class="Container">
            <img src="../assets/barbecue.png" alt="">
            <div>
                <h1>Planeje o churrasco sem stress: calcule a quantidade certa de tudo!</h1>
                <div></div>
            </div>
            <div class="calc-button-area">
                <button>Calcular</button>
            </div>
        </div>
        <div class="Container2">
            <div class="input-section-sliders">
                <div class="slider-container">
                    <h1>Quantidade de Comilões</h1>
                    <div class="slider-wrapper">
                        <input 
                            type="range" 
                            id="eaters-slider" 
                            :min="min" 
                            :max="max" 
                            :step="step" 
                            v-model="eatersValue" 
                            @input="updateValue('eatersValue')"
                        />
                        <span id="slider-value">{{ eatersValue }}</span>
                    </div>
                </div>

                <div class="slider-container">
                    <h1>Quantidade de Adultos</h1>
                    <div class="slider-wrapper">
                        <input 
                            type="range" 
                            id="men-slider" 
                            :min="min" 
                            :max="max" 
                            :step="step" 
                            v-model="menValue" 
                            @input="updateValue('menValue')"
                        />
                        <span id="slider-value">{{ menValue }}</span>
                    </div>
                </div>


                <div class="slider-container">
                    <h1>Quantidade de Crianças</h1>
                    <div class="slider-wrapper">
                        <input 
                            type="range" 
                            id="children-slider" 
                            :min="min" 
                            :max="max" 
                            :step="step" 
                            v-model="childrenValue" 
                            @input="updateValue('childrenValue')"
                        />
                        <span id="slider-value">{{ childrenValue }}</span>
                    </div>
                </div>
            </div>
           
        </div>
    </main>
    
    
</template>
<script>
export default {
  data() {
    return {
      eatersValue: 0, // Valor inicial para comilões
      menValue: 0, // Valor inicial para homens
      childrenValue: 0, // Valor inicial para mulheres
      min: 0,
      max: 60,
      step: 1
    };
  },
  methods: {
    updateValue(slider) {
      // Salva o valor correspondente no localStorage
      localStorage.setItem(slider, this[slider]);
    }
  },
  mounted() {
    // Recupera os valores armazenados ao carregar o componente
    const storedEatersValue = localStorage.getItem("eatersValue");
    const storedMenValue = localStorage.getItem("menValue");
    const storedChildrenValue = localStorage.getItem("childrenValue");

    if (storedEatersValue) {
      this.eatersValue = parseInt(storedEatersValue, 10);
    }
    if (storedMenValue) {
      this.menValue = parseInt(storedMenValue, 10);
    }
    if (storedChildrenValue) {
      this.childrenValue = parseInt(storedChildrenValue, 10);
    }
  }
};
</script>
<style>

/**/
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

main{
    box-sizing: border-box;
}
.Container{
    display: flex;
    width: 50%;
    height: 84vh;
    background-color: red;
    float: right;
    box-sizing: border-box;
    flex-direction: column;
}
.Container img{
    width: 100%;
    height: 32%;
    opacity: 0.7;
    box-shadow: #00000052;
    margin: 0;
}
.Container2{
    width: 50%;
    height: 83vh;
    display: flex;
    background-color: white;
}
.Container h1{
    font-family: 'Bebas Neue', serif;
    color: white;
    font-size: 55px;
    padding: 5vh;
}
.Container div div{
    background-color: black;
    height: 7px;
    width: 50%;
    margin-left: 5.5vh;
}
.calc-button-area{
    display: flex;
    margin-top: 10vh;
    margin-left: 5vh;
}


/*inputs*/



.input-section-sliders{
    padding-top: 15vh;
    gap: 12vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}
.slider-container {
  width: 80vh;
  font-family: 'Bebas Neue', serif;
  font-size: 1.7rem;
  height: 100px;
  

}

.slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  margin-top: 35px;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  background: #ddd;
  border-radius: 4px;
  border: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background: red;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
}

#slider-value {
  position: absolute;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 50%;
  font-weight: bold;
  font-family: 'Bebas Neue', serif;
  top: -25px;
}




















/* BOTAO CALCULAR*/
button {
  padding: 17.5px 60px;
  border: 0;
  border-radius: 100px;
  background-color: #000000;
  color: #ffffff;
  font-weight: Bold;
  font-family: 'Bebas Neue', serif;
  transition: all 0.5s;
  font-size: 2.2rem;
  -webkit-transition: all 0.2s;
  border-color: #000000;

}

button:hover {
  background-color: #550000;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);

}

button:active:focus {
  background-color: #460000;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
  transform: scale(0.98);
  border-color: #000000;
}



</style>