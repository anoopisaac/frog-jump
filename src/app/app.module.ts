import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArchipelagoComponent } from './archipelago/archipelago.component';
import { GrabGameComponent } from './grab-game/grab-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchipelagoComponent,
    GrabGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
