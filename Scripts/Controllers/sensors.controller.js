/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("SensorsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Sensors";
        }
    ]);