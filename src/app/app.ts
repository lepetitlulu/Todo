import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUser } from "../component/create-user/create-user";
import { CreateTask } from "../component/create-task/create-task";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateUser, CreateTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Todo';
}
