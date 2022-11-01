import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

/**
 * Responsável por criar as rotas do site, cada rota tem um arquivo na pasta view que
 * corresponde ao conteudo mostrado na rota.
 */

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        /**
         * Rota para a pagina principal da loja
         */
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router