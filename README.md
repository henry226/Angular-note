# Angular-App
### Component:
Selectors:   
```TypeScript
// Custom HTML Tag
selector: 'app-test'
// class
selector: '.app-test'
// Attribute
selector: ['app-test']
```
HTML:
```html
<!-- Custom HTML Tag -->
<app-test></app-test>
<!-- Class -->
<div class="app-test"></div>
<!-- Attribute -->
<div app-test></div>
```
Output:
```html
Welcome to Henry!
test works!
```
---

### Interpolation:
Template:   
```TypeScript
template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>
  `
```
Class
```TypeScript
public name = "Henry From BU";
public siteUrl = window.location.href;
greetUser(){
    return "Hi " + this.name;
}
```

Output: 
```html
Welcome Henry From BU
4
Welcome Henry From BU
13
HENRY FROM BU
Hi Henry From BU
http://localhost:4200/
```
---