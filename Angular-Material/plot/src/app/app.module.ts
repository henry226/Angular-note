import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Plotly Via CDN Module
import { PlotlyViaCDNModule } from 'angular-plotly.js';
import { ChildComponent } from './child/child.component';
PlotlyViaCDNModule.plotlyVersion = '1.49.4';
PlotlyViaCDNModule.plotlyBundle = 'basic';
// Plotly Via CDN Module

/* import { PlotlyViaWindowModule } from 'angular-plotly.js';
References: https://github.com/plotly/angular-plotly.js#quick-start
*/

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PlotlyViaCDNModule
    // PlotlyViaWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
