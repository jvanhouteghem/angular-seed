'use strict';

app
    .controller('TodoListController', function ($scope, todosProvider) {
        $scope.todos = todosProvider.getTodos();

        $scope.addTodo = function () {
            $scope.todos.push({ text: $scope.todoText, done: false });
            $scope.todoText = '';
        };

        $scope.remaining = function () {
            var count = 0;
            angular.forEach($scope.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };
    })
    .controller('todoCreate', function ($scope, categoryProvider) {
        $scope.categories = categoryProvider.getCategories();
    })
;