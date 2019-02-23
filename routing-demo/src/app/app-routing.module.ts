import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //{ path: '', component:DepartmentListComponent}, // empty path
  { path: '', redirectTo: '/departments', pathMatch: 'full'}, // pathMatch: 'prefix' not useful in this case
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: "**", component: PageNotFoundComponent}  // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent]