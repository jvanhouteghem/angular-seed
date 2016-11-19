'use strict';

app.config(
    function ($routeProvider){
        $routeProvider
            .when('/items/', {
                controller: 'TodoListController as todoList',
                templateUrl: 'views/_todolist.html'
            })
            .when('/items/new/', {
                controller: 'todoCreate',
                templateUrl: 'views/_todocreate.html'
            })
    }
);