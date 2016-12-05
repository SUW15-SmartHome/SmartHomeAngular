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
            .when("/Sensors", {
                templateUrl: "Views/Sensors.html",
                controller: "SensorsController",
                caseInsensitiveMatch: true,
                activeTab: "Sensors"
            })
            .when("/Temperatures", {
                templateUrl: "Views/Temperatures.html",
                controller: "TemperaturesController",
                caseInsensitiveMatch: true,
                activeTab: "Temperatures"
            })
            ;
        }
    ]);