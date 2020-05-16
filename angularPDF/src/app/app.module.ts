import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FileManagerModule,
  NavigationPaneService,
  ToolbarService,
  DetailsViewService
} from '@syncfusion/ej2-angular-filemanager';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule,
  ],
  providers: [NavigationPaneService, ToolbarService, DetailsViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
