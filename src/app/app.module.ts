import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{ ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
