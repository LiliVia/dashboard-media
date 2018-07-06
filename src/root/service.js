export default class DashboardService {
  constructor() {

  }


  getPosts($http) {
    return $http.get('/media.json').then(function (response) {
      return response.data;
    });
  }

  getCampaigns($http) {
    return $http.get('campaigns.json').then(function (response) {
      return response.data;
    });
  }

}
