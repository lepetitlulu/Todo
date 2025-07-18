import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class taskService {
  private apiUrl = 'https://todof.woopear.fr/api/v1';
  private http = inject(HttpClient)

  createTask(task: { label: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/task`, task);
  }

  updateTask(taskId: string, label: string) {
    return this.http.put(`${this.apiUrl}/task/${taskId}/label/user`, {
      label: label
    });
  }

  getTask(): Observable <{ data: any[] }> {
    return this.http.get <{ data: any[] }> (`${this.apiUrl}/task`)
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/task/${id}/user`)
  }
}
