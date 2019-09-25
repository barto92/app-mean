import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-employees-edit",
  templateUrl: "./employees-edit.component.html",
  styleUrls: ["./employees-edit.component.css"]
})
export class EmployeesEditComponent implements OnInit {
  constructor(private _location: Location) {}

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
