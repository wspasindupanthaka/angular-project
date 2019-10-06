 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server/server.component';


import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';

import {FormsModule} from '@angular/forms';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    ErrorAlertComponent,
    DataBindingAssignmentComponent,
    DirectivesAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
