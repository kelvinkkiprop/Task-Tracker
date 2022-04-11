import { Component, OnInit } from '@angular/core';
//Import
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Variables
  // tasks: Task[] = TASKS
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }


  //FUNCTIONS
  ngOnInit(): void {
    //Set
    // this.tasks = this.taskService.getTasks();//Works fine

    //Using observable
   this.taskService.getTasks().subscribe((tasks) =>this.tasks = tasks);
  }

  //deleteTask
  deleteTask(task: Task){
    //Call service
   this.taskService.deleteTask(task).subscribe(() =>
   (this.tasks = this.tasks.filter(t=>t.id !== task.id)));//Filters task from UI i.e. Add all tasks that was not deleted
  }

  //toggleReminder
  toggleReminder(task: Task){
    //Take task and assign opposite
    task.reminder = !task.reminder;
    // console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe()

  }

  //addTask
  addTask(task: Task){//Task
    // console.log(task)
    //Add and push the value to our tasks list
   this.taskService.addTask(task).subscribe((task) =>(this.tasks.push(task)));
  }


}
