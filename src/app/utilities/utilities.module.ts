import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities.component';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  declarations: [
    UtilitiesComponent,
    AnimationComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
