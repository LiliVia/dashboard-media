export default function router($routeProvider, $locationProvider) {
    // console.log($routeProvider, $locationProvider);
    $routeProvider
        .when('/dashboard', {
            template: `<dashboard></dashboard>`
        })
        .when('/campaigns/:detailId', {
            template: `<detail></detail>`
        })
        .otherwise({
            redirectTo: '/dashboard'
        })
    $locationProvider.html5Mode(true);
}