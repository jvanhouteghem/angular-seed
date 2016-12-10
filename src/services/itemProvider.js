'use strict';

// Data access service

var myItems = [
    { 'id' : 0, text: 'itemText1', done: true },
    { 'id' : 1, text: 'itemText2', done: false }
];

app.service('myItemProvider', function () {

    this.getItems = function(){
        return myItems;
    }

    this.addItem = function (id, text, done) {
        myItems.push({ id: id, text: text, done: done });
    };

})