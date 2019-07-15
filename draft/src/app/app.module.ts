import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppComponent } from './app.component';
import { Player } from './Player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
