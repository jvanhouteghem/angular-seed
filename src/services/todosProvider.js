'use strict';

var todos = [
    { 'id' : 0, text: 'learn angular', done: true },
    { 'id' : 1, text: 'build an angular app', done: false }
];

app.service('todosProvider', function () {
    this.getTodos = function(){
        return todos;
    }
})