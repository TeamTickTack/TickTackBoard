import { Component } from '@angular/core';
import { AppService } from './app.service';

// import { KontextInfoDto } from '../../server/ticker/dtos/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public message;
    public posts: Post[] = [];
    public tickerInfos: KontextInfoDto[] = [];

    private timeoutId = 0;

    constructor(private appService: AppService) {
      
    }

    public addPost() {
      this.posts.unshift(new Post(this.message));
      this.message = "";
    }

    public processMessage() {
       // stop previous timeouts
       clearTimeout(this.timeoutId)
       this.timeoutId = setTimeout(() => {
           this.appService.processMessage({ message: this.message }).subscribe(data => {
              this.tickerInfos = data;
           });
        }, 100);
    }
}

export class Post {
    constructor(message: string) {
      this.message = message;
      this.date = new Date();
    }
    date: Date;
    message: string;
}
