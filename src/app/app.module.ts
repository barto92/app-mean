import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { EmployeesCreateComponent } from "./components/employees-create/employees-create.component";
import { HomeComponent } from "./components/home/home.component";
import { EmployeesEditComponent } from './components/employees-edit/employees-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesCreateComponent,
    HomeComponent,
    EmployeesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
