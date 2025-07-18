import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://todof.woopear.fr/api/v1';

  constructor(private http: HttpClient) {}

  creerUser(data: any) {
    return this.http.post(`${this.apiUrl}/user/register`, data);
  }
}
