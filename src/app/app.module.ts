import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { ListBeerComponent } from './list-beer/list-beer.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBeerComponent,
    ListBeerComponent,
    EditBeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
