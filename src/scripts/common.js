var $ = require('./lib/jquery');
var common = {
  getList: function(){
    $.ajax({
      url: 'api/list',
      success: function(res){
        console.log(res)
      }
    })
  }
}
module.exports = common;
