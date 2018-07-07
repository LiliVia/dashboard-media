export default class DetailController {
  constructor($scope, $routeParams, $http, service) {
    $scope.imgUrl = require('./img/gingerkitten.jpg');
    $scope.detailId = $routeParams.id;
    $scope.details = [];
    $scope.pending = [];
    $scope.approved = [];
    $scope.rejected = [];

    service.getPosts($http).then(function (data) {
      $scope.details = data;
      $scope.pending = [].concat($scope.details);
    }).catch(function (error) {
      console.log('unable to get the data', error);
    });

    $scope.chips = ['ever'];
    $scope.copyChips = [];

    $scope.applySearch = function () {
      $scope.copyChips = [].concat($scope.chips);
    }

    $scope.approve = function (id, arr) {
      service.removePost(id, arr, $scope.approved)
      console.log('approved');
    }

    $scope.reject = function (id, arr) {
      service.removePost(id, arr, $scope.rejected)
      console.log('reject');
    }
  }
}
