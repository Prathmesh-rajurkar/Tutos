import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.Introduction';
  inputText: string = '';

  message: string = 'This is Dangerous Message';
  classes: string = 'danger text-size';
}
