import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
selector: 'app-test', 
//  templateUrl: './test.component.html',
  //another way to write template
  template:
  `<h2>Welcome {{name}}</h2>, 
 <input type="text" value = "Property binding " [id] = 'testid'> 
 <input type="text" value = "Interpolation" id = '{{testid}}'>
 <input disabled = "" type="text" value = "With out binding if we use disable it will be only disabled." id = '{{testid}}'>
 <input  [disabled]= "true" type="text" value = "[Disabled] = true so not able to access" id = '{{testid}}'>
 <input  [disabled]= "false" type="text" value = "[Disabled] = false so able to access" id = '{{testid}}'>
 <input [disabled] = "isDisabled" type="text" value = "calling through decalration" id = '{{testid}}'>
 <input [disabled] = "isNotDisabled" type="text" value = "calling through decalration" id = '{{testid}}'>
 <input bind-disabled = "isDisabled" type="text" value = "Another syntax i.e., bind-disabled" id = '{{testid}}'>
 `,
 styles: []
})
export class TestComponent implements OnInit {
//class
public name = 'Anusha';
public testid = "myid"; //this id is eq for property binding
public isDisabled = true;  
public isNotDisabled = false;
constructor() { }

  ngOnInit(): void {
  }

}
