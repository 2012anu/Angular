import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute , ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-lists',
  templateUrl: './department-lists.component.html',
  styleUrls: ['./department-lists.component.scss']
})
export class DepartmentListsComponent implements OnInit {

public selectedId : any;
// we r retrive th id parameter using paramap observable
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id ;
   });
  }

  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "node"},
    {"id": 3 , "name": "MongoDb"},
    {"id": 4 , "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"} 
  ]
  constructor(private router:Router , private route: ActivatedRoute) { }
   
  onSelect(department: { id: any; }){
    // this below one is absoulte path
 this.router.navigate(['/departments', department.id]);
  
//this below romakes wt ever the id this relative to makes append to current to department id
//  this.router.navigate([department.id], {relativeTo: this.route})
}

  //this method returns true if the selected id matches with department id
  isSelected(department: any){
return department.id === this.selectedId;
  }
}
