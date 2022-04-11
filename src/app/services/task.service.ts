import { Injectable } from '@angular/core';
//Imports
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Add
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

//Global variables
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Variables
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }


  //FUNCTIONS
  // getTasks():Task[]{//Works fine
  //   return TASKS;
  // }

  //getTasks
  getTasks():Observable<Task[]>{//Make it Observable
    // const tasks = of(TASKS);//Convert to Observable
    // return tasks;
    //Fetch data
    return this.http.get<Task[]>(this.apiUrl);
  }


  //deleteTask
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

   //updateTaskReminder
   updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);//Pass data
  }

  //addTask
  addTask(task: Task): Observable<Task>{;
   return this.http.post<Task>(this.apiUrl, task, httpOptions);//Pass data
 }

}
