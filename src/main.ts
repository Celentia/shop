import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ProductsRoutingModule } from './app/products/products-routing.module';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(ProductsRoutingModule), provideRouter(routes, withComponentInputBinding())]
}).catch(e => console.error(e));
