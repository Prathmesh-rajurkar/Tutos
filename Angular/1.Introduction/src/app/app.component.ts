import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.Introduction';
  isLoggedIn:boolean = false;
  username:string = 'John Doe';
  names:string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  grade:string = 'A';
 }
