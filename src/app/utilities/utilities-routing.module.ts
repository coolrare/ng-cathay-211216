import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { UtilitiesComponent } from './utilities.component';

const routes: Routes = [
  { path: '', component: UtilitiesComponent },
  { path: 'animation', component: AnimationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
