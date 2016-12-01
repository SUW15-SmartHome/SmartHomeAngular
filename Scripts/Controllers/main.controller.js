/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.temps = [];

            var getTemps = function () {
                sensorsApi.getTemps()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.temps = data;
                        }
                    });
            };


            getTemps();
        }
    ]);