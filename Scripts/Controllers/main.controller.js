/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "sensorsApi",
        "Hub",
        "$timeout",
        "$rootScope",
        function ($scope, sensorsApi, Hub, $timeout, $rootScope) {
            $scope.temperatures = [];
            $scope.alarams = [];
            $scope.lights = [];

            var getTemperatures = function () {
                sensorsApi.getTemperatures()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.temperatures = data;
                        }
                    });
            };   
            var getAlarms = function () {
                sensorsApi.getAlarms()   
                    .then(function (data) {
                        if (data !== null) {
                            $scope.alarms = data;
                        }
                    });
            };
            var getLights = function () {
                sensorsApi.getLights()
                    .then(function (data) {
                        if (data !== null) {
                            $scope.lights = data;
                        }
                    });
            };

            var getTemperatureValues = function (path, hubname) {
                var hub = null;
                hub = new Hub(hubname, {
                    listeners: {
                        'recieveNewTemperatureValues': function (newTemperature) {
                            var index = $scope.temperatures.map(function (temperature) {
                                return temperature.Id;
                            }).indexOf(newTemperature.Id);
                            $scope.temperatures[index].Value = newTemperature.Value;
                            $rootScope.$apply();
                        }
                    },
                    rootPath: path,
                        
                    errorHandler: function (error) {
                        console.error(error);
                    },

                    stateChanged: function (state) {
                        switch (state.newState) {
                            case $.signalR.connectionState.connecting:
                                console.log("Connecting");
                                break;
                            case $.signalR.connectionState.connected:
                                console.log("Connected");
                                break;
                            case $.signalR.connectionState.reconnecting:
                                console.log("Reconnecting");
                                break;
                            case $.signalR.connectionState.disconnected:
                                console.log("Disconnected");
                                break;
                        }
                    }
                });
            };


            getTemperatures();
            getAlarms();
            getLights();
            getTemperatureValues("http://localhost:58335/signalr", "TemperatureHub");
        }
    ]);