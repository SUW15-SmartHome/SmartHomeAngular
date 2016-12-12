/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AlarmsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Alarms";
        }
    ]);