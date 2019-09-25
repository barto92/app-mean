import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
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
