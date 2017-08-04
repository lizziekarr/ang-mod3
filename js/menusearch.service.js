/*app.service('MenuSearch', MenuSearch);

MenuSearch.$inject = ['$http'];
function MenuSearch($http, APIBasePath) {
  var service = this;

  var response = function(){
    $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    })
    return response;
  }

  service.getMatchedMenuItems = return function(searchTerm){
    var response = function(){$http({method: 'GET', url: 'https://davids-restaurant.herokuapp.com/menu_items.json'});};

    return response.then(function(result){

      for (var i = 0; i<result.menu_items.length; i++){
        if (result.menu_items[i][name])
      }
    });
}


return $http(...).then(function (result) {
    // process result and only keep items that match
    var foundItems...

    // return processed items
    return foundItems;
});
*/
