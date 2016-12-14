/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("LightsController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.title = "Lights";
            $scope.newLight = {};
            $scope.newEditLight = {};

            $scope.addLight = function () {
                sensorsApi.addLight($scope.newLight) 
                    .then(function (data) {
                        $scope.lights.push(data);
                        $scope.newLight = {};
                    });
            };

            $scope.deleteLight = function (light) {
                sensorsApi.deleteLight(light.Id)
                    .then(function () {
                        var index = $scope.lights.map(function (light) {
                            return light.Id;
                        }).indexOf(light.Id);

                        $scope.lights.splice(index, 1);
                    });
            };

            $scope.changeLightStatus = function (light) {
                var changeStatus = {
                    Id: light.Id,
                    Name: light.Name,
                    Status: light.Status
                };
                if (light.Status !== true) {
                    changeStatus.Status = true;
                } else {
                    changeStatus.Status = false;
                }
                sensorsApi.changeLightStatus(changeStatus)
                    .then(function (data) {
                        var index = $scope.lights.map(function (light) {
                            return light.Id;
                        }).indexOf(changeStatus.Id);

                        $scope.lights[index].Status = changeStatus.Status;
                    });
            };

            $scope.getLight = function (light) {
                $scope.newEditLight = {
                    Id: light.Id,
                    Name: light.Name,
                    Status: light.Status
                };
            };

            $scope.editLight = function () {
                sensorsApi.editLight($scope.newEditLight)
                    .then(function (data) {
                        var index = $scope.lights.map(function (light) {
                            return light.Id;
                        }).indexOf($scope.newEditLight.Id);

                        $scope.lights[index] = $scope.newEditLight;
                        $scope.newEditLight = {};
                    });
            };
        }
    ]);