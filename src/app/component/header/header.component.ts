import { Component, OnInit } from '@angular/core';
//Import
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
//Add
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Variables
  title:string = 'Task Tracker'
  showAddTask!: boolean;
  subscription!: Subscription;

 //FUNCTIONS
  constructor(private uiService: UiService, private router: Router) {
    //Set: Returns true or false (toggle method in UiService Reverses the value)
    this.subscription = this.uiService.onToggle().subscribe
    (value=>this.showAddTask=value);
   }

  //ngOnInit
  ngOnInit(): void {
  }

  //toggleAddTask
  toggleAddTask(){
    // console.log("toggle")
    this.uiService.toggleAddTask();
  }

  //hasRoute
  hasRoute(route:string){
    return this.router.url === route
  }

}
