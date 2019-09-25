import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "src/app/models/employee";

declare var M: any;

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

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
        this.getEmployees();
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Saved Succesfully" });
        this.getEmployees();
      });
    }
  };

  getEmployees = () => {
    this.employeeService.getEmployees().subscribe(res => {
      this.employeeService.employees = res as Employee[];
    });
  };

  editEmployee = (employee: Employee) => {
    this.employeeService.selectedEmployee = employee;
  };

  deleteEmployee = (_id: string) => {
    this.employeeService.deleteEmployee(_id).subscribe(res => {
      M.toast({ html: "Deleted Succesfully" });
      this.getEmployees();
    });
  };
}
