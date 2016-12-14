/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("sensorsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://localhost:58335/api";
            var temperatures = api + "/TemperaturesAPI";
            var alarms = api + "/AlarmsAPI";
            var lights = api + "/LightsAPI";

            /*Temperatures Start*/

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

            this.changeStatus = function (changeStatus) {
                var deferred = $q.defer();
                $http.put(temperatures + "/" + changeStatus.Id, changeStatus)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };

            this.editTemperature = function (editTemperature) {
                var deferred = $q.defer();
                $http.put(temperatures + "/" + editTemperature.Id, editTemperature)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };
            
            /*Temperatures END!!*/

            /*Alarms Start*/

            this.getAlarms = function () {
                var deferred = $q.defer();

                $http.get(alarms)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addAlarm = function (newAlarm) {
                var deferred = $q.defer();

                $http.post(alarms, newAlarm)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteAlarm = function (id) {
                var deferred = $q.defer();

                $http.delete(alarms + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.changeAlarmStatus = function (changeStatus) {
                var deferred = $q.defer();
                $http.put(alarms + "/" + changeStatus.Id, changeStatus)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };

            this.editAlarm = function (editAlarm) {
                var deferred = $q.defer();
                $http.put(alarms + "/" + editAlarm.Id, editAlarm)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };

            /*Alarms END!*/

            /*Lights Start*/

            this.getLights = function () {
                var deferred = $q.defer();

                $http.get(lights)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.addLight = function (newLight) {
                var deferred = $q.defer();

                $http.post(lights, newLight)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteLight = function (id) {
                var deferred = $q.defer();

                $http.delete(lights + "/" + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.changeLightStatus = function (changeStatus) {
                var deferred = $q.defer();
                $http.put(lights + "/" + changeStatus.Id, changeStatus)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };

            this.editLight = function (editLight) {
                var deferred = $q.defer();
                $http.put(lights + "/" + editLight.Id, editLight)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };

            /*Lights END!*/
        }
    ]);