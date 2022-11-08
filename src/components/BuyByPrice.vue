<template>
  <div class="buyByPrice">
    <div class="buyByPrice-title">
      <h1 id="buyByPrice-title-text">Compre por preço</h1>
    </div>
    <div class="buyByPrice-buttons">
      <button type="button" class="btn btn-primary buy-button btn-lg">Até R$ 10</button>
      <button type="button" class="btn btn-primary buy-button btn-lg">Até R$ 20</button>
      <button type="button" class="btn btn-primary buy-button btn-lg">Até R$ 30</button>
    </div>
  </div>
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";

export default {
  name: "buyByPrice",
  props: [],
  mounted() {
  },
  watch: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  .buy-button{
    padding: 20px 70px 20px 70px;
    font-size: 30px;
    border-radius:20px;
    background-color: #1722FF;
  }

  .buy-button:hover{
    background-color: #0915fd;
  }

  

  .buyByPrice-title{
    margin-bottom:80px;
  }

  #buyByPrice-title-text{
    margin-left:100px;
  }


  .buyByPrice-buttons{
    display: flex;
    justify-content: space-around;
    margin-left: 100px;
    margin-right: 100px;
  }

</style>
