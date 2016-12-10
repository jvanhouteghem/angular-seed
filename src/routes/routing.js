'use strict';

app.config(
    function ($routeProvider){
        $routeProvider
            // default route
            .when('/', {
                controller: 'myController',
                templateUrl: 'views/_view.html'
            })
    }
);