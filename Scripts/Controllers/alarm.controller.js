/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AlarmController", [
        "$scope",
        function ($scope) {
            $scope.title = "Alarm";
        }
    ]);