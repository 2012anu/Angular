import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { reduce } from 'rxjs';

//here html component is rendered
@Component({
selector: 'app-tester', 
templateUrl: 'test.component.html',
 styles: [``

 ]
})
export class TestComponent implements OnInit {
//component interaction
@Input() public parentData: any;
//or it can be written
//@Input('parentData') public compname; 

//output
@Output() public childEvent = new EventEmitter();

constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('code evoluation');
  }
  
}
