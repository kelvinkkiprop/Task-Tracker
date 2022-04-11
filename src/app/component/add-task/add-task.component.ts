import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
//Add
import { Task } from 'src/app/Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  //Variables
  text?: string;
  day?: string;
  reminder: boolean = false;
  //UI handle
  showAddTask!: boolean;
  subscription!: Subscription;
  //Outputs
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    //Set
    this.subscription = this.uiService.onToggle().subscribe
    (value=>this.showAddTask=value);
   }

  //FUNCTIONS
  ngOnInit(): void {
  }

  //onSubmit
  onSubmit(){
     //validate
     if(!this.text){
      alert('please add a task!');
      return;
    }else if(!this.day){
      alert('please add task day!');
      return;
    }
    //Else
    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    //Emit event to parent
    this.onAddTask.emit(newTask)
    //Reset
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
