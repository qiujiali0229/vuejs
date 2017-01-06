var Vue = require('../lib/vue.js');
var Swiper = require('../lib/swiper.js');
new Vue({
    el: '#m-index',
    data:{
    	list:[]
    },
    mounted: function() {
       fetch('/api/list').then(response=> response.json())
       .then(res => {
          this.list=res;
          new Swiper('#index-swiper',{
          	loop:false
          });
          new Swiper('#index-swiper1',{
          	loop:false
          });
           new Swiper('#index-swiper2',{
          	loop:false
          });
          new Swiper('#index-swiper3',{
          	loop:false
          });
       })
       .catch(e => console.log("0ops,err",e))
    }
})