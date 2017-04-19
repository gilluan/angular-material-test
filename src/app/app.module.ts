import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdInputModule, MdSidenavModule, MaterialModule} from '@angular/material';
import {Md2AccordionModule} from 'md2-accordion/accordion';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdInputModule,
    MdSidenavModule,
    Md2AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
