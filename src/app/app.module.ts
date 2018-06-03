import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginmodalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
