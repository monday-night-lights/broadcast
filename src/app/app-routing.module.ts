import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeeperComponent } from './keeper/keeper.component';
import { ScoreComponent } from './score/score.component';
import { AnnouncersComponent } from './announcers/announcers.component';
import { CasterComponent } from './cast-game/caster/caster.component';
import { CastGameResolver } from './cast-game/caster/cast-game.resolver';


const routes: Routes = [
  {
    path: '',
    component: ScoreComponent
  },
  {
      path: 'keeper',
      component: KeeperComponent
  },
  {
    path: 'announcers',
    component: AnnouncersComponent
  },
  {
    path: 'cast-game',
    component: CasterComponent,
    resolve: {
      results: CastGameResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
