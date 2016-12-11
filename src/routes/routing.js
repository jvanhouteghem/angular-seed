'use strict';

app.config(
    function ($routeProvider){
        $routeProvider
            // default route
            .otherwise( {
                controller: 'myController',
                templateUrl: 'views/_view.html'
            })
    }
);