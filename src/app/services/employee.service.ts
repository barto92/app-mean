import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly URLAPI = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees = () => {
    return this.http.get(this.URLAPI + "employees");
  };

  postEmployee = (employee: Employee) => {
    return this.http.post(this.URLAPI + "employees", employee);
  };

  putEmployee = (employee: Employee) => {
    return this.http.put(this.URLAPI + "employee/" + employee._id, employee);
  };

  deleteEmployee = (_id: string) => {
    return this.http.delete(this.URLAPI + "employee/" + _id);
  };
}
