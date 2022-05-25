import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from './product/product.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import {ProductCardComponent} from './product-card/product-card.component';
import {SortPipe} from './pipes/sort.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    ProductComponent,
    MainMenuComponent,
    ProductCardComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
