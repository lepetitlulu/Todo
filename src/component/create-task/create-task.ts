import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { taskService } from '../../services/task';

@Component({
  selector: 'app-create-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css'
})
export class CreateTask implements OnInit {
  label: string = ''
  taskIdToUpdate: string = ''
  tasks: any[] = []

  constructor(private taskService: taskService) {}

  createTask() {
    const task = {
      label: this.label,
    };

    this.taskService.createTask(task).subscribe({
      next: (res) => {
        console.log('task créee :', res)
        this.label = ''
        this.loadTasks()
      },
      error: (err) => console.error('Erreur création :', err)
    });
  }

  updateLabel() {
    if (!this.taskIdToUpdate || !this.label) return

    this.taskService.updateTask(this.taskIdToUpdate, this.label).subscribe({
      next: (res) => {
        console.log('Label modifié :', res)
        this.label = ''
        this.taskIdToUpdate = ''
        this.loadTasks()
      },
      error: (err) => console.error('Erreur label :', err)
    })
  }
  ngOnInit() {
    this.loadTasks()
  }

  loadTasks() {
    this.taskService.getTask().subscribe({
      next: (res) => {
          this.tasks = res.data
          console.log('tasks reçu:', this.tasks)
        console.log('tasks récupérées :', this.tasks)
      },
      error: (err) => console.error('erreur fetch tasks', err)
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== id)
        console.log('task supprimée', id)
        this.loadTasks()
      },
      error: (err) => console.error('erreur de suppression :', err)
    });
  } 
}
