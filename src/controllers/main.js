'use strict';

app
    .controller('TodoListController', function ($scope, todosProvider) {
        $scope.todos = todosProvider.getTodos();

        $scope.getMaxTodoId = function(){
            var result = 0;
            angular.forEach($scope.todos, function (todo) {
                if (todo.id > result){
                    result = todo.id;
                }
            });
            return result;
        };

        $scope.addTodo = function () {
            $scope.todos.push({ id: $scope.getMaxTodoId()+1, text: $scope.todoText, done: false });
            $scope.todoText = '';
        };

        $scope.removeTodo = function(id){
            var count = 0;
            angular.forEach($scope.todos, function (todo) {
                if (todo.id == id){
                    $scope.todos.splice(count, 1);
                }
                count++;
            });            
            // Mise à jour de l'objet (actualisation de l'affichage)
            $scope.todos = todosProvider.getTodos();
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