require('./styles/usage/app.scss')
require('./scripts/views/index.js')
require('./scripts/views/ff-index.js')
//components
var layout = require('./scripts/tpls/layout.string')
var common = require('./scripts/utils/util.common.js')
common.render(layout)
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
import search from "./scripts/components/search.vue";
import shop from "./scripts/components/shop.vue"
import person from "./scripts/components/person.vue"
import register from "./scripts/components/register.vue"
import registerPwd from "./scripts/components/registerPwd.vue"
import login from "./scripts/components/login.vue"
//vue  router  2
const routes=[
  {   	//"/"表示根路由
  	 path: '/',
  	 component: index,
  	 children:[
      {
      	 	path: '/',
      	 	component: home
    	 },{
      	 	path: '/search',
      	 	component: search
    	 },{
      	 	path: '/shop',
      	 	component: shop
    	 },{
      	 	path: '/person',
      	 	component: person
    	 }]
    },{
      	path: '/person',
      	component: person
    },{
      	path: '/login',
      	component: login
    },{
        path: '/register',
      	component: register
    },{
        path: '/registerPwd',
      	component: registerPwd
  }
]
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router
}).$mount('#app')
