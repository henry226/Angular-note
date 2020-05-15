import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plot';
  public name = [1, 2, 3];
  public trace1 = {
    x: [1, 2, 3],
    y: [4, 3, 2],
    type: 'scatter'
  };

  public trace2 = {
    x: [20, 30, 40],
    y: [30, 40, 50],
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter'
  };

  public data: any = [this.trace1, this.trace2];

  public layout = {
    yaxis2: {
      domain: [0.6, 2],
      anchor: 'x2'
    },
    xaxis2: {
      domain: [0.6, 2],
      anchor: 'y2'
    }
  };

  public graph = {
    /*data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}*/
    data: this.data,
    layout: this.layout
};
}
