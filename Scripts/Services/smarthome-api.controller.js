angular.module("mainModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://localhost:58335/api";
            var temps = api + "/temps";

            /*Get*/
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
            /*Add*/
            this.addTemps = function (newTemps) {
                var deferred = $q.defer();

                $http.post(temps, newTemps)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
            /*Update*/
            this.updateTemps = function (updatedTemps) {
                var deferred = $q.defer();

                $http.put(temps + "/" + updatedTemps.id, updatedTemps)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            /*Delete*/
            this.deleteTemps = function (id) {
                console.log(id);
                var deferred = $q.defer();

                $http.delete(temps + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };
        }
    ]);