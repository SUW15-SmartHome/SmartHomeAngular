﻿/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("TemperaturesController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.title = "Temperature Sensors";
            $scope.newTemperature = {
                Value: 20
            };
            $scope.newEditTemperature = {};

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
           
            $scope.changeStatus = function (temperature) {
                var changeStatus = {
                    Id: temperature.Id,
                    Name: temperature.Name,
                    Value: temperature.Value,
                    Status: temperature.Status
                };
                if (temperature.Status !== true) {
                    changeStatus.Status = true;
                }
                else {
                    changeStatus.Status = false;
                }
                sensorsApi.changeStatus(changeStatus)
                    .then(function (data) {
                        var index = $scope.temperatures.map(function (temperature) {
                            return temperature.Id;
                        }).indexOf(changeStatus.Id);
                        
                        $scope.temperatures[index].Status = changeStatus.Status;
                    });
            };

            $scope.getTemperatrue = function (temperature) {
                $scope.newEditTemperature = {
                    Id: temperature.Id,
                    Name: temperature.Name,
                    Value: temperature.Value,
                    Status: temperature.Status
                };
            };

            $scope.editTemperature = function () {
                sensorsApi.editTemperature($scope.newEditTemperature)
                    .then(function (data) {
                        var index = $scope.temperatures.map(function (temperature) {
                            return temperature.Id;
                        }).indexOf($scope.newEditTemperature.Id);

                        $scope.temperatures[index] = $scope.newEditTemperature;
                        $scope.newEditTemperature = {};
                    });
            };
        }
    ]);