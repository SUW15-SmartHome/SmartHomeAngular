/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.temperatures = [];

            var getTemperatures = function () {
                sensorsApi.getTemperatures()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.temperatures = data;
                            console.log(data);
                        }
                    });
            };


            getTemperatures();
        }
    ]);