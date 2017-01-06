require('./styles/usage/app.scss')
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
const router = new VueRouter({
	routes
})
const app = new Vue({
	router
}).$mount('#app')
=======
=======
>>>>>>> lijunmin
var layout = require('./scripts/tpls/layout.string')
var common = require('./scripts//utils/util.common.js')

common.render(layout)

//components
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
import search from "./scripts/components/search.vue";
import supermarket from "./scripts/components/supermarket.vue";
import my from "./scripts/components/my.vue";



//router
const routes = [{
	 path: '/',
	 component: index,
	 children:[{
	 	path: '/',
	 	component: home
	 },{
	 	path: '/search',
	 	component: search
	 },{
	 	path: '/supermarket',
	 	component: supermarket
	 },{
	 	path: '/my',
	 	component: my
	 }]
}]

<<<<<<< HEAD
=======
>>>>>>> qiujiali
=======
>>>>>>> lijunmin
const router = new VueRouter({
	routes
})

const app = new Vue({
//	el:"#app",
	router
}).$mount('#app')

/*var common = require('./scripts/utils/util.common.js');
var html = require('./scripts/tpls/index.string');
common.render(html);
<<<<<<< HEAD
<<<<<<< HEAD

require('./scripts/views/index.js');*/
>>>>>>> lijunmin
=======
require('./scripts/views/ff-index.js');
>>>>>>> fgl
=======

require('./scripts/views/index.js');*/
>>>>>>> lijunmin
