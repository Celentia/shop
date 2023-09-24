import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ProductsRoutingModule } from './app/products/products-routing.module';
import { httpInterceptorProviders } from './app/core/interceptors';
import { CartRoutingModule } from './app/cart/cart-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ProductsRoutingModule, CartRoutingModule, HttpClientModule),
    provideRouter(routes, withComponentInputBinding()),
    httpInterceptorProviders
  ]
}).catch(e => console.error(e));
