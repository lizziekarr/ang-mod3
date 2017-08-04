(function(){

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearch', MenuSearch);

  NarrowItDownController.$inject = ['$scope', 'MenuSearch'];

  function NarrowItDownController($scope, MenuSearch){
    var narrow = this;

    var promise = MenuSearch.lookUp();

    narrow.getData = function(){

      promise.then(function(response){
        console.log(response.data);
      })
        .catch(function(error){
        console.log('bad stuff');
      });
  }
  narrow.getData();

  }


 MenuSearch.$inject = ['$http'];
 function MenuSearch($http) {
  var service = this;

  service.lookUp = function(){
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    })
  }
//
//   service.getMatchedMenuItems = return function(searchTerm){
//     var response = function(){$http({method: 'GET', url: 'https://davids-restaurant.herokuapp.com/menu_items.json'});};
//
//     return response.then(function(result){
//
//       for (var i = 0; i<result.menu_items.length; i++){
//         if (result.menu_items[i][name])
//       }
//     });
// }
//
//
// return $http(...).then(function (result) {
//     // process result and only keep items that match
//     var foundItems...
//
//     // return processed items
//     return foundItems;
 }



})();
