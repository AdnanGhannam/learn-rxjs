import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from "@angular/common/http";
import { TagModule } from "primeng/tag"
import { FormsModule } from '@angular/forms';
import { DropdownModule } from "primeng/dropdown"
import { ButtonModule } from "primeng/button"
import { RippleModule } from "primeng/ripple"
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    TableModule,
    HttpClientModule,
    TagModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
