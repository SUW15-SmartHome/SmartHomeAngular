/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("TemperaturesController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.title = "Temperature Sensors";
            $scope.newTemperature = {};

            $scope.addTemperature = function () {
                sensorsApi.addTemperature($scope.newTemperature)
                    .then(function (data) {
                        $scope.temperatures.push(data);
                        $scope.newTemperature = {};
                    });
            };

            $scope.deleteTemperature = function (temperature) {
                sensorsApi.deleteTemperature(temperature.Id)
                    .then(function () {
                        var index = $scope.temperatures.map(function (temperature) {
                            return temperature.Id;
                        }).indexOf(temperature.Id);

                        $scope.temperatures.splice(index, 1);
                    });
            };
        }
    ]);