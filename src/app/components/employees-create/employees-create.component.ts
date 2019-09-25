import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "src/app/models/employee";

declare var M: any;

@Component({
  selector: "app-employees-create",
  templateUrl: "./employees-create.component.html",
  styleUrls: ["./employees-create.component.css"]
})
export class EmployeesCreateComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  resetForm = (form?: NgForm) => {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  };

  addEmployee = (form: NgForm) => {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Updated Succesfully" });
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Saved Succesfully" });
      });
    }
  };
}
