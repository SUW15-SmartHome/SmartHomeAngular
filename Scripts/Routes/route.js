angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

            .when("/", {
                templateUrl: "Views/Home.html",
                controller: "HomeController",
                caseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/Sensors/Lights", {
                templateUrl: "Views/Sensors/Lights.html",
                controller: "LightsController",
                caseInsensitiveMatch: true,
                activeTab: "Lights"
            })
            .when("/Sensors/Alarm", {
                templateUrl: "Views/Sensors/Alarm.html",
                controller: "AlarmsController",
                caseInsensitiveMatch: true,
                activeTab: "Alarm"
            })
            .when("/Sensors/Temperatures", {
                templateUrl: "Views/Sensors/Temperatures.html",
                controller: "TemperaturesController",
                caseInsensitiveMatch: true,
                activeTab: "Temperatures"
            });
        }
    ]);