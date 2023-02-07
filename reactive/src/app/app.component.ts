import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
// import {ajax} from 'rxjs/ajax';
// import {filter, map , catchError} from 'rxjs/operators';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
// title = 'Reactive Programing concept';
// numbers : number[] = [];
// val1 : number = 0;
// fliteredNumbers : number[] = [];
// val2 : number = 0;
// processedNumbers : number[] = [];
// val3 : number = 0;
// apiMessage : string | undefined;
// counter : number = 0;
// ngOnInit () {
//   const numbers$ = from([1,2,3,4,5,6,7,8,9,10]);
//   const observer = {
//     next: (num: number) => {this.numbers.push(num); this.val1 += num},
//     error : (err:any) => console.log("Obsevation complated")
//   };
//    numbers$.subscribe(observer);
//    const filterFn = filter( (num:number) => num >5);
//    const filteredNumbers = filterFn(numbers$);
//    filteredNumbers.subscribe((num : number) => {this.fliteredNumbers.push(num); this.val2 += num});
//    const processedNumbers$ = numbers$.pipe(filterFn, mapFn);
//    processedNumbers$.subscribe(( num : number) => {this.processedNumbers.push(num); this.val3 += num});
//    const api$ = ajax ({
//          url: 'https://httpbin.org/delay/1', 
//          method: 'POST', 
//          headers: {'Content-Type': 'application/text' }, 
//          body: "Hello"
//    });
//    api$.subscribe(res => this.apiMessage = res.response.data ); 
//    const clickEvent$ = from Event(document.getElementById('counter'), 'click'); 
//    clickEvent$.subscribe( () => this.counter++ );
//   }
// }


