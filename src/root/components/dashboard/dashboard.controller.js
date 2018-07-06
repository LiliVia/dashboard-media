
export default class DashboardController {
  constructor($scope, $routeParams, service, $http) {
    // console.log(service);
    $scope.itemId = $routeParams.id;

    $scope.campaigns = [];

    service.getCampaigns($http).then(function (data) {
      console.log(data);
      $scope.campaigns = data;
    }).catch(function (error) {
      console.log('unable to get the data', error);
    });

    let pagesShown = 1;
    $scope.pageSize = 7;

    $scope.itemsLimit = function () {
      return $scope.pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function () {
      return pagesShown < ($scope.campaigns.length / $scope.pageSize);
    };
    $scope.showMoreItems = function () {
      pagesShown = pagesShown + 1;
    };
  }

}

