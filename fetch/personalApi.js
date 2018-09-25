
var fetch = require("@system.fetch") ;
var Fly=require("flyio/dist/npm/hap")
var fly=new Fly(fetch)

export default {

  /**个人中心数据接口 write your code.... */

  /**获取用户基本信息*/
  getUserBaseInfo(params){
    console.log('获取用户信息') ; 
    fly.post('/user/baseInfo' , params )
      .then(function (response) {
        console.log('已获取到用户信息');
        console.log(response);
      })
      .catch(function (error) {
        console.log('获取用户信息出错...');
        console.log(error);
      }); 
  }



}