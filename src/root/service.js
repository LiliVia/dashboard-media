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

  removePost(id, arr, newArr) {
    let post = {};
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].id === id) {
        post = arr[i];
        arr.splice(i, 1);
        break;
      }
    }
    newArr.push(post);
  };

}
