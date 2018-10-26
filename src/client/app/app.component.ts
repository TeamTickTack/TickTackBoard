import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public message;
    public posts: Post[] = [];
    public tickerInfos: TickerInfo[] = [];

    constructor() {
      this.test();
    }

    public addPost() {
      this.posts.unshift(new Post(this.message));
      this.message = "";
    }

    public test() {
      const inf = new PlayerTickerInfo();
      inf.type = "player";
      inf.name = "Max Muster";
      this.tickerInfos.push(inf);
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

export class TickerInfo {
    type: string;
}

export class PlayerTickerInfo extends TickerInfo {
    name: string;
    pictureUrl: string
}
