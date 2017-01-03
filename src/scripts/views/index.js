var Vue = require('../lib/vue.js');
new Vue({
	el: '#shopIndex',
	data: {
		list:[]
	},
	mounted:function(){
		fetch('/api/list').then(response => response.json())
        .then(res => console.log(res))
        .catch(e => console.log("Oops, error", e))					
	}
});
