import { Component } from '@angular/core';

//this decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Hello-world title';
  public name = "Anusha";
  //class binding 
  public classbinding = "text-danger";
  public classbinding2 = "text-special";
  //single class
  public hasError = true;
  public noError = false;
  //objection creation
  public objectcreation = {
   "text-special" : this.hasError,
  " text-danger" : !this.noError,  //noerror is false, giving ! makes true so in website it will trun red
  "text-success" : this.noError
  }
  //true value and flase value
  public objectcreations = {
    "text-special" : !this.hasError,
     "text-danger" : this.noError,
     "text-success" : !this.noError
  }

//style binding
public highlighter = "orange";
//style binding to show it works like condtion too
public hascolor = true;
public hasnocolor = false;
//for multiple styling
public titleStyles = {
  color : "blue" ,
  fontStyle : "italic"

}

//Event Binding
public greeting = "";
public greet = "";
 onClick(event: any) {
console.log(event);
this.greeting = "Welcome to event Binding";
this.greet = event.type;
}

// Template variable
 logMsg(value: any){
console.log(value);
 }


 //Two binding
 public Firstname = "";

 //Structure Directive
 public  displays = true;
 public nodisplay = false;

 //switch case
 public colors = "blue";

 //for loop
 public colours = ["red", "blue", "green", "yellow"];


 //component interaction
 public compname = "Component Interaction";
public mesg = "";

//pipes
public pipes = "Code Evolution";
//object
public person = {
  "First name" : "Anusha ",
  "Last name" : "Arun Kumar"
}
public sentence  = "this a long sentence";
 public date = new Date();

}
