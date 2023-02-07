import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
selector: 'app-test', 
//  templateUrl: './test.component.html',
  //another way to write template
  template:
  `<h2>Welcome {{name}}</h2>, 
  <h2>{{2+3}}</h2> 
  <h2>{{"Welcome" + " " + n2 }}</h2>
  <h2> {{"Anusha name length is " +name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2> {{greetUser()}}</h2> 
  <h2>{{siteurl}}</h2>
  `,
 styles: []
})
export class TestComponent implements OnInit {
//class
public name = 'Anusha';
public n2 = 'Interplation';
public siteurl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }
  //creating a  method 
greetUser(){
  return "Hello"+ " " + this.name;
}

}
