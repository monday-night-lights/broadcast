import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeeperComponent } from './keeper/keeper.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
  {
    path: '',
    component: ScoreComponent
  },
  {
      path: 'keeper',
      component: KeeperComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
