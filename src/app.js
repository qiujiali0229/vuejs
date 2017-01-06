require('./styles/usage/app.scss')
//components
var layout = require('./scripts/tpls/layout.string')
var common = require('./scripts/utils/util.common.js')
common.render(layout)
import shop from "./scripts/components/shop.vue"
import person from "./scripts/components/person.vue"
import register from "./scripts/components/register.vue"
import registerPwd from "./scripts/components/registerPwd.vue"
import login from "./scripts/components/login.vue"

//vue  router  2
const routes=[
    {
   	//"/"表示根路由
    	path: '/',
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
	routes
})
const app = new Vue({
	router
}).$mount('#app')
