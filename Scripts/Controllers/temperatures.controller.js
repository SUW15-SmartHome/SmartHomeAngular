/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("TemperaturesController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.title = "Temperature Sensors";
            $scope.newTemperature = {
                Value: 20
            };

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
           
            //bug
            $scope.changeStatus = function (temperature) {
                var newTemperature = temperature;
                sensorsApi.changeStatus(newTemperature)
                    .then(function (data) {
                        var index = $scope.temperatures.map(function (temperature) {
                            return temperature.Id;
                        }).indexOf(temperature.Id);


                        if (temperature != true) {
                            temperature == true;
                        } else {
                            temperature == false;
                        };
                       
                        $scope.temperatures[index].Status = temperature.Status;
                        console.log($scope.temperatures[index].Status);

                    });
            };

            

            
        }
    ]);