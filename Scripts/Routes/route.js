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
                    activeTab: "Sensors"
                })
                .when("/Sensors/Alarm", {
                    templateUrl: "Views/Sensors/Alarm.html",
                    controller: "AlarmController",
                    caseInsensitiveMatch: true,
                    activeTab: "Sensors"
                })
                .when("/Sensors/Weather", {
                    templateUrl: "Views/Sensors/Weather.html",
                    controller: "WeatherController",
                    caseInsensitiveMatch: true,
                    activeTab: "Sensors"
                });
        }
    ]);