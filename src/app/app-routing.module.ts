import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesComponent } from "./components/employees/employees.component";

import { HomeComponent } from "./components/home/home.component";
import { EmployeesCreateComponent } from "./components/employees-create/employees-create.component";
import { EmployeesEditComponent } from "./components/employees-edit/employees-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "employees",
    component: EmployeesComponent
  },
  {
    path: "create-employee",
    component: EmployeesCreateComponent
  },
  {
    path: "employees/edit/:id",
    component: EmployeesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
