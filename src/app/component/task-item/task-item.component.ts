import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//Import
import { faTimes } from '@fortawesome/free-solid-svg-icons'
//Add
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  //Inputs
  @Input() task?:Task
  //Outputs
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter()

  //Variables
  faTimes = faTimes;

  constructor() { }

  //FUNCTIONS
  ngOnInit(): void {
  }

  //onDelete
  onDelete(task:any){
    // console.log("onDelete"+task)
    //Emit task i.e call deleteTask method in task.component (not task-item component)
    this.onDeleteTask.emit(task);
  }

  //onToggle
  onToggle(task:any){
    //Emit
    this.onToggleReminder.emit(task);
  }


}
