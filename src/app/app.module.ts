import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdInputModule, MdSidenavModule, MaterialModule} from '@angular/material';


import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';
import { FotonInputComponent } from './foton-input/foton-input.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FotonEmailComponent } from './foton-email/foton-email.component';




@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    SideBarItemComponent,
    FotonInputComponent,
    FormularioComponent,
    FotonEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdInputModule,
    MdSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
