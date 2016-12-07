/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        function ($scope) {

            tempsApi.getTemps()
                        .then(function (data) {
                            $scope.temps = data;
                            if (data != null) {
                                $scope.temps = data;

                            }
                        });


            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);