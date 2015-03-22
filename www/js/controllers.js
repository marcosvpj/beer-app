angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('BeersCtrl', function($scope, Beers){
  $scope.beers = Beers.all();
  $scope.remove = function(beer) {
    Beers.remove(beer);
  }
})

.controller('BeerDetailCtrl', function($scope, $stateParams, Beers) {
  $scope.beer = Beers.get($stateParams.beerId);
});