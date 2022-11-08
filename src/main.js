import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRating from 'vue-star-rating/dist/VueStarRating.common'
import {CCarousel,CCarouselItem} from '@coreui/bootstrap-vue';
import '@coreui/bootstrap-vue';

import {VueCookieNext} from 'vue-cookie-next'

const app = createApp(App)

app.use(router)
app.component('star-rating', StarRating);
app.component('CCarousel', CCarousel);
app.component('CCarouselItem', CCarouselItem);


app.mount('#app')
//TODO: passar as ref`s para model`s
VueCookieNext.config({expire: '7d'})
