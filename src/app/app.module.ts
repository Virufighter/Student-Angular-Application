import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudententryComponent } from './studententry/studententry.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { NavbarComponent } from './navbar/navbar.component';
const myroute:Routes=[
  {
    path:"",
    component:StudententryComponent

  },
  {
    path:"view",
    component:StudentviewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudententryComponent,
    StudentviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
