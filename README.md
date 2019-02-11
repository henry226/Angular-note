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
Output:
```html
<!-- Custom HTML Tag -->
<app-test></app-test>
<!-- Class -->
<div class="app-test"></div>
<!-- Attribute -->
<div app-test></div>
```

---

### Interpolation:
Selectors:   
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
Output:
```TypeScript
public name = "Henry From BU";
public siteUrl = window.location.href;
greetUser(){
    return "Hi " + this.name;
}
```

---