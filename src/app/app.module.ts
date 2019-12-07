import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { StarComponent } from './shared/star.component';

import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
