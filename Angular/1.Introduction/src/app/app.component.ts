import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService]
})
export class AppComponent implements OnInit {
  messages: string[];
  posts: any[] = [];
  constructor(private messagesService: MessagesService) {
    this.messages = this.messagesService.getMessages();
  }
  ngOnInit() {
    this.messagesService.getTodos().subscribe({
      next: (data) => {
        this.posts = data;
        // console.log(data);
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
      }
    });
  }
  title = '1.Introduction';
 }
