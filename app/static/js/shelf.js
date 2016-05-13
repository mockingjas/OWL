(function () {
    'use strict';

    var app = angular.module('owlApp', ['ui.bootstrap', 'ngAnimate']);

    app.controller('shelfController', function ($scope, $http, $uibModal, $log) {
        $scope.bookTitle = "";

        $http.get('/api/books/').success(function (response) {
            $scope.books = response.books;
        });
        
        var sortBy = function (field) {
            $scope.sortField = field;
        };
        
        var reverseOrder = function () {
            $scope.isReversed = !$scope.isReversed;
        };
        
        $scope.sortBy = sortBy;
        $scope.isReversed = "false";
        $scope.reverseOrder = reverseOrder; 
        $scope.modalShown = false;
        
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
            console.log($scope.modalShown);
        };

        $scope.test = "search";

        var borrowBookModal = function (ID, TITLE) {
            $scope.busername = "";
            $scope.breason = "";
            $scope.bookId = ID;
            $scope.bookTitle = TITLE;
            $scope.isBorrow = true;
            
        };
        
        var returnBookModal = function(ID, TITLE){
            $scope.busername = "";
            $scope.breason = "";
            $scope.bookId=ID;
            $scope.bookTitle = TITLE;
            $scope.isBorrow = false;
            console.log(ID);
        }

        $scope.borrowBook = borrowBookModal;
        $scope.returnBook = returnBookModal;
        
//        $scope.postData = function (username, reason, isBorrow) {            
//            $scope.params = ('01/01/2001', '01/01/2001', '01/01/2001', reason, $scope.bookId, username)            
//            console.log($scope.params);
//            $http.post('/api/insertborrowed/', $scope.params).then(function OnSuccess(data) {
//                console.log(data);
//            }, function OnError(err) {
//                console.log(err);
//            });
//        };
        
        // var addToBorrow = function(id,username,reason,isBorrow){
        //     if(isBorrow){
        //         console.log(id,username,reason);
        //     }
        //     else {
        //         reason='';
        //         console.log(id,username);
        //     }
        // }

        // $scope.borrowBook = _addToBorrow;

        // $scope.isAvail = function(data){
        //     if (data==0) {
        //         return false;
        //     }
        //     else {
        //         return true;
        //     }
        // }
        
        // $scope.swap = function(data){
        //     if (data==0) {
        //         return 1;
        //     }
        //         else {
        //             return 0;
        //     }
        // }
    });

     app.directive('modalDialog', function() {
         return {
             restrict: 'E',
             scope: {
                 show: '='
             },
             replace: true, // Replace with the template below
             transclude: true, // we want to insert custom content inside the directive
             link: function(scope, element, attrs) {
                 scope.dialogStyle = {};
                 if (attrs.width)
                     scope.dialogStyle.width = attrs.width;
                 if (attrs.height)
                     scope.dialogStyle.height = attrs.height;

                 scope.hideModal = function() {
                     scope.show = false;
                 };
             },
             template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
         };
     });

    app.config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
    }]);
})();