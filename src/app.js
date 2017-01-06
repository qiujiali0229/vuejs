require('./styles/usage/app.scss')
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

require('./scripts/views/index.js');*/
