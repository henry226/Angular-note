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

### Style Binding:
Template:   
```TypeScript
template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 1</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `
```
Class
```TypeScript
public name = "Henry From BU";
public hasError = true;
public isSpecial = true;
public highlightColor = "orange"
public titleStyles = {
  color: "blue",
  fontStyle: "italic"
}
```
Output: 
```html
Welcome Henry From BU (Black)
Style Binding 1 (Red)
Style Binding 2 (Orange)
Style Binding 3 (Blue with Italic)
```
---