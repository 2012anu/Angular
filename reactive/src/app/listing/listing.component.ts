import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public departments = [
    {"id" : 1 , "name": "sjdbjka"},
    {"id" : 2 , "name": "sjdbjka"},
    {"id": 3, "name": "sjdbjka"},
    {"id": 4, "name": "sjdbjka"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
