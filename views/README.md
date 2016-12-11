# angular-seed

Views
---

###A. How to add a dynamic class name ?

Simply use {{...}} to add dynamic class name.

Example : 
```js
<span class="done-{{item.done}}">{{item.id}} {{item.text}}</span>
```

###B. ng repeat example ?

The controller : 

```js

$scope.items = [
    { 'id' : 0, text: 'itemText1', done: true },
    { 'id' : 1, text: 'itemText2', done: false }
]; 

```

Loop example :

```js
	<ul>
		<li ng-repeat="item in this.items">
			<span class="done-{{item.done}}">{{item.id}} {{item.text}}</span>
		</li>
	</ul>
```

Result : 

```
>>>  0 itemText1
>>>  1 itemText2 
```