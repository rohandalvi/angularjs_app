/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 11:27 PM
 * To change this template use File | Settings | File Templates.
 */
bookmarkmanager.controller('AppCtrl',
    function AppCtrl($scope){
        $scope.bookmarks=[{
            name:'Google',
            url:'http://www.google.com',
            dateAdded:'06/19/2013'
        }];
    }
);
bookmarkmanager.controller('InfoCtrl',
    function InfoCtrl($scope,$routeParams){
        $scope.bookmark=$scope.bookmarks[$routeParams.id];
    }
);
bookmarkmanager.controller('AddCtrl',
    function AddCtrl($scope,$location)
    {
        $scope.bookmark={};
        $scope.add = function(){
            $scope.bookmarks.push($scope.bookmark);
            $location.url('/');
        };
    }
);
bookmarkmanager.controller('EditCtrl',
    function EditCtrl($scope,$routeParams,$location){
        $scope.bookmark=$scope.bookmarks[$routeParams.id];
        $scope.edit = function(){
            $scope.bookmarks[$routeParams.id]=$scope.bookmark;
            $location.url('/');
        };
    }
);
bookmarkmanager.controller('RemoveCtrl',
    function RemoveCtrl($scope,$routeParams,$location){
        $scope.bookmark=$scope.bookmarks[$routeParams.id];
        $scope.remove = function(){
            $scope.bookmarks.splice($routeParams.id,1);
            $location.url('/');
        };
        $scope.back = function(){
            location.url('/');
        };
    }
);