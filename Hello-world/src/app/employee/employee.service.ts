import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IEmployee} from '../employeee';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
@Injectable() 

export class EmployeeService {

  //http is a local varibale and HttpClient is instance varibale
  constructor(private http: HttpClient) { }

  private _url: string  = "/assets/data/employees.json"
   //we make get request in get method
getEmployeees(): Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url)
                  // .catch(this.errorHandler);
}
//  errorHandler(error: HttpErrorResponse){
//   return Observable.throw(error.message || "Server Error");
//  }

}
