export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>',
        })
        .state('app', {
            url: '/app/:controller?input',
            template: function(params) {
                return `<${params.controller}></${params.controller}>`;
            }
        });
}