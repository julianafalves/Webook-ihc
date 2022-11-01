<template>
    <div class="banner">
        <div class="banner-img-txt">
            <img  src="../components/icons/party.png"  class="circle-icon">
            <p>Lançamentos</p>
        </div>
        <div class="banner-img-txt">
            <img  src="../components/icons/livro.png"  class="circle-icon">
            <p>Minha Biblioteca</p>
        </div>
        <div class="banner-img-txt">
            <img  src="../components/icons/promotions.png"  class="circle-icon">
            <p>Promoções</p>
        </div>
        <div class="banner-img-txt">
            <img  src="../components/icons/gift.png"  class="circle-icon">
            <p>Dicas de presente</p>
        </div>
         <div class="banner-img-txt">
            <img  src="../components/icons/price-tag.png"  class="circle-icon">
            <p>Mais vendidos</p>
        </div>
      

        
    </div>
</template>


<style scoped>

.banner{
    background-color: #ffd117;
    height: 25vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-self: center;
    margin-bottom: 50px;
    vertical-align: middle;
}

.banner-img-txt{
    height: 15vh;
    display: flex;
    align-content: center;
    align-self: center;
    flex-direction: column;
    text-align: center;

    font-family: 'Grape Nuts', cursive;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.banner-img-txt:hover{
    cursor: pointer;
    
}

.circle-icon {
    background: #fcfcfc;
    padding:30px;
    border-radius: 50%;
     height: 15vh;
}

.circle-icon:hover{
    background: #e6e5e5;
}
</style>