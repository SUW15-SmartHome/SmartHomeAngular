/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.temperatures = [];
            $scope.alarams = [];
            $scope.lights = [];

            var getTemperatures = function () {
                sensorsApi.getTemperatures()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.temperatures = data;
                            console.log(data);
                        }
                    });
            };
            var getAlarms = function () {
                sensorsApi.getAlarms()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.alarms = data;
                        }
                    })
            }
            var getLights = function () {
                sensorsApi.getLights()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.lights = data;
                        }
                    })
            }

            getTemperatures();
            getAlarms();
            getLights();
        }
    ]);