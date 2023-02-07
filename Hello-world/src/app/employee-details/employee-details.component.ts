import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
  // public employees = [
  //   { "id": 1 , "name": "Anusha" , "age": 22},
  //   { "id": 2 , "name": "Anu" , "age": 23},
  //   { "id": 3 , "name": "nusha", "age": 32},
  //   { "id": 4 , "name": "usha" , "age": 42}
  // ];


  //creating employee array, 
  //remember whn there is not data type thn alwyas use:anay[]
  public employees:any[] = [];
  // public errorMsg:any;
  

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployeees()
    .subscribe(data => this.employees = data,
      // error => this.errorMsg = error
      );

    // this.employees  = data will assigned to data 
    
  }
}
