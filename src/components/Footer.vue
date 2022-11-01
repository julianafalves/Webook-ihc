<template>
  <div class="footer" style="position: relative;bottom: 0;left: 0; width: 100%; ">
    <div style="margin-top: auto;margin-bottom: auto; padding-left:10px ;">
      <img src="@/components/icons/icon.png" width="90px">
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" >Sobre nós</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" >Home</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" >Carrinho</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" >Perfil do cliente</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" >Biblioteca</h2>
    </div>
    <div class="txt-footer">
      <h2 class="txt-link" >Atendimento</h2>
    </div>
    
   
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
@import '../assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Grape+Nuts&family=Open+Sans&display=swap');

.footer {
  display: flex;
  justify-content: space-evenly;
  background-color: #FFD117;
  padding: 2em 0;
  color: black;
}

.txt-footer {
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: center;
  text-align: center;
  
}

.txt-link{
  font-family: 'Grape Nuts', cursive;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 24px;
}

.txt-link:hover {
  color: rgb(107, 107, 107);
  cursor: pointer;
}
</style>