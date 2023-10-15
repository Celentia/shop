import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer as productsReducer } from './products.reducer';
import { ProductsEffects } from './products.effects';
import { productsFeatureKey } from '../app.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsStoreModule {}
