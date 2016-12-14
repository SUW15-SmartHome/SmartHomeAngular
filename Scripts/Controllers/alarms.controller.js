/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AlarmsController", [
        "$scope",
        "sensorsApi",
        function ($scope, sensorsApi) {
            $scope.title = "Alarms";
            $scope.newAlarm = {};

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
        }
    ]);