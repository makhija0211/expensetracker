import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{ ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
