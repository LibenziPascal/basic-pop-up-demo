import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopUpModule } from './pop-up/pop-up.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PopUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
