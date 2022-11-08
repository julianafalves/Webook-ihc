<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="overflow: visible"
  >
    <div class="container-fluid">
      <a class="navbar-brand" @click="goToHome()"
        ><img
          class="img-navbar navbar-brand"
          src="@/components/icons/icon.png"
          style="position: absolute;
width: 150px;
height: 122.91px;
left: 149px;
top: 0px;"
      /></a>
     
      <select
        v-if="plotDropDown"
        ref="drop"
        name="livros"
        id="book-select"
        style="position: absolute;
width: 389px;
height: 68px;
left: 327px;
top: 24px;
"
      
        class="form-select form-select-lg mb-3"
        @change="filter(this.$refs.drop.value)"
        v-model="this.dropdownCategory"
      >
        <option value="-1" disabled hidden selected>
          Selecione a categoria
        </option>
        <option value="-2">Todos os livros</option>
        <option
          v-for="categorie in getAllCategories()"
          v-bind:value="categorie.id"
        >
          {{ categorie.name }}
        </option>
      </select>
      <div>
        <div class="input-group" style="position: absolute;
width: 628px;
height: 65.9px;
left: 744px;
top: 31.32px;


transform: rotate(-0.12deg);">
          <input
            type="text"
            class="form-control"
            placeholder="Busque um livro"
            style="height: 60px; width: 400px;"
            v-model="textSearch"
            @focusout="active = false"
          />
          <span
            class="input-group-text"
            style="max-height: 60px; max-width: 60px"
            ><img src="@/components/icons/research.png"
          /></span>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="display: none"
            ref="btnDrop"
          >
            Dropdown button
          </button>
          <p />
        
        </div>
      </div>
      <a
        v-if="!hadUser()"
        class="navbar-brand"
        @click="goToLogin()"
        style="position: absolute;
              width: 88px;
              height: 62px;
              left: 1509px;
              top: 31px;"
        ><img
          class="img-navbar navbar-brand"
          src="@/components/icons/Vector.png"
          style="width: 46px; height: 42px; padding: 5px; vertical-align: middle "
      /><span class="txt-navbar">Entrar</span></a>
      
      <a v-else class="navbar-brand" @click="logout()" style="height: 120px !important"
        ><img
          class="img-navbar navbar-brand"
          src="@/components/icons/logout.png"
          style=" height: 60px; padding: 5px"
      /></a>

       <a class="navbar-brand" @click="goToBiblioteca()" style="position: absolute;
width: 88px;
height: 62px;
left: 1597px;
top: 31px;"
        ><img
          class="img-navbar navbar-brand"
          src="@/components/icons/Carrinho.png"
          style="width: 46px; height: 42px; padding: 5px; vertical-align: middle "
        /><span class="txt-navbar">Carrinho</span></a>

      <a class="navbar-brand" @click="goToCarrinho()" style="position: absolute;
width: 88px;
height: 62px;
left: 1687px;
top: 31px;"
        ><img
          class="img-navbar navbar-brand"
          src="@/components/icons/Book Shelf.png"
          style="width: 46px; height: 42px; padding: 5px; vertical-align: middle "
        /><span class="txt-navbar">Biblioteca</span>
      </a>
      
    </div>
  </nav>
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";

export default {
  name: "menu",
  props: ["plotDropDown", "filter", "actualCategory"],
  mounted() {
    if (this.actualCategory !== undefined)
      this.dropdownCategory = this.actualCategory;
  },
  watch: {
    textSearch(newText, oldText) {
      if (!this.active) {
        this.$refs.btnDrop.click();
        this.active = true;
      }
    },
  },
  data() {
    return {
      dropdownCategory: -1,
      textSearch: "",
      active: false,
    };
  },
  methods: {
    goToBook(idLivro) {
      this.$router.push({ path: "/livro", query: { id: idLivro } });
    },
    logout() {
      VueCookieNext.removeCookie("account");
      this.$router.go(0);
    },
    hadUser() {
      return VueCookieNext.getCookie("account") !== null;
    },
    getAllBooks() {
      return JSON.parse(localStorage.getItem("books"));
    },
    getMatchedBooks() {
      if (this.textSearch === "") return this.getAllBooks();
      let regex = new RegExp("(" + this.textSearch.toLowerCase() + ")");
      let matchedBooks = [];
      let books = this.getAllBooks();
      for (const book of books) {
        if (regex.exec(book.name.toLowerCase()) !== null) {
          matchedBooks.push(book);
        }
      }
      return matchedBooks;
    },
    goToHome() {
      this.$router.push("/");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToCarrinho() {
      this.$router.push("/carrinho");
    },
    goToBiblioteca() {
      this.$router.push("/biblioteca");
    },
    getAllCategories() {
      return JSON.parse(localStorage.getItem("categories"));
    },
  },
};
</script>

<style scoped>
img {

  height: 100%;

}

.navbar {
  z-index: 500000;
  justify-content: space-between;
  overflow: hidden;
  background-color: #ffd117 !important;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  display: flex;
  position: absolute;
  height: 122px;
  left: 0px;
  align-items: center;
  font-family: "Grape Nuts", cursive;
  font-family: "Open Sans", sans-serif;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  align-items: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  height: 11vh;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: #c7a312;
  color: black;
}

.navbar-brand{
  height: 400px;

}

.navbar-brand:hover {
  cursor: pointer;
}

#book-select {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
  width: 350px;
  height: 50px;
  border-radius: 8px;
  text-decoration: none;
  padding: 8px 12px;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}

#input-container {
  position: relative;
  margin-left: 40px;
}

.research {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.05);
  width: 350px;
  height: 30px;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px 12px;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  font-size: 1.5vw;
}

#input-container > img {
  position: absolute;
  top: 10px;
  left: 30px;
  width: 30px;
}

#input-container > input {
  padding-left: 40px;
}

.txt-navbar {
  letter-spacing: 0;
  line-height: normal;
  min-height: 16px;
  text-align: center;
  width: 88px;
}

.navigate a {
  margin: 0 1em;
  padding: 1em 0;
}

.navigate-button a {
  text-decoration: none;
  color: black;
}

.navigate-button-number a {
  text-decoration: none;
}

/* Media query para deixar o site minimamente responsivo */
@media screen and (max-width: 1200px) {
  .research {
    width: 200px;
  }

  .img-navbar {
    object-fit: cover;
  }

  .txt-navbar {
    font-size: large;
  }
}
</style>
