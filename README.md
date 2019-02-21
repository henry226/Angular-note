# Angular Note
### Component
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

### Interpolation
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
Class:
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

### Style Binding
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
Class:
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

### Event Binding
Template:   
```TypeScript
template: `
  <h2>
    Welcome {{name}}
  </h2>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome to Henry's Angular App">Greet</button>
  {{greeting}}
  `
```
Class:
```TypeScript
public name = "Henry From BU";
public greeting ="";

constructor() { }

ngOnInit() {
}

onClick(event){
  console.log(event);
  this.greeting = event.type;
}
```

---

### Template Reference
Template:   
```TypeScript
template: `
  <h2>Welcome {{name}}</h2>
  <input #myInput type="text">  
  <button (click)="logMessage(myInput)">Log</button>
  `
```
Class:
```TypeScript
public name = "Henry From BU";
public greeting ="";

constructor() { }

ngOnInit() {
}

logMessage(value){
  console.log(value)
}
```

---

### Two Way Binding
Template:   
```TypeScript
template: `
  <input [(ngModel)]="name" type="text">
  {{name}}
  `
```
Class:
```TypeScript
public name = "";

constructor() { }

ngOnInit() {
}

logMessage(value){
  console.log(value)
}
```
app.module.ts:
```typeScript
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    FormsModule
]
```

---

### ngIf Directive
Template:   
```TypeScript
template: `
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
    <h2>Name shown</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>hidden</h2>
  </ng-template>
  `
```
Class:
```TypeScript
displayName = true;
constructor() { }

ngOnInit() {
}
```

---

### ngSwitch Directive
Template:   
```TypeScript
template: `
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red<</div>
    <div *ngSwitchCase="'blue'">You picked blue</div>
    <div *ngSwitchCase="'green'">You picked green</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>
  `
```
Class:
```TypeScript
public color = "green";
constructor() { }

ngOnInit() {
}
```

---

### ngFor Directive
Template:   
```TypeScript
template: `
  <div *ngFor="let color of colors; index as i">
    <h2>{{i+1}} {{color}}</h2>
  </div>

  <div *ngFor="let color of colors; last as l; first as f">
    <h2>first:{{f}} last:{{l}}</h2>
    <h2>{{color}}</h2>
  </div>
  `
```
Class:
```TypeScript
public colors = ["red", "blue", "green", "yellow"];
constructor() { }

ngOnInit() {
}
```
Output:
```html
1 red
2 blue
3 green
4 yellow
first:true last:false
red
first:false last:false
blue
first:false last:false
green
first:false last:true
yellow
```

---

### Component Interaction
Template:   
```TypeScript
template: `
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `
```
Class:
```TypeScript
// get data from the parent component
@Input('parentData') public name;
// send data from child component to parent component
@Output() public childEvent = new EventEmitter();

constructor() { }

ngOnInit() {
}

fireEvent(){
  this.childEvent.emit("Hey Henry");
}
```
app.component.html:
```html
<app-test (childEvent)="message=$event" [parentData]="name"></app-test>
```
app.component.ts:
```ts
title = 'app';
public name = "Henry";
public message = "";
```

---

### Pipes
Template:   
```TypeScript
template: `
  <h2>{{ name }}</h2>
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name | slice:2:4 }}</h2>
  <h2>{{ person | json}}</h2>

  <h2>{{ 5.678 | number: '1.2-3'}}</h2>
  <h2>{{ 5.678 | number: '3.4-5'}}</h2>
  <h2>{{ 5.678 | number: '3.1-2'}}</h2>

  <h2>{{ 0.25 | percent }}</h2>
  <h2> {{ 0.25 | currency: 'EUR' }}</h2>

  <h2>{{ date }}</h2>
  <h2>{{ date | date:'short' }}</h2>
  <h2>{{ date | date:'shortDate' }}</h2>
  <h2>{{ date | date:'shortTime' }}</h2>
  `
```
Class:
```TypeScript
public name = "Henry";
public message = "Welcome to Henry's Website";
public person = {
  "firstName" : "John",
  "lastName" : "Doe"
}

public date = new Date();

constructor() { }

ngOnInit() {
}
```
Output:
```html
Henry
henry
HENRY
Welcome To Henry's Website
nr
{ "firstName": "John", "lastName": "Doe" }
5.678
005.6780
005.68
25%
€0.25
Thu Feb 21 2019 11:41:24 GMT-0500 (Eastern Standard Time)
2/21/19, 11:41 AM
2/21/19
11:41 AM
```

---