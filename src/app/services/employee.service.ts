import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee";
import { API } from "../cfg/api";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees = () => {
    return this.http.get(API.url + "employees/");
  };

  postEmployee = (employee: Employee) => {
    return this.http.post(API.url + "employees/", employee);
  };

  putEmployee = (employee: Employee) => {
    return this.http.put(API.url + "employees/" + employee._id, employee);
  };

  deleteEmployee = (_id: string) => {
    return this.http.delete(API.url + "employees/" + _id);
  };
}
