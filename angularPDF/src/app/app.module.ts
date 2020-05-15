import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
