import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesComponent } from "./components/employees/employees.component";

import { HomeComponent } from "./components/home/home.component";
import { EmployeesCreateComponent } from "./components/employees-create/employees-create.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "employees",
    component: EmployeesComponent
  },
  {
    path: "create-employee",
    component: EmployeesCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
