/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("LightsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Lights";
        }
    ]);