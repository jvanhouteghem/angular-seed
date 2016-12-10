# angular-seed
Angular seed.

I. controllers
---

NB : Try to use one controller by view. 

###A. How to add a new controller ?

1- Create new controller file in src/controllers/yourController.js
2- Add this new controller in index.html (<script src="src/controllers/yourController.js"></script>)
3- Add following code : 
```js
    App.controller('yourController', function ($scope, myItemProvider){
        
        // (...)
        
    });
```
4- Update routing.js by adding a new ".when{...}" : 
```
    .when('/yourRoute', {
        controller: 'yourController',
        templateUrl: 'views/_yourView.html'
    })
```

###B. How to call a function from another controller ?

A good approach would be to move the common function to a service and then inject the service in both controllers.