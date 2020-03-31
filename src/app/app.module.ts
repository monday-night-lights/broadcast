import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { CountdownModule } from 'ngx-countdown';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { AnnouncerComponent } from './announcer/announcer.component';
import { TeamComponent } from './team/team.component';
import { KeeperComponent } from './keeper/keeper.component';
import { FileService } from './services/file-service';
import { AnnouncersComponent } from './announcers/announcers.component';
import { CasterComponent } from './cast-game/caster/caster.component';
import { CastGameService } from './services/castgame-service';
import { NumberFlipDirective } from './directives/number-flip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    AnnouncerComponent,
    TeamComponent,
    KeeperComponent,
    AnnouncersComponent,
    CasterComponent,
    NumberFlipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CountdownModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpModule, HttpClientModule, FileService, CastGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
