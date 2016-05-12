(function() {
    'use strict';

    var app = angular.module('owlApp', []);

    var lala = '{{ entry[1] }}';
    app.controller('shelfController', function($scope,$http) {
        $scope.bookName="";
        
        //TODO get data from sql
        var booksUrl = '/static/books.json';
        $http.get(booksUrl).success(function(data){
            $scope.books = data;                            
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