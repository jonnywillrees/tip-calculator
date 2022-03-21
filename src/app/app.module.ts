import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { NumberInputComponent } from './components/number-input/number-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    NumberInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
