(function() {
    'use strict';

    var app = angular.module('owlApp', ['ui.bootstrap', 'ngAnimate']);

    app.controller('shelfController', function($scope, $http, $uibModal, $log) {
        $scope.bookTitle="";

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
        
        $scope.modalShown=false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        };

        $scope.test="search";

        var _borrowBookModal = function(ID,TITLE){
            $scope.busername="";
            $scope.breason="";
            $scope.bookId=ID;
            $scope.bookTitle=TITLE;
            console.log(ID);
            $scope.isBorrow=true;
        }
        
        var _returnBookModal = function(ID,TITLE){
            $scope.busername="";
            $scope.breason="";
            $scope.bookId=ID;
            $scope.bookTitle=TITLE;
            console.log(ID);
            $scope.isBorrow=false;
        }

        $scope.borrowBook = _borrowBookModal;
        $scope.returnBook = _returnBookModal;
        
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

    // app.directive('modalDialog', function() {
    //     return {
    //         restrict: 'E',
    //         scope: {
    //             show: '='
    //         },
    //         replace: true, // Replace with the template below
    //         transclude: true, // we want to insert custom content inside the directive
    //         link: function(scope, element, attrs) {
    //             scope.dialogStyle = {};
    //             if (attrs.width)
    //                 scope.dialogStyle.width = attrs.width;
    //             if (attrs.height)
    //                 scope.dialogStyle.height = attrs.height;

    //             scope.hideModal = function() {
    //                 scope.show = false;
    //             };
    //         },
    //         template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
    //     };
    // });

    app.config(['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
    }]);
})();