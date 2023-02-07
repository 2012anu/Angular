import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

//emlyee
// public employees = [
//   { "id": 1 , "name": "Anusha" , "age": 22},
//   { "id": 2 , "name": "Anu" , "age": 23},
//   { "id": 3 , "name": "nusha", "age": 32},
//   { "id": 4 , "name": "usha" , "age": 42}
// ];

public employees:any[] = [];
// public errorMsg:any;
  constructor( private _employeeService: EmployeeService) { }


  ngOnInit(): void {
    this._employeeService.getEmployeees()
    .subscribe(data => this.employees = data
      // error => this.errorMsg = error
      );
  }

}
