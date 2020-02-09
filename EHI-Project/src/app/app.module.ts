import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RegexValidatorDirective } from './directives/regex-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    RegexValidatorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
