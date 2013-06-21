/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 11:26 PM
 * To change this template use File | Settings | File Templates.
 */
var bookmarkmanager = angular.module('bookmarkmanager',[])
    .config(function($routeProvider){
        $routeProvider.when('/index',{
            templateUrl:'partials/index.html'
        })
        .when('/info/:id',{
                templateUrl:'partials/info.html',
                controller:'InfoCtrl'
            })
        .when('/add',{
                templateUrl:'partials/add.html',
                controller:'AddCtrl'
            })
        .when('/edit/:id',{
                templateUrl:'partials/edit.html',
                controller:'EditCtrl'
            })
        .when('/remove/:id',{
                templateUrl:'partials/remove.html',
                controller:'RemoveCtrl'
            })
            .otherwise({
                redirectTo:'/index'
            });
    });
