'use strict';

var todos = [
    { text: 'learn angular', done: true },
    { text: 'build an angular app', done: false }
];

app.service('todosProvider', function () {
    this.getTodos = function(){
        return todos;
    }
})