import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { EmployeesCreateComponent } from './components/employees-create/employees-create.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, EmployeesCreateComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
