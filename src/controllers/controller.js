'use strict';

app
    
    .controller('myController', function ($scope, myItemProvider){ // myItemProvider
        
        // create example var
        $scope.varFromMyController = "Example of var from myController";

        // Get data item from service itemsProvider
        $scope.items = myItemProvider.getItems(); 

        // Update data item from service itemsProvider
        $scope.addItem = function () {
            myItemProvider.addItem(0, $scope.inputTextItem, false);
            // Clean input text
            $scope.inputTextItem = '';
        }

    })

    ;