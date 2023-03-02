import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeeperComponent } from './keeper/keeper.component';
import { ScoreComponent } from './score/score.component';
import { AnnouncersComponent } from './announcers/announcers.component';
import { CasterComponent } from './cast-game/caster/caster.component';
import { CastGameResolver } from './cast-game/caster/cast-game.resolver';
import { LottoComponent } from './lotto/lotto.component';
import { LottoAdminComponent } from './lotto/admin/admin.component';
import { DraftComponent } from './draft/draft.component';
import { SummaryComponent } from './draft/summary/summary.component';
import { DraftAdminComponent } from './draft/admin/admin.component';
import { DraftTickerComponent } from './draft/ticker/ticker.component';


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
  },
  {
    path: 'lotto',
    component: LottoComponent
  },
  {
    path: 'lotto/admin',
    component: LottoAdminComponent
  },
  {
    path: 'draft',
    component: DraftComponent
  },  
  {
    path: 'draft/admin',
    component: DraftAdminComponent
  },
  {
    path: 'draft/ticker',
    component: DraftTickerComponent
  },
  {
    path: 'draft/summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
