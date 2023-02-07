import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

//to access two way binding and form
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

// for httpcall of data from server instead of hard code 
import {HttpClientModule} from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';

//declaration array
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    CommonModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
