(function() {
    'use strict';

    var app = angular.module('owlApp', []);

    app.controller('shelfController', function($scope, $http) {
        $scope.bookName="";

        $http.get('/api/books/').success(function(response) {
            $scope.books = response.books;
        });
        
        var _sortBy = function (field) {
            $scope.sortField = field;
        };
        
        var _reverseOrder = function () {
            $scope.isReversed = !$scope.isReversed;
        };
        
        $scope.sortBy = _sortBy;
        $scope.isReversed = "false";
        $scope.reverseOrder = _reverseOrder; 
        
        $scope.test="search";

        $scope.borrowBook = function(ID){
            console.log(ID);
        }
        
        $scope.returnBook = function(ID){
            console.log(ID);
        }
        
        $scope.waitBook = function(ID){
            console.log(ID);
        }
    });
    app.config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      $interpolateProvider.endSymbol(']}');
    }]);
})();