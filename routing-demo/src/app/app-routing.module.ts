import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { DepartmentListsComponent } from './department-lists/department-lists.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
//redirectTo property always keeps page in /department path only inorder to avoid pathnotfound
 

const routes: Routes = [
  {path: '' , redirectTo: '/department' , pathMatch: 'full'},
  {path: 'department' , component: DepartmentListsComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: "**" , component: PathNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//creating array to export 
export const routingComponent = [ EmployeeListComponent,
    PathNotFoundComponent,
    DepartmentListsComponent, 
    DepartmentDetailComponent]