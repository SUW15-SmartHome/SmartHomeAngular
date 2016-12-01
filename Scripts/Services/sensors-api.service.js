/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("sensorsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://localhost:58335/api";
            var temps = api + "/TempsAPI";

            this.getTemps = function () {
                var deferred = $q.defer();

                $http.get(temps)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
        }
    ]);