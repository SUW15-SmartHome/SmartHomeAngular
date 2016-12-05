/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("sensorsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://localhost:58335/api";
            var temperatures = api + "/TemperaturesAPI";

            this.getTemperatures = function () {
                var deferred = $q.defer();

                $http.get(temperatures)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addTemperature = function (newTemperature) {
                var deferred = $q.defer();

                $http.post(temperatures, newTemperature)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteTemperature = function (id) {
                var deferred = $q.defer();

                $http.delete(temperatures + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
        }
    ]);