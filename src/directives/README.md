# angular-seed

Directives
---

###A. Why use directives ?
With directives you can use templating, or add new fonctionnality to html.

###B. How to add a new directive template ?

1) Create new html file in views/templates

2) Update the file, for example write "test directive".

3) Update src/directives/directive.js by addin new directive code : 

```js
    .directive("yourDirectiveName", function() {
        return {
            templateUrl : "views/templates/yourDirectiveTemplateFile.html"
        };
    });
```
4) Add the directive into html page, for example inside a paragraph.

IMPORTANT : "yourDirectiveName" (camelcase in directive.js) must become "your-directive-name" in your view. For example :

```
    <p your-directive-name></p>
```

Result : 

```
>>> test directive
```