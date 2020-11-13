import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SethealthModule } from '@sethealth/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SethealthModule.forRoot({
      key: "pub_xxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=",
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
