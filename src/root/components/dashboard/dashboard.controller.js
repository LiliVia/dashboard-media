
export default class DashboardController {
  constructor($scope, $routeParams, service) {
    console.log(service);
    $scope.itemId = $routeParams.id;

    $scope.campaigns = service.campaigns;

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

