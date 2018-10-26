import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/info-cards/player/player.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MatchComponent } from './components/match/match.component';
import { ArenaComponent } from './components/info-cards/arena/arena.component';
 
library.add(fas, far);

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MatchComponent,
    ArenaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule      
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
