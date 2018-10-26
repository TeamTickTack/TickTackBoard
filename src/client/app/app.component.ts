import { Component } from '@angular/core';
import { AppService } from './app.service';

import { KontextInfoDto } from '../../server/ticker/dtos/kontextInfo.dto';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public message: string;
    public suggestedText: string;
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
        this.autocomplete(this.message);
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(() => {
            this.appService.processMessage({ message: this.message }).subscribe(data => {
                this.tickerInfos = data;
            });
        }, 100);
    }


    private playerInfo = ["Wölfli", "Marco Wölfli" "Peter", "Lukas"];

    private autocomplete(message: string) {
        const lastWord = this.getLastWord(message);
        this.suggestedText = "";
        if (lastWord.length > 0)
            if (!this.playerInfo.includes(lastWord))
                this.playerInfo.forEach(player => {
                    if (player.toLowerCase().startsWith(lastWord.toLowerCase()))
                        this.suggestedText = player;

                })
    }
    private getLastWord(message): string {
        const parts = message.split(' ');
        return parts[parts.length - 1];
    }

    public applyAutocompte(event: Event) {
        event.stopPropagation();
        event.preventDefault();
        const lastWord = this.getLastWord(this.message);

        this.message = this.message.replace(new RegExp(lastWord + '$'), this.suggestedText);
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
