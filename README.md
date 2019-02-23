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

### Service
employee-list.component.ts 
```TypeScript
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service'

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
```
employee-detail.component.ts 
```TypeScript
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service'

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
  }

}
```
employee.service.ts
```typeScript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return [
      {"id": 1, "name": "Andrew", "age": 33},
      {"id": 2, "name": "Brandon", "age": 25},
      {"id": 3, "name": "Christina", "age": 26},
      {"id": 4, "name": "Elena", "age": 28}
    ];
  }
}
```
Added injector in app.module.ts
```ts
// Register with injector
providers: [EmployeeService],
```
Output
```html
Employee List
Andrew
Brandon
Christina
Elena
Employee Detail
1. Andrew - 33
2. Brandon - 25
3. Christina - 26
4. Elena - 28
```

---

### Fetching data using HTTP
employees.json
```json
[
  {"id": 1, "name": "Andrew", "age": 30},
  {"id": 2, "name": "Brandon", "age": 25},
  {"id": 3, "name": "Christina", "age": 26},
  {"id": 4, "name": "Elena", "age": 33},
  {"id": 5, "name": "Felicia", "age": 25}
]
```
employee.ts
```ts
export interface IEmployee {
    id: number,
    name: string,
    age: number
}
```
added to app.module.ts
```ts
// fetch data using http
import { HttpClientModule } from '@angular/common/http'

imports: [
    BrowserModule,
    AppRoutingModule,
    // fetch data using http
    HttpClientModule
  ]
```
employee.service.ts
```typeScript
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
```
employee-list.component.ts
```ts
public employees = [];

constructor(private _employeeService: EmployeeService) { }

ngOnInit() {
  this._employeeService.getEmployee()
      .subscribe(data => this.employees = data);
}
```
employee-detail.component.ts
```ts
public employees = [];

constructor(private _employeeService: EmployeeService) { }

ngOnInit() {
  this._employeeService.getEmployee()
      .subscribe(data => this.employees = data);
}
```
Output
```html
Employee List
Andrew
Brandon
Christina
Elena
Felicia
Employee Detail
1. Andrew - 30
2. Brandon - 25
3. Christina - 26
4. Elena - 33
5. Felicia - 25
```

---

### HTTP error handling
employees.service.ts
```ts
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

private _url: string = "/assets/data/employees.json";

constructor(private http: HttpClient) { }

getEmployee(): Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url)
                  .pipe(catchError(this.errorHandler));
}

errorHandler(error: HttpErrorResponse){
  return Observable.throw(error.message || "Server Error");
}
```
employee.component.ts
```ts
export class EmployeeDetailComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
    this._employeeService.getEmployee()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
  }
}
```
Output
```html
Employee List
TypeError: rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable.throw is not a function
Employee Detail
TypeError: rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable.throw is not a function
```

---

### Routing and navigation
app-routing.module.ts
```ts
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeeListComponent}
];

export const routingComponents = [DepartmentListComponent, EmployeeListComponent]
```
app.module.ts
```ts
import { AppRoutingModule, routingComponents } from './app-routing.module';

declarations: [
  AppComponent,
  routingComponents // add routing components
],
```
app.component.html
```html
<nav>
  <a routerLink="/departments" routerLinkActive="active">Departments</a> <br />
  <a routerLink="/employees">Employees</a>
</nav>

<router-outlet></router-outlet>
<!-- Routed views go here -->
```

---

### Wildcard route and redirection route
app-routing.module.ts
```ts
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{ path: '', component:DepartmentListComponent}, // empty path
  { path: '', redirectTo: '/departments', pathMatch: 'full'}, // pathMatch: 'prefix' not useful in this case
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: "**", component: PageNotFoundComponent}  // wildcard route
];

export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent]
```
app.module.ts
```ts
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

declarations: [
  AppComponent,
  routingComponents,
  PageNotFoundComponent
],
```

---

### Route Parameters
app-routing.module.ts
```ts
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  ...
  { path: 'departments/:id', component:DepartmentDetailComponent},
  ...
];

export const routingComponents = [DepartmentListComponent, 
                                  EmployeeListComponent, 
                                  PageNotFoundComponent,
                                  DepartmentDetailComponent]
```
department-list-component.ts
```ts
template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `

export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MangoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}
```
department-list-component.ts
```ts
template: `
    <h3>You selected deaprtment with id = {{departmentId}}</h3>
  `

export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }
  
}
```

---

### ParamMap Observable
Template
```ts
template: `
    <h3>You selected deaprtment with id = {{departmentId}}</h3>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
  `
```
Class
```ts
ngOnInit() {
  /*let id = parseInt(this.route.snapshot.paramMap.get('id'));
  this.departmentId = id;*/
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.departmentId = id;
  });
}

goPrevious(){
  let previousId = this.departmentId - 1;
  this.router.navigate(['/departments', previousId]);
}

goNext(){
  let nextId = this.departmentId + 1;
  this.router.navigate(['/departments', nextId]);
}
```

---

### Optional Route parameters
department-detail.component.ts
```ts
template: `
    <h3>You selected deaprtment with id = {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous </a>
    <a (click)="goNext()">Next </a>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `

gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['departments', {id: selectedId}]);
}
```
department-list.component.ts
```ts
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `

constructor(private router: Router, private route: ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.selectedId = id;
  });
}

isSelected(department){
  return department.id === this.selectedId;
}
```

---