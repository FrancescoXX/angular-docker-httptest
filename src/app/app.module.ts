import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { HomeComponent } from './home/home.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent,
    HomeComponent,
    DropdownsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
