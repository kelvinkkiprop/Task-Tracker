import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //Variables
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  //FUNCTIONS
  constructor() { }

  //toggleAddTask
  toggleAddTask():void{
    //Inverse value and parse to our subject
    //Note: Subject is a special type of Observable that allows values to be multicasted to many Observers
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //onToggle
  onToggle():Observable<any>{//Call after toggle
    return this.subject.asObservable();
  }

}
