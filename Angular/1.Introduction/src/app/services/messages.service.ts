import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = "https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }

  getMessages(): string[] {
    return ['Message 1', 'Message 2', 'Message 3'];
  }
  getTodos() : Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
