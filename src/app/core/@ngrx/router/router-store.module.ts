import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { RouterEffects } from './router.effects';
import { routerFeatureKey } from '../app.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(routerFeatureKey, routerReducer),
    EffectsModule.forFeature([RouterEffects])
  ]
})
export class RouterStoreModule {}
