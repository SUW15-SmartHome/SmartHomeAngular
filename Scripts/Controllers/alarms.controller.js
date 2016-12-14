/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AlarmsController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.title = "Alarms";
            $scope.newAlarm = {};
            $scope.newEditAlarm = {};

            $scope.addAlarm = function () {
                sensorsApi.addAlarm($scope.newAlarm)
                    .then(function (data) {
                        $scope.alarms.push(data);
                        $scope.newAlarm = {};
                    });
            };

            $scope.deleteAlarm = function (alarm) {
                sensorsApi.deleteAlarm(alarm.Id)
                    .then(function () {
                        var index = $scope.alarms.map(function (alarm) {
                            return alarm.Id;
                        }).indexOf(alarm.Id);

                        $scope.alarms.splice(index, 1);
                    });
            };

            $scope.changeAlarmStatus = function (alarm) {
                var changeStatus = {
                    Id: alarm.Id,
                    Name: alarm.Name,
                    Status: alarm.Status
                };
                if (alarm.Status !== true) {
                    changeStatus.Status = true;
                } else {
                    changeStatus.Status = false;
                }
                sensorsApi.changeAlarmStatus(changeStatus)
                    .then(function (data) {
                        var index = $scope.alarms.map(function (alarm) {
                            return alarm.Id;
                        }).indexOf(changeStatus.Id);

                        $scope.alarms[index].Status = changeStatus.Status;
                    });
            };

            $scope.getAlarm = function (alarm) {
                $scope.newEditAlarm = {
                    Id: alarm.Id,
                    Name: alarm.Name,
                    Status: alarm.Status
                };
            };

            $scope.editAlarm = function () {
                sensorsApi.editAlarm($scope.newEditAlarm)
                    .then(function (data) {
                        var index = $scope.alarms.map(function (alarm) {
                            return alarm.Id;
                        }).indexOf($scope.newEditAlarm.Id);

                        $scope.alarms[index] = $scope.newEditAlarm;
                        $scope.newEditAlarm = {};
                    });
            };
        }
    ]);