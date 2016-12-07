/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("WeatherController", [
        "$scope",
        function ($scope) {
            $scope.title = "Weather";
        }
    ]);