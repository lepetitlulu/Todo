import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  template: `<h1>test</h1>`,
  styleUrl: './create-user.css'
})
export class CreateUser {
  email: string = '';
  password: string= '';
  username: string='';

  constructor(private todoService: TodoService) {}

  createUser(){
    const data = {
      email: this.email,
      password: this.password,
      username: this.username
    };
    this.todoService.creerUser(data).subscribe({
      next: (res) => console.log('user created', res),
      error: (err) => console.error('error', err)
    });
  }
}
