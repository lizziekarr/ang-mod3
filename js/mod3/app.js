(function(){

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearch', MenuSearch)
         .directive('foundItems', FoundItems);

  function FoundItems() {
    return {
      templateUrl: 'founditems.html',
      scope: {
        onRemove: '&',
        found: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrow',
      bindToController: true
  }
}

  // function NarrowItDownDirectiveController(){
  //   var narrow = this;
  //   list.found =
  // }

  NarrowItDownController.$inject = ['$scope', 'MenuSearch'];

  function NarrowItDownController($scope, MenuSearch){

    var narrow = this;

    narrow.searchTerm = '';
    narrow.found = [];
    narrow.message = '';

    narrow.getData = function(){
      var promise = MenuSearch.getMatchedMenuItems(narrow.searchTerm);
      promise.then(function(response){
        narrow.found = response;
        if (narrow.found.length === 0) {
          narrow.message = 'nothing found';
        }
        else {
          narrow.message = '';
        }
      })
        .catch(function(error){
        console.log('the controller is broken');
      });
    }

    narrow.removeItem = function(index){
      narrow.found.splice(index, 1);
    }
  };


 MenuSearch.$inject = ['$http'];
 function MenuSearch($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    })
    .then(function(response){
      console.log(searchTerm);
      var found = [];

      for (var i=0; i<response.data.menu_items.length; i++) {
        if (response.data.menu_items[i]['name'].toLowerCase().indexOf(searchTerm) !== -1) {
          found.push(response.data.menu_items[i]['name'])
        }
      }

      return found;
    })
      .catch(function(error){
      console.log('the service is broken');
    });
  }
 }



})();
