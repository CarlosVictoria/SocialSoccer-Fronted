'use strict';
(function(){
angular.module('socialSoccerApp')
.factory("NavegateParams", navegateParams);

 function navegateParams(localStorageService){
   var Data = {
     setData:setData,
     getData:getData
   };

   function setData(key, value){
     localStorageService.set(key,value);

   }
   function getData(key){
     return localStorageService.get(key)
   }

   return Data;
 }
})();
