export default class DetailController {
  constructor($scope, $routeParams, $http, service) {
    $scope.imgUrl = require('./img/gingerkitten.jpg');
    $scope.detailId = $routeParams.id;
    $scope.details = service.details;

    service.getPosts().then(function (data) {
      console.log('service.data');
      // console.log(response.data);
      $scope.details = data;
    }).catch(function () {
      console.log('unable to get the data');
    });

    $scope.chips = ['ever'];
    $scope.copyChips = [];

    $scope.currentNavItem = '';

    $scope.pending = [];
    $scope.approved = [];
    $scope.rejected = [];

    $scope.applySearch = function () {
      $scope.copyChips = [].concat($scope.chips);
    }

    $scope.approve = function () {
      console.log('approved');
    }

    $scope.reject = function () {
      console.log('reject');
    }
  }
}
